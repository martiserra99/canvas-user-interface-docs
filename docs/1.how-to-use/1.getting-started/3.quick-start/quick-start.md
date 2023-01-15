---
name: Quick Start
---

# Quick Start

To give you an idea about this library I will show you how to create a text that's in the middle of the screen that changes its color when you click it.

You first need to install this library as I have explained in the installation section. Once you have done that you have to include a \<canvas\> in your html file and give it an id, like so:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Canvas UI - JavaScript UI Library</title>
    <style>
      #ui {
        width: 100vw;
        height: 100vh;
      }
    </style>
    <script type="module" src="js/canvas-ui-types/canvas-ui-types.js"></script>
    <script type="module" src="js/script.js" defer></script>
  </head>
  <body>
    <canvas id="ui"></canvas>
  </body>
</html>
```

In your JavaScript file you have to import the `canvasUI` object of the library like this:

```javascript
import { canvasUI } from "./canvas-ui/canvas-ui.js";
```

Then, you have to create the user interface. To create the user interface you have to write this:

```javascript
const ui = canvasUI.ui.new("#ui");
```

Notice that the argument is the selector of the canvas element.

It will return an object in which you will define what you want to draw. This object has a reference to the canvas so it will automatically draw everything you need.

Now, we have to define what we want to draw on the canvas. To achieve it we will start by creating what we call a frame layout. This is a container that lets you place elements aligned in the middle of the screen. To create it we write:

```javascript
const frame = canvasUI.layout.new("frame-1", "frame");
```

The first argument is an id (it could be whatever you want) and the second argument is used to define that this is a frame layout (there are other type of layouts).

Once we have the layout, we have to create the text and change some of its properties like that:

```javascript
const text = canvasUI.view.new("text-1", "text");
text.set("text", "Hello World!");
```

Once we have done that, we have to insert the text inside the layout and define that we want it in the middle:

```javascript
frame.insert(text);
text.layoutParams.set("align", {
  horizontal: "middle",
  vertical: "middle",
});
```

The text is not visible yet because the layout is not in the user interface. To achieve it we have to write:

```javascript
ui.start(frame);
```

This will start the user interface with the element we said we want to draw. In this case it is the frame layout that contains the text in the middle.

If we want to make the text change its color when we click it we have to write:

```javascript
text.listeners.add("click", function (text, data) {
  text.set("color", "#165");
});
```
