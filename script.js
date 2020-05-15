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
    resolve({status: 'loaded and ready'})
  })
})

document.isDOMLoadedYet
  .then(status => console.log(status))