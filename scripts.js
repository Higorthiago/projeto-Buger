const lista = document.querySelector('ul')
const bodão = document.querySelector('.showall')
const buttonMalall = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function formaCurrency (value) {
    const newvalue = value.toLocaleString('pt-br',{
        style: 'currency',
       currency: 'BRL'
    })
    return newvalue
}

function showall(productsArray) {
    let myli = ''
    productsArray.forEach((produto) => {
        myli += `
    
            <li>
                <img src=${produto.src}>
                <p>${produto.name}</p>
                <p class="iten-price"> ${formaCurrency(produto.price)}</p>
            </li>
    
        `

    })

    lista.innerHTML = myli
}

function mapAllItems() {
    const newprices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // vai dar 10% de desconto
    }))

    showall(newprices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    lista.innerHTML =

        `
   <li>
        <p>A soma de todos os itens do menu é: ${formaCurrency(totalValue)}</p>
    </li>
    `
}

function filterAlltems () {
    const filterJustVegan = menuOptions.filter( (product) => product.vegan)
    showall(filterJustVegan)
}

bodão.addEventListener('click', () => showall(menuOptions))
buttonMalall.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAlltems)
