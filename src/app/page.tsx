export default function Home() {
  return (
    <>
      <div className="absolute w-full h-screen left-0 top-0 -z-10">
        <div className="bg-[#4a5fb4] w-full h-3/4"></div>
        <img src={"/slants.svg"} alt="#" />
      </div>
      <div className="grid grid-cols-4 grid-rows-[repeat(4,200px)] gap-2 ">
        <div className="col-span-3 row-span-2 bg-slate-200 text-black py-5 px-4 rounded-sm">
          <h1 className="text-3xl font-bold ">Hello, developer!</h1>
          <h3 className="text-lg text-gray-800 w-8/12">
            Это сайт для тебя! Здесь собрано множество полезных материалов, и
            всё это абсолютно бесплатно. Присоединяйся и пользуйся на здоровье!
          </h3>
        </div>
        <aside className="col-span-1 row-span-3 bg-red-400">aside</aside>
        <div className="col-span-1 bg-red-500"></div>
        <div className="col-span-1 bg-red-500"></div>
        <div className="col-span-1 bg-red-500"></div>
      </div>
    </>
  )
}
