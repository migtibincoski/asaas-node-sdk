export default function validateCPF(cpf: string | number): boolean {
  cpf = cpf.toString();
  cpf = cpf.trim();
  cpf = cpf.replaceAll(/\D/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let x: number = 0;
  let y: number = 0;

  for (let i = 1; i <= 9; i++)
    x += parseInt(cpf.substring(i - 1, i)) * (11 - i);

  y = (x * 10) % 11;
  if (y === 10 || y === 11) y = 0;

  if (y !== parseInt(cpf.substring(9, 10))) return false;

  x = 0;
  for (let i = 1; i <= 10; i++)
    x += parseInt(cpf.substring(i - 1, i)) * (12 - i);

  y = (x * 10) % 11;
  if (y === 10 || y === 11) y = 0;

  if (y == parseInt(cpf.substring(10, 11))) return true;
  else return false;
}
