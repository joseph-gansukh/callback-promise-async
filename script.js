const button = document.getElementById('btn')

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

HTMLDocument.prototype.isDOMLoadedYet = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    resolve({'status': 'loaded and ready'})
  })
}).catch(err => {
  console.error(err)
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

const app = async _ => {
  const ready = await document.isDOMLoadedYet
  console.log('ready: ', ready);

  button.addEventListener('click', async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await data.json()
    console.log('todo: ', todo);
  })
  
}

app()


let done = false

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) resolve("Yup, it is done")
  else reject("Nope, still working on it")
})

const checkIfItIsDone = () => {
  isItDoneYet
  .then(yes => console.log(yes))
  .catch(no => console.error(no))
}

checkIfItIsDone()