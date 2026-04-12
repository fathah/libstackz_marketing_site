# Design System: The Editorial Minimalist

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**
This design system moves away from the aggressive, high-contrast layouts of typical tech interfaces and toward the quiet, intentional atmosphere of a high-end physical gallery or an editorial lookbook. It is a system built on "Quiet Luxury"—where the quality of the space between elements is just as important as the elements themselves.

The aesthetic is characterized by a "pluggable" architecture. While the current primary is a stark, authoritative Black (#000000), the underlying structure is built to remain cohesive regardless of the hue. We break the "template" look by using intentional asymmetry, overlapping illustrative elements, and a radical commitment to tonal depth over structural lines.

---

## 2. Colors & Tonal Architecture
The palette is a sophisticated range of "warm whites" and "paper" tones, designed to reduce eye strain and provide a premium, tactile feel.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections or containers. Traditional dividers and box-outlines are replaced by background color shifts. Use `surface-container-low` for secondary sections and `surface` for the main canvas. Let the geometry of the color blocks define the structure.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine paper. 
- **Base Level:** `surface` (#fbf9f4)
- **Recessed Areas:** `surface-container` (#f0eee9)
- **Floating/Elevated Elements:** `surface-container-lowest` (#ffffff)
Use these shifts to create "nested" depth. An input field should not have a border; it should be a `surface-container-highest` block sitting within a `surface-container` section.

### The "Glass & Gradient" Rule
To add "soul" to the minimalism:
- **Glassmorphism:** For floating navigation or modals, use `surface-container-lowest` at 80% opacity with a `backdrop-blur(20px)`.
- **Signature Gradients:** For primary CTAs, use a subtle vertical gradient from `primary` (#000000) to `primary_container` (#1b1b1b). This prevents the black from feeling "dead" on the screen.

---

## 3. Typography
The typography is a dialogue between the architectural strength of **Manrope** and the functional clarity of **Inter**.

- **Display & Headlines (Manrope):** These are your "Statement" pieces. Use `display-lg` with generous letter-spacing (-0.02em) and significant bottom margins to anchor the page.
- **Body & Labels (Inter):** Reserved for utility. Inter provides a neutral, high-legibility contrast to the more expressive headlines.
- **Hierarchy as Identity:** The vast scale difference between `display-lg` (3.5rem) and `body-md` (0.875rem) creates an editorial rhythm that makes even simple data feel curated.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We avoid the heavy drop shadows of the early 2010s in favor of **Tonal Layering**.

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f5f3ee) background. The 2% shift in brightness is enough for the human eye to perceive a physical lift without visual clutter.
- **Ambient Shadows:** If a floating element (like a popover) requires a shadow, use: `box-shadow: 0 20px 40px rgba(27, 28, 25, 0.05)`. The shadow color must be a tint of `on_surface`, never pure grey.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#cfc4c5) at 15% opacity. It should be a suggestion of a line, not a boundary.

---

## 5. Components

### Buttons
- **Primary:** Solid `primary` (#000000) with `on_primary` text. Radius: `md` (0.375rem). No border.
- **Secondary:** `secondary_container` (#fed00b) with `on_secondary_container` text. Use this exclusively for the "Money Action" or the most critical path.
- **Tertiary:** Text-only with a subtle `surface-container-high` background shift on hover.

### Input Fields
- **Style:** Background-fill using `surface-container-highest`. 
- **States:** No border on idle. On focus, use a 1px `primary` bottom-border only. This maintains the "Editorial" feel while providing clear affordance.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Separation:** Use `80px` of vertical white space between major content blocks. For list items, use a subtle hover state shift to `surface-container-low`.

### Imagery & Illustrations
- **Style:** Exclusively use "Cartoon/Illustrator" style. These should be minimalist, vector-based, and use the `secondary` (#fdcf09) as an accent color within the artwork. 
- **Placement:** Overlap illustrations across color section boundaries (e.g., an illustration sitting half in a `surface` section and half in a `surface-container` section) to break the "grid-lock."

---

## 6. Do’s and Don’ts

### Do
- **Do** use "Excessive" Whitespace. If you think there is enough space, add 24px more.
- **Do** use the `secondary` (#fdcf09) color for high-utility micro-interactions (like a notification dot or a selected checkbox).
- **Do** align text-heavy content to a centered, narrow column to mimic a magazine layout.

### Don't
- **Don't** use pure #000000 for long-form body text; use `on_surface_variant` (#4c4546) to maintain softness.
- **Don't** use standard "Material" elevation shadows. 
- **Don't** use photography. If a photo is provided, it must be processed into a stylized, high-contrast illustration to match the system.
- **Don't** use 100% opaque borders. If you can't define it with color, rethink the layout.