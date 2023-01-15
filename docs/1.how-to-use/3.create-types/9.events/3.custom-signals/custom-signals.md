---
nav: Custom Signals
---

## Custom signals

You can use the `.signal(signal)` method to create your custom signals and create events that are triggered when this signal takes place. This techinque is very useful when creating events for the composite types, like so:

```javascript
const twoTextsType = canvasUI.composite.newType("twoTexts");

twoTextsType.lifecycle.set("getElement", function (composite) {
  const linear = canvasUI.layout.new("linear", "linear");
  linear.set("size", { width: "auto", height: "auto" });
  linear.set("gap", 20);

  const textLeft = canvasUI.view.new("textLeft", "text");
  textLeft.set("text", "Hello");
  const textRight = canvasUI.view.new("textRight", "text");
  textRight.set("text", "Goodbye");

  linear.insert(textLeft);
  linear.insert(textRight);

  const sendSignal = (text) =>
    composite.signal({ type: "textClick", data: text.get("text") });
  textLeft.listeners.add("click", sendSignal);
  textRight.listeners.add("click", sendSignal);

  return linear;
});

twoTextsType.events.set("clickText", function (text, signal, state) {
  if (signal.type !== "textClick") return { event: false };
  return { event: true, data: signal.data };
});
```

In this code we have created a composite that is composed of a linear layout and two text views. When a text view is clicked it sends a signal to the composite. The composite has an event that is triggered every time that it receives this signal.
