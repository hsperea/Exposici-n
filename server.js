const express = require("express");

const app = express();

app.use(express.json());


//  MongoDB
let usuarios = [
    {
        nombre: "Hector",
        correo: "hector@gmail.com"
    }
];


// Obtener usuarios
app.get("/usuarios", (req, res) => {

    res.json(usuarios);

});

// Guardar usuario
app.post("/usuarios", (req, res) => {

    const nuevoUsuario = {
        nombre: "Juan",
        correo: "juan@gmail.com"
    };

    usuarios.push(nuevoUsuario);

    res.json({
        mensaje: "Usuario guardado"
    });

});


// Servidor Node.js
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});