/**
 * @desc Renders block labels
 * @param {*} param0
 */
export const renderBlock = ({ model, className }) => `
<span class="block-icon-container">${model.get("icon")}</span>
<span>
${model.get("label")}
</span>
`;

/**
 * @desc Checks to see if block exist in the blockManager blocks configuration option
 * @param {string} name - block name
 * @param {object} blocks - blockManager blocks configuration option
 */
export const toAdd = (name, blocks) => blocks?.indexOf(name) >= 0;

/**
 * @desc Initializes plugin using plugin initialization function
 * @param {function} initPlugin - Plugin initialization function
 * @param {object} pluginOpts - Plugin options
 */
export const addPlugin = (initPlugin, editor, pluginOpts) =>
  initPlugin(editor, pluginOpts);

/**
 * @desc
 * @param {object} attrs
 */
export const attrsToString = (attrs) => {
  const result = [];

  for (let key in attrs) {
    let value = attrs[key];
    const toParse = value instanceof Array || value instanceof Object;
    value = toParse ? JSON.stringify(value) : value;
    result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
  }

  return result.length ? ` ${result.join(" ")}` : "";
};
