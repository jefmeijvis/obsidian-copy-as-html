import { Notice, TFile} from 'obsidian';
import { copyFormatted } from './richClipboard';
import { addStyling } from './styling';
import convertMarkdownToHTML from './convertMarkdownToHTML';


export default async function onClick(CopyNoteAsHTML : any)
{
    let file : TFile = CopyNoteAsHTML.app.workspace.activeEditor?.file;

    if(!file)
    {
        new Notice("Unable to read the current active note. Please make sure you have a note in focus!");
        return;
    }

    let text = await CopyNoteAsHTML.app.vault.read(file); 
    let html = convertMarkdownToHTML(text)
    let styledHtml = addStyling(html);
    copyFormatted(styledHtml)
    new Notice('Note copied to clipboard: ' + file.basename);
}