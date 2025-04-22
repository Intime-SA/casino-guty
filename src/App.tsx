import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GiPokerHand,
  GiCardAceSpades,
  GiCardJoker,
  GiDiamonds,
  GiSpades,
  GiHearts,
  GiClubs,
  GiLaurels,
  GiScrollQuill,
  GiLifeBuoy,
} from "react-icons/gi";
import {
  MdCasino,
  MdSportsBasketball,
  MdDevices,
  MdCheckCircle,
  MdChevronLeft,
  MdChevronRight,
  MdPrivacyTip,
} from "react-icons/md";
import {
  FaDice,
  FaCoins,
  FaUsers,
  FaGift,
  FaMobileAlt,
  FaRegIdCard,
} from "react-icons/fa";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { ImageCarousel } from "./components/ImageCarousel";
import { IoArrowBack } from "react-icons/io5";
import CTASection from "./components/CTA-section";
import LoadingButton from "./components/LoadingButton";
import FallingCoinsAnimation from "./components/FallingCoinsAnimation";

const REGISTER_URL =
  "https://sportsbet.bet.ar/registrarse?utm_source=publi1lauguty&utm_brandaffiliate=publi1lauguty";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Testimonial Data
const testimonials = [
  {
    name: "Diego",
    age: 28,
    quote:
      "Me enganché con las dinámicas desde el día uno. ¡Súper entretenido!",
  },
  {
    name: "Camila",
    age: 34,
    quote:
      "No esperaba que fuera tan simple empezar. Me gustó la interfaz y la comunidad.",
  },
  {
    name: "Leo",
    age: 41,
    quote:
      "Lo mejor: los desafíos y los logros que se desbloquean cada semana.",
  },
  {
    name: "Ana",
    age: 25,
    quote:
      "La variedad de actividades es genial, siempre hay algo nuevo para hacer.",
  },
  {
    name: "Marcos",
    age: 30,
    quote:
      "¡Excelente plataforma! Muy intuitiva y las recompensas valen la pena.",
  },
];

// Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div ref={carouselRef} className="overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <motion.div
                variants={fadeInUp}
                className="bg-[#2c2c2c]/70 backdrop-blur-sm rounded-xl p-6 border border-brand-green/20 text-center shadow-lg"
              >
                <p className="text-white/90 text-lg italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-brand-green font-semibold">
                  {testimonial.name}, {testimonial.age}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-[-20px] md:left-[-40px] transform -translate-y-1/2 bg-[#2c2c2c]/70 hover:bg-brand-green text-white hover:text-[#212121] rounded-full p-2 transition-colors duration-200 z-10"
        aria-label="Anterior testimonio"
      >
        <MdChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-[-20px] md:right-[-40px] transform -translate-y-1/2 bg-[#2c2c2c]/70 hover:bg-brand-green text-white hover:text-[#212121] rounded-full p-2 transition-colors duration-200 z-10"
        aria-label="Siguiente testimonio"
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
};

// List of images for the banner carousel
const bannerImages = [
  "/ruleta.png", // Make sure these images are in the public folder
  "/imagen-deportivas.jpg",
  "/CARD.png",
];

function App() {
  const [showTerms, setShowTerms] = useState(false);

  if (showTerms) {
    return <TermsAndConditions onBack={() => setShowTerms(false)} />;
  }

  return (
    <div className="min-h-screen w-full bg-[#212121] text-white relative overflow-hidden font-special-gothic">
      {/* NavBar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed w-full flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bg-gradient-to-b from-[#1a1a1a]/95 to-[#212121]/80 backdrop-blur-md z-50 border-b border-brand-green/10 shadow-lg"
      >
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <img
            src="https://sportsbet.bet.ar/img/landing/Sportsbet.png" // Consider updating the logo if needed
            alt="Sportsbet Logo"
            className="h-10 md:h-14" // Adjusted height
          />
        </motion.div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <button
            onClick={() => setShowTerms(true)}
            className="text-white/80 hover:text-brand-green transition-colors duration-200 text-sm md:text-base px-3 py-1 hidden sm:block" // Hide on extra small screens
          >
            Bases y Condiciones
          </button>
          <LoadingButton
            href={REGISTER_URL}
            className="px-4 py-2 text-sm md:text-base" // Smaller button
            variant="primary"
          >
            Registrarse
          </LoadingButton>
          {/* Optional: Add Login button if needed
           <LoadingButton
            href={"#"} // Add Login URL
            className="px-4 py-2 text-sm md:text-base"
            variant="secondary"
           >
             Ingresar
           </LoadingButton>
           */}
        </div>
      </motion.nav>

      {/* Falling Coins Animation Layer */}
      <FallingCoinsAnimation />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-[10%] left-[5%] text-brand-green/10 text-8xl md:text-9xl transform -rotate-12"
        >
          <GiPokerHand />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute bottom-[5%] right-[8%] text-brand-green/10 text-7xl md:text-8xl transform rotate-12"
        >
          <FaCoins />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          className="absolute top-[40%] right-[15%] text-brand-green/5 text-6xl md:text-7xl transform rotate-45"
        >
          <GiCardAceSpades />
        </motion.div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 md:pt-32">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center px-4 py-16 md:py-24"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
          >
            Explorá la mejor plataforma de{" "}
            <span className="text-brand-green">entretenimiento digital</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Beneficios exclusivos al registrarte hoy. Sumate a miles de usuarios
            y descubrí una nueva forma de jugar y ganar.
          </motion.p>
          {/* Optional CTA in Hero */}
          {/*
          <motion.div variants={fadeInUp}>
             <LoadingButton href={REGISTER_URL} variant="primary">
               ¡Empezar Ahora!
             </LoadingButton>
          </motion.div>
          */}
        </motion.section>

        {/* Banner Section (Rediseñada con Carrusel) */}
        <section className="px-4 py-12 md:py-16 bg-gradient-to-br from-[#2a2a2a] via-[#212121] to-[#2a2a2a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Columna Izquierda: Carrusel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full h-64 md:h-[450px]"
            >
              <ImageCarousel images={bannerImages} />
            </motion.div>

            {/* Columna Derecha: Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-green mb-4 leading-tight">
                ¡DUPLICAMOS TU PRIMER DEPÓSITO!
              </h2>
              <p className="text-white/90 text-xl md:text-2xl font-semibold mb-6">
                Recibí hasta{" "}
                <span className="text-white font-bold">$250.000</span> extra
                para empezar con todo.
              </p>
              <div className="flex flex-col items-center md:items-start gap-4">
                <LoadingButton
                  href={REGISTER_URL}
                  variant="primary"
                  className="shadow-brand-green/40 w-full sm:w-auto"
                >
                  <FaGift className="text-2xl" /> Quiero Registrarme
                </LoadingButton>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-white/70 hover:text-brand-green text-sm transition-colors duration-200 underline"
                >
                  Aplican bases y condiciones
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join? Section (Mejorada) */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-16 md:py-24 bg-[#242424]" // Added a slightly different bg for contrast
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-green mb-12 md:mb-16"
          >
            ¿Por qué sumarte hoy?
          </motion.h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: FaGift,
                title: "Bonificaciones Exclusivas",
                desc: "Beneficios especiales solo para nuevos usuarios.",
              },
              {
                icon: GiLaurels,
                title: "Actividades Únicas",
                desc: "Dinámicas interactivas que no encontrarás en otro lugar.",
              },
              {
                icon: FaRegIdCard,
                title: "Acceso Inmediato",
                desc: "Registrate fácilmente solo con tu documento.",
              },
              {
                icon: MdDevices,
                title: "Multiplataforma",
                desc: "Disfrutá desde cualquier dispositivo, donde sea.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-[#2c2c2c] to-[#282828] rounded-xl p-6 text-center border border-white/10 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-brand-green/40 hover:shadow-brand-green/15"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <item.icon className="text-5xl md:text-6xl text-brand-green mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section (Rediseñada) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-16 md:py-24 bg-[#1f1f1f] overflow-hidden" // Added overflow-hidden
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp} // Add animation to title
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 md:mb-16"
            >
              Lo que dicen quienes ya se sumaron
            </motion.h2>
            {/* The carousel component itself already has max-w-3xl */}
            <motion.div
              variants={fadeInUp} // Animate the carousel container
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCarousel />
            </motion.div>
          </div>
        </motion.section>

        <CTASection />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 bg-[#1a1a1a] border-t border-brand-green/20 py-8 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
           {/* Links Section - Modified for Responsiveness */}
           <div className="mb-6">
             {/* Desktop Links (Visible sm and up) */}
             <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-4">
               <button
                 onClick={() => setShowTerms(true)}
                 className="text-white/70 hover:text-brand-green transition-colors duration-200 text-sm"
               >
                 Bases y Condiciones de Bonos
               </button>
               <span className="text-white/30 hidden sm:inline">|</span>
               <button /* Changed to button triggering T&C for now */
                 onClick={() => setShowTerms(true)} 
                 className="text-white/70 hover:text-brand-green transition-colors duration-200 text-sm"
                 title="Política de Privacidad (ver T&C)" /* Add title for clarity */
               >
                 Política de Privacidad 
               </button>
               <span className="text-white/30 hidden sm:inline">|</span>
               <button /* Changed to button triggering T&C for now */
                 onClick={() => setShowTerms(true)}
                 className="text-white/70 hover:text-brand-green transition-colors duration-200 text-sm"
                 title="Juego Responsable (ver T&C)" /* Add title for clarity */
               >
                 Juego Responsable
               </button>
             </div>

             {/* Mobile Icon Buttons (Visible below sm) */}
             <div className="flex sm:hidden justify-center items-center gap-6">
                <button
                   onClick={() => setShowTerms(true)}
                   className="text-white/70 hover:text-brand-green transition-colors duration-200 p-2"
                   aria-label="Bases y Condiciones"
                   title="Bases y Condiciones"
                >
                   <GiScrollQuill size={24} />
                </button>
                <button
                   onClick={() => setShowTerms(true)}
                   className="text-white/70 hover:text-brand-green transition-colors duration-200 p-2"
                   aria-label="Política de Privacidad (ver T&C)"
                   title="Política de Privacidad (ver T&C)"
                >
                   <MdPrivacyTip size={24} />
                </button>
                 <button
                   onClick={() => setShowTerms(true)}
                   className="text-white/70 hover:text-brand-green transition-colors duration-200 p-2"
                   aria-label="Juego Responsable (ver T&C)"
                   title="Juego Responsable (ver T&C)"
                >
                   <GiLifeBuoy size={24} />
                </button>
             </div>
           </div>

          {/* Warning Text Container */}
          <div className="text-center text-white/60 text-xs md:text-sm max-w-2xl mx-auto">
            <p className="mb-2 font-semibold flex items-center justify-center gap-2">
              <FaDice className="text-brand-green" /> ADVERTENCIA
            </p>
            <p>
              El acceso a esta plataforma está destinado a mayores de 18 años.
              Promovemos el uso responsable y consciente del tiempo en línea.
              Jugar compulsivamente puede ser perjudicial para la salud.
            </p>
            <p className="mt-4 text-white/40 text-xs">
              © {new Date().getFullYear()} Sportsbet. Todos los derechos
              reservados.
            </p>
          </div>

           {/* Atlantics Branding Section */}
           <div className="mt-4 pt-3 border-t border-white/10 flex flex-row items-center justify-center gap-1.5">
             <p className="text-xs text-white/50 font-light">
                Powered by
             </p>
             <a 
                href="https://atlantics.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group transition-opacity hover:opacity-80 gap-1" 
             >
                <img 
                   src="/atlantics.png" 
                   alt="Atlantics Logo"
                   className="h-6 w-auto" /* Reduced logo height */
                />
                <span className="text-xs text-white/70 group-hover:text-brand-green font-medium transition-colors duration-300">
                  atlantics. <span className="text-blue-400">dev</span>
                </span>
             </a>
          </div>

        </div>
      </motion.footer>
    </div>
  );
}

export default App;
