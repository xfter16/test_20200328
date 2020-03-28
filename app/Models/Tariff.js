'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tariff extends Model {
  constructor() {
    super();
    this.repository = new TariffPGRepository();
  }

  getById(id) {
    console.log(id)
    return this.repository.getById(id);
  }

  get(filter, pagination) {
    return this.repository.get(filter, pagination);
  }

  create(data) {
    return this.repository.create(data);
  }

  update(id, data) {
    return this.repository.update(id, data);
  }

  remove(id) {
    return this.repository.delete(id, true);
  }
}

module.exports = Tariff
