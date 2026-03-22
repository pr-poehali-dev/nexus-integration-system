const steps = [
  {
    number: "01",
    title: "Слушай",
    desc: "Ведущий включает отрывок песни — у вас несколько секунд, чтобы узнать исполнителя",
  },
  {
    number: "02",
    title: "Угадывай",
    desc: "Найди имя исполнителя в своём бланке бинго",
  },
  {
    number: "03",
    title: "Зачёркивай",
    desc: "Есть совпадение? Зачёркивай клетку! Не зевай — другие тоже не спят",
  },
  {
    number: "04",
    title: "Побеждай",
    desc: "Первый, кто закрыл ряд, кричит «БИНГО!» и забирает победу",
  },
];

export default function Featured() {
  return (
    <div id="how-to-play" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 bg-neutral-950 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3 p-8 max-w-sm w-full">
          {["Drake", "Adele", "BTS", "Rihanna", "Eminem", "Beyoncé", "⭐ FREE", "Ed Sheeran", "Taylor Swift"].map((name) => (
            <div
              key={name}
              className={`border-2 flex items-center justify-center text-center text-sm font-bold py-4 px-2 uppercase tracking-wide ${
                name === "⭐ FREE"
                  ? "border-yellow-400 bg-yellow-400 text-black col-span-1"
                  : "border-white text-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Как играть</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Четыре простых шага — и вечер запомнится надолго
        </p>
        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <span className="text-3xl font-bold text-neutral-200 leading-none">{step.number}</span>
              <div>
                <h4 className="font-bold text-neutral-900 uppercase tracking-wide mb-1">{step.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button id="play" className="mt-10 bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Играть сейчас
        </button>
      </div>
    </div>
  );
}