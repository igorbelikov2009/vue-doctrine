// const getData = async url => {
//   const res = await fetch(url)
//   const json = await res.json()

//   return json
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// try {
//   const data = await getData(url)
//   console.log(data)
// } catch (error) {
//   console.log(error.message)
// }

/* GET https://jsonplaceholder.typicode.com/todos
net::ERR_INTERNET_DISCONNECTED
(ОШИБКА_ИНТЕРНЕТ_ОТКЛЮЧЕН)
Failed to fetch
*/
///////////////////////////////////////////////////

// создаём функцию, которая возвращает промис и которая делает некую искусственную задержку

///////////////////////////////////
// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(), ms))
// }

// delay(2000).then(() => console.log('2 sec'))

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//   console.log('Fetch todo started...')

//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//   .then(data => {
//     console.log('Data:', data)
//   })
//   .catch(error => console.error(error))

//////////// delay(2000) - это промис

//////////////////////////////////////
const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}

delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsynkTodos() {
  console.log('Fetch todo started...')
  await delay(2000)
  const response = await fetch(url)
  const data = await response.json()
  console.log('Data:', data)
}

fetchAsynkTodos()

/* Здесь не присутствуют внутренние колбэки, которые мы передаём в методы then.
Мы как будто программируем асинхронный код, но благодаря оператору await, он позволяет  не переходить к следующей строчке, пока промис, который находится справа от него на текущей строчке, не выполнится. */

////////////////////////////////////////////

const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}

delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsynkTodos() {
  try {
    console.log('Fetch todo started...')

    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()

    console.log('Data:', data)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Сделать в любом случае')
  }
}

fetchAsynkTodos()
