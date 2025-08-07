import { createRoot } from "react-dom/client";
import ToDoList from "./components/ToDoList";
import './styles/index.css'

createRoot(document.getElementById("root")).render(
    <ToDoList />
);