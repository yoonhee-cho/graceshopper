/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('status is either in progress or ordered', () => {
    let order
    let statusOptions = ['in progress', 'ordered']

    beforeEach(async () => {
      order = await Order.create({})
    })

    it('returns true if the order status is a string', () => {
      expect(order.status).to.be.a('string')
    })

    it('returns true if the order status is in progress or ordered ', () => {
      expect(statusOptions).to.include(order.status)
    })
  })
})
