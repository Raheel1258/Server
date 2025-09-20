import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from './ApiResponse';

//Response helpers
export class ResponseHelper {
  static success<T>(res: Response, data: T, message: string = 'Success', statusCode: number = 200) {
    return res.status(statusCode).json(new ApiResponse(statusCode, data, message));
  }

  static created<T>(res: Response, data: T, message: string = 'Resource created successfully') {
    return res.status(201).json(new ApiResponse(201, data, message));
  }

  static error(res: Response, error: unknown, statusCode: number = 400) {
    const errorMessage = error instanceof Error ? error.message : 'Bad Request';
    return res.status(statusCode).json(new ApiResponse(statusCode, error, errorMessage));
  }

  static validationError(res: Response, error: unknown) {
    return this.error(res, error, 400);
  }

  static conflictError(res: Response, message: string = 'Resource already exists') {
    return res.status(409).json(new ApiResponse(409, null, message));
  }

  static internalError(res: Response, error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return res.status(500).json(new ApiResponse(500, error, errorMessage));
  }
}

// Error handling helper for async controllers
export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
