import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataTable() {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 40,
      maxColumns: 6,
    });
  
    const [sortModel, setSortModel] = React.useState([
      {
        field: 'commodity',
        sort: 'asc',
      },
    ]);
  
    return (
      <div style={{ height: '80vh', width: '100%', justifyContent: 'center', alignContent: 'center'}}>
        <DataGrid
          sortingOrder={['desc', 'asc']}
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
          {...data}
        />
      </div>
    );
  }