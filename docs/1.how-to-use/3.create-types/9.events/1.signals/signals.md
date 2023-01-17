---
nav: Signals
title: Signals
---

Before explaining how to create events, you have to understand what are signals and how they work.

Every time that an action occurs on the user interface, the UI will send a signal to the element calling the `.signal(signal)` method of the element. There are different types of actions that can occur and these are:

- **mousedown**: The mouse button is pressed inside the user interface.
- **mouseup**: The mouse button is released inside the user interface.
- **mousemove**: The mouse is moved inside the user interface.
- **mouseenter**: The mouse enters the user interface.
- **mouseleave**: The mouse leaves the user interface.
- **keydown**: A key is pressed.
- **keyup**: A key is released.

When calling the `.signal(signal)` method on the element, the UI will pass as argument an object with these properties:

- **type**: It is the type of action that occurred.
- **data**: It is the data about the action (mouse coords, key pressed...).

When calling the `.signal(signal)` method on the element, the element will check if there are events that were triggered, and if that's the case, it will execute its corresponding event listeners.

Then, if the element is a layout, it will call the `.signal(signal)` method on each child, and if it is a composite, it will call the `.signal(signal)` method on its element.
