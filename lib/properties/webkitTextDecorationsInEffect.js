'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-text-decorations-in-effect', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-decorations-in-effect');
    },
    enumerable: true
};