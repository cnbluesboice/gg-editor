import React from 'react';
import { NodeMenu, EdgeMenu, GroupMenu, MultiMenu, CanvasMenu, ContextMenu } from 'gg-editor';
import MenuItem from './MenuItem';
import styles from './index.less';

const FlowContextMenu = () => {
  return (
    <ContextMenu className={styles.contextMenu}>
      <NodeMenu>
        <MenuItem command="copy" text="复制节点" />
        <MenuItem command="delete" text="删除节点" />
      </NodeMenu>
      <EdgeMenu>
        <MenuItem command="delete" text="删除连线" />
      </EdgeMenu>
      <GroupMenu>
        <MenuItem command="copy" text="复制分组" />
        <MenuItem command="delete" text="删除分组" />
        <MenuItem command="unGroup" icon="ungroup" text="取消分组" />
      </GroupMenu>
      <MultiMenu>
        <MenuItem command="copy" text="复制" />
        <MenuItem command="paste" text="粘贴" />
        <MenuItem command="addGroup" icon="group" text="添加分组" />
        <MenuItem command="delete" text="删除" />
      </MultiMenu>
      <CanvasMenu>
        <MenuItem command="undo" text="撤销" />
        <MenuItem command="redo" text="返回" />
        <MenuItem command="pasteHere" icon="paste" text="粘贴" />
      </CanvasMenu>
    </ContextMenu>
  );
};

export default FlowContextMenu;
