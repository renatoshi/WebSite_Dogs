const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerDogs = require('./DogRoutes');
const routerTemp =  require('./TemperamentRoutes');
const routerPost = require('./DogRoutesPost');

const router = Router();

router.use('/dogs', routerDogs);
router.use('/temperaments', routerTemp);
router.use('/dog', routerPost);


module.exports = router;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



