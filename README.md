# Debounce vs Throttle (Javascript) Demo

This is a simple frontend project demonstrating the difference between **debounce** and **throttle** using plain HTML, CSS, and JavaScript.

## Concepts

- **Debounce:** Ensures a function is only called after a certain delay has passed *since the last time* it was invoked.
- **Throttle:** Ensures a function is called *at most once* in a specified time interval, no matter how many times the event is triggered.

### Use Cases

- Debounce: Searching or filtering as you type, to avoid sending too many requests.
- Throttle: Handling scroll or resize events efficiently.

## How to Run

1. Clone the repository
2. Open index.html in your browser.

*No build tools or installations needed.*

## Files Overview

- index.html – Basic layout and input fields.
- style.css – Minimal styling to keep things clear.
- script.js – Contains both debounce and throttle implementations with example use cases (e.g., input field and window scroll).
