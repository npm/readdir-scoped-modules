const t = require('tap')
const readdir = require('../lib')
const { join } = require('path')

t.test('basic', async (t) => {
  const dir = t.testdir({
    '@org': { x: {}, y: {} },
    '@scope': { x: {}, y: {} },
    a: { x: {}, y: {} },
    b: { x: {}, y: {} },
  })
  t.same(
    await readdir(dir),
    ['@org/x', '@org/y', '@scope/x', '@scope/y', 'a', 'b'].map((a) => join(a))
  )
})

t.test('sync', async (t) => {
  const dir = t.testdir({
    '@org': { x: {}, y: {} },
    '@scope': { x: {}, y: {} },
    a: { x: {}, y: {} },
    b: { x: {}, y: {} },
  })
  t.same(
    readdir.sync(dir),
    ['@org/x', '@org/y', '@scope/x', '@scope/y', 'a', 'b'].map((a) => join(a))
  )
})
