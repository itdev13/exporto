# Youform Design System Documentation

A comprehensive design language guide based on the Youform website (youform.com). This document captures the unique visual identity, patterns, and components that can be used to recreate a similar aesthetic or build new products with this distinctive style.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Layout & Spacing](#layout--spacing)
5. [Components](#components)
6. [Decorative Elements](#decorative-elements)
7. [Animations & Effects](#animations--effects)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Implementation Guide](#implementation-guide)

---

## Design Philosophy

Youform's design language is characterized by a **playful, friendly, and approachable** aesthetic that combines:

- **Neo-brutalist elements** - Bold black borders, solid shadows, hand-drawn feel
- **Warm and inviting colors** - Cream backgrounds with vibrant accent colors
- **Organic shapes** - Wavy dividers, blob decorations, rounded corners
- **Hand-crafted touches** - Dashed lines, rotated elements, playful illustrations
- **High contrast** - Dark text on light backgrounds for excellent readability

The overall feel is **fun, modern, trustworthy, and unpretentious** - designed to make form-building feel enjoyable rather than tedious.

---

## Design DNA: Core Rules & Patterns

These are the **non-negotiable rules** that define this visual language. Apply these consistently and your website will feel like a "sister company" regardless of the specific content or sections you create.

### Rule 1: The "Warm Canvas" Foundation

**Every page starts with a warm cream background (`#FFF9EB`).** This is not white - it's intentionally warm and inviting. This creates the "cozy" foundation that all other elements sit on.

```css
body {
  background-color: #fff9eb;
}
```

### Rule 2: Bold Black Borders (The Neo-Brutalist Signature)

**All interactive elements and cards have a 2px solid black border.** This is THE defining visual characteristic. Without this, you lose the design identity.

Apply to:

- Buttons (all types)
- Cards
- Input fields
- Modals/dialogs
- Image containers that need emphasis

```css
border: 2px solid #000000;
```

### Rule 3: The Brutal Shadow Hover

**On hover, interactive elements shift up-left and cast a solid black shadow.** This creates depth and tactile feedback.

```css
/* Default state */
.interactive-element {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Hover state */
.interactive-element:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 0 #000000;
}
```

### Rule 4: Color-Blocked Sections with Wave Transitions

**Sections alternate between different background colors, separated by organic wave dividers.**

The wave divider:

- Has a hand-drawn, organic feel (not perfectly mathematical)
- Has a 3px black stroke outline
- Is filled with the NEXT section's background color
- Creates visual rhythm and breaks up the page

**Section color rotation (use any order that fits your content):**

- Cream (`#FFF9EB`) - Default, use for hero/intro
- Teal (`#45AD94`) - For feature highlights
- Yellow (`#FFE711` or `#FACC15`) - For attention/energy
- Pink (`#FF94E7`) - For social proof/testimonials
- Dark (`#1F2937`) - Footer only

### Rule 5: Decorative Blobs at Section Edges

**Place 1-3 colorful blob shapes at the edges of sections (corners, partially off-screen).** These add visual interest and reinforce the playful aesthetic.

Placement rules:

- Blobs should be **partially cropped** by the viewport edge (not fully visible)
- Use **contrasting colors** to the section background
- Place in **corners or edges**, never in the center of content
- Some blobs have black outlines, some don't - mix both
- Vary sizes: large (300-400px), medium (150-200px)

```
Section Layout with Blobs:
┌─────────────────────────────────────────┐
│ 🟠 (partial)              (partial) 🔵  │
│                                         │
│         [ Main Content Here ]           │
│                                         │
│                           (partial) 🟣  │
└─────────────────────────────────────────┘
```

### Rule 6: Playful Rotation on Highlight Elements

**Key elements have slight rotation (-3° to +3°) for a hand-crafted feel.**

Apply rotation to:

- Testimonial/quote cards
- "Sticky note" highlight backgrounds
- Social proof cards (tweets, reviews)
- Decorative badges
- Some blob decorations

```css
transform: rotate(-2deg); /* Slight tilt */
```

### Rule 7: The "Sticky Note" Highlight

**Important phrases are highlighted with a yellow background and slight rotation,** like a sticky note or highlighter.

```css
.highlight {
  background-color: #ffe711;
  padding: 2px 8px;
  transform: rotate(-2deg);
  display: inline-block;
}
```

Use for:

- Key value propositions ("Fun Again!", "FREE", "So Affordable")
- Important numbers or stats
- Call-to-action emphasis

### Rule 8: Hand-Drawn Annotations

**Use hand-drawn style arrows and cursive text for informal callouts.**

These point to:

- Interactive demos ("try it here →")
- Key features
- CTAs

The style should feel like someone drew on the page with a marker - informal, friendly, human.

### Rule 9: Dashed Lines as Decoration

**Decorative dashed lines add subtle visual interest** without being distracting.

```css
.dashed-decoration {
  border: 2px dashed #d1d5db;
  /* or as SVG stroke */
}
```

Use for:

- Diagonal decorative lines in backgrounds
- Connection lines between elements
- Border alternatives for subtle containers

### Rule 10: Color-Coded Icon Containers

**Icons sit inside colored rounded squares** that match the section's accent palette.

```css
.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
}
```

Colors to use: Light blue, light pink, light green, light yellow - pastels that complement the main palette.

### Rule 11: Button Hierarchy Through Color

**Button importance is communicated through color, not size.**

| Priority  | Color                   | Usage                             |
| --------- | ----------------------- | --------------------------------- |
| Primary   | Teal (`#45AD94`)        | Main CTA, most important action   |
| Secondary | Yellow (`#FFE711`)      | Alternative CTA, secondary action |
| Tertiary  | Coral (`#FF7F4A`)       | Third-level action                |
| Outline   | White with black border | Least emphasis, cancel actions    |

All buttons share: 2px black border, 6px border-radius, black text.

### Rule 12: Cards Always Have Structure

**Cards follow a consistent pattern:**

```css
.card {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 12px;
  padding: 24px;
}
```

Card variants:

- **Feature card**: Icon box + heading + description
- **Testimonial card**: Quote + avatar + name/title (with slight rotation)
- **Template/preview card**: Image + title + description (no border, shadow instead)

### Rule 13: Section Anatomy

Every content section follows this structure:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Optional: Decorative blob in corner]                  │
│                                                         │
│              Section Heading (H2, centered)             │
│         Supporting text (1-2 lines, centered)           │
│                                                         │
│    ┌─────────┐   ┌─────────┐   ┌─────────┐             │
│    │  Card   │   │  Card   │   │  Card   │             │
│    └─────────┘   └─────────┘   └─────────┘             │
│                                                         │
│              [Optional: CTA Button]                     │
│                                                         │
│  [Optional: Decorative blob in opposite corner]         │
│                                                         │
└─────────────────────────────────────────────────────────┘
           ∿∿∿∿∿∿ Wave Divider ∿∿∿∿∿∿
```

### Rule 14: Text Never Floats Alone

**Body text always has visual anchors:**

- A heading above it
- An icon/illustration beside it
- A card container around it
- A colored background behind the section

Never place a paragraph in the middle of empty space.

### Rule 15: Emojis as Icons

**Use emojis liberally as friendly icons** - they reinforce the approachable, human feel.

Use for:

- Feature list icons
- Section decoration
- Inline emphasis
- Button labels (sparingly)

---

## Applying the Design DNA: Examples

### Example: Creating a "Features" Section

```
Background: Teal (#45AD94)
Decorations: Yellow blob (top-right, with black outline), Pink blob (bottom-left)

Content:
- H2: "Why Choose Us" with "Choose Us" on yellow sticky highlight
- 6 feature cards in 3x2 grid
- Each card: white bg, black border, emoji icon in colored box, heading, description
- Pink CTA button at bottom

Transition: Wave divider to next section (cream or yellow)
```

### Example: Creating a "Testimonials" Section

```
Background: Hot Pink (#FF94E7)
Decorations: Purple sticky note with "Loved by thousands", hand-drawn arrow

Content:
- H2: "What People Say"
- 3-5 testimonial cards with slight random rotations (-2° to +2°)
- Each card: white bg, black border, quote, avatar, name
- Cards scattered/overlapping slightly for dynamic feel

Transition: Wave divider to footer (dark)
```

### Example: Creating a "Pricing" Section

```
Background: Yellow (#FFE711)
Decorations: Hand-drawn dollar signs, "So Affordable" cloud badge

Content:
- H2: "Simple Pricing"
- Pricing comparison or single pricing card
- Large numbers for prices
- Green checkmarks for features
- Teal CTA button

Transition: Wave divider to next section
```

---

## Generative Assets: Waves, Blobs & Arrows

This section documents how to CREATE these decorative elements, not just use them. Understanding the principles allows you to generate infinite variations while maintaining the design language.

### Organic Wave Dividers

Wave dividers separate sections and are a signature element of this design. They must feel **hand-drawn, not mathematical**.

#### Wave Anatomy

```
                    Peak (vary height 30-70px)
                      ↓
    ┌─────────────────∩─────────────────┐
    │                                    │ ← Previous section color (fill above)
    │   ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿   │ ← 3px black stroke
    │                                    │ ← Next section color (fill below)
    └────────────────────────────────────┘
         ↑                          ↑
    Trough (vary depth)        Wavelength (irregular)
```

#### Wave Principles

1. **Irregular wavelength** - Waves should NOT be evenly spaced. Vary the distance between peaks.
2. **Varying amplitude** - Some peaks higher, some lower. Range: 30-70px from baseline.
3. **Smooth curves** - Use quadratic or cubic bezier curves, never sharp angles.
4. **Black stroke** - Always 3px black stroke on the wave line.
5. **Fill direction** - Wave is filled with the NEXT section's color, stroke sits on top.

#### Wave Generation Formula

```javascript
// Generate an organic wave path
function generateWavePath(width, baseHeight, options = {}) {
  const {
    segments = 4, // Number of wave segments (2-6 recommended)
    minAmplitude = 30, // Minimum peak/trough height
    maxAmplitude = 70, // Maximum peak/trough height
    roughness = 0.3, // How irregular (0 = smooth, 1 = chaotic)
  } = options;

  let path = `M0,${baseHeight}`;
  const segmentWidth = width / segments;

  for (let i = 0; i < segments; i++) {
    const x1 = i * segmentWidth;
    const x2 = (i + 0.5) * segmentWidth;
    const x3 = (i + 1) * segmentWidth;

    // Randomize amplitude for organic feel
    const amplitude =
      minAmplitude + Math.random() * (maxAmplitude - minAmplitude);
    const direction = i % 2 === 0 ? -1 : 1; // Alternate up/down

    // Add roughness to control points
    const cpOffset =
      segmentWidth * 0.25 * (1 + (Math.random() - 0.5) * roughness);

    const y2 = baseHeight + amplitude * direction;

    // Quadratic curve for smooth organic shape
    path += ` Q${x1 + cpOffset},${y2} ${x2},${y2}`;
    path += ` Q${x3 - cpOffset},${y2} ${x3},${baseHeight + (Math.random() - 0.5) * 10}`;
  }

  // Close the path (fill area below)
  path += ` L${width},0 L0,0 Z`;

  return path;
}
```

#### Wave SVG Examples

**Example 1: Gentle Wave (3 segments)**

```svg
<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
     class="w-full" style="margin-top: -1px;">
  <!-- Fill with next section color -->
  <path d="M0,60
           Q180,20 360,45
           Q540,70 720,35
           Q900,0 1080,50
           Q1260,100 1440,60
           L1440,120 L0,120 Z"
        fill="#FFE711"/>
  <!-- Black stroke on top -->
  <path d="M0,60
           Q180,20 360,45
           Q540,70 720,35
           Q900,0 1080,50
           Q1260,100 1440,60"
        stroke="#000000"
        stroke-width="3"
        fill="none"/>
</svg>
```

**Example 2: Dramatic Wave (4 segments, higher amplitude)**

```svg
<svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <path d="M0,75
           Q120,20 300,30
           Q480,40 600,90
           Q720,140 900,100
           Q1080,60 1200,85
           Q1320,110 1440,75
           L1440,150 L0,150 Z"
        fill="#45AD94"/>
  <path d="M0,75
           Q120,20 300,30
           Q480,40 600,90
           Q720,140 900,100
           Q1080,60 1200,85
           Q1320,110 1440,75"
        stroke="#000000"
        stroke-width="3"
        fill="none"/>
</svg>
```

**Example 3: Subtle Wave (2 segments, low amplitude)**

```svg
<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <path d="M0,40
           Q360,15 720,50
           Q1080,85 1440,40
           L1440,80 L0,80 Z"
        fill="#FF94E7"/>
  <path d="M0,40
           Q360,15 720,50
           Q1080,85 1440,40"
        stroke="#000000"
        stroke-width="3"
        fill="none"/>
</svg>
```

#### Wave Usage Rules

| Transition         | Wave Style | Amplitude |
| ------------------ | ---------- | --------- |
| Hero → Features    | Dramatic   | 50-80px   |
| Features → Content | Gentle     | 30-50px   |
| Content → CTA      | Subtle     | 20-40px   |
| Any → Footer       | Gentle     | 30-50px   |

---

### Organic Blob Shapes

Blobs are colorful organic shapes placed at section edges. They add visual interest and reinforce the playful aesthetic.

#### Blob Anatomy

```
        ┌──────────────────────────────────────┐
        │                          ╭───╮       │
        │                        ╭─╯   ╰─╮     │ ← Blob partially
        │                       ╭╯       ╰╮    │    outside viewport
        │                      ╭╯         ╰╮   │
        │                     ╭╯           ╰───┤
        │   [Content]         │                │
        │                     ╰╮           ╭───┤
        │                      ╰╮         ╭╯   │
        ├───╮                   ╰─╮     ╭─╯    │
        │   ╰─╮                   ╰─────╯      │
        │     ╰──╮         ╭──────────────────┤
        │        ╰─────────╯                  │
        └──────────────────────────────────────┘
              ↑                           ↑
         Bottom-left blob            Top-right blob
         (30-50% visible)            (40-60% visible)
```

#### Blob Principles

1. **Organic shape** - NOT perfect circles. Use irregular rounded shapes.
2. **Partial visibility** - Always crop blobs at viewport edge (30-70% visible).
3. **Contrasting colors** - Blob color should contrast with section background.
4. **Variable sizes** - Mix large (300-500px) and medium (150-250px) blobs.
5. **Optional outline** - Some blobs have 3px black border, some don't. Mix both.
6. **No content overlap** - Blobs go BEHIND content, never obscure text.

#### Blob Generation Methods

**Method 1: CSS Border Radius (Simple)**

```css
.blob-simple {
  width: 300px;
  height: 300px;
  background: #ff94e7;
  border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
  /* Format: top-left top-right bottom-right bottom-left / same for vertical */
}

/* Variations - just change the percentages */
.blob-v2 {
  border-radius: 70% 30% 50% 50% / 30% 50% 70% 50%;
}
.blob-v3 {
  border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%;
}
.blob-v4 {
  border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%;
}
```

**Method 2: SVG Path (More Control)**

```javascript
// Generate organic blob SVG path
function generateBlobPath(size, options = {}) {
  const {
    points = 6, // Number of points (5-8 recommended)
    irregularity = 0.3, // How irregular (0-1)
    spikiness = 0.2, // How spiky vs smooth (0-1)
  } = options;

  const center = size / 2;
  const angleStep = (Math.PI * 2) / points;
  const pathPoints = [];

  for (let i = 0; i < points; i++) {
    const angle = i * angleStep;
    // Vary radius for organic shape
    const radius = (size / 2) * (0.7 + Math.random() * irregularity);
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    pathPoints.push({ x, y });
  }

  // Create smooth curve through points
  let path = `M${pathPoints[0].x},${pathPoints[0].y}`;
  for (let i = 0; i < points; i++) {
    const p0 = pathPoints[i];
    const p1 = pathPoints[(i + 1) % points];
    const midX = (p0.x + p1.x) / 2;
    const midY = (p0.y + p1.y) / 2;
    path += ` Q${p0.x},${p0.y} ${midX},${midY}`;
  }
  path += " Z";

  return path;
}
```

#### Blob SVG Examples

**Example 1: Large Organic Blob (no border)**

```svg
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <path d="M200,50
           Q320,80 350,180
           Q380,280 300,340
           Q220,400 120,360
           Q20,320 40,220
           Q60,120 140,70
           Q180,40 200,50 Z"
        fill="#FF7F4A"/>
</svg>
```

**Example 2: Medium Blob with Border**

```svg
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <path d="M150,30
           Q250,50 270,130
           Q290,210 230,260
           Q170,310 90,270
           Q10,230 30,150
           Q50,70 110,40
           Q140,25 150,30 Z"
        fill="#FFE711"
        stroke="#000000"
        stroke-width="3"/>
</svg>
```

**Example 3: Small Accent Blob**

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,20
           Q160,40 175,90
           Q190,140 150,175
           Q100,210 55,170
           Q10,130 25,80
           Q40,30 80,20
           Q95,15 100,20 Z"
        fill="#60A5FA"/>
</svg>
```

#### Blob Placement Rules

```
CORRECT Placement:
┌─────────────────────────────────┐
│ ◖ (25% visible)     (40%) ◗    │  ← Corners, cropped
│                                 │
│      [ Content Area ]           │
│                                 │
│ ◖ (50%)                   ◗    │  ← Opposite corners
└─────────────────────────────────┘

INCORRECT Placement:
┌─────────────────────────────────┐
│         ◯ (fully visible)       │  ✗ Never fully visible
│    ◯                            │  ✗ Never in content area
│      [ Content ◯ Area ]         │  ✗ Never overlapping content
└─────────────────────────────────┘
```

#### Blob Color Pairing

| Section Background | Recommended Blob Colors            |
| ------------------ | ---------------------------------- |
| Cream (`#FFF9EB`)  | Orange, Pink, Teal, Blue           |
| Teal (`#45AD94`)   | Yellow (with border), Pink, Orange |
| Yellow (`#FFE711`) | Pink, Blue, Teal                   |
| Pink (`#FF94E7`)   | Yellow (with border), Blue, Teal   |

---

### Hand-Drawn Arrows & Annotations

Hand-drawn arrows point to interactive elements and add a human, informal touch. They should look like someone drew them with a marker.

#### Arrow Anatomy

```
    Start point                End point (with arrowhead)
        ●                            ➤
         ╲                          ╱
          ╲    Curved path         ╱
           ╲  (not straight!)     ╱
            ╲                    ╱
             ╲__________________╱
                    ↑
              Organic curve with
              slight wobble
```

#### Arrow Principles

1. **Never straight** - Arrows always have a curve or wobble.
2. **Variable stroke** - Stroke width can vary slightly (2-3px).
3. **Simple arrowhead** - Small, hand-drawn style head (not perfect triangle).
4. **Black color** - Always `#000000`.
5. **Accompanied by text** - Usually paired with cursive/handwritten annotation.

#### Arrow Generation

**Method 1: SVG Paths (Recommended)**

```javascript
// Generate hand-drawn arrow
function generateArrowPath(startX, startY, endX, endY, options = {}) {
  const {
    curvature = 0.3, // How curved (0 = straight, 1 = very curved)
    wobble = 5, // Pixel wobble for hand-drawn feel
  } = options;

  // Calculate control point for curve
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const perpX = -(endY - startY) * curvature;
  const perpY = (endX - startX) * curvature;
  const ctrlX = midX + perpX + (Math.random() - 0.5) * wobble;
  const ctrlY = midY + perpY + (Math.random() - 0.5) * wobble;

  // Main curve
  const path = `M${startX},${startY} Q${ctrlX},${ctrlY} ${endX},${endY}`;

  // Arrowhead
  const angle = Math.atan2(endY - ctrlY, endX - ctrlX);
  const headLength = 12;
  const headAngle = Math.PI / 6; // 30 degrees

  const head1X = endX - headLength * Math.cos(angle - headAngle);
  const head1Y = endY - headLength * Math.sin(angle - headAngle);
  const head2X = endX - headLength * Math.cos(angle + headAngle);
  const head2Y = endY - headLength * Math.sin(angle + headAngle);

  const arrowhead = `M${head1X},${head1Y} L${endX},${endY} L${head2X},${head2Y}`;

  return { path, arrowhead };
}
```

#### Arrow SVG Examples

**Example 1: Curved Arrow Pointing Right**

```svg
<svg viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg" class="w-32">
  <!-- Main curve -->
  <path d="M10,60 Q50,10 90,35 Q110,45 130,40"
        stroke="#000000"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"/>
  <!-- Arrowhead -->
  <path d="M120,30 L133,40 L122,52"
        stroke="#000000"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>
```

**Example 2: Loopy Arrow Pointing Down**

```svg
<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" class="w-20">
  <path d="M40,10 Q70,20 60,50 Q50,80 45,100"
        stroke="#000000"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"/>
  <path d="M35,88 L45,103 L55,90"
        stroke="#000000"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>
```

**Example 3: Squiggly Arrow Pointing Left**

```svg
<svg viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg" class="w-36">
  <path d="M140,30 Q120,15 100,35 Q80,55 60,30 Q40,5 20,30"
        stroke="#000000"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"/>
  <path d="M30,18 L17,30 L28,42"
        stroke="#000000"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>
```

#### Hand-Drawn Text Annotations

Arrows are usually paired with handwritten-style text. Use a casual font or SVG text:

**CSS Approach (with Google Font):**

```css
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

.hand-annotation {
  font-family: "Caveat", cursive;
  font-size: 24px;
  color: #000000;
  transform: rotate(-5deg); /* Slight tilt */
}
```

**Example Annotation Phrases:**

- "try it here"
- "it's free!"
- "so easy"
- "click me"
- "start here"
- "no signup needed"

**Complete Arrow + Annotation Component:**

```jsx
<div className="relative inline-block">
  {/* Arrow SVG */}
  <svg
    viewBox="0 0 150 80"
    className="absolute -top-16 -right-20 w-32 rotate-12"
  >
    <path
      d="M10,60 Q50,10 90,35 Q110,45 130,40"
      stroke="#000"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M120,30 L133,40 L122,52"
      stroke="#000"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>

  {/* Annotation text */}
  <span className="absolute -top-20 -right-8 font-caveat text-2xl -rotate-6">
    try it here
  </span>

  {/* The element being pointed to */}
  <button className="bg-teal border-2 border-black px-6 py-3 rounded-md">
    Get Started
  </button>
</div>
```

---

### Generating New Variations

To create new decorative elements that match the design language, follow these principles:

#### For Waves:

1. Start with a horizontal baseline
2. Add 2-5 curve segments using Q (quadratic) bezier commands
3. Vary the amplitude between 20-80px
4. Keep wavelengths irregular (not evenly spaced)
5. Always add 3px black stroke
6. Fill with the next section's color

#### For Blobs:

1. Start with a rough circle concept
2. Push/pull 5-8 points to create organic shape
3. Use smooth curves between points (no sharp corners)
4. Size between 150-500px
5. Decide: with or without 3px black border
6. Position at edges, 30-70% visible

#### For Arrows:

1. Never use straight lines
2. Add 1-3 curves/wobbles in the path
3. Keep stroke width 2-3px
4. Make arrowhead small and simple
5. Pair with handwritten-style text
6. Rotate slightly for casual feel

---

## Color Palette

### Primary Colors

| Color Name           | Hex Code  | RGB                | Usage                             |
| -------------------- | --------- | ------------------ | --------------------------------- |
| **Cream/Warm White** | `#FFF9EB` | rgb(255, 251, 235) | Primary background                |
| **Warm Sand**        | `#F6E1A8` | rgb(246, 225, 168) | Secondary background, cards       |
| **Charcoal Black**   | `#111827` | rgb(17, 24, 39)    | Primary text, borders             |
| **Dark Gray**        | `#1F2937` | rgb(31, 41, 55)    | Secondary text, footer background |

### Accent Colors

| Color Name           | Hex Code  | RGB                | Usage                                |
| -------------------- | --------- | ------------------ | ------------------------------------ |
| **Teal/Mint**        | `#45AD94` | rgb(69, 173, 148)  | Primary CTA buttons, links, accents  |
| **Coral/Salmon**     | `#FF7F4A` | rgb(255, 127, 74)  | Secondary buttons, highlights        |
| **Bright Yellow**    | `#FFE711` | rgb(255, 231, 17)  | Badges, attention-grabbing elements  |
| **Soft Yellow**      | `#FACC15` | rgb(250, 204, 21)  | Section backgrounds, highlights      |
| **Hot Pink/Magenta** | `#FF94E7` | rgb(255, 148, 231) | Accent sections, decorative elements |
| **Bright Pink**      | `#EC4899` | rgb(236, 72, 153)  | Section backgrounds                  |
| **Purple/Lavender**  | `#A78BFA` | rgb(167, 139, 250) | Badges, tags                         |
| **Sky Blue**         | `#60A5FA` | rgb(96, 165, 250)  | Decorative blobs                     |
| **Light Blue**       | `#93C5FD` | rgb(147, 197, 253) | Decorative elements                  |

### Semantic Colors

| Purpose          | Color           | Hex       |
| ---------------- | --------------- | --------- |
| Success/Positive | Green Checkmark | `#22C55E` |
| Error/Negative   | Red             | `#EF4444` |
| Warning          | Amber           | `#F59E0B` |
| Info             | Blue            | `#3B82F6` |
| Link             | Blue            | `#2563EB` |

### Background Section Colors

The website uses distinct background colors for different sections to create visual separation:

1. **Hero Section**: Cream (`#FFF9EB`)
2. **Features Section**: Teal (`#45AD94`)
3. **Templates Section**: Bright Yellow (`#FFE711`)
4. **Testimonials/Social Proof**: Hot Pink (`#FF94E7`)
5. **Footer**: Dark Charcoal (`#13202B`)

---

## Typography

### Font Family

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  "system-ui",
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  "Noto Sans",
  sans-serif,
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji";
```

The design uses the **system font stack** for optimal performance and native feel across platforms.

### Type Scale

| Element    | Size            | Weight          | Line Height | Usage                       |
| ---------- | --------------- | --------------- | ----------- | --------------------------- |
| **H1**     | 48px (3rem)     | 700 (Bold)      | 48px (1)    | Page titles, hero headings  |
| **H2**     | 48px (3rem)     | 700 (Bold)      | 1.2         | Section headings            |
| **H3**     | 24px (1.5rem)   | 700 (Bold)      | 1.3         | Card headings, sub-sections |
| **H4**     | 20px (1.25rem)  | 600 (Semi-bold) | 1.4         | Small headings              |
| **Body**   | 16px (1rem)     | 400 (Regular)   | 24px (1.5)  | Paragraphs, general text    |
| **Small**  | 14px (0.875rem) | 400 (Regular)   | 20px (1.43) | Captions, meta text         |
| **XSmall** | 12px (0.75rem)  | 400 (Regular)   | 16px (1.33) | Labels, fine print          |

### Text Colors

- **Primary Text**: `#111827` (Charcoal Black)
- **Secondary Text**: `#374151` (Gray 700)
- **Muted Text**: `#6B7280` (Gray 500)
- **Inverse Text**: `#FFFFFF` (White) - for dark backgrounds
- **Accent Text**: `#45AD94` (Teal) - for highlights
- **Link Text**: `#2563EB` (Blue) - for interactive links

### Typography Patterns

1. **Emphasis with color**: Key words highlighted in accent colors (e.g., "FREE" in teal)
2. **Italic names**: Personal names in italics for emphasis
3. **Highlighted phrases**: Important text on yellow rotated rectangles (sticky note effect)
4. **Hand-drawn annotations**: Cursive-style text for informal callouts ("try it here", "Intuitive builder")

---

## Layout & Spacing

### Container Widths

```css
--container-max: 1280px;
--container-lg: 1024px;
--container-md: 768px;
--content-max: 720px; /* For readable text content */
```

### Spacing Scale (8px base)

| Token | Value | Usage                    |
| ----- | ----- | ------------------------ |
| `xs`  | 4px   | Tight spacing, icon gaps |
| `sm`  | 8px   | Small gaps, padding      |
| `md`  | 16px  | Default spacing          |
| `lg`  | 24px  | Section padding          |
| `xl`  | 32px  | Large gaps               |
| `2xl` | 48px  | Section spacing          |
| `3xl` | 64px  | Major section gaps       |
| `4xl` | 96px  | Hero spacing             |

### Grid System

- **Primary Grid**: 12-column grid
- **Feature Cards**: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- **Template Cards**: 3-column grid with equal spacing
- **Footer**: 6-column grid for link sections

### Section Structure

```
┌─────────────────────────────────────────┐
│  Navigation (sticky)                     │
├─────────────────────────────────────────┤
│  Hero Section (full-width background)    │
│  ┌─────────────┬─────────────┐          │
│  │ Text Content│ Interactive │          │
│  │             │ Demo        │          │
│  └─────────────┴─────────────┘          │
├───── Wave Divider ──────────────────────┤
│  Feature Section (colored background)    │
├───── Wave Divider ──────────────────────┤
│  Templates Section                       │
├───── Wave Divider ──────────────────────┤
│  Social Proof Section                    │
├─────────────────────────────────────────┤
│  Footer (dark background)                │
└─────────────────────────────────────────┘
```

---

## Components

### Buttons

#### Primary Button (Teal)

```css
.btn-primary {
  background-color: #45ad94;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 8px 24px;
  font-weight: 500;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 0 #000000;
}
```

#### Secondary Button (Yellow)

```css
.btn-secondary {
  background-color: #ffe711;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 8px 24px;
}
```

#### Tertiary Button (Coral/Salmon)

```css
.btn-tertiary {
  background-color: #ff7f4a;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 8px 24px;
}
```

#### Outline Button

```css
.btn-outline {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 8px 24px;
}
```

#### Pill Button (Navigation)

```css
.btn-pill {
  background-color: #ffe711;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 9999px;
  padding: 8px 16px;
}
```

### Cards

#### Feature Card

```css
.feature-card {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 12px;
  padding: 24px;
  box-shadow: none;
}

.feature-card:hover {
  box-shadow: 8px 8px 0 0 #000000;
  transform: translate(-4px, -4px);
}
```

#### Template Card

```css
.template-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.template-card-image {
  aspect-ratio: 16/10;
  object-fit: cover;
}

.template-card-content {
  padding: 16px;
}
```

#### Testimonial Card

```css
.testimonial-card {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 16px;
  transform: rotate(-1deg); /* Slight rotation for playful effect */
}
```

#### Tweet/Social Card

```css
.tweet-card {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 12px;
  padding: 16px;
  transform: rotate(var(--rotation, 0deg)); /* Random slight rotations */
}
```

### Form Elements

#### Input Field

```css
.input {
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 16px;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #45ad94;
}
```

#### Slider

```css
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #45ad94;
  border-radius: 50%;
  cursor: pointer;
}
```

#### Checkbox

```css
.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #000000;
  border-radius: 4px;
  accent-color: #45ad94;
}
```

### Navigation

#### Header

```css
.header {
  position: sticky;
  top: 0;
  background-color: transparent; /* Inherits page background */
  padding: 16px 0;
  z-index: 100;
}

.nav-link {
  color: #111827;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 12px;
}

.nav-link:hover {
  text-decoration: underline;
}

.nav-link.active {
  text-decoration: underline;
}
```

### Badges/Tags

#### Rating Badge

```css
.badge {
  background-color: #a78bfa; /* Purple/Lavender */
  color: #000000;
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
```

#### Feature Tag

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #374151;
}

.tag-icon {
  color: #22c55e; /* Green checkmark */
}
```

### Tables

#### Pricing Table

```css
.pricing-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pricing-table th {
  background-color: #f3f4f6;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.05em;
}

.pricing-table td {
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.pricing-table tr:last-child td {
  border-bottom: none;
}
```

### Accordions (FAQ)

```css
.accordion-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
}

.accordion-icon {
  transition: transform 0.2s;
}

.accordion-item.open .accordion-icon {
  transform: rotate(180deg);
}
```

---

## Decorative Elements

### Wave Dividers

The website uses hand-drawn style wave dividers between sections:

```css
.wave-divider {
  width: 100%;
  height: auto;
  display: block;
}

/* SVG Path for wave - approximate */
.wave-path {
  fill: var(--next-section-color);
  stroke: #000000;
  stroke-width: 3px;
}
```

**Wave Characteristics:**

- Organic, irregular wave pattern (not perfectly mathematical)
- Black stroke outline (~3px)
- Filled with the next section's background color
- Full-width, responsive

### Blob Decorations

Organic blob shapes used as background decorations:

```css
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(0);
}

.blob-orange {
  background-color: #ff7f4a;
  width: 300px;
  height: 300px;
}

.blob-pink {
  background-color: #ff94e7;
}

.blob-teal {
  background-color: #45ad94;
}

.blob-blue {
  background-color: #60a5fa;
}

.blob-yellow {
  background-color: #ffe711;
  border: 3px solid #000000;
}
```

### Dashed Lines

Decorative dashed lines used for visual interest:

```css
.dashed-line {
  stroke: #d1d5db;
  stroke-width: 2px;
  stroke-dasharray: 8 8;
  fill: none;
}
```

### Hand-drawn Arrows

Curly arrows pointing to interactive elements:

```css
.hand-arrow {
  /* SVG-based hand-drawn arrow */
  stroke: #000000;
  stroke-width: 2px;
  fill: none;
}
```

### Sticky Note Highlight

Yellow rotated rectangle for emphasis:

```css
.sticky-highlight {
  background-color: #ffe711;
  padding: 4px 12px;
  transform: rotate(-3deg);
  display: inline-block;
  font-style: italic;
}
```

### Dollar Signs (Illustrations)

Hand-drawn style dollar signs used on pricing page:

```css
.dollar-illustration {
  font-family: "Comic Sans MS", cursive; /* Or custom hand-drawn SVG */
  font-size: 120px;
  color: #ffe711;
  -webkit-text-stroke: 3px #000000;
  transform: rotate(var(--rotation));
}
```

### Icon Containers

Colored square containers for feature icons:

```css
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.icon-container-blue {
  background-color: #93c5fd;
}
.icon-container-pink {
  background-color: #f9a8d4;
}
.icon-container-green {
  background-color: #86efac;
}
.icon-container-yellow {
  background-color: #fde047;
}
```

---

## Animations & Effects

### Hover Lift Effect

```css
.lift-on-hover {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.lift-on-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Neo-brutalist Shadow

```css
.brutal-shadow {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.brutal-shadow:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 0 #000000;
}
```

### Floating Animation (Blobs)

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}
```

### Subtle Rotation Animation

```css
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
}

.wiggle {
  animation: wiggle 3s ease-in-out infinite;
}
```

### Integration Icons Orbit

The integration section has icons that appear to orbit/float:

```css
.orbit-container {
  position: relative;
}

.orbit-item {
  position: absolute;
  background: #ffffff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: rotate(var(--rotation));
}
```

### Scroll Animations

Elements fade in and slide up as they enter the viewport:

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px; /* Small devices */
--breakpoint-md: 768px; /* Tablets */
--breakpoint-lg: 1024px; /* Desktop */
--breakpoint-xl: 1280px; /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

### Responsive Typography

```css
/* Mobile */
h1 {
  font-size: 32px;
  line-height: 1.2;
}
h2 {
  font-size: 28px;
}
h3 {
  font-size: 20px;
}

/* Tablet and up (768px+) */
@media (min-width: 768px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 48px;
  }
}
```

### Responsive Layout Patterns

```css
/* Feature grid */
.feature-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Mobile Navigation

```css
/* Desktop nav */
.nav-desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }

  .nav-mobile {
    display: none;
  }
}
```

---

## Accessibility

### Color Contrast

All text combinations meet WCAG 2.1 AA standards:

| Combination                         | Contrast Ratio | Status |
| ----------------------------------- | -------------- | ------ |
| Black (#111827) on Cream (#FFF9EB)  | 14.7:1         | AAA    |
| Black (#000000) on Yellow (#FFE711) | 12.8:1         | AAA    |
| Black (#000000) on Teal (#45AD94)   | 7.2:1          | AAA    |
| White (#FFFFFF) on Dark (#1F2937)   | 13.5:1         | AAA    |

### Focus States

```css
*:focus-visible {
  outline: 2px solid #45ad94;
  outline-offset: 2px;
}

/* Remove default outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Logical tab order maintained
- Skip links available for main content

### Screen Reader Considerations

- Semantic HTML structure (proper heading hierarchy)
- Alt text for all images
- ARIA labels for interactive elements
- Descriptive link text (no "click here")

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Guide

### CSS Variables Setup

```css
:root {
  /* Colors */
  --color-cream: #fff9eb;
  --color-sand: #f6e1a8;
  --color-black: #111827;
  --color-dark: #1f2937;
  --color-teal: #45ad94;
  --color-coral: #ff7f4a;
  --color-yellow: #ffe711;
  --color-yellow-soft: #facc15;
  --color-pink: #ff94e7;
  --color-purple: #a78bfa;
  --color-blue: #60a5fa;
  --color-white: #ffffff;

  /* Typography */
  --font-family:
    ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  --font-size-4xl: 3rem;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-brutal: 8px 8px 0 0 #000000;

  /* Borders */
  --border-width: 2px;
  --border-color: #000000;
}
```

### Base Styles

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: 1.5;
  color: var(--color-black);
  background-color: var(--color-cream);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
```

### Technology Recommendations

This design system works well with:

- **Tailwind CSS** - For utility-first styling
- **Framer Motion** - For animations
- **Next.js / React** - For component architecture
- **SVG** - For wave dividers and decorative elements

### File Structure Suggestion

```
src/
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── components/
│       ├── buttons.css
│       ├── cards.css
│       ├── forms.css
│       └── layout.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   └── decorative/
│       ├── WaveDivider.tsx
│       ├── Blob.tsx
│       └── DashedLine.tsx
└── assets/
    └── svg/
        ├── wave-1.svg
        ├── wave-2.svg
        └── decorations/
```

---

## Summary: The "Sister Company" Checklist

Use this checklist to verify your implementation captures the Youform design DNA. If you can check all these boxes, your website will look like it belongs to the same brand family.

### Visual DNA Checklist

- [ ] **Warm cream background** (`#FFF9EB`) as the base canvas
- [ ] **2px solid black borders** on all buttons, cards, and inputs
- [ ] **Brutal shadow hover effect** (translate + solid black shadow)
- [ ] **Wave dividers** between major sections (hand-drawn style, black outline)
- [ ] **Colorful blob decorations** at section edges (partially off-screen)
- [ ] **Color-blocked sections** (teal, yellow, pink, cream rotation)
- [ ] **Sticky note highlights** for key phrases (yellow, rotated)
- [ ] **Slight rotation** on testimonial cards and decorative elements
- [ ] **Hand-drawn annotations** pointing to interactive elements
- [ ] **Emojis as icons** in feature lists
- [ ] **Colored icon containers** (pastel squares with rounded corners)
- [ ] **Button color hierarchy** (teal primary, yellow secondary, coral tertiary)
- [ ] **Dark footer** (`#1F2937`) with light text
- [ ] **System font stack** (no custom fonts needed)
- [ ] **Bold headings** (700 weight) with tight line-height

### What Makes This Style Recognizable

1. **The "handmade digital" aesthetic** - Despite being digital, everything feels crafted by hand: organic waves, rotated elements, dashed lines, cursive annotations
2. **Warmth over coldness** - Cream not white, coral not red, teal not blue - every color choice is warm and inviting
3. **Playful professionalism** - Serious product, fun presentation - emojis, bright colors, but clean layout and excellent typography
4. **Neo-brutalist touches** - Bold black borders and solid shadows give weight and tactility to flat design
5. **Color as wayfinding** - Different section backgrounds create natural visual chapters

### Quick Start

To immediately capture this aesthetic:

```css
:root {
  --bg-cream: #fff9eb;
  --color-teal: #45ad94;
  --color-yellow: #ffe711;
  --color-coral: #ff7f4a;
  --color-pink: #ff94e7;
  --color-black: #000000;
  --border: 2px solid var(--color-black);
  --radius: 6px;
  --brutal-shadow: 8px 8px 0 0 var(--color-black);
}

body {
  background: var(--bg-cream);
}

.btn {
  border: var(--border);
  border-radius: var(--radius);
  padding: 8px 24px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.btn:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--brutal-shadow);
}

.card {
  background: white;
  border: var(--border);
  border-radius: 12px;
  padding: 24px;
}
```

This design system creates a **friendly, trustworthy, and fun aesthetic** that stands out from typical SaaS websites. Apply the rules consistently, and your product will feel like a natural extension of the Youform brand family - different content, same visual DNA.
