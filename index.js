const users = [
  { nombre: "daniel", contraseña: "1234" },
  { nombre: "pedro", contraseña: "5678" },
  { nombre: "juan", contraseña: "9101112" },
  { nombre: "carlitos", contraseña: "131415" },
];


const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("inputUsuario").value;
    const contraseña = document.getElementById("inputContraseña").value;

  for (let index = 0; index < users.length; index++) {
    const element = users[index];
   
    if (element.nombre == usuario && element.contraseña == contraseña) {
      console.log("bienvenido" + "", usuario);
  

      } else {
      console.log("error");
    }

  }
});
