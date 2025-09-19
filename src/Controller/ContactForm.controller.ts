import prisma from 'DB/Connection';
import { Request, Response } from 'express';
import contactSchema from 'Schema/Contactform.Schema';

export const createContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, linkedInUrl, message } = contactSchema.parse(req.body);

    const emailExists = await prisma.contact.findFirst({
      where: { email },
    });

    if (emailExists) {
      return res
        .status(409)
        .json({ success: false, error: 'Contact with this email already exists' });
    }

    const contactForm = await prisma.contact.create({
      data: { name, email, linkedInUrl, message },
    });

    res.status(201).json({ success: true, contactForm });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
