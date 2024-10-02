import API from '../../api/API';
import Render from '../../helpers/Render';
import SQLParams from '../../helpers/SQLParams';
import Table from '../../components/table/Table';
import Filters from './components/Filters';
import Error from '../../components/error/Error';

export default class Home extends Render {
  constructor() {
    super();
    window.navigation.addEventListener('navigatesuccess', () => {
      this.render();
    })
  }
  
  async render() {
    const content = document.createElement('div');

    const {
      meta,
      data,
      error
    } = await this.#getData();

    if (error) {
      content.appendChild(Filters.render());
      content.appendChild(Error.render(error));
      this.renderContent(content);
    }

    const table = new Table(this.#getTableHeaders(meta));
    for (const item of data) {
      table.addRow(this.#getTableRowValues(meta, item));
    }

    content.appendChild(Filters.render());
    content.appendChild(table.render());
  
    this.renderContent(content);
  }

  async #getData() {
    const query = new SQLParams({
      table: 'yellow_tripdata_2017_pipe',
      defaultLimit: '10',
      fields: [
        'vendorid',
        'tpep_pickup_datetime',
        'tpep_dropoff_datetime',
        'passenger_count',
        'trip_distance',
        'pulocationid',
        'dolocationid',
        'fare_amount',
        'tip_amount',
        'tolls_amount',
        'total_amount'
      ]
    }).toQuery();

    return new API().getYellowTripData(query);
  }

  #getTableHeaders(metaData) {
    return metaData.map(data => data.name);
  }

  #getTableRowValues(metaData, itemData) {
    const headerFields = this.#getTableHeaders(metaData);
    return headerFields.map(field => itemData[field]);
  }
}
