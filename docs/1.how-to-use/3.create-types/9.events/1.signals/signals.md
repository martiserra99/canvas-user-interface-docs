---
nav: Signals
title: Signals
---

Before explaining how to create events you have to understand what are signals and how they work.

Every time that an action occurs on the user interface the UI will send a signal to the element calling the `.signal(signal)` method of the element. There are different types of actions that can occur and these are:

- **mousedown**: The mouse button is pressed inside the user interface.
- **mouseup**: The mouse button is released inside the user interface.
- **mousemove**: The mouse is moved inside the user interface.
- **mouseenter**: The mouse enters the user interface.
- **mouseleave**: The mouse leaves the user interface.
- **keydown**: A key is pressed.
- **keyup**: A key is released.

When calling the `.signal(signal)` method on the element the UI will pass as argument an object with these properties:

- `type`: It is the type of action that occurred.

- `data`: It is data about the action.

The `data` property will contain different data depending on the type of action. If it is a mouse action the data will be the coords of the mouse in this format: `{ x: int, y: int }`. If it is a key action the data will be the key that was pressed or released.

When calling the `.signal(signal)` method on the element, the element will check if there are events that were triggered and if that's the case it will execute its corresponding event listeners. Then, if the element is a layout, it will call the `.signal(signal)` method on each child, and if it is a composite, it will call the `.signal(signal)` method on the element. In both cases the object that will be passed as argument will be the same that it received in its `.signal(signal)` method.
