import React from 'react';
import withGGEditorContext from '@common/context/GGEditorContext/withGGEditorContext';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.bindEvent();
  }

  handleMouseDown = () => {
    // console.log(1111);
    const { type, size, shape, model } = this.props;

    if (this.page) {
      this.page.beginAdd(type, {
        type,
        size,
        shape,
        ...model,
      });
    }
  }

  bindEvent() {
    const { onAfterAddPage } = this.props;

    onAfterAddPage(({ page }) => {
      this.page = page;
    });
  }

  render() {
    const { src, shape, children, ...restProps } = this.props;

    return (
      <div style={{ cursor: 'pointer' }} onMouseDown={this.handleMouseDown} {...restProps}>
        {/* 可拖拽 */}
        {/* {src ? <img src={src} alt={shape} draggable={false} /> : children} */}
        {/* // 不可拖拽 */}
        {src ? <img src={src} alt={shape} /> : children}
      </div>
    );
  }
}

export default withGGEditorContext(Item);
