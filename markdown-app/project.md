# THE MARKDOWN PROJECT

first, the markdown is a form of text formatting inside of a file with the .md extension.
for example =>
the # sign returns an h1 formatted text

## returns a h2 formatted text

### returns an h3 formatted text (maximum of heading in markdown)

------
for this project, we've imported two librairies with NPM:
Bootstrap => A Bootstrap library that we will use to bring design and style into this project
marked => A library that allows you to translate a text formatted in Markdown into HTML
And a sample text, in a markdown format => this text is into a JavaScript file, so that we can record it into
a constant (const) then export it in order to work with it in another JS file.

------
So, now we are going to separate the displayed contents on the browser, at the left, the Markdown text content
and at the right the translated text into HTML

------
We will allow users to directly create Markdown formatted text on the browser by typing it into the Markdown content on the left side of the browser. Everything we'll write into this left content will be automatically
translated into an html text that could be visualized on the right content.

------
This kind of action, although harmless for a small project like this, could bring security problems on bigger projects. So we will take it seriously here by learning how to secure this kind of project
