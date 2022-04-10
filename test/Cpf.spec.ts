import Cpf from '../src/Cpf'

test('Deve testar um cpf válido', () => {
  const cpf = new Cpf('123.911.547-47')
  expect(cpf.getValue()).toBe('123.911.547-47')
})

const invalidCpfWithSameDigits = [
  '111.111.111-11',
  '222.222.222-22'
]

describe.each(invalidCpfWithSameDigits)('Deve testar um cpf inválido com os digitos iguais', (cpf: string) => {
  test(`${cpf}`, () => {
    expect(() => new Cpf(cpf)).toThrow(new Error('CPF Inválido'))
  })
})
