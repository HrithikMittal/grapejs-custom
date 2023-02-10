import { STYLED_CANVAS } from ".";
import { forwardRef } from "react";
/**
 * Renders builder canvas
 * @returns
 */
const BuilderCanvas = forwardRef((props, fref) => {
  return (
    <STYLED_CANVAS className="" id="gjs-builder-canvas" ref={fref}>
      <props.components />
    </STYLED_CANVAS>
  );
});
export default BuilderCanvas;
