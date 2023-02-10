import { toAdd } from "../../helpers";
import { column1, column2, column3, column4 } from "./blocks";

const defaults = {
  category: "Columns",
  blocks: [
    "column-1-block",
    "column-2-block",
    "column-3-block",
    "column-4-block"
  ],
  // style props
  flexGrid: 0,
  stylePrefix: "gjs-",
  rowHeight: 75,
  useBaseStyle: true,
  // label props
  labelColumn1: "One Column",
  labelColumn2: "Two Columns",
  labelColumn3: "Three Columns",
  labelColumn4: "Four Columns"
};

export default (editor, opts) => {
  let bm = editor.BlockManager;
  const config = { ...defaults, ...opts };
  const { blocks } = config;

  if (blocks.length) {
    toAdd("column-1-block", blocks) &&
      bm.add("column-1-block", column1({ ...config, editor }));

    toAdd("column-2-block", blocks) &&
      bm.add("column-2-block", column2({ ...config, editor }));

    toAdd("column-3-block", blocks) &&
      bm.add("column-3-block", column3({ ...config, editor }));

    toAdd("column-4-block", blocks) &&
      bm.add("column-4-block", column4({ ...config, editor }));
  }
};
