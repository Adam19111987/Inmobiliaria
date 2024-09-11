// Datos de propiedades de ejemplo
const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Casa moderna frente al mar",
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        descripcion: "Casa moderna con acceso directo a la playa y vistas al océano",
        ubicacion: "101 Ocean Drive, Seaside Town, FL 12345",
        habitaciones: 5,
        baños: 4,
        costo: 6000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Cabaña rústica en el bosque",
        src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        descripcion: "Acogedora cabaña de madera rodeada de naturaleza",
        ubicacion: "987 Forest Trail, Woodland Hills, OR 67890",
        habitaciones: 3,
        baños: 2,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Loft urbano con diseño industrial",
        src: "https://media.admagazine.com/photos/618a5df8cc7069ed5077c492/master/w_1600,c_limit/92785.jpg",
        descripcion: "Loft de estilo industrial en el corazón de la ciudad",
        ubicacion: "345 Downtown Street, Metro City, NY 11223",
        habitaciones: 1,
        baños: 1,
        costo: 3200,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Villa mediterránea con piscina",
        src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
        descripcion: "Villa de estilo mediterráneo con amplio jardín y piscina privada",
        ubicacion: "432 Mediterranean Blvd, Sun City, CA 91011",
        habitaciones: 6,
        baños: 5,
        costo: 7500,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Dúplex céntrico con terraza",
        src: "https://i.pinimg.com/736x/a4/98/e6/a498e6fd599410f881a2570f564b34ac.jpg",
        descripcion: "Dúplex moderno ubicado en el centro de la ciudad, con una amplia terraza",
        ubicacion: "567 City Center, Urban District, TX 54321",
        habitaciones: 3,
        baños: 2,
        costo: 4000,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Casa familiar en suburbio tranquilo",
        src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        descripcion: "Casa ideal para familias, ubicada en una zona residencial tranquila",
        ubicacion: "123 Maple Street, Suburbia, WA 98765",
        habitaciones: 4,
        baños: 3,
        costo: 2800,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Ático con vistas al río",
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        descripcion: "Ático moderno con impresionantes vistas al río y la ciudad",
        ubicacion: "678 Riverside Drive, River City, IL 78901",
        habitaciones: 2,
        baños: 2,
        costo: 4700,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Estudio compacto en el centro",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        descripcion: "Pequeño estudio ideal para una persona, ubicado en el centro de la ciudad",
        ubicacion: "890 Main Street, Central City, NY 56789",
        habitaciones: 1,
        baños: 1,
        costo: 1500,
        smoke: true,
        pets: false,
    },
];


propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Estudio minimalista en el centro",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGlvJTIwYXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Pequeño pero acogedor estudio perfecto para una persona o una pareja.",
        ubicacion: "789 Downtown Blvd, Big City, NY 12345",
        habitaciones: 1,
        baños: 1,
        costo: 1500,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casa rústica en las afueras",
        src: "https://media.gettyimages.com/id/1053103648/es/foto/acogedora-casa-interior.webp?s=1024x1024&w=gi&k=20&c=AxhIzlLhI6Ni42QExhCqlVR2jDBgO9TwDAJe_lq5wdA=",
        descripcion: "Una espaciosa casa de campo perfecta para los amantes de la naturaleza.",
        ubicacion: "234 Countryside Road, Green Valley, TX 78910",
        habitaciones: 4,
        baños: 3,
        costo: 2800,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse con vistas a la ciudad",
        src: "https://media.gettyimages.com/id/154919185/es/foto/suite-tipo-penthouse.webp?s=1024x1024&w=gi&k=20&c=9Hrc_gbxBp-UPqdLFWynAmRJ9PCiVHDMnOfQr1TijY0=",
        descripcion: "Un lujoso penthouse con una vista panorámica espectacular.",
        ubicacion: "987 Skyline Drive, Metropolis, CA 65432",
        habitaciones: 3,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casa familiar con amplio jardín",
        src: "https://media.gettyimages.com/id/76746050/es/foto/exterior-of-colonial-style-house.webp?s=1024x1024&w=gi&k=20&c=3MqwWDLIlQ7IcrnjGt_CRrMOvedZod3a5c0jKagk4So=",
        descripcion: "Ideal para familias, cuenta con un gran jardín y patio trasero.",
        ubicacion: "321 Suburbia Lane, Pleasantville, FL 54321",
        habitaciones: 5,
        baños: 3,
        costo: 3200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Loft industrial en zona artística",
        src: "https://media.gettyimages.com/id/872093006/es/foto/mural-on-industrial-building-in-midtown-manhattan-along-8th-avenue-and-west-44th-street-new.webp?s=1024x1024&w=gi&k=20&c=b7RRUO_AjZddeTzK2PJiu1ZxH9pQUWnfNWx85Qh6krc=",
        descripcion: "Un loft espacioso con un diseño industrial ideal para artistas.",
        ubicacion: "654 Art District, Creativa City, OR 87654",
        habitaciones: 2,
        baños: 2,
        costo: 2700,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Cabaña de montaña con vista al lago",
        src: "https://media.gettyimages.com/id/1327080125/es/foto/casa-triangular-moderna-del-lago-en-oto%C3%B1o.webp?s=1024x1024&w=gi&k=20&c=GnfNfdMeC_qiuNBDEAzeEZ60GaWm_D1FTATKqSc5Ixs=",
        descripcion: "Encantador chalet en la montaña, perfecto para retiros en la naturaleza.",
        ubicacion: "789 Mountain View Rd, High Peaks, CO 12345",
        habitaciones: 3,
        baños: 2,
        costo: 3500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Departamento moderno con balcón",
        src: "https://media.gettyimages.com/id/1344082102/es/foto/gran-balc%C3%B3n-cerrado-de-vidrio.webp?s=1024x1024&w=gi&k=20&c=hXkY_-wbyUgyTsj0DYNMyEcr2drEPBvNqUI3JXvB4hE=",
        descripcion: "Cómodo departamento en la ciudad, con un amplio balcón.",
        ubicacion: "678 City Center Dr, Urbania, CA 67890",
        habitaciones: 2,
        baños: 2,
        costo: 2100,
        smoke: false,
        pets: false,
    }
];

function redenrizarPropiedades(propiedades, containerID){
    let container = document.querySelector(`#${containerID}`);

for(let propiedad of propiedades){
   
    html = `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                    <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i> 
                    ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                    <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i> 
                    ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
            </div>
        </div>
    </div>
`;  
   container.innerHTML += html;
}
}




let botonVentas = document.querySelector('#verTodasVenta');
botonVentas.addEventListener('click', function(){
    redenrizarPropiedades(propiedades_venta.slice(0 ,3), "ventaContainer")
 

});


let botonAlquiler = document.querySelector('#verTodasAlquiler');
botonAlquiler.addEventListener('click', function(){
    redenrizarPropiedades(propiedades_alquiler.slice(0, 3), "alquilerContainer")

});

