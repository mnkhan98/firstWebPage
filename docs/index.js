document.querySelector('#Book').addEventListener('click', function() {
   let modalMask = document.querySelector('#modal-mask')
   modalMask.style.display= 'flex'
  })

  document.querySelector('#modal-close').addEventListener('click', function() {
    let modalMask = document.querySelector('#modal-mask')
    modalMask.style.display= 'none'
   })

   document.querySelector('#modal-mask').addEventListener('click', function() {
    let modalMask = document.querySelector('#modal-mask')
    modalMask.style.display= 'none'
   })

