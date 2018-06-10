const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const dom = new JSDOM();

it('should work', () => {
  dom.window.document.createElement('canvas').getContext('2d').canvas; //?
});