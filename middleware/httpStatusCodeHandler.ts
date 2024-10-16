import { Request, Response, NextFunction } from "express";

interface HttpStatusCode extends Error {
  status?: number;
}

const httpStatusCodeHandler = (
  err: HttpStatusCode,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export { httpStatusCodeHandler };
