// -- AQUÍ PEGA TODO LO DE LAS PESTAÑAS --
const pestañasPostizas = [
    {
      nombre: "Volumen Natural",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_1.jpeg",
      descripcion: "Luce un look natural pero voluminoso. Perfecto para el día a día."
    },
    {
      nombre: "Efecto 3D",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_2.jpeg",
      descripcion: "Aumenta la dimensión de tus ojos con este efecto tridimensional."
    },
    {
      nombre: "Estilo Manga",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_3.jpeg",
      descripcion: "Para una mirada profunda y expresiva, ideal para el maquillaje dramático."
    },
   
    {
      nombre: "Extra Largo",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_8.jpeg",
      descripcion: "Largas, voluminosas y perfectas para un acabado de alto impacto."
    },
    {
      nombre: "Glamour Intenso",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_9.jpeg",
      descripcion: "Un toque de glamour con un volumen extra para impactar en cualquier evento."
    },
    {
      nombre: "Mirada Soñadora",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_10.jpeg",
      descripcion: "Pestañas suaves que abren tu mirada de forma natural y encantadora."
    },
    {
      nombre: "Mirada Magnética",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_11.jpeg",
      descripcion: "Un estilo magnético para que todos los ojos se fijen en ti."
    },
    {
      nombre: "Glamour Seductor",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_12.jpeg",
      descripcion: "Pestañas voluminosas y largas para una mirada irresistible."
    },
    {
      nombre: "Estilo Natural",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_13.jpeg",
      descripcion: "Diseñadas para realzar tu belleza de manera natural, con sutileza."
    },
 
    {
      nombre: "Amanecer Radiante",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_15.jpeg",
      descripcion: "Para despertar una mirada fresca y llena de luminosidad."
    },
    {
      nombre: "Volumen Exagerado",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_16.jpeg",
      descripcion: "Si quieres más volumen y longitud, estas pestañas son para ti."
    },
    {
      nombre: "Estilo Perfecto",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_17.jpeg",
      descripcion: "El estilo ideal para cualquier evento, creando una mirada perfecta."
    },
    {
      nombre: "Mirada Profunda",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_18.jpeg",
      descripcion: "Crea una mirada intensa y profunda con estas pestañas de alto volumen."
    },
    {
      nombre: "Glamour Natural",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_19.jpeg",
      descripcion: "Un toque de glamour sutil, para quienes buscan elegancia y naturalidad."
    },
    {
      nombre: "Volumen Ideal",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_20.jpeg",
      descripcion: "Volumen perfecto para un look equilibrado y sofisticado."
    },
    {
      nombre: "Súper Curvadas",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_21.jpeg",
      descripcion: "Dale forma a tus ojos con estas pestañas que se curvan a la perfección."
    },
    {
      nombre: "Seducción Total",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_22.jpeg",
      descripcion: "Haz que tu mirada sea irresistiblemente seductora con este estilo."
    },
    {
      nombre: "Larga Distancia",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_23.jpeg",
      descripcion: "Largas, definidas y con una curvatura perfecta para un look sofisticado."
    },
    {
      nombre: "Mirada Deslumbrante",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_24.jpeg",
      descripcion: "Deslumbra con un look intenso y dramático que no pasará desapercibido."
    },
    {
      nombre: "Mirada Mariposa",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_25.jpeg",
      descripcion: "Deslumbra tu mirada con un estilo impactante."
    },
    {
      nombre: "Mirada De Diosa",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_26.jpeg",
      descripcion: "Despierta tu poder interior con unas pestañas que hipnotizan, eleva tu mirada y resalta tu belleza."
    },
    {
      nombre: "Encanto Secreto",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_27.jpeg",
      descripcion: "Inspiradas en la elegancia de la noche, estas pestañas realzan tu mirada con un estilo envolvente y misterioso."
    },
    {
      nombre: "Sueño De Medianoche",
      precio: 35000,
      imagen: "imagenes_pestañas/pestañas_28.jpeg",
      descripcion: "Sutiles, seducturas y magicamente irresistibles "
    }
  ];


// -- AQUÍ PEGA TODO LO DE LAS UÑAS --

const uñasPressOn = [
    {
        nombre: "Glamour Natural (Agotado)",
        descripcion: "Las uñas perfectas para un look natural y sofisticado. Llévalas con confianza para cualquier ocasión.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_1.jpeg" 
    },
    {
        nombre: "Elegancia Clásica",
        descripcion: "Un diseño clásico y elegante que resalta tu estilo. Ideal para un look minimalista con mucho impacto.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_2.jpeg"
    },
    {
        nombre: "Chic y Moderna",
        descripcion: "Uñas modernas que combinan con cualquier outfit. Para un toque chic sin esfuerzo.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_3.jpeg"
    },
    {
        nombre: "Arte en Uñas (Agotado)",
        descripcion: "Diseño artístico y único para un look llamativo. Perfectas para las que aman la originalidad.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_4.jpeg"
    },
    {
        nombre: "Noche Estrellada",
        descripcion: "Para un look que brilla con estilo. Ideal para la noche y eventos especiales.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_5.jpeg"
    },
    {
        nombre: "Galácticas",
        descripcion: "Diseño inspirado en el universo. Uñas que te harán destacar como una estrella.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_6.jpeg"
    },
    {
        nombre: "Magia Rosa",
        descripcion: "Un toque de magia y elegancia en tus uñas. Ideal para cualquier evento especial.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_7.jpeg"
    },
    {
        nombre: "Brillo Dorado",
        descripcion: "Uñas brillantes y doradas, para deslumbrar en cualquier ocasión.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_8.jpeg"
    },
    {
        nombre: "Estilo Reflejo (Agotado)",
        descripcion: "Diseño reflectante y moderno, perfecto para las que aman el brillo y el estilo.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_9.jpeg"
    },
    {
        nombre: "Silueta Elegante (Agotado)",
        descripcion: "Un diseño sofisticado que resalta la elegancia de tus manos.",
        precio: 20000,
        imagen: "imagenes_uñas/uñas_10.jpeg"
    },
   
    {
      nombre: "Toque De Elegancia",
      descripcion: "Siente la sofisticacion en cada gesto, con un diseño clasico y refinado que hara que tus manos sean una obra de arte.",
      precio: 30000,
      imagen: "imagenes_uñas/uñas_12.jpeg"
    },
    {
      nombre: "Ritmo Vibes",
      descripcion: "Liberate y deja que tus uñas cuenten tu historia.",
      precio: 30000,
      imagen: "imagenes_uñas/uñas_13.jpeg"
    }    
];


// Función para renderizar productos
function mostrarProductos(lista, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";

    if (lista.length === 0) {
      contenedor.innerHTML = "<p style='grid-column: 1 / -1; text-align: center;'>No se encontraron productos.</p>";
      return;
    }

    lista.forEach(producto => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");

      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toFixed(2)}</p>
        <small>${producto.descripcion}</small>
      `;

      contenedor.appendChild(tarjeta);
    });
}

// Función para filtrar productos combinados
function filtrarProductos(termino) {
  const filtro = termino.toLowerCase();

  const resultadosPestañas = pestañasPostizas.filter(p =>
    p.nombre.toLowerCase().includes(filtro) ||
    p.descripcion.toLowerCase().includes(filtro)
  );

  const resultadosUñas = uñasPressOn.filter(p =>
    p.nombre.toLowerCase().includes(filtro) ||
    p.descripcion.toLowerCase().includes(filtro)
  );

  mostrarProductos(resultadosPestañas, "lista-pestañas");
  mostrarProductos(resultadosUñas, "lista-uñas");
}

// Event listener para el buscador
document.getElementById("buscador").addEventListener("input", (e) => {
  filtrarProductos(e.target.value);
});

// Mostrar todos los productos al cargar la página
mostrarProductos(pestañasPostizas, "lista-pestañas");
mostrarProductos(uñasPressOn, "lista-uñas");