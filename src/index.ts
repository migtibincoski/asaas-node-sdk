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
