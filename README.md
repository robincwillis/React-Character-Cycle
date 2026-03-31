CharCycle
=========

React component to create a character cycling effect on text.

Version 1.0.0

---

### Description

A text scramble / reveal animation inspired by the classic ActionScript effect
on [yugop.com](http://www.yugop.com). Characters are progressively revealed
while random glitch characters fill the remaining positions, creating a
typewriter-meets-glitch aesthetic.

Originally a jQuery plugin (`jquery.charCycle.0.0.1.js`), now a zero-dependency
React component built with hooks.

---

### Installation

```bash
npm install charcycle
```

Or copy `src/CharCycle.jsx` directly into your project.

---

### Usage

```jsx
import CharCycle from 'charcycle';

// Hover to trigger (default)
<CharCycle text="Lorem ipsum dolor sit amet" />

// Click to trigger
<CharCycle text="Click me" trigger="click" />

// Auto-play on mount
<CharCycle text="Hello world" trigger="auto" />

// Custom speed
<CharCycle text="Fast reveal" trigger="auto" speed={2} />
```

---

### Props

| Prop        | Type     | Default    | Description                                      |
|-------------|----------|------------|--------------------------------------------------|
| `text`      | string   | `''`       | The text to animate. **Required.**               |
| `speed`     | number   | `5`        | Initial milliseconds per cycle. Increases by 0.75ms each frame (accelerating reveal). |
| `trigger`   | string   | `'hover'`  | When to start the animation: `'hover'`, `'click'`, or `'auto'`. |
| `className` | string   | —          | Additional CSS class(es) applied to the root `<span>`. |

---

### CSS

The component renders a `<span>` with class `charcycle`. While animating it
also receives the `cycling` class.

```css
.charcycle         { /* idle state   */ }
.charcycle.cycling { /* active state */ }
```

Include `css/charCycle.css` from this repo for the Silkscreen font and demo
styles, or provide your own.

---

### Project Page

[CharCycle](https://robincwillis.github.io/CharCycle/)

---

### License

MIT — [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
