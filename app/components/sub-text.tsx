import Image from "next/image";
export default function SubText({
    numberOfBooksAMonth,
}: {
    numberOfBooksAMonth: number;
}) {
    return (
        <div className="w-full max-w-200 text-lg flex items-center justify-center mx-auto p-5">
            <div className="text-left space-y-4 leading-relaxed">
                <p>
                    <b>This website is not made to shame you.</b> I don't even
                    know what you do on your phone, or if you like it or not.
                    But I do know that many people spend more time on their
                    phones than they'd like to.
                </p>
                <p>
                    <b>This website gives you a different perspective</b> on how
                    you could use your time. Some of your screentime may be
                    valuable and enjoyable. But the endless scrolling that
                    leaves you feeling empty? That time could go toward
                    something more fulfilling, like reading a book. Maybe even{" "}
                    {numberOfBooksAMonth} books?
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                    <b>Calculation:</b> Average book (75,000 words / 300 pages)
                    ÷ 250 words/min = 5 hours per book. Your actual reading time
                    will vary based on reading speed and book complexity.
                </p>
                <a
                    href="https://github.com/PederDybvik/screen-to-books"
                    className="hover:underline w-full flex items-center justify-center border-t border-gray-200 pt-4"
                >
                    <Image
                        src="/Socials/GitHubLogo.svg"
                        alt="GitHub"
                        height={20}
                        width={20}
                        className="mr-2"
                    />
                    This application on GitHub
                </a>
            </div>
        </div>
    );
}

