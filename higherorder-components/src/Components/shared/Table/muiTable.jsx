import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"

export default  function Datagrid({
    rows=[],
    columns,
    height = 400,
    width = "100%"
}) {
    return (
        <Box sx={{ height: height, width: width , }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                  page: 0,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            pagination
          />
        </Box>
      );
}