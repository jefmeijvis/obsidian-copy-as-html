import { Plugin} from 'obsidian';
import onClick from 'src/onClick';

export default class CopyNoteAsHTML extends Plugin 
{
	async onload() 
	{
		let icon : string = 'clipboard-copy';
		let title : string = 'Copy note as HTML to clipboard';
		let callback = async () => await onClick(this);
		this.addRibbonIcon(icon, title ,callback);
	}
}