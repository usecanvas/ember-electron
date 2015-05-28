import Ember from 'ember';

const ipc = window.requireNode('ipc');

export default Ember.Object.extend({
  addListener: function addListener(event, callback) {
    ipc.on(event, function sendEvent(payload) {
      try {
        payload = JSON.parse(payload);
        callback(payload);
      } catch(err) {
        console.warn(`Error parsing IPC payload: ${payload}.`)
      }
    });
  }
});