import Header from "../components/Header";
import "./globals.css"
import headerImage from "../components/images/unsplash_brooklyn-bridge_header.jpg";
import Image from "next/image";
import pngImage from "../components/images/free-icon-bridge-2138687.png";
import Link from "next/link";
import ParticlesBg from "../components/ParticlesTS";

export default function RootLayout({ children }) {
    return (
        <html lang="uk" className="h-full" suppressHydrationWarning>
        <body className="h-full flex flex-col bg-blue-200 antialiased">
        <header className="relative h-[200px] w-full flex-shrink-0 flex items-center justify-center overflow-hidden">
            <div className="z-20 absolute w-32 h-32 rounded-full bg-ocean flex items-center justify-center shadow-2xl border-4 border-white backdrop-blur-sm">
                <Image src={pngImage} alt="pngBridge" className="w-20 h-20 object-contain drop-shadow-lg"/>
            </div>
            <Image src={headerImage} alt="bridge" fill priority className="object-cover z-0 brightness-75"/>
        </header>
        <nav className="flex justify-center gap-4 p-4 backdrop-blur-md">
            <Link href="/" className="px-4 py-2 bg-blue-200 hover:bg-blue-300 transition-colors rounded drop-shadow-lg">Головна</Link>
            <Link href="/login" className="px-4 py-2 bg-blue-200 hover:bg-blue-300 transition-colors rounded drop-shadow-lg">Вхід</Link>
            <Link href="/singup" className="px-4 py-2 bg-blue-200 hover:bg-blue-300 transition-colors rounded drop-shadow-lg">Реєстрація</Link>
            <Link href="/feedback" className="px-4 py-2 bg-blue-200 hover:bg-blue-300 transition-colors rounded drop-shadow-lg">Відгук</Link>
        </nav>
        <ParticlesBg />
        <main className="flex">
            {children}
        </main>
        </body>
        </html>
    );
}