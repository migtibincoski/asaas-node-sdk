type ErrorName =
  | "REQUEST_FAILED"
  | "INITIALIZATION_ERROR"
  | "NETWORK_ERROR"
  | "MISSING_PARAMETERS"
  | "INVALID_PARAMETERS"
  | "ERROR";

export default class AsaasSdkError extends Error {
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
