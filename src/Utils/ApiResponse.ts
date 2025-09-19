class ApiResponse<TData = unknown> {
  public statusCode: number;
  public data: TData;
  public message: string;
  public success: boolean;

  constructor(statusCode: number, data: TData, message: string = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
