import { useState } from "react";

const russianArtists = [
  "Моргенштерн", "Элджей", "Скриптонит", "Маша и Медведи",
  "Земфира", "Ленинград", "Баста", "Тимати",
  "Егор Крид", "Janaga", "Miyagi", "Niletto",
  "Артём Качер", "Клава Кока", "HammAli", "Navai",
  "Инстасамка", "OG Buda", "Playboi Carti RU", "Люся Чеботина",
  "LOBODA", "Полина Гагарина", "Сергей Лазарев", "Дима Билан",
];

const foreignArtists = [
  "Taylor Swift", "Drake", "Adele", "Ed Sheeran",
  "Rihanna", "Beyoncé", "Eminem", "Justin Bieber",
  "The Weeknd", "Billie Eilish", "Post Malone", "Ariana Grande",
  "Bruno Mars", "Lady Gaga", "Coldplay", "Dua Lipa",
  "Harry Styles", "Olivia Rodrigo", "Bad Bunny", "BTS",
  "Kendrick Lamar", "SZA", "Sabrina Carpenter", "Travis Scott",
];

export default function Artists() {
  const [tab, setTab] = useState<"ru" | "foreign">("ru");
  const artists = tab === "ru" ? russianArtists : foreignArtists;

  return (
    <section id="artists" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-neutral-500 uppercase text-xs tracking-widest mb-3">Исполнители</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight">
            Кого будем угадывать?
          </h2>
          <div className="flex gap-1 bg-neutral-900 p-1 rounded-none self-start sm:self-auto">
            <button
              onClick={() => setTab("ru")}
              className={`px-5 py-2 text-xs uppercase tracking-wide font-semibold transition-colors duration-200 cursor-pointer ${
                tab === "ru"
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              🇷🇺 Русские
            </button>
            <button
              onClick={() => setTab("foreign")}
              className={`px-5 py-2 text-xs uppercase tracking-wide font-semibold transition-colors duration-200 cursor-pointer ${
                tab === "foreign"
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              🌍 Зарубежные
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {artists.map((name) => (
            <div
              key={name}
              className="border border-neutral-700 text-white text-sm font-medium py-3 px-4 uppercase tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-200 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>

        <p className="text-neutral-500 text-xs mt-6">
          Это лишь часть исполнителей — в игре вас ждёт полный микс
        </p>
      </div>
    </section>
  );
}
