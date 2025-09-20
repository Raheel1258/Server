import prisma from 'DB/Connection';
import { Request, Response } from 'express';
import newsletterSchema from 'Schema/Newsletter.Schema';
import { ApiResponse } from 'Utils/ApiResponse';
import { ApiError } from 'Utils/ApiError';

type NewsLetterRequest = Request<Record<string, never>, Record<string, never>, { email: string }>;
export const createNewsLetter = async (req: NewsLetterRequest, res: Response) => {
  try {
    const { email } = newsletterSchema.parse(req.body);
    const subscription = await prisma.newsletter.create({
      data: { email },
    });
    return res.json(new ApiResponse(201, subscription, 'Newsletter subscription successful'));
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      return res.json(new ApiResponse(error.statusCode, error.message));
    }

    return res.status(400).json(new ApiError(400, error instanceof Error ? error.message : 'Bad Request'));
  }
};
