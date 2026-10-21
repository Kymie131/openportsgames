"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import {
  WORLD_WIDTH,
  clampDropX,
  colorForLevel,
  createWorld,
  dropShape,
  radiusForLevel,
  randomSpawnLevel,
  stepWorld,
  symbolForLevel,
  type MergeWorld,
} from "./merge-engine";

type Phase = "ready" | "playing" | "over";

const AIM_STEP = 14;
const BEST_STORAGE_KEY = "opg-merge-best";

function readBest(): number {
  if (typeof window === "undefined") return 0;
  try {
    const parsed = Number.parseInt(window.localStorage.getItem(BEST_STORAGE_KEY) ?? "", 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  } catch {
    return 0;
  }
}

function writeBest(value: number): void {
  try {
    window.localStorage.setItem(BEST_STORAGE_KEY, String(value));
  } catch {
    return;
  }
}

function pointerToWorldX(canvas: HTMLCanvasElement, clientX: number): number | null {
  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0) return null;
  return ((clientX - rect.left) / rect.width) * WORLD_WIDTH;
}

function traceRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawShape(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  level: number,
): void {
  const r = Math.max(2, radius - 1);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = colorForLevel(level);
  ctx.fill();
  ctx.lineWidth = Math.max(1, r * 0.1);
  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.stroke();

  ctx.fillStyle = "rgba(15,15,25,0.78)";
  ctx.font = `700 ${Math.max(9, r * 0.85)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(symbolForLevel(level), x, y + r * 0.04);
}

export function MergeGame() {
  const t = useT();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const worldRef = useRef<MergeWorld | null>(null);
  const aimRef = useRef(WORLD_WIDTH / 2);
  const nextLevelRef = useRef(0);
  const phaseRef = useRef<Phase>("ready");
  const pressedRef = useRef(false);
  const lastRef = useRef<number | null>(null);
  const scoreRef = useRef(0);
  const bestRef = useRef(0);
  const bootRef = useRef(false);

  const [phase, setPhase] = useState<Phase>("ready");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [nextLevel, setNextLevel] = useState(0);

  if (worldRef.current === null) {
    worldRef.current = createWorld();
  }

  const start = useCallback(() => {
    const storedBest = readBest();
    worldRef.current = createWorld(storedBest);
    nextLevelRef.current = randomSpawnLevel();
    aimRef.current = WORLD_WIDTH / 2;
    lastRef.current = null;
    pressedRef.current = false;
    scoreRef.current = 0;
    bestRef.current = storedBest;
    setNextLevel(nextLevelRef.current);
    setScore(0);
    setBest(storedBest);
    phaseRef.current = "playing";
    setPhase("playing");
  }, []);

  const drop = useCallback(() => {
    if (phaseRef.current !== "playing") return;
    const world = worldRef.current;
    if (!world) return;
    const body = dropShape(world, aimRef.current, nextLevelRef.current);
    if (!body) return;
    nextLevelRef.current = randomSpawnLevel();
    setNextLevel(nextLevelRef.current);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    if (cssWidth === 0 || cssHeight === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const pixelWidth = Math.round(cssWidth * dpr);
    const pixelHeight = Math.round(cssHeight * dpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const scale = cssWidth / WORLD_WIDTH;
    const world = worldRef.current;

    ctx.fillStyle = "rgba(128,128,128,0.06)";
    traceRoundRect(ctx, 1, 1, cssWidth - 2, cssHeight - 2, 14);
    ctx.fill();

    if (world) {
      const lineY = world.deadLine * scale;
      ctx.save();
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = "rgba(239,68,68,0.55)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(6, lineY);
      ctx.lineTo(cssWidth - 6, lineY);
      ctx.stroke();
      ctx.restore();

      for (const body of world.bodies) {
        drawShape(ctx, body.x * scale, body.y * scale, body.radius * scale, body.level);
      }

      if (phaseRef.current !== "over") {
        const previewRadius = radiusForLevel(nextLevelRef.current) * scale;
        const aimX = clampDropX(aimRef.current, nextLevelRef.current, world) * scale;
        ctx.save();
        ctx.setLineDash([4, 8]);
        ctx.strokeStyle = "rgba(128,128,128,0.45)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(aimX, previewRadius * 2 + 4);
        ctx.lineTo(aimX, cssHeight - 6);
        ctx.stroke();
        ctx.restore();

        ctx.globalAlpha = 0.55;
        drawShape(ctx, aimX, previewRadius + 2, previewRadius, nextLevelRef.current);
        ctx.globalAlpha = 1;
      }
    }

    ctx.strokeStyle = "rgba(128,128,128,0.35)";
    ctx.lineWidth = 2;
    traceRoundRect(ctx, 1, 1, cssWidth - 2, cssHeight - 2, 14);
    ctx.stroke();
  }, []);

  useEffect(() => {
    let frame = 0;
    const loop = (time: number) => {
      const world = worldRef.current;
      const previous = lastRef.current;
      lastRef.current = time;
      const dt = previous === null ? 0 : (time - previous) / 1000;

      if (!bootRef.current) {
        bootRef.current = true;
        const storedBest = readBest();
        if (world) world.best = storedBest;
        bestRef.current = storedBest;
        setBest(storedBest);
        const level = randomSpawnLevel();
        nextLevelRef.current = level;
        setNextLevel(level);
      }

      if (world && phaseRef.current === "playing") {
        stepWorld(world, dt);
        if (world.score !== scoreRef.current) {
          scoreRef.current = world.score;
          setScore(world.score);
        }
        if (world.best !== bestRef.current) {
          bestRef.current = world.best;
          setBest(world.best);
        }
        if (world.gameOver) {
          phaseRef.current = "over";
          setPhase("over");
          pressedRef.current = false;
          writeBest(world.best);
        }
      }

      draw();
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(frame);
  }, [draw]);

  useEffect(() => {
    const isInsideCanvas = (node: EventTarget | null): boolean => {
      const canvas = canvasRef.current;
      return !!canvas && node instanceof Node && canvas.contains(node);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (phaseRef.current !== "playing") return;
      if (!pressedRef.current && !isInsideCanvas(event.target)) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const x = pointerToWorldX(canvas, event.clientX);
      if (x !== null) aimRef.current = x;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (phaseRef.current !== "playing" || !isInsideCanvas(event.target)) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const x = pointerToWorldX(canvas, event.clientX);
      if (x === null) return;
      pressedRef.current = true;
      aimRef.current = x;
    };

    const onPointerUp = () => {
      if (!pressedRef.current) return;
      pressedRef.current = false;
      drop();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (phaseRef.current !== "playing") return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      if (event.key === "ArrowLeft") {
        aimRef.current -= AIM_STEP;
        event.preventDefault();
      } else if (event.key === "ArrowRight") {
        aimRef.current += AIM_STEP;
        event.preventDefault();
      } else if (event.key === " " || event.key === "ArrowDown" || event.key === "Enter") {
        drop();
        event.preventDefault();
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drop]);

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">{t.game.title}</h1>
        <p className="text-sm text-muted">{t.game.subtitle}</p>
      </header>

      <div className="flex items-center justify-between gap-3">
        <dl className="flex gap-5">
          <div className="flex flex-col">
            <dt className="text-xs uppercase tracking-wide text-muted">{t.game.score}</dt>
            <dd className="text-lg font-semibold tabular-nums">{score}</dd>
          </div>
          <div className="flex flex-col">
            <dt className="text-xs uppercase tracking-wide text-muted">{t.game.best}</dt>
            <dd className="text-lg font-semibold tabular-nums">{best}</dd>
          </div>
        </dl>
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wide text-muted">{t.game.next}</span>
          <span
            className="flex size-8 items-center justify-center rounded-full text-xs font-bold text-[#0f0f19]"
            style={{ backgroundColor: colorForLevel(nextLevel) }}
            aria-hidden="true"
          >
            {symbolForLevel(nextLevel)}
          </span>
        </div>
      </div>

      <div className="relative mx-auto aspect-[360/480] w-full max-w-[380px] touch-none select-none">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={t.game.title}
          className="h-full w-full touch-none"
        />
        {phase !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-background/80 p-6 text-center backdrop-blur-sm">
            {phase === "ready" ? (
              <>
                <p className="text-sm text-muted">{t.game.howTo}</p>
                <Button type="button" onClick={start}>
                  {t.game.play}
                </Button>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold">{t.game.gameOver}</p>
                <p className="text-sm text-muted">{t.game.gameOverBody}</p>
                <p className="text-sm">
                  {t.game.score}: <span className="font-semibold tabular-nums">{score}</span>
                </p>
                <Button type="button" onClick={start}>
                  {t.game.restart}
                </Button>
              </>
            )}
          </div>
        )}
      </div>

      <p className="text-center text-xs text-muted">{t.game.controls}</p>
    </div>
  );
}
