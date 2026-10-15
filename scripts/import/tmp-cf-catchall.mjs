const TOKEN = process.argv[2];
const BASE = "https://api.cloudflare.com/client/v4";
const H = { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" };
const ZONE = "178dc2e4549a2dc25629a7f4cbc590f1";

async function call(method, path, body) {
  const res = await fetch(`${BASE}${path}`, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  return { status: res.status, json: await res.json().catch(() => ({})) };
}

const phase = "http_request_dynamic_redirect";

// Catch-all: any path that is not /en, /es, a system path, or the language chooser.
const excludePaths = [
  "/",
  "/sitemap.xml",
  "/robots.txt",
  "/favicon.ico",
  "/icon.png",
  "/icon.svg",
  "/apple-icon.png",
  "/opengraph-image.png",
  "/_headers",
];
const rule = {
  description: "legacy paths -> /en (catch-all)",
  expression:
    `(not http.request.uri.path matches "^/(en|es|_next|api|logos)(/|$)") and ` +
    `(not http.request.uri.path in {${excludePaths.map((p) => `"${p}"`).join(" ")}})`,
  action: "redirect",
  action_parameters: {
    from_value: {
      status_code: 301,
      target_url: { expression: `concat("https://openportsgames.com/en", http.request.uri.path)` },
      preserve_query_string: true,
    },
  },
  enabled: true,
};

const put = await call("PUT", `/zones/${ZONE}/rulesets/phases/${phase}/entrypoint`, { rules: [rule] });
console.log("PUT:", put.status, JSON.stringify(put.json.errors ?? `${put.json.result?.rules?.length} rule(s)`));
if (put.status !== 200) { console.log(JSON.stringify(put.json, null, 2)); process.exit(1); }
