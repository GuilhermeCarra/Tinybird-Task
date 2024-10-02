import InputNumberFilter from '../../../components/filters/InputNumberFilter';

const CONTENT_STYLE = 'mdl-grid';

export default class Filters {
  
  static render() {
    const content = document.createElement('div');
    content.className = CONTENT_STYLE;

    const vendorIdFilter = new InputNumberFilter('Vendor ID', 'eq-vendorid');
    const minTotalAmountFilter = new InputNumberFilter('Min total amount', '>-total_amount');
    const maxTotalAmountFilter = new InputNumberFilter('Max total amount', '<-total_amount');
    const limitFilter = new InputNumberFilter('Rows limit', 'limit');

    content.appendChild(vendorIdFilter.render());
    content.appendChild(minTotalAmountFilter.render());
    content.appendChild(maxTotalAmountFilter.render());
    content.appendChild(limitFilter.render());
  
    return content;
  }
}
