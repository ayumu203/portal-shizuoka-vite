import React from "react";
import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";
import "./schedule.css"
import parse from "html-react-parser";
export const Schedule = () =>{
    const [scheduleTableData,setScheduleData] = useState([]);

    useEffect(() => {
        const scheduleTableParsed = localStorage.getItem('schedule');
        if(scheduleTableParsed){
            setScheduleData(parse(scheduleTableParsed));
        }
    },[])

    const handleFileUpload = (event) =>{
        const files = event.currentTarget.files;
        if(!files || files?.length === 0) return ;
        const file = files[0];
        const reader = new FileReader();
    
        reader.onload = (e) =>{
            const text = e.target.result;
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(text,"text/html");
    
            const scheduleTableHTML = doc.querySelector(".schedule-table");
            setScheduleData(parse(scheduleTableHTML.outerHTML));
            localStorage.setItem('schedule',scheduleTableHTML.outerHTML);
            // console.log(scheduleTableHTML.outerHTML);
        }
        reader.readAsText(file);
    }

    const handleClearLocalstorage = () => {
        localStorage.clear();
    }

    return(
        <Box>
            {scheduleTableData.length === 0 ? 
                // <form>
                //     <input type="file" accept=".html" onChange={handleFileUpload} /> 
                // </form> 
                <form>
                    <input 
                        type="file" 
                        accept=".html" 
                        id="upload-file" 
                        style={{ display: "none" }} 
                        onChange={handleFileUpload} 
                    />
                    <label htmlFor="upload-file">
                        <Button
                            component="span"
                            sx={{
                                display:"flex",
                                justifyContent:"center",
                                mt:"2%",
                                backgroundColor: "#4CAF50",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "8px",
                                padding: "10px 20px",
                                '&:hover': {
                                    backgroundColor: "#388E3C"
                                }
                            }}
                        >
                            📂 ファイルをアップロード
                        </Button>
                    </label>
                </form>

                :
             <>
                <Button
                    sx={{
                        backgroundColor: "#ff4d4d",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        mt:"2%",
                        ml:"5%",
                        '&:hover': {
                            backgroundColor: "#cc0000"
                        }
                    }}
                    onClick={handleClearLocalstorage}
                    href="https://ayumu203.github.io/portal-shizuoka-vite/"
                >
                    時間割データを削除
                </Button>
                <Box>{scheduleTableData}</Box>
            </>
            }
        </Box>
    );
}