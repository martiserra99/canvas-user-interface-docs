---
nav: Events
---

# Events

Every element can respond to some events and execute what we call event listeners. Event listeners are functions that are called when a specific event happens (ex: click).

You can add event listeners to the elements to add interactivity and perform some action every time that an event is triggered. To do that you have to use the `.listeners.add(name, callback)` method of the element, like so.

```javascript
text.listeners.add("click", function (text, data)) {
  console.log("You clicked the text!");
}
```

The first parameter is the type of event and the second parameter is the function that will be called. The parameters of this function are the element and the data about the event. The data about the event will depend on the type of event that was triggered and it can be the coords that you clicked, the key that you pressed...

There are some events that every element can respond to and they are:

- `"click"`: The mouse button is pressed and released inside the element.
- `"mousedown"`: The mouse button is pressed inside the element.
- `"mouseup"`: The mouse button is released inside the element.
- `"mouseenter"`: The mouse enters the element.
- `"mouseleave"`: The mouse leaves the element.
- `"mousemove"`: The mouse moves inside the element.
- `"keyup"`: A key is pressed.
- `"keydown"`: A key is released.

When a mouse event is triggered (click, mouseup...) the data that will be passed in the event listeners will be the coords in which the mouse event happened. The coords will be in this format: `{ x: int, y: int }`.

When a key event is triggered (keyup or keydown) the data that will be passed in the event listeners will be the key that was pressed or released.

Every type of element can also have other events (ex: a specific key is pressed). However, these are the ones that each of them has.

If you want to remove an event listener from an element you can use the `.listeners.remove(name, callback)` method, like so:

```javascript
text.listeners.remove("click", callback);
```

You can also remove all the event listeners of an event using the `.removeAll()` method:

```javascript
text.listeners.removeAll("click");
```
