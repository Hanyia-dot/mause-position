const h1 = document.querySelector('h1')

document.body.addEventListener('mousemove' , (event) => {
    
    //h1.textContent = `Pozycja myszki: ${event.clientX} , ${event.clientY}`  - względem wyświetlanego okna przeglądarki
    h1.textContent = `Pozycja myszki: ${event.pageX} , ${event.pageY}` // względem całego dokumentu

    document.body.style.backgroundColor = `rgb(${event.pageX/3}, ${event.pageY/2}, ${event.pageX/event.pageY*10})`

})