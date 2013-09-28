BetterConsole
=============

## Description 
Better Console is a small JS library that improves the standard browser console functionality.

How to use it
Better Console overrides the standard javscript console, so  you can use it as if it was the javascript console.  The true javascript console can be accessed through `_console` in-case anything is missing.  Several methods have been expanded: `log`, `warn`, `debug`, and `error`.  All other methods will fall through to the standard javascript console.

```javascript
console.log("foo");
```
