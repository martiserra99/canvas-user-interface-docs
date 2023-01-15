---
name: Functions
---

# Functions

Every element may have some functions that you can call to perform an action or get a result. To call some function you have to use the `.call(name, ...params)` method, like so:

```javascript
const size = element.call("increaseSize", 2);
```

The first argument is the name of the function and the following arguments are the arguments that will be used in the function.

You can create your custom functions using the `.custom.fun(name, func)` method, like so:

```javascript
text1.custom.fun("increaseNumber", function (text, value) {
  const number = text.custom.get("number") + value;
  text.custom.set("number", number);
  return number;
});
```

Notice how the first parameter of the function is the element itself. The other parameters contain the arguments that you will use when calling the function.

If you want to call a custom function you have to use the `.custom.call(name, ...params)` method, like so:

```javascript
const number = text1.custom.call("increaseNumber", 5);
```
