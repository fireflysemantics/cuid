import { cuid, cuidSlug, isCuid } from './'

var MAX = 2000000;

function collisionTest (fn) {

  var i = 0;
  var ids = {};
  var pass = true;

  while (i < MAX) {
    var id = fn();

    if (!ids[id]) {
      ids[id] = id;
    } else {
      pass = false;
      console.log('Failed at ' + i + ' iterations.');
      break;
    }
    i++;
  }
  return pass;
}
it(`cuid should be collision free`, () => {
    expect(collisionTest(cuid)).toBeTruthy()
})

it(`cuidSlug should be collision free`, () => {
    expect(collisionTest(cuidSlug)).toBeTruthy()
})

it(`Should return a string.`, () => {
    expect(typeof cuid() === 'string').toBeTruthy()
})

it(`Should return only positive non dashed random values`, () => {
    expect(Array.from({length: 100}, cuid)).toBeTruthy()
    //Array.from({length: 1000}, cuid).forEach(v=>console.log(v))
})

it(`should return true for a valid cuid`, () => {
    var id = cuid();
    expect(isCuid(id)).toBeTruthy()
})

/*
test('cuid.isCuid()', async t => {
    await t.ok(cuid.isCuid(id) === true, 'cuid.isCuid() should return true for a valid cuid.');
    await t.ok(cuid.isCuid(null) === false, 'cuid.isCuid() should return false for null.');
    await t.ok(cuid.isCuid(undefined) === false, 'cuid.isCuid() should return false for undefined.');
    await t.ok(cuid.isCuid('abcdefghijklmnopqrstuvwxy') === false, 'cuid.isCuid() should return false for a random string.');
    await t.ok(cuid.isCuid(1) === false, 'cuid.isCuid() should return false for numbers.');
    await t.ok(cuid.isCuid(NaN) === false, 'cuid.isCuid() should return false for NaN.');
    await t.end();
  });*/