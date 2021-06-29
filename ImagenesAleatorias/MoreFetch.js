
var contenido = document.querySelector("#contenido");

function traer(){
    //contenido.innerHTML = `ffgjjgjgg`;
   fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(data => {
    // contenido.innerHTML = data;
    console.log(data.results);
  contenido.innerHTML =
  `<img src="${data.results['0'].picture.large}" width="200px" class="rounded-circle img-fluid" > <p>Nombre: ${data.results['0'].name.first} </p>`
    })
}