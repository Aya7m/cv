import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Download } from "lucide-react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        FullStack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-cyan font-bold uppercase"
      >
        Aya
        Ahmed
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        FullStack Web Developer  <br /> with 4 years of
        experience.


        <div className="mt-4 flex items-center justify-center  bg-gradient-to-t from-cyan to-lightGrey rounded px-4 py-2   gap-3">
          <a href="./Aya Ahmed CV.pdf" download="Aya Ahmed CV.pdf" >Download CV

          </a>
          <Download size={20} />
        </div>
      </motion.p>
    </div>
  );
};

export default HeroText;
