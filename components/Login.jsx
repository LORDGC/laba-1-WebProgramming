import "@/app/globals.css"

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[340px] p-6 bg-white">
            <div className="">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Вхід</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <input type="email" placeholder="example@mail.com" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input type="password" placeholder="Пароль" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2"/>
                    </div>
                    <button type="submit" className="mt-4 bg-red-400 text-white py-2 rounded-md font-semibold">
                        Увійти в акаунт
                    </button>
                </form>
            </div>
        </div>
    );
}