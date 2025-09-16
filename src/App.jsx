import Counter from "./components/Counter";
import FilteredList from "./components/FilteredList";

export default function App() {
    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <h1>Пример useCallback + useMemo</h1>
            <Counter />
            <FilteredList />
        </div>
    );
}