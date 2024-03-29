export default function convertMarkdownToHTML(inputMarkdown : string) : string
{
        // Showdown converts the markdown to HTML
        let showdown  = require('showdown')
        showdown.setOption('tables', 'true');
        let converter = new showdown.Converter()
        let html = converter.makeHtml(inputMarkdown);
        return html;
}