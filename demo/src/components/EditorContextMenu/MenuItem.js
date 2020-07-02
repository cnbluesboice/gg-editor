import React from 'react';
import { Command } from 'gg-editor';
import upperFirst from 'lodash/upperFirst';
import IconFont from '../../common/IconFont';
import styles from './index.less';


function handleClick(e) {
  console.log(e, 'handleClick');
}

const MenuItem = (props) => {
  const { command, icon, text } = props;

  return (
    <Command name={command} onClick={(e) => { handleClick(e); }}>
      <div className={styles.item}>
        <IconFont type={`icon-${icon || command}`} />
        <span>{text || upperFirst(command)}</span>
      </div>
    </Command>
  );
};

export default MenuItem;
