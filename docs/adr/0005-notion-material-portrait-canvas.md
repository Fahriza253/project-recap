# Notion material on the portrait Portofolio Deck canvas

The deck stays a 9:16 Portofolio Deck (not a sales pitch). Paper-and-ink plus one screenshot-plus-caption stack made 32 bukti slides feel identical. Visual material now follows the Notion token set in `docs/design/SYSTEM_DESIGN.md`, written down for this deck in `docs/design/DECK_SYSTEM.md`: navy sampul, one pastel tint per Bagian, Inter, 8px/12px geometry, and five rotating composition families. Application chrome still appears only inside screenshots. `--primary` is focus and active nav, not a second brand. Motion is a 200ms opacity crossfade that collapses under `prefers-reduced-motion`. This supersedes ADR 0003 on palette, type, and bukti layout; it keeps 9:16, recap facts, and prev/next/counter/arrows.

## Considered Options

- Keep warm paper, ink, and one bukti layout. Rejected because the reader sees the same stack 32 times.
- Switch the canvas to 16:9. Rejected for the same reason as ADR 0003: portrait captures would shrink.
- Give each Bagian the application's UI colors. Rejected because the deck is one portfolio; pastel tints are deck material, not product chrome.
- Dark mode or a theme toggle. Rejected: Penguji and projection stay on a locked light theme with navy bands.
- Rebuild the sequence as problem / market / CTA. Rejected in ADR 0001 and ADR 0002.
