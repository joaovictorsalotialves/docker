import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.send('Olá minha imagem!!!');
});

export { router };
