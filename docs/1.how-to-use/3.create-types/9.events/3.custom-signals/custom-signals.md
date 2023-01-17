---
nav: Custom signals
title: Custom signals
---

You can use the `.signal(signal)` method to create your custom signals and create events that are triggered when this signal takes place. This technique is very useful when creating events for the composite types, like so:

```javascript
const twoTextsType = canvasUI.composite.newType("twoTexts")

twoTextsType.lifecycle.set("getElement", function (composite) {
  const linear = canvasUI.layout.new("linear", "linear")
  linear.set("size", { width: "auto", height: "auto" })
  linear.set("gap", 20)

  const textL = canvasUI.view.new("textL", "text")
  const textR = canvasUI.view.new("textR", "text")

  textL.set("text", "LEFT")
  textR.set("text", "RIGHT")

  linear.insert(textL)
  linear.insert(textR)

  const signal = (text) => {
    composite.signal({
      type: "clickText",
      data: text.get("text"),
    })
  }

  textL.listeners.add("click", signal)
  textR.listeners.add("click", signal)

  return linear
})

twoTextsType.events.set("clickText", function (text, signal, state) {
  if (signal.type === "clickText") return { event: true, data: signal.data }
  return { event: false }
})
```

In this code, we have created a composite that is composed of a linear layout and two text views. When a text view is clicked, it sends a signal to the composite. The composite has an event that is triggered every time that it receives this signal.
