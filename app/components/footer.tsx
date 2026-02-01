import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-center flex flex-col gap-4 mb-8">
            <div className="bg-emerald-600 w-full m-0 h-20 flex items-center justify-center text-white">
                <p>Made with ❤️ by Peder Ødegård Dybvik</p>
            </div>

            <a
                className="hover:underline"
                href="https://www.linkedin.com/in/peder-ødegård-dybvik"
            >
                <Image
                    src="/Socials/LinkedInLogo.png"
                    alt="LinkedIn"
                    height={20}
                    width={20}
                    className="inline-block mr-2"
                />
                in/peder-ødegård-dybvik
            </a>
            <a
                className="hover:underline"
                href="https://www.instagram.com/pederdybvik/"
            >
                <Image
                    src="/Socials/InstagramLogo.svg"
                    alt="Instagram"
                    height={20}
                    width={20}
                    className="inline-block mr-2"
                />
                @pederdybvik
            </a>
            <a
                className="hover:underline"
                href="https://github.com/pederdybvik"
            >
                <Image
                    src="/Socials/GitHubLogo.svg"
                    alt="GitHub"
                    height={20}
                    width={20}
                    className="inline-block mr-2"
                />
                pederdybvik
            </a>
        </footer>
    );
}

