import { Bot, Share2, GitBranch, Store, Truck, BarChartHorizontal } from 'lucide-react';

export const pricingTiers = [
  {
    name: 'Starter',
    price: { monthly: '$0', annually: '$0' },
    frequency: '/ mes',
    description: 'Para empezar a explorar y crear tus primeros diseños.',
    features: ['Editor Drag & Drop', 'Hasta 3 diseños guardados', 'Acceso a biblioteca básica de recursos', 'Exportación con marca de agua'],
    cta: 'Comenzar Gratis',
    isMostPopular: false,
    href: '/signup'
  },
  {
    name: 'Premium',
    price: { monthly: '$19', annually: '$15' },
    frequency: '/ mes',
    description: 'Para profesionales que buscan llevar sus diseños al siguiente nivel.',
    features: ['Todo en Starter, y además:', 'Diseños ilimitados', 'Biblioteca de recursos Premium', 'Sugerencias de paletas de colores con IA', 'Asistente de Diseño con IA (Básico)', 'Calculadora de Precios de Proyectos', 'Generador de Contratos (Borradores Legales)', 'Portal de Colaboración con Cliente', 'Portafolio Público Profesional', 'Soporte prioritario por correo'],
    cta: 'Actualizar a Premium',
    isMostPopular: true,
    href: '/signup?plan=premium'
  },
  {
    name: 'Enterprise',
    price: { monthly: '$49', annually: '$39' },
    frequency: '/ mes',
    description: 'Soluciones a medida para equipos y grandes agencias de eventos.',
    features: ['Todo en Premium, y además:', 'Micrositio Profesional del Decorador', 'Asistente de Diseño con IA (Avanzado)', 'Generador de Presupuestos y Compras con IA', 'Centro Profesional de Marketing', 'Gestión de Reseñas', 'Asistente de Anuncios IA', 'Visualización en Realidad Aumentada (RA)', 'Herramientas de Colaboración en Equipo', 'Soporte dedicado y onboarding'],
    cta: 'Actualizar a Enterprise',
    isMostPopular: false,
    href: '/signup?plan=enterprise'
  },
];

export const comparisonFeatures = [
  {
    section: 'Funcionalidades Principales',
    items: [
      { feature: 'Editor Drag & Drop', starter: true, premium: true, enterprise: true },
      { feature: 'Diseños guardados', starter: 'Hasta 3', premium: 'Ilimitados', enterprise: 'Ilimitados' },
      { feature: 'Biblioteca de recursos', starter: 'Básica', premium: 'Premium', enterprise: 'Premium y Personalizada' },
      { feature: 'Exportación sin marca de agua', starter: false, premium: true, enterprise: true },
    ]
  },
  {
    section: 'Herramientas con IA',
    items: [
      { feature: 'Sugerencias de paletas con IA', starter: false, premium: true, enterprise: true },
      { feature: 'Asistente de Diseño con IA', starter: false, premium: 'Básico', enterprise: 'Avanzado' },
      { feature: 'Generador de Presupuestos con IA', starter: false, premium: false, enterprise: true },
      { feature: 'Visualización en Realidad Aumentada (RA)', starter: false, premium: false, enterprise: true },
    ]
  },
  {
    section: 'Soporte y Colaboración',
    items: [
      { feature: 'Herramientas de Colaboración en Equipo', starter: false, premium: false, enterprise: true },
      { feature: 'Soporte prioritario', starter: 'Email', premium: 'Email y Chat', enterprise: 'Dedicado 24/7' },
    ]
  }
];

export const faqs = [
  { question: '¿Puedo cambiar de plan en cualquier momento?', answer: 'Sí, puedes actualizar, bajar de plan o cancelarlo en cualquier momento desde el panel de configuración de tu cuenta. Los cambios se aplicarán de inmediato y sin complicaciones.' },
  { question: '¿Hay descuentos para pagos anuales?', answer: 'Al elegir el plan anual, obtienes un descuento equivalente a aproximadamente dos meses gratis en comparación con el pago mensual.' },
  { question: '¿Qué tan seguros están mis datos y los de mis clientes?', answer: 'Utilizamos encriptación de extremo a extremo y nos alojamos en infraestructura de primer nivel para garantizar la seguridad de tus diseños y datos.' },
  { question: '¿Qué pasa si necesito cancelar mi suscripción?', answer: 'Puedes cancelar tu suscripción en cualquier momento. Tu plan permanecerá activo hasta el final del ciclo de facturación actual.' },
  { question: '¿Qué tipo de soporte ofrecen?', answer: 'Soporte por correo para todos los usuarios. Premium tiene chat prioritario, Enterprise gestor dedicado 24/7.' },
  { question: '¿El plan "Starter" es gratis para siempre?', answer: 'Sí, el plan Starter es completamente gratuito y sin límite de tiempo.' },
  { question: '¿Qué tipo de recursos están incluidos en las bibliotecas?', answer: 'La biblioteca básica incluye globos, flores y accesorios comunes. Las Premium y Enterprise incluyen recursos exclusivos y temáticos.' },
  { question: '¿Puedo usar mis propias imágenes y logos?', answer: 'Sí, puedes subir logos y elementos decorativos personalizados en todos los planes.' },
  { question: '¿Cómo me ayuda la IA en mi trabajo diario?', answer: 'La IA actúa como asistente personal: sugiere paletas de colores, genera conceptos completos y listas de compras, optimizando tu flujo de trabajo.' },
  { question: '¿La plataforma es fácil de usar si no soy experto en tecnología?', answer: 'Sí, interfaz intuitiva drag & drop, fácil de aprender, con tutoriales para empezar.' },
  { question: '¿Puedo colaborar con mi equipo o mis clientes?', answer: 'Sí, funciones de colaboración en tiempo real y portal de cliente para aprobar diseños.' },
];

export const futureFeatures = [
  { icon: Bot, title: "IA Generativa para 3D", description: "Transforma tus descripciones de texto en modelos 3D de decoraciones completas y personalizadas." },
  { icon: Share2, title: "Colaboración Multiusuario", description: "Trabaja en el mismo diseño en tiempo real con tu equipo." },
  { icon: GitBranch, title: "API para Integraciones", description: "Conecta DecoVision con tus herramientas favoritas." },
  { icon: Store, title: "Marketplace Comunitario", description: "Vende y compra plantillas y activos de otros decoradores." },
  { icon: Truck, title: "Simulador de Logística", description: "Planifica el montaje de tu evento y optimiza tiempos de instalación." },
  { icon: BarChartHorizontal, title: "Análisis Predictivo de Tendencias", description: "Predice estilos y colores populares para las próximas temporadas." }
];
