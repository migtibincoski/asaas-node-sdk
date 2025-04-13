# asaas-node-sdk

Um SDK moderno e amigável para desenvolvedores de Node.js para a [API do Asaas](https://docs.asaas.com/), projetado para simplificar e otimizar a integração com a plataforma Asaas. Se você trabalha com cobranças, assinaturas ou gestão de clientes, este SDK cobre tudo com métodos intuitivos e suporte ao TypeScript.

## ✨ Recursos

- **Suporte completo** para a API REST do Asaas (v3)
- **Métodos fáceis de usar** para operações comuns
- **Tipos TypeScript embutidos** e IntelliSense
- **Normalização de respostas**
- **Desenvolvimento contínuo** e preparado para o futuro
- **Arquitetura baseada em Promises** – funciona com `.then/.catch` e `async/await`

## 📦 Instalação

Este pacote ainda não está disponível para uso.

## 📚 Documentação

Para uma lista completa de métodos e recursos, visite a [referência oficial da API do Asaas](https://docs.asaas.com/) ou explore nossa documentação detalhada do SDK disponível [aqui](https://github.com/migtibincoski/asaas-node-sdk/wiki).

### Módulos Disponíveis

- ⚠️ Cobranças
  - ✅ [Criar nova cobrança](https://docs.asaas.com/reference/create-new-payment)
  - ⚠️ [Listar cobranças](https://docs.asaas.com/reference/list-payments)
  - ❌ [Criar cobrança com cartão de crédito](https://docs.asaas.com/reference/create-new-payment)
  - ❌ [Capturar cobrança com pré-autorização](https://docs.asaas.com/reference/capture-payment-with-pre-authorization)
  - ❌ [Pagar cobrança com cartão de crédito](https://docs.asaas.com/reference/pay-a-charge-with-credit-card)
  - ❌ [Recuperar informações de cobrança](https://docs.asaas.com/reference/retrieve-payment-billing-info)
  - ❌ [Visualizar informações da cobrança](https://docs.asaas.com/reference/payment-viewing-information)
  - ❌ [Recuperar uma cobrança única](https://docs.asaas.com/reference/retrieve-a-single-payment)
  - ❌ [Atualizar cobrança](https://docs.asaas.com/reference/update-existing-payment)
  - ❌ [Excluir cobrança](https://docs.asaas.com/reference/delete-payment)
  - ❌ [Restaurar cobrança removida](https://docs.asaas.com/reference/restore-removed-payment)
  - ❌ [Recuperar status da cobrança](https://docs.asaas.com/reference/retrieve-status-of-a-payment)
  - ❌ [Reembolsar cobrança](https://docs.asaas.com/reference/refund-payment)
- ❌ Ações no Sandbox
- ❌ Pagamento com dados resumidos
- ❌ Cartão de Crédito
- ❌ Cliente
- ❌ Notificação
- ❌ Assinatura
- ❌ Pix
- ❌ Transferência
- ❌ Antecipações
- ❌ Negativações
- ❌ Pagamento de contas
- ❌ Recargas de celular
- ❌ Consulta Serasa
- ❌ Extrato
- ❌ Informações financeiras
- ❌ Informações e personalização da conta
- ❌ Notas fiscais
- ❌ Informações fiscais
- ❌ Configurações de Webhooks
- ❌ Subcontas Asaas
- ❌ Envio de documentos White Label
- ❌ Chargeback

## 🧪 Testes

Todos os métodos passam por testes unitários e de integração. Para executar testes localmente, execute:

```bash
npm run test
# ou
yarn test
```

## 🛠️ Construído com

- Node.js
- TypeScript
- JavaScript
- Jest
- e muito café! ☕ 💙

## 🤝 Contribuições

Contribuições são bem-vindas! Se você quiser relatar bugs, sugerir funcionalidades ou enviar pull requests, sinta-se à vontade para abrir uma issue ou clonar o repositório.

## 📄 Licença

Licença MIT. Consulte a [LICENÇA](./LICENÇA) para mais informações.

---

Desenvolvido com 💙 por [Miguel Tibincoski](https://github.com/migtibincoski), baseado na [API oficial do Asaas](https://docs.asaas.com).