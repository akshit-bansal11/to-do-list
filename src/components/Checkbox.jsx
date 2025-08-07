import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Checkbox({ isChecked, onToggle }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggle}
            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors
                ${isChecked ? 'bg-green-500 border-green-500' : 'bg-transparent border-gray-400'}`}
        >
            {isChecked && <FiCheck className="text-white" />}
        </motion.button>
    );
}

export default Checkbox;