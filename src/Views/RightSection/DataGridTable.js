import {
    DataGrid,
    gridPageCountSelector,
    GridPagination,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import './DataGridTable.scss';
const columns = [
    {
        field: 'symbol',
        headerName: 'Symbol',
    },
    {
        field: 'type',
        headerName: 'Type',
        renderCell: (props) => {
            return <div className={`type-cell ${props.value === 'sell' ? 'red-bg' : ''}`}><span>{props.value}</span></div>
        }
    },
    {
        field: 'openDate',
        headerName: 'Open Date',
        width: 150
    },
    {
        field: 'openPrice',
        headerName: 'Open Price',
        type: 'number'
    },
    {
        field: 'sl',
        headerName: 'SL',
        width: 70,
        type: 'number'
    },
    {
        field: 'tp',
        headerName: 'TP',
        width: 70,
        type: 'number'
    },
    {
        field: 'closeDate',
        headerName: 'Close Date',
        width: 150
    },
    {
        field: 'closePrice',
        headerName: 'Close Price',
        type: 'number'
    },
    {
        field: 'lots',
        headerName: 'Lots',
        type: 'number'
    },
    {
        field: 'profit',
        headerName: 'Profit',
        renderCell: (props) => {
            return <div className={`profit-cell ${props.row.isProfitPositive ? 'positive' : 'negative'}`}>{props.value}</div>
        }
    },
    {
        field: 'duration',
        headerName: 'Duration',
    },
    {
        field: 'gain',
        headerName: 'Gain',
        renderCell: (props) => {
            return <div className={`gain-cell ${props.row.isGainPositive ? 'positive' : 'negative'}`}>{props.value}</div>
        }
    },
];

const rows = [
    { id: 1, symbol: "EURUSD.i", type: 'sell', openDate: '02-3-24, 06:12:16', openPrice: "2.80506", sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 180568, lots: 100, profit: "-$5.00", duration: "11s", gain: "-0.01%", isProfitPositive: false, isGainPositive: false },
    { id: 2, symbol: "EURUSD.i", type: 'buy', openDate: '02-3-24, 06:12:16', openPrice: "2.80568", sl: 0, tp: 0, closeDate: "02-3-24, 06:12:16", closePrice: 180568, lots: 100, profit: "$15.00", duration: "11s", gain: "0.02%", isProfitPositive: true, isGainPositive: true  },
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
const DataTable = () => {
    return (
        <div className="card">
            <DataGrid
                rows={rows}
                disableColumnMenu
                columns={columns.map((column) => ({
                    ...column,
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
                        labelDisplayedRows: ({ from, to, count }) => ``,
                        labelRowsPerPage: "Showing:"
                    }
                }}
                cellSelection={false}
                pageSizeOptions={[3, 5, 10]}
                checkboxSelection={false}
                disableRowSelectionOnClick
                hideFooterSelectedRowCount={true}
            />
        </div>
    )
}
export default DataTable;