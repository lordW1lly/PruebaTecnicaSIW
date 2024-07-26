
const { Router } = require('express');
const axios = require('axios');

const { User, Factura } = require("../dbase");
const router = Router();


//!! HAY QUE HACER EL PRIMER GET ASI HAY ALGO
router.get('/users', async (req,res) => {
    const { name } = req.query;
    if(!name) {
        try {
            
                const allUsers = await User.findAll()
                res.send('allUsers');
    
            
        } catch (error) {
            res.status(404).send('fallo el get all')
        }
    }
      
})

router.get('/facturas', async (req, res) => {
    try {
        //const allFacturas = await Factura.findAll()
        const facturas = [
            //{"idFactura": 123, "cliente": "Pedro", "total": 12.24, "fecha": "2023-05-14T08:23:45.123Z"},
           
                {"idFactura": 123, "cliente": "Pedro", "total": 12.24, "fecha": "2023-05-14T08:23:45.123Z"},
                {"idFactura": 124, "cliente": "Maria", "total": 45.67, "fecha": "2023-06-18T10:15:30.456Z"},
                {"idFactura": 125, "cliente": "Juan", "total": 78.90, "fecha": "2023-07-22T12:45:12.789Z"},
                {"idFactura": 126, "cliente": "Ana", "total": 23.45, "fecha": "2023-08-25T14:30:45.012Z"},
                {"idFactura": 127, "cliente": "Luis", "total": 56.78, "fecha": "2023-09-30T16:20:30.345Z"},
                {"idFactura": 128, "cliente": "Sofia", "total": 34.56, "fecha": "2023-10-05T18:10:15.678Z"},
                {"idFactura": 129, "cliente": "Carlos", "total": 89.01, "fecha": "2023-11-10T20:05:45.901Z"},
                {"idFactura": 130, "cliente": "Laura", "total": 12.34, "fecha": "2023-12-15T22:00:30.234Z"},
                {"idFactura": 131, "cliente": "Miguel", "total": 67.89, "fecha": "2024-01-20T23:55:15.567Z"},
                {"idFactura": 132, "cliente": "Lucia", "total": 45.67, "fecha": "2024-02-25T01:45:00.890Z"}
        ]
        console.log(facturas)
        res.send(facturas)
    } catch (error) {
        res.status(404).send('fallo el envio de facturas')
    }
    
})

router.post("/user", async (req, res) => {
    const { username, name, password } = req.body;
    try {
        const newUser = await User.create({
            username,
            name,
            password
        });
        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });

    } catch (error) {
        res.status(404).send('error en el createUser')
    }
})

router.put("/user/:idUsuario", async (req, res) => {
    const idUsuario = req.params.idUsuario;
    const { username, name, password } = req.body;

    try {
        // Buscar el usuario existente por su ID
        const existingUser = await User.findByPk(idUsuario);

        if (!existingUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar los campos necesarios
        existingUser.username = username;
        existingUser.name = name;
        existingUser.password = password;

        // Guardar los cambios
        await existingUser.save();

        res.status(200).json({ message: 'Usuario actualizado exitosamente', user: existingUser });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).send('Error al actualizar el usuario');
    }
});


module.exports = router;