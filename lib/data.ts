import type { Politician, Province, User } from "./types"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Datos de ejemplo para la aplicación
const politiciansData: Politician[] = [
  {
    id: "1",
    name: "Daniel Noboa Azin",
    image: "/daniel-noboa.jpg",
    party: "Acción Democrática Nacional, ADN",
    province: "pichincha",
    currentPosition: "Presidente de la República del Ecuador",
    experience: 5,
    proposalsFulfilled: 42,
    approvalRating: 65,
    age: 36,
    birthplace: "Guayaquil, Ecuador",
    careerStart: "2021",
    biography:
      "Daniel Noboa Azin es un empresario y político ecuatoriano, hijo del empresario Álvaro Noboa. Nació el 30 de noviembre de 1987 en Guayaquil. Estudió en la Universidad de Harvard donde obtuvo una licenciatura en Administración de Empresas y posteriormente una maestría en Administración Pública. Antes de entrar en política, trabajó en las empresas familiares y fundó varias iniciativas empresariales propias. Su carrera política comenzó cuando fue elegido asambleísta por la provincia de Santa Elena en 2021. En 2023, se presentó como candidato presidencial y ganó la segunda vuelta electoral, convirtiéndose en el presidente más joven en la historia de Ecuador.",
    career: [
      {
        title: "Presidente de la República",
        organization: "Gobierno de Ecuador",
        period: "2023 - Presente",
        description:
          "Asumió la presidencia tras ganar las elecciones anticipadas, enfocándose en seguridad, economía y empleo.",
      },
      {
        title: "Asambleísta Nacional",
        organization: "Asamblea Nacional",
        period: "2021 - 2023",
        description: "Representante por la provincia de Santa Elena, miembro de la Comisión de Desarrollo Económico.",
      },
      {
        title: "CEO",
        organization: "Empresas Noboa",
        period: "2015 - 2021",
        description: "Dirigió varias empresas del grupo familiar, incluyendo operaciones en logística y exportación.",
      },
    ],
    proposals: [
      {
        title: "Plan Fénix",
        description: "Estrategia integral de seguridad para combatir el crimen organizado y la violencia.",
        status: "En progreso",
        progress: 50,
        category: "Seguridad",
      },
      {
        title: "Reactivación Económica",
        description: "Plan para atraer inversiones extranjeras y generar empleo en sectores estratégicos.",
        status: "En progreso",
        progress: 40,
        category: "Economía",
      },
      {
        title: "Modernización del Estado",
        description: "Digitalización de servicios públicos y reducción de trámites burocráticos.",
        status: "En progreso",
        progress: 35,
        category: "Administración",
      },
      {
        title: "Reforma Educativa",
        description: "Mejoramiento de la calidad educativa y acceso a educación superior.",
        status: "Pendiente",
        progress: 15,
        category: "Educación",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Daniel Noboa ha mostrado un enfoque pragmático en su gestión, priorizando temas de seguridad y economía. Su juventud y formación empresarial han aportado una visión fresca a la administración pública, aunque enfrenta desafíos importantes debido a la compleja situación del país. Su capacidad de comunicación y su imagen de renovación política han sido sus principales fortalezas, mientras que su limitada experiencia en el sector público representa un desafío en la implementación de políticas complejas.",
      strengths: [
        "Visión empresarial y pragmática",
        "Capacidad de comunicación efectiva",
        "Imagen de renovación política",
        "Formación académica internacional",
      ],
      weaknesses: [
        "Limitada experiencia en administración pública",
        "Dependencia de alianzas políticas volátiles",
        "Herencia de problemas estructurales complejos",
      ],
    },
  },
  {
    id: "2",
    name: "Luisa González",
    image: "/luisa-gonzalez.jpg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "pichincha",
    currentPosition: "Asambleísta Nacional",
    experience: 12,
    proposalsFulfilled: 70,
    approvalRating: 62,
    age: 45,
    birthplace: "Quito, Ecuador",
    careerStart: "2010",
    biography:
      "Luisa González es una abogada y política ecuatoriana nacida en Quito. Obtuvo su título en Derecho en la Universidad Central del Ecuador y una maestría en Administración Pública. Su carrera política está estrechamente vinculada al movimiento de Rafael Correa, habiendo ocupado varios cargos durante su gobierno. Fue Ministra del Trabajo y posteriormente Consejera del Consejo de Participación Ciudadana. En 2023, fue candidata presidencial por el Movimiento Revolución Ciudadana, llegando a la segunda vuelta electoral. Actualmente se desempeña como Asambleísta Nacional y es una de las principales figuras de la oposición.",
    career: [
      {
        title: "Asambleísta Nacional",
        organization: "Asamblea Nacional",
        period: "2023 - Presente",
        description: "Representa al Movimiento Revolución Ciudadana, liderando la bancada de oposición.",
      },
      {
        title: "Candidata Presidencial",
        organization: "Movimiento Revolución Ciudadana",
        period: "2023",
        description: "Alcanzó la segunda vuelta en las elecciones presidenciales anticipadas.",
      },
      {
        title: "Ministra del Trabajo",
        organization: "Gobierno de Ecuador",
        period: "2016 - 2017",
        description: "Implementó políticas laborales y de seguridad social durante el gobierno de Rafael Correa.",
      },
      {
        title: "Consejera",
        organization: "Consejo de Participación Ciudadana",
        period: "2013 - 2016",
        description: "Participó en procesos de designación de autoridades y control social.",
      },
    ],
    proposals: [
      {
        title: "Recuperación Económica",
        description:
          "Plan para reactivar la economía mediante inversión pública y protección de la industria nacional.",
        status: "Pendiente",
        category: "Economía",
      },
      {
        title: "Reforma al Sistema de Salud",
        description: "Fortalecimiento del sistema público de salud y acceso universal a servicios médicos.",
        status: "Pendiente",
        category: "Salud",
      },
      {
        title: "Programa de Seguridad Integral",
        description: "Estrategia para combatir la inseguridad con enfoque en prevención y rehabilitación.",
        status: "Pendiente",
        category: "Seguridad",
      },
      {
        title: "Soberanía Energética",
        description: "Plan para recuperar y fortalecer el sector energético nacional.",
        status: "Pendiente",
        category: "Energía",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Luisa González representa la continuidad del proyecto político de la Revolución Ciudadana. Su experiencia en diferentes cargos públicos le ha dado un conocimiento profundo del funcionamiento estatal. Como figura de oposición, ha mantenido una crítica constante a las políticas gubernamentales actuales, especialmente en temas económicos y sociales. Su principal fortaleza es su conocimiento técnico y experiencia administrativa, mientras que enfrenta el desafío de diferenciarse políticamente y construir una identidad propia más allá de la influencia de Rafael Correa.",
      strengths: [
        "Amplia experiencia en administración pública",
        "Conocimiento técnico en áreas clave",
        "Respaldo de una estructura política consolidada",
        "Capacidad de articulación con movimientos sociales",
      ],
      weaknesses: [
        "Percepción de dependencia política de Rafael Correa",
        "Dificultad para atraer votantes fuera de su base tradicional",
        "Resistencia de sectores empresariales y mediáticos",
      ],
    },
  },
  // Azuay - Nuevos políticos
  {
    id: "azuay-1",
    name: "Mabel Méndez",
    image: "/mabel-mendez.jpg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "azuay",
    currentPosition: "Asambleísta Provincial",
    experience: 6,
    proposalsFulfilled: 65,
    approvalRating: 70,
    age: 38,
    birthplace: "Cuenca, Ecuador",
    careerStart: "2017",
    biography:
      "Mabel Méndez es una política ecuatoriana nacida en Cuenca. Graduada en Ciencias Políticas, ha dedicado su carrera a la defensa de los derechos sociales y la igualdad de género. Antes de su actual cargo, trabajó en organizaciones de desarrollo comunitario en la provincia de Azuay.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Azuay, enfocada en políticas sociales y derechos de las mujeres.",
      },
      {
        title: "Directora Provincial",
        organization: "Ministerio de Inclusión Económica y Social",
        period: "2018 - 2021",
        description: "Coordinó programas sociales y de desarrollo comunitario en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Ley de Protección Social",
        description: "Marco legal para fortalecer los sistemas de protección social para grupos vulnerables.",
        status: "En progreso",
        progress: 60,
        category: "Social",
      },
      {
        title: "Programa de Desarrollo Rural",
        description: "Iniciativas para mejorar la calidad de vida en zonas rurales de Azuay.",
        status: "En progreso",
        progress: 45,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Mabel Méndez ha destacado por su compromiso con las causas sociales y su capacidad para articular demandas ciudadanas. Su gestión se caracteriza por un enfoque participativo y cercano a las comunidades.",
      strengths: [
        "Fuerte conexión con organizaciones sociales",
        "Capacidad de diálogo y construcción de consensos",
        "Compromiso con la transparencia",
      ],
      weaknesses: [
        "Limitada experiencia en gestión económica",
        "Dificultades para implementar proyectos de gran escala",
      ],
    },
  },
  {
    id: "azuay-2",
    name: "Mayra Díaz Cullispuma",
    image: "/mayra-diaz.jpg",
    party: "Acción Democrática Nacional, ADN",
    province: "azuay",
    currentPosition: "Concejal Municipal",
    experience: 4,
    proposalsFulfilled: 55,
    approvalRating: 68,
    age: 36,
    birthplace: "Gualaceo, Ecuador",
    careerStart: "2019",
    biography:
      "Mayra Díaz Cullispuma es una política y empresaria ecuatoriana originaria de Gualaceo. Con formación en Administración de Empresas, ha combinado su actividad empresarial con la gestión pública, enfocándose en el desarrollo económico local y el emprendimiento.",
    career: [
      {
        title: "Concejal Municipal",
        organization: "Municipio de Cuenca",
        period: "2022 - Presente",
        description: "Miembro del Concejo Municipal, enfocada en desarrollo económico y turismo.",
      },
      {
        title: "Directora",
        organization: "Cámara de Comercio de Gualaceo",
        period: "2019 - 2022",
        description: "Lideró iniciativas para fortalecer el comercio local y el emprendimiento.",
      },
    ],
    proposals: [
      {
        title: "Plan de Reactivación Económica Local",
        description: "Estrategias para impulsar la economía local tras la pandemia.",
        status: "En progreso",
        progress: 70,
        category: "Economía",
      },
      {
        title: "Programa de Apoyo al Emprendimiento",
        description: "Financiamiento y capacitación para nuevos emprendedores.",
        status: "Cumplida",
        progress: 100,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 3 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Mayra Díaz ha destacado por su enfoque pragmático y orientado a resultados. Su experiencia empresarial le ha permitido implementar soluciones efectivas para el desarrollo económico local.",
      strengths: [
        "Conocimiento del sector empresarial",
        "Enfoque en resultados medibles",
        "Capacidad para atraer inversiones",
      ],
      weaknesses: ["Menor experiencia en gestión pública", "Limitada articulación con sectores sociales"],
    },
  },
  // Bolívar - Nuevos políticos
  {
    id: "bolivar-1",
    name: "María José Maureira",
    image: "/maria-mauriera.jpg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "bolivar",
    currentPosition: "Asambleísta Provincial",
    experience: 7,
    proposalsFulfilled: 62,
    approvalRating: 71,
    age: 40,
    birthplace: "Guaranda, Ecuador",
    careerStart: "2016",
    biography:
      "María José Maureira es una política ecuatoriana nacida en Guaranda. Con formación en Derecho y especialización en Derechos Humanos, ha dedicado su carrera a la defensa de los derechos de grupos vulnerables y al desarrollo social en la provincia de Bolívar.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Bolívar, enfocada en derechos sociales y desarrollo rural.",
      },
      {
        title: "Directora Provincial",
        organization: "Defensoría del Pueblo",
        period: "2016 - 2021",
        description: "Coordinó la defensa de derechos ciudadanos en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Ley de Desarrollo Rural Integral",
        description: "Marco legal para promover el desarrollo sostenible en zonas rurales.",
        status: "En progreso",
        progress: 55,
        category: "Desarrollo",
      },
      {
        title: "Programa de Acceso a la Justicia",
        description: "Iniciativas para garantizar el acceso a la justicia en comunidades alejadas.",
        status: "En progreso",
        progress: 65,
        category: "Derechos",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "María José Maureira ha destacado por su compromiso con los derechos humanos y su capacidad para articular demandas de comunidades rurales. Su gestión se caracteriza por un enfoque de derechos y participación ciudadana.",
      strengths: [
        "Sólida formación jurídica",
        "Fuerte conexión con comunidades rurales",
        "Compromiso con la transparencia",
      ],
      weaknesses: [
        "Limitada experiencia en gestión económica",
        "Dificultades para implementar proyectos de gran escala",
      ],
    },
  },
  {
    id: "bolivar-2",
    name: "Nayeli Jhuliza Córdova Ledesma",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "bolivar",
    currentPosition: "Concejal Municipal",
    experience: 3,
    proposalsFulfilled: 58,
    approvalRating: 65,
    age: 32,
    birthplace: "San Miguel, Ecuador",
    careerStart: "2020",
    biography:
      "Nayeli Córdova es una joven política ecuatoriana originaria de San Miguel de Bolívar. Con formación en Administración Pública, representa una nueva generación de líderes políticos enfocados en la modernización de la gestión pública y el desarrollo local.",
    career: [
      {
        title: "Concejal Municipal",
        organization: "Municipio de Guaranda",
        period: "2022 - Presente",
        description: "Miembro del Concejo Municipal, enfocada en modernización administrativa y participación juvenil.",
      },
      {
        title: "Coordinadora Provincial",
        organization: "Secretaría de la Juventud",
        period: "2020 - 2022",
        description: "Lideró programas de inclusión y participación juvenil en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Gobierno Digital Municipal",
        description: "Digitalización de servicios municipales para mejorar la eficiencia y transparencia.",
        status: "En progreso",
        progress: 60,
        category: "Administración",
      },
      {
        title: "Programa de Emprendimiento Juvenil",
        description: "Apoyo a jóvenes emprendedores de la provincia.",
        status: "En progreso",
        progress: 75,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 3 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Nayeli Córdova representa una nueva generación en la política de Bolívar, con un enfoque en modernización y participación juvenil. Su gestión se caracteriza por la innovación y el uso de nuevas tecnologías.",
      strengths: [
        "Conocimiento de nuevas tecnologías",
        "Capacidad para conectar con jóvenes",
        "Enfoque innovador en la gestión pública",
      ],
      weaknesses: ["Limitada experiencia política", "Dificultades para articular con sectores tradicionales"],
    },
  },
  // Cañar - Nuevos políticos
  {
    id: "canar-1",
    name: "Valentina Regalado Matute",
    image: "/valentina-centeno.jpg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "canar",
    currentPosition: "Asambleísta Provincial",
    experience: 8,
    proposalsFulfilled: 68,
    approvalRating: 72,
    age: 42,
    birthplace: "Azogues, Ecuador",
    careerStart: "2015",
    biography:
      "Valentina Regalado es una política ecuatoriana nacida en Azogues. Con formación en Sociología y una maestría en Políticas Públicas, ha dedicado su carrera a la defensa de los derechos sociales y el desarrollo comunitario en la provincia de Cañar.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Cañar, enfocada en políticas sociales y desarrollo comunitario.",
      },
      {
        title: "Directora Provincial",
        organization: "Ministerio de Inclusión Económica y Social",
        period: "2015 - 2021",
        description: "Coordinó programas sociales y de desarrollo comunitario en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Ley de Economía Popular y Solidaria",
        description: "Marco legal para fortalecer emprendimientos comunitarios y asociativos.",
        status: "En progreso",
        progress: 60,
        category: "Economía",
      },
      {
        title: "Programa de Desarrollo Comunitario",
        description: "Iniciativas para fortalecer la organización y participación comunitaria.",
        status: "En progreso",
        progress: 70,
        category: "Social",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Valentina Regalado ha destacado por su compromiso con el desarrollo comunitario y su capacidad para articular demandas sociales. Su gestión se caracteriza por un enfoque participativo y de economía solidaria.",
      strengths: [
        "Fuerte conexión con organizaciones comunitarias",
        "Capacidad de diálogo y construcción de consensos",
        "Compromiso con la economía solidaria",
      ],
      weaknesses: [
        "Limitada experiencia en gestión económica tradicional",
        "Dificultades para implementar proyectos de gran escala",
      ],
    },
  },
  {
    id: "canar-2",
    name: "Víctor Luzuriaga Romo",
    image: "/victor-romo.jpg",
    party: "Acción Democrática Nacional, ADN",
    province: "canar",
    currentPosition: "Alcalde de Biblián",
    experience: 6,
    proposalsFulfilled: 65,
    approvalRating: 70,
    age: 45,
    birthplace: "Biblián, Ecuador",
    careerStart: "2017",
    biography:
      "Víctor Luzuriaga es un político y empresario ecuatoriano originario de Biblián. Con formación en Ingeniería Civil y experiencia en el sector de la construcción, ha aplicado su conocimiento técnico a la gestión pública, enfocándose en infraestructura y desarrollo urbano.",
    career: [
      {
        title: "Alcalde",
        organization: "Municipio de Biblián",
        period: "2023 - Presente",
        description: "Lidera la administración municipal con énfasis en infraestructura y desarrollo urbano.",
      },
      {
        title: "Concejal Municipal",
        organization: "Municipio de Biblián",
        period: "2017 - 2023",
        description: "Miembro del Concejo Municipal, enfocado en obras públicas y planificación urbana.",
      },
    ],
    proposals: [
      {
        title: "Plan de Infraestructura Vial",
        description: "Mejoramiento y ampliación de la red vial del cantón.",
        status: "En progreso",
        progress: 75,
        category: "Infraestructura",
      },
      {
        title: "Programa de Vivienda Social",
        description: "Construcción de viviendas asequibles para familias de bajos recursos.",
        status: "En progreso",
        progress: 60,
        category: "Social",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Víctor Luzuriaga ha destacado por su enfoque técnico y orientado a resultados. Su experiencia en el sector de la construcción le ha permitido implementar proyectos de infraestructura con eficiencia.",
      strengths: [
        "Sólido conocimiento técnico en infraestructura",
        "Capacidad de gestión de proyectos",
        "Enfoque en resultados tangibles",
      ],
      weaknesses: ["Comunicación política mejorable", "Menor atención a aspectos sociales del desarrollo"],
    },
  },
  // Carchi - Nuevos políticos
  {
    id: "carchi-1",
    name: "Fernanda Tirira",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "carchi",
    currentPosition: "Asambleísta Provincial",
    experience: 7,
    proposalsFulfilled: 64,
    approvalRating: 69,
    age: 38,
    birthplace: "Tulcán, Ecuador",
    careerStart: "2016",
    biography:
      "Fernanda Tirira es una política ecuatoriana nacida en Tulcán. Con formación en Relaciones Internacionales y especialización en Comercio Exterior, ha dedicado su carrera a promover el desarrollo fronterizo y las relaciones binacionales con Colombia.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Carchi, enfocada en desarrollo fronterizo y comercio binacional.",
      },
      {
        title: "Directora Provincial",
        organization: "Ministerio de Comercio Exterior",
        period: "2016 - 2021",
        description: "Coordinó programas de promoción comercial y desarrollo fronterizo.",
      },
    ],
    proposals: [
      {
        title: "Ley de Desarrollo Fronterizo",
        description: "Marco legal para promover el desarrollo económico en zonas de frontera.",
        status: "En progreso",
        progress: 55,
        category: "Economía",
      },
      {
        title: "Programa de Integración Binacional",
        description: "Iniciativas para fortalecer las relaciones comerciales y culturales con Colombia.",
        status: "En progreso",
        progress: 70,
        category: "Relaciones Internacionales",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Fernanda Tirira ha destacado por su conocimiento en temas de comercio exterior y desarrollo fronterizo. Su gestión se caracteriza por un enfoque pragmático y orientado a resultados económicos.",
      strengths: [
        "Conocimiento especializado en comercio exterior",
        "Capacidad para articular con actores internacionales",
        "Enfoque en desarrollo económico local",
      ],
      weaknesses: [
        "Menor atención a temas sociales",
        "Dificultades para implementar proyectos en zonas alejadas de la frontera",
      ],
    },
  },
  {
    id: "carchi-2",
    name: "Walter Burbano Guaranguay",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "carchi",
    currentPosition: "Prefecto Provincial",
    experience: 9,
    proposalsFulfilled: 72,
    approvalRating: 74,
    age: 48,
    birthplace: "San Gabriel, Ecuador",
    careerStart: "2014",
    biography:
      "Walter Burbano es un político y agricultor ecuatoriano originario de San Gabriel. Con formación en Ingeniería Agronómica, ha combinado su experiencia en el sector agrícola con la gestión pública, enfocándose en el desarrollo rural y la producción agropecuaria.",
    career: [
      {
        title: "Prefecto Provincial",
        organization: "Prefectura de Carchi",
        period: "2023 - Presente",
        description: "Lidera la administración provincial con énfasis en desarrollo rural y producción agropecuaria.",
      },
      {
        title: "Concejal Provincial",
        organization: "Consejo Provincial de Carchi",
        period: "2014 - 2023",
        description: "Miembro del Consejo Provincial, enfocado en desarrollo rural y vialidad.",
      },
    ],
    proposals: [
      {
        title: "Plan de Riego Provincial",
        description: "Implementación de sistemas de riego tecnificado para zonas agrícolas.",
        status: "En progreso",
        progress: 80,
        category: "Agricultura",
      },
      {
        title: "Programa de Vialidad Rural",
        description: "Mejoramiento de caminos vecinales para facilitar la comercialización de productos agrícolas.",
        status: "En progreso",
        progress: 75,
        category: "Infraestructura",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Walter Burbano ha destacado por su conocimiento del sector agrícola y su capacidad para implementar proyectos de desarrollo rural. Su gestión se caracteriza por un enfoque práctico y cercano a los productores.",
      strengths: [
        "Conocimiento técnico en agricultura",
        "Fuerte conexión con comunidades rurales",
        "Capacidad para ejecutar proyectos de infraestructura rural",
      ],
      weaknesses: ["Comunicación política mejorable", "Menor atención a temas urbanos y de diversificación económica"],
    },
  },
  // Cotopaxi - Nuevos políticos
  {
    id: "cotopaxi-1",
    name: "Ángel Tipantuña",
    image: "/angel-tipantuna.jpg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "cotopaxi",
    currentPosition: "Asambleísta Provincial",
    experience: 8,
    proposalsFulfilled: 67,
    approvalRating: 71,
    age: 45,
    birthplace: "Latacunga, Ecuador",
    careerStart: "2015",
    biography:
      "Ángel Tipantuña es un político y líder indígena ecuatoriano nacido en Latacunga. Con formación en Educación Intercultural Bilingüe, ha dedicado su carrera a la defensa de los derechos de los pueblos indígenas y el desarrollo comunitario en la provincia de Cotopaxi.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Cotopaxi, enfocado en derechos indígenas y desarrollo rural.",
      },
      {
        title: "Dirigente Provincial",
        organization: "Movimiento Indígena de Cotopaxi",
        period: "2015 - 2021",
        description: "Lideró procesos organizativos y de reivindicación de derechos colectivos.",
      },
    ],
    proposals: [
      {
        title: "Ley de Derechos Colectivos",
        description: "Marco legal para fortalecer los derechos de pueblos y nacionalidades indígenas.",
        status: "En progreso",
        progress: 55,
        category: "Derechos",
      },
      {
        title: "Programa de Educación Intercultural",
        description: "Fortalecimiento del sistema de educación intercultural bilingüe.",
        status: "En progreso",
        progress: 70,
        category: "Educación",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 5 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Ángel Tipantuña ha destacado por su fuerte liderazgo comunitario y su capacidad para articular demandas de pueblos indígenas. Su gestión se caracteriza por un enfoque de derechos colectivos y participación comunitaria.",
      strengths: [
        "Fuerte legitimidad en comunidades indígenas",
        "Capacidad de movilización social",
        "Compromiso con derechos colectivos",
      ],
      weaknesses: [
        "Limitada experiencia en gestión económica",
        "Dificultades para articular con sectores urbanos y empresariales",
      ],
    },
  },
  {
    id: "cotopaxi-2",
    name: "Ronald Romero",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "cotopaxi",
    currentPosition: "Alcalde de Salcedo",
    experience: 6,
    proposalsFulfilled: 70,
    approvalRating: 73,
    age: 42,
    birthplace: "Salcedo, Ecuador",
    careerStart: "2017",
    biography:
      "Ronald Romero es un político y empresario ecuatoriano originario de Salcedo. Con formación en Administración de Empresas y experiencia en el sector agroindustrial, ha aplicado su conocimiento empresarial a la gestión pública, enfocándose en el desarrollo económico local y la modernización administrativa.",
    career: [
      {
        title: "Alcalde",
        organization: "Municipio de Salcedo",
        period: "2023 - Presente",
        description: "Lidera la administración municipal con énfasis en desarrollo económico y modernización.",
      },
      {
        title: "Concejal Municipal",
        organization: "Municipio de Salcedo",
        period: "2017 - 2023",
        description: "Miembro del Concejo Municipal, enfocado en desarrollo económico y turismo.",
      },
    ],
    proposals: [
      {
        title: "Plan de Desarrollo Agroindustrial",
        description: "Estrategias para potenciar la agroindustria local y generar valor agregado.",
        status: "En progreso",
        progress: 75,
        category: "Economía",
      },
      {
        title: "Programa de Modernización Municipal",
        description: "Digitalización de servicios y mejora de la eficiencia administrativa.",
        status: "Cumplida",
        progress: 100,
        category: "Administración",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Ronald Romero ha destacado por su enfoque empresarial y orientado a resultados. Su experiencia en el sector agroindustrial le ha permitido implementar estrategias efectivas para el desarrollo económico local.",
      strengths: [
        "Conocimiento del sector agroindustrial",
        "Capacidad de gestión eficiente",
        "Enfoque en resultados medibles",
      ],
      weaknesses: [
        "Menor atención a aspectos sociales del desarrollo",
        "Limitada articulación con comunidades indígenas",
      ],
    },
  },

  // Añadiendo nuevos políticos para las provincias que faltan

  // Guayas - Nuevos políticos
  {
    id: "guayas-1",
    name: "Carlos Mendoza Rivadeneira",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "guayas",
    currentPosition: "Asambleísta Provincial",
    experience: 9,
    proposalsFulfilled: 68,
    approvalRating: 72,
    age: 47,
    birthplace: "Guayaquil, Ecuador",
    careerStart: "2014",
    biography:
      "Carlos Mendoza es un político ecuatoriano nacido en Guayaquil. Con formación en Economía y una maestría en Políticas Públicas, ha dedicado su carrera a la promoción del desarrollo económico y social en la provincia de Guayas.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Guayas, enfocado en desarrollo económico y políticas sociales.",
      },
      {
        title: "Director Provincial",
        organization: "Ministerio de Desarrollo Urbano y Vivienda",
        period: "2014 - 2021",
        description: "Coordinó programas de vivienda social y desarrollo urbano en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Plan de Vivienda Social",
        description: "Construcción de viviendas asequibles para familias de bajos recursos.",
        status: "En progreso",
        progress: 65,
        category: "Social",
      },
      {
        title: "Programa de Desarrollo Urbano Sostenible",
        description: "Iniciativas para mejorar la planificación urbana y la calidad de vida en zonas urbanas.",
        status: "En progreso",
        progress: 60,
        category: "Urbanismo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Carlos Mendoza ha destacado por su enfoque técnico y su capacidad para diseñar políticas públicas efectivas. Su gestión se caracteriza por un equilibrio entre desarrollo económico y atención a necesidades sociales.",
      strengths: [
        "Sólida formación en economía y políticas públicas",
        "Capacidad para diseñar programas sociales efectivos",
        "Experiencia en gestión pública",
      ],
      weaknesses: [
        "Ocasionales dificultades para implementar proyectos a gran escala",
        "Limitada presencia en medios de comunicación",
      ],
    },
  },
  {
    id: "guayas-2",
    name: "Sofía Alvarado Cevallos",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "guayas",
    currentPosition: "Concejal Municipal",
    experience: 5,
    proposalsFulfilled: 70,
    approvalRating: 74,
    age: 38,
    birthplace: "Guayaquil, Ecuador",
    careerStart: "2018",
    biography:
      "Sofía Alvarado es una política y empresaria ecuatoriana originaria de Guayaquil. Con formación en Administración de Empresas y experiencia en el sector comercial, ha aplicado su conocimiento empresarial a la gestión pública, enfocándose en el desarrollo económico local y la atracción de inversiones.",
    career: [
      {
        title: "Concejal Municipal",
        organization: "Municipio de Guayaquil",
        period: "2023 - Presente",
        description: "Miembro del Concejo Municipal, enfocada en desarrollo económico y turismo.",
      },
      {
        title: "Directora",
        organization: "Cámara de Comercio de Guayaquil",
        period: "2018 - 2023",
        description: "Lideró iniciativas para fortalecer el comercio local y atraer inversiones.",
      },
    ],
    proposals: [
      {
        title: "Plan de Atracción de Inversiones",
        description: "Estrategias para atraer inversión nacional y extranjera a la ciudad.",
        status: "En progreso",
        progress: 75,
        category: "Economía",
      },
      {
        title: "Programa de Simplificación de Trámites",
        description: "Reducción de burocracia para facilitar la apertura y operación de negocios.",
        status: "Cumplida",
        progress: 100,
        category: "Administración",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 5 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Sofía Alvarado ha destacado por su visión empresarial y su capacidad para promover el desarrollo económico. Su gestión se caracteriza por un enfoque pragmático y orientado a resultados tangibles.",
      strengths: [
        "Sólida experiencia empresarial",
        "Capacidad para atraer inversiones",
        "Enfoque en simplificación administrativa",
      ],
      weaknesses: [
        "Menor atención a aspectos sociales del desarrollo",
        "Ocasionales tensiones con organizaciones comunitarias",
      ],
    },
  },

  // Loja - Nuevos políticos
  {
    id: "loja-1",
    name: "Mariana Jiménez Castillo",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "loja",
    currentPosition: "Asambleísta Provincial",
    experience: 7,
    proposalsFulfilled: 64,
    approvalRating: 69,
    age: 41,
    birthplace: "Loja, Ecuador",
    careerStart: "2016",
    biography:
      "Mariana Jiménez es una política ecuatoriana nacida en Loja. Con formación en Derecho y especialización en Derecho Ambiental, ha dedicado su carrera a la defensa del medio ambiente y el desarrollo sostenible en la provincia de Loja.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Loja, enfocada en medio ambiente y desarrollo sostenible.",
      },
      {
        title: "Directora Provincial",
        organization: "Ministerio del Ambiente",
        period: "2016 - 2021",
        description: "Coordinó programas de conservación y desarrollo sostenible en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Ley de Protección de Ecosistemas Frágiles",
        description: "Marco legal para proteger ecosistemas vulnerables de la región sur.",
        status: "En progreso",
        progress: 55,
        category: "Ambiente",
      },
      {
        title: "Programa de Desarrollo Sostenible",
        description: "Iniciativas para promover actividades económicas compatibles con la conservación.",
        status: "En progreso",
        progress: 65,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Mariana Jiménez ha destacado por su compromiso con el medio ambiente y su capacidad para articular propuestas de desarrollo sostenible. Su gestión se caracteriza por un enfoque de conservación y uso responsable de recursos naturales.",
      strengths: [
        "Sólida formación en derecho ambiental",
        "Capacidad para articular con organizaciones ambientalistas",
        "Compromiso con la sostenibilidad",
      ],
      weaknesses: [
        "Limitada experiencia en gestión económica",
        "Ocasionales tensiones con sectores productivos tradicionales",
      ],
    },
  },
  {
    id: "loja-2",
    name: "Eduardo Valdivieso Mora",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "loja",
    currentPosition: "Prefecto Provincial",
    experience: 8,
    proposalsFulfilled: 72,
    approvalRating: 75,
    age: 46,
    birthplace: "Catamayo, Ecuador",
    careerStart: "2015",
    biography:
      "Eduardo Valdivieso es un político ecuatoriano originario de Catamayo. Con formación en Ingeniería Agrónoma y una maestría en Desarrollo Rural, ha enfocado su carrera en la promoción del desarrollo agrícola y rural en la provincia de Loja.",
    career: [
      {
        title: "Prefecto Provincial",
        organization: "Prefectura de Loja",
        period: "2023 - Presente",
        description: "Lidera la administración provincial con énfasis en desarrollo rural y producción agrícola.",
      },
      {
        title: "Director Provincial",
        organization: "Ministerio de Agricultura",
        period: "2015 - 2023",
        description: "Coordinó programas de desarrollo agrícola y apoyo a pequeños productores.",
      },
    ],
    proposals: [
      {
        title: "Plan de Desarrollo Agrícola",
        description: "Estrategias para potenciar la producción agrícola con enfoque en productos orgánicos.",
        status: "En progreso",
        progress: 70,
        category: "Agricultura",
      },
      {
        title: "Programa de Riego Tecnificado",
        description: "Implementación de sistemas de riego eficientes para zonas agrícolas.",
        status: "En progreso",
        progress: 65,
        category: "Infraestructura",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Eduardo Valdivieso ha destacado por su conocimiento técnico en agricultura y su capacidad para implementar proyectos de desarrollo rural. Su gestión se caracteriza por un enfoque práctico y cercano a los productores.",
      strengths: [
        "Sólida formación técnica en agricultura",
        "Conocimiento profundo de la realidad rural",
        "Capacidad para implementar proyectos productivos",
      ],
      weaknesses: ["Comunicación política mejorable", "Menor atención a temas urbanos y de diversificación económica"],
    },
  },

  // Los Ríos - Nuevos políticos
  {
    id: "los-rios-1",
    name: "Javier Montero Zambrano",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "los-rios",
    currentPosition: "Asambleísta Provincial",
    experience: 8,
    proposalsFulfilled: 66,
    approvalRating: 70,
    age: 44,
    birthplace: "Babahoyo, Ecuador",
    careerStart: "2015",
    biography:
      "Javier Montero es un político ecuatoriano nacido en Babahoyo. Con formación en Ingeniería Agrícola y especialización en Desarrollo Rural, ha dedicado su carrera a la promoción del desarrollo agrícola y la mejora de las condiciones de vida en zonas rurales de Los Ríos.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Los Ríos, enfocado en desarrollo agrícola y rural.",
      },
      {
        title: "Director Provincial",
        organization: "Ministerio de Agricultura",
        period: "2015 - 2021",
        description: "Coordinó programas de desarrollo agrícola y apoyo a pequeños productores.",
      },
    ],
    proposals: [
      {
        title: "Ley de Fomento Agroproductivo",
        description: "Marco legal para fortalecer la producción agrícola y garantizar precios justos.",
        status: "En progreso",
        progress: 60,
        category: "Agricultura",
      },
      {
        title: "Programa de Tecnificación Agrícola",
        description: "Iniciativas para modernizar la producción agrícola y aumentar la productividad.",
        status: "En progreso",
        progress: 65,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Javier Montero ha destacado por su conocimiento técnico en agricultura y su compromiso con el desarrollo rural. Su gestión se caracteriza por un enfoque práctico y cercano a los productores agrícolas.",
      strengths: [
        "Sólida formación técnica en agricultura",
        "Conocimiento profundo de la realidad rural",
        "Capacidad para articular con organizaciones de productores",
      ],
      weaknesses: [
        "Limitada experiencia en gestión de proyectos a gran escala",
        "Ocasionales dificultades para articular con sectores urbanos",
      ],
    },
  },
  {
    id: "los-rios-2",
    name: "Gabriela Moreira Velasco",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "los-rios",
    currentPosition: "Alcaldesa de Quevedo",
    experience: 6,
    proposalsFulfilled: 70,
    approvalRating: 73,
    age: 40,
    birthplace: "Quevedo, Ecuador",
    careerStart: "2017",
    biography:
      "Gabriela Moreira es una política ecuatoriana originaria de Quevedo. Con formación en Administración Pública y una maestría en Gestión de Gobiernos Locales, ha enfocado su carrera en la modernización de la gestión municipal y el desarrollo urbano sostenible.",
    career: [
      {
        title: "Alcaldesa",
        organization: "Municipio de Quevedo",
        period: "2023 - Presente",
        description: "Lidera la administración municipal con énfasis en desarrollo urbano y modernización.",
      },
      {
        title: "Concejal Municipal",
        organization: "Municipio de Quevedo",
        period: "2017 - 2023",
        description: "Miembro del Concejo Municipal, enfocada en planificación urbana y servicios básicos.",
      },
    ],
    proposals: [
      {
        title: "Plan de Ordenamiento Urbano",
        description: "Estrategias para un crecimiento urbano ordenado y sostenible.",
        status: "En progreso",
        progress: 75,
        category: "Urbanismo",
      },
      {
        title: "Programa de Agua Potable y Saneamiento",
        description: "Ampliación de la cobertura de servicios básicos en zonas urbanas y periurbanas.",
        status: "En progreso",
        progress: 65,
        category: "Infraestructura",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Gabriela Moreira ha destacado por su enfoque técnico y su capacidad para implementar proyectos de desarrollo urbano. Su gestión se caracteriza por un equilibrio entre modernización y atención a necesidades básicas.",
      strengths: [
        "Sólida formación en gestión pública",
        "Capacidad para diseñar e implementar proyectos urbanos",
        "Enfoque en resultados tangibles",
      ],
      weaknesses: ["Comunicación política mejorable", "Ocasionales tensiones con sectores populares"],
    },
  },

  // Tungurahua - Nuevos políticos
  {
    id: "tungurahua-1",
    name: "Roberto Sánchez Altamirano",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "tungurahua",
    currentPosition: "Asambleísta Provincial",
    experience: 7,
    proposalsFulfilled: 65,
    approvalRating: 70,
    age: 43,
    birthplace: "Ambato, Ecuador",
    careerStart: "2016",
    biography:
      "Roberto Sánchez es un político ecuatoriano nacido en Ambato. Con formación en Economía y especialización en Desarrollo Local, ha dedicado su carrera a la promoción del desarrollo económico y productivo en la provincia de Tungurahua.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Tungurahua, enfocado en desarrollo económico y productivo.",
      },
      {
        title: "Director Provincial",
        organization: "Ministerio de Producción",
        period: "2016 - 2021",
        description: "Coordinó programas de fomento productivo y apoyo a pequeñas y medianas empresas.",
      },
    ],
    proposals: [
      {
        title: "Ley de Fomento a la Pequeña Industria",
        description: "Marco legal para fortalecer a pequeños productores y artesanos.",
        status: "En progreso",
        progress: 60,
        category: "Economía",
      },
      {
        title: "Programa de Innovación Productiva",
        description: "Iniciativas para modernizar los procesos productivos y aumentar la competitividad.",
        status: "En progreso",
        progress: 65,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Roberto Sánchez ha destacado por su conocimiento en temas económicos y su compromiso con el desarrollo productivo. Su gestión se caracteriza por un enfoque pragmático y orientado a resultados económicos.",
      strengths: [
        "Sólida formación en economía",
        "Conocimiento del sector productivo local",
        "Capacidad para articular con pequeños y medianos empresarios",
      ],
      weaknesses: [
        "Limitada experiencia en gestión de proyectos a gran escala",
        "Ocasionales dificultades para articular con sectores sociales",
      ],
    },
  },
  {
    id: "tungurahua-2",
    name: "Lucía Naranjo Carrillo",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "tungurahua",
    currentPosition: "Prefecta Provincial",
    experience: 8,
    proposalsFulfilled: 72,
    approvalRating: 75,
    age: 45,
    birthplace: "Pelileo, Ecuador",
    careerStart: "2015",
    biography:
      "Lucía Naranjo es una política ecuatoriana originaria de Pelileo. Con formación en Ingeniería Civil y una maestría en Gestión de Proyectos, ha enfocado su carrera en el desarrollo de infraestructura y la gestión eficiente de recursos públicos.",
    career: [
      {
        title: "Prefecta Provincial",
        organization: "Prefectura de Tungurahua",
        period: "2023 - Presente",
        description: "Lidera la administración provincial con énfasis en infraestructura y desarrollo productivo.",
      },
      {
        title: "Directora Provincial",
        organization: "Ministerio de Obras Públicas",
        period: "2015 - 2023",
        description: "Coordinó proyectos de infraestructura vial y obras públicas en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Plan Vial Provincial",
        description: "Construcción y mejoramiento de la red vial secundaria y terciaria de la provincia.",
        status: "En progreso",
        progress: 80,
        category: "Infraestructura",
      },
      {
        title: "Programa de Riego Tecnificado",
        description: "Implementación de sistemas de riego eficientes para zonas agrícolas.",
        status: "En progreso",
        progress: 70,
        category: "Agricultura",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Lucía Naranjo ha destacado por su capacidad técnica y eficiencia en la ejecución de proyectos de infraestructura. Su gestión se caracteriza por un enfoque pragmático y orientado a resultados tangibles.",
      strengths: [
        "Sólida formación técnica en ingeniería",
        "Capacidad de gestión de proyectos complejos",
        "Eficiencia en ejecución presupuestaria",
      ],
      weaknesses: ["Comunicación política mejorable", "Menor atención a aspectos sociales del desarrollo"],
    },
  },

  // Santo Domingo - Nuevos políticos
  {
    id: "santo-domingo-1",
    name: "Marcelo Zambrano Vélez",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "santo-domingo",
    currentPosition: "Asambleísta Provincial",
    experience: 6,
    proposalsFulfilled: 64,
    approvalRating: 68,
    age: 40,
    birthplace: "Santo Domingo, Ecuador",
    careerStart: "2017",
    biography:
      "Marcelo Zambrano es un político ecuatoriano nacido en Santo Domingo. Con formación en Sociología y especialización en Desarrollo Urbano, ha dedicado su carrera a la promoción del desarrollo social y urbano en la provincia de Santo Domingo de los Tsáchilas.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Santo Domingo, enfocado en desarrollo urbano y social.",
      },
      {
        title: "Director Provincial",
        organization: "Ministerio de Desarrollo Urbano y Vivienda",
        period: "2017 - 2021",
        description: "Coordinó programas de vivienda social y desarrollo urbano en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Ley de Ordenamiento Territorial",
        description: "Marco legal para promover un desarrollo urbano ordenado y sostenible.",
        status: "En progreso",
        progress: 55,
        category: "Urbanismo",
      },
      {
        title: "Programa de Vivienda Social",
        description: "Iniciativas para facilitar el acceso a vivienda digna para familias de bajos recursos.",
        status: "En progreso",
        progress: 60,
        category: "Social",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Marcelo Zambrano ha destacado por su compromiso con el desarrollo urbano sostenible y su capacidad para articular demandas sociales. Su gestión se caracteriza por un enfoque participativo y de inclusión social.",
      strengths: [
        "Sólida formación en sociología urbana",
        "Capacidad para articular con organizaciones sociales",
        "Compromiso con la inclusión y la equidad",
      ],
      weaknesses: [
        "Limitada experiencia en gestión económica",
        "Ocasionales dificultades para implementar proyectos de gran escala",
      ],
    },
  },
  {
    id: "santo-domingo-2",
    name: "Verónica Andrade Moreira",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "santo-domingo",
    currentPosition: "Alcaldesa de Santo Domingo",
    experience: 7,
    proposalsFulfilled: 70,
    approvalRating: 73,
    age: 42,
    birthplace: "Santo Domingo, Ecuador",
    careerStart: "2016",
    biography:
      "Verónica Andrade es una política ecuatoriana originaria de Santo Domingo. Con formación en Administración Pública y una maestría en Gestión de Gobiernos Locales, ha enfocado su carrera en la modernización de la gestión municipal y el desarrollo urbano sostenible.",
    career: [
      {
        title: "Alcaldesa",
        organization: "Municipio de Santo Domingo",
        period: "2023 - Presente",
        description: "Lidera la administración municipal con énfasis en desarrollo urbano y modernización.",
      },
      {
        title: "Concejal Municipal",
        organization: "Municipio de Santo Domingo",
        period: "2016 - 2023",
        description: "Miembro del Concejo Municipal, enfocada en planificación urbana y servicios básicos.",
      },
    ],
    proposals: [
      {
        title: "Plan de Movilidad Urbana",
        description: "Estrategias para mejorar el transporte público y la movilidad en la ciudad.",
        status: "En progreso",
        progress: 75,
        category: "Transporte",
      },
      {
        title: "Programa de Regeneración Urbana",
        description: "Recuperación de espacios públicos y mejoramiento de la imagen urbana.",
        status: "En progreso",
        progress: 65,
        category: "Urbanismo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 4 },
        { name: "Comunicación", rating: 3 },
      ],
      detailed:
        "Verónica Andrade ha destacado por su enfoque técnico y su capacidad para implementar proyectos de desarrollo urbano. Su gestión se caracteriza por un equilibrio entre modernización y atención a necesidades básicas.",
      strengths: [
        "Sólida formación en gestión pública",
        "Capacidad para diseñar e implementar proyectos urbanos",
        "Enfoque en resultados tangibles",
      ],
      weaknesses: ["Comunicación política mejorable", "Ocasionales tensiones con sectores populares"],
    },
  },

  // Santa Elena - Nuevos políticos
  {
    id: "santa-elena-1",
    name: "Ricardo Tomalá Reyes",
    image: "/placeholder.svg",
    party: "Movimiento Político Revolución Ciudadana",
    province: "santa-elena",
    currentPosition: "Asambleísta Provincial",
    experience: 6,
    proposalsFulfilled: 62,
    approvalRating: 67,
    age: 39,
    birthplace: "Santa Elena, Ecuador",
    careerStart: "2017",
    biography:
      "Ricardo Tomalá es un político ecuatoriano nacido en Santa Elena. Con formación en Turismo y especialización en Desarrollo Costero, ha dedicado su carrera a la promoción del turismo sostenible y el desarrollo económico en la provincia de Santa Elena.",
    career: [
      {
        title: "Asambleísta Provincial",
        organization: "Asamblea Nacional",
        period: "2021 - Presente",
        description: "Representa a la provincia de Santa Elena, enfocado en turismo y desarrollo costero.",
      },
      {
        title: "Director Provincial",
        organization: "Ministerio de Turismo",
        period: "2017 - 2021",
        description: "Coordinó programas de promoción turística y desarrollo de destinos en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Ley de Fomento al Turismo Sostenible",
        description: "Marco legal para promover un turismo responsable y sostenible.",
        status: "En progreso",
        progress: 55,
        category: "Turismo",
      },
      {
        title: "Programa de Desarrollo Costero",
        description: "Iniciativas para mejorar la infraestructura y servicios en zonas costeras.",
        status: "En progreso",
        progress: 60,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 3 },
        { name: "Transparencia", rating: 4 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Ricardo Tomalá ha destacado por su conocimiento del sector turístico y su compromiso con el desarrollo sostenible. Su gestión se caracteriza por un enfoque de equilibrio entre promoción turística y conservación.",
      strengths: [
        "Conocimiento especializado en turismo",
        "Capacidad para articular con actores del sector",
        "Compromiso con la sostenibilidad",
      ],
      weaknesses: [
        "Limitada experiencia en gestión de proyectos a gran escala",
        "Ocasionales dificultades para articular con otros sectores económicos",
      ],
    },
  },
  {
    id: "santa-elena-2",
    name: "Mónica Panchana Laínez",
    image: "/placeholder.svg",
    party: "Acción Democrática Nacional, ADN",
    province: "santa-elena",
    currentPosition: "Prefecta Provincial",
    experience: 7,
    proposalsFulfilled: 68,
    approvalRating: 72,
    age: 43,
    birthplace: "La Libertad, Ecuador",
    careerStart: "2016",
    biography:
      "Mónica Panchana es una política ecuatoriana originaria de La Libertad. Con formación en Administración de Empresas y una maestría en Gestión Pública, ha enfocado su carrera en el desarrollo económico y la diversificación productiva de la provincia de Santa Elena.",
    career: [
      {
        title: "Prefecta Provincial",
        organization: "Prefectura de Santa Elena",
        period: "2023 - Presente",
        description:
          "Lidera la administración provincial con énfasis en desarrollo económico y diversificación productiva.",
      },
      {
        title: "Directora Provincial",
        organization: "Ministerio de Producción",
        period: "2016 - 2023",
        description: "Coordinó programas de fomento productivo y apoyo a emprendedores en la provincia.",
      },
    ],
    proposals: [
      {
        title: "Plan de Diversificación Económica",
        description: "Estrategias para reducir la dependencia del turismo y desarrollar nuevos sectores productivos.",
        status: "En progreso",
        progress: 70,
        category: "Economía",
      },
      {
        title: "Programa de Apoyo al Emprendimiento",
        description: "Financiamiento y capacitación para nuevos emprendedores de la provincia.",
        status: "En progreso",
        progress: 65,
        category: "Desarrollo",
      },
    ],
    analysis: {
      categories: [
        { name: "Gestión Económica", rating: 4 },
        { name: "Transparencia", rating: 3 },
        { name: "Liderazgo", rating: 4 },
        { name: "Cumplimiento", rating: 3 },
        { name: "Comunicación", rating: 4 },
      ],
      detailed:
        "Mónica Panchana ha destacado por su visión empresarial y su capacidad para promover el desarrollo económico. Su gestión se caracteriza por un enfoque pragmático y orientado a resultados tangibles.",
      strengths: [
        "Sólida formación en administración y gestión",
        "Capacidad para atraer inversiones",
        "Enfoque en diversificación económica",
      ],
      weaknesses: [
        "Ocasionales tensiones con sectores tradicionales",
        "Limitada atención a aspectos ambientales del desarrollo",
      ],
    },
  },

  // Añadir más políticos para las demás provincias siguiendo el mismo formato
  // ...
]

const provincesData: Province[] = [
  {
    id: "pichincha",
    name: "Pichincha",
    capital: "Quito",
    population: 3228233,
    description:
      "Pichincha es una provincia ubicada en el norte de la región interandina de Ecuador. Su capital es Quito, que también es la capital del país. La provincia alberga importantes centros económicos, políticos y culturales.",
  },
  {
    id: "guayas",
    name: "Guayas",
    capital: "Guayaquil",
    population: 4387434,
    description:
      "Guayas es una provincia costera de Ecuador, cuya capital es Guayaquil, la ciudad más poblada del país y su principal puerto. Es un importante centro económico y comercial.",
  },
  {
    id: "azuay",
    name: "Azuay",
    capital: "Cuenca",
    population: 881394,
    description:
      "Azuay es una provincia ubicada en el sur de la región interandina de Ecuador. Su capital es Cuenca, considerada una de las ciudades más bellas del país y declarada Patrimonio Cultural de la Humanidad por la UNESCO.",
  },
  {
    id: "bolivar",
    name: "Bolívar",
    capital: "Guaranda",
    population: 209933,
    description:
      "Bolívar es una provincia ubicada en el centro de Ecuador. Su capital es Guaranda, conocida por su famoso Carnaval. La provincia tiene una economía basada principalmente en la agricultura y ganadería.",
  },
  {
    id: "canar",
    name: "Cañar",
    capital: "Azogues",
    population: 281396,
    description:
      "Cañar es una provincia ubicada en el sur de la región interandina de Ecuador. Su capital es Azogues. La provincia es conocida por sus importantes sitios arqueológicos como Ingapirca y su rica cultura indígena.",
  },
  {
    id: "carchi",
    name: "Carchi",
    capital: "Tulcán",
    population: 186869,
    description:
      "Carchi es una provincia fronteriza ubicada al norte de Ecuador, limitando con Colombia. Su capital es Tulcán. La provincia es conocida por su comercio fronterizo y producción agrícola.",
  },
  {
    id: "cotopaxi",
    name: "Cotopaxi",
    capital: "Latacunga",
    population: 488716,
    description:
      "Cotopaxi es una provincia ubicada en el centro de la región interandina de Ecuador. Su capital es Latacunga. La provincia toma su nombre del volcán Cotopaxi, uno de los volcanes activos más altos del mundo.",
  },
  {
    id: "chimborazo",
    name: "Chimborazo",
    capital: "Riobamba",
    population: 524004,
    description:
      "Chimborazo es una provincia ubicada en el centro de la región interandina de Ecuador. Su capital es Riobamba. La provincia toma su nombre del volcán Chimborazo, el punto más alejado del centro de la Tierra.",
  },
  {
    id: "el-oro",
    name: "El Oro",
    capital: "Machala",
    population: 715751,
    description:
      "El Oro es una provincia costera ubicada en el suroeste de Ecuador. Su capital es Machala, conocida como la 'Capital Bananera del Mundo'. La economía de la provincia se basa en la agricultura, especialmente en la producción de banano, y la minería.",
  },
  {
    id: "esmeraldas",
    name: "Esmeraldas",
    capital: "Esmeraldas",
    population: 643654,
    description:
      "Esmeraldas es una provincia costera ubicada en el noroeste de Ecuador. Su capital es Esmeraldas. La provincia tiene una importante población afroecuatoriana y es conocida por sus playas, manglares y biodiversidad.",
  },
  {
    id: "galapagos",
    name: "Galápagos",
    capital: "Puerto Baquerizo Moreno",
    population: 33042,
    description:
      "Galápagos es una provincia insular ubicada a 1000 km de la costa continental de Ecuador. Su capital es Puerto Baquerizo Moreno. El archipiélago es famoso por su biodiversidad única y fue declarado Patrimonio Natural de la Humanidad por la UNESCO.",
  },
  {
    id: "imbabura",
    name: "Imbabura",
    capital: "Ibarra",
    population: 476257,
    description:
      "Imbabura es una provincia ubicada en el norte de la región interandina de Ecuador. Su capital es Ibarra. La provincia es conocida como la 'Provincia de los Lagos' por sus numerosos lagos y lagunas, y por su rica diversidad cultural.",
  },
  {
    id: "loja",
    name: "Loja",
    capital: "Loja",
    population: 521154,
    description:
      "Loja es una provincia ubicada en el sur de la región interandina de Ecuador. Su capital es Loja. La provincia es conocida por su tradición musical, cultural y por ser cuna de importantes artistas e intelectuales ecuatorianos.",
  },
  {
    id: "los-rios",
    name: "Los Ríos",
    capital: "Babahoyo",
    population: 921763,
    description:
      "Los Ríos es una provincia ubicada en la región litoral de Ecuador. Su capital es Babahoyo. La provincia tiene una economía basada principalmente en la agricultura, especialmente en la producción de arroz, cacao y banano.",
  },
  {
    id: "morona-santiago",
    name: "Morona Santiago",
    capital: "Macas",
    population: 196535,
    description:
      "Morona Santiago es una provincia ubicada en la región amazónica de Ecuador. Su capital es Macas. La provincia es hogar de varias nacionalidades indígenas y posee una gran biodiversidad y recursos naturales.",
  },
  {
    id: "napo",
    name: "Napo",
    capital: "Tena",
    population: 133705,
    description:
      "Napo es una provincia ubicada en la región amazónica de Ecuador. Su capital es Tena. La provincia es conocida por su biodiversidad, sus ríos y cascadas, y por ser un importante destino de turismo ecológico.",
  },
  {
    id: "pastaza",
    name: "Pastaza",
    capital: "Puyo",
    population: 114202,
    description:
      "Pastaza es una provincia ubicada en la región amazónica de Ecuador. Su capital es Puyo. Es la provincia más grande del país en términos de superficie y alberga una gran diversidad biológica y cultural.",
  },
  {
    id: "tungurahua",
    name: "Tungurahua",
    capital: "Ambato",
    population: 590600,
    description:
      "Tungurahua es una provincia ubicada en el centro de la región interandina de Ecuador. Su capital es Ambato. La provincia es conocida por su producción agrícola, artesanal y por la Fiesta de las Flores y las Frutas.",
  },
  {
    id: "zamora-chinchipe",
    name: "Zamora Chinchipe",
    capital: "Zamora",
    population: 120416,
    description:
      "Zamora Chinchipe es una provincia ubicada en la región amazónica de Ecuador. Su capital es Zamora. La provincia es conocida por su riqueza minera, biodiversidad y por la presencia de comunidades indígenas Shuar y Saraguro.",
  },
  {
    id: "sucumbios",
    name: "Sucumbíos",
    capital: "Nueva Loja",
    population: 230503,
    description:
      "Sucumbíos es una provincia ubicada en la región amazónica de Ecuador, en la frontera con Colombia. Su capital es Nueva Loja. La provincia es conocida por su producción petrolera y su biodiversidad.",
  },
  {
    id: "orellana",
    name: "Orellana",
    capital: "Francisco de Orellana",
    population: 161338,
    description:
      "Orellana es una provincia ubicada en la región amazónica de Ecuador. Su capital es Francisco de Orellana (El Coca). La provincia es conocida por su producción petrolera, biodiversidad y por el Parque Nacional Yasuní.",
  },
  {
    id: "santo-domingo",
    name: "Santo Domingo de los Tsáchilas",
    capital: "Santo Domingo",
    population: 458580,
    description:
      "Santo Domingo de los Tsáchilas es una provincia ubicada entre la región litoral y la región interandina de Ecuador. Su capital es Santo Domingo. La provincia es conocida por la nacionalidad indígena Tsáchila y por ser un importante centro comercial y agrícola.",
  },
  {
    id: "santa-elena",
    name: "Santa Elena",
    capital: "Santa Elena",
    population: 401178,
    description:
      "Santa Elena es una provincia costera ubicada en el oeste de Ecuador. Su capital es Santa Elena. La provincia es conocida por sus playas, atractivos turísticos y por la producción de sal y petróleo.",
  },
]

const usersData: User[] = [
  {
    id: "1",
    name: "Admin Principal",
    email: "admin@politimetrica.com",
    role: "admin",
    subscription: "premium",
  },
  {
    id: "2",
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    role: "user",
    subscription: "premium",
  },
  {
    id: "3",
    name: "María López",
    email: "maria@ejemplo.com",
    role: "user",
    subscription: "free",
  },
  {
    id: "4",
    name: "Carlos Rodríguez",
    email: "carlos@ejemplo.com",
    role: "user",
    subscription: "free",
  },
]

// Funciones para obtener datos
export async function getPoliticians(): Promise<Politician[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(politiciansData)
    }, 500)
  })
}

