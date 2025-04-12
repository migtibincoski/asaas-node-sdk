import Payments from "./sdk/payments";
import type { CreateNewPaymentBody } from "./sdk/payments/types";
import AsaasSdkError from "./utils/error";
import formatCPF from "./utils/format-cpf";
import validateCPF from "./utils/validate-cpf";

export default {
  utils: {
    cpf: {
      format: formatCPF,
      validate: validateCPF,
    },
  },
};

export type AsaasSdkConstructorConfig = {
  baseURL?: string;
  apiKey: string;
  version?: string;
  debug?: boolean;
};

class AsaasSDK {
  baseURL: string = "https://api-sandbox.asaas.com";
  apiKey: string = "";
  version: string = "v3";
  debug: boolean = false;

  constructor(data: AsaasSdkConstructorConfig) {
    if (!data)
      throw new AsaasSdkError({
        name: "INITIALIZATION_ERROR",
        message: "Failed to initialize Asaas SDK",
        cause: "No data provided",
      });

    if (typeof data !== "object")
      throw new AsaasSdkError({
        name: "INITIALIZATION_ERROR",
        message: "Failed to initialize Asaas SDK",
        cause: `Invalid data type. Expected object, got ${typeof data}`,
      });

    const oldWarn = console.warn;
    console.warn = (...args: any[]) => this.debug && oldWarn(...args);

    this.debug.toString().toLowerCase() == "true"
      ? (this.debug = true)
      : (this.debug = false);

    if (!data.baseURL) {
      console.warn(
        "\x1b[33mBase URL not provided. Defaulting to sandbox URL: https://api-sandbox.asaas.com\x1b[0m"
      );
      data.baseURL = "https://api-sandbox.asaas.com";
    }

    let url = null;
    try {
      url = new URL(data.baseURL);
    } catch {
      throw new AsaasSdkError({
        name: "INITIALIZATION_ERROR",
        message: "Failed to initialize Asaas SDK",
        cause: `Invalid base URL. You provided: ${data.baseURL}`,
      });
    }

    if (url.protocol !== "https:") {
      console.warn(
        "\x1b[33mBase URL is not using HTTPS. This may cause issues with the API. Automatically switching to HTTPS...\x1b[0m"
      );
      url.protocol = "https:";
      data.baseURL = url.toString();
    }

    if (!data.version) {
      console.warn(
        "\x1b[33mVersion not provided. Defaulting to v3. Please specify the version in the future.\x1b[0m"
      );
      this.version = "v3";
    }

    if (!data.apiKey)
      throw new AsaasSdkError({
        name: "INITIALIZATION_ERROR",
        message: "Failed to initialize Asaas SDK",
        cause: "Missing API key",
      });

    if (typeof data.apiKey !== "string")
      throw new AsaasSdkError({
        name: "INITIALIZATION_ERROR",
        message: "Failed to initialize Asaas SDK",
        cause: `Invalid API key type. Expected string, got ${typeof data.apiKey}`,
      });

    this.baseURL = data.baseURL;
    this.apiKey = data.apiKey;
  }

  payments = {
    createNewPayment: (request: CreateNewPaymentBody) =>
      Payments.createNewPayment(this, request),
  };
}
