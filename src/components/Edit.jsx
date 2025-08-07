import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Edit({ task, updateToDo, id }) {
    const [newTask, setNewTask] = useState(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        updateToDo(id, newTask);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="flex items-center space-x-2 p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 mb-3"
        >
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Edit task..."
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-green-500/50 hover:bg-green-500/70 text-white px-3 py-1 rounded-md transition-colors"
            >
                Update
            </motion.button>
        </motion.form>
    );
}

export default Edit;