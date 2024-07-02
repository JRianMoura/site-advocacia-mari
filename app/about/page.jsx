"use client";

import StatsItem from "@/components/StatsItem";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0"
          >
            <Image
              src={"/assets/about/img.jpg"}
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Dedicação e Excelência em Direito
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Nosso compromisso é com a proteção e a defesa dos seus direitos.
              Com uma abordagem personalizada, oferecemos soluções jurídicas que
              atendem às suas necessidades específicas, garantindo um
              atendimento atencioso e especializado em cada etapa do processo
            </p>

            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem
                  countNum={290}
                  countText="+"
                  text="Clientes satisfeitos"
                />
              </div>
              <div>
                <StatsItem countNum={4} text="Especializações" />
              </div>
              <div>
                <StatsItem countNum={86} countText="%" text="Taxa de Sucesso" />
              </div>
            </div>
            <button className="btn mx-auto xl:mx-0">Contate-nos</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
