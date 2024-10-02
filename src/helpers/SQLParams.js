import Navigator from './Navigator';

export default class SQLParams {
  #table;
  #defaultLimit = '10';
  #fields;

  constructor({ table, defaultLimit, fields }) {
    this.#table = table;
    this.#defaultLimit = defaultLimit;
    this.#fields = fields || '*';
  }

  toQuery() {
    let baseQuery = `SELECT ${this.#fields} FROM ${this.#table}`;
  
    const params = new Navigator().getParams();
    if (!params.length) {
      return `${baseQuery} LIMIT ${this.#defaultLimit}`;
    }

    const operations = [...params].map(([param, value]) => {
      const [op, field] = param.split('-');
      return this.#translateOperator(op, field, value);
    });

    const whereClause = operations.filter(op => op?.group === 'WHERE')
      .map(op => op.query)
      .join(' AND ');
    if (whereClause) {
      baseQuery += ` WHERE ${whereClause}`;
    }

    const limit =  operations.find(op => op?.group === 'LIMIT')?.query;

    return `${baseQuery} LIMIT ${limit || this.#defaultLimit}`;
  }

  #translateOperator(operator, field, value) {
    switch (operator) {
      case '<':
      case '>':
        return { group: 'WHERE', query: `${field} ${operator} ${value}` };
      case 'eq':
        return { group: 'WHERE', query: `${field} = ${value}` };
      case 'limit':
        return { group: 'LIMIT', query: value };
    } 
  }
}

