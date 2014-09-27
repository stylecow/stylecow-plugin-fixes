stylecow plugin fixer
=====================

Stylecow plugin to fix automatically some browser issues:

* Normalizes calc() function
* Fix the old syntax of 'clip: rect()' in ie < 8
* Fix the double margin bug in ie6 on float block elements
* Adds support for min-height in ie<8
* Adds support for opacity in ie<9
* Adds support for ::after, ::before, ::first-line, ::first-letter in ie<9
* Adds support for vmin in ie9
* Adds support for display:inline-block in ie < 8
* Adds support for break-before, break-after, break-inside in webkit
* etc...

You write:

```css
.foo {
    clip: rect(1, 2, 3, 4);
    min-height: 50px;
    width: 23vmin;
}
```

And stylecow converts to:


```css
.foo {
    clip: rect(1, 2, 3, 4);
    *clip: rect(1 2 3 4);
    _height: 50px;
    min-height: 50px;
    width: 23vm;
    width: 23vmin;
}
```
