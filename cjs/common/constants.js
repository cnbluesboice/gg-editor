"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EDITOR_EVENTS = exports.PAGE_EVENTS = exports.GRAPH_OTHER_EVENTS = exports.GRAPH_MOUSE_EVENTS = exports.EDITOR_REACT_EVENTS = exports.PAGE_REACT_EVENTS = exports.GRAPH_OTHER_REACT_EVENTS = exports.GRAPH_MOUSE_REACT_EVENTS = exports.STATUS_MULTI_SELECTED = exports.STATUS_GROUP_SELECTED = exports.STATUS_EDGE_SELECTED = exports.STATUS_NODE_SELECTED = exports.STATUS_CANVAS_SELECTED = exports.EVENT_AFTER_ADD_PAGE = exports.EVENT_BEFORE_ADD_PAGE = exports.KONI_CLASS_NAME = exports.MIND_CLASS_NAME = exports.FLOW_CLASS_NAME = exports.CONTEXT_MENU_CONTAINER = exports.MINIMAP_CONTAINER = exports.TOOLBAR_CONTAINER = exports.KONI_CONTAINER = exports.MIND_CONTAINER = exports.FLOW_CONTAINER = void 0;
const FLOW_CONTAINER = 'J_FlowContainer';
exports.FLOW_CONTAINER = FLOW_CONTAINER;
const MIND_CONTAINER = 'J_MindContainer';
exports.MIND_CONTAINER = MIND_CONTAINER;
const KONI_CONTAINER = 'J_KoniContainer';
exports.KONI_CONTAINER = KONI_CONTAINER;
const TOOLBAR_CONTAINER = 'J_ToolbarContainer';
exports.TOOLBAR_CONTAINER = TOOLBAR_CONTAINER;
const MINIMAP_CONTAINER = 'J_MinimapContainer';
exports.MINIMAP_CONTAINER = MINIMAP_CONTAINER;
const CONTEXT_MENU_CONTAINER = 'J_ContextMenuContainer';
exports.CONTEXT_MENU_CONTAINER = CONTEXT_MENU_CONTAINER;
const FLOW_CLASS_NAME = 'Flow';
exports.FLOW_CLASS_NAME = FLOW_CLASS_NAME;
const MIND_CLASS_NAME = 'Mind';
exports.MIND_CLASS_NAME = MIND_CLASS_NAME;
const KONI_CLASS_NAME = 'Koni';
exports.KONI_CLASS_NAME = KONI_CLASS_NAME;
const EVENT_BEFORE_ADD_PAGE = 'beforeAddPage';
exports.EVENT_BEFORE_ADD_PAGE = EVENT_BEFORE_ADD_PAGE;
const EVENT_AFTER_ADD_PAGE = 'afterAddPage';
exports.EVENT_AFTER_ADD_PAGE = EVENT_AFTER_ADD_PAGE;
const STATUS_CANVAS_SELECTED = 'canvas-selected';
exports.STATUS_CANVAS_SELECTED = STATUS_CANVAS_SELECTED;
const STATUS_NODE_SELECTED = 'node-selected';
exports.STATUS_NODE_SELECTED = STATUS_NODE_SELECTED;
const STATUS_EDGE_SELECTED = 'edge-selected';
exports.STATUS_EDGE_SELECTED = STATUS_EDGE_SELECTED;
const STATUS_GROUP_SELECTED = 'group-selected';
exports.STATUS_GROUP_SELECTED = STATUS_GROUP_SELECTED;
const STATUS_MULTI_SELECTED = 'multi-selected';
exports.STATUS_MULTI_SELECTED = STATUS_MULTI_SELECTED;
const GRAPH_MOUSE_REACT_EVENTS = {
  click: 'Click',
  contextmenu: 'ContextMenu',
  dblclick: 'DoubleClick',
  drag: 'Drag',
  dragend: 'DragEnd',
  dragenter: 'DragEnter',
  dragleave: 'DragLeave',
  dragstart: 'DragStart',
  drop: 'Drop',
  mousedown: 'MouseDown',
  mouseenter: 'MouseEnter',
  mouseleave: 'MouseLeave',
  mousemove: 'MouseMove',
  mouseup: 'MouseUp'
};
exports.GRAPH_MOUSE_REACT_EVENTS = GRAPH_MOUSE_REACT_EVENTS;
const GRAPH_OTHER_REACT_EVENTS = {
  afterchange: 'onAfterChange',
  afterchangesize: 'onAfterChangeSize',
  afterviewportchange: 'onAfterViewportChange',
  beforechange: 'onBeforeChange',
  beforechangesize: 'onBeforeChangeSize',
  beforeviewportchange: 'onBeforeViewportChange',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  mousewheel: 'onMouseWheel'
};
exports.GRAPH_OTHER_REACT_EVENTS = GRAPH_OTHER_REACT_EVENTS;
const PAGE_REACT_EVENTS = {
  afteritemactived: 'onAfterItemActived',
  afteriteminactivated: 'onAfterItemInactivated',
  afteritemselected: 'onAfterItemSelected',
  afteritemunactived: 'onAfterItemInactivated',
  afteritemunselected: 'onAfterItemUnselected',
  beforeitemactived: 'onBeforeItemActived',
  beforeiteminactivated: 'onBeforeItemInactivated',
  beforeitemselected: 'onBeforeItemSelected',
  beforeitemunactived: 'onBeforeItemInactivated',
  beforeitemunselected: 'onBeforeItemUnselected',
  keyUpEditLabel: 'onKeyUpEditLabel'
};
exports.PAGE_REACT_EVENTS = PAGE_REACT_EVENTS;
const EDITOR_REACT_EVENTS = {
  aftercommandexecute: 'onAfterCommandExecute',
  beforecommandexecute: 'onBeforeCommandExecute'
};
exports.EDITOR_REACT_EVENTS = EDITOR_REACT_EVENTS;
const GRAPH_MOUSE_EVENTS = Object.keys(GRAPH_MOUSE_REACT_EVENTS);
exports.GRAPH_MOUSE_EVENTS = GRAPH_MOUSE_EVENTS;
const GRAPH_OTHER_EVENTS = Object.keys(GRAPH_OTHER_REACT_EVENTS);
exports.GRAPH_OTHER_EVENTS = GRAPH_OTHER_EVENTS;
const PAGE_EVENTS = Object.keys(PAGE_REACT_EVENTS);
exports.PAGE_EVENTS = PAGE_EVENTS;
const EDITOR_EVENTS = Object.keys(EDITOR_REACT_EVENTS);
exports.EDITOR_EVENTS = EDITOR_EVENTS;