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
  },
  {
    nombre: "LashVibe - Deluxe Edition",
    precio: 45000,
    imagen: "imagenes_pestañas/pestañas_29.jpeg",
    descripcion: "Realza tu mirada con las pestañas postizas LashVibe. Súper ligeras, reutilizables y con un acabado natural o glam según tu estilo. ¡Listas para impresionar desde el primer parpadeo!"
  },
  {
    nombre: "LashVibe - Deluxe Edition",
    precio: 45000,
    imagen: "imagenes_pestañas/pestañas_30.jpeg",
    descripcion: "Realza tu mirada con las pestañas postizas LashVibe. Súper ligeras, reutilizables y con un acabado natural o glam según tu estilo. ¡Listas para impresionar desde el primer parpadeo!"
  },
  {
    nombre: "Velvet Lash - Natural Glam",
    precio: 45000,
    imagen: "imagenes_pestañas/pestañas_31.jpeg",
    descripcion: "Pestañas postizas de efecto terciopelo para una mirada sutil pero irresistible. Flexibles, cómodas y fáciles de aplicar, ideales para cualquier ocasión. ¡Dale a tus ojos el toque de glamour que merecen!"
  },
  {
    nombre: "Velvet Lash - Natural Glam",
    precio: 45000,
    imagen: "imagenes_pestañas/pestañas_32.jpeg",
    descripcion: "Pestañas postizas de efecto terciopelo para una mirada sutil pero irresistible. Flexibles, cómodas y fáciles de aplicar, ideales para cualquier ocasión. ¡Dale a tus ojos el toque de glamour que merecen!"
  },
  {
    nombre: "Drama Queen Lashes",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_33.jpeg",
    descripcion: "Atrévete a ser el centro de atención. Con fibras ultra densas y curvas intensas, estas pestañas dan un volumen dramático que transforma tu mirada en segundos."
  },
  {
    nombre: "Fierce Volume",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_34.jpeg",
    descripcion: "Poderosas y atrevidas. Estas pestañas maximizan el volumen desde la raíz hasta la punta para un efecto bold que no pasa desapercibido."
  },
  {
    nombre: "Lux XXL",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_35.jpeg",
    descripcion: "Diseñadas para elevar tu look con volumen extremo y acabado sofisticado."
  },
  {
    nombre: "Book The Love",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_36.jpeg",
    descripcion: "Este elegante libro de pestañas postizas reúne una cuidada selección de estilos en un formato práctico y visualmente atractivo."
  },
  {
    nombre: "Kit Volumen Supreme",
    precio: 60000,
    imagen: "imagenes_pestañas/pestañas_37.jpeg",
    descripcion: "Cada par está creado con fibras suaves y livianas que aportan cuerpo y densidad sin perder comodidad."
  },
  {
    nombre: "Impact Lash",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_38.jpeg",
    descripcion: "Su diseño en capas aporta densidad y profundidad, perfecto para un look audaz y glamuroso."
  },
  {
    nombre: "Soft Elegance",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_39.jpeg",
    descripcion: "Perfectas para el uso diario o eventos especiales."
  },
  {
    nombre: "Obsession Kit",
    precio: 45000,
    imagen: "imagenes_pestañas/pestañas_40.jpeg",
    descripcion: "Desde un look natural hasta un acabado dramático, cada par está diseñado con fibras flexibles y livianas para máxima comodidad y estilo."
  },
  {
    nombre: "Drama Queen",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_41.jpeg",
    descripcion: "Atrévete a deslumbrar con Drama Queen, unas pestañas postizas ultra voluminosas que elevan tu mirada al siguiente nivel."
  },
  {
    nombre: "Diosa Suprema",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_42.jpeg",
    descripcion: "Luce una mirada divina con pestañas que elevan tu belleza al máximo nivel."
  },
  {
    nombre: "Encanto Natural",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_43.jpeg",
    descripcion: "Ideales para un look fresco y sutil, como si hubieras nacido con ellas."
  },
  {
    nombre: "Mirada Letal",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_44.jpeg",
    descripcion: "Poderosas y definidas: roba todas las miradas con un solo parpadeo."
  },
  {
    nombre: "Sueño de Seda",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_45.jpeg",
    descripcion: "Suaves, ligeras y seductoras, como una caricia en tus ojos."
  },
  {
    nombre: "Reina Salvaje",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_46.jpeg",
    descripcion: "Volumen salvaje y curvatura intensa para las más atrevidas."
  },
  {
    nombre: "Chispa de Ángel",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_47.jpeg",
    descripcion: "Brillo sutil y elegancia celestial para una mirada inocente pero irresistible."
  },
  {
    nombre: "Fabulash",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_48.jpeg",
    descripcion: "Tu aliada diaria para un glamour instantáneo y sin esfuerzo."
  },
  {
    nombre: "Noches de Lujo",
    precio: 18000,
    imagen: "imagenes_pestañas/pestañas_49.jpeg",
    descripcion: "Perfectas para eventos y fiestas, diseñadas para brillar bajo las luces."
  },
  {
    nombre: "Aura Poderosa (20 Uni)",
    precio: 50000,
    imagen: "imagenes_pestañas/pestañas_50.jpeg",
    descripcion: "Es la elección perfecta para quienes buscan realzar su belleza."
  },
  {
    nombre: "Efecto seda",
    precio: 35000,
    imagen: "imagenes_pestañas/pestañas_51.jpeg",
    descripcion: "Es la combinación perfecta entre suavidad y definición."
  }
];


// -- AQUÍ PEGA TODO LO DE LAS UÑAS --

const uñasPressOn = [

  {
      nombre: "Elegancia Clásica",
      descripcion: "Un diseño clásico y elegante que resalta tu estilo. Ideal para un look minimalista con mucho impacto.",
      precio: 20000,
      imagen: "imagenes_uñas/uñas_2.jpeg"
  },
 
  {
      nombre: "Magia Rosa",
      descripcion: "Un toque de magia y elegancia en tus uñas. Ideal para cualquier evento especial.",
      precio: 20000,
      imagen: "imagenes_uñas/uñas_7.jpeg"
  },
  {
      nombre: "Blanco llamativo",
      descripcion: "Uñas brillantes, para deslumbrar en cualquier ocasión.",
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
    nombre: "Toque De Elegancia",
    descripcion: "Siente la sofisticacion en cada gesto, con un diseño clasico y refinado que hara que tus manos sean una obra de arte.",
    precio: 30000,
    imagen: "imagenes_uñas/uñas_12.jpeg"
  },
  {
    nombre: "Ritmo Vibes (Agotado)",
    descripcion: "Liberate y deja que tus uñas cuenten tu historia.",
    precio: 30000,
    imagen: "imagenes_uñas/uñas_13.jpeg"
  },
  {
    nombre: "Hello Glam by Kitty",
    descripcion: "Agrega un toque tierno y con estilo a tus manos con Hello Glam by Kitty, un set de uñas postizas inspirado en el icónico encanto de Hello Kitty.",
    precio: 30000,
    imagen: "imagenes_uñas/uñas_14.jpeg"
  }  
];

// agregar productos lenceria 

