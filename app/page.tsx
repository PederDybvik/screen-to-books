"use client";
import Image from "next/image";
import InputForm from "./components/input-form";
import React from "react";
import SubText from "./components/sub-text";
import { BookDisplayComponent } from "./components/book-display-component";
import ScrollDownIcon from "./components/scroll-down-icon";

export default function Home() {
    const [numberOfBooksAMonth, setNumberOfBooksAMonth] = React.useState(2);

    return (
        <div>
            <ScrollDownIcon />
            <InputForm setNumberOfBooksAMonth={setNumberOfBooksAMonth} />
            <BookDisplayComponent numberOfBooks={numberOfBooksAMonth * 12} />
            <div className="flex justify-center w-full text-7xl mt-5 leading-16 text-center">
                {numberOfBooksAMonth * 12}
            </div>
            <div className="flex justify-center w-full text-4xl text-center">
                Books
            </div>
            <div className="flex justify-center w-full text-lg">
                (That is {numberOfBooksAMonth} books a month)
            </div>
            <div className="flex justify-center w-full text-md text-gray-500 mt-6 mb-8">
                *At 1 book per 5 hours of reading
            </div>
            <SubText numberOfBooksAMonth={numberOfBooksAMonth * 12} />
        </div>
    );
}