export async function getPoliticianById(id: string): Promise<Politician | undefined> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(politiciansData.find((p) => p.id === id))
    }, 300)
  })
}

export async function getPoliticiansByProvince(provinceId: string): Promise<Politician[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPoliticians = politiciansData.filter((p) => p.province === provinceId)
      console.log(`Encontrados ${filteredPoliticians.length} políticos para la provincia ${provinceId}`)
      resolve(filteredPoliticians)
    }, 500)
  })
}

export async function getProvinceById(id: string): Promise<Province | undefined> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(provincesData.find((p) => p.id === id))
    }, 300)
  })
}

export async function getUsers(): Promise<User[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(usersData)
    }, 500)
  })
}

// Añadir estas nuevas funciones al final del archivo, justo después de la función getUsers()

// Función para obtener todas las provincias
export async function getProvinces(): Promise<Province[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(provincesData)
    }, 300)
  })
}

// Función para filtrar políticos por partido político
export async function getPoliticiansByParty(party: string): Promise<Politician[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPoliticians = politiciansData.filter((p) => p.party.toLowerCase().includes(party.toLowerCase()))
      console.log(`Encontrados ${filteredPoliticians.length} políticos para el partido ${party}`)
      resolve(filteredPoliticians)
    }, 500)
  })
}

// Función para buscar políticos por texto (nombre, partido, provincia, cargo)
export async function searchPoliticians(query: string): Promise<Politician[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      const searchQuery = query.toLowerCase()
      const filteredPoliticians = politiciansData.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.party.toLowerCase().includes(searchQuery) ||
          p.province.toLowerCase().includes(searchQuery) ||
          p.currentPosition.toLowerCase().includes(searchQuery),
      )
      console.log(`Encontrados ${filteredPoliticians.length} políticos para la búsqueda "${query}"`)
      resolve(filteredPoliticians)
    }, 500)
  })
}

// Función para obtener políticos destacados (con mayor aprobación)
export async function getTopPoliticians(limit = 5): Promise<Politician[]> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      const sortedPoliticians = [...politiciansData].sort((a, b) => b.approvalRating - a.approvalRating).slice(0, limit)
      resolve(sortedPoliticians)
    }, 300)
  })
}

// Función para obtener estadísticas generales
export async function getPoliticiansStats(): Promise<{
  totalPoliticians: number
  averageApproval: number
  averageExperience: number
  partiesCount: { [key: string]: number }
  provincesCount: { [key: string]: number }
}> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalPoliticians = politiciansData.length

      const averageApproval = politiciansData.reduce((sum, p) => sum + p.approvalRating, 0) / totalPoliticians

      const averageExperience = politiciansData.reduce((sum, p) => sum + p.experience, 0) / totalPoliticians

      const partiesCount: { [key: string]: number } = {}
      politiciansData.forEach((p) => {
        partiesCount[p.party] = (partiesCount[p.party] || 0) + 1
      })

      const provincesCount: { [key: string]: number } = {}
      politiciansData.forEach((p) => {
        provincesCount[p.province] = (provincesCount[p.province] || 0) + 1
      })

      resolve({
        totalPoliticians,
        averageApproval,
        averageExperience,
        partiesCount,
        provincesCount,
      })
    }, 500)
  })
}

// Función para obtener comparación entre políticos
export async function comparePoliticians(ids: string[]): Promise<{
  politicians: Politician[]
  comparisonData: {
    approvalRating: { [id: string]: number }
    proposalsFulfilled: { [id: string]: number }
    experience: { [id: string]: number }
  }
}> {
  // Simula una llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      const politicians = politiciansData.filter((p) => ids.includes(p.id))

      const comparisonData = {
        approvalRating: {},
        proposalsFulfilled: {},
        experience: {},
      }

      politicians.forEach((p) => {
        comparisonData.approvalRating[p.id] = p.approvalRating
        comparisonData.proposalsFulfilled[p.id] = p.proposalsFulfilled
        comparisonData.experience[p.id] = p.experience
      })

      resolve({
        politicians,
        comparisonData,
      })
    }, 500)
  })
}

// Añadir esta función para obtener los partidos políticos
export async function getParties() {
  // Simulación de datos
  return [
    { id: "ADN", name: "ADN" },
    { id: "PSC", name: "PSC" },
    { id: "ID", name: "ID" },
    { id: "CREO", name: "CREO" },
    { id: "RC", name: "Revolución Ciudadana" },
    { id: "PSP", name: "PSP" },
    { id: "SUMA", name: "SUMA" },
    { id: "Pachakutik", name: "Pachakutik" },
    { id: "Avanza", name: "Avanza" },
    { id: "Construye", name: "Construye" },
  ]
}

// Añadir esta función al archivo existente

export async function saveContactMessage(message: {
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: string
}) {
  try {
    const db = getFirestore()
    const contactRef = collection(db, "contactMessages")
    await addDoc(contactRef, message)
    return { success: true }
  } catch (error) {
    console.error("Error al guardar mensaje de contacto:", error)
    throw error
  }
}
