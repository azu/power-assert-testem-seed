"use strict";
if (typeof require == "function" && typeof module == "object") {
    var assert = require('power-assert');
}
function sum(ary){
    return ary.reduce(function (prev, current) {
        return prev + current;
    }, 0);
}
describe('Array', function () {
    var ary = [1, 2, 3];
    describe('#indexOf()', function () {
        it('should return index when the value is present', function () {
            var expected = 1 + 2 + 30;
            assert(sum(ary) === expected);
        });
    });
});