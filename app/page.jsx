"use client";

import ModalVideo from "@/components/ModalVideo";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]"
          >
            <h1 className="h1 xl:text-[72px] xl:leading-[76px] mb-6">
              Seu Direito <br /> em Boas Mãos
            </h1>
            <p className="lead max-w-xl xm-auto">
              Soluções jurídicas personalizadas para garantir a sua
              tranquilidade e segurança jurídica.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <button className="btn btn-lg">Agende uma conversa</button>
              <div>
                <ModalVideo />
              </div>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 1.5, duration: 2.5, ease: "easeInOut" },
              }}
              className="hidden xl:flex fixed bottom-0"
            >
              <Image
                src={"/assets/home/img.jpg"}
                alt=""
                width={864}
                height={650}
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
