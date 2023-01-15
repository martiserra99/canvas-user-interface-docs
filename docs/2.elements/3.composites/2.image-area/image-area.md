---
nav: Image Area
---

# Image Area (imageArea)

It is an area in which there is an image inside. You can define the background color, the image, the size of the area...

```javascript
const imageArea = canvasUI.composite.new("imageArea-1", "imageArea");

imageArea.set("size", {
  width: { unit: "px", value: 200 },
  height: { unit: "px", value: 150 },
});
imageArea.set("imageSrc", "img/js.ico");
imageArea.set("imageSize", { width: 100, height: 100 });

imageArea.set("background", "#edede9");
imageArea.set("border", { size: 5, color: "#023047" });
imageArea.set("corner", { type: "round", size: 20 });
```
