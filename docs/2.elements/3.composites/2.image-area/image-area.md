---
nav: Image Area
title: Image Area (imageArea)
---

It is an area in which there is an image inside. You can define the background color, the image, the size of the area...

```javascript
const imageArea = canvasUI.composite.new("imageArea-1", "imageArea")

imageArea.set("size", {
  width: { unit: "px", value: 200 },
  height: { unit: "px", value: 200 },
})

imageArea.set("imageSize", { width: 100, height: 100 })
imageArea.set("imageSrc", "/img/logo.svg")

imageArea.set("background", "#F98E41")
imageArea.set("border", { size: 10, color: "#E0803B" })
imageArea.set("corner", { type: "round", size: 10 })
```

![imageArea](/docs/elements/composites/image-area.svg)
