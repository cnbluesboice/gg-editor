import React from 'react';
import { RegisterNode } from 'gg-editor';

class KoniCustomNode extends React.Component {
  render() {
    const config = {
      draw(item) {
        console.log(item);
        console.log(this, 'this111');
        const keyShape = this.drawKeyShape(item);

        // draw label
        this.drawLabel(item);

        // draw image
        const group = item.getGraphicGroup();
        const model = item.getModel();

        group.addShape('image', {
          attrs: {
            x: -7,
            y: -7,
            img: model.icon,
          },
        });

        return keyShape;
      },
      /**
        * 更新节点，包含文本
        * @override
        * @param  {Object} cfg 节点的配置项
        * @param  {Node} node 节点
        */
      update(cfg, node) {
        console.log(node, 'aaaaa');
        console.log(cfg, 'aaaaa');
      },
      /**
       * 获取控制点
       * @param  {Object} cfg 节点、边的配置项
       * @return {Array|null} 控制点的数组,如果为 null，则没有控制点
       */
      getAnchorPoints(cfg) {
        console.log(cfg, 'aaaaa');
      },
    };
    console.log(config, 'config');
    return <RegisterNode name="koni-custom-node" config={config} />;
  }
}

export default KoniCustomNode;
