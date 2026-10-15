/**
 * Canonical slug builder for ports and other catalog entries.
 *
 * Diacritics are stripped after an NFD decomposition (`Pokémon` -> `pokemon`,
 * `Fūrai` -> `furai`, `Ōkamiden` -> `okamiden`) so accented titles never leave
 * stray hyphens behind (`pok-mon`, `f-rai`). Runs of anything that is not
 * `a-z0-9` collapse to a single hyphen and the result is trimmed.
 */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
