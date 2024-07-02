"use client";

import Form from "@/components/Form";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-1 flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contatos</h3>
            <div className="flex flex-col items-center xl:items-start">
              <div className="w-[60vw] xl:w-auto flex gap-12 flex-col">
                <div className="flex items-start gap-4">
                  <div className="relative w-[36px] h-[36px]">
                    <Image src={"/assets/contact/pin.svg"} fill alt="" />
                  </div>
                  <div className="pt-1 flex-1">
                    <h4 className="h4 mb-2">Endereço</h4>
                    <p className="leading-relaxed">
                      Setor Comercial Sul <br /> Brasília-DF
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="relative w-[36px] h-[36px]">
                    <Image src={"/assets/contact/phone.svg"} fill alt="" />
                  </div>
                  <div className="pt-1 flex-1">
                    <h4 className="h4 mb-2">Telefone</h4>
                    <p className="leading-relaxed">Telefone: (61) 99123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="relative w-[36px] h-[36px]">
                    <Image src={"/assets/contact/email.svg"} fill alt="" />
                  </div>
                  <div className="pt-1 flex-1">
                    <h4 className="h4 mb-2">E-mail</h4>
                    <p>marianabatistuzzo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex-1">
            <h3 className="h3 mb-8 text-center">Entrar em contato</h3>
            <Form />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
