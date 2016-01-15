'use strict';
new Polymer({
  is: 'toggle-button-content',

  properties: {
    focusIgnore: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },
    name: {
      type: String,
      notify: true
    },
    value: {
      type: Boolean,
      notify: true
    }
  },

  /**
   * Toggle value
   */
    onLabelClick() {

    if(!this.focusIgnore) {
      this.value = !this.value;
    } else {
      this.onFocus();
    }

  },

  /**
   * Всплытие focus-события
   */
    onFocus() {
    this.fire('focus');
  },

  /**
   * Удаление событие трекинга
   * @private
   */
    _removeTracking () {
    let ptb = this.$.toggler;

    ptb._ontrack = function () {
    };
    ptb._trackStart = null;
    ptb._trackMove = null;
    ptb._trackEnd = null;
  },

  ready () {
    this._removeTracking();

    this.$.toggler.removeOwnKeyBindings();
  }

});
