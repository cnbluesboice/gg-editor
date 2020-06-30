import GGEditorCore from 'gg-editor-core';
import { EVENT_BEFORE_ADD_PAGE } from '@common/constants';
import track from '@helpers/track';
import { uniqueId } from '@utils';

export default class Editor extends GGEditorCore {
  constructor(options) {
    super(options);
    // console.log(this, 'this');
    // console.log(this.addListeners(), 'this.addListeners');
    // console.log(this.on(), 'this');
    // console.log(this.off(), 'off');

    this.id = uniqueId();

    this.on(EVENT_BEFORE_ADD_PAGE, ({ className }) => {
      track({ c1: className });
    });
  }
}
