import "./globals.css"

export default function Home() {
    return (
        <div className="flex flex-row w-full justify-center">
        <div className="w-[80vw] flex flex-row items-center justify-between">
            <div className="flex flex-col justify-center items-center w-[35vw]">
                <h2 className='font-bold px-4 py-2 font-siz'>Золота Брама: Більше ніж просто колір</h2>
                <p>
                    Міст Золота Брама (Golden Gate Bridge) у Сан-Франциско — це, мабуть,
                    найбільш впізнавана конструкція у світі. Його будівництво у 1937 році
                    вважалося неможливим через сильні вітри та тумани.
                    Цікавий факт: Його фірмовий колір називається «International Orange».
                    Спочатку це була лише ґрунтовка, але вона так сподобалася архітекторам і містянам,
                    що її вирішили залишити як основний колір.
                    Чому це важливо: Він був найдовшим підвісним мостом у світі протягом 27 років.
                </p>
                <button className='px-4 py-2 hover:bg-brand-blue bg-blue-400 text-white rounded w-[150px] cursor-pointer'>Читати далі</button>
            </div>
            <div className="flex flex-col justify-center w-[35vw]">

            </div>
        </div>
        </div>
    );
}