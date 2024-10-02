import SQLParams from '../SQLParams';

class Setup {
  #table = 'table_test';
  #defaultLimit = 30;
  #fields = ['name', 'price'];

  withQueryParams(params) {
    window.history.pushState({}, '', params);
    return this;
  }

  withoutFields() {
    this.#fields = undefined;
    return this;
  }

  build() {
    return new SQLParams({
      table: this.#table,
      defaultLimit: this.#defaultLimit,
      fields: this.#fields
    }).toQuery()
  }
}

describe('SQLParams', () => {
  test('It should generate a correct query with default values with there are no params setted', () => {
    const result = new Setup().build();
    expect(result).toBe('SELECT name,price FROM table_test LIMIT 30');
  });

  test('It should generate a query selecting all fields when theres not default fields selected', () => {
    const result = new Setup().withoutFields().build();
    expect(result).toBe('SELECT * FROM table_test LIMIT 30');
  });

  test('It should generate a correct query with params', () => {
    const result = new Setup().withQueryParams('?limit=100&eq-count=19').build();
    expect(result).toBe('SELECT name,price FROM table_test WHERE count = 19 LIMIT 100');
  });
});