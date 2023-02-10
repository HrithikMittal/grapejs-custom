import { SearchInput } from "./SearchInput";
import {
  STYLED_PANEL,
  STYLED_PANEL_SECTION,
  STYLED_PANEL_SECTION_HEADER,
  STYLED_PANEL_SECTION_CONTENT
} from ".";
import { ElementCard } from "./ElementCard";

/**
 * Renders the Elemets tab view
 * @params
 * @returns
 */

export default function BlockPanel({ categories = [] }) {
  return (
    <STYLED_PANEL>
      <div className="sticky top-0 py-[8px] z-[2]">
        <SearchInput />
      </div>
      {categories.map((category) => (
        <STYLED_PANEL_SECTION className="hide-scrollbar">
          <STYLED_PANEL_SECTION_HEADER>
            {category.name}
          </STYLED_PANEL_SECTION_HEADER>
          <STYLED_PANEL_SECTION_CONTENT>
            {category?.elements?.map((element, key) => {
              return (
                <>
                  <ElementCard element={element} />
                </>
              );
            })}
          </STYLED_PANEL_SECTION_CONTENT>
        </STYLED_PANEL_SECTION>
      ))}
    </STYLED_PANEL>
  );
}
