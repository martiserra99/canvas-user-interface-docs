---
nav: Layout
title: Layout
---

The layout is a container of elements that define how the elements it contains are placed. There are different types of layouts and each one of them places its elements in different ways (ex: by rows and columns). The elements that the layout contains are called children.

To create a layout, you have to call the function `canvasUI.layout.new(id, type)`. The first argument is the id and the second argument is the type of layout. The returned value is the layout. That is an example:

```javascript
const linear = canvasUI.layout.new("linear-1", "linear")
```

In this example, we have created a layout that places its children one next to the other horizontally.

Every layout has some properties that can be used to modify how its children are placed. You have to use the `.set(property, value)` method, like so:

```javascript
linear.set("direction", "vertical")
```

Now, this layout places its children one next to the other vertically (instead of horizontally).

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

Every layout also defines what we call layout parameters. These are parameters that its children can use to define how they have to be placed (ex: in a specific row and column). To use them, you have to use the `.layoutParams.set(param, value)` method of the child, like so:

```javascript
text2.layoutParams.set("position", 1)
text3.layoutParams.set("position", 0)
```

Changing these values, we have changed the order in which these elements are placed.

You can also get the values of the layout parameters by using the `.layoutParams.get(param)` method:

```javascript
const position = text2.layoutParams.get("position")
```

If you want to get an element that's inside the layout, you can use the `.find(id)` method passing the id of the element as argument, like so:

```javascript
const child = linear.find("text-2")
```

This function will also look for elements that are inside layouts that your layout contains. If you don't want that to happen and only want to look for a direct child of the layout, you can pass a second argument with the value `true`, like so:

```javascript
const child = linear.find("text-2", true)
```

This will only look for a direct child. This value is `false` by default.

You can get an array of all the children by using the `children` property, like so:

```javascript
const children = linear.children
```
