import { createRenderer } from '@vue/runtime-core';
import { Graphics, Text } from 'pixi.js';

const render = createRenderer({
  createElement(type) {
    let element;
    if (type === 'circle') {
      element = new Graphics();
      element.beginFill(0xDC143C, 1);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }
    return element;
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  patchProp(el, key, preValue, nextValue) { 
    el[key] = nextValue;
  },
  setElementText(node, text) {
    const canvasText = new Text(text);
    node.addChild(canvasText);
  },
  // ticker.add 要实现的
  parentNode(node) {},
  nextSibling(nide){}
});


export function createApp(rootComponent) {
  return render.createApp(rootComponent)
}