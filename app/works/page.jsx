"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0 ">
        <div className="flex h-full w-full items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-none">
              Compromisso com a Excelência Jurídica
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Nosso escritório de advocacia se dedica a oferecer um serviço de
              alta qualidade, atendendo às diversas necessidades de nossos
              clientes. Abaixo, destacamos alguns dos tipos de trabalhos que
              realizamos com excelência
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Consultoria Jurídica</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Oferecemos orientações e pareceres especializados para
                  auxiliar na tomada de decisões importantes, sempre com foco na
                  melhor solução jurídica.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Defesa em Litígios</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Atuamos na defesa de nossos clientes em processos judiciais,
                  garantindo a proteção de seus direitos e interesses em
                  diversas áreas do Direito.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Mediação e Arbitragem</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Facilitamos a resolução de conflitos de maneira eficiente e
                  menos adversarial, através de mediação e arbitragem,
                  proporcionando soluções rápidas e satisfatórias
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Elaboração de Contratos</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Redigimos e revisamos contratos com precisão e clareza,
                  assegurando que todas as cláusulas sejam justas e que protejam
                  os interesses de nossos clientes
                </p>
              </div>
            </div>
            <button className="btn mx-auto xl:mx-0">Saiba mais</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="hidden xl:flex w-[384px] h-[534px] relative"
          >
            <Image
              src={"/assets/treatments/img.jpg"}
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
