"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, BOOK_STYLES } from "./book";
import Image from "next/image";

interface ShelfProps {
    bookCount: number;
    shelfIndex: number;
    startIndex: number;
}

// Generate a shuffled array of style indices for random book appearance
function shuffleArray(length: number, seed: number): number[] {
    const indices = Array.from({ length }, (_, i) => i % BOOK_STYLES.length);
    // Simple seeded shuffle using the shelf index as seed
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(
            (((seed * (i + 1) * 9301 + 49297) % 233280) / 233280) * (i + 1),
        );
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
}

export function ShelfWithBooks({
    bookCount,
    shelfIndex,
    startIndex,
}: ShelfProps) {
    // Memoize shuffled indices so they stay consistent during re-renders
    const randomIndices = useMemo(
        () => shuffleArray(bookCount, startIndex + shelfIndex * 100),
        [bookCount, startIndex, shelfIndex],
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: shelfIndex * 0.1 }}
            className="flex flex-col items-center"
        >
            {/* Books container */}
            <div className="flex items-end justify-center gap-1 px-4 min-h-27.5">
                <AnimatePresence mode="popLayout">
                    {Array.from({ length: bookCount }).map((_, i) => (
                        <Book
                            key={`book-${startIndex + i}`}
                            index={randomIndices[i]}
                            delay={i}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Shelf */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: shelfIndex * 0.1 + 0.2 }}
                className="relative w-full max-w-md h-20 origin-center -mt-1"
            >
                <Image
                    src="/shelf.svg"
                    alt="Shelf decoration"
                    fill
                    className="object-fill"
                />
            </motion.div>
        </motion.div>
    );
}

