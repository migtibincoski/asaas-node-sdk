# asaas-node-sdk

Um SDK Node.js moderno e amigável para desenvolvedores para a [API Asaas](https://docs.asaas.com/), projetado para simplificar e agilizar a integração com a plataforma Asaas. Seja trabalhando com pagamentos, assinaturas ou gerenciamento de clientes, este SDK oferece métodos limpos e intuitivos, além do suporte ao TypeScript.

## ✨ Recursos

- Suporte completo para a API REST do Asaas (v3)
- Métodos fáceis de usar para operações comuns
- Tipos TypeScript e IntelliSense integrados
- Tratamento automático de erros e normalização de respostas
- Preparado para o futuro e com manutenção ativa

## 📦 Instalação

Este pacote ainda não está disponível para uso.

## 📚 Documentação

Para uma lista completa de métodos e recursos, visite a [Referência oficial da API do Asaas](https://docs.asaas.com/) ou explore nossa documentação detalhada do SDK disponível [aqui](https://github.com/migtibincoski/asaas-node-sdk/wiki).

### Módulos Disponíveis

- ⚠️ Cobranças
  - ✅ [Criar nova cobrança](https://docs.asaas.com/reference/criar-nova-cobranca)
  - ⚠️ [Listar cobranças](https://docs.asaas.com/reference/listar-cobrancas)
  - ❌ Criar cobrança com cartão de crédito
  - ❌ Capturar cobrança com Pré-Autorização
  - ❌ Pagar uma cobrança com cartão de crédito
  - ❌ Recuperar informações de pagamento de uma cobrança
  - ❌ Informações sobre visualização da cobrança
  - ❌ Recuperar uma única cobrança
  - ❌ Atualizar cobrança existente
  - ❌ Excluir cobrança
  - ❌ Restaurar cobrança removida
  - ❌ Recuperar status de uma cobrança
  - ❌ Obter linha digitável do boleto
  - ❌ Obter QR Code para pagamentos via Pix
  - ❌ Confirmar recebimento em dinheiro
  - ❌ Desfazer confirmação de recebimento em dinheiro
  - ❌ Simulador de vendas
  - ❌ Recuperar garantia da cobrança na Conta Escrow
  - ❌ Recuperando limites de cobranças
- ❌ Ações em sandbox
- ❌ Cobranças com dados resumidos
- ❌ Cartão de crédito
- ❌ Estornos
- ❌ Splits
- ❌ Conta Escrow
- ❌ Documentos de cobranças
- ❌ Clientes
- ❌ Notificações
- ❌ Parcelamentos
- ❌ Assinaturas
- ❌ Pix
- ❌ Transações Pix
- ❌ Pix Recorrente
- ❌ Link de pagamentos
- ❌ Checkout
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