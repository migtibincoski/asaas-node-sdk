import type { AsaasSdkConstructorConfig } from "../..";
import AsaasSdkError from "../../utils/error";
import type {
  ListPaymentsResponse200,
  ListPaymentsBody,
  BillingTypeOptions,
  PaymentStatusOptions,
  InvoiceStatusOptions,
} from "./types";

export default function listPayments(
  data: AsaasSdkConstructorConfig,
  body: ListPaymentsBody
): Promise<ListPaymentsResponse200> {
  return new Promise((resolve, reject) => {
    if (
      "installment" in body &&
      body.installment &&
      typeof body.installment !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'installment' must be a string. You provided: ${typeof body.installment}`,
        })
      );
    }

    if ("offset" in body && body.offset && isNaN(Number(body.offset))) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'offset' must be a number. You provided: ${typeof body.offset}`,
        })
      );
    }

    if ("limit" in body && body.limit) {
      if (isNaN(Number(body.limit))) {
        return reject(
          new AsaasSdkError({
            name: "INVALID_PARAMETERS",
            message: "Failed to list payments",
            cause: `The parameter 'limit' must be a number. You provided: ${typeof body.limit}`,
          })
        );
      }

      if (Number(body.limit) > 100) {
        return reject(
          new AsaasSdkError({
            name: "INVALID_PARAMETERS",
            message: "Failed to list payments",
            cause: `The parameter 'limit' must be less than or equal to 100. You provided: ${body.limit}`,
          })
        );
      }
    }

    if (
      "customer" in body &&
      body.customer &&
      typeof body.customer !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'customer' must be a string. You provided: ${typeof body.customer}`,
        })
      );
    }

    if (
      "customerGroupName" in body &&
      body.customerGroupName &&
      typeof body.customerGroupName !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'customerGroupName' must be a string. You provided: ${typeof body.customerGroupName}`,
        })
      );
    }

    if ("billingType" in body && body.billingType) {
      if (typeof body.billingType !== "string") {
        return reject(
          new AsaasSdkError({
            name: "INVALID_PARAMETERS",
            message: "Failed to list payments",
            cause: `The parameter 'billingType' must be a string. You provided: ${typeof body.billingType}`,
          })
        );
      }

      const billingTypeOptions: BillingTypeOptions[] = [
        "BOLETO",
        "CREDIT_CARD",
        "PIX",
        "UNDEFINED",
        "",
      ];

      if (!billingTypeOptions.includes(body.billingType)) {
        return reject(
          new AsaasSdkError({
            name: "INVALID_PARAMETERS",
            message: "Failed to list payments",
            cause: `The parameter 'billingType' is invalid. You provided: ${body.billingType}`,
          })
        );
      }
    }

    if ("status" in body && body.status) {
      if (typeof body.status !== "string") {
        return reject(
          new AsaasSdkError({
            name: "INVALID_PARAMETERS",
            message: "Failed to list payments",
            cause: `The parameter 'status' must be a string. You provided: ${typeof body.status}`,
          })
        );
      }

      const statusOptions: PaymentStatusOptions[] = [
        "PENDING",
        "RECEIVED",
        "CONFIRMED",
        "OVERDUE",
        "REFUNDED",
        "RECEIVED_IN_CASH",
        "REFUND_REQUESTED",
        "REFUND_IN_PROGRESS",
        "CHARGEBACK_REQUESTED",
        "CHARGEBACK_DISPUTE",
        "AWAITING_CHARGEBACK_REVERSAL",
        "DUNNING_REQUESTED",
        "DUNNING_RECEIVED",
        "AWAITING_RISK_ANALYSIS",
      ];

      if (!statusOptions.includes(body.status)) {
        return reject(
          new AsaasSdkError({
            name: "INVALID_PARAMETERS",
            message: "Failed to list payments",
            cause: `The parameter 'status' is invalid. You provided: ${body.status}`,
          })
        );
      }
    }

    if (
      "subscription" in body &&
      body.subscription &&
      typeof body.subscription !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'subscription' must be a string. You provided: ${typeof body.subscription}`,
        })
      );
    }

    if (
      "externalReference" in body &&
      body.externalReference &&
      typeof body.externalReference !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'externalReference' must be a string. You provided: ${typeof body.externalReference}`,
        })
      );
    }

    if (
      "paymentDate" in body &&
      body.paymentDate &&
      typeof body.paymentDate !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'paymentDate' must be a string. You provided: ${typeof body.paymentDate}`,
        })
      );
    }

    if (
      "invoiceStatus" in body &&
      body.invoiceStatus &&
      !(
        [
          "AUTHORIZED",
          "CANCELED",
          "CANCELLATION_DENIED",
          "ERROR",
          "PROCESSING_CANCELLATION",
          "SCHEDULED",
        ] as InvoiceStatusOptions[]
      ).includes(body.invoiceStatus)
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'invoiceStatus' is invalid. You provided: ${body.invoiceStatus}`,
        })
      );
    }

    if (
      "estimatedCreditDate" in body &&
      body.estimatedCreditDate &&
      typeof body.estimatedCreditDate !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'estimatedCreditDate' must be a string. You provided: ${typeof body.estimatedCreditDate}`,
        })
      );
    }

    if (
      "pixQrCodeId" in body &&
      body.pixQrCodeId &&
      typeof body.pixQrCodeId !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'pixQrCodeId' must be a string. You provided: ${typeof body.pixQrCodeId}`,
        })
      );
    }

    if (
      "anticipated" in body &&
      body.anticipated &&
      typeof body.anticipated !== "boolean"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'anticipated' must be a boolean. You provided: ${typeof body.anticipated}`,
        })
      );
    }

    if (
      "anticipable" in body &&
      body.anticipable &&
      typeof body.anticipable !== "boolean"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'anticipable' must be a boolean. You provided: ${typeof body.anticipable}`,
        })
      );
    }

    if (
      "dateCreatedGe" in body &&
      body.dateCreatedGe &&
      typeof body.dateCreatedGe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'dateCreatedGe' must be a string. You provided: ${typeof body.dateCreatedGe}`,
        })
      );
    }

    if (
      "dateCreatedLe" in body &&
      body.dateCreatedLe &&
      typeof body.dateCreatedLe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'dateCreatedLe' must be a string. You provided: ${typeof body.dateCreatedLe}`,
        })
      );
    }

    if (
      "paymentDateGe" in body &&
      body.paymentDateGe &&
      typeof body.paymentDateGe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'paymentDateGe' must be a string. You provided: ${typeof body.paymentDateGe}`,
        })
      );
    }

    if (
      "paymentDateLe" in body &&
      body.paymentDateLe &&
      typeof body.paymentDateLe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'paymentDateLe' must be a string. You provided: ${typeof body.paymentDateLe}`,
        })
      );
    }

    if (
      "estimatedCreditDateGe" in body &&
      body.estimatedCreditDateGe &&
      typeof body.estimatedCreditDateGe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'estimatedCreditDateGe' must be a string. You provided: ${typeof body.estimatedCreditDateGe}`,
        })
      );
    }

    if (
      "estimatedCreditDateLe" in body &&
      body.estimatedCreditDateLe &&
      typeof body.estimatedCreditDateLe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'estimatedCreditDateLe' must be a string. You provided: ${typeof body.estimatedCreditDateLe}`,
        })
      );
    }

    if (
      "dueDateGe" in body &&
      body.dueDateGe &&
      typeof body.dueDateGe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'dueDateGe' must be a string. You provided: ${typeof body.dueDateGe}`,
        })
      );
    }

    if (
      "dueDateLe" in body &&
      body.dueDateLe &&
      typeof body.dueDateLe !== "string"
    ) {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'dueDateLe' must be a string. You provided: ${typeof body.dueDateLe}`,
        })
      );
    }

    if ("user" in body && body.user && typeof body.user !== "string") {
      return reject(
        new AsaasSdkError({
          name: "INVALID_PARAMETERS",
          message: "Failed to list payments",
          cause: `The parameter 'user' must be a string. You provided: ${typeof body.user}`,
        })
      );
    }

    fetch(`${data.baseURL}/api/v3/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: data.apiKey,
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((data: ListPaymentsResponse200) => resolve(data))
          .catch((error) =>
            reject(
              new AsaasSdkError({
                name: "REQUEST_FAILED",
                message: "Failed to list payments",
                cause: error,
              })
            )
          );
      } else {
        response
          .json()
          .then((error) =>
            reject(
              new AsaasSdkError({
                name: "REQUEST_FAILED",
                message: "Failed to list payments",
                cause: `${error}`,
              })
            )
          )
          .catch((error) =>
            reject(
              new AsaasSdkError({
                name: "REQUEST_FAILED",
                message: "Failed to list payments",
                cause: response.statusText,
              })
            )
          );
      }
    });
  });
}
