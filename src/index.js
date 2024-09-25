module.exports = function check(str, config) {
  const list = [];
  const pairBrackets = new Map(config);
  const sameBrackets = new Set(config.filter(b => b[0] === b[1]).map(b => b[0]));

  for (let symbol of str) {
    if (pairBrackets.has(symbol)) {
      if (sameBrackets.has(symbol)) {
        if (list.length && list[list.length - 1] === symbol) {
          list.pop();
        } else {
          list.push(symbol);
        }
      } else {
        list.push(symbol);
      }
    } else {
      const lastOpened = list.pop();
      if (pairBrackets.get(lastOpened) !== symbol) {
        return false;
      }
    }
  }

  return list.length === 0;
}
