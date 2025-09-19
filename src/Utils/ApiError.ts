class ApiError extends Error {
  public statusCode: number;
  public data: unknown;
  public success: false;
  public errors: unknown[];

  constructor(
    statusCode: number,
    message: string,
    errors: unknown[] = [],
    stack?: string,
  ) {
    super(message);

    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

export { ApiError };
