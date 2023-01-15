---
nav: User Interface
---

# User Interface

To understand how to create types of views, layouts and composites you first need to understand how the user interface draws everything on the canvas.

The user interface (UI) will start making all the drawings when its `.start(element)` method is called with the element you specify, like so:

```javascript
ui.start(element);
```

After calling this method the user interface will keep drawing the element every frame and every time that happens it will call the following methods of the element:

- `start()`: This method is used to make the element perform some tasks that may be needed for the next steps.

- `measure(maxSize)`: The UI calls this method by passing as argument the maximum size that the element is allowed to be. In this method the element computes its size taking into consideration this maximum size and stores the result in its `size` property. The maximum size that the UI pass is the size of the canvas.

- `locate(coords)`: The UI calls this method by passing as argument the coords that the element has to be located. In this method the element assigns this coords to its `coords` property. The coords that the UI pass are the top left corner of the canvas.

- `draw(ctx)`: The UI calls this method by passing as argument the canvas context in which the element has to make the drawings. In this method the element makes all the drawings it needs to do.

- `end()`: This method is used to make the element perform some final tasks that may be needed.

What the element will do in every one of these functions is a little different depending on whether the element is a view, layout or composite. However, what all of them have in common is that they will perform the tasks we have explained.
