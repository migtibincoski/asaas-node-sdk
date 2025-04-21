export type BillingTypeOptions =
  | ""
  | "UNDEFINED"
  | "BOLETO"
  | "CREDIT_CARD"
  | "PIX";
export type DiscountTypeOptions = "PERCENTAGE" | "FIXED";
export type FineTypeOptions = "PERCENTAGE" | "FIXED";
export type EscrowStatusOptions = "ACTIVE" | "DONE";
export type CreditCardDisputeStatusOptions =
  | "REQUESTED"
  | "ACCEPTED"
  | "REJECTED";
export type RefundsStatusOptions =
  | "PENDING"
  | "AWAITING_CRITICAL_ACTION_AUTHORIZATION"
  | "AWAITING_CUSTOMER_EXTERNAL_AUTHORIZATION"
  | "CANCELLED"
  | "DONE";
export type EscrowFinishReasonOptions =
  | "CHARGEBACK"
  | "EXPIRED"
  | "INSUFFICIENT_BALANCE"
  | "PAYMENT_REFUNDED"
  | "REQUESTED_BY_CUSTOMER"
  | "CUSTOMER_CONFIG_DISABLED";
export type SplitPaymentStatusOptions =
  | "PENDING"
  | "AWAITING_CREDIT"
  | "CANCELLED"
  | "DONE"
  | "REFUNDED"
  | "BLOCKED_BY_VALUE_DIVERGENCE";
export type ChargebackStatusOptions =
  | "REQUESTED"
  | "IN_DISPUTE"
  | "DISPUTE_LOST"
  | "REVERSED"
  | "DONE";
export type PaymentStatusOptions =
  | "PENDING"
  | "RECEIVED"
  | "CONFIRMED"
  | "OVERDUE"
  | "REFUNDED"
  | "RECEIVED_IN_CASH"
  | "REFUND_REQUESTED"
  | "REFUND_IN_PROGRESS"
  | "CHARGEBACK_REQUESTED"
  | "CHARGEBACK_DISPUTE"
  | "AWAITING_CHARGEBACK_REVERSAL"
  | "DUNNING_REQUESTED"
  | "DUNNING_RECEIVED"
  | "AWAITING_RISK_ANALYSIS";
export type CreditCardBrandOptions =
  | "VISA"
  | "MASTERCARD"
  | "ELO"
  | "DINERS"
  | "DISCOVER"
  | "AMEX"
  | "HIPERCARD"
  | "CABAL"
  | "BANESCARD"
  | "CREDZ"
  | "SOROCRED"
  | "CREDSYSTEM"
  | "JCB"
  | "UNKNOWN";
export type PaymentSplitCancellationReasonOptions =
  | "PAYMENT_DELETED"
  | "PAYMENT_OVERDUE"
  | "PAYMENT_RECEIVED_IN_CASH"
  | "PAYMENT_REFUNDED"
  | "VALUE_DIVERGENCE_BLOCK"
  | "WALLET_UNABLE_TO_RECEIVE";

export type CreateNewPaymentBody = {
  customer: string;
  billingType?: BillingTypeOptions;
  value: number;
  dueDate: string;
  description?: string;
  daysAfterDueDateToRegistrationCancellation?: number;
  externalReference?: string;
  installmentCount?: number;
  totalValue?: number;
  installmentValue?: number;
  discount?: DiscountObject;
  interest?: InterestObject;
  fine?: FineObject;
  postalService?: boolean;
  split?: SplitObject[];
  callback?: CallBackObject;
};

export type ListPaymentsBody = {
  installment?: string;
  offset?: number;
  limit?: number;
  customer?: string;
  customerGroupName?: string;
  billingType?: BillingTypeOptions;
  status?: PaymentStatusOptions;
  subscription?: string;
  externalReference?: string;
  paymentDate?: string;
  invoiceStatus?: InvoiceStatusOptions;
  estimatedCreditDate?: string;
  pixQrCodeId?: string;
  anticipated?: boolean;
  anticipable?: boolean;
  dateCreatedGe?: string;
  dateCreatedLe?: string;
  paymentDateGe?: string;
  paymentDateLe?: string;
  estimatedCreditDateGe?: string;
  estimatedCreditDateLe?: string;
  dueDateGe?: string;
  dueDateLe?: string;
  user?: string;
};

export type InvoiceStatusOptions =
  | "SCHEDULED"
  | "AUTHORIZED"
  | "PROCESSING_CANCELLATION"
  | "CANCELED"
  | "CANCELLATION_DENIED"
  | "ERROR";

export type DiscountObject = {
  value: number;
  dueDateLimitDays: number;
  type: DiscountTypeOptions;
};

export type InterestObject = {
  value: number;
};

export type FineObject = {
  value: number;
  type: FineTypeOptions;
};

export type SplitObject = {
  walletId: string;
  fixedValue?: number;
  percentualValue?: number;
  totalFixedValue?: number;
  externalReference?: string;
  description?: string;
};

export type CallBackObject = {
  successUrl: string;
  autoRedirect?: boolean;
};

