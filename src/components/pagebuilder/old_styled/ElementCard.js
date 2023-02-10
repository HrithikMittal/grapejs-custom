import { STYLED_ELEMENT_CARD } from ".";

export default function ElementCard({ element }) {
  return (
    <STYLED_ELEMENT_CARD className="">
      <figure>{element.icon}</figure>
      <h4 className="type-name">{element.type}</h4>
    </STYLED_ELEMENT_CARD>
  );
}
