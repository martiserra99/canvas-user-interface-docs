---
name: User Interface
---

# User interface

The UI (user interface) object is the object that holds a reference of the canvas and is the responsible to draw what you define.

To create this object you first need to have a canvas element in the html, like so:

```html
<canvas id="ui"></canvas>
```

Then, you have to use this function:

```javascript
const ui = canvasUI.ui.new("#ui");
```

The argument is the selector of the canvas and the returned value is the UI object.

You have to define what you want to draw on the canvas and to achieve it you first need to create an element like that:

```javascript
const text = canvasUI.view.new("text-1", "text");
```

You don't need to understand right away what the above code does because we will explain in another section how to create graphical elements.

This element needs to be drawn and to achieve it we have to call the following function with the element to draw as argument:

```javascript
ui.start(text);
```

This function keeps drawing the element every frame. This means that if you change a property in the text this change will be reflected in the canvas immediately.

If you want to stop the UI from drawing the element you can call this function:

```javascript
ui.end();
```
