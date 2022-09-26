import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import Load from '../Loading/Load';

const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "Name", headerName: "Name", width: 190 },
    { field: "Age", headerName: "Age", width: 120 },
    { field: "Height", headerName: "Height", width: 150 }
]


const Tables = () => {
    const baseUrl = "https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people"
    let tableDetails ;
    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(false)
    
    async function getData() {
        try{
            await axios.get(baseUrl)
            .then(res => {
                tableDetails = res?.data?.results;
                setTableData(tableDetails);
            })
            setLoading(true)
        } catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        getData();   
    },[])


    return (
        <>
            
            <div style={{ height:500, width: "100%"}} >
            { loading ? 
                <DataGrid
                    columns = {columns}
                    rows = {tableData}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    getRowId={(row) => row.id }
                />
                :
                <Load/>
            }
            </div> 
            
        </>
        
    )
}


export default Tables;