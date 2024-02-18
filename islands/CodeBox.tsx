import { useEffect, useState } from "preact/hooks";

const words = [
    "Hello, World!",
    "مرحبا يا عالم!",
    "Hallo Welt!",
];

export default function CodeBox() {
    const [code, setCode] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyped, setIsTyped] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyped) {
                setCode((code) => code.slice(0, -1));
            }
            if (!isTyped) {
                setCode((code) => code + words[index][charIndex]);
            }
            setCharIndex((charIndex) => {
                if (charIndex < words[index].length - 1 && !isTyped) {
                    return charIndex + 1;
                } else if (charIndex > 0 && isTyped) {
                    return charIndex - 1;
                } else {
                    if (isTyped) {
                        setIndex((index) => (index + 1) % words.length);
                    }
                    setIsTyped(!isTyped);
                    return charIndex;
                }
            });
        }, 300);

        return () => clearInterval(interval);
    }, [index, charIndex, isTyped]);

    return (
        <div dir="ltr" className="flex flex-row mx-auto bg-slate-800 px-6 py-2 rounded-md w-1/4 overflow-hidden">
            <h1 class="text-gray-500 -ml-3 mr-2">1</h1>
            <h1 className="text-blue-500">console</h1>
            <h1 class="text-white">.</h1>
            <h1 class="text-yellow-300">log</h1>
            <h1 class="dark:text-gray-400 text-gray-900">("</h1>
            <h1 class="text-gray-300">{code}</h1>
            <h1 class="flikering-cursor">|</h1>
            <h1 class="dark:text-gray-400 text-gray-900">")</h1>
        </div>
    );
}