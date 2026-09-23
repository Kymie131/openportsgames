import type { ReactNode } from "react";

export function DocPage({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-10">{children}</div>;
}

export function DocHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="max-w-2xl text-sm leading-6 text-muted">{subtitle}</p>
    </header>
  );
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex max-w-2xl flex-col gap-3">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export function DocParagraph({ children }: { children: ReactNode }) {
  return <p className="text-sm leading-6 text-muted">{children}</p>;
}

export function DocList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-muted">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function DocCredits({ items }: { items: { name: string; role: string }[] }) {
  return (
    <ul className="flex flex-col gap-2 text-sm leading-6">
      {items.map((member) => (
        <li
          key={member.name}
          className="flex items-baseline justify-between gap-4 border-b border-border pb-2 last:border-0"
        >
          <span className="font-medium text-foreground">{member.name}</span>
          <span className="text-muted">{member.role}</span>
        </li>
      ))}
    </ul>
  );
}
