---
nav: Insert and remove
title: Insert and remove
---

To insert the elements, you have to use the `.insert(element)` method, like so:

```javascript
const text1 = canvasUI.view.new("text-1", "text")
text1.set("text", "First")

const text2 = canvasUI.view.new("text-2", "text")
text2.set("text", "Second")

const text3 = canvasUI.view.new("text-3", "text")
text3.set("text", "Third")

linear.insert(text1)
linear.insert(text2)
linear.insert(text3)
```

We have inserted three texts, but you can insert whatever you want. You can even insert layouts inside layouts.

To remove an element from the layout, you can use the `.remove(element)` method, like so:

```javascript
linear.remove(text1)
```

You can also use the `.removeAll()` method to remove all the elements:

```javascript
linear.removeAll()
```
