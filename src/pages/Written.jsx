    // import { Box, Typography } from "@mui/material"
    // import { Link } from "react-router-dom"

    // function Written(){
    //     return(
    //         <Box>
    //             <Box>
    //                 <Typography>README</Typography>
    //                     <Link target="_blanc" to="https://hackmd.io/@pnbGNoGSQKSqgirShq4Y-A/H1Ch75vq1x">README</Link>
    //             </Box>
    //             <Box>
    //                 <Typography>旅行記</Typography>
    //                 <Link target="_blanc" to="https://hackmd.io/@pnbGNoGSQKSqgirShq4Y-A/H1Ch75vq1x">まだないよ</Link>
    //             </Box>
    //         </Box>
    //     )
    // }

    // export default Written;

    import { Box, Typography } from "@mui/material";
    import { Link } from "react-router-dom";
    
    function Written() {
        return (
            <Box sx={{
                display: "flex",
                justifyContent:"flex-start",
                flexDirection: "column",
                gap: 3,
                p: 3,
                maxWidth: "100%",
                mx: "0  "
            }}>
                {/* README */}
                <Box sx={{
                    border: "1px solid #D7CCC8", // やわらかいベージュ色の枠
                    borderRadius: 2,
                    p: 2
                }}>
                    <Typography variant="h6" sx={{ color: "#5D4037", fontWeight: "bold" }}>
                        README
                    </Typography>
                    <Link 
                        to="https://hackmd.io/@pnbGNoGSQKSqgirShq4Y-A/H1Ch75vq1x" 
                        target="_blank"
                        style={{ color: "#FF7043", textDecoration: "none" }}
                    >
                        READMEを読む
                    </Link>
                </Box>
    
                {/* 旅行記 */}
                <Box sx={{
                    border: "1px solid #D7CCC8",
                    borderRadius: 2,
                    p: 2
                }}>
                    <Typography variant="h6" sx={{ color: "#5D4037", fontWeight: "bold" }}>
                        旅行記
                    </Typography>
                    <Link 
                        to="https://hackmd.io/@pnbGNoGSQKSqgirShq4Y-A/H1Ch75vq1x" 
                        target="_blank"
                        style={{ color: "#8D6E63", textDecoration: "none" }}
                    >
                        まだないよ
                    </Link>
                    <br></br>
                    <Link 
                        to="https://hackmd.io/@pnbGNoGSQKSqgirShq4Y-A/H1Ch75vq1x" 
                        target="_blank"
                        style={{ color: "#8D6E63", textDecoration: "none" }}
                    >
                        まだないよ
                    </Link>
                    <br></br>
                    <Link 
                        to="https://hackmd.io/@pnbGNoGSQKSqgirShq4Y-A/H1Ch75vq1x" 
                        target="_blank"
                        style={{ color: "#8D6E63", textDecoration: "none" }}
                    >
                        まだないよ
                    </Link>
                </Box>
            </Box>
        );
    }
    
    export default Written;
    