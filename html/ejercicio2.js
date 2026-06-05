const app = document.getElementById("app")
const url = "https://picsum.photos/id/"

const size ="/200/200"

const Picture = parametro => {
    const src = url + parametro + size;
    return `
        <figure>
            <img src="${src}" alt="" onclick= "deformar">
            <figcaption></figcaption>
        </figure>
    `
}


app.innerHTML = Picture (99)
for (let index =0; index <10; index ++){
    app.innerHTML += Picture(index)
}


let imagenes = document.getElementsByTagName("img")
for( const key in imagenes){
    const imagen = imagenes [key]
    imagen.addEventListener("click", deformar)
}

function deformar(e){
    e.target.classList.toogle("redonda")
}