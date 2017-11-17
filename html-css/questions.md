## html
### html basics
- A markup language is a set of ... ?       
  
  tags
  
- What is the correct syntax for HTML tag?

  <tag_name>
  
- HTML stands for ...?

  Hyper Text Markup Language
  
- What does an empty element mean?

  An empty element means that it has no no content. For example:
  ```
    More strict
    <br/>
    <input/>
    <img/>
    Less strict
    <br>
    <input>
    <img>
  ```
  
- Are HTML tags case-sensitive?  

  No
  
- Select all correct statements on <title> HTML tag.
  - defines a title in the browser toolbar
  - displays a title for the page in search engine result
  - provides a title for the page when it is added to favorites
  
- What is <!DOCTYPE> used for in HTML?

  The <!DOCTYPE> declaration tells the browser what version of (X)HTML is being used so it will know how to display the page. The declaration may also provide a link to a text file (i.e., the loose DTD) which the browser uses to obtain further information.
  
- What can be specified using <meta> HTML element?

  Metadata is data (information) about data.

  The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.

  Meta elements are typically used to specify _**page description, keywords, author of the document, last modified, and other metadata**_.

  The metadata can be used by browsers (how to display content or reload page), search engines (keywords), or other web services.

  HTML5 introduced a method to let web designers take control over the viewport (the user's visible area of a web page), through the <meta> tag (See "Setting The Viewport" example below).
  
- How can you add comments to your HTML source?

  `<!-- ........ -->`
  
- Is there a difference between `<b>` and `<strong>` tags?
  
  The HTML `<b>` element defines bold text, without any extra importance.
  
  The HTML `<strong>` element defines strong text, with added semantic "strong" importance.
  
- What is the usage of `<noscript>` HTML tag?
  
  The `<noscript>` tag defines an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support script.
  
- Does the browsers display HTML tags on web page?

  The browser does not display the HTML tags, but uses them to determine how to display the document.
  
- What is a HTML tag?

  The `<html>` tag tells the browser that this is an HTML document. It represents the root of an HTML document. It is the container for all other HTML elements (except for the `<!DOCTYPE>` tag).
  
- Select required element for `<head>...</head>` section.

  The <head> element is a container for all the head elements.

  The <head> element can include a title for the document, scripts, styles, meta information, and more.

  The following elements can go inside the <head> element:

  - `<title>` (this element is required in an HTML document)
  - `<style>`
  - `<base>`
  - `<link>`
  - `<meta>`
  - `<script>`
  - `<noscript>`
