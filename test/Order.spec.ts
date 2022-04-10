import Coupon from '../src/Coupon'
import Item from '../src/Item'
import Order from '../src/Order'

describe('Order', () => {
  it('Should must not place an order with an invalid cpf', () => {
    expect(() => new Order('111.111.111-11')).toThrow(new Error('CPF Inválido'))
  })

  it('should must create a order with 3 items', () => {
    const order = new Order('123.911.547-47')
    order.addItem(new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000), 2)
    order.addItem(new Item(1, 'Instrumentos Musicais', 'Amplificador', 5000), 1)
    order.addItem(new Item(1, 'Instrumentos Musicais', 'Bateria', 4000), 1)

    const total = order.getTotal()
    expect(total).toBe(11000)
  })
  it('Must place an order with discount coupon  ', () => {
    const order = new Order('123.911.547-47')
    order.addItem(new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000), 2)
    order.addItem(new Item(1, 'Instrumentos Musicais', 'Amplificador', 5000), 1)
    order.addItem(new Item(1, 'Instrumentos Musicais', 'Bateria', 4000), 1)
    order.addCoupon(new Coupon('any_code_coupon', 20))

    const total = order.getTotal()
    expect(total).toBe(8800)
  })
})
