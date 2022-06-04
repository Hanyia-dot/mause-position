const h1 = document.querySelector('h1')

document.body.addEventListener('mousemove' , (event) => {
    
    //h1.textContent = `Pozycja myszki: ${event.clientX} , ${event.clientY}`
    h1.textContent = `Pozycja myszki: ${event.pageX} , ${event.pageY}`

})