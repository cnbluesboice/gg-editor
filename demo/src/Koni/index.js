import React, { Component } from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Koni } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { KoniContextMenu } from '../components/EditorContextMenu';
import { KoniToolbar } from '../components/EditorToolbar';
import { KoniItemPanel } from '../components/EditorItemPanel';
import { KoniDetailPanel } from '../components/EditorDetailPanel';
import KoniCustomNode from './shape/nodes/KoniCustomNode';
import styles from '../Flow/index.less';

let koniRef;

const allData = {
  nodes: [{ // 代表节点
    type: 'node',
    size: '70*70',
    shape: 'custom-node',
    color: '#FA8C16',
    label: '起止节点',
    x: 55,
    y: 55,
    id: 'ea1184e8',
    icon: 'http://192.168.100.43:2888/attachments/gxq_icon/imsi.svg',
    index: 0,
    isConnect: true,
  }, {
    type: 'node',
    size: '70*70',
    shape: 'custom-node',
    color: '#FA8C16',
    label: '结束节点',
    x: 55,
    y: 255,
    id: '481fbb1a',
    icon: 'http://192.168.100.43:2888/attachments/gxq_icon/imsi.svg',
    index: 2,
    isConnect: false,
  }],
  edges: [{ // 代表连线
    source: 'ea1184e8',
    sourceAnchor: 2,
    target: '481fbb1a',
    targetAnchor: 0,
    id: '7989ac70',
    index: 1,
  }],
};

/*
   * 1:onClick只接收一个参数event
   * 2:
   */

// onDrop(...e) {
//   console.log(e, '目标元素');
// }

export default class thatKoniPage extends Component {
  constructor() {
    super();
    this.state = {
      data: allData,
    };
    this.formatData = this.formatData.bind(this);
  }

  formatData(dataSource, that) {
    const finalData = {
      nodes: [],
      edges: [],
    };
    // console.log(dataSource, 'dataSource');
    dataSource.forEach((item) => {
      if (item.type === 'node') {
        finalData.nodes.push(item);
      } else {
        finalData.edges.push(item);
      }
    });
    console.log(finalData, 'finalData');
    that.setState({
      data: finalData,
    }, () => {
      console.log(that.state.data, '12345data');
    });
  }

  Fn(...event) {
    // console.log(event, 'node');
    // console.log(data, 'data');
    console.log(koniRef.page.getItems(), 'koniRef.page.getItems()');
  }


  lineFn(...event) {
    console.log(event, 'line');
    console.log(koniRef, 'koniRef');
    console.log(koniRef.page.getItems(), 'getItems');
  }

  onMouseUp(e) {
    console.log(e, '鼠标弹起');
    console.log(koniRef.page.getItems(), 'koniRef.page.getItems()');
    const curId = '481fbb1a';
    if (e.item && e.item.id === curId) {
      const allItems = koniRef.page.getItems();
      const arr = [];
      allItems.forEach((item) => {
        arr.push(item.model);
      });
      // console.log(arr, '1111');
      const dataSource = arr.filter((item) => {
        return item.target ? item.target !== curId : item;
      });
      console.log(dataSource, 'dataSource11111');
      setTimeout(() => {
        this.formatData(dataSource, this);
      }, 0);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <KoniToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <KoniItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Koni className={styles.koni} data={data} onNodeClick={(e) => { this.Fn(e); }} onEdgeClick={() => this.lineFn()} onMouseUp={(e) => { this.onMouseUp(e); }} ref={(e) => { koniRef = e; }} />
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <KoniDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <KoniCustomNode />
        <KoniContextMenu />
      </GGEditor>
    );
  }
}
