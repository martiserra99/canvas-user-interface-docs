---
nav: Overview
title: Overview
---

**Canvas User Interface** is a JavaScript library used to build user interfaces using the canvas element. It manages all the complexities of using the canvas to let you develop anything you want as easy as possible.

The way it works is by providing you a way to build elements (ex: image), place them as you want (ex: aligned in the middle) and interact with them to make them do something (ex: move when key pressed).

The following code is a minimal example to demonstrate how it is used:

```javascript
import canvasUI from "canvas-user-interface"

const ui = canvasUI.ui.new("#ui")

const screen = canvasUI.layout.new("screen", "frame")
const text = canvasUI.view.new("text", "text")

text.set("text", "Hello World!")
text.get("font").size = 30

screen.insert(text)
text.layoutParams.set("align", {
  horizontal: "middle",
  vertical: "middle",
})

ui.start(screen)
```

Don't worry if you don't understand this code right away. We'll discuss in the next chapters how to use this library.
