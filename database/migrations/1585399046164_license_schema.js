'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LicenseSchema extends Schema {
  up () {
    this.create('licenses', (table) => {
      table.increments()
      table.string('name')
      table.integer('tariff_id').references('id').inTable('tariffs')
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('licenses')
  }
}

module.exports = LicenseSchema
