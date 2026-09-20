/**
 * Injects a JSON-LD structured-data block. Values come from server
 * components; scripts are self-contained and never execute code.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}