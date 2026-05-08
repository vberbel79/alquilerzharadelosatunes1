/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bed, 
  Bath, 
  Car, 
  Waves, 
  Wind, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone,
  ShieldCheck,
  ChevronRight,
  Home,
  Monitor,
  Fan,
  UtensilsCrossed,
  SquareCheck,
  X,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

// --- STYLES & CONSTANTS ---
const COLORS = {
  bg: '#FBFBF9',
  ink: '#1A1A1A',
  accent: '#C5A059', // Elegant gold/tan for luxury
  muted: '#717171',
  soft: '#F2F2ED'
};

const FEATURES = [
  { icon: Bed, text: "3 Dormitorios amplios" },
  { icon: Bath, text: "2 Baños completos" },
  { icon: Waves, text: "Vistas panorámicas al mar" },
  { icon: Wind, text: "Zona tranquila y natural" },
  { icon: Car, text: "Plaza de garaje privada" },
  { icon: Home, text: "Piscina comunitaria" }
];

const EQUIPMENT = [
  "Sábanas y toallas de alta calidad",
  "Cocina totalmente equipada",
  "Lavadora y Lavavajillas",
  "Frigorífico y Vitrocerámica",
  "Microondas y Cafetera",
  "Menaje de cocina completo",
  "Terraza amueblada",
  "Armarios empotrados"
];

const DRIVE_IDS = [
  '1-2mgeA0GYLYh0oQNw0sEL6ERcV7-S8fD', // Vistas
  '15pPr9fa07xawi1ddTOzmkg2u5dLgvQ5Q', // Salón
  '1B6WqumI24RVawjex0fu5d5aSoWTwP29F', // Terraza
  '1C5_JBciEG9mnZdXO23XobX6lgdbvbQvu', // Dormitorio
  '1C5nyreRy8NClUXWE3j0UM32BMr80wW-a', // Cama
  '1FDiM-8aFuEFL-eJqNBEx_HD9sYS-7fXd', // Detalle
  '1JOTEYqAccDZWzcDB9OVM88FDcALURK-1', // Baño
  '1Ulv3bd8Vb2YBOBiTRJ1BiWT-LZWYKOzX', // Cocina
  '1W2xmjwIVQ4Qgy0MGoV7W4oMcYCBsLEhd', // Exterior
  '1WMaNH8GmC0FPuIUTkARy2Ugvg_4UgAz2', // Urb
  '1_zsNsDb-hJ3sMZEnnC2IMPqvFvkPBsT1', // Atardecer
  '1iVz1DkLr49z7kZuaEE_ZvOIQbf74jGnc', // Dormitorio 2
  '1w6Tfnhh1D7RE8u5XNVDon_-eX2uqDVAb'  // Dormitorio 3
];

const getImg = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

const LEGAL_CONTENT = {
  aviso: {
    title: "Aviso Legal",
    content: "En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, se informa que este sitio web tiene un carácter meramente informativo y es gestionado por propietarios particulares para la promoción del alquiler vacacional del inmueble ubicado en Atlanterra Pueblo (Cádiz). El uso de este sitio implica la aceptación de los términos aquí expuestos. Los contenidos, imágenes y textos son propiedad de los titulares o se utilizan con permiso."
  },
  condiciones: {
    title: "Condiciones de Reserva",
    content: "La reserva se formaliza tras el contacto directo y la aceptación del contrato de alquiler de temporada. Se requiere un depósito en concepto de fianza que será devuelto tras comprobar el estado del inmueble a la salida. Las normas de la comunidad prohíben ruidos excesivos a partir de las 23:00h para garantizar el descanso. El cumplimiento de las normas de convivencia es fundamental para una estancia agradable."
  },
  cookies: {
    title: "Política de Cookies",
    content: "Este sitio web utiliza únicamente cookies técnicas esenciales para garantizar una navegación fluida por la galería y las secciones informativas. No empleamos cookies de seguimiento publicitario ni compartimos datos con terceros. Al continuar navegando, usted acepta el uso de estas cookies necesarias para el correcto funcionamiento de la interfaz y la visualización de los contenidos multimedia."
  }
};

export default function App() {
  const [activeModal, setActiveModal] = useState<keyof typeof LEGAL_CONTENT | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShowCookieBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowCookieBanner(false);
  };
  return (
    <div className="min-h-screen font-sans selection:bg-amber-100" style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-neutral-100/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-[9px] font-black">A</div>
            <span className="text-sm font-semibold tracking-tighter italic opacity-80">Atlanterra Pueblo</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-400">
            <a href="#inicio" className="hover:text-black transition-colors">Inicio</a>
            <a href="#galeria" className="hover:text-black transition-colors">Galería</a>
            <a href="#detalles" className="hover:text-black transition-colors">Detalles</a>
            <a href="#precios" className="hover:text-black transition-colors">Precios</a>
            <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
          </div>
          <a 
            href="#contacto"
            className="px-6 py-2 bg-black text-white text-[9px] uppercase tracking-[0.2em] rounded-full hover:bg-neutral-800 transition-all font-bold shadow-sm"
          >
            Solicitar Información
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[85vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImg('1C5_JBciEG9mnZdXO23XobX6lgdbvbQvu')} 
            alt="Piscina Atlanterra Pueblo"
            className="w-full h-full object-cover brightness-75 transition-transform duration-[10s] hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.4em] mb-6 font-bold border border-white/30">
              Alquiler de Temporada
            </span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.9] mb-8">
              Apartamento de <span className="italic font-light">lujo</span> junto al mar
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-xl leading-relaxed">
              Apartamento de lujo en Atlanterra Pueblo. 3 dormitorios, 2 baños completos, terraza privada y las mejores vistas de la costa.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contacto" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-neutral-100 transition-all text-center uppercase tracking-widest text-[10px]">
                Solicitar Información
              </a>
              <a href="#galeria" className="px-10 py-5 bg-transparent border border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center uppercase tracking-widest text-[10px]">
                Ver Galería
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-600 mb-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-amber-600"></div> El Inmueble
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">Fotos de tu próxima escapada.</h3>
          </div>
          <p className="text-neutral-500 font-light max-w-sm leading-relaxed text-base italic border-l-2 border-neutral-100 pl-6 hidden md:block">
            Luz natural, espacios abiertos y la brisa del Atlántico en cada habitación.
          </p>
        </div>

        <div className="columns-1 md:columns-3 gap-8 space-y-8">
          {DRIVE_IDS.map((id, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 3 * 0.1 }}
              className="relative group rounded-[2.5rem] overflow-hidden bg-neutral-100"
            >
              <img 
                src={getImg(id)} 
                alt={`Foto apartamento ${idx + 1}`} 
                className="w-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.5s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Details Section */}
      <section id="detalles" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-start border-t border-neutral-100">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-tight">
            Descubre Atlanterra Pueblo:<br />Un oasis de paz.
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
            <p>
              Ubicado cerca de la <span className="text-black font-medium">Montaña de los Alemanes</span>, nuestra urbanización ofrece el equilibrio perfecto entre la naturaleza salvaje y el confort más absoluto.
            </p>
            <p>
              Este apartamento ha sido diseñado para quienes valoran la <span className="text-black font-medium">amplitud y la luz</span>. 3 dormitorios perfectamente equipados para alojar a toda la familia, con una cocina de última generación y una terraza que invita a contemplar el horizonte sin prisas.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-neutral-50 border border-neutral-100/50">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <f.icon size={22} className="text-amber-700" />
                </div>
                <span className="text-sm font-bold tracking-tight">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sticky top-32">
           <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={getImg(DRIVE_IDS[1])} 
              alt="Salón"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20">
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                <SquareCheck className="text-green-600" /> Equipamiento Total
              </h3>
              <p className="text-neutral-500 mb-6 leading-relaxed">Olvídate de maletas pesadas. Incluimos todo para tu llegada.</p>
              <ul className="grid grid-cols-1 gap-3">
                {EQUIPMENT.slice(0, 5).map((e, i) => (
                  <li key={i} className="text-sm font-medium flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-amber-600" /> {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Row */}
      <section className="bg-neutral-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-medium mb-6 tracking-tight">Equipado hasta el último detalle.</h2>
              <p className="text-white/50 font-light text-lg">Cocinamos sueños y descansamos con el sonido del mar.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center"><UtensilsCrossed size={24} /></div>
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center"><Monitor size={24} /></div>
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center"><Fan size={24} /></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {EQUIPMENT.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle2 size={24} className="text-amber-400 mb-6" />
                <span className="text-base font-semibold tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 tracking-tighter">Temporada de Verano</h2>
        <p className="text-neutral-500 mb-16 font-light text-lg">Sin intermediarios. Trato directo con propietarios para tu máxima tranquilidad.</p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Julio Card */}
          <div className="bg-white p-12 rounded-[3.5rem] border border-neutral-100 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 px-6 py-2 bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-bl-2xl">
              Disponible
            </div>
            <h3 className="text-3xl font-bold mb-3">1ª Quincena Julio</h3>
            <p className="text-neutral-400 mb-10 text-sm tracking-widest uppercase">Del 1 al 15 de Julio</p>
            <div className="text-7xl font-medium mb-12 tabular-nums tracking-tighter">1.900€</div>
            <div className="space-y-3 mb-10 border-y border-neutral-100 py-8">
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-600">
                <CheckCircle2 size={14} /> Todo Incluido
              </div>
              <p className="text-[10px] text-neutral-400 leading-tight px-6 uppercase tracking-wider">
                Sábanas, toallas, garaje, luz y agua. Sin sorpresas.
              </p>
            </div>
            <a href="#contacto" className="block w-full py-6 bg-neutral-50 text-black border border-neutral-200 hover:bg-black hover:text-white transition-all rounded-full font-bold uppercase tracking-widest text-[11px]">
               Solicitar Información
            </a>
          </div>

          {/* Agosto Card */}
          <div className="bg-black text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 px-6 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-bl-2xl">
              Última Quincena
            </div>
            <h3 className="text-3xl font-bold mb-3 text-white">2ª Quincena Agosto</h3>
            <p className="text-white/30 mb-10 text-sm tracking-widest uppercase">Del 16 al 31 de Agosto</p>
            <div className="text-7xl font-medium mb-12 tabular-nums tracking-tighter">2.800€</div>
            <div className="space-y-3 mb-10 border-y border-white/10 py-8">
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-500">
                <CheckCircle2 size={14} /> Todo Incluido
              </div>
              <p className="text-[10px] text-white/40 leading-tight px-6 uppercase tracking-wider">
                Sábanas, toallas, garaje, luz y agua. Sin sorpresas.
              </p>
            </div>
            <a href="#contacto" className="block w-full py-6 bg-white text-black hover:bg-neutral-200 transition-all rounded-full font-bold uppercase tracking-widest text-[11px]">
               Solicitar Información
            </a>
          </div>
        </div>
      </section>

      {/* About & FAQ Section */}
      <section id="sobre-nosotros" className="bg-neutral-50 py-32 border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            {/* Host info */}
            <div>
              <div className="mb-10 flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img src={getImg(DRIVE_IDS[4])} alt="Anfitrión" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-black text-white w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
                    <ShieldCheck size={14} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight italic leading-none mb-2">Tu anfitrión en Atlanterra</h2>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Propietarios Particulares</div>
                </div>
              </div>
              <p className="text-xl text-neutral-600 font-light leading-relaxed mb-8 italic">
                "Somos propietarios particulares apasionados por Zahara de los Atunes. Gestionamos este refugio en Atlanterra Pueblo de forma directa para ofrecerte un trato cercano y honesto. Nuestro objetivo es que disfrutes del mar con la tranquilidad de un alojamiento cuidado al detalle."
              </p>
              <a 
                href="https://www.turismozahara.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-amber-700 hover:text-black transition-colors"
              >
                Guía oficial de Turismo de Zahara <ExternalLink size={12} />
              </a>
            </div>

            {/* FAQs */}
            <div className="space-y-12">
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-neutral-400 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-neutral-300"></div> Preguntas Frecuentes
              </h3>
              
              <div className="space-y-10">
                <div className="group">
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-4 text-neutral-800">
                    <HelpCircle size={18} className="text-amber-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                    ¿A qué distancia está la playa?
                  </h4>
                  <p className="text-neutral-500 font-light leading-relaxed pl-8">
                    El apartamento se encuentra en una ubicación privilegiada a solo 200 metros de la arena, lo que permite ir caminando en menos de 2 minutos por acceso directo.
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-lg font-bold mb-3 flex items-center gap-4 text-neutral-800">
                    <HelpCircle size={18} className="text-amber-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                    ¿Qué servicios incluye el alojamiento?
                  </h4>
                  <p className="text-neutral-500 font-light leading-relaxed pl-8">
                    El precio incluye plaza de garaje privada, acceso a piscinas comunitarias y zonas verdes. En la quincena de agosto, incluimos además textiles premium y limpieza profesional de entrada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-white rounded-[4rem] p-8 md:p-20 shadow-2xl border border-neutral-100/50 max-w-5xl mx-auto overflow-hidden relative">
          {/* Subtle background pattern/accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-8 italic">Hablemos <br /><span className="not-italic text-neutral-800">del verano.</span></h2>
              <p className="text-neutral-500 mb-12 font-light text-lg leading-relaxed max-w-sm">
                Para formalizar la reserva o consultar detalles específicos del equipamiento, contáctanos directamente.
              </p>
              <div className="flex items-center gap-8 p-4">
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 shadow-sm"><MapPin size={24} className="text-amber-700" /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 mb-1">Ubicación Perfecta</div>
                  <div className="text-xl font-bold tracking-tight italic">Atlanterra Pueblo, Zahara.</div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <a 
                href="https://wa.me/34669719983" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-8 bg-neutral-900 text-white rounded-[2.5rem] hover:bg-neutral-800 transition-all group shadow-xl shadow-black/10"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"><Phone size={22} className="text-green-400" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40">WhatsApp Directo</div>
                    <div className="text-xl font-bold tracking-tight">Enviar mensaje</div>
                  </div>
                </div>
                <ChevronRight className="opacity-40 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="mailto:victoriaberbel@hotmail.es" 
                className="flex items-center justify-between p-8 bg-white text-black rounded-[2.5rem] border border-neutral-200 hover:border-black transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center"><Mail size={22} className="text-amber-700" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Correo Electrónico</div>
                    <div className="text-xl font-bold tracking-tight overflow-hidden text-ellipsis whitespace-nowrap max-w-[180px] xs:max-w-none">victoriaberbel@hotmail.es</div>
                  </div>
                </div>
                <ChevronRight className="opacity-40 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-black">A</div>
                <span className="text-2xl font-bold tracking-tighter italic">Atlanterra Pueblo</span>
              </div>
              <p className="text-white/40 font-light leading-relaxed text-sm mb-10">
                Tu refugio exclusivo en Zahara de los Atunes. Alquiler directo entre particulares, garantizando honestidad y un trato impecable.
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10"><ShieldCheck size={16} className="text-amber-400" /></div>
                <span className="text-[9px] uppercase tracking-widest font-black text-white/30">Propiedad Verificada</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-20">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-10 text-white/30">Navegación</h4>
                <div className="flex flex-col gap-5 text-sm font-medium text-white/50">
                  <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
                  <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
                  <a href="#detalles" className="hover:text-white transition-colors">Detalles</a>
                  <a href="#precios" className="hover:text-white transition-colors">Precios</a>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-10 text-white/30">Legal</h4>
                <div className="flex flex-col gap-5 text-sm font-medium text-white/50">
                  <button onClick={() => setActiveModal('aviso')} className="hover:text-white transition-colors text-left">Aviso Legal</button>
                  <button onClick={() => setActiveModal('condiciones')} className="hover:text-white transition-colors text-left">Condiciones</button>
                  <button onClick={() => setActiveModal('cookies')} className="hover:text-white transition-colors text-left">Cookies</button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
              © 2026 Alquiler Atlanterra Pueblo.
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-white/10">
              <span>Gestión entre particulares</span>
              <span className="hidden md:inline">•</span>
              <span>Zahara de los Atunes, Cádiz</span>
              <span className="hidden md:inline">•</span>
              <span>Sitio Oficial</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[4rem] p-12 md:p-20 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-10 right-10 w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              >
                <X size={20} />
              </button>
              <h2 className="text-4xl font-medium tracking-tighter mb-10 italic">
                {LEGAL_CONTENT[activeModal].title}
              </h2>
              <div className="text-neutral-500 font-light leading-relaxed text-lg italic">
                {LEGAL_CONTENT[activeModal].content}
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="mt-16 w-full py-6 bg-black text-white text-[10px] uppercase tracking-widest font-black rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-black/10"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-10 left-10 right-10 md:left-auto md:right-10 md:max-w-sm z-[90]"
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-neutral-100 p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-black italic">Cookies de Estancia</h3>
              <p className="text-[12px] text-neutral-500 leading-relaxed font-light mb-8">
                Utilizamos cookies técnicas fundamentales para que puedas navegar por la galería y el sitio de forma fluida. Sin rastreos.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={acceptCookies}
                  className="flex-1 py-4 bg-black text-white text-[10px] uppercase tracking-wider font-extrabold rounded-full shadow-lg hover:bg-neutral-800 transition-all"
                >
                  Confirmar
                </button>
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="flex-1 py-4 bg-neutral-50 text-neutral-400 text-[10px] uppercase tracking-wider font-extrabold rounded-full border border-neutral-100 hover:bg-neutral-100 transition-all"
                >
                  Omitir
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

