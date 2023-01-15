---
name: Element
---

# Element

Elements are the basic building blocks for creating user interfaces. Each element of the UI is placed on some coords, has some size (width and height) and is drawn in a specific way. We can classify them in three classes:

- View: It is a graphic that is displayed on the UI. There are different types of views and each one of them is drawn in a different way (ex: image and text).

- Layout: It is a container of elements that define how the elements it contains are placed. There are different types of layouts and each one of them places its elements in different ways (ex: by rows and columns). The elements that the layout contains are called children.

- Composite: It is an element that is composed of several elements and behaves like a single one. It is used like a view but its inner workings are completely different. There are different types of composites and each one of them defines what are the elements it is composed of.

We will discuss how to build views, layouts and composites in the following sections.
