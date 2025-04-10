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
};

class AsaasSDK {
  baseURL: string = "https://api-sandbox.asaas.com";
  apiKey: string = "";
  version: string = "v3";
  payments = {
    createNewPayment: (request: CreateNewPaymentBody) =>
      Payments.createNewPayment(this, request),
  };
  constructor(data: AsaasSdkConstructorConfig) {
    if (!data.baseURL) {
      console.warn(
        "Base URL not provided. Defaulting to sandbox URL: https://api-sandbox.asaas.com"
      );
      data.baseURL = "https://api-sandbox.asaas.com";
    }
    if (!data.version) {
      console.warn(
        "Version not provided. Defaulting to v3. Please specify the version in the future."
      );
      this.version = "v3";
    }
    if (!data.apiKey)
      throw new AsaasSdkError({
        name: "INITIALIZATION_ERROR",
        message: "Failed to initialize Asaas SDK",
        cause: "Missing API key",
      });
    this.baseURL = data.baseURL;
    this.apiKey = data.apiKey;
  }
}
