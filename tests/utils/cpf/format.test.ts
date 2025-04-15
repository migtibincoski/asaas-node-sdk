import formatCPF from "../../../src/utils/format-cpf";

test("formats CPF correctly", () => {
  const CPF = "00000000000";
  expect(formatCPF(CPF)).toBe("000.000.000-00");
});
