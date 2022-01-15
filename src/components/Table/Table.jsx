// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import categories from '../template/categories.json';
// import transactions from '../template/transactions.json';
// import transformDate from '../../utils/transformDate';

// import Table from '@mui/material/Table';
// import TableContainer from '@mui/material/TableContainer';
// import TableBody from '@mui/material/TableBody';
// import TableHead from '@mui/material/TableHead';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// import financeOperations from '../../redux/finance';

// const TransactionsTable = ({ tableData }) => {
//   // const { completedAt, description, category, amount } = tableData;

//   // const dispatch = useDispatch();
//   // const [selected, setSelected] = useState({ day: '', month: '', year: '' });

//   return (
//     <>
//       <TableContainer>
//         <Table variant={'body2'}>
//           <TableHead>
//             <TableRow>
//               <TableCell>дата</TableCell>
//               <TableCell>описание</TableCell>
//               <TableCell>категория</TableCell>
//               <TableCell>сумма</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {transactions.map(
//               ({ _id, completedAt, description, category, amount }) => (
//                 <TableRow key={_id}>
//                   <TableCell>{transformDate(completedAt)}</TableCell>
//                   <TableCell>{description}</TableCell>
//                   <TableCell>{category}</TableCell>
//                   <TableCell>{amount}</TableCell>
//                 </TableRow>
//               ),
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

// export default TransactionsTable;

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function TransactionsTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default TransactionsTable;