export type CreateNewPaymentResponse200 = {
  id: string;
  dateCreated: string;
  customer: string;
  subscription?: string;
  installment?: string;
  paymentLink?: string;
  value: number;
  netValue: number;
  originalValue?: number;
  interestValue?: number;
  description?: string;
  billingType: BillingTypeOptions | "DEBIT_CARD" | "TRANSFER" | "DEPOSIT";
  creditCard?: {
    creditCardNumber: string;
    creditCardBrand: CreditCardBrandOptions;
    creditCardToken?: string;
  };
  canBePaidAfterDueDate?: boolean;
  pixTransaction?: string;
  pixQrCodeId?: string;
  status: PaymentStatusOptions;
  dueDate: string;
  originalDueDate?: string;
  paymentDate?: string;
  clientPaymentDate?: string;
  installmentNumber?: number;
  invoiceUrl?: string;
  invoiceNumber?: string;
  externalReference?: string;
  deleted?: boolean;
  anticipated?: boolean;
  anticipable?: boolean;
  creditDate?: string;
  estimatedCreditDate?: string;
  transactionReceiptUrl?: string;
  nossoNumero?: string;
  bankSlipUrl?: string;
  discount?: {
    value: number;
    dueDateLimitDays: number;
    type: DiscountTypeOptions;
  };
  fine?: FineObject;
  interest?: {
    value: number;
  };
  split?: Array<{
    id: string;
    walletId: string;
    fixedValue?: number;
    percentualValue?: number;
    totalValue?: number;
    cancellationReason?: PaymentSplitCancellationReasonOptions;
    status?: SplitPaymentStatusOptions;
    externalReference?: string;
    description?: string;
  }>;
  postalService?: boolean;
  daysAfterDueDateToRegistrationCancellation?: number;
  chargeback?: {
    id: string;
    payment: string;
    installment?: string;
    customerAccount: string;
    status: ChargebackStatusOptions;
    reason: string;
    disputeStartDate?: string;
    value: number;
    paymentDate?: string;
    creditCard?: {
      disputeStatus: CreditCardDisputeStatusOptions;
      deadlineToSendDisputeDocuments?: string;
    };
  };
  escrow?: {
    id: string;
    status: EscrowStatusOptions;
    expirationDate?: string;
    finishDate?: string;
    finishReason?: EscrowFinishReasonOptions;
  };
  refunds?: Array<{
    dateCreated: string;
    status: RefundsStatusOptions;
    value: number;
    endToEndIdentifier?: string;
    description?: string;
    effectiveDate?: string;
    transactionReceiptUrl?: string;
    refundedSplits?: Array<{
      id: string;
      value: number;
      done: boolean;
    }>;
  }>;
};

export type CreditCardObject = {
  creditCardNumber: string;
  creditCardBrand: CreditCardBrandOptions;
  creditCardToken?: string;
};

export type ChargebackObject = {
  id: string;
  payment: string;

  installment?: string;
  customerAccount: string;
  status: ChargebackStatusOptions;
  reason: string;
  disputeStartDate?: string;
  value: number;
  paymentDate?: string;
  creditCard?: {
    number: string;
    brand: CreditCardBrandOptions;
  };
  disputeStatus: CreditCardDisputeStatusOptions;
  deadlineToSendDisputeDocuments?: string;
};

export type RefundsObject = {
  dateCreated: string;
  status: RefundsStatusOptions;
  value: number;
  endToEndIdentifier?: string;
  description?: string;
  effectiveDate?: string;
  transactionReceiptUrl?: string;
  refundedSplits?: RefundedSplitObject[];
};

export type RefundedSplitObject = {
  id: string;
  value: number;
  done: boolean;
};

export type PaymentObject = {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  subscription?: string;
  installment?: string;
  paymentLink?: string;
  value: number;
  netValue: number;
  originalValue?: number;
  interestValue?: number;
  description?: string;
  billingType: BillingTypeOptions | "DEBIT_CARD" | "TRANSFER" | "DEPOSIT";
  creditCard?: CreditCardObject;
  canBePaidAfterDueDate?: boolean;
  pixTransaction?: string;
  pixQrCodeId?: string;
  status: PaymentStatusOptions;
  dueDate: string;
  originalDueDate?: string;
  paymentDate?: string;
  clientPaymentDate?: string;
  installmentNumber?: number;
  invoiceUrl?: string;
  invoiceNumber?: string;
  externalReference?: string;
  deleted?: boolean;
  anticipated?: boolean;
  anticipable?: boolean;
  creditDate?: string;
  estimatedCreditDate?: string;
  transactionReceiptUrl?: string;
  nossoNumero?: string;
  bankSlipUrl?: string;
  discount?: DiscountObject;
  fine?: FineObject;
  interest?: InterestObject;
  split?: (SplitObject & {
    id: string;
    totalValue?: number;
    cancellationReason?: PaymentSplitCancellationReasonOptions;
    status?: SplitPaymentStatusOptions;
  })[];
  postalService?: boolean;
  daysAfterDueDateToRegistrationCancellation?: number;
  chargeback?: ChargebackObject;
  escrow?: {
    id: string;
    status: EscrowStatusOptions;
    expirationDate?: string;
    finishDate?: string;
    finishReason?: EscrowFinishReasonOptions;
  };
  refunds?: RefundsObject[];
};

export type ListPaymentsResponse200 = {
  object: string;
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: PaymentObject[];
};
