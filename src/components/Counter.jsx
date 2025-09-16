import React, { useState, useCallback } from "react";

const ChildButton = React.memo(({ onClick, label }) => {
    console.log("🔄 Рендер ChildButton");
    return (
        <button onClick={onClick} style={{ marginLeft: "10px" }}>
            {label}
        </button>
    );
});

export default function Counter() {
    const [count, setCount] = useState(0);
    console.log("🔄 Рендер Counter");

    const handleClick = useCallback(() => {
        alert("ChildButton нажата!");
    }, []);

    return (
        <div style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}>
            <h2>Счётчик: {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
            <ChildButton onClick={handleClick} label="Child Button" />
        </div>
    );
}