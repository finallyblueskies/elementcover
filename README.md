# Element size: Cover
A tiny jQuery plugin for enabling background-size: cover; like behaviour on elements

Include cover-element.js in your project. To use, make sure your HTML is set up like so:

```html
<div class="parent">
  <div class="cover-me"></div>
</div>
```
The plugin takes the initial width/height values of `.cover-me`, declared or otherwise and resizes the element based on those values. Just make sure that the parent also has accessible width/height values relative to `.cover-me`. Once all your HTML and CSS is set up, simply call `coverElement()`:

```javascript
$('.cover-me').coverElement();
```

And `.cover-me` will be resized and centered accordingly.
