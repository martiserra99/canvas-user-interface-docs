---
nav: View
title: View
---

The view is a graphic that is displayed on the UI. There are different types of views and each one of them is drawn in a different way (ex: image and text).

To create a view type, you first need to call the `canvasUI.view.newType(name)` function passing as argument the name of the type, like so:

```javascript
const buttonType = canvasUI.view.newType("button")
```

This will return an object that you will use to specify all the data about the type.
