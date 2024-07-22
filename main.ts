import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';


export default class MyPlugin extends Plugin {

	async onload() {
		this.registerEvent(this.app.workspace.on('file-open', () => {
			//doing an eval otherwise it don't work. 
			//I don't know why
			if (document.querySelectorAll(".metadata-container .is-collapsed").length == 0) {
				console.log("folding on file open..")
				eval("this.app.commands.executeCommandById('editor:toggle-fold-properties')")

			}


		}));

	}

	onunload() {

	}

}

