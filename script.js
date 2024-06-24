const productos = [
    {
        "nombre": "Palanqueta",
        "imagen": "images/palanqueta.jpg",
        "descripcion": "Palanqueta de cacahuate",
        "precio": 12.00
    },
    {
        "nombre": "Barritas Mini",
        "imagen": "images/mini_barritas.png",
        "descripcion": "Paquete de barritas mini",
        "precio": 33.00
    },

    {
        "nombre": "Nuez de la india",
        "imagen": "images/nuez-de-la-india.jpg",
        "descripcion": "Bolsita con nueces de la india",
        "precio": 23.00
    },
    {
        "nombre": "Galletas Principe Tubo",
        "imagen": "images/galletas_principe.png",
        "descripcion": "Paquete de Galletas Principe",
        "precio": 28.00
    },
    {
        "nombre": "Pistaches",
        "imagen": "images/pistachos.jpg",
        "descripcion": "Bolsita con pistaches",
        "precio": 23.00
    },

    {
        "nombre": "Galletas Oreo",
        "imagen": "images/oreo_114.webp",
        "descripcion": "Paquete de Galletas Oreo 114gr",
        "precio": 18.00
    },
    {
        "nombre": "Galletas Arcoiris",
        "imagen": "images/galletas_arcoiris.jpg",
        "descripcion": "Paquete de Galletas Arcoiris",
        "precio": 18.00
    },
    {
        "nombre": "Chicharrones Oyuki",
        "imagen": "images/oyuki.jpg",
        "descripcion": "Chicharrones Oyuki",
        "precio": 12.00
    },
    {
        "nombre": "Papas Totis",
        "imagen": "images/papas_totis.webp",
        "descripcion": "Papas Totis con sal",
        "precio": 20.00
    },
    {
        "nombre": "Dulces Tukuman Mango",
        "imagen": "images/tukuman_mango.webp",
        "descripcion": "Dulces Tukuman Mango",
        "precio": 30.00
    },
    {
        "nombre": "Chocolate Larin Nuez",
        "imagen": "images/larin_nuez.webp",
        "descripcion": "Chocolate Larin Nuez",
        "precio": 14.00
    },
    {
        "nombre": "Galletas Emperador Senzo",
        "imagen": "images/galletas_senzo.webp",
        "descripcion": "Galletas Emperador Senzo 93 gr.",
        "precio": 18.00
    }    


];

const contenedorProductos = document.querySelector(".productos");

productos.forEach(producto => {
    const productoHTML = `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span class="precio">$${producto.precio}</span>
        </div>
    `;
    contenedorProductos.innerHTML += productoHTML;
});
