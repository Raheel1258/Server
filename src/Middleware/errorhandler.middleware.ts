import { Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response) => {
  res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
    error: err.stack,
  });
};

export default errorHandler;
