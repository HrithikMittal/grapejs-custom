import {
  headlineBlock,
  audioBlock,
  bulletListBlock,
  basicTextBlock
} from "./blocks";
import { toAdd } from "../../helpers";

const defaults = {
  blocks: [
    "headline-block",
    "audio-block",
    "bullet-list-block",
    "text-basic-block"
  ],
  category: "Text",
  // style props
  useBaseStyle: true,
  // label props
  labelText: "Text",
  labelBulletList: "Bullet list",
  labelHeadline: "Headline"
};

export default (editor, opts) => {
  let bm = editor.BlockManager;
  const config = { ...defaults, ...opts };
  const { blocks } = config;

  if (blocks.length) {
    toAdd("headline-block", blocks) &&
      bm.add("headline-block", headlineBlock(config));

    toAdd("text-basic-block", blocks) &&
      bm.add("text-basic-block", basicTextBlock(config));

    toAdd("bullet-list-block", blocks) &&
      bm.add("bullet-list-block", bulletListBlock(config));

    toAdd("audio-block", blocks) && bm.add("audio-block", audioBlock(config));
  }
};
