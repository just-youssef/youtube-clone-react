import React from 'react'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto",
        flexDirection: { md: "column"},
        p: {md: 2},
        borderRight: {md: "1px solid #bebebe"}
    }}>
        {categories.map((category, key) => (
            <button 
                onClick={() => setSelected(category.name)}
                key={category.name}
                className="category-btn" 
                style={{
                    fontSize: "15px",
                    backgroundColor: category.name === selected && "#FC1503",
                    color: "#fff"
                }}
            >
                <span
                    style={{
                        color: category.name === selected ? "#fff":"#FC1503",
                        marginRight: "15px",
                    }}
                >{category.icon}</span>
                <span
                    style={{
                        color: category.name === selected ? "#fff" : "#bebebe",
                    }}
                >{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar