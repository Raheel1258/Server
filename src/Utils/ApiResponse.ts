  /**
   * @param statusCode - The status code of the response
   * @param data - The data of the response
   * @param message - The message of the response
   * @param success - The success of the response
   * @param errors - The errors of the response
   */
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
