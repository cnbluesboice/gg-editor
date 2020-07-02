import React from 'react';

class Command extends React.Component {

  render() {
    const { name, children, ...restProps } = this.props;

    return (
      <div className="command" data-command={name} {...restProps}>
        {children}
      </div>
    );
  }
}

export default Command;
