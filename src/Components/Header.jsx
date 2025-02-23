import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Sidebar } from "./Sidebar";

// スタイル定義
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFCC", // 優しいベージュ
  boxShadow: "none",
  borderRadius: "10px",
  padding: "5px 15px",
}));

const FullWidthAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#CCFFFF", // ふんわりオレンジ
  boxShadow: "none",
  width: "100%",
  marginTop: "5px",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#5a5a5a", // 落ち着いたグレー
  fontSize: "1.2rem",
  fontWeight: "bold",
  padding: "10px 15px",
  transition: "color 0.3s",
  borderRadius: "8px",
  "&:hover": {
    color: "#ff8a65", // 優しいオレンジ
    backgroundColor: "#fcefe6",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  width: "35%",
  marginRight: "5%",
  "@media (max-width: 800px)": {
    width: "30%",
    marginRight: "5%",
    marginBottom:"5%"
  },
}));

function Header() {
  // スマホ対応
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", width: "100%" }}>
      {/* ロゴと1つめのツールバー（横並び） */}

      {!isMobile ? 
        <Box sx={{ display: "flex", alignItems: "center", width: "82%", maxWidth: "100%", justifyContent: "space-between", padding: "10px" }}>
          <Logo src="/portal-shizuoka-vite/img/logo_header.svg" alt="ロゴ" />
          <StyledAppBar position="static">
            <StyledToolbar>
              <Typography>
                <StyledLink target="_blank" to="https://gakujo.shizuoka.ac.jp/lcu-web/">🏫 学情システム</StyledLink>
              </Typography>
              <Typography>
                <StyledLink target="_blank" to="https://vpn.inf.shizuoka.ac.jp/dana-na/auth/url_3/welcome.cgi">📂 情報学部ファイルサーバ</StyledLink>
              </Typography>
              <Typography>
                  <StyledLink target="_blank" to="https://www.lib.shizuoka.ac.jp/">📚 大学図書館</StyledLink>
              </Typography>
              <Typography>
                <StyledLink target="_blank" to="https://ayumu203.github.io/portal-shizuoka/img/map.jpg">🌍 学内マップ</StyledLink>
              </Typography>
              <Sidebar></Sidebar>
            </StyledToolbar>
          </StyledAppBar>
        </Box>
      :
        <Box sx={{ display: "flex", flexDirection:"column", width: "100%", maxWidth: "100%", justifyContent: "space-between", padding: "10px",}}>
        <Logo src="/portal-shizuoka-vite/img/logo_header.svg" alt="ロゴ" />
        <StyledAppBar position="static">
          <StyledToolbar>
            <Typography>
              <StyledLink target="_blank" to="https://gakujo.shizuoka.ac.jp/lcu-web/">🏫 学情システム</StyledLink>
            </Typography>
            <Typography>
              <StyledLink target="_blank" to="https://vpn.inf.shizuoka.ac.jp/dana-na/auth/url_3/welcome.cgi">📂 情報学部ファイルサーバ</StyledLink>
            </Typography>
            <Typography>
                <StyledLink target="_blank" to="https://www.lib.shizuoka.ac.jp/">📚 大学図書館</StyledLink>
            </Typography>
            <Typography>
              <StyledLink target="_blank" to="https://ayumu203.github.io/portal-shizuoka/img/map.jpg">🌍 学内マップ</StyledLink>
            </Typography>
            <Sidebar></Sidebar>
          </StyledToolbar>
        </StyledAppBar>
      </Box>
      }




      {/* 2つめのツールバー（下に画面いっぱいに配置） */}
      <FullWidthAppBar position="static">
        <StyledToolbar>
          <Typography>
            <StyledLink to="/portal-shizuoka-vite/">🏠 トップ</StyledLink>
          </Typography>
          <Typography>
            <StyledLink to="/portal-shizuoka-vite/Schedule">🕒 時間割</StyledLink>
          </Typography>
          <Typography>
            <StyledLink to="/portal-shizuoka-vite/Timetable">⏳ 授業時間</StyledLink>
          </Typography>
          <Typography>
            <StyledLink to="/portal-shizuoka-vite/Written">📝 書き物</StyledLink>
          </Typography>
        </StyledToolbar>
      </FullWidthAppBar>
    </Box>
  );
}

export default Header;
