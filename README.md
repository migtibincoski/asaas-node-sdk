# asaas-node-sdk

A modern and developer-friendly Node.js SDK for the [Asaas API](https://docs.asaas.com/), designed to simplify and streamline integration with the Asaas platform. Whether you're working with payments, subscriptions, or customer management, this SDK has you covered with clean, intuitive methods and TypeScript support.

## ✨ Features

- **Full support** for Asaas REST API (v3)
- **Easy-to-use methods** for common operations
- **Built-in TypeScript types** and IntelliSense
- **Response normalization**
- **Future-proof** and actively maintained
- **Promise-based architecture** – orks with `.then/.catch` and `async/await`

## 📦 Installation

This package is not yet available for use.

## 📚 Documentation

For a full list of methods and features, visit the [official Asaas API Reference](https://docs.asaas.com/) or explore our detailed SDK docs available [here](https://github.com/migtibincoski/asaas-node-sdk/wiki).

### Available Modules

- ⚠️ Payments
  - ✅ [Create new payment](https://docs.asaas.com/reference/create-new-payment)
  - ⚠️ [List charges](https://docs.asaas.com/reference/list-payments)
  - ❌ [Create new payment with credit card](https://docs.asaas.com/reference/create-new-payment-with-credit-card)
  - ❌ [Capture payment with pre-authorization](https://docs.asaas.com/reference/capture-payment-with-pre-authorization)
  - ❌ [Pay a charge with a credit card](https://docs.asaas.com/reference/pay-a-charge-with-credit-card)
  - ❌ [Retrieve payment billing information](https://docs.asaas.com/reference/retrieve-payment-billing-information)
  - ❌ [Payment viewing information](https://docs.asaas.com/reference/payment-viewing-information)
  - ❌ [Retrieve a single payment](https://docs.asaas.com/reference/retrieve-a-single-payment)
  - ❌ [Update existing payment](https://docs.asaas.com/reference/update-existing-payment)
  - ❌ [Delete payment](https://docs.asaas.com/reference/delete-payment)
  - ❌ [Restore removed payment](https://docs.asaas.com/reference/restore-removed-payment)
  - ❌ [Retrieve status of a payment](https://docs.asaas.com/reference/retrieve-status-of-a-payment)
  - ❌ [Refund payment](https://docs.asaas.com/reference/refund-payment)
  - ❌ [Get digitable bill line](https://docs.asaas.com/reference/get-digitable-bill-line)
  - ❌ [Get QR Code for Pix payments](https://docs.asaas.com/reference/get-qr-code-for-pix-payments)
  - ❌ [Confirm cash receipt](https://docs.asaas.com/reference/confirm-cash-receipt)
  - ❌ [Undo cash receipt confirmation](https://docs.asaas.com/reference/undo-cash-receipt-confirmation)
  - ❌ [Sales simulator](https://docs.asaas.com/reference/sales-simulator)
  - ❌ [Retrieve payment escrow in the Escrow Account](https://docs.asaas.com/reference/retrieve-payment-escrow-in-the-escrow-account)
  - ❌ [Recover payment limits](https://docs.asaas.com/reference/recovering-payment-limits)
- ❌ Sandbox Actions
- ❌ Payment with summary data
- ❌ Credit Card
- ❌ Payment Refund
- ❌ Payment Split
- ❌ Payment Document
- ❌ Customer
- ❌ Notification
- ❌ Installment
- ❌ Subscription
- ❌ Pix
- ❌ Pix Transaction
- ❌ Recurring Pix
- ❌ Payment Link
- ❌ Checkout
- ❌ Transfer
- ❌ Anticipation
- ❌ Payment Dunning
- ❌ Bill
- ❌ Mobile Phone Recharge
- ❌ Credit Bureau Report
- ❌ Financial Transaction
- ❌ Finance
- ❌ Account Info
- ❌ Invoice
- ❌ Fiscal Info
- ❌ Webhook
- ❌ Subaccount
- ❌ Account Document
- ❌ Chargeback

## 🧪 Testing

All methods are covered with unit and integration tests. To run tests locally:

```bash
npm run test
# or
yarn test
```

## 🛠️ Built With

- Node.js
- TypeScript
- JavaScript
- Jest
- and so much coffee and love! ☕ 💙

## 🤝 Contributing

We welcome contributions! If you’d like to report bugs, request features or submit pull requests, feel free to open an issue or fork the repo.

## 📄 License

MIT License. See [LICENSE](./LICENSE) for more information.

---

Developed with 💙 by [Miguel Tibincoski](https://github.com/migtibincoski), based on [official Asaas API](https://docs.asaas.com).