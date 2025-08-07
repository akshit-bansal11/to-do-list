import React from 'react';
import { motion } from 'framer-motion';
import Checkbox from './Checkbox';

function ToDo({ task, onToggleComplete, onEdit, isChecked }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-between p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 mb-3"
        >
            <div className="flex items-center space-x-3">
                <Checkbox isChecked={isChecked} onToggle={onToggleComplete} />
                <span className={`text-white ${isChecked ? 'line-through text-gray-400' : ''}`}>
                    {task}
                </span>
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onEdit}
                className="text-sm text-white bg-blue-500/50 hover:bg-blue-500/70 px-3 py-1 rounded-md transition-colors"
            >
                Edit
            </motion.button>
        </motion.div>
    );
}

export default ToDo;