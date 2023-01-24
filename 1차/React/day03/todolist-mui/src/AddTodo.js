import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";

class ItemObject {
    constructor(id, title, done) {
        this.id = "";
        this.title = title;
        this.done = false;
    }
}

function AddTodo({ onAddItem }) {
    const [item, setItem] = useState(new ItemObject("", "", false));

    const onButtonClick = (e) => {
        onAddItem(item);
        setItem(new ItemObject("", "", false));
    }

    const onEnterKeyPress = (e) => { 
        if (e.key === 'Enter') {
            onButtonClick(e);
            setItem({ id: "", title: "", done: false });
        }
    }

    return (<Paper style={{ margin: "16px 0px", padding: "16px" }}>
        <Grid container>
            <Grid xs={11} md={11} item style={{ paddingRight: "16px" }}>
                <TextField fullWidth placeholder="할 일을 입력 하세요..."
                    value={item.title}
                    onChange={(e) => {
                        let currItem = { ...item };
                        currItem.title = e.currentTarget.value;
                        setItem(currItem);
                    }}
                    
                    onKeyPress={onEnterKeyPress}
                />
            </Grid>
            <Grid xs={1} md={1}>
                <Button onClick={onButtonClick}>추가</Button>
            </Grid>
        </Grid>
    </Paper>);
}

export default AddTodo;