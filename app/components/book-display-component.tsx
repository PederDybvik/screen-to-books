"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShelfWithBooks } from "./shelf-with-books";

const MIN_BOOKS_PER_SHELF = 11;
const MAX_BOOKS_PER_SHELF = 13;

// Seeded random to get consistent results for same input
function seededRandom(seed: number): number {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
}

interface BookDisplayComponentProps {
    numberOfBooks: number;
}

export function BookDisplayComponent({
    numberOfBooks,
}: BookDisplayComponentProps) {
    const shelves = useMemo(() => {
        const result: { bookCount: number; startIndex: number }[] = [];
        let remaining = numberOfBooks;
        let currentIndex = 0;
        let shelfIndex = 0;

        while (remaining > 0) {
            // Random capacity between 11-13 for each shelf (seeded by shelf index)
            const randomCapacity =
                MIN_BOOKS_PER_SHELF +
                Math.floor(
                    seededRandom(shelfIndex + numberOfBooks) *
                        (MAX_BOOKS_PER_SHELF - MIN_BOOKS_PER_SHELF + 1),
                );
            const booksOnThisShelf = Math.min(remaining, randomCapacity);
            result.push({
                bookCount: booksOnThisShelf,
                startIndex: currentIndex,
            });
            remaining -= booksOnThisShelf;
            currentIndex += booksOnThisShelf;
            shelfIndex++;
        }

        return result;
    }, [numberOfBooks]);

    if (numberOfBooks <= 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 text-center py-8"
            >
                No books to display
            </motion.div>
        );
    }

    return (
        <motion.div
            key={numberOfBooks}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
        >
            <AnimatePresence mode="wait">
                {shelves.map((shelf, index) => (
                    <ShelfWithBooks
                        key={`shelf-${index}`}
                        bookCount={shelf.bookCount}
                        shelfIndex={index}
                        startIndex={shelf.startIndex}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}

