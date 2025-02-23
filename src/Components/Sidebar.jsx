import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const isMobile = useMediaQuery("(max-width: 800px)");
    const drawList = (
        <Box sx={{ backgroundColor: "white",color:"#efefef" ,width:  isMobile ? 200 : 300}} onClick={toggleDrawer(false)}>
            <List>
                {[
                    { title: "AtCoder", link: "https://atcoder.jp/?lang=ja" },
                    { title: "AtCoder2", link: "https://atcoder.jp/?lang=ja" },
                    { title: "AtCoder3", link: "https://atcoder.jp/?lang=ja" },
                ].map((item) => (
                    <ListItem sx={{backgroundColor:"#42A5F5",mb:3}} key={item.title} disablePadding>
                        <ListItemButton component="a" href={item.link} target="_blank">
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {drawList}
            </Drawer>
        </Box>
    );
}
