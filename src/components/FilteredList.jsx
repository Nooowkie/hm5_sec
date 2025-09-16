import React, { useState, useMemo, useCallback } from "react";

const UserItem = React.memo(({ user }) => {
    console.log(`🔄 Рендер UserItem: ${user.name}`);
    return <li>{user.name}</li>;
});

export default function FilteredList() {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]);
    const [filter, setFilter] = useState("");
    console.log("🔄 Рендер FilteredList");

    const filteredUsers = useMemo(() => {
        console.log("📌 Фильтруем пользователей");
        return users.filter((user) =>
            user.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [users, filter]);

    const handleAddUser = useCallback(() => {
        setUsers((prev) => [
            ...prev,
            { id: prev.length + 1, name: `User${prev.length + 1}` },
        ]);
    }, []);

    return (
        <div style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}>
            <h2>Список пользователей</h2>
            <input
                placeholder="Фильтр по имени"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <button onClick={handleAddUser} style={{ marginLeft: "10px" }}>
                Добавить пользователя
            </button>
            <ul>
                {filteredUsers.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
}