import AsaasSdkError from "./error";
import validateCPF from "./validate-cpf";

export default function formatCPF(cpf: string | number): string {
  if (!cpf) {
    throw new AsaasSdkError({
      name: "INVALID_PARAMETERS",
      message: "Invalid CPF",
      cause: "CPF is required",
    });
  }

  cpf = cpf.toString();
  cpf = (cpf as string).replaceAll(".", "").replaceAll("-", "");

  if (!/^\d+$/.test(cpf)) {
    throw new AsaasSdkError({
      name: "INVALID_PARAMETERS",
      message: "Invalid CPF",
      cause: "CPF must be only numbers",
    });
  }

  const formatedCPF = `${cpf[0] || ""}${cpf[1] || ""}${cpf[2] || ""}${
    cpf[3] ? "." : ""
  }${cpf[3] || ""}${cpf[4] || ""}${cpf[5] || ""}${cpf[6] ? "." : ""}${
    cpf[6] || ""
  }${cpf[7] || ""}${cpf[8] || ""}${cpf[9] ? "-" : ""}${cpf[9] || ""}${
    cpf[10] || ""
  }`;

  return formatedCPF;
}
