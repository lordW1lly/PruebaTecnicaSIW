
const { Router } = require('express');
const axios = require('axios');

const { User, Factura } = require("../dbase");
const router = Router();


//!! HAY QUE HACER EL PRIMER GET ASI HAY ALGO
router.get('/users', async (req,res) => {
    const idUsuario = req.params.idUsuario;
    if(!idUsuario) {
        return res.status(401).send('No autorizado')
    }
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
    const idUsuario = req.query;
    console.log('soy idUsuario', idUsuario)
    if(!idUsuario) {
        return res.status(401).send('No autorizado')
    }
    try {
        const facturas = await Factura.findAll()
        
        //console.log(facturas)
        res.status(200).json(facturas)
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
        const token = Date.now()
        const user = {
            username,
            token,
            idUsuario: newUser.idUsuario

        }
        res.status(201).json({ message: 'Usuario creado exitosamente', user });

    } catch (error) {
        res.status(404).send('error en el createUser')
    }
})


router.put("/user/:idUsuario", async (req, res) => {
    const idUsuario = req.params.idUsuario;
    if(!idUsuario) {
        return res.status(401).send('No autorizado')
    }
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
        res.status(400).send('Error al actualizar el usuario');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    

    try {
        // Verifica las credenciales (esto puede variar según tu base de datos)
        //const user = await User.findOne({ username, password });
        const user = await User.findOne({
            where: {
              username,
              password,
            },
          });
        

        if (user.dataValues.username !== username || user.dataValues.password !== password) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        const token = Date.now()

        
        res.status(200).json({ message: 'Inicio de sesión exitoso', token, idUsuario: user.dataValues.idUsuario});
    } catch (error) {
        
        res.status(400).json(false);
    }
});


module.exports = router;