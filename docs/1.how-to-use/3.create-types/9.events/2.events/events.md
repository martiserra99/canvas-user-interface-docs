---
nav: Events
title: Events
---

Now that you understand everything about signals you are ready to understand how to create events.

To create the events that the element type has to respond to you have to use the `.events.set(name, func)` method of the element type, like so:

```javascript
elementType.events.set("clickOutside", function (element, signal, state) {
  // Code
})
```

The first argument is the name of the event and the second argument is a function that will be used to check whether the event was triggered or not.

This function will be called every time that the `.signal(signal)` method of the element is called and it has three parameters. The first one is the element itself and the second one is the object that was passed in the `.signal(signal)` method. The third parameter will be explained later.

The function needs to return an object with these properties:

- **event**: It is a boolean that determines if the event was triggered or not. If it is `true` it means that the event was triggered.
- **data**: It may be defined in case that the `event` property is `true`. It specifies data about the event that the event listeners will be able to use (ex: coords).

The following code shows how to create an event that is triggered when we click outside the element:

```javascript
elementType.events.set("clickOutside", function (element, signal, state) {
  if (signal.type !== "mousedown") return { event: false }
  const coords = signal.data
  if (inRectangle(coords, element.coords, element.size)) return { event: false }
  return { event: true, data: coords }
})

const inRectangle = function (coords, rectangleCoords, rectangleSize) {
  return (
    coords.x >= rectangleCoords.x &&
    coords.y >= rectangleCoords.y &&
    coords.x <= rectangleCoords.x + rectangleSize.width &&
    coords.y <= rectangleCoords.y + rectangleSize.height
  )
}
```

When creating an event it may be needed to store some data for later use. To do that we can use the `state` parameter. This parameter is used to store some data about the state of the element in relation to the event. It has these methods:

- **set(key, value)**: To add or update a value with the specified key.

- **get(key, value)**: To get the value from the specified key. If the key is not defined it will return the value of the second parameter.

- **del(key)**: To delete a key with its value.

- **has(key)**: To check whether the key exists or not. If it exists it will return `true`.

The following code shows how to use the `state` parameter to create an event that is triggered when the same key is pressed twice:

```javascript
elementType.events.set("keyPressedTwice", function (view, signal, state) {
  if (signal.type !== "keydown") return { event: false }
  const key = signal.data
  const lastKey = state.get("lastKey", "")

  if (lastKey === "") state.set("lastKey", key)
  else if (lastKey !== key) state.del("lastKey")
  else {
    state.del("lastKey")
    return { event: true, data: key }
  }

  return { event: false }
})
```
