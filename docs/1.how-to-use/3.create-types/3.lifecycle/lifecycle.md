---
nav: Lifecycle
title: Lifecycle
---

Every element has a lifecycle in which goes through different states. The states that the element goes through are:

- **Create**: The element is created.
- **Start**: The `start()` method of the element is called.
- **Measure**: The `measure(maxSize)` method of the element is called.
- **Locate**: The `locate(coords)` method of the element is called.
- **Draw**: The `draw(ctx)` method of the element is called.
- **End**: The `end()` method of the element is called.

The element will perform some tasks in every state and the tasks that will perform can be a little different depending on whether the element is a view, layout or composite.

To perform these tasks the element will use what we call lifecycle functions. These are functions that are implemented differently by every type of view, layout and composite and they are the ones that let you create any type you want. These functions may have some default behaviour so you may not need to implement them all.

We will cover how to implement lifecycle functions in the next sections.
