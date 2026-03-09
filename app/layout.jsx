import Header from "../components/Header";
import "./globals.css"
import headerImage from "../components/images/unsplash_brooklyn-bridge_header.jpg";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({children}) {
    return (
        <html lang="uk" className="h-full">
        <body className="h-full flex flex-col bg-blue-200 w-full">
        <div className="relative h-[200px] w-full flex-shrink-0">
            <Image src={headerImage} alt="bridge" fill className="object-cover" priority/>
        </div>
        <nav className="flex justify-center p-4">
            <Link href="/" className="mx-4 px-4 py-2 bg-gray-200 rounded">Головна</Link>
            <Link href="/login" className="mx-4 px-4 py-2 bg-gray-200 rounded">Вхід</Link>
            <Link href="/singup" className="mx-4 px-4 py-2 bg-gray-200 rounded">Реєстрація</Link>
            <Link href="/feedback" className="mx-4 px-4 py-2 bg-gray-200 rounded">Відгук</Link>
        </nav>
        <main className="flex justify-center">
            {children}
        </main>
        </body>
        </html>
    )
}
