import React, { useEffect, useState } from 'react'
import  Datagrid  from '../shared/Table/muiTable'
import { ENDPOINT, privateDelete, privateGET } from '../../services/axiosReq'
import { IconButton } from '@mui/material'
import toast from 'react-hot-toast'




const Dashboard = () => {
  const [row , setRow] = useState([])
  const fetchallUsers = async() => {
      const {data} = await privateGET("randomusers")
      // console.log('response.data.data', data)
      setRow(data?.data?.data || [])
  }

  const handleDelete = async(id) => {
      // await privateDelete("randomusers" , id)
     const flteredRow = row.filter((ele) => ele.id !== id)
     console.log('flteredRow', flteredRow)
     setRow(flteredRow)
     toast.success(`User Deleted Successfully`)
      // fetchallUsers();
  }

  const column = [
    {
        field : 'id' , headerName: "ID" , flex : 1  
    },
    {
      field : 'firstName' , headerName: "First Name"  , flex : 1 , renderCell: (params) => `${params?.row?.name?.first}` || ''
    },
    {
      field : 'lastName' , headerName: "last Name"  , flex : 1 , renderCell: (params) =>  `${params?.row?.name?.last}` || ''
    },
    {
      field : 'dob' , headerName: "Age"  , flex : 1 , renderCell: (params) => params?.value?.age || ''
    },
    {
      field : 'gender' , headerName: "Gender"  , flex : 1  , renderCell : (params) => params?.value || ''
    },
    {
    field : 'email' , headerName: "Email" , flex : 1.5  , renderCell : (params) => params?.value || "XXXXXXXXXX"
  },
  {
    field : 'cell' , headerName: "Number" , flex : 1  ,  renderCell : (params) => params?.value,
  },
  {
    field : 'Action' , headerName: "Action" , flex : 1  , renderCell : (params) => {return <IconButton onClick={()=> handleDelete(params?.row?.id)}>🚮</IconButton>}
  },
  ]

  useEffect(()=> {
    fetchallUsers()
  // console.log('row', row , row.length)  

  },[])


  return (
    <div>
         Dashboard
         <div>
          <Datagrid rows={row} columns={column} height={400}  />
         </div>
    </div>
  )
}

export default Dashboard