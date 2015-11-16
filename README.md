# scrollProgress.js
A super simple plugin that calculates the distance a page has scrolled.

### Add scrollProgress.js to your project
scrollProgress is jQuery dependent

```html
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="scrollProgress.js"></script>
```

### Call the function
Call the function just above the closing body tag or in the app.js file.
```javascript
$('body').scrollProgress();
```

If you're using WordPress call the plugin only on blog posts (optional)
```javascript
$('body.single').scrollProgress();
```

### Options
- height: number
- backgroundColor: string
- opacity: number
- offset: number

```javascript
$('body').scrollProgress({
  height: 4,
  backgroundColor: "rgba(246,36,89, 0.75)",
  offset: 140
});
```
