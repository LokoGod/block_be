class HttpStatusCode extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const BadRequest = (message: string = "Bad Request") => new HttpStatusCode(400, message);
const Unauthorized = (message: string = "Unauthorized") => new HttpStatusCode(401, message);
const Forbidden = (message: string = "Forbidden") => new HttpStatusCode(403, message);
const NotFound = (message: string = "Not Found") => new HttpStatusCode(404, message);
const InternalServerError = (message: string = "Internal Server Error") => new HttpStatusCode(500, message);

export { HttpStatusCode, BadRequest, Unauthorized, Forbidden, NotFound, InternalServerError };
