import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Written() {
    return (
        <Box sx={{
            backgroundColor:"FFFFCC",
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
                backgroundColor:"#FFFFF0",
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
                backgroundColor:"#FFFFF0",
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
            </Box>
        </Box>
    );
}

export default Written;
