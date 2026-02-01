"use client";
import React from "react";
import "./input-form.css";

export default function InputForm({
    setNumberOfBooksAMonth,
}: {
    setNumberOfBooksAMonth: (number: number) => void;
}) {
    const [inputValue, setInputValue] = React.useState(2);

    React.useEffect(() => {
        setNumberOfBooksAMonth(Math.round((inputValue * 30) / 5));
    }, [inputValue, setNumberOfBooksAMonth]);

    return (
        <div className="w-full max-w-240 text-5xl flex flex-col items-center justify-center mx-auto p-4">
            <div className="text-center">
                <span className="underline">My daily screentime is </span>
                <div className="animated-border-wrapper inline-block">
                    <input
                        type="number"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        max={24}
                        min={0}
                        value={inputValue || ""}
                        onChange={(e) => {
                            if (Number(e.target.value) <= 0) {
                                setInputValue(0);
                                return;
                            }
                            setInputValue(Math.min(24, Number(e.target.value)));
                            return;
                        }}
                        className="animated-border-input w-20 h-12 text-center text-5xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>
                <span className="underline">hours.</span>
            </div>
            <div className="text-center text-2xl">
                If I instead read for {inputValue} hours a day, I could read
                this many books a year:
            </div>
        </div>
    );
}

