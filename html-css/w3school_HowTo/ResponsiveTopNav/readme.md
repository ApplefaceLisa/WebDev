# How TO - Responsive Top Navigation

### [W3school Link](http://www.w3schools.com/howto/howto_js_topnav.asp)

## Basic Knowledge

#### [Block level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
##### By default, block-level elements begin on new lines, but inline elements can start anywhere in a line.
```
    <address>
        Contact information.
    <article> HTML5
        Article content.
    <aside> HTML5
        Aside content.
    <blockquote>
        Long ("block") quotation.
    <br>
        Break line.
    <canvas> HTML5
        Drawing canvas.
    <dd>
        Definition description.
    <div>
        Document division.
    <dl>
        Definition list.
    <fieldset>
        Field set label.
    <figcaption> HTML5
        Figure caption.
    <figure> HTML5
        Groups media content with a caption (see <figcaption>).
    <footer> HTML5
        Section or page footer.
    <form>
        Input form.
    <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
        Heading levels 1-6.
    <header> HTML5
        Section or page header.
    <hgroup> HTML5
        Groups header information.
    <hr>
        Horizontal rule (dividing line).
    <li>
        List item.
    <main>
        Contains the central content unique to this document.
    <nav>
        Contains navigation links.
    <noscript>
        Content to use if scripting is not supported or turned off.
    <ol>
        Ordered list.
    <output> HTML5
        Form output.
    <p>
        Paragraph.
    <pre>
        Preformatted text.
    <section> HTML5
        Section of a web page.
    <table>
        Table.
    <tfoot>
        Table footer.
    <ul>
        Unordered list.
    <video> HTML5
        Video player.
```

#### [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
###### An inline element occupies only the space bounded by the tags that define the inline element.
```
    <a>                 <b>                 <big>                 <i>                 <small>             <tt>
    <abbr>              <acronym>           <cite>                <code>              <dfn>               <em>
    <kbd>               <strong>            <samp>                <time>              <var>
    <a>                 <bdo>               <br>                  <img>               <map>               <object>
    <q>                 <script>            <span>                <sub>               <sup>               <button>
    <input>             <label>             <select>              <textarea>
```

### Articles
#### [Styling HTML Lists with CSS: Techniques and Resources](https://www.smashingmagazine.com/2009/12/styling-html-lists-with-css-techniques-and-resources/)
- ADDING “FLOAT: LEFT” TO LIST ITEMS LINK
```
In Internet Explorer 6 and 7, adding **_float: left_** to the list items (with no other styles present) will align the list items
horizontally and the list bullets (or list numbers) will disappear. In IE8 and all other browsers, the list items will align
horizontally, but the list bullets (or list numbers) will still be visible.

Another factor to keep in mind when the list items are floated is that the list container (the <ul> element) will collapse when it
contains only floated elements. This occurs the same way in all browsers. Adding **_overflow: hidden_** to the <ul> or <ol> element is
one way to resolve this issue.

To achieve virtually the same effect as float: left in all browsers, the best solution is to use **_display: inline_**.
```
Example code:
```
<!DOCTYPE html>
<html>
<head>
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    /*float: left;*/
    display: inline;
}

li a {
    display: inline-block;   /* horizontal */
    display: block;          /* vertical */
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>

```
