/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var MyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.registerEvent(this.app.workspace.on("file-open", () => {
      console.log("folding..");
      eval("this.app.commands.executeCommandById('editor:toggle-fold-properties')");
    }));
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLndvcmtzcGFjZS5vbignZmlsZS1vcGVuJywgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJmb2xkaW5nLi5cIilcblx0XHRcdC8vZG9pbmcgYW4gZXZhbCBvdGhlcndpc2UgaXQgZG9uJ3Qgd29yay4gXG5cdFx0XHQvL0kgZG9uJ3Qga25vdyB3aHlcblx0XHRcdGV2YWwoXCJ0aGlzLmFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoJ2VkaXRvcjp0b2dnbGUtZm9sZC1wcm9wZXJ0aWVzJylcIilcbiAgICB9KSk7XG5cblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXG5cdH1cblxufVxuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTRGO0FBRzVGLElBQXFCLFdBQXJCLGNBQXNDLHVCQUFPO0FBQUEsRUFFNUMsTUFBTSxTQUFTO0FBQ2QsU0FBSyxjQUFjLEtBQUssSUFBSSxVQUFVLEdBQUcsYUFBYSxNQUFNO0FBQzNELGNBQVEsSUFBSSxXQUFXO0FBR3ZCLFdBQUssdUVBQXVFO0FBQUEsSUFDM0UsQ0FBQyxDQUFDO0FBQUEsRUFFTDtBQUFBLEVBRUEsV0FBVztBQUFBLEVBRVg7QUFFRDsiLAogICJuYW1lcyI6IFtdCn0K
