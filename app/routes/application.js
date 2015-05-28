import Ember from 'ember';
import IPCListener from '../lib/ipc-listener';

export default Ember.Route.extend({
  initializeIPCListener: function initializeIPCListener() {
    const ipcListener = IPCListener.create();
    ipcListener.addListener('filesOpened', this.filesOpened.bind(this));
  },

  filesOpened: function filesOpened(files) {
    this.get('controller.files').setObjects(files);
  },

  actions: {
    didTransition: function didTransition() {
      this.initializeIPCListener();
    },
  },
});