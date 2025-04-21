import React, { useState } from 'react';
import { motion } from 'framer-motion';

const REGISTER_URL = "https://sportsbet.bet.ar/registrarse?utm_source=publi1lauguty&utm_brandaffiliate=publi1lauguty";

const LoadingButton = ({ children, href, className }: { children: React.ReactNode; href: string; className: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = href;
    }, 800);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`${className} relative overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        </div>
      ) : null}
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>{children}</span>
    </motion.a>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  return (
    <div className="min-h-screen w-full bg-[#212121] relative overflow-hidden">
      {/* NavBar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full flex justify-between items-center px-4 md:px-7 py-2 md:py-4 bg-gradient-to-b from-[#212121]/90 to-[#212121] backdrop-blur-sm z-50"
      >
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <img src="https://sportsbet.bet.ar/img/landing/Sportsbet.png" alt="Sportsbet Logo" className="h-12 md:h-20" />
        </motion.div>
        <div className="flex space-x-2 md:space-x-3">
          <LoadingButton 
            href={REGISTER_URL}
            className="bg-brand-green text-[#212121] rounded-full px-3 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-bold shadow-lg"
          >
            REGISTRARSE
          </LoadingButton>
          <LoadingButton
            href={REGISTER_URL}
            className="bg-brand-green text-[#212121] rounded-full px-3 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-bold shadow-lg"
          >
            CARGAR
          </LoadingButton>
        </div>
      </motion.nav>

      {/* Casino Section con imagen de fondo */}
      <section className="relative py-24 px-4 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/CASINO.png" alt="Casino Background" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#212121] via-[#212121]/80 to-[#212121]"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-green text-center mb-4 md:mb-6">Bienvenido a Sportsbet</h1>
          
          <div className="bg-[#212121]/80 backdrop-blur-sm border-2 border-brand-green rounded-xl p-4 md:p-8 mb-8 md:mb-12 text-center shadow-xl min-h-[200px]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-green mb-4 md:mb-6">PLATAFORMA AUTÓNOMA</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 md:space-x-4 justify-center">
                <img src="https://ext.same-assets.com/101170867/1526682920.webp" alt="Checkmark" className="h-6 md:h-8" />
                <span className="text-white font-semibold text-sm md:text-lg">REGISTRA TÚ USUARIO</span>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 justify-center mb-4">
                <img src="https://ext.same-assets.com/101170867/1526682920.webp" alt="Checkmark" className="h-6 md:h-8" />
                <span className="text-white font-semibold text-sm md:text-lg">APUESTA EN VIVO</span>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 justify-center">
                <img src="https://ext.same-assets.com/101170867/1526682920.webp" alt="Checkmark" className="h-6 md:h-8" />
                <span className="text-white font-semibold text-sm md:text-lg">DEPOSITA Y SOLICITA RETIROS</span>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4 justify-center mb-4">
                <img src="https://ext.same-assets.com/101170867/1526682920.webp" alt="Checkmark" className="h-6 md:h-8" />
                <span className="text-white font-semibold text-sm md:text-lg">GESTIONA TU CUENTA</span>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-12 md:py-24 px-4 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src="/imagen-deportivas.jpg" 
            alt="Sports Background" 
            className="w-full h-full object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#212121] via-[#212121]/70 to-[#212121]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#212121] via-transparent to-[#212121]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <motion.div 
            className="flex flex-col items-center md:items-end"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-8 w-full text-center md:text-right"
            >
              APUESTAS DEPORTIVAS
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="w-full md:w-[600px] bg-[#212121]/80 backdrop-blur-sm rounded-xl md:rounded-3xl p-6 md:p-12 border-l-4 border-brand-green"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-brand-green mb-4 md:mb-6">DEPORTES EN VIVO</h3>
              <p className="text-white text-base md:text-xl mb-6 md:mb-8 leading-relaxed">
                Las mejores cuotas en todos los deportes con mercados en vivo. 
                Disfruta de una experiencia única apostando en tiempo real.
              </p>
              <div className="flex items-center gap-4">
                <LoadingButton
                  href={REGISTER_URL}
                  className="flex-1 text-center bg-brand-green text-[#212121] rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-bold shadow-lg"
                >
                  APOSTAR AHORA
                </LoadingButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <section className="relative py-12 md:py-24 px-4 min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#212121]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6 md:mb-8">¿LISTO PARA EMPEZAR?</h2>
          <div className="bg-[#212121]/60 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-2xl mx-auto border border-brand-green/20">
            <p className="text-white text-lg md:text-xl mb-6 md:mb-8">Regístrate ahora y comienza a disfrutar de la mejor experiencia de juego</p>
            <a href={REGISTER_URL}
               className="inline-flex bg-brand-green text-[#212121] rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-bold shadow-lg transition hover:scale-105">
              COMENZAR AHORA
            </a>
          </div>
        </div>
      </section>

      {/* Footer con advertencia */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 bg-[#212121] border-t border-brand-green/20 py-8 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.p 
              className="text-white/80 text-sm md:text-base font-medium mb-2"
              whileHover={{ scale: 1.05 }}
            >
              ADVERTENCIA
            </motion.p>
            <motion.p 
              className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Jugar compulsivamente puede ser perjudicial para la Salud. Juegue con responsabilidad y moderación.
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

// Datos de juegos
const games = [
  {
    title: "CASINO EN VIVO",
    description: "Disfruta de la experiencia real de casino con dealers en vivo las 24 horas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-casino-en-vivo-2Id7ZUD2Kv3au11Kdc2HwrgubgR5H8.png",
    cta: "JUGAR AHORA"
  },
  {
    title: "APUESTAS DEPORTIVAS",
    description: "Las mejores cuotas en todos los deportes con mercados en vivo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-deportivas.jpg-XzLeUtjlAmhYTOlWbRlE5fphSRQwPM.jpeg",
    cta: "APOSTAR"
  }
];

export default App;
  