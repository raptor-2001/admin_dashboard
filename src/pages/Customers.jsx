import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Page, Selection, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const toolbarsOptions = ['Delete'];
  const selectionsettings = {persistSelections: true};
  const editing = {allowDeleting: true, allowEditing: true};
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        allowSorting
        selectionsettings={selectionsettings}
        pageSettings={{pageCount:5}}
        editSettings={editing}
        toolbar={toolbarsOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Selection, Toolbar, Edit, Sort, Filter, Page]} />
      </GridComponent>
    </div>
  );
};
export default Customers;