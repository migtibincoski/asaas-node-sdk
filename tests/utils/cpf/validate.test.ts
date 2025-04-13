import validateCPF from "../../../src/utils/validate-cpf";

test("validate CPF correctly", () => {
  const invalidCpfWithoutPoints = "00000000000";
  expect(validateCPF(invalidCpfWithoutPoints)).toBe(false);
  const invalidCpfWithPoints = "000.000.000-00";
  expect(validateCPF(invalidCpfWithPoints)).toBe(false);

  const validCpfWithoutPoints = "15251285078";
  expect(validateCPF(validCpfWithoutPoints)).toBe(true);
  const validCpfWithPoints = "152.512.850-78";
  expect(validateCPF(validCpfWithPoints)).toBe(true);
});
