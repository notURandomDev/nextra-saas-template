export default {
  backToTop: "Volver arriba",
  logo: {
    title: "Nextra SaaS Template",
    text: "NextraaS",
    alt: "Nextra SaaS Template",
  },
  editPage: "Editar esta página en GitHub",
  search: {
    placeholder: "Buscar contenido...",
  },
  feedback: {
    content: "¿Tienes preguntas? Danos tu opinión",
  },
  toc: {
    title: "En esta página",
  },
  landing: {
    hero: {
      badge: {
        text: "Plantilla de código abierto · Basado en Nextra",
      },
      headline: "Construye tu SaaS",
      subheadline: "Lánzalo Rápido",
      description:
        "Una plantilla moderna y potente para construir sitios web SaaS con Nextra, Next.js y Tailwind CSS. Incluye soporte i18n, landing page personalizable, y documentación integrada.",
      ctas: [
        { label: "Comenzar ahora", variant: "primary" },
        { label: "Ver documentación", variant: "outline" },
      ],
      socialProof: {
        description: {
          prefix: "Construido con",
          count: "5",
          middle: "tecnologías esenciales para el desarrollo SaaS moderno",
        },
      },
    },
    logoMarquee: {
      title: "Tecnologías y herramientas",
      logos: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Nextra" },
        { name: "Framer Motion" },
        { name: "Radix UI" },
      ],
    },
    bentoGrid: {
      sectionTitle: "Características potentes",
      sectionDescription:
        "Todo lo que necesitas para construir un sitio web SaaS moderno y escalable.",
      cards: [
        {
          id: "landing-page",
          icon: "Layout",
          title: "Landing Page Personalizable",
          description:
            "Landing page moderna y responsive con componentes preconstruidos. Hero, Logo Marquee, Bento Grid, Pricing, CTA y Footer completamente personalizables.",
          span: "wide",
          type: "metrics",
          systemStatus: true,
          metrics: [
            { label: "Componentes", value: "10+" },
            { label: "Animaciones", value: "Framer Motion" },
            { label: "Responsive", value: "100%" },
            { label: "Personalizable", value: "Total" },
          ],
        },
        {
          id: "i18n",
          icon: "Languages",
          title: "Soporte i18n Completo",
          description:
            "Soporte multilingüe integrado con inglés, chino y español. Sistema de diccionarios fácil de usar para agregar más idiomas.",
          type: "tags",
          tags: ["Inglés", "Chino", "Español"],
        },
        {
          id: "docs",
          icon: "FileText",
          title: "Documentación Integrada",
          description:
            "Sistema de documentación potente basado en Nextra. Búsqueda de texto completo, navegación, código destacado, y soporte LaTeX incluidos.",
          type: "search",
        },
        {
          id: "theme",
          icon: "Moon",
          title: "Modo Oscuro/Claro",
          description:
            "Soporte completo para temas claro y oscuro con transiciones suaves. Los usuarios pueden elegir su preferencia o seguir el sistema.",
          type: "highlight",
          highlight: {
            value: "2",
            label: "temas incluidos",
          },
        },
        {
          id: "components",
          icon: "Component",
          title: "Componentes UI Modernos",
          description:
            "Construido con Radix UI y Tailwind CSS. Componentes accesibles, personalizables y listos para usar.",
          type: "tags",
          tags: ["Radix UI", "Tailwind CSS", "Lucide Icons"],
        },
      ],
    },
    pricing: {
      sectionTitle: "Comienza a construir",
      sectionDescription: "Elige cómo quieres usar esta plantilla para tu próximo proyecto.",
      plans: [
        {
          name: "Uso Personal",
          description: "Proyectos personales y de aprendizaje",
          price: "Gratis",
          features: [
            "Código completo de la plantilla",
            "Documentación completa",
            "Soporte i18n",
            "Componentes UI preconstruidos",
            "Actualizaciones gratuitas",
          ],
          cta: "Comenzar gratis",
          highlighted: false,
        },
        {
          name: "Proyectos Comerciales",
          description: "Proyectos comerciales y startups",
          price: "MIT License",
          highlighted: true,
          features: [
            "Todo lo de uso personal",
            "Uso comercial permitido",
            "Modificación permitida",
            "Distribución permitida",
            "Sin restricciones adicionales",
          ],
          cta: "Ver licencia",
          badge: "Recomendado",
        },
        {
          name: "Contribución",
          description: "Ayuda a mejorar la plantilla",
          price: "Open Source",
          features: [
            "Reportar bugs y problemas",
            "Enviar pull requests",
            "Mejorar la documentación",
            "Compartir ideas",
            "Contribuir a la comunidad",
          ],
          cta: "Contribuir",
          highlighted: false,
        },
      ],
    },
    finalCTA: {
      headline: "¿Listo para construir tu próximo proyecto SaaS?",
      description:
        "Comienza con Nextra SaaS Template hoy y construye tu sitio web en minutos. Potente, flexible y fácil de personalizar. Únete a miles de desarrolladores que ya están construyendo proyectos increíbles.",
      ctas: [
        { label: "Comenzar ahora", variant: "primary" },
        { label: "Ver en GitHub", variant: "outline" },
      ],
      note: "Código abierto bajo licencia MIT. Úsalo, modifícalo y compártelo libremente.",
    },
    footer: {
      brand: {
        name: "Nextra SaaS Template",
        description:
          "Una plantilla moderna para construir sitios web SaaS con Nextra, Next.js y Tailwind CSS. Código abierto, fácil de usar y altamente personalizable.",
        statusText: "Proyecto activo",
      },
      linkGroups: [
        {
          title: "Características",
          links: ["Landing Page", "i18n", "Documentación", "Temas", "Componentes"],
        },
        {
          title: "Recursos",
          links: ["Documentación", "GitHub", "Ejemplos", "Guías"],
        },
        {
          title: "Comunidad",
          links: ["Contribuir", "Discusiones", "Issues", "Roadmap"],
        },
        {
          title: "Legal",
          links: ["Licencia MIT", "Privacidad", "Términos", "Contacto"],
        },
      ],
      copyright: "Nextra SaaS Template. All rights reserved.",
    },
  },
};
