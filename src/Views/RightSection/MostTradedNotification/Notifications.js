import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { 
    DataGrid, 
    gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector, } from '@mui/x-data-grid';
  import MuiPagination from '@mui/material/Pagination';
import { useState } from 'react';

const columns = [
    {
        field: 'time',
        headerName: 'Time',
        width: 150
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 150
    },
    {
        field: 'message',
        headerName: 'Message',
        width: 200
    }
];

const rows = [
    { id: 1, duration: 8, time: '8 days ago', type: 'RulesSoftBreach', message: "Closed trade not placed with a stop-loss" },
    { id: 2, duration: 12, time: '12 days ago', type: 'RulesSoftBreach', message: "Days since a trade was placed, closed trade not placed with a stop-loss" },
    { id: 3, duration: 14, time: '14 days ago', type: 'RulesSoftBreach', message: "Closed trade not placed with a stop-loss" },
    { id: 4, duration: 22, time: '22 days ago', type: 'RulesSoftBreach', message: "Closed trade not placed with a stop-loss" },
    { id: 5, duration: 15, time: '15 days ago', type: 'RulesSoftBreach', message: "Closed trade not placed with a stop-loss" }
];
function Pagination({ page, onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event, newPage - 1);
        }}
      />
    );
  }
  function CustomPagination(props) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
  }
const Notifications = () => {
    const [age, setAge] = useState(30);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='card'>
            <div className="notification-wrapper">
                <div className="title-wrapper">
                    <h2>Notifications</h2>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={30}>Last 30 Day(s)</MenuItem>
                            <MenuItem value={60}>Last 60 Day(s)</MenuItem>
                            <MenuItem value={90}>Last 90 Day(s)</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <DataGrid
                    rows={rows}
                    disableColumnMenu
                    columns={columns.map((column) => ({
                        ...column,
                        sortable: false,
                        resizable: false,
                        filterable: false
                    }))}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 3,
                            },
                        },
                    }}
                    pagination
                    slots={{
                    pagination: CustomPagination,
                    }}
                    localeText={{
                        
                        MuiTablePagination: {
                            labelDisplayedRows: ({from,to,count}) => ``,
                            labelRowsPerPage: "Showing:"
                        }
                    }}
                    cellSelection={false}
                    pageSizeOptions={[3,5,10]}
                    checkboxSelection={false}
                    disableRowSelectionOnClick
                    hideFooterSelectedRowCount={true}
                />
            </div>
        </div>
    )
}

export default Notifications;