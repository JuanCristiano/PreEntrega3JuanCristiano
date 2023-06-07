class Item {
    constructor(titulo, autor, sinopsis, editorial, edicion, isbn, precio, stock, tematica){
        this.titulo = titulo
        this.autor = autor
        this.sinopsis = sinopsis
        this.editorial = editorial
        this.edicion = edicion
        this.isbn = isbn
        this.precio = precio
        this.stock = stock
        this.tematica = tematica
        this.fechaIngreso = new Date()
        this.fechaActualizacion = new Date()
    }    
}
const items = JSON.parse(localStorage.getItem("items")) || []

const crearItem = () => {
    const crearItem = document.querySelector("#crearItem")
    crearItem.addEventListener("submit",(e)=>{
        e.preventDefault()
        const titulo = e.target.children["titulo"].value
        const autor = e.target.children["autor"].value
        const sinopsis = e.target.children["sinopsis"].value
        const editorial = e.target.children["editorial"].value
        const edicion = e.target.children["edicion"].value
        const isbn = e.target.children["isbn"].value
        const precio = e.target.children["precio"].value
        const stock = e.target.children["stock"].value
        const tematica = e.target.children["tematica"].value
        const item = new Item(titulo,autor,sinopsis,editorial,edicion,isbn,precio,stock,tematica)
        items.push(item)
        localStorage.setItem("items",JSON.stringify(items))
        verItem(item)
        crearItem.reset()
    })
}

const verItem = (item) =>{
    const tarjetasItems = document.querySelector("#tarjetasItems")
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("tarjeta")
    tarjeta.innerHTML = `
        <h3>${item.titulo}</h3>
        <p><span>Autor:</span> ${item.autor}</p>
        <p><span>Sinopsis:</span> ${item.sinopsis}</p>
        <p><span>Editorial:</span> ${item.editorial}</p>
        <p><span>Edicion:</span> ${item.edicion}</p>
        <p><span>ISBN:</span> ${item.isbn}</p>
        <p><span>Precio:</span> ${item.precio}</p>
        <p><span>Stock:</span> ${item.stock}</p>
        <p><span>Tematica:</span> ${item.tematica}</p>
    `
    tarjetasItems.appendChild(tarjeta)
}

const verItems = () => {
    items.forEach(item => {
        verItem(item)
    })
}

verItems()
crearItem()
