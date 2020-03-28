class TariffPGRepository {
  tableName;
  db;

    constructor() {
    this.tableName = 'tariffs';
    this.db = use('Database');
  }

  async getById(id) {
    return await this.db
                    .select('*')
                    .from(this.tableName)
                    .where({id});
  }

  async get(filter, pagination = {limit: 100, offset: 0}) {
    
    return await this.db
                    .select('*')
                    .from(this.tableName)
                    .where(filter)
                    .limit(pagination.limit)
                    .offset(pagination.offset);
  }

  async create(data) {
    return await this.db
                    .insert(data)
                    .into(this.tableName);
  }

  async delete(id, isSoft = true) {
    if(isSoft) {
      await this.db
                .table(this.tableName)
                .where({id})
                .update({deleted_at: new Date()})
    } else {
      await this.db
                .table(this.tableName)
                .where({id})
                .del();
    }
    return id;
  }

  async update(id, data) {
    await this.db
              .table(this.tableName)
              .where({id})
              .update(data)
  }
}