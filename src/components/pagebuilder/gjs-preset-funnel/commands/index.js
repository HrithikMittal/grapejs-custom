// import openImport from "./openImport";
const defaultCmdMap = {
  // "gjs-open-import-webpage": () => openImport(editor, config),
  "custom:set-device-desktop": (e) => e.setDevice("Desktop"),
  "custom:set-device-tablet": (e) => e.setDevice("Tablet"),
  "custom:set-device-mobile-portrait": (e) => e.setDevice("Mobile portrait"),
  "core:clear-canvas": (e) =>
    window.confirm("Confirm that you wish to clear the canvas!") &&
    e.runCommand("core:canvas-clear")
};

const umCmdMap = (um) => ({
  "core:undo": () => um.undo(),
  "core:redo": () => um.redo(),
  "custom:start-tracking-change": () => {
    um.start();
    console.log("Started tracking for changes");
  },
  "custom:stop-tracking-change": () => um.stop(),
  "custom:clear-tracking-stack": () => um.clear()
});

export default (editor, opts) => {
  const cm = editor.Commands;
  const um = editor.UndoManager;
  console.log(editor);
  const cmdMap = { ...defaultCmdMap, ...umCmdMap(um), ...opts?.cmdMap };

  for (let cmd in cmdMap) {
    cm.add(cmd, cmdMap[cmd]);
  }
};
