const h1 = document.querySelector('h1')

document.body.addEventListener('mousemove' , (event) => {

    const x = event.clientX;
    const y = event.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    //h1.textContent = `Pozycja myszki: ${event.clientX} , ${event.clientY}`  - względem wyświetlanego okna przeglądarki
    // page  - względem całego dokumentu.
    
    h1.textContent = x + ", " + y;
    
    const r = (x/width)*100;
    const g = (y/height)*100;
    const b = (y/x)*100;

    document.body.style.backgroundColor = `rgb(${r}%, ${g}%, ${b}%)`

})