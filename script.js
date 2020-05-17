// Event Loop --> Call Stack

// const bar = () => console.log('bar')
// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }
// // debugger
// foo() // foo, bar, baz


// Event Loop --> Message Queue
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 20000)
//   baz()
// }
// debugger
// foo() // foo, baz, bar


// Event Loop --> Job Queue
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 5000)
//   new Promise((resolve) =>
//     resolve('should be right after baz, before bar')
//   ).then(resolve => console.log(resolve))
//   baz()
// }
// debugger
// foo()



const button = document.getElementById('btn')

// Callback Version

// document.addEventListener('DOMContentLoaded', () => {
//   console.log("loaded and ready")

//   button.addEventListener('click', () => {
//     console.log('will fetch after 5 seconds')

//     setTimeout(() => {
//       console.log('now fetching...')

//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(data => data.json())
//       .then(todo => console.log(todo))
//     }, 
//     5000)
//   })
// })

// Promise Version (ES6)

// let done = true

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) resolve("Yup, it is done")
//   else reject("Nope, still working on it")
// })

// const checkIfItIsDone = () => {
//   isItDoneYet
//   .then(yes => console.log(yes))
//   .catch(no => console.error(no))
// }

// checkIfItIsDone()

HTMLDocument.prototype.isDOMLoadedYet = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    resolve({'status': 'loaded and ready'})
  })
}).catch(err => {
  console.error(err)
})

const buttonClickPro = (btn) => {
  return new Promise((resolve, reject) => {
    btn.addEventListener('click', () => {
      resolve('clicked me')
    })
  })
}

document.isDOMLoadedYet
  .then(status => console.log(status))
  .then(() => {
    return buttonClickPro(button)  
  })
  .then(msg => {
    console.log(msg)
  })

// document.isDOMLoadedYet
//   .then(status => console.log(status))
//   .then(() => {
//     button.addEventListener('click', () => {
//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(data => data.json())
//       .then(todo => console.log('todo :', todo))
//     })
//   })


// Async/Await (ES8)

// const app = async _ => {
//   const ready = await document.isDOMLoadedYet
//   console.log('ready: ', ready);

//   button.addEventListener('click', async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const todo = await data.json()
//     console.log('todo: ', todo);
//   })
  
// }

// app()


