'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-marquee-repetition', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-marquee-repetition');
    },
    enumerable: true
};