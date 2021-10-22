/**
 * Namespaces an HTML ID
 *
 * @param {string} namespace
 * @param {string} id
 * @returns {string}
 */
export const namespaceInputId = (namespace, id) => `${namespace}-${id}`;

/**
 * Namespaces a input name
 *
 * @param {string} name
 * @param {string} namespace
 * @returns {string}
 */
export const namespaceInputName = (name, namespace) => name.replace(/([^\'"\[\]]+)([^\'"]*)/, `${namespace}[$1]$2`);
