<style>
  body{
    font-size:20px;
  }
  </style>

# Tutor Joes Software Solution, Salem

## CSS - Cascading Style Sheets

<p>CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users.</p>

## Syntax

<pre>
<code>selector {
  property: value;
  property: value;
  property: value;
}
</code>
</pre>

### Types of Selectors

- Universal or Wildcard Selector (\*)
- Element Selector (tag name)
- Class Selector (.)
- ID Selector (#)
- Grouping Selector
- Combinators
  - Descendant Selector (space)
  - Child Selector (>)
  - Adjacent Sibling Selector (+)
  - General Sibling Selector (~)
- Pseudo-elements
  - ::first-line Pseudo-element
  - ::first-letter Pseudo-element
  - ::before and ::after Pseudo-elements
  - ::marker Pseudo-element
  - ::selection Pseudo-element
  - ::placeholder Selector
- Attribute Selectors
  - Attribute Name
  - Attribute Name with Specific Value
  - Attribute Name with Value Containing Substring (~=)
  - Attribute Name with Value Starting with (^=)
  - Attribute Name with Value Containing (\*=)
  - Attribute Name with Value Ending with ($=)
  - Attribute Name with Value Matching Exactly or Starting with Value Followed by Hyphen (|=)
- Pseudo-classes
  - :enabled and :disabled
  - :checked and :not(:checked)
  - :placeholder-shown and :not(:placeholder-shown)
  - :focus
  - :valid and :invalid
  - :required and :optional
  - :read-only and :read-write
  - :in-range and :out-of-range
  - :default
  - :link, :hover, :visited, :active, and :target
  - :first-child and :last-child
  - :nth-child() and :nth-last-child()
  - :nth-of-type() and :nth-last-of-type()
  - :only-child
  - :only-of-type
  - :first-of-type and :last-of-type
  - :empty

## How to add Style in HTML

<p>There are three primary ways to add CSS to HTML: inline styles, internal styles, and external styles. Each method has its own use cases and benefits.</p>

### 1. Inline Styles

Inline styles are applied directly to HTML elements using the style attribute. This method is useful for applying unique styles to a single element.

<pre>
<code>&#x3C;!DOCTYPE html&#x3E;
  &#x3C;html&#x3E;
  &#x3C;head&#x3E;
      &#x3C;title&#x3E;Inline CSS Example&#x3C;/title&#x3E;
  &#x3C;/head&#x3E;
  &#x3C;body&#x3E;
      &#x3C;p style=&#x22;color: blue; font-size: 20px;&#x22;&#x3E;This is an inline styled paragraph.&#x3C;/p&#x3E;
  &#x3C;/body&#x3E;
  &#x3C;/html&#x3E;
</code>
</pre>

### 2. Internal Styles

Internal styles are defined within a &#x3C;style&#x3E; tag in the &#x3C;head&#x3E; section of an HTML document. This method is useful for styling a single page.

<pre>
<code>&#x3C;!DOCTYPE html&#x3E;
&#x3C;html&#x3E;
&#x3C;head&#x3E;
    &#x3C;title&#x3E;Internal CSS Example&#x3C;/title&#x3E;
    &#x3C;style&#x3E;
        p {
            color: green;
            font-size: 18px;
        }
    &#x3C;/style&#x3E;
&#x3C;/head&#x3E;
&#x3C;body&#x3E;
    &#x3C;p&#x3E;This is an internally styled paragraph.&#x3C;/p&#x3E;
&#x3C;/body&#x3E;
&#x3C;/html&#x3E;
</code>
</pre>

### 3. External Styles

External styles are defined in an external CSS file, which is linked to the HTML document using the &#x3C;link&#x3E; tag. This method is useful for applying consistent styles across multiple pages.

<pre>
<code>&#x3C;!DOCTYPE html&#x3E;
&#x3C;html&#x3E;
&#x3C;head&#x3E;
    &#x3C;title&#x3E;External CSS Example&#x3C;/title&#x3E;
    &#x3C;link rel=&#x22;stylesheet&#x22; type=&#x22;text/css&#x22; href=&#x22;styles.css&#x22;&#x3E;
&#x3C;/head&#x3E;
&#x3C;body&#x3E;
    &#x3C;p&#x3E;This is an externally styled paragraph.&#x3C;/p&#x3E;
&#x3C;/body&#x3E;
&#x3C;/html&#x3E;

</code>
</pre>

#### CSS File (styles.css):

<pre>
<code>p {
    color: red;
    font-size: 16px;
}
</code>
</pre>

# CSS Units

# Absolute Length Units

| Unit | Description                  |
| ---- | ---------------------------- |
| cm   | centimeters                  |
| mm   | millimeters                  |
| in   | inches (1in = 96px = 2.54cm) |
| px   | pixels (1px = 1/96th of 1in) |
| pt   | points (1pt = 1/72 of 1in)   |
| pc   | picas (1pc = 12pt)           |

# Relative Length Units

| Unit | Full Form        | Simple Explanation                                                           |
| ---- | ---------------- | ---------------------------------------------------------------------------- |
| em   | Element          | Based on the font-size of the element (2em is 2 times the current font size) |
| ex   | x-height         | Based on the height of the letter "x" (rarely used)                          |
| ch   | Character        | Based on the width of the "0" (zero)                                         |
| rem  | Root Element     | Based on the font-size of the root element (HTML tag)                        |
| vw   | Viewport Width   | 1% of the width of the viewport (browser window)                             |
| vh   | Viewport Height  | 1% of the height of the viewport (browser window)                            |
| vmin | Viewport Minimum | 1% of the smaller dimension of the viewport                                  |
| vmax | Viewport Maximum | 1% of the larger dimension of the viewport                                   |
| %    | Percent          | Based on the size of the parent element                                      |

## CSS Properties List

- Height
- Width
- Margin

  - margin: 20px; All side
  - margin: 10px 20px; top-bottom left-right
  - margin: 10px 20px 30px; top left-right bottom
  - margin: 10px 20px 30px 40px; top right bottom left
  - margin-top: 20px;
  - margin-right: 30px;
  - margin-bottom: 40px;
  - margin-left: 50px;

- Padding

  - padding: 10px;
  - padding: 10px 20px;
  - padding: 10px 20px 30px;
  - padding: 10px 20px 30px 40px;
  - padding-top: 20px;
  - padding-right: 30px;
  - padding-bottom: 40px;
  - padding-left: 50px;

- Border

  - border-top
  - border-right
  - border-bottom
  - border-left
  - border-style
  - border-style
  - border-top-style
  - border-right-style
  - border-bottom-style
  - border-left-style
    - dotted
    - double
    - dashed
    - groove
    - ridge
    - hidden
    - inset
    - solid
  - border-width
    - border-top-width
    - border-right-width
    - border-bottom-width
    - border-left-width
  - border-color
    - border-top-color
    - border-right-color
    - border-bottom-color
    - border-left-color
  - border-radius
    - border-top-right-radius
    - border-top-left-radius
    - border-bottom-left-radius
    - border-bottom-right-radius

- Background

  - background-color
  - background-image
  - background-repeat
  - background-attachment
  - background-origin
  - background-position
    - left top
    - left center
    - left bottom
    - right top
    - right center
    - right bottom
    - center top
    - center center
    - center bottom
    - x% y%
  - background-position-x
  - background-position-y
  - background-size
  - background-clip
  - background
