# Two-column bukti slides and a fluid canvas

Slide bukti now keep the screenshot and the Recap caption in separate columns: image on the left, text on the right. The deck canvas fills the area above the nav so the layout can be used on a phone. Below 768px the image is a cropped preview with a "Lihat screenshot" control that opens Mode lihat screenshot. Slide changes use a short JS translate and opacity animation, collapsed under `prefers-reduced-motion`. Portrait 9:16 as the outer frame and the five rotating composition families from ADR 0005 are superseded for bukti layout. Recap facts, tint per Bagian, Inter, and prev/next/counter/arrows stay.

## Considered Options

- Keep the 9:16 phone canvas with stacked image and caption. Rejected because it repeats one column and is awkward on a real phone.
- Crop screenshots in the source files for the mobile preview. Rejected: source screenshots stay unaltered; cropping is CSS `object-fit: cover` on the preview only.
