import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';


export default class MyPlugin extends Plugin {

	async onload() {
		this.registerEvent(this.app.workspace.on('file-open', () => {
			console.log("folding..")
			//doing an eval otherwise it don't work. 
			//I don't know why
			eval("this.app.commands.executeCommandById('editor:toggle-fold-properties')")
    }));

	}

	onunload() {

	}

}

