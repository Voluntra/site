interface Response {
  message: string;
}

export interface ApiResponseSuccess extends Response {
  data: any;
}

export interface ApiResponseError extends Response {
  error: {
    code: string;
    message: string;
  };
}
