import { Button } from "@chakra-ui/react";
import {
  STYLED_HISTORY_BUTTON,
  UndoIcon,
  RedoIcon,
  CogIcon
} from ".";

/**
 * Renders the builder responsive bar
 * @returns
 */
export function BuilderResponsiveBar() {
  return (
    <div className="flex bg-white items-center py-4 px-6 justify-between">
      <div className="flex gap-3">
        <STYLED_HISTORY_BUTTON>
          <UndoIcon />
        </STYLED_HISTORY_BUTTON>
        <STYLED_HISTORY_BUTTON>
          <RedoIcon />
        </STYLED_HISTORY_BUTTON>
        <Button variant="primary" leftIcon={<CogIcon />}>
          Settings
        </Button>
      </div>

      <div className="inline-flex gap-6">
        <Button variant="outline" colorScheme="primary">
          Preview
        </Button>
        <Button variant="primary-gradient">Save changes</Button>
      </div>
    </div>
  );
}
