export default (editor, opts) => {
  const sm = editor.StyleManager;
  const csm = opts.customStyleManager;

  const {
    textGeneral,
    textLayout,
    textTypography,
    textBorders,
    textBg,
    sectors
  } = csm;
  sm.getSectors().reset(
    sectors && sectors.length
      ? sectors
      : [
          {
            name: textGeneral,
            open: false,
            buildProps: [
              "display",
              "flex-direction",
              "flex-wrap",
              "justify-content",
              "align-items",
              "align-content",
              "order",
              "flex-basis",
              "flex-grow",
              "flex-shrink",
              "align-self"
            ]
          },
          {
            name: textTypography,
            open: false,
            buildProps: [
              "font-family",
              "font-size",
              "font-weight",
              "letter-spacing",
              "color",
              "line-height",
              "text-align",
              "text-shadow"
            ],
            properties: [
              {
                property: "text-align",
                list: [
                  { value: "left", className: "fa fa-align-left" },
                  { value: "center", className: "fa fa-align-center" },
                  { value: "right", className: "fa fa-align-right" },
                  { value: "justify", className: "fa fa-align-justify" }
                ]
              }
            ]
          },
          {
            name: textLayout,
            open: false,
            buildProps: [
              "width",
              "height",
              "max-width",
              "min-height",
              "margin",
              "padding"
            ]
          },
          {
            name: textBorders,
            open: false,
            buildProps: ["border-radius", "border"]
          },
          {
            name: textBg,
            open: false,
            buildProps: ["background-color", "box-shadow"]
          }
        ]
  );
};
