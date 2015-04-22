'use strict'

QUnit.module 'ES6 Array#copyWithin'

deq = deepEqual

test '*' !->
  {copyWithin} = core.Array
  ok typeof! copyWithin is \Function, 'Is function'
  strictEqual (a = copyWithin [1], 0), a
  deq copyWithin([1 2 3 4 5], 0 3), [4 5 3 4 5]
  deq copyWithin([1 2 3 4 5], 1 3), [1 4 5 4 5]
  deq copyWithin([1 2 3 4 5], 1 2), [1 3 4 5 5]
  deq copyWithin([1 2 3 4 5], 2 2), [1 2 3 4 5]
  deq copyWithin([1 2 3 4 5], 0 3 4), [4 2 3 4 5]
  deq copyWithin([1 2 3 4 5], 1 3 4), [1 4 3 4 5]
  deq copyWithin([1 2 3 4 5], 1 2 4), [1 3 4 4 5]
  deq copyWithin([1 2 3 4 5], 0 -2), [4 5 3 4 5]
  deq copyWithin([1 2 3 4 5], 0 -2 -1), [4 2 3 4 5]
  deq copyWithin([1 2 3 4 5], -4 -3 -2), [1 3 3 4 5]
  deq copyWithin([1 2 3 4 5], -4 -3 -1), [1 3 4 4 5]
  deq copyWithin([1 2 3 4 5], -4 -3), [1 3 4 5 5]
  if (-> @).call(void) is void
    throws (-> copyWithin null, 0), TypeError
    throws (-> copyWithin void, 0), TypeError