'use strict';
var assert = require('power-assert');
describe('Array', function () {
    beforeEach(function () {
        this.ary = [
            1,
            2,
            3
        ];
    });
    describe('#indexOf()', function () {
        it('should return index when the value is present', function () {
            var zero = 0, two = 2;
            assert(assert._expr(assert._capt(2 === assert._capt(two, 'ident', {
                start: {
                    line: 10,
                    column: 25
                }
            }), 'binary', {
                start: {
                    line: 10,
                    column: 21
                }
            }), {
                start: {
                    line: 10,
                    column: 19
                },
                path: '/Users/azu/Dropbox/workspace/node/project/power-assert-testem-seed/test/test.js'
            }, '            assert(2 === two);'));
        });
        it('should return -1 when the value is not present', function () {
            var minusOne = -1, two = 2;
            assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'ident', {
                start: {
                    line: 14,
                    column: 27
                }
            }).indexOf(assert._capt(two, 'ident', {
                start: {
                    line: 14,
                    column: 39
                }
            })), 'funcall', {
                start: {
                    line: 14,
                    column: 31
                }
            }) === assert._capt(minusOne, 'ident', {
                start: {
                    line: 14,
                    column: 48
                }
            }), 'binary', {
                start: {
                    line: 14,
                    column: 44
                }
            }), {
                start: {
                    line: 14,
                    column: 22
                },
                path: '/Users/azu/Dropbox/workspace/node/project/power-assert-testem-seed/test/test.js'
            }, '            assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\');'), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});