import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToDo from './ToDo';
import Form from './Form';
import Edit from './Edit';
import { nanoid } from 'nanoid';

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [tasksToRemove, setTasksToRemove] = useState([]);

    const createToDo = (task) => {
        setToDos([...toDos, { id: nanoid(5), task, isEditing: false, isCompleted: false }]);
    };

    const toggleComplete = (id) => {
        setToDos((prevToDos) =>
            prevToDos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
        if (!tasksToRemove.includes(id)) {
            setTasksToRemove([...tasksToRemove, id]);
        }
    };

    useEffect(() => {
        if (tasksToRemove.length > 0) {
            const timer = setTimeout(() => {
                setToDos((prevToDos) =>
                    prevToDos.filter((todo) => !tasksToRemove.includes(todo.id))
                );
                setTasksToRemove([]);
            }, 300); // Delay for animation (0.3 second)
            return () => clearTimeout(timer);
        }
    }, [tasksToRemove]);

    const startEditing = (id) => {
        setEditId(id);
    };

    const updateToDo = (id, updatedTask) => {
        setToDos(
            toDos.map((todo) =>
                todo.id === id ? { ...todo, task: updatedTask } : todo
            )
        );
        setEditId(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
        >
            <h2 className="text-2xl text-white font-bold mb-6 text-center">To-Do List</h2>
            <Form createToDo={createToDo} />
            <AnimatePresence>
                {toDos.map((todo) =>
                    editId === todo.id ? (
                        <Edit key={todo.id} task={todo.task} updateToDo={updateToDo} id={todo.id} />
                    ) : (
                        <ToDo
                            key={todo.id}
                            task={todo.task}
                            isChecked={todo.isCompleted}
                            onToggleComplete={() => toggleComplete(todo.id)}
                            onEdit={() => startEditing(todo.id)}
                        />
                    )
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ToDoList;