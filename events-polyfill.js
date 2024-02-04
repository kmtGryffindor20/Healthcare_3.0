// events-polyfill.js
if (typeof EventTarget === 'undefined') {
    var EventTarget = function () {
      this.listeners = {};
    };
  
    EventTarget.prototype.addEventListener = function (type, callback) {
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(callback);
    };
  
    EventTarget.prototype.removeEventListener = function (type, callback) {
      if (this.listeners[type]) {
        this.listeners[type] = this.listeners[type].filter((listener) => listener !== callback);
      }
    };
  
    EventTarget.prototype.dispatchEvent = function (event) {
      if (this.listeners[event.type]) {
        this.listeners[event.type].forEach((listener) => listener.call(this, event));
      }
    };
  }
  
  export { EventTarget };
  