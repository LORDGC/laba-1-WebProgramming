import "@/app/globals.css"

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-[350px] rounded-2xl p-6 bg-white">
            <div className="">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Реєстрація</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <input type="text" placeholder="Введіть ваше ім'я" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input type="email" placeholder="example@mail.com" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input type="password" placeholder="Пароль" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2"/>
                    </div>
                    <button type="submit" className="mt-4 bg-red-400 text-white py-2 rounded-md font-semibold">
                        Створити акаунт
                    </button>
                </form>
            </div>
        </div>
    );
}