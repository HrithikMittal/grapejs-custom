import { forwardRef, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { STYLED_ASIDE, STYLED_TOGGLE } from ".";

/**
 * Renders the builder side bar
 * @returns
 */

const BuilderSidebar = forwardRef(({}, fref) => {
  const [isOpen, onSetOpen] = useState(true);
  return (
    <>
      <STYLED_ASIDE isHidden={!isOpen}>
        {/* @s sidebar toggler */}
        <STYLED_TOGGLE
          isHidden={!isOpen}
          onClick={() => onSetOpen(!isOpen)}
          className="toggle-sidebar">
          <RiArrowUpSLine />
        </STYLED_TOGGLE>
        {/* @s sidebar toggler */}

        <div ref={fref} className="blocks"></div>
      </STYLED_ASIDE>
    </>
  );
});
export default BuilderSidebar;
