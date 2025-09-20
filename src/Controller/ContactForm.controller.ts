import prisma from '../DB/Connection';
import { Request, Response, NextFunction } from 'express';
import contactSchema from '../Schema/Contactform.Schema';
import { ResponseHelper } from '../Utils/responseHelpers';
import { ApiError } from '../Utils/ApiError';

export const createContactForm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, linkedInUrl, message } = contactSchema.parse(req.body);
    const contactForm = await prisma.contact.create({
      data: { name, email, linkedInUrl, message },
    });

    return ResponseHelper.created(res, contactForm, 'Contact form submitted successfully');
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      return next(error);
    }
    return next(new ApiError(400, error instanceof Error ? error.message : 'Bad Request'));
    }
  };
