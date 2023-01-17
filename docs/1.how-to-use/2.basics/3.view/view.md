---
nav: View
title: View
---

The view is a graphic that is displayed on the UI. There are different types of views and each one of them is drawn in a different way (ex: image and text).

To create a view, you have to call the function `canvasUI.view.new(id, type)`. The first argument is the id and the second argument is the type of view. The returned value is the view. That is an example:

```javascript
const text = canvasUI.view.new("text-1", "text")
```
