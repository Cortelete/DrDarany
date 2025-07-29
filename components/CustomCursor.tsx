import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const GoldenArrowCursorIcon: React.FC<{ isInteractive: boolean }> = ({ isInteractive }) => (
    <motion.div
        animate={{ scale: isInteractive ? 1.3 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
    >
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transform: 'rotate(10deg)',
                filter: isInteractive ? 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.7))' : 'none'
            }}
        >
            <path
                d="M0 0L17.56 11.23L12.98 12.18L10.11 16.96L0 0Z"
                fill="#D4AF37"
                stroke="#A1822A"
                strokeWidth="0.8"
            />
        </svg>
    </motion.div>
);


const CustomCursor: React.FC = () => {
    const [isInteractive, setIsInteractive] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const checkInteractivity = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input, textarea, select')) {
                setIsInteractive(true);
            } else {
                setIsInteractive(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', checkInteractivity);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', checkInteractivity);
        };
    }, [cursorX, cursorY]);
    
    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
        >
            <GoldenArrowCursorIcon isInteractive={isInteractive} />
        </motion.div>
    );
};

export default CustomCursor;