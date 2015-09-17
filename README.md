stylecow plugin fixer
=====================

[![Build Status](https://travis-ci.org/stylecow/stylecow-plugin-fixes.svg)](https://travis-ci.org/stylecow/stylecow-plugin-fixes)

Stylecow plugin to fix automatically some browser issues:

* Fix the old syntax of 'clip: rect()' in ie < 8
* Fix the double margin bug in ie6 on float block elements
* Adds support for min-height in ie<8
* Adds support for opacity in ie<9
* Adds support for ::after, ::before, ::first-line, ::first-letter in ie<9
* Adds support for vmin in ie9
* Adds support for display:inline-block in ie < 8
* Adds support for break-before, break-after, break-inside in webkit
* Add support for `resolution` media query: 
  * Converts all `ddpx` and `dpcm` units to dpi (for more compatibility)
  * Converts `min/max-resolution` to `-webkit-min/max-device-pixel-ratio` for webkit
* Fix multiple @charset at-rules
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

More demos in [the tests folder](https://github.com/stylecow/stylecow-plugin-fixes/tree/master/tests/cases)
