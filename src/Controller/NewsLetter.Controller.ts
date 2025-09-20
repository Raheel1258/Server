import prisma from '../DB/Connection';
import { Request, Response } from 'express';
import newsletterSchema from '../Schema/Newsletter.Schema';
import { ApiResponse } from '../Utils/ApiResponse';
import { ApiError } from '../Utils/ApiError';

export const createNewsLetter = async (req: Request, res: Response) => {
  try {
    const { email } = newsletterSchema.parse(req.body);
    const subscription = await prisma.newsletter.create({
      data: { email },
    });
    return res.status(201).json(new ApiResponse(201, subscription, 'Newsletter subscription successful'));
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json(new ApiResponse(error.statusCode, error.message));
    }

    return res.status(400).json(new ApiResponse(400, error, error instanceof Error ? error.message : 'Bad Request'));
  }
};
