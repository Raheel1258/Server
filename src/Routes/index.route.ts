import { Router } from 'express';
import { createContactForm } from '../Controller/ContactForm.controller';
import { createNewsLetter } from '../Controller/NewsLetter.Controller';
import {Request, Response} from 'express';

const router = Router();

router.get('/check', (req:Request, res:Response) => res.json({message: 'Hello World'}));
router.post('/form/contact', createContactForm);
router.post('/newsletter/subscribe', createNewsLetter);

export default router;
