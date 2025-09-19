import prisma from 'DB/Connection';
import { Request, Response } from 'express';
import newsletterSchema from 'Schema/Newsletter.Schema';

export const createNewsLetter = async (req: Request, res: Response) => {
  try {
    const { email } = newsletterSchema.parse(req.body);
    const subscription = await prisma.newsletter.create({
      data: { email },
    });
    res.status(201).json({ success: true, subscription });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ success: false, error: 'Email already subscribed' });
    }

    res.status(400).json({ success: false, error: error.message });
  }
};
