---
nav: Quick Start
title: Quick Start
---

To give you an idea about this library, I will show you how to create a text that's in the middle of the screen that changes its color when we click it.

We first need to set up a new project, and we can use Vite, like so:

```bash
npm create vite@latest my-app -- --template vanilla
```

We have to open up the project and install the library from npm:

```bash
npm i canvas-user-interface
```

After doing that, we have to include a `<canvas>` in our HTML file and give it an id:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/style.css" />
    <title>Vite App</title>
  </head>
  <body>
    <canvas id="ui"></canvas>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

Then, we can define these styles to set the size of the canvas element:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

#ui {
  width: 100vw;
  height: 100vh;
}
```

After that, we have to import the `canvasUI` object in our JavaScript file:

```javascript
import canvasUI from "canvas-user-interface"
```

We have to create the user interface, and we do it writing the following code:

```javascript
const ui = canvasUI.ui.new("#ui")
```

It will return an object in which we will define what we want to draw. This object has a reference to the canvas, so it will automatically draw everything we need.

Now, we have to define what we want to draw on the canvas. To achieve it, we will start by creating what we call a frame layout. This is a container that lets us place elements aligned in the middle of the screen.

```javascript
const frame = canvasUI.layout.new("frame-1", "frame")
```

The first argument is an id and the second argument is used to define that this is a frame layout (there are other type of layouts).

Once we have the layout, we have to create the text and change some of its properties:

```javascript
const text = canvasUI.view.new("text-1", "text")
text.set("text", "Hello World!")
```

We have to insert the text inside the layout and define that we want it in the middle:

```javascript
frame.insert(text)
text.layoutParams.set("align", {
  horizontal: "middle",
  vertical: "middle",
})
```

The text is not visible yet because the layout is not in the user interface. To achieve it, we have to write:

```javascript
ui.start(frame)
```

This will start the user interface with the element we said we want to draw. In this case, it is the frame layout that contains the text in the middle.

If we want to make the text change its color when we click it we have to add an event listener:

```javascript
text.listeners.add("click", function (text, data) {
  text.set("color", "#165")
})
```
