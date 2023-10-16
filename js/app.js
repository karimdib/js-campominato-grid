
const grigliaDOMElement = document.querySelector('.griglia')
console.log(grigliaDOMElement)

const buttonDOMElement = document.querySelector('.button')
console.log(buttonDOMElement)

buttonDOMElement.addEventListener('click', function() {
    grigliaDOMElement.innerHTML = ''

    for(let i = 0; i < 100; i++){

        const htmlItem = `<div class="griglia__items">${i + 1}</div>`
    
        grigliaDOMElement.innerHTML += htmlItem
        console.log(grigliaDOMElement)
    }

    const itemsGriglia = document.querySelectorAll('.griglia__items')
    console.log(itemsGriglia)

    for (let i = 0; i < itemsGriglia.length; i++){

        const itemCorrente  = itemsGriglia[i]
		
        itemCorrente.addEventListener('click', function() {
            console.log('Hai cliccato sulla casella numero:', i + 1);
            itemCorrente.classList.add('skyblue')
        })

    }

})




