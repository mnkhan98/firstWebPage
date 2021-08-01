let modalMask = document.querySelector('#modal-mask')

document.querySelector('#Book').addEventListener('click', function(e) {
  
  
   modalMask.style.display= 'flex'
  })

document.querySelector('#modal-close').addEventListener('click', function(e) {
    
    
    modalMask.style.display= 'none'
   })

document.querySelector('#modal-mask').addEventListener('click', function() {
     
    
    modalMask.style.display= 'none'
   })

document.querySelector('#modal').addEventListener('click', function(e){
  e.stopImmediatePropagation()
})

document.querySelector('#submit').addEventListener('click', function(e) {
  const nameValue = document.querySelector('#name-input').value
  const emailValue = document.querySelector('#email-input').value
  const phoneValue = document.querySelector('#phone-input').value
  const dateValue = document.querySelector('#date-input').value

  const user = {
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    date: dateValue
  }

  console.log(user)
})