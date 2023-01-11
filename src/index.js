import { createRoot } from "react-dom/client";
import AppHeader from "./Components/AppHeader";
import SearchPanel from "./Components/SearchPanel";
import TodoList from "./Components/TodoList";

const app = document.getElementById("root");

const App = () => {
    const todoData = [
        { label: "Todo first thing", important: false },
        { label: "Todo second thing", important: false },
        { label: "Todo third thing", important: true },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

createRoot(app).render(<App />);
