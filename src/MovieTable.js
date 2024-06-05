// import React from 'react'
// import paginationFactory from 'react-bootstrap-table2-paginator'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
// import BootstrapTable from 'react-bootstrap-table-next'
// import {  Button } from 'reactstrap'
// import { Link } from 'react-router-dom'

// const MovieTable = (props) => {


//     const options = {
//         sizePerPageRenderer,
//         showTotal: true,
//         sizePerPageList: [
//           {
//             text: '5',
//             value: 5
//           },
//           {
//             text: '10',
//             value: 10
//           },
//           {
//             text: '25',
//             value: 25
//           },
//           {
//             text: '50',
//             value: 50
//           },
//           {
//             text: 'All',
//             value: props.data.length
//           }
//         ]
//       }
//       const columns = [
//         {
//           dataField: 'id',
//           text: '#',
//           headerStyle: {
//             backgroundColor: '#2c2c2c',
//             color: '#ffffff'
//           }
//         },
       
//       ]
//   return (
//     <ToolkitProvider
//     keyField='id'
//     data={props.data}
//     columns={columns}
//     exportCSV={{
//       fileName: 'Language.csv',
//       noAutoBOM: true,
//       blobType: 'text/csv;charset=utf-8'
//     }}
//     search
//   >
//     {props => (
//       <div>
//         <div className='d-flex justify-content-between align-items-center'>
//         <MyExportCSV {...props.csvProps} />
//         <SearchBar {...props.searchProps} />
//         </div>
//         {/* <SearchBar {...props.searchProps} /> */}
//         <BootstrapTable
//           striped
//           {...props.baseProps}
//           pagination={paginationFactory(options)}
//           noDataIndication={'No Record Found'}
//           // wrapperClasses="table-responsive"
//         />
//         <hr />
//         {/* <MyExportCSV {...props.csvProps} /> */}
//       </div>
//     )}
//   </ToolkitProvider>
//   )
// }

// const { SearchBar } = Search
// const sizePerPageRenderer = ({
//   options,
//   currSizePerPage,
//   onSizePerPageChange
// }) => (
//   <div className='btn-group' role='group'>
//     {options.map(option => {
//       const isSelect = currSizePerPage === `${option.page}`
//       return (
//         <button
//           key={option.text}
//           type='button'
//           onClick={() => onSizePerPageChange(option.page)}
//           className={`btn ${isSelect ? 'btn-primary' : 'btn-secondary'}`}
//         >
//           {option.text}
//         </button>
//       )
//     })}
//   </div>
// )

// const MyExportCSV = props => {
//   const handleClick = () => {
//     props.onExport()
//   }
//   return (
//     <div align='d-flex'>
//       <Button className='btn' color='success' onClick={handleClick}>
//         Export to CSV
//       </Button>{' '}
//       <Link className='btn btn-primary ml-3' to={'/admin/add-genre'}>
//         Create Genre
//       </Link>
//     </div>
//   )
// }

// export default MovieTable
