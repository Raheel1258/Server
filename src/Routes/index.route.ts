import { Router, Request, Response } from 'express';
import { createContactForm } from '../Controller/ContactForm.controller';
import { createNewsLetter } from '../Controller/NewsLetter.Controller';

const router = Router();

router.get('/check', (req: Request, res: Response) => res.status(200).json({message: 'Hello World'}));
router.post('/form/contact', createContactForm);
router.post('/newsletter/subscribe', createNewsLetter);

export default router;
