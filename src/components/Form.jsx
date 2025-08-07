import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Form({ createToDo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        createToDo(task);
        setTask('');
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="flex items-center space-x-2 p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 mb-6"
        >
            <input
                type="text"
                value={task}
                placeholder="Enter a task"
                onChange={(e) => setTask(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/30 text-white placeholder-gray-400 focus:outline-none"
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-amber-400/70 hover:bg-amber-400 text-white px-4 py-2 rounded-md transition-colors"
            >
                Add
            </motion.button>
        </motion.form>
    );
}

export default Form;