import React from "react";
import { Box, Typography } from "@mui/material";

function Home() {
    return(
        <Box mt={3} sx={{
            backgroundColor: "#FFFFCC", // アイボリー系の優しい背景色
            padding: "30px",
            borderRadius: "10px", // 少し丸みを持たせる
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" // ふんわりした影
        }}>
            <Box>
                <Typography 
                    textAlign="center" 
                    fontSize="1.5rem" 
                    color="#5A3E2B" // 落ち着いたダークブラウン
                    fontWeight="bold"
                    mb={2}
                >
                    自称静大生用ポータルサイト.
                </Typography>
                <Typography 
                    textAlign="center" 
                    fontSize="1.2rem" 
                    color="#5A3E2B"
                    fontWeight="bold"
                >
                    ChatgptがほとんどのUIを書いてくれました(悲).
                </Typography>
                <Typography 
                    textAlign="center" 
                    fontSize="1.2rem" 
                    color="#5A3E2B"
                    fontWeight="bold"
                >
                    時間割の使い方は「書き物」 → 「README」に記載.
                </Typography>
            </Box>
            <Box 
                component="img" 
                src="/portal-shizuoka-vite/img/home.jpg"
                alt="ホームイメージ"
                width="100%" 
                sx={{
                    borderRadius: "12px", // 画像の角を少し丸める
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" // やわらかい影
                }}
            />
        </Box>
    );
}

export default Home;
