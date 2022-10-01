import express from 'express';

const router = express.Router();

const sayHello = () => 'Hello World';

router.get('/', (req, res) => {
    res.send(sayHello());
});

export default router;

export { sayHello };
