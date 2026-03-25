import "@/app/globals.css"

export default function FeedbackPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[700px] w-[500px] rounded-2xl p-6 bg-white">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Відгук</h2>
                <form className="flex flex-col gap-5 text-gray-700">
                    <div className="flex items-center gap-4">
                        <label className="w-32 font-medium">Ім'я</label>
                        <input type="text" className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="w-32 font-medium">Прізвище</label>
                        <input type="text" className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="w-32 font-medium">Вік</label>
                        <input type="number" className="w-24 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="w-32 font-medium">Стать</label>
                        <select className="px-3 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2">
                            <option>Чоловік</option>
                            <option>Жінка</option>
                            <option>Бойовий гелікоптер</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 py-2">
                        <span className="font-medium">Чи сподобався тобі блог</span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="rating"/> Ні
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="rating"/> Не сильно
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="rating"/> Так
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Письмовий відгук</label>
                        <textarea rows="5" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 resize-none"></textarea>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="email-back" className="w-4 h-4 " />
                        <label htmlFor="email-back" className="font-medium cursor-pointer">
                            Надіслати мені листа з відповіддю
                        </label>
                    </div>
                        <button type="submit" className="mt-4 bg-red-400 w-[150px] text-white py-2 rounded-md font-semibold">
                            Надіслати
                        </button>
                </form>
            </div>
        </div>
    );
}