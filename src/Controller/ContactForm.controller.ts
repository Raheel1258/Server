import prisma from '../DB/Connection';
import contactSchema from '../Schema/Contactform.Schema';
import { ApiResponse } from '../Utils/ApiResponse';
import { Request, Response } from 'express';

type ContactRequest = Request<Record<string, never>, Record<string, never>, { name: string; email: string; linkedInUrl: string; message: string }>;

export const createContactForm = async (req: ContactRequest, res: Response) => {
  try {
    const { name, email, linkedInUrl, message } = contactSchema.parse(req.body);
    const contactForm = await prisma.contact.create({
      data: { name, email, linkedInUrl, message },
    });

    return res.status(201).json(new ApiResponse(201, contactForm));
  } catch (error) {
    return res.status(400).json(new ApiResponse(400, error));
  }
};
