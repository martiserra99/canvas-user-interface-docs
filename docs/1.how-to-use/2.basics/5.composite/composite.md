---
nav: Composite
title: Composite
---

The composite is an element that it is composed of several elements and behaves like a single one. It is used like a view, but its inner workings are completely different. There are different types of composites and each one of them defines what are the elements it is composed of.

To create a composite, you have to call the function `canvasUI.composite.new(id, type)`. The first argument is the id and the second argument is the type of composite. The returned value is the composite. That is an example:

```javascript
const textArea = canvasUI.composite.new("textArea-1", "textArea")
```

In this example, we have created a composite in which the elements it is composed of are a text view and a frame layout.
