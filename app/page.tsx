import "./globals.css"

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full justify-center">
            <h1 className='text-[20px] mt-4 mb-4'>БЛОГ ПРО МОСТИ</h1>
            <div className="w-[80vw] flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-10">
                <div className="flex flex-col justify-center items-center w-full md:w-[45%] max-w-[400px] md:max-w-none">
                    <h2 className="font-bold px-4 py-2 text-xl">Золота Брама: Більше ніж просто колір</h2>
                    <p className="text-center md:text-left">
                        Міст Золота Брама (Golden Gate Bridge) у Сан-Франциско — це, мабуть, найбільш впізнавана конструкція у світі...
                    </p>
                    <button className="mt-4 px-4 py-2 hover:bg-blue-600 bg-blue-400 text-white rounded w-[150px] transition-colors">
                        Читати далі
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-[45%] max-w-[400px] md:max-w-none">
                    <h2 className="font-bold px-4 py-2 text-xl">Золота Брама: Більше ніж просто колір</h2>
                    <p className="text-center md:text-left">
                        Його будівництво у 1937 році вважалося неможливим через сильні вітри та тумани. Колір називається «International Orange»...
                    </p>
                    <button className="mt-4 px-4 py-2 hover:bg-blue-600 bg-blue-400 text-white rounded w-[150px] transition-colors">
                        Читати далі
                    </button>
                </div>
            </div>
        </div>
    );
}