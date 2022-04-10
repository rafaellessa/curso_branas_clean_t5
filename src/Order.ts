import Item from './Item'
import OrderItem from './OrderItem'
import Cpf from './Cpf'
import Coupon from './Coupon'

export default class Order {
  orderItems: OrderItem[]
  cpf: Cpf
  coupon?: Coupon

  constructor (cpf: string) {
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }

  addItem (item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  addCoupon (coupon: Coupon) {
    this.coupon = coupon
  }

  getTotal () {
    let total = 0
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal()
    }
    if (this.coupon) {
      total -= (total * this.coupon.percentage) / 100
    }
    return total
  }
}
