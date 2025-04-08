type ErrorName = "INVALID_PARAMETERS" | "UNDEFINED_ERROR";

export default class CreateError extends Error {
  name: ErrorName;
  message: string;
  cause: any;
  constructor({
    name,
    message,
    cause,
  }: {
    name: ErrorName;
    message: string;
    cause?: any;
  }) {
    super();
    this.name = name;
    this.message = message;
    if (cause) this.cause = cause;
  }
}
