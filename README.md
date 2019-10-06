Scribble.js
===========

Scribble.js was an old project with the goal of drawing scribbly looking things, such as randomized handwriting, to create more convincing results than a static handwriting font, even one that provides glyph subsitutions to add variation.

<!-- [Live here.](http://1j01.github.io/scribble/font-recorder) -->

Similar Projects
----------------

- [Rough.js](https://roughjs.com/) for drawing scribbly shapes (lines, circles, rectangles, arbitrary polygons)
- [A neural network based technique for rendering handwriting in different styles](https://www.cs.toronto.edu/~graves/handwriting.html) - this is impressive, and obviously much more dynamic in its generation of handwriting, but still it would be interesting to compare results to much simpler techniques for randomizing handwriting, like adding noise to the derivitive of recorded paths (/to the relative points that make up the path)
- [MultiMedium](http://multiism.github.io/multi-medium/) - a later project of mine where the idea is to record handwriting inline in a page, so you record unique data per word instead of using a font and randomizing it

Modules
-------

If scribble.js existed and used modules and was a thing, it might look something like this:

Modules for contexts, pens, and fonts.

A context is an interface to something like a `canvas` or an `svg`.

A pen is the bridge between the context and a drawing action. It can have properties such as color, size, radius, shape, width, height, slant etc.

A font consists of a map of characters to glyph path data, and a function to iterate over it.


font.json
---------

A sample font is given for testing, convinience, or whatever. Maybe you can find some other use for some, uh, typographic data. 

Font data has this structure: 
```js
var pseudoFont = {
    
    name: "Hello World",
    // Glyphs is a map of glyphs (characters) to Paths.
        // Paths are arrays of PathNodes.
            // PathNodes are objects with position (x, y) and pressure (p).
    glyphs: {
        "A":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        "B":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        "C":[{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p},{x,y,p}...],
        ...
    },
    
    // (Optional metadata can be tacked on:)
    metaData: "This stuff Is Optional",
    otherMetaData: "whatever"
};
```