const lenceria = [

  {
    nombre: "Rosé Secrets",
    descripcion: "Delicada y seductora, esta pijama en tono rosa suave combina la elegancia de la lencería con la comodidad perfecta.",
    precio: 45000,
    imagen: "imagenes_lenceria/lenceria_1.jpeg"
  },
  {
    nombre: "Pasión Carmesí",
    descripcion: "Despierta tus sentidos con un diseño que combina sensualidad y elegancia en cada encaje.",
    precio: 27000,
    imagen: "imagenes_lenceria/lenceria_2.jpeg"
  },
  {
    nombre: "Pasión Carmesí",
    descripcion: "Despierta tus sentidos con un diseño que combina sensualidad y elegancia en cada encaje.",
    precio: 27000,
    imagen: "imagenes_lenceria/lenceria_3.jpeg"
  },
  {
    nombre: "Noir Desire",
    descripcion: "Déjate envolver por el encanto de Noir Desire, una pijama sexy de satén negro que combina elegancia y seducción.",
    precio: 30000,
    imagen: "imagenes_lenceria/lenceria_4.jpeg"
  },
  {
    nombre: "Noir Desire",
    descripcion: "Déjate envolver por el encanto de Noir Desire, una pijama sexy de satén negro que combina elegancia y seducción.",
    precio: 30000,
    imagen: "imagenes_lenceria/lenceria_5.jpeg"
  },
  {
    nombre: "Mystic Passion",
    descripcion: "Dejate envolver por el encanto del misterio con Mystic Passion, una pijama sexy de un seductor todo morado.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_6.jpeg"
  },
  {
    nombre: "Velvet Whisper",
    descripcion: "Velvet Whisper, diseñada para deslizarse suavemente por la piel, esta prenda destaca por su delicadeza y sofisticación.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_7.jpeg"
  },
  {
    nombre: "Crimson Allure",
    descripcion: "Crimson allure es la definición de deseo elegante. Su intenso color vino pasión evoca sensualidad profunda, mientras su tela sedosa envuelve el cuerpo con delicadeza.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_8.jpeg"
  },
  {
    nombre: "Obsidiana",
    descripcion: "Tentación en negro profundo, Obsidiana es una lencería tipo body que abraza cada curva con encajes delicados y un diseño que revela lo justo para encender la imaginación.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_9.jpeg"
  },
  {
    nombre: "Fuego carmesí",
    descripcion: "Fuego carmesí es una lenceria encendida de pasión, una mezcla perfecta de deseo y elegancia.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_10.jpeg"
  },
  {
    nombre: "Noche Secreta",
    descripcion: "Noche Secreta es un delicado vestido lencero en negro semitrasparente que juega con el misterio y la insinuación.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_11.jpeg"
  },
  {
    nombre: "Rosa De Luna",
    descripcion: "Su tono rosa pastel y su brillo sutil reflejan feminidad, ternura y elegancia. ",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_12.jpeg"
  },
  {
    nombre: "Hechizo Púrpura",
    descripcion: "Es una prenda mágica que combina la sensualidad con un tono púrpura. ",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_13.jpeg"
  },
  {
    nombre: "Pasión Prohibida",
    descripcion: "Una prenda que enciende la imaginación y despierta los sentidos.",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_14.jpeg"
  },
  {
    nombre: "Sombra Deseada",
    descripcion: "Un delicado vestido lencero en negro que deslumbra tu figura. ",
    precio: 35000,
    imagen: "imagenes_lenceria/lenceria_15.jpeg"
  }

];

// Funcion de pirsing de esos de boca o ombligo

const Piercing = [

  {
    nombre: "Jardín de Perlas",
    descripcion: "Valor Unidad",
    precio: 15000,
    imagen: "imagenes_piercing/piercing_1.jpeg"
  },
  {
    nombre: "Silver Mood",
    descripcion: "Valor Unidad",
    precio: 15000,
    imagen: "imagenes_piercing/piercing_2.jpeg"
  },
  {
    nombre: "Pink Glow",
    descripcion: "Valor Unidad",
    precio: 15000,
    imagen: "imagenes_piercing/piercing_3.jpeg"
  },
  {
    nombre: "Golden Touch",
    descripcion: "Valor Unidad",
    precio: 15000,
    imagen: "imagenes_piercing/piercing_4.jpeg"
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

const resultadoslenceria = lenceria.filter(p =>
  p.nombre.toLowerCase().includes(filtro) ||
  p.descripcion.toLowerCase().includes(filtro)
);

const resultadosPiercing = Piercing.filter(p =>
  p.nombre.toLowerCase().includes(filtro) ||
  p.descripcion.toLowerCase().includes(filtro)
);

mostrarProductos(resultadoslenceria, "lista-lenceria");
mostrarProductos(resultadosPestañas, "lista-pestañas");
mostrarProductos(resultadosUñas, "lista-uñas");
mostrarProductos(resultadosPiercing, "lista-piercing");
}

// Event listener para el buscador
document.getElementById("buscador").addEventListener("input", (e) => {
filtrarProductos(e.target.value);
});

// Mostrar todos los productos al cargar la página
mostrarProductos(pestañasPostizas, "lista-pestañas");
mostrarProductos(uñasPressOn, "lista-uñas");
mostrarProductos(lenceria, "lista-lenceria");
mostrarProductos(Piercing, "lista-piercing");