'use strict';
if (typeof require == 'function' && typeof module == 'object') {
    var assert = require('power-assert');
}
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
            assert(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'ident', {
                start: {
                    line: 12,
                    column: 24
                }
            }).indexOf(assert._capt(zero, 'ident', {
                start: {
                    line: 12,
                    column: 36
                }
            })), 'funcall', {
                start: {
                    line: 12,
                    column: 28
                }
            }) === assert._capt(two, 'ident', {
                start: {
                    line: 12,
                    column: 46
                }
            }), 'binary', {
                start: {
                    line: 12,
                    column: 42
                }
            }), {
                start: {
                    line: 12,
                    column: 19
                },
                path: '/Users/azu/Dropbox/workspace/node/project/power-assert-testem-seed/test/test.js'
            }, '            assert(this.ary.indexOf(zero) === two);'));
        });
        it('should return -1 when the value is not present', function () {
            var minusOne = -1, two = 2;
            assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'ident', {
                start: {
                    line: 16,
                    column: 27
                }
            }).indexOf(assert._capt(two, 'ident', {
                start: {
                    line: 16,
                    column: 39
                }
            })), 'funcall', {
                start: {
                    line: 16,
                    column: 31
                }
            }) === assert._capt(minusOne, 'ident', {
                start: {
                    line: 16,
                    column: 48
                }
            }), 'binary', {
                start: {
                    line: 16,
                    column: 44
                }
            }), {
                start: {
                    line: 16,
                    column: 22
                },
                path: '/Users/azu/Dropbox/workspace/node/project/power-assert-testem-seed/test/test.js'
            }, '            assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\');'), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});