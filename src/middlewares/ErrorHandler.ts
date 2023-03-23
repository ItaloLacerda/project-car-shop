import { NextFunction, Response, Request } from 'express';

class ErrorHandler {
  public static handle(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (err instanceof Error && err.stack) {
      return res.status(Number(err.stack)).json({ message: err.message });
    }

    return res.status(500).json({ message: 'internal serve error' });
  }
}

export default ErrorHandler;