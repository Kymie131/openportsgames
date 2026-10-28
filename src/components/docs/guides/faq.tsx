import type { Messages } from "@/lib/i18n/dictionaries";

export function FaqGuide({ messages }: { messages: Messages }) {
  const t = messages.guides;

  return (
    <dl className="flex flex-col gap-4">
      {t.faq.map((item) => (
        <div key={item.q} className="flex flex-col gap-1.5">
          <dt className="text-sm font-medium text-foreground">{item.q}</dt>
          <dd className="text-sm leading-6 text-muted">{item.a}</dd>
        </div>
      ))}
    </dl>
  );
}
