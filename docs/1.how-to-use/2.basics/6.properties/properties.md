---
name: Properties
---

# Properties

Every element (whether it is a view, layout or composite) has some properties that can be used to modify some aspects about it. Every property always has a default value that will be used if this value is not changed. If you want to change the value of the property you have to use the `.set(property, value)` method and if you want to get the value you have to use the `.get(property)` method. The following code is an example:

```javascript
const text1 = canvasUI.view.new("text-1", "text");
text1.set("text", "Hello");
const text = text1.get("text");
```

If you want to create your custom properties for the element you can use the `.custom.set(property, value)` and `.custom.get(property)` methods, like so:

```javascript
text1.custom.set("number", 7);
const number = text1.custom.get("number");
```
