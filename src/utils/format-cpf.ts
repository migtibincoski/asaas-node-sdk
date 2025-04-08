import CreateError from "./error";
import validateCPF from "./validate-cpf";

export default function formatCPF(cpf: string | number): string {
  if (!cpf) {
    throw new CreateError({
      name: "INVALID_PARAMETERS",
      message: "Invalid CPF",
      cause: "CPF is required",
    });
  }

  cpf = cpf.toString();
  cpf = cpf.replaceAll(".", "").replaceAll("-", "");

  if (!/^\d+$/.test(cpf)) {
    throw new CreateError({
      name: "INVALID_PARAMETERS",
      message: "Invalid CPF",
      cause: "CPF must be only numbers",
    });
  }

  let formatedCPF = "";
  formatedCPF += `${cpf[0] || ""}`;
  formatedCPF += `${cpf[1] || ""}`;
  formatedCPF += `${cpf[2] || ""}`;
  formatedCPF += `${cpf[3] ? "." : ""}`;
  formatedCPF += `${cpf[3] || ""}`;
  formatedCPF += `${cpf[4] || ""}`;
  formatedCPF += `${cpf[5] || ""}`;
  formatedCPF += `${cpf[6] ? "." : ""}`;
  formatedCPF += `${cpf[6] || ""}`;
  formatedCPF += `${cpf[7] || ""}`;
  formatedCPF += `${cpf[8] || ""}`;
  formatedCPF += `${cpf[9] ? "-" : ""}`;
  formatedCPF += `${cpf[9] || ""}`;
  formatedCPF += `${cpf[10] || ""}`;

  return formatedCPF;
}
