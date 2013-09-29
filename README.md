BetterConsole
=============

Better Console is a small JS library that improves the standard browser console functionality.

How to use it
Better Console overrides the standard javscript console, so  you can use it as if it was the javascript console.  The standard javascript console can be accessed through `_console` in-case anything is missing.  Several methods have been expanded: `log`, `warn`, `debug`, and `error`.  All other methods will fall through to the standard javascript console.  Here are some examples:

```javascript
console.log("foo");
```
![](http://makeitupasigo.com/docs/BetterConsole/logFoo.PNG)
___
```javascript
console.debug("bar");
```
![](http://makeitupasigo.com/docs/BetterConsole/debugBar.PNG)
___
```javascript
console.error("baz");
```
![](http://makeitupasigo.com/docs/BetterConsole/error_Baz.PNG)
___
```javascript
function alpha() {	beta();	}
function beta()  {	gamma(); }
function gamma() {	delta(); }
function delta() {
  console.warn('This is the contents of a warn message inside function delta.')
}				
window.setTimeout(alpha, 4000);	
```
![](http://makeitupasigo.com/docs/BetterConsole/warnWithStack.PNG)





