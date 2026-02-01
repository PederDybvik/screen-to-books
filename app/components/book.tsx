"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BOOK_STYLES = [
    { thickness: 20, height: 62, pathName: "/Books/BlueBook1.svg" },
    { thickness: 20, height: 99, pathName: "/Books/GreenBook1.svg" },
    { thickness: 30, height: 81, pathName: "/Books/OrangeBook1.svg" },
    { thickness: 20, height: 69, pathName: "/Books/PinkBook1.svg" },
    { thickness: 20, height: 62, pathName: "/Books/YellowBook1.svg" },
];

interface BookProps {
    index: number;
    delay?: number;
}

const SPACING_MARGGIN = -7;
const SCALE = 1.3;

export function Book({ index, delay = 0 }: BookProps) {
    const style = BOOK_STYLES[index % BOOK_STYLES.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: 20, scaleY: 0 }}
            transition={{
                duration: 0.3,
                delay: delay * 0.05,
                ease: "easeOut",
            }}
            whileHover={{ scale: 1.2, y: -10, transition: { duration: 0.2 } }}
            style={{
                width: style.thickness * SCALE,
                height: style.height * SCALE,
                marginRight: SPACING_MARGGIN,
            }}
            className="origin-bottom"
        >
            <Image
                src={style.pathName}
                alt="Book decoration"
                width={style.thickness * SCALE}
                height={style.height * SCALE}
            />
        </motion.div>
    );
}

