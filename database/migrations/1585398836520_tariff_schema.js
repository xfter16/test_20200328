'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TariffSchema extends Schema {
  up () {
    this.create('tariffs', (table) => {
      table.increments()
      table.string('name')
      table.string('code_name').unique()
      table.float('cost')
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('tariffs')
  }
}

module.exports = TariffSchema
