import { renderBlock, attrsToString } from "../../helpers";

export function init({ editor, rowHeight, flexGrid, stylePrefix }) {
  const clsRow = `${stylePrefix}row`;
  const clsColumn = `${stylePrefix}column`;

  // Row styles
  const styleRow = flexGrid
    ? `
.${clsRow} {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  padding: 10px;
}
@media (max-width: 768px) {
  .${clsRow} {
    flex-wrap: wrap;
  }
}`
    : `
.${clsRow} {
  display: table;
  padding: 10px;
  width: 100%;
}
@media (max-width: 768px) {
  .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
    width: 100%;
    display: block;
  }
}`;

  // column styles
  const styleClm = flexGrid
    ? `
.${clsColumn} {
  min-height: ${rowHeight}px;
  flex-grow: 1;
  flex-basis: 100%;
}`
    : `
.${clsColumn} {
  width: 8%;
  display: table-cell;
  height: ${rowHeight}px;
}`;

  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim
  };

  const resizerRight = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step
  };

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  if (flexGrid) {
    resizerRight.keyWidth = "flex-basis";
  }

  const rowAttr = {
    class: clsRow,
    "data-gjs-droppable": `.${clsColumn}`,
    "data-gjs-resizable": resizerBtm,
    "data-gjs-name": "Row"
  };

  const colAttr = {
    class: clsColumn,
    "data-gjs-draggable": `.${clsRow}`,
    "data-gjs-resizable": resizerRight,
    "data-gjs-name": "Column"
  };

  if (flexGrid) {
    colAttr["data-gjs-unstylable"] = ["width"];
    colAttr["data-gjs-stylable-require"] = ["flex-basis"];
  }

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsColumn}`];
  editor.on(
    "selector:add",
    (selector) =>
      privateCls.indexOf(selector.getFullName()) >= 0 &&
      selector.set("private", true)
  );

  const attrsRow = attrsToString(rowAttr);
  const attrsClm = attrsToString(colAttr);

  return { attrsRow, attrsCell: attrsClm, styleRow, styleClm };
}

export function column1({
  editor,
  rowHeight,
  flexGrid,
  stylePrefix,
  category,
  labelColumn1 = "One column",
  useBaseStyle = true
}) {
  const { attrsRow, attrsCell, styleRow, styleClm } = init({
    editor,
    rowHeight,
    flexGrid,
    stylePrefix
  });
  return {
    category: category,
    label: labelColumn1,
    icon: `<svg viewBox="0 0 63 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="63" y="23" width="63" height="23" transform="rotate(-180 63 23)" fill="#9A9797" />
  </svg>`,
    attributes: { class: "" },
    content: `${
      useBaseStyle
        ? `<style>
                  ${styleRow}
                  ${styleClm}
                </style>`
        : ""
    }<div ${attrsRow}><div ${attrsCell}></div></div>`,
    render: renderBlock
  };
}

export const column2 = ({
  editor,
  rowHeight,
  flexGrid,
  stylePrefix,
  category,
  labelColumn2 = "Two columns",
  useBaseStyle = true
}) => {
  const { attrsRow, attrsCell, styleRow, styleClm } = init({
    editor,
    rowHeight,
    flexGrid,
    stylePrefix
  });
  return {
    category: category,
    label: labelColumn2,
    icon: `<svg width="55" height="74" viewBox="0 0 55 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="74" width="74" height="17" transform="rotate(-90 0 74)" fill="#9A9797" />
    <rect x="38" y="74" width="74" height="17" transform="rotate(-90 38 74)" fill="#9A9797" />
  </svg>`,
    attributes: { class: "" },
    content: `${
      useBaseStyle
        ? `<style>
            ${styleRow}
            ${styleClm}
          </style>`
        : ""
    }<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>`,
    render: renderBlock
  };
};

export const column3 = ({
  editor,
  rowHeight,
  flexGrid,
  stylePrefix,
  category,
  labelColumn3 = "Three columns",
  useBaseStyle = true
}) => {
  const { attrsRow, attrsCell, styleRow, styleClm } = init({
    editor,
    rowHeight,
    flexGrid,
    stylePrefix
  });
  return {
    category: category,
    label: labelColumn3,
    icon: `<svg viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="74" width="74" height="12" transform="rotate(-90 0 74)" fill="#9A9797" />
    <rect x="32" y="74" width="74" height="13" transform="rotate(-90 32 74)" fill="#9A9797" />
    <rect x="65" y="74" width="74" height="12" transform="rotate(-90 65 74)" fill="#9A9797" />
  </svg>`,
    attributes: { class: "" },
    content: `${
      useBaseStyle
        ? `<style>
            ${styleRow}
            ${styleClm}
          </style>`
        : ""
    }<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>`,
    render: renderBlock
  };
};

export const column4 = ({
  editor,
  rowHeight,
  flexGrid,
  stylePrefix,
  category,
  labelColumn4 = "Four columns",
  useBaseStyle = true
}) => {
  const { attrsRow, attrsCell, styleRow, styleClm } = init({
    editor,
    rowHeight,
    flexGrid,
    stylePrefix
  });
  return {
    category: category,
    label: labelColumn4,
    icon: `<svg viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="74" width="74" height="7" transform="rotate(-90 0 74)" fill="#9A9797" />
    <rect x="19" y="74" width="74" height="7" transform="rotate(-90 19 74)" fill="#9A9797" />
    <rect x="38" y="74" width="74" height="7" transform="rotate(-90 38 74)" fill="#9A9797" />
    <rect x="57" y="74" width="74" height="7" transform="rotate(-90 57 74)" fill="#9A9797" />
  </svg>`,
    attributes: { class: "" },
    content: `${
      useBaseStyle
        ? `<style>
            ${styleRow}
            ${styleClm}
          </style>`
        : ""
    }<div ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
      </div>`,
    render: renderBlock
  };
};
