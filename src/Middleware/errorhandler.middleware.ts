import {  Request, Response } from 'express';
import { ApiError } from '../Utils/ApiError';

const errorHandler = (err: Error, _req: Request, res: Response) => {
  if (err instanceof ApiError) {
    return res.send(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
      data: err.data,
    });
  }

  return res.send(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler;