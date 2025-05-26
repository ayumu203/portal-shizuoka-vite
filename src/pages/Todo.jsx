import React, { useState, useEffect } from 'react';
import {
    Box, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Typography, TextField, Button,
    Checkbox, IconButton, FormControlLabel
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns'; // 日付のフォーマット用

const TODO_STORAGE_KEY = 'todoApp.todos';

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    // 初期化時にローカルストレージからデータを読み込む
    useEffect(() => {
        const storedTodos = localStorage.getItem(TODO_STORAGE_KEY);
        if (storedTodos) {
            try {
                setTodos(JSON.parse(storedTodos));
            } catch (e) {
                console.error("Failed to parse todos from localStorage", e);
                setTodos([]); // パースに失敗した場合は空にする
            }
        }
    }, []);

    // todosが変更されたらローカルストレージに保存
    // ... (他のimportやuseStateはそのまま)

    // todosが変更されたらローカルストレージに保存
    useEffect(() => {
        console.log('[Effect Save] Attempting to save todos to localStorage. Current todos:', todos);
        try {
            localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
            // 保存直後に実際に保存された値もログに出力してみる
            const savedValue = localStorage.getItem(TODO_STORAGE_KEY);
            console.log('[Effect Save] Todos saved to localStorage for key "' + TODO_STORAGE_KEY + '". Value in localStorage:', savedValue);
        } catch (e) {
            console.error('[Effect Save] Error saving todos to localStorage for key "' + TODO_STORAGE_KEY + '":', e);
            // ユーザーにエラーを通知することも検討
            alert('Todoアイテムの保存に失敗しました。ローカルストレージが利用できないか、容量がいっぱいの可能性があります。エラーの詳細はコンソールを確認してください。');
        }
    }, [todos]); // todosが変更されるたびに実行されます

    // ... (読み込み処理のuseEffectや他の関数、return文はそのまま)
    const handleAddTodo = () => {
        if (inputText.trim() === '' || dueDate === '') {
            alert('内容と締切日を入力してください。');
            return;
        }
        const newTodo = {
            id: Date.now().toString(), // ユニークID
            text: inputText.trim(),
            createdAt: format(new Date(), 'yyyy-MM-dd'), // 現在の日付
            dueDate: dueDate,
            completed: false,
            important: isImportant,
        };
        setTodos([...todos, newTodo]);
        setInputText('');
        setDueDate('');
        setIsImportant(false);
    };

    const handleToggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Box mt={5} sx={{
            backgroundColor: "#FFFFCC", // アイボリー系の背景色
            border: "3px solid #A5D6A7", // 少し濃いめの落ち着いたグリーン
            borderRadius: "12px",
            maxWidth: "95%",
            mt: "2%",
            ml: "auto",
            mr: "auto",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)" // 修正箇所
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
                Todo List
            </Typography>

            <Box p={3} sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <TextField
                    label="Todoの内容"
                    variant="outlined"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    sx={{ width: '80%', backgroundColor: 'white' }}
                />
                <TextField
                    label="締切日"
                    type="date"
                    variant="outlined"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: '80%', backgroundColor: 'white' }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isImportant}
                            onChange={(e) => setIsImportant(e.target.checked)}
                            sx={{ color: "#FF6F00", '&.Mui-checked': { color: "#FF6F00" } }} // オレンジ系の色
                        />
                    }
                    label="重要"
                    sx={{ width: '80%', color: "#4E342E" }}
                />
                <Button
                    variant="contained"
                    onClick={handleAddTodo}
                    sx={{
                        backgroundColor: "#689F38", // 少し濃いグリーン
                        color: "white",
                        '&:hover': { backgroundColor: "#558B2F" },
                        padding: "10px 20px",
                        fontSize: "1rem"
                    }}
                >
                    追加
                </Button>
            </Box>

            <Box py={3} sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <TableContainer component={Paper} sx={{
                    width: "90%",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
                }}>
                    <Table aria-label="todo-table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#C5E1A5" }}> {/* 明るいグリーン系 */}
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1rem" }}>状態</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1rem" }}>内容</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1rem" }}>作成日</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1rem" }}>締切日</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "#4E342E", fontSize: "1rem", textAlign: 'center' }}>削除</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} sx={{ textAlign: 'center', color: '#757575', padding: '20px' }}>
                                        Todoアイテムはありません。
                                    </TableCell>
                                </TableRow>
                            ) : (
                                todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)) // 締切日でソート
                                    .map((todo) => (
                                        <TableRow
                                            key={todo.id}
                                            sx={{
                                                backgroundColor: todo.important ? "#FFF9C4" : // 重要なら薄い黄色
                                                    (todo.completed ? "#E0E0E0" : // 完了なら薄いグレー
                                                        ((idx) => idx % 2 === 1 ? "#E8F5E9" : "inherit")(todos.indexOf(todo)) // 通常の偶数行 (インデックスベースで再計算)
                                                    ),
                                                "&:hover": { backgroundColor: "#A5D6A7", transform: "scale(1.01)" },
                                                transition: "background-color 0.3s, transform 0.2s",
                                                opacity: todo.completed ? 0.7 : 1,
                                            }}
                                        >
                                            <TableCell sx={{ color: "#4E342E" }}>
                                                <Checkbox
                                                    checked={todo.completed}
                                                    onChange={() => handleToggleComplete(todo.id)}
                                                    sx={{
                                                        color: "#4CAF50", // グリーン
                                                        '&.Mui-checked': {
                                                            color: "#2E7D32", // 濃いグリーン
                                                        },
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell sx={{
                                                color: "#4E342E",
                                                textDecoration: todo.completed ? "line-through" : "none",
                                                fontWeight: todo.important ? "bold" : "normal",
                                            }}>
                                                {todo.text}
                                            </TableCell>
                                            <TableCell sx={{ color: "#4E342E" }}>{todo.createdAt}</TableCell>
                                            <TableCell sx={{ color: "#4E342E" }}>{todo.dueDate}</TableCell>
                                            <TableCell sx={{ color: "#4E342E", textAlign: 'center' }}>
                                                <IconButton onClick={() => handleDeleteTodo(todo.id)} aria-label="delete" sx={{ color: "#D32F2F" }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};