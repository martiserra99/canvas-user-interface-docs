---
name: Image
---

# Image (image)

It is an image. You can define its size and the image that has to draw.

```javascript
const image = canvasUI.view.new("image-1", "image");

image.set("src", "img/logo.svg");
image.set("size", {
  width: 100,
  height: 100,
});
```
