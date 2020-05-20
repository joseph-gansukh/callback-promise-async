Event Loop --> Call Stack

const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}
foo() // foo, bar, baz


Event Loop --> Message Queue
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 20000)
  baz()
}
debugger
foo() // foo, baz, bar


Event Loop --> Job Queue
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 5000)
  new Promise((resolve) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}
debugger
foo()
