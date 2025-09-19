import prisma from '../DB/Connection';
import { Request, Response } from 'express';
import contactSchema from '../Schema/Contactform.Schema';
import { ApiResponse } from '../Utils/ApiResponse';

export const createContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, linkedInUrl, message } = contactSchema.parse(req.body);
    const contactForm = await prisma.contact.create({
      data: { name, email, linkedInUrl, message },
    });

    res.status(201).json(new ApiResponse(201, contactForm));
  } catch (error) {
    res.status(400).json(new ApiResponse(400, error));
  }
};
