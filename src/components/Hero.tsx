import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/83f08692-5044-4491-bc76-a4f6a0f7f436/files/b647a1f2-ebcf-460a-a7cf-ec1b154473d3.jpg"
          alt="Music Bingo game night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Игра для компании</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          MUSIC BINGO
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Слушай отрывки песен, угадывай исполнителей и зачёркивай их в своём бланке. Кто первый закроет ряд — тот победитель!
        </p>
        <a href="#play" className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Начать игру
        </a>
      </div>
    </div>
  );
}