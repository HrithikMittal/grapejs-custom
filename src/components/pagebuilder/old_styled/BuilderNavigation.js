import { Link, useRouteMatch } from "react-router-dom";
import { BackArrowIcon } from ".";
import styled from "styled-components";

const STYLED_NAV = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: #060e4f;
  padding: 16px 24px;
`;

/**
 * Renders the builder navigation
 * @returns
 */
export function BuilderNavigation() {
  //   const { page } = useParams();
  const match = useRouteMatch();
  let return_route = match.url.replace(/(\/page.*)/, "");

  const RenderNav = () => (
    <STYLED_NAV>
      <Link to={return_route} className="flex gap-4 items-center">
        <BackArrowIcon />
        <span>Exit Page Builder</span>
      </Link>
      <div></div>
    </STYLED_NAV>
  );
  return (
    <>
      <RenderNav />
    </>
  );
}
