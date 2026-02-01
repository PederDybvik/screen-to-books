"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollDownIcon() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 z-10 flex flex-col items-center justify-center mb-4 animate-bounce w-full"
                >
                    <Image
                        src="/SwipeDownIcon.svg"
                        alt="Scroll down icon"
                        width={40}
                        height={40}
                        className="dark:invert"
                        style={{ filter: "brightness(0)" }}
                    />
                    <span className="mt-2">
                        <b>Scroll Down</b>
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

