// // import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

// // export const TimeTable = () =>{
// //     const schedule = [
// //         {period:"１コマ",stime:"０８：４０",etime:"１０：１０"},
// //         {period:"２コマ",stime:"１０：２０",etime:"１１：５０"},
// //         {period:"３コマ",stime:"１２：４５",etime:"１４：１５"},
// //         {period:"４コマ",stime:"１４：２５",etime:"１５：５５"},
// //         {period:"５コマ",stime:"１６：０５",etime:"１７：３５"},
// //     ];
// //     return(
// //         <Box mt={10} sx={{
// //             border:"solid",
// //             borderColor:"#0B0",
// //             borderWidth:3,
// //             borderRadius:"1%"
// //         }}>
// //             <Typography mt={3} sx={{
// //                 textAlign:"center",
// //                 fontSize:"150%",
// //                 backgroundColor:"#0A0",
// //                 color:"white"
// //             }}>時間割</Typography>
// //             <Box pt={10} pb={5} sx={{
// //                 display:"flex",
// //                 justifyContent:"center",
// //             }}>
// //                 <TableContainer component={Paper} sx={{
// //                     width:"90%",
// //                 }}>
// //                     <Table aria-label="simple table" sx={{
// //                     }}>
// //                         <TableHead>
// //                             <TableRow >
// //                                 <TableCell sx={{
// //                                     backgroundColor:"#EEE"
// //                                 }}>
// //                                     コマ
// //                                 </TableCell>
// //                                 <TableCell sx={{
// //                                     backgroundColor:"#EEE"
// //                                 }}>
// //                                     開始時間
// //                                 </TableCell>
// //                                 <TableCell sx={{
// //                                     backgroundColor:"#EEE"
// //                                 }}>
// //                                     終了時間
// //                                 </TableCell>
// //                             </TableRow>
// //                         </TableHead>
// //                         <TableBody>
// //                             {
// //                                 schedule.map((item,index) => (
// //                                     <TableRow key={index}>
// //                                         <TableCell sx={{
// //                                             // backgroundColor:"#CCFFCC"
// //                                         }}>
// //                                             {item.period}
// //                                         </TableCell>
// //                                         <TableCell>{item.stime}</TableCell>
// //                                         <TableCell>{item.etime}</TableCell>
// //                                     </TableRow>
// //                                 ))
// //                             }
// //                         </TableBody>
// //                     </Table>
// //                 </TableContainer>
// //             </Box>
// //         </Box>
// //     )   
// // }

// import { 
//     Box, Paper, Table, TableBody, TableCell, 
//     TableContainer, TableHead, TableRow, Typography 
// } from "@mui/material";

// export const TimeTable = () => {
//     const schedule = [
//         { period: "１コマ", stime: "０８：４０", etime: "１０：１０" },
//         { period: "２コマ", stime: "１０：２０", etime: "１１：５０" },
//         { period: "３コマ", stime: "１２：４５", etime: "１４：１５" },
//         { period: "４コマ", stime: "１４：２５", etime: "１５：５５" },
//         { period: "５コマ", stime: "１６：０５", etime: "１７：３５" },
//     ];

//     return (
//         <Box mt={5} sx={{
//             border: "3px solid #4CAF50",
//             borderRadius: "10px",
//             maxWidth: "80%",
//             mt:"2%",
//             ml:"auto",
//             mr:"auto",
//             overflow: "hidden",
//             boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
//         }}>
//             <Typography sx={{
//                 textAlign: "center",
//                 fontSize: "1.8rem",
//                 fontWeight: "bold",
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 padding: "10px 0"
//             }}>
//                 授業時間
//             </Typography>
//             <Box py={5} sx={{
//                 display: "flex",
//                 justifyContent: "center",
//             }}>
//                 <TableContainer component={Paper} sx={{
//                     width: "90%",
//                     borderRadius: "8px",
//                     overflow: "hidden"
//                 }}>
//                     <Table aria-label="time-table">
//                         <TableHead>
//                             <TableRow sx={{ backgroundColor: "#A5D6A7" }}>
//                                 <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: "1.2rem" }}>コマ</TableCell>
//                                 <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: "1.2rem" }}>開始時間</TableCell>
//                                 <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: "1.2rem" }}>終了時間</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {schedule.map((item, index) => (
//                                 <TableRow key={index} sx={{
//                                     "&:nth-of-type(even)": { backgroundColor: "#E8F5E9" },
//                                     "&:hover": { backgroundColor: "#C8E6C9" },
//                                     transition: "background-color 0.3s"
//                                 }}>
//                                     <TableCell>{item.period}</TableCell>
//                                     <TableCell>{item.stime}</TableCell>
//                                     <TableCell>{item.etime}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Box>
//         </Box>
//     );
// }

import React from "react";
import { 
    Box, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Typography 
} from "@mui/material";

export const TimeTable = () => {
    const schedule = [
        { period: "１コマ", stime: "０８：４０", etime: "１０：１０" },
        { period: "２コマ", stime: "１０：２０", etime: "１１：５０" },
        { period: "３コマ", stime: "１２：４５", etime: "１４：１５" },
        { period: "４コマ", stime: "１４：２５", etime: "１５：５５" },
        { period: "５コマ", stime: "１６：０５", etime: "１７：３５" },
    ];

    return (
        <Box mt={5} sx={{
            backgroundColor: "#FFFFCC", // アイボリー系の背景色
            border: "3px solid #FFFFCC", // 落ち着いたグリーン
            borderRadius: "12px",
            maxWidth: "95%",
            mt: "2%",
            ml: "auto",
            mr: "auto",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)"
        }}>
            <Typography sx={{
                textAlign: "center",
                fontSize: "1.8rem",
                fontWeight: "bold",
                backgroundColor: "#8BC34A", // 柔らかめのグリーン
                color: "white",
                padding: "12px 0",
                borderRadius: "10px 10px 0 0"
            }}>
                授業時間
            </Typography>
            <Box py={5} sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <TableContainer component={Paper} sx={{
                    width: "90%",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}>
                    <Table aria-label="time-table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#C5E1A5" }}>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1.2rem" }}>コマ</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1.2rem" }}>開始時間</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1.2rem" }}>終了時間</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {schedule.map((item, index) => (
                                <TableRow key={index} sx={{
                                    "&:nth-of-type(even)": { backgroundColor: "#E8F5E9" },
                                    "&:hover": { backgroundColor: "#A5D6A7", transform: "scale(1.02)" },
                                    transition: "background-color 0.3s, transform 0.2s"
                                }}>
                                    <TableCell sx={{ color: "#4E342E" }}>{item.period}</TableCell>
                                    <TableCell sx={{ color: "#4E342E" }}>{item.stime}</TableCell>
                                    <TableCell sx={{ color: "#4E342E" }}>{item.etime}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
