---
name: youform-style
description: Apply Youform "Warm Brutalist" design language to websites and components
---

# Youform Design System Skill

Apply the Youform "Warm Brutalist" design language to create websites that feel like sister products of Youform.

## When to Use

Invoke this skill with `/youform-style` when:

- Building a new landing page or website
- Creating UI components that need this aesthetic
- Styling an existing project with this design language

## Design DNA: Non-Negotiable Rules

### 1. Foundation

```css
body {
  background-color: #fff9eb;
} /* Warm cream, NOT white */
```

### 2. The Black Border (Signature Element)

ALL buttons, cards, inputs must have:

```css
border: 2px solid #000000;
border-radius: 6px; /* buttons */ or 12px; /* cards */
```

### 3. Brutal Shadow Hover

```css
.interactive:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 0 #000000;
}
```

### 4. Color Palette

| Role           | Color  | Hex       |
| -------------- | ------ | --------- |
| Background     | Cream  | `#FFF9EB` |
| Primary CTA    | Teal   | `#45AD94` |
| Secondary CTA  | Yellow | `#FFE711` |
| Tertiary CTA   | Coral  | `#FF7F4A` |
| Accent Section | Pink   | `#FF94E7` |
| Footer         | Dark   | `#1F2937` |
| Text           | Black  | `#111827` |

### 5. Section Patterns

- Alternate section background colors (cream → teal → yellow → pink)
- Separate sections with **wave dividers** (organic, hand-drawn style, 3px black stroke)
- Place **colorful blobs** at section edges (partially off-screen)

### 6. Typography

- System font stack (no custom fonts)
- Bold (700) headings, 48px for H1/H2
- Black text on light backgrounds

### 7. Decorative Elements

- **Sticky note highlights**: Yellow background + slight rotation for key phrases
- **Hand-drawn arrows**: Pointing to interactive elements
- **Emojis as icons**: In feature lists
- **Dashed lines**: As subtle background decoration
- **Blobs**: Colorful circles at corners, partially cropped

### 8. Button Hierarchy

```jsx
// Primary - Most important action
<button className="bg-[#45AD94] border-2 border-black">Primary</button>

// Secondary - Alternative action
<button className="bg-[#FFE711] border-2 border-black">Secondary</button>

// Tertiary - Third level
<button className="bg-[#FF7F4A] border-2 border-black">Tertiary</button>

// Outline - Least emphasis
<button className="bg-white border-2 border-black">Outline</button>
```

### 9. Card Structure

```jsx
<div
  className="bg-white border-2 border-black rounded-xl p-6
                hover:translate-x-[-4px] hover:translate-y-[-4px]
                hover:shadow-[8px_8px_0_0_#000] transition-all"
>
  <div className="w-12 h-12 rounded-lg bg-blue-200 flex items-center justify-center">
    💡
  </div>
  <h3 className="font-bold text-xl mt-4">Feature Title</h3>
  <p className="text-gray-600 mt-2">Feature description here.</p>
</div>
```

### 10. Section Template

```jsx
<section className="bg-[#45AD94] py-16 relative overflow-hidden">
  {/* Decorative blob - top right */}
  <div
    className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFE711]
                  rounded-full border-3 border-black"
  />

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl font-bold text-center">
      Features That Make It{" "}
      <span className="bg-[#FFE711] px-2 -rotate-2 inline-block">Fun!</span>
    </h2>
    <p className="text-center mt-4 max-w-2xl mx-auto">Supporting text here</p>

    <div className="grid md:grid-cols-3 gap-6 mt-12">{/* Cards here */}</div>
  </div>

  {/* Decorative blob - bottom left */}
  <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#FF94E7] rounded-full" />
</section>;

{
  /* Wave divider to next section */
}
<svg viewBox="0 0 1440 100" className="w-full bg-[#FFE711]">
  <path
    fill="#45AD94"
    stroke="#000"
    strokeWidth="3"
    d="M0,50 Q360,0 720,50 T1440,50 V0 H0 Z"
  />
</svg>;
```

## Quick Reference CSS Variables

```css
:root {
  --bg-cream: #fff9eb;
  --color-teal: #45ad94;
  --color-yellow: #ffe711;
  --color-coral: #ff7f4a;
  --color-pink: #ff94e7;
  --color-dark: #1f2937;
  --color-black: #000000;
  --border: 2px solid #000000;
  --radius-btn: 6px;
  --radius-card: 12px;
  --shadow-brutal: 8px 8px 0 0 #000000;
}
```

## Tailwind Config Extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: "#FFF9EB",
        teal: "#45AD94",
        coral: "#FF7F4A",
        "bright-yellow": "#FFE711",
        "hot-pink": "#FF94E7",
      },
      boxShadow: {
        brutal: "8px 8px 0 0 #000000",
      },
    },
  },
};
```

## Checklist Before Shipping

- [ ] Cream background (`#FFF9EB`), not white
- [ ] 2px black borders on buttons/cards/inputs
- [ ] Brutal shadow hover effect
- [ ] Wave dividers between sections
- [ ] Blobs at section edges
- [ ] Sticky note highlights for key phrases
- [ ] Color-blocked sections
- [ ] Emojis as friendly icons
- [ ] Dark footer
- [ ] Bold headings (font-weight: 700)

---

## Generative Assets (Quick Reference)

### Wave Dividers

**Principles:**

- Irregular wavelength (NOT evenly spaced)
- Amplitude varies 30-70px
- 3px black stroke + fill with next section color
- Use Q (quadratic bezier) curves

**Quick Wave Template:**

```svg
<svg viewBox="0 0 1440 100" class="w-full">
  <path d="M0,50 Q240,20 480,55 Q720,90 960,40 Q1200,10 1440,50 L1440,100 L0,100 Z"
        fill="[NEXT_SECTION_COLOR]"/>
  <path d="M0,50 Q240,20 480,55 Q720,90 960,40 Q1200,10 1440,50"
        stroke="#000" stroke-width="3" fill="none"/>
</svg>
```

### Blob Shapes

**Principles:**

- Organic, NOT perfect circles
- Always partially cropped at viewport edge (30-70% visible)
- Place in corners, never center
- Some with 3px black border, some without

**Quick Blob CSS:**

```css
.blob {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
}
/* Variations: change percentages */
.blob-v2 {
  border-radius: 70% 30% 50% 50% / 30% 50% 70% 50%;
}
.blob-v3 {
  border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%;
}
```

**Quick Blob SVG:**

```svg
<svg viewBox="0 0 300 300">
  <path d="M150,30 Q250,50 270,130 Q290,210 230,260 Q170,310 90,270 Q10,230 30,150 Q50,70 110,40 Z"
        fill="#FF94E7" stroke="#000" stroke-width="3"/>
</svg>
```

### Hand-Drawn Arrows

**Principles:**

- Never straight - always curved/wobbly
- 2-3px stroke width
- Simple arrowhead (not perfect triangle)
- Pair with handwritten text (font: Caveat)

**Quick Arrow Templates:**

```svg
<!-- Curved right arrow -->
<svg viewBox="0 0 150 80" class="w-32">
  <path d="M10,60 Q50,10 90,35 Q110,45 130,40" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M120,30 L133,40 L122,52" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>

<!-- Loopy down arrow -->
<svg viewBox="0 0 80 120" class="w-20">
  <path d="M40,10 Q70,20 60,50 Q50,80 45,100" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M35,88 L45,103 L55,90" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>
```

**Annotation Text:**

```css
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
.hand-text {
  font-family: "Caveat", cursive;
  transform: rotate(-5deg);
}
```

---

## Full Documentation

See: `youform-design-system.md` for comprehensive documentation including:

- Complete color palette with RGB values
- Full typography scale
- All component variants
- Animation specifications
- Accessibility guidelines
- Responsive breakpoints
- **Generative asset principles** (wave generation formula, blob algorithms, arrow generation)
