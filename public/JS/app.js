

console.log('here some msg')


const weatherForm =document.querySelector('form')
const search = document.querySelector('input')
// const messageOne= document.querySelector('#message-1')
// const messagetwo = document.querySelector('#message-2')



// weatherForm.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     const location= search.value
//     // messageOne.textContent = '.....loading'
//     // messagetwo.textContent = ''
//     fetch('http://localhost:5000/weather?address=' + location).then((response)=>{
//         response.json().then((data)=>{
//             console.log(data)
//             // if(data.error){
//             //    messageOne.textContent= data.error
//             // }else{
//             //     messageOne.textContent = data.location
//             //     messagetwo.textContent = data.response.current
//             //     console.log(hhh)

//             // }
//         })
//     })

// })