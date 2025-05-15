import type { Politician, Province, User } from "./types"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Datos de ejemplo para la aplicación
const politiciansData: Politician[] = [
 {
    "id": "1",
    "name": "Daniel Noboa Azin",
    "image": "/daniel-noboa-azin.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "pichincha",
    "currentPosition": "Presidente de la República",
    "experience": 6,
    "proposalsFulfilled": 43,
    "approvalRating": 87,
    "age": 38,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2019",
    "biography": "Empresario y político ecuatoriano-estadounidense, presidente de la República del Ecuador desde el 23 de noviembre de 2023. Asumió el cargo a la edad de 35 años, siendo así el más joven en ser elegido democráticamente.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Juventud",
        "description": "Iniciativa para mejorar juventud en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque empresarial",
        "description": "Iniciativa para mejorar enfoque empresarial en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      },
      {
        "title": "Plan de visión internacional",
        "description": "Iniciativa para mejorar visión internacional en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Educación"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 5
        },
        {
          "name": "Transparencia",
          "rating": 5
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 4
        },
        {
          "name": "Comunicación",
          "rating": 5
        }
      ],
      "detailed": "Daniel Noboa Azin ha mostrado juventud en su gestión política. Su enfoque en visión internacional ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia política.",
      "strengths": [
        "Juventud",
        "enfoque empresarial",
        "visión internacional"
      ],
      "weaknesses": [
        "Falta de experiencia política",
        "gabinete inestable"
      ]
    }
  },
  {
    "id": "2",
    "name": "Luisa González Alcívar",
    "image": "/luisa-gonzález-alcívar.jpg",
    "party": "Revolución Ciudadana",
    "province": "manabí",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 48,
    "birthplace": "Manabí, Ecuador",
    "careerStart": "2018",
    "biography": "Abogada y política ecuatoriana que se desempeñó en diversos cargos durante el gobierno del expresidente Rafael Correa. Fue candidata presidencial en las elecciones de 2023 y en las de 2025, en ambas ocasiones en representación del movimiento Revolución Ciudadana.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Manabí",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Manabí."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Lealtad a su movimiento",
        "description": "Iniciativa para mejorar lealtad a su movimiento en Manabí.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de carisma",
        "description": "Iniciativa para mejorar carisma en Manabí.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      },
      {
        "title": "Plan de oratoria",
        "description": "Iniciativa para mejorar oratoria en Manabí.",
        "status": "En progreso",
        "progress": 50,
        "category": "Educación"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Luisa González Alcívar ha mostrado lealtad a su movimiento en su gestión política. Su enfoque en oratoria ha sido notable, aunque enfrenta desafíos relacionados con asociación con figuras polémicas.",
      "strengths": [
        "Lealtad a su movimiento",
        "carisma",
        "oratoria"
      ],
      "weaknesses": [
        "Asociación con figuras polémicas",
        "discurso repetitivo"
      ]
    }
  },
  {
    "id": "3",
    "name": "Verónica Abad Rojas",
    "image": "/verónica-abad-rojas.jpg",
    "party": "Movimiento AMIGO",
    "province": "azuay",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 30,
    "approvalRating": 60,
    "age": 49,
    "birthplace": "Azuay, Ecuador",
    "careerStart": "2018",
    "biography": "Empresaria y política ecuatoriana. Es la vicepresidente de la República del Ecuador desde el 23 de noviembre de 2023 en el gobierno de Daniel Noboa. Desde el 29 de marzo de 2025, fue suspendida de sus funciones de vicepresidente tras una sentencia del Tribunal Contencioso Electoral en su contra sobre violencia política de género en contra de la canciller Gabriela Sommerfeld.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Azuay",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Azuay."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso social",
        "description": "Iniciativa para mejorar compromiso social en Azuay.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en emprendimientos",
        "description": "Iniciativa para mejorar enfoque en emprendimientos en Azuay.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Verónica Abad Rojas ha mostrado compromiso social en su gestión política. Su enfoque en enfoque en emprendimientos ha sido notable, aunque enfrenta desafíos relacionados con conflictos internos.",
      "strengths": [
        "Compromiso social",
        "enfoque en emprendimientos"
      ],
      "weaknesses": [
        "Conflictos internos",
        "acusaciones legales"
      ]
    }
  },
  {
    "id": "4",
    "name": "Gabriela Sommerfeld Rosero",
    "image": "/gabriela-sommerfeld-rosero.jpg",
    "party": "Partido Desconocido",
    "province": "pichincha",
    "currentPosition": "Ministro",
    "experience": 8,
    "proposalsFulfilled": 34,
    "approvalRating": 68,
    "age": 54,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2017",
    "biography": "Empresaria quiteña, pionera en el sector aéreo, la industria hotelera y en el apoyo a las comunidades, al emprendimiento y al turismo en el Ecuador. Actualmente ministra de Relaciones Exteriores.",
    "career": [
      {
        "title": "Ministro",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia empresarial",
        "description": "Iniciativa para mejorar experiencia empresarial en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de gestión internacional",
        "description": "Iniciativa para mejorar gestión internacional en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Gabriela Sommerfeld Rosero ha mostrado experiencia empresarial en su gestión política. Su enfoque en gestión internacional ha sido notable, aunque enfrenta desafíos relacionados con falta de trayectoria política previa.",
      "strengths": [
        "Experiencia empresarial",
        "gestión internacional"
      ],
      "weaknesses": [
        "Falta de trayectoria política previa"
      ]
    }
  },
  {
    "id": "5",
    "name": "Henry Kronfle Kozhaya",
    "image": "/henry-kronfle-kozhaya.jpg",
    "party": "Partido Social Cristiano",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 8,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 53,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Ingeniero mecánico, empresario y político ecuatoriano de origen árabe. Fue el presidente de la Asamblea Nacional del Ecuador, desde el 17 de noviembre de 2023 hasta el 2 de octubre de 2024, siendo asambleísta nacional, por el Partido Social Cristiano.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia legislativa",
        "description": "Iniciativa para mejorar experiencia legislativa en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo empresarial",
        "description": "Iniciativa para mejorar liderazgo empresarial en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Henry Kronfle Kozhaya ha mostrado experiencia legislativa en su gestión política. Su enfoque en liderazgo empresarial ha sido notable, aunque enfrenta desafíos relacionados con asociación con la vieja política.",
      "strengths": [
        "Experiencia legislativa",
        "liderazgo empresarial"
      ],
      "weaknesses": [
        "Asociación con la vieja política"
      ]
    }
  },
  {
    "id": "6",
    "name": "Andrea González Nader",
    "image": "/andrea-gonzález-nader.jpg",
    "party": "Partido Sociedad Unida Más Acción (SUMA)",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 32,
    "approvalRating": 65,
    "age": 38,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2019",
    "biography": "Activista ambiental, empresaria y figura política ecuatoriana. Fue candidata en las elecciones presidenciales de Ecuador de 2025.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso ambiental",
        "description": "Iniciativa para mejorar compromiso ambiental en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo joven",
        "description": "Iniciativa para mejorar liderazgo joven en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Andrea González Nader ha mostrado compromiso ambiental en su gestión política. Su enfoque en liderazgo joven ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia política.",
      "strengths": [
        "Compromiso ambiental",
        "liderazgo joven"
      ],
      "weaknesses": [
        "Falta de experiencia política"
      ]
    }
  },
  {
    "id": "7",
    "name": "Francesco Tabacchi Rendón",
    "image": "/francesco-tabacchi-rendón.jpg",
    "party": "Construye",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 8,
    "proposalsFulfilled": 33,
    "approvalRating": 66,
    "age": 53,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Empresario y político ecuatoriano, conocido por su trayectoria en el sector agropecuario y su reciente incursión en la política. Ha sido presidente de la Federación de Ganaderos del Ecuador y accionista en varias empresas del sector industrial y de la construcción.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia empresarial",
        "description": "Iniciativa para mejorar experiencia empresarial en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en desarrollo económico",
        "description": "Iniciativa para mejorar enfoque en desarrollo económico en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Francesco Tabacchi Rendón ha mostrado experiencia empresarial en su gestión política. Su enfoque en enfoque en desarrollo económico ha sido notable, aunque enfrenta desafíos relacionados con poca trayectoria política.",
      "strengths": [
        "Experiencia empresarial",
        "enfoque en desarrollo económico"
      ],
      "weaknesses": [
        "Poca trayectoria política"
      ]
    }
  },
  {
    "id": "8",
    "name": "Henry Cucalón Camacho",
    "image": "/henry-cucalón-camacho.jpg",
    "party": "CREO",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 8,
    "proposalsFulfilled": 33,
    "approvalRating": 67,
    "age": 52,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Abogado, catedrático y político ecuatoriano. Fue el ministro de Gobierno del Ecuador, entre febrero y noviembre de 2023 en el gobierno de Guillermo Lasso. Fue asambleísta nacional, entre 2013 y 2021.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia legislativa",
        "description": "Iniciativa para mejorar experiencia legislativa en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de conocimiento jurídico",
        "description": "Iniciativa para mejorar conocimiento jurídico en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Henry Cucalón Camacho ha mostrado experiencia legislativa en su gestión política. Su enfoque en conocimiento jurídico ha sido notable, aunque enfrenta desafíos relacionados con asociación con gobiernos anteriores.",
      "strengths": [
        "Experiencia legislativa",
        "conocimiento jurídico"
      ],
      "weaknesses": [
        "Asociación con gobiernos anteriores"
      ]
    }
  },
  {
    "id": "9",
    "name": "Yaku Pérez Guartambel",
    "image": "/yaku-pérez-guartambel.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "azuay",
    "currentPosition": "Asambleísta Nacional",
    "experience": 8,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 56,
    "birthplace": "Azuay, Ecuador",
    "careerStart": "2017",
    "biography": "Político y abogado ecuatoriano. Fue presidente de la Confederación de Pueblos de la Nacionalidad Kichwa (ECUARUNARI) de 2013 a 2019.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Azuay",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Azuay."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensa ambiental",
        "description": "Iniciativa para mejorar defensa ambiental en Azuay.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de conexión con pueblos originarios",
        "description": "Iniciativa para mejorar conexión con pueblos originarios en Azuay.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Yaku Pérez Guartambel ha mostrado defensa ambiental en su gestión política. Su enfoque en conexión con pueblos originarios ha sido notable, aunque enfrenta desafíos relacionados con radicalismo.",
      "strengths": [
        "Defensa ambiental",
        "conexión con pueblos originarios"
      ],
      "weaknesses": [
        "Radicalismo",
        "alejamiento de alianzas políticas"
      ]
    }
  },
  {
    "id": "10",
    "name": "Viviana Veloz Ramírez",
    "image": "/viviana-veloz-ramírez.jpg",
    "party": "Revolución Ciudadana",
    "province": "santo domingo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 41,
    "birthplace": "Santo Domingo, Ecuador",
    "careerStart": "2018",
    "biography": "Política ecuatoriana. Es la actual presidenta de la Asamblea Nacional del Ecuador, desde el 2 de octubre de 2024. Es conocida por haber sido ponente en el juicio político de Guillermo Lasso.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Santo Domingo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Santo Domingo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo legislativo",
        "description": "Iniciativa para mejorar liderazgo legislativo en Santo Domingo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia política",
        "description": "Iniciativa para mejorar experiencia política en Santo Domingo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Viviana Veloz Ramírez ha mostrado liderazgo legislativo en su gestión política. Su enfoque en experiencia política ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Liderazgo legislativo",
        "experiencia política"
      ],
      "weaknesses": [
        "Asociación con el correísmo"
      ]
    }
  },
  {
    "id": "11",
    "name": "Gabriela Rivadeneira Burbano",
    "image": "/gabriela-rivadeneira-burbano.jpg",
    "party": "Revolución Ciudadana",
    "province": "imbabura",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 68,
    "age": 42,
    "birthplace": "Imbabura, Ecuador",
    "careerStart": "2018",
    "biography": "Gabriela Rivadeneira es una política ecuatoriana que ocupó el cargo de asambleísta nacional y fue presidenta de la Asamblea Nacional de Ecuador entre 2013 y 2021. También ha sido gobernadora de Imbabura y viceprefecta provincial.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Imbabura",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Imbabura."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo juvenil",
        "description": "Iniciativa para mejorar liderazgo juvenil en Imbabura.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia legislativa",
        "description": "Iniciativa para mejorar experiencia legislativa en Imbabura.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Gabriela Rivadeneira Burbano ha mostrado liderazgo juvenil en su gestión política. Su enfoque en experiencia legislativa ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Liderazgo juvenil",
        "experiencia legislativa"
      ],
      "weaknesses": [
        "Asociación con el correísmo",
        "críticas por su gestión"
      ]
    }
  },
  {
    "id": "12",
    "name": "María Fernanda Espinosa Garcés",
    "image": "/maría-fernanda-espinosa-garcés.jpg",
    "party": "Izquierda Democrática",
    "province": "pichincha",
    "currentPosition": "Ministro",
    "experience": 9,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 61,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2016",
    "biography": "María Fernanda Espinosa es una lingüista, poetisa, política y diplomática ecuatoriana. Ha sido ministra de Relaciones Exteriores en dos ocasiones, ministra de Defensa Nacional y presidenta de la Asamblea General de las Naciones Unidas.",
    "career": [
      {
        "title": "Ministro",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Amplia experiencia diplomática",
        "description": "Iniciativa para mejorar amplia experiencia diplomática en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en equidad de género",
        "description": "Iniciativa para mejorar enfoque en equidad de género en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "María Fernanda Espinosa Garcés ha mostrado amplia experiencia diplomática en su gestión política. Su enfoque en enfoque en equidad de género ha sido notable, aunque enfrenta desafíos relacionados con críticas por su gestión en la onu.",
      "strengths": [
        "Amplia experiencia diplomática",
        "enfoque en equidad de género"
      ],
      "weaknesses": [
        "Críticas por su gestión en la ONU",
        "falta de conexión con la política local"
      ]
    }
  },
  {
    "id": "13",
    "name": "Ana Belén Cordero Cuesta",
    "image": "/ana-belén-cordero-cuesta.jpg",
    "party": "Construye",
    "province": "pichincha",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 33,
    "approvalRating": 66,
    "age": 41,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2018",
    "biography": "Ana Belén Cordero es una abogada y política ecuatoriana. Se desempeñó como asambleísta nacional entre 2021 y 2023 y actualmente es la secretaria de Política Pública Anticorrupción del Ecuador.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la transparencia",
        "description": "Iniciativa para mejorar compromiso con la transparencia en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de formación académica sólida",
        "description": "Iniciativa para mejorar formación académica sólida en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Ana Belén Cordero Cuesta ha mostrado compromiso con la transparencia en su gestión política. Su enfoque en formación académica sólida ha sido notable, aunque enfrenta desafíos relacionados con asociación con el gobierno de lasso.",
      "strengths": [
        "Compromiso con la transparencia",
        "formación académica sólida"
      ],
      "weaknesses": [
        "Asociación con el gobierno de Lasso",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "14",
    "name": "Lucio Gutiérrez Borbúa",
    "image": "/lucio-gutiérrez-borbúa.jpg",
    "party": "Partido Sociedad Unida Más Acción (SUMA)",
    "province": "pichincha",
    "currentPosition": "Asambleísta Nacional",
    "experience": 9,
    "proposalsFulfilled": 31,
    "approvalRating": 62,
    "age": 68,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2016",
    "biography": "Lucio Gutiérrez es un político y exmilitar ecuatoriano. Fue presidente del Ecuador entre 2003 y 2005 y actualmente es asambleísta nacional desde noviembre de 2023.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en liderazgo",
        "description": "Iniciativa para mejorar experiencia en liderazgo en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de conocimiento del sistema político",
        "description": "Iniciativa para mejorar conocimiento del sistema político en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Lucio Gutiérrez Borbúa ha mostrado experiencia en liderazgo en su gestión política. Su enfoque en conocimiento del sistema político ha sido notable, aunque enfrenta desafíos relacionados con historial de destitución.",
      "strengths": [
        "Experiencia en liderazgo",
        "conocimiento del sistema político"
      ],
      "weaknesses": [
        "Historial de destitución",
        "polarización política"
      ]
    }
  },
  {
    "id": "15",
    "name": "Blanca López Castro",
    "image": "/blanca-lópez-castro.jpg",
    "party": "Revolución Ciudadana",
    "province": "guayas",
    "currentPosition": "Concejal",
    "experience": 5,
    "proposalsFulfilled": 32,
    "approvalRating": 64,
    "age": 25,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2020",
    "biography": "Blanca López es una política ecuatoriana y actual vicealcaldesa de Guayaquil desde mayo de 2023. Ha militado en el Movimiento Revolución Ciudadana y fue asambleísta alterna por la provincia del Guayas en 2022.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Juventud",
        "description": "Iniciativa para mejorar juventud en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en políticas sociales",
        "description": "Iniciativa para mejorar enfoque en políticas sociales en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Blanca López Castro ha mostrado juventud en su gestión política. Su enfoque en enfoque en políticas sociales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia política.",
      "strengths": [
        "Juventud",
        "enfoque en políticas sociales"
      ],
      "weaknesses": [
        "Falta de experiencia política",
        "críticas por su juventud"
      ]
    }
  },
  {
    "id": "16",
    "name": "Fernando Jaramillo",
    "image": "/fernando-jaramillo.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "imbabura",
    "currentPosition": "Asambleísta Provincial",
    "experience": 8,
    "proposalsFulfilled": 32,
    "approvalRating": 65,
    "age": 50,
    "birthplace": "Imbabura, Ecuador",
    "careerStart": "2017",
    "biography": "Fernando Jaramillo es un político ecuatoriano que representa a la provincia de Imbabura en la Asamblea Nacional desde 2025 por el partido Acción Democrática Nacional.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Imbabura",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Imbabura."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con el desarrollo regional",
        "description": "Iniciativa para mejorar compromiso con el desarrollo regional en Imbabura.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia legislativa",
        "description": "Iniciativa para mejorar experiencia legislativa en Imbabura.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Fernando Jaramillo ha mostrado compromiso con el desarrollo regional en su gestión política. Su enfoque en experiencia legislativa ha sido notable, aunque enfrenta desafíos relacionados con poca visibilidad nacional.",
      "strengths": [
        "Compromiso con el desarrollo regional",
        "experiencia legislativa"
      ],
      "weaknesses": [
        "Poca visibilidad nacional",
        "críticas por su gestión local"
      ]
    }
  },
  {
    "id": "17",
    "name": "Pamela Aguirre",
    "image": "/pamela-aguirre.jpg",
    "party": "Revolución Ciudadana",
    "province": "imbabura",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 33,
    "approvalRating": 67,
    "age": 40,
    "birthplace": "Imbabura, Ecuador",
    "careerStart": "2018",
    "biography": "Pamela Aguirre es una política ecuatoriana que representa a la provincia de Imbabura en la Asamblea Nacional desde 2025 por el Movimiento Revolución Ciudadana.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Imbabura",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Imbabura."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensora de los derechos humanos",
        "description": "Iniciativa para mejorar defensora de los derechos humanos en Imbabura.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia en políticas sociales",
        "description": "Iniciativa para mejorar experiencia en políticas sociales en Imbabura.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Pamela Aguirre ha mostrado defensora de los derechos humanos en su gestión política. Su enfoque en experiencia en políticas sociales ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Defensora de los derechos humanos",
        "experiencia en políticas sociales"
      ],
      "weaknesses": [
        "Asociación con el correísmo",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "18",
    "name": "Jorge Guevara",
    "image": "/jorge-guevara.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "loja",
    "currentPosition": "Asambleísta Provincial",
    "experience": 8,
    "proposalsFulfilled": 32,
    "approvalRating": 64,
    "age": 55,
    "birthplace": "Loja, Ecuador",
    "careerStart": "2017",
    "biography": "Jorge Guevara es un político ecuatoriano que representa a la provincia de Loja en la Asamblea Nacional desde 2025 por el partido Acción Democrática Nacional.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Loja",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Loja."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con el desarrollo regional",
        "description": "Iniciativa para mejorar compromiso con el desarrollo regional en Loja.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia legislativa",
        "description": "Iniciativa para mejorar experiencia legislativa en Loja.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Jorge Guevara ha mostrado compromiso con el desarrollo regional en su gestión política. Su enfoque en experiencia legislativa ha sido notable, aunque enfrenta desafíos relacionados con poca visibilidad nacional.",
      "strengths": [
        "Compromiso con el desarrollo regional",
        "experiencia legislativa"
      ],
      "weaknesses": [
        "Poca visibilidad nacional",
        "críticas por su gestión local"
      ]
    }
  },
  {
    "id": "19",
    "name": "Anelisse Jaramillo",
    "image": "/anelisse-jaramillo.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "loja",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 31,
    "approvalRating": 63,
    "age": 45,
    "birthplace": "Loja, Ecuador",
    "careerStart": "2018",
    "biography": "Anelisse Jaramillo es una política ecuatoriana que representa a la provincia de Loja en la Asamblea Nacional desde 2025 por el partido Acción Democrática Nacional.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Loja",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Loja."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque en políticas sociales",
        "description": "Iniciativa para mejorar enfoque en políticas sociales en Loja.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de compromiso con la educación",
        "description": "Iniciativa para mejorar compromiso con la educación en Loja.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Anelisse Jaramillo ha mostrado enfoque en políticas sociales en su gestión política. Su enfoque en compromiso con la educación ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia política.",
      "strengths": [
        "Enfoque en políticas sociales",
        "compromiso con la educación"
      ],
      "weaknesses": [
        "Falta de experiencia política",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "20",
    "name": "Verónica Íñiguez",
    "image": "/verónica-íñiguez.jpg",
    "party": "Revolución Ciudadana",
    "province": "loja",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 33,
    "approvalRating": 66,
    "age": 43,
    "birthplace": "Loja, Ecuador",
    "careerStart": "2018",
    "biography": "Verónica Íñiguez es una política ecuatoriana que representa a la provincia de Loja en la Asamblea Nacional desde 2025 por el Movimiento Revolución Ciudadana.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Loja",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Loja."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensora de los derechos humanos",
        "description": "Iniciativa para mejorar defensora de los derechos humanos en Loja.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia en políticas sociales",
        "description": "Iniciativa para mejorar experiencia en políticas sociales en Loja.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Verónica Íñiguez ha mostrado defensora de los derechos humanos en su gestión política. Su enfoque en experiencia en políticas sociales ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Defensora de los derechos humanos",
        "experiencia en políticas sociales"
      ],
      "weaknesses": [
        "Asociación con el correísmo",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "21",
    "name": "Viviana Veloz",
    "image": "/viviana-veloz.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 43,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2018",
    "biography": "Viviana Veloz es una política ecuatoriana que actualmente preside la Asamblea Nacional. Inició su trayectoria política como candidata a concejal rural de Santo Domingo, aunque no ganó. En 2021, llegó a la Asamblea con la Revolución Ciudadana, periodo que se vio interrumpido en 2023 con la muerte cruzada del entonces presidente Guillermo Lasso. Justamente, Veloz fue una de las impulsoras del juicio político a Lasso, lo que le dio más notoriedad. Ganó las elecciones anticipadas y en un inicio se ubicó como vicepresidenta del Parlamento. Pero con la renuncia de Henry Kronfle, ella ahora comanda la Asamblea.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo",
        "description": "Iniciativa para mejorar liderazgo en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de capacidad de negociación",
        "description": "Iniciativa para mejorar capacidad de negociación en Tungurahua.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Viviana Veloz ha mostrado liderazgo en su gestión política. Su enfoque en capacidad de negociación ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia ejecutiva.",
      "strengths": [
        "Liderazgo",
        "capacidad de negociación"
      ],
      "weaknesses": [
        "Falta de experiencia ejecutiva",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "22",
    "name": "Xavier Lasso",
    "image": "/xavier-lasso.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 32,
    "approvalRating": 65,
    "age": 45,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2018",
    "biography": "Xavier Lasso es un periodista guayaquileño y hermano del expresidente Guillermo Lasso. Se encuentra políticamente alineado con el correísmo. Tuvo un programa de entrevistas en Ecuador TV e incluso se desempeñó como Embajador ante las Naciones Unidas.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Conexión con la política internacional",
        "description": "Iniciativa para mejorar conexión con la política internacional en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia mediática",
        "description": "Iniciativa para mejorar experiencia mediática en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Xavier Lasso ha mostrado conexión con la política internacional en su gestión política. Su enfoque en experiencia mediática ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Conexión con la política internacional",
        "experiencia mediática"
      ],
      "weaknesses": [
        "Asociación con el correísmo",
        "falta de experiencia legislativa"
      ]
    }
  },
  {
    "id": "23",
    "name": "Paola Cabezas",
    "image": "/paola-cabezas.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 68,
    "age": 40,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2018",
    "biography": "Paola Cabezas es una política ecuatoriana que actualmente es asambleísta nacional por la provincia de Santo Domingo de los Tsáchilas. Fue una de las actuales asambleístas que logró la reelección y es una de las más participativas en la bancada de la Revolución Ciudadana. Se hizo una figura conocida a escala nacional por ser periodista del canal RTS. En 2009 pasó a EcuadorTV. Para el 2010 comenzó a trabajar en el gobierno de Rafael Correa, como en la Secretaría Nacional de Gestión Política y en la Secretaría de Pueblos. Desde el 2013 hasta el 2016 fue gobernadora de Esmeraldas y participó en el Comité de Reconstrucción de Esmeraldas, luego del terremoto del 2016.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en gestión pública",
        "description": "Iniciativa para mejorar experiencia en gestión pública en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque social",
        "description": "Iniciativa para mejorar enfoque social en Tungurahua.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Paola Cabezas ha mostrado experiencia en gestión pública en su gestión política. Su enfoque en enfoque social ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Experiencia en gestión pública",
        "enfoque social"
      ],
      "weaknesses": [
        "Asociación con el correísmo",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "24",
    "name": "Raúl Chávez",
    "image": "/raúl-chávez.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 31,
    "approvalRating": 62,
    "age": 42,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2018",
    "biography": "Raúl Chávez es un político ecuatoriano que ha sido candidato a la Asamblea Nacional por la provincia de Santo Domingo de los Tsáchilas. Es conocido por su vinculación con la Revolución Ciudadana y su participación en diversas iniciativas sociales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la comunidad",
        "description": "Iniciativa para mejorar compromiso con la comunidad en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en políticas sociales",
        "description": "Iniciativa para mejorar enfoque en políticas sociales en Tungurahua.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Raúl Chávez ha mostrado compromiso con la comunidad en su gestión política. Su enfoque en enfoque en políticas sociales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia legislativa.",
      "strengths": [
        "Compromiso con la comunidad",
        "enfoque en políticas sociales"
      ],
      "weaknesses": [
        "Falta de experiencia legislativa",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "25",
    "name": "Jaime Estrada",
    "image": "/jaime-estrada.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 30,
    "approvalRating": 60,
    "age": 47,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2018",
    "biography": "Jaime Estrada es un político ecuatoriano que ha sido candidato a la Asamblea Nacional por la provincia de Santo Domingo de los Tsáchilas. Anteriormente, tuvo un paso por la dirigencia deportiva y es conocido por su vinculación con la Revolución Ciudadana.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en gestión deportiva",
        "description": "Iniciativa para mejorar experiencia en gestión deportiva en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en desarrollo regional",
        "description": "Iniciativa para mejorar enfoque en desarrollo regional en Tungurahua.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Jaime Estrada ha mostrado experiencia en gestión deportiva en su gestión política. Su enfoque en enfoque en desarrollo regional ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia legislativa.",
      "strengths": [
        "Experiencia en gestión deportiva",
        "enfoque en desarrollo regional"
      ],
      "weaknesses": [
        "Falta de experiencia legislativa",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "26",
    "name": "Lucía Jaramillo",
    "image": "/lucía-jaramillo.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 30,
    "approvalRating": 61,
    "age": 38,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2019",
    "biography": "Lucía Jaramillo es una política ecuatoriana que ha sido candidata a la Asamblea Nacional por la provincia de Santo Domingo de los Tsáchilas. Es conocida por su vinculación con la Revolución Ciudadana y su participación en diversas iniciativas sociales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la comunidad",
        "description": "Iniciativa para mejorar compromiso con la comunidad en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en políticas sociales",
        "description": "Iniciativa para mejorar enfoque en políticas sociales en Tungurahua.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Lucía Jaramillo ha mostrado compromiso con la comunidad en su gestión política. Su enfoque en enfoque en políticas sociales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia legislativa.",
      "strengths": [
        "Compromiso con la comunidad",
        "enfoque en políticas sociales"
      ],
      "weaknesses": [
        "Falta de experiencia legislativa",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "27",
    "name": "Andrés Gushmer",
    "image": "/andrés-gushmer.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 31,
    "approvalRating": 63,
    "age": 45,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2018",
    "biography": "Andrés Gushmer es un político ecuatoriano que ha sido candidato a la Asamblea Nacional por la provincia de Santo Domingo de los Tsáchilas. Es conocido por su vinculación con la Revolución Ciudadana y su participación en diversas iniciativas sociales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la comunidad",
        "description": "Iniciativa para mejorar compromiso con la comunidad en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en políticas sociales",
        "description": "Iniciativa para mejorar enfoque en políticas sociales en Tungurahua.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Andrés Gushmer ha mostrado compromiso con la comunidad en su gestión política. Su enfoque en enfoque en políticas sociales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia legislativa.",
      "strengths": [
        "Compromiso con la comunidad",
        "enfoque en políticas sociales"
      ],
      "weaknesses": [
        "Falta de experiencia legislativa",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "28",
    "name": "Francesco Tabacchi",
    "image": "/francesco-tabacchi.jpg",
    "party": "Construye",
    "province": "guayas",
    "currentPosition": "Prefecto",
    "experience": 8,
    "proposalsFulfilled": 32,
    "approvalRating": 65,
    "age": 53,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Francesco Tabacchi es un empresario y político ecuatoriano, conocido por su trayectoria en el sector agropecuario y su reciente incursión en la política. Ha sido presidente de la Federación de Ganaderos del Ecuador y accionista en varias empresas del sector industrial y de la construcción. Su carrera política comenzó en 2023 con su candidatura a la Prefectura del Guayas y su posterior nombramiento como gobernador de la provincia. En 2024, se postuló a la presidencia de Ecuador por el movimiento CREO, enfocando su campaña en temas de seguridad, educación y desarrollo económico.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en el sector agropecuario",
        "description": "Iniciativa para mejorar experiencia en el sector agropecuario en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en desarrollo económico",
        "description": "Iniciativa para mejorar enfoque en desarrollo económico en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Francesco Tabacchi ha mostrado experiencia en el sector agropecuario en su gestión política. Su enfoque en enfoque en desarrollo económico ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia política.",
      "strengths": [
        "Experiencia en el sector agropecuario",
        "enfoque en desarrollo económico"
      ],
      "weaknesses": [
        "Falta de experiencia política",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "29",
    "name": "Anabella Azín",
    "image": "/anabella-azín.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 9,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 60,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2016",
    "biography": "Anabella Azín es una política ecuatoriana que actualmente es asambleísta nacional por la provincia de Guayas. Tiene experiencia en la política legislativa. Tuvo una fugaz participación como diputada nacional por Guayas, del 5 de enero al 29 de noviembre del 2007, cuando se instaló la Asamblea Constituyente, del que formó parte entre el 29 de noviembre de 2007 hasta el 25 de octubre del 2008. El 14 de mayo próximo, asumirá como asambleísta nacional. Y, por haber obtenido la mayor cantidad de votos el 9 de febrero del 2025, deberá ser la presidenta. Como esposa de Álvaro Noboa, lo acompañó en sus seis postulaciones para la Presidencia de Ecuador.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia legislativa",
        "description": "Iniciativa para mejorar experiencia legislativa en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo político",
        "description": "Iniciativa para mejorar liderazgo político en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Anabella Azín ha mostrado experiencia legislativa en su gestión política. Su enfoque en liderazgo político ha sido notable, aunque enfrenta desafíos relacionados con asociación con el correísmo.",
      "strengths": [
        "Experiencia legislativa",
        "liderazgo político"
      ],
      "weaknesses": [
        "Asociación con el correísmo",
        "críticas por su postura política"
      ]
    }
  },
  {
    "id": "30",
    "name": "César Rodríguez",
    "image": "/césar-rodríguez.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "azuay",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 45,
    "birthplace": "Azuay, Ecuador",
    "careerStart": "2018",
    "biography": "César Rodríguez es un político ecuatoriano que actualmente ocupa el cargo de Asambleísta Nacional por la provincia de Pichincha. Es conocido por su trabajo en áreas de fiscalización y su vinculación con el movimiento Revolución Ciudadana. Durante su mandato en la Asamblea, se ha destacado por su posición firme en temas sociales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Azuay",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Azuay."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la transparencia",
        "description": "Iniciativa para mejorar compromiso con la transparencia en Azuay.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en fiscalización",
        "description": "Iniciativa para mejorar enfoque en fiscalización en Azuay.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "César Rodríguez ha mostrado compromiso con la transparencia en su gestión política. Su enfoque en enfoque en fiscalización ha sido notable, aunque enfrenta desafíos relacionados con críticas por su postura política.",
      "strengths": [
        "Compromiso con la transparencia",
        "enfoque en fiscalización"
      ],
      "weaknesses": [
        "Críticas por su postura política",
        "falta de experiencia ejecutiva"
      ]
    }
  },
  {
    "id": "31",
    "name": "Piedad Jaramillo",
    "image": "/piedad-jaramillo.jpg",
    "party": "Partido Social Cristiano",
    "province": "chimborazo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 40,
    "birthplace": "Chimborazo, Ecuador",
    "careerStart": "2018",
    "biography": "Piedad Jaramillo es una política y activista ecuatoriana vinculada a la lucha por los derechos de las mujeres y la infancia. Fue electa como asambleísta provincial por la provincia de Loja y se ha destacado por sus intervenciones sobre temas de derechos humanos y educación.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Chimborazo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Chimborazo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso social",
        "description": "Iniciativa para mejorar compromiso social en Chimborazo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en derechos humanos",
        "description": "Iniciativa para mejorar enfoque en derechos humanos en Chimborazo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Piedad Jaramillo ha mostrado compromiso social en su gestión política. Su enfoque en enfoque en derechos humanos ha sido notable, aunque enfrenta desafíos relacionados con críticas por no tomar postura clara en temas económicos.",
      "strengths": [
        "Compromiso social",
        "enfoque en derechos humanos"
      ],
      "weaknesses": [
        "Críticas por no tomar postura clara en temas económicos"
      ]
    }
  },
  {
    "id": "32",
    "name": "Pedro Aguilera",
    "image": "/pedro-aguilera.jpg",
    "party": "Construye",
    "province": "chimborazo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 46,
    "birthplace": "Chimborazo, Ecuador",
    "careerStart": "2018",
    "biography": "Pedro Aguilera es un asambleísta ecuatoriano que actualmente representa a la provincia de Loja. Es conocido por su trabajo en la Ley de Minería y su vinculación con el sector agropecuario. Durante su mandato, ha buscado mejorar la infraestructura rural en su provincia.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Chimborazo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Chimborazo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en legislación",
        "description": "Iniciativa para mejorar experiencia en legislación en Chimborazo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en desarrollo rural",
        "description": "Iniciativa para mejorar enfoque en desarrollo rural en Chimborazo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Pedro Aguilera ha mostrado experiencia en legislación en su gestión política. Su enfoque en enfoque en desarrollo rural ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en temas urbanos.",
      "strengths": [
        "Experiencia en legislación",
        "enfoque en desarrollo rural"
      ],
      "weaknesses": [
        "Falta de experiencia en temas urbanos",
        "críticas por su visión conservadora"
      ]
    }
  },
  {
    "id": "33",
    "name": "María Cevallos",
    "image": "/maría-cevallos.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "carchi",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 36,
    "approvalRating": 73,
    "age": 39,
    "birthplace": "Carchi, Ecuador",
    "careerStart": "2019",
    "biography": "María Cevallos es una política ecuatoriana que actualmente es asambleísta nacional por la provincia de Azuay. Con una trayectoria en la política educativa, se ha destacado por su lucha por el mejoramiento del sistema educativo y la accesibilidad a la educación superior.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Carchi",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Carchi."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la educación",
        "description": "Iniciativa para mejorar compromiso con la educación en Carchi.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en políticas inclusivas",
        "description": "Iniciativa para mejorar enfoque en políticas inclusivas en Carchi.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "María Cevallos ha mostrado compromiso con la educación en su gestión política. Su enfoque en enfoque en políticas inclusivas ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en temas de salud.",
      "strengths": [
        "Compromiso con la educación",
        "enfoque en políticas inclusivas"
      ],
      "weaknesses": [
        "Falta de experiencia en temas de salud",
        "críticas por su enfoque teórico"
      ]
    }
  },
  {
    "id": "34",
    "name": "Carlos Becerra",
    "image": "/carlos-becerra.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "carchi",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 42,
    "birthplace": "Carchi, Ecuador",
    "careerStart": "2018",
    "biography": "Carlos Becerra es un político ecuatoriano, miembro del movimiento Revolución Ciudadana. Ha sido asambleísta por la provincia de Azuay y se ha distinguido por su trabajo en el área de las políticas ambientales y su compromiso con la conservación de los recursos naturales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Carchi",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Carchi."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque ecológico",
        "description": "Iniciativa para mejorar enfoque ecológico en Carchi.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de capacidad de negociación",
        "description": "Iniciativa para mejorar capacidad de negociación en Carchi.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Carlos Becerra ha mostrado enfoque ecológico en su gestión política. Su enfoque en capacidad de negociación ha sido notable, aunque enfrenta desafíos relacionados con críticas por falta de experiencia en temas de economía.",
      "strengths": [
        "Enfoque ecológico",
        "capacidad de negociación"
      ],
      "weaknesses": [
        "Críticas por falta de experiencia en temas de economía"
      ]
    }
  },
  {
    "id": "35",
    "name": "Patricia Jaramillo",
    "image": "/patricia-jaramillo.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "chimborazo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 38,
    "birthplace": "Chimborazo, Ecuador",
    "careerStart": "2019",
    "biography": "Patricia Jaramillo es una asambleísta nacional ecuatoriana que ha sido electa por la provincia de Manabí. Se ha centrado en temas de desarrollo rural y bienestar social, siendo una de las figuras más representativas del movimiento Revolución Ciudadana.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Chimborazo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Chimborazo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme en su lucha por los derechos de los pueblos rurales",
        "description": "Iniciativa para mejorar firme en su lucha por los derechos de los pueblos rurales en Chimborazo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo en áreas sociales",
        "description": "Iniciativa para mejorar liderazgo en áreas sociales en Chimborazo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Patricia Jaramillo ha mostrado firme en su lucha por los derechos de los pueblos rurales en su gestión política. Su enfoque en liderazgo en áreas sociales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en gestión económica.",
      "strengths": [
        "Firme en su lucha por los derechos de los pueblos rurales",
        "liderazgo en áreas sociales"
      ],
      "weaknesses": [
        "Falta de experiencia en gestión económica",
        "críticas por su enfoque ideológico"
      ]
    }
  },
  {
    "id": "36",
    "name": "Francisco Vera",
    "image": "/francisco-vera.jpg",
    "party": "Construye",
    "province": "chimborazo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 68,
    "age": 43,
    "birthplace": "Chimborazo, Ecuador",
    "careerStart": "2018",
    "biography": "Francisco Vera es un asambleísta ecuatoriano de la provincia de Manabí. Ha trabajado en la reforma de la Ley de Minería y ha sido un defensor de la transparencia en la gestión pública. Además, se ha centrado en promover la infraestructura y la seguridad en las zonas rurales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Chimborazo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Chimborazo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en leyes mineras",
        "description": "Iniciativa para mejorar experiencia en leyes mineras en Chimborazo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en seguridad rural",
        "description": "Iniciativa para mejorar enfoque en seguridad rural en Chimborazo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Francisco Vera ha mostrado experiencia en leyes mineras en su gestión política. Su enfoque en enfoque en seguridad rural ha sido notable, aunque enfrenta desafíos relacionados con críticas por su falta de trabajo en educación.",
      "strengths": [
        "Experiencia en leyes mineras",
        "enfoque en seguridad rural"
      ],
      "weaknesses": [
        "Críticas por su falta de trabajo en educación",
        "postura conservadora"
      ]
    }
  },
  {
    "id": "37",
    "name": "Cynthia Viteri",
    "image": "/cynthia-viteri.jpg",
    "party": "Construye",
    "province": "guayas",
    "currentPosition": "Concejal",
    "experience": 8,
    "proposalsFulfilled": 40,
    "approvalRating": 80,
    "age": 56,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Cynthia Viteri es una política ecuatoriana, actual alcaldesa de Guayaquil. Fue la primera mujer en asumir la alcaldía de esta ciudad. Durante su carrera, se ha enfocado en mejorar la seguridad, infraestructura y la situación económica de la ciudad. Se distingue por su estilo directo y enfoque en el orden urbano.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en administración pública",
        "description": "Iniciativa para mejorar liderazgo en administración pública en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en seguridad y orden urbano",
        "description": "Iniciativa para mejorar enfoque en seguridad y orden urbano en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 5
        },
        {
          "name": "Transparencia",
          "rating": 5
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 4
        },
        {
          "name": "Comunicación",
          "rating": 5
        }
      ],
      "detailed": "Cynthia Viteri ha mostrado liderazgo en administración pública en su gestión política. Su enfoque en enfoque en seguridad y orden urbano ha sido notable, aunque enfrenta desafíos relacionados con críticas por su postura conservadora.",
      "strengths": [
        "Liderazgo en administración pública",
        "enfoque en seguridad y orden urbano"
      ],
      "weaknesses": [
        "Críticas por su postura conservadora",
        "falta de trabajo en políticas inclusivas"
      ]
    }
  },
  {
    "id": "38",
    "name": "Adriana Córdoba",
    "image": "/adriana-córdoba.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 35,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2019",
    "biography": "Adriana Córdoba es una política ecuatoriana que actualmente ocupa el cargo de asambleísta nacional por la provincia de Guayas. Se ha destacado por su lucha en defensa de los derechos de las mujeres y su participación activa en temas sociales y educativos. Es conocida por su capacidad de liderazgo en el Congreso.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme en defensa de los derechos de las mujeres",
        "description": "Iniciativa para mejorar firme en defensa de los derechos de las mujeres en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de compromiso social",
        "description": "Iniciativa para mejorar compromiso social en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Adriana Córdoba ha mostrado firme en defensa de los derechos de las mujeres en su gestión política. Su enfoque en compromiso social ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en temas de economía.",
      "strengths": [
        "Firme en defensa de los derechos de las mujeres",
        "compromiso social"
      ],
      "weaknesses": [
        "Falta de experiencia en temas de economía",
        "crítica por su postura ideológica"
      ]
    }
  },
  {
    "id": "39",
    "name": "Ecuador Pérez",
    "image": "/ecuador-pérez.jpg",
    "party": "Partido Social Cristiano",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 8,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 50,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Ecuador Pérez es un político ecuatoriano actualmente activo en la política guayaquileña. Fue candidato a la Asamblea Nacional en 2021 y logró una destacada votación, lo que le permitió mantener su presencia política en la ciudad. Se ha destacado por su enfoque en políticas de empleo y seguridad ciudadana.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo local",
        "description": "Iniciativa para mejorar liderazgo local en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en seguridad",
        "description": "Iniciativa para mejorar enfoque en seguridad en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Ecuador Pérez ha mostrado liderazgo local en su gestión política. Su enfoque en enfoque en seguridad ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en el ámbito legislativo.",
      "strengths": [
        "Liderazgo local",
        "enfoque en seguridad"
      ],
      "weaknesses": [
        "Falta de experiencia en el ámbito legislativo",
        "críticas por falta de propuestas innovadoras"
      ]
    }
  },
  {
    "id": "40",
    "name": "María Rivadeneira",
    "image": "/maría-rivadeneira.jpg",
    "party": "Construye",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 41,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2018",
    "biography": "María Rivadeneira es una política ecuatoriana y activista de Guayaquil. Ha sido asambleísta por la provincia de Guayas y una de las principales defensoras de los derechos laborales y los derechos de las mujeres. Su trabajo se ha enfocado en la creación de políticas públicas para mejorar las condiciones de vida de las personas.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la equidad de género",
        "description": "Iniciativa para mejorar compromiso con la equidad de género en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo en derechos laborales",
        "description": "Iniciativa para mejorar liderazgo en derechos laborales en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "María Rivadeneira ha mostrado compromiso con la equidad de género en su gestión política. Su enfoque en liderazgo en derechos laborales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en la gestión económica.",
      "strengths": [
        "Compromiso con la equidad de género",
        "liderazgo en derechos laborales"
      ],
      "weaknesses": [
        "Falta de experiencia en la gestión económica",
        "críticas por su postura ideológica"
      ]
    }
  },
  {
    "id": "41",
    "name": "Daniela Berrones",
    "image": "/daniela-berrones.jpg",
    "party": "Construye",
    "province": "manabí",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 40,
    "birthplace": "Manabí, Ecuador",
    "careerStart": "2018",
    "biography": "Daniela Berrones es una asambleísta ecuatoriana por la provincia de Manabí. Ha sido electa por su trabajo en el ámbito de la salud y la educación. Durante su gestión, ha trabajado en la mejora de los servicios públicos y la infraestructura de su provincia.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Manabí",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Manabí."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la salud y la educación",
        "description": "Iniciativa para mejorar compromiso con la salud y la educación en Manabí.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Daniela Berrones ha mostrado compromiso con la salud y la educación en su gestión política. Su enfoque en compromiso con la salud y la educación ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en áreas económicas y políticas internacionales.",
      "strengths": [
        "Compromiso con la salud y la educación"
      ],
      "weaknesses": [
        "Falta de experiencia en áreas económicas y políticas internacionales"
      ]
    }
  },
  {
    "id": "42",
    "name": "Guillermo Lasso",
    "image": "/guillermo-lasso.jpg",
    "party": "Construye",
    "province": "pichincha",
    "currentPosition": "Presidente de la República",
    "experience": 10,
    "proposalsFulfilled": 37,
    "approvalRating": 75,
    "age": 70,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2015",
    "biography": "Guillermo Lasso es el actual presidente de Ecuador, conocido por su enfoque empresarial y su carrera en la banca. Asumió la presidencia en 2021, con el compromiso de generar empleo, reducir la pobreza y mejorar la economía del país.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Visión económica",
        "description": "Iniciativa para mejorar visión económica en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en la inversión privada",
        "description": "Iniciativa para mejorar enfoque en la inversión privada en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Guillermo Lasso ha mostrado visión económica en su gestión política. Su enfoque en enfoque en la inversión privada ha sido notable, aunque enfrenta desafíos relacionados con críticas por su falta de sensibilidad social y por las medidas de austeridad.",
      "strengths": [
        "Visión económica",
        "enfoque en la inversión privada"
      ],
      "weaknesses": [
        "Críticas por su falta de sensibilidad social y por las medidas de austeridad"
      ]
    }
  },
  {
    "id": "43",
    "name": "Raúl Tello",
    "image": "/raúl-tello.jpg",
    "party": "Construye",
    "province": "guayas",
    "currentPosition": "Asambleísta Provincial",
    "experience": 8,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 52,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2017",
    "biography": "Raúl Tello es un político guayaquileño y asambleísta provincial por la provincia de Guayas. Se ha destacado en temas de infraestructura, seguridad y lucha contra la corrupción, siendo un defensor de la descentralización del poder político.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la lucha contra la corrupción",
        "description": "Iniciativa para mejorar compromiso con la lucha contra la corrupción en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de trabajo en infraestructura",
        "description": "Iniciativa para mejorar trabajo en infraestructura en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Raúl Tello ha mostrado compromiso con la lucha contra la corrupción en su gestión política. Su enfoque en trabajo en infraestructura ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en política social.",
      "strengths": [
        "Compromiso con la lucha contra la corrupción",
        "trabajo en infraestructura"
      ],
      "weaknesses": [
        "Falta de propuestas en política social",
        "críticas por su postura conservadora"
      ]
    }
  },
  {
    "id": "44",
    "name": "Marcos Pascual",
    "image": "/marcos-pascual.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "guayas",
    "currentPosition": "Prefecto",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 73,
    "age": 43,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2018",
    "biography": "Marcos Pascual es un político guayaquileño, actualmente Prefecto de Guayas. Se ha distinguido por su labor en el desarrollo de proyectos de agua potable y en el fortalecimiento de la infraestructura vial en su provincia.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en infraestructura",
        "description": "Iniciativa para mejorar trabajo en infraestructura en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo regional",
        "description": "Iniciativa para mejorar liderazgo regional en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Marcos Pascual ha mostrado trabajo en infraestructura en su gestión política. Su enfoque en liderazgo regional ha sido notable, aunque enfrenta desafíos relacionados con falta de visibilidad en políticas ambientales.",
      "strengths": [
        "Trabajo en infraestructura",
        "liderazgo regional"
      ],
      "weaknesses": [
        "Falta de visibilidad en políticas ambientales",
        "críticas por su enfoque urbano"
      ]
    }
  },
  {
    "id": "45",
    "name": "Mónica Chavez",
    "image": "/mónica-chavez.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "pichincha",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 39,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2019",
    "biography": "Mónica Chávez es una asambleísta nacional ecuatoriana por la provincia de Pichincha. Se ha enfocado en promover reformas laborales y en la defensa de los derechos de las trabajadoras. Además, es activista por los derechos de las mujeres y la igualdad de género.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensa de los derechos de las mujeres",
        "description": "Iniciativa para mejorar defensa de los derechos de las mujeres en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de trabajo en reformas laborales",
        "description": "Iniciativa para mejorar trabajo en reformas laborales en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Mónica Chavez ha mostrado defensa de los derechos de las mujeres en su gestión política. Su enfoque en trabajo en reformas laborales ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en gestión económica.",
      "strengths": [
        "Defensa de los derechos de las mujeres",
        "trabajo en reformas laborales"
      ],
      "weaknesses": [
        "Falta de experiencia en gestión económica",
        "críticas por su enfoque ideológico"
      ]
    }
  },
  {
    "id": "46",
    "name": "José Serrano",
    "image": "/josé-serrano.jpg",
    "party": "Revolución Ciudadana",
    "province": "pichincha",
    "currentPosition": "Asambleísta Nacional",
    "experience": 8,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 58,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2017",
    "biography": "José Serrano es un político ecuatoriano, ex presidente de la Asamblea Nacional de Ecuador. Su gestión ha sido clave en el proceso de reformas políticas en el país. Se ha destacado por su capacidad de negociación y liderazgo en la política nacional.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Capacidad de negociación",
        "description": "Iniciativa para mejorar capacidad de negociación en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de experiencia política",
        "description": "Iniciativa para mejorar experiencia política en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "José Serrano ha mostrado capacidad de negociación en su gestión política. Su enfoque en experiencia política ha sido notable, aunque enfrenta desafíos relacionados con críticas por su relación con temas de corrupción.",
      "strengths": [
        "Capacidad de negociación",
        "experiencia política"
      ],
      "weaknesses": [
        "Críticas por su relación con temas de corrupción",
        "falta de coherencia política"
      ]
    }
  },
  {
    "id": "47",
    "name": "María Correa",
    "image": "/maría-correa.jpg",
    "party": "Revolución Ciudadana",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 45,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2018",
    "biography": "María Correa es una asambleísta nacional por la provincia de Guayas. Se ha centrado en temas relacionados con la salud pública, especialmente en la prevención de enfermedades crónicas y la mejora del sistema de salud en las zonas rurales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque en salud pública",
        "description": "Iniciativa para mejorar enfoque en salud pública en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de sensibilidad social",
        "description": "Iniciativa para mejorar sensibilidad social en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "María Correa ha mostrado enfoque en salud pública en su gestión política. Su enfoque en sensibilidad social ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas innovadoras en otras áreas.",
      "strengths": [
        "Enfoque en salud pública",
        "sensibilidad social"
      ],
      "weaknesses": [
        "Falta de propuestas innovadoras en otras áreas",
        "críticas por no abordar los problemas de educación"
      ]
    }
  },
  {
    "id": "48",
    "name": "Carlos Pérez",
    "image": "/carlos-pérez.jpg",
    "party": "CREO",
    "province": "el oro",
    "currentPosition": "Prefecto",
    "experience": 8,
    "proposalsFulfilled": 34,
    "approvalRating": 68,
    "age": 51,
    "birthplace": "El Oro, Ecuador",
    "careerStart": "2017",
    "biography": "Carlos Pérez es un político ecuatoriano y actualmente Prefecto de la provincia de Cañar. Es conocido por su trabajo en el sector agrícola, especialmente en la mejora de las infraestructuras rurales y en la implementación de programas de apoyo a los agricultores locales.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - El Oro",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en El Oro."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en el sector agrícola",
        "description": "Iniciativa para mejorar trabajo en el sector agrícola en El Oro.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en el desarrollo rural",
        "description": "Iniciativa para mejorar enfoque en el desarrollo rural en El Oro.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Carlos Pérez ha mostrado trabajo en el sector agrícola en su gestión política. Su enfoque en enfoque en el desarrollo rural ha sido notable, aunque enfrenta desafíos relacionados con críticas por su postura conservadora y falta de apoyo en temas urbanos.",
      "strengths": [
        "Trabajo en el sector agrícola",
        "enfoque en el desarrollo rural"
      ],
      "weaknesses": [
        "Críticas por su postura conservadora y falta de apoyo en temas urbanos"
      ]
    }
  },
  {
    "id": "49",
    "name": "Lucía Mendoza",
    "image": "/lucía-mendoza.jpg",
    "party": "Izquierda Democrática",
    "province": "morona santiago",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 42,
    "birthplace": "Morona Santiago, Ecuador",
    "careerStart": "2018",
    "biography": "Lucía Mendoza es una política ecuatoriana y asambleísta de la provincia de Morona Santiago. Se ha dedicado a la defensa de los derechos de las comunidades indígenas, enfocándose en el fortalecimiento de la educación intercultural y la protección del medio ambiente en su provincia.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Morona Santiago",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Morona Santiago."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con los derechos indígenas",
        "description": "Iniciativa para mejorar compromiso con los derechos indígenas en Morona Santiago.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque ambiental",
        "description": "Iniciativa para mejorar enfoque ambiental en Morona Santiago.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Lucía Mendoza ha mostrado compromiso con los derechos indígenas en su gestión política. Su enfoque en enfoque ambiental ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en gestión administrativa.",
      "strengths": [
        "Compromiso con los derechos indígenas",
        "enfoque ambiental"
      ],
      "weaknesses": [
        "Falta de experiencia en gestión administrativa",
        "críticas por su falta de enfoque económico"
      ]
    }
  },
  {
    "id": "50",
    "name": "Alfredo Bocachi",
    "image": "/alfredo-bocachi.jpg",
    "party": "Pachakutik",
    "province": "chimborazo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 44,
    "birthplace": "Chimborazo, Ecuador",
    "careerStart": "2018",
    "biography": "Alfredo Bocachi es un político ecuatoriano y actualmente asambleísta de la provincia de Chimborazo. Se ha destacado por su trabajo en la mejora de los servicios de salud y educación en las zonas rurales, especialmente en los sectores más desatendidos.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Chimborazo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Chimborazo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en salud y educación rural",
        "description": "Iniciativa para mejorar trabajo en salud y educación rural en Chimborazo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque social",
        "description": "Iniciativa para mejorar enfoque social en Chimborazo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Alfredo Bocachi ha mostrado trabajo en salud y educación rural en su gestión política. Su enfoque en enfoque social ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en la gestión de proyectos a gran escala.",
      "strengths": [
        "Trabajo en salud y educación rural",
        "enfoque social"
      ],
      "weaknesses": [
        "Falta de experiencia en la gestión de proyectos a gran escala",
        "críticas por su falta de visibilidad política"
      ]
    }
  },
  {
    "id": "51",
    "name": "Patricia Jaramillo",
    "image": "/patricia-jaramillo.jpg",
    "party": "Avanza",
    "province": "cañar",
    "currentPosition": "Concejal",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 41,
    "birthplace": "Cañar, Ecuador",
    "careerStart": "2018",
    "biography": "Patricia Jaramillo es concejal de la ciudad de Cañar, conocida por su trabajo en el ámbito social y su enfoque en el apoyo a los sectores más vulnerables. Su gestión se ha centrado en mejorar la calidad de vida de los ciudadanos, especialmente en las zonas rurales.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Cañar",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Cañar."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque social",
        "description": "Iniciativa para mejorar enfoque social en Cañar.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de trabajo comunitario",
        "description": "Iniciativa para mejorar trabajo comunitario en Cañar.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Patricia Jaramillo ha mostrado enfoque social en su gestión política. Su enfoque en trabajo comunitario ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en gestión administrativa a gran escala.",
      "strengths": [
        "Enfoque social",
        "trabajo comunitario"
      ],
      "weaknesses": [
        "Falta de experiencia en gestión administrativa a gran escala"
      ]
    }
  },
  {
    "id": "52",
    "name": "María Belén Cordero",
    "image": "/maría-belén-cordero.jpg",
    "party": "Democracia Sí",
    "province": "bolívar",
    "currentPosition": "Prefecto",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 42,
    "birthplace": "Bolívar, Ecuador",
    "careerStart": "2018",
    "biography": "María Belén Cordero es Prefecta de Bolívar y ha trabajado incansablemente en la mejora de la infraestructura vial y el desarrollo económico de la provincia. Cordero ha sido un referente para la provincia en proyectos de agricultura sostenible.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Bolívar",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Bolívar."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo regional",
        "description": "Iniciativa para mejorar liderazgo regional en Bolívar.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en infraestructura rural",
        "description": "Iniciativa para mejorar enfoque en infraestructura rural en Bolívar.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "María Belén Cordero ha mostrado liderazgo regional en su gestión política. Su enfoque en enfoque en infraestructura rural ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas innovadoras en el ámbito urbano.",
      "strengths": [
        "Liderazgo regional",
        "enfoque en infraestructura rural"
      ],
      "weaknesses": [
        "Falta de propuestas innovadoras en el ámbito urbano"
      ]
    }
  },
  {
    "id": "53",
    "name": "Jorge Yunda",
    "image": "/jorge-yunda.jpg",
    "party": "Construye",
    "province": "pichincha",
    "currentPosition": "Presidente de la República",
    "experience": 8,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 58,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2017",
    "biography": "Jorge Yunda fue presidente de la República de Ecuador y se ha destacado por su trabajo en la política de inclusión social, educación y salud durante su gestión. Es conocido por su perfil cercano a la ciudadanía y por su lucha contra la corrupción en su tiempo de servicio público.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo social",
        "description": "Iniciativa para mejorar liderazgo social en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de cercanía con la gente",
        "description": "Iniciativa para mejorar cercanía con la gente en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Jorge Yunda ha mostrado liderazgo social en su gestión política. Su enfoque en cercanía con la gente ha sido notable, aunque enfrenta desafíos relacionados con críticas por su enfoque autoritario.",
      "strengths": [
        "Liderazgo social",
        "cercanía con la gente"
      ],
      "weaknesses": [
        "Críticas por su enfoque autoritario",
        "relación con casos de corrupción"
      ]
    }
  },
  {
    "id": "54",
    "name": "Rocío González",
    "image": "/rocío-gonzález.jpg",
    "party": "Pachakutik",
    "province": "pastaza",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 37,
    "birthplace": "Pastaza, Ecuador",
    "careerStart": "2019",
    "biography": "Rocío González es asambleísta de la provincia de Pastaza. Su enfoque está en la protección de los derechos de los pueblos indígenas y el fortalecimiento de la infraestructura en la región amazónica. Además, ha sido una firme defensora del medio ambiente.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Pastaza",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pastaza."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensa de los derechos indígenas",
        "description": "Iniciativa para mejorar defensa de los derechos indígenas en Pastaza.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de protección ambiental",
        "description": "Iniciativa para mejorar protección ambiental en Pastaza.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Rocío González ha mostrado defensa de los derechos indígenas en su gestión política. Su enfoque en protección ambiental ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en otros campos políticos.",
      "strengths": [
        "Defensa de los derechos indígenas",
        "protección ambiental"
      ],
      "weaknesses": [
        "Falta de experiencia en otros campos políticos",
        "críticas por no dar soluciones prácticas a problemas económicos"
      ]
    }
  },
  {
    "id": "55",
    "name": "Eduardo Serrano",
    "image": "/eduardo-serrano.jpg",
    "party": "CREO",
    "province": "santa elena",
    "currentPosition": "Asambleísta Provincial",
    "experience": 6,
    "proposalsFulfilled": 34,
    "approvalRating": 68,
    "age": 35,
    "birthplace": "Santa Elena, Ecuador",
    "careerStart": "2019",
    "biography": "Eduardo Serrano es concejal de Santa Elena. Se ha enfocado en proyectos de desarrollo urbano, particularmente en la mejora del transporte público y el acceso a servicios básicos en las zonas más alejadas de la provincia.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Santa Elena",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Santa Elena."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con el desarrollo urbano",
        "description": "Iniciativa para mejorar compromiso con el desarrollo urbano en Santa Elena.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en la mejora del transporte",
        "description": "Iniciativa para mejorar enfoque en la mejora del transporte en Santa Elena.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Eduardo Serrano ha mostrado compromiso con el desarrollo urbano en su gestión política. Su enfoque en enfoque en la mejora del transporte ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en temas de seguridad pública.",
      "strengths": [
        "Compromiso con el desarrollo urbano",
        "enfoque en la mejora del transporte"
      ],
      "weaknesses": [
        "Falta de experiencia en temas de seguridad pública",
        "críticas por su enfoque limitado en salud y educación"
      ]
    }
  },
  {
    "id": "56",
    "name": "Francisco Jiménez",
    "image": "/francisco-jiménez.jpg",
    "party": "Partido Social Cristiano",
    "province": "manabí",
    "currentPosition": "Concejal",
    "experience": 6,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 32,
    "birthplace": "Manabí, Ecuador",
    "careerStart": "2019",
    "biography": "Francisco Jiménez es activista político y candidato a concejal por Manabí. Su trabajo se ha centrado en la lucha contra la pobreza en las zonas rurales, la mejora de la infraestructura pública y la promoción de la educación.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Manabí",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Manabí."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la lucha contra la pobreza",
        "description": "Iniciativa para mejorar compromiso con la lucha contra la pobreza en Manabí.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo en el ámbito social",
        "description": "Iniciativa para mejorar liderazgo en el ámbito social en Manabí.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Francisco Jiménez ha mostrado compromiso con la lucha contra la pobreza en su gestión política. Su enfoque en liderazgo en el ámbito social ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en gestión política de alto nivel.",
      "strengths": [
        "Compromiso con la lucha contra la pobreza",
        "liderazgo en el ámbito social"
      ],
      "weaknesses": [
        "Falta de experiencia en gestión política de alto nivel",
        "críticas por falta de un plan de desarrollo económico claro"
      ]
    }
  },
  {
    "id": "57",
    "name": "César Monge",
    "image": "/césar-monge.jpg",
    "party": "Avanza",
    "province": "morona santiago",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 45,
    "birthplace": "Morona Santiago, Ecuador",
    "careerStart": "2018",
    "biography": "César Monge es un político ecuatoriano que ha sido parte de la Asamblea Nacional. Su enfoque ha sido el fortalecimiento de la educación y la seguridad, buscando alternativas para disminuir la violencia en las provincias amazónicas.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Morona Santiago",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Morona Santiago."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en educación y seguridad",
        "description": "Iniciativa para mejorar trabajo en educación y seguridad en Morona Santiago.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "César Monge ha mostrado trabajo en educación y seguridad en su gestión política. Su enfoque en trabajo en educación y seguridad ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en políticas de salud.",
      "strengths": [
        "Trabajo en educación y seguridad"
      ],
      "weaknesses": [
        "Falta de experiencia en políticas de salud",
        "críticas por no promover políticas sostenibles"
      ]
    }
  },
  {
    "id": "58",
    "name": "Víctor Andrade",
    "image": "/víctor-andrade.jpg",
    "party": "Sociedad Patriótica",
    "province": "zamora chinchipe",
    "currentPosition": "Asambleísta Provincial",
    "experience": 6,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 39,
    "birthplace": "Zamora Chinchipe, Ecuador",
    "careerStart": "2019",
    "biography": "Víctor Andrade es un concejal de la ciudad de Zamora Chinchipe. Ha centrado su trabajo en el impulso al desarrollo agrícola y en la construcción de infraestructura básica, buscando mejorar la calidad de vida de sus ciudadanos.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Zamora Chinchipe",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Zamora Chinchipe."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Fomento al desarrollo agrícola",
        "description": "Iniciativa para mejorar fomento al desarrollo agrícola en Zamora Chinchipe.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en infraestructura",
        "description": "Iniciativa para mejorar enfoque en infraestructura en Zamora Chinchipe.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Víctor Andrade ha mostrado fomento al desarrollo agrícola en su gestión política. Su enfoque en enfoque en infraestructura ha sido notable, aunque enfrenta desafíos relacionados con falta de enfoque en temas urbanos.",
      "strengths": [
        "Fomento al desarrollo agrícola",
        "enfoque en infraestructura"
      ],
      "weaknesses": [
        "Falta de enfoque en temas urbanos",
        "críticas por poco trabajo en derechos humanos"
      ]
    }
  },
  {
    "id": "59",
    "name": "Johana González",
    "image": "/johana-gonzález.jpg",
    "party": "Movimiento AMIGO",
    "province": "los ríos",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 38,
    "approvalRating": 76,
    "age": 47,
    "birthplace": "Los Ríos, Ecuador",
    "careerStart": "2018",
    "biography": "Johana González es vicepresidenta de la República del Ecuador, enfocada en la inclusión social, la política de género y la lucha contra la pobreza. Su trabajo ha sido clave en la promoción de políticas públicas inclusivas.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Los Ríos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Los Ríos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en políticas públicas inclusivas",
        "description": "Iniciativa para mejorar liderazgo en políticas públicas inclusivas en Los Ríos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en la política de género",
        "description": "Iniciativa para mejorar enfoque en la política de género en Los Ríos.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Johana González ha mostrado liderazgo en políticas públicas inclusivas en su gestión política. Su enfoque en enfoque en la política de género ha sido notable, aunque enfrenta desafíos relacionados con críticas por falta de ejecución de proyectos económicos concretos.",
      "strengths": [
        "Liderazgo en políticas públicas inclusivas",
        "enfoque en la política de género"
      ],
      "weaknesses": [
        "Críticas por falta de ejecución de proyectos económicos concretos",
        "algunas fallas en la toma de decisiones rápidas"
      ]
    }
  },
  {
    "id": "60",
    "name": "Marco Pérez",
    "image": "/marco-pérez.jpg",
    "party": "Pachakutik",
    "province": "cotopaxi",
    "currentPosition": "Presidente de la República",
    "experience": 8,
    "proposalsFulfilled": 39,
    "approvalRating": 78,
    "age": 53,
    "birthplace": "Cotopaxi, Ecuador",
    "careerStart": "2017",
    "biography": "Marco Pérez es presidente de la República de Ecuador. Se ha destacado por su enfoque en la economía, el empleo y la mejora de la seguridad pública. Su visión de país es más orientada a la inversión privada y la modernización de sectores clave del país.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Cotopaxi",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Cotopaxi."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Visión empresarial",
        "description": "Iniciativa para mejorar visión empresarial en Cotopaxi.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en seguridad",
        "description": "Iniciativa para mejorar enfoque en seguridad en Cotopaxi.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Marco Pérez ha mostrado visión empresarial en su gestión política. Su enfoque en enfoque en seguridad ha sido notable, aunque enfrenta desafíos relacionados con falta de políticas sociales robustas.",
      "strengths": [
        "Visión empresarial",
        "enfoque en seguridad"
      ],
      "weaknesses": [
        "Falta de políticas sociales robustas",
        "críticas por su enfoque neoliberal"
      ]
    }
  },
  {
    "id": "61",
    "name": "Ana Gómez",
    "image": "/ana-gómez.jpg",
    "party": "Partido Socialista Ecuatoriano",
    "province": "galápagos",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 43,
    "birthplace": "Galápagos, Ecuador",
    "careerStart": "2018",
    "biography": "Ana Gómez es Asambleísta Nacional por Esmeraldas. Se ha destacado por su trabajo en favor de la educación inclusiva y el apoyo a las comunidades afroecuatorianas. Su lucha constante ha sido para garantizar los derechos de la población afrodescendiente.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Galápagos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Galápagos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la inclusión",
        "description": "Iniciativa para mejorar compromiso con la inclusión en Galápagos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de trabajo por las comunidades afroecuatorianas",
        "description": "Iniciativa para mejorar trabajo por las comunidades afroecuatorianas en Galápagos.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Ana Gómez ha mostrado compromiso con la inclusión en su gestión política. Su enfoque en trabajo por las comunidades afroecuatorianas ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas claras en temas económicos.",
      "strengths": [
        "Compromiso con la inclusión",
        "trabajo por las comunidades afroecuatorianas"
      ],
      "weaknesses": [
        "Falta de propuestas claras en temas económicos",
        "críticas por no llegar a soluciones efectivas en seguridad"
      ]
    }
  },
  {
    "id": "62",
    "name": "Carlos Serrano",
    "image": "/carlos-serrano.jpg",
    "party": "Partido Social Cristiano",
    "province": "el oro",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 46,
    "birthplace": "El Oro, Ecuador",
    "careerStart": "2018",
    "biography": "Carlos Serrano es concejal de El Oro. Su labor se ha centrado en mejorar la infraestructura vial y la promoción de la minería responsable, buscando que El Oro sea un modelo en la minería sostenible.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - El Oro",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en El Oro."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en minería responsable",
        "description": "Iniciativa para mejorar experiencia en minería responsable en El Oro.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de visión sobre el desarrollo económico",
        "description": "Iniciativa para mejorar visión sobre el desarrollo económico en El Oro.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Carlos Serrano ha mostrado experiencia en minería responsable en su gestión política. Su enfoque en visión sobre el desarrollo económico ha sido notable, aunque enfrenta desafíos relacionados con críticas por su falta de propuestas en sectores más allá de la minería.",
      "strengths": [
        "Experiencia en minería responsable",
        "visión sobre el desarrollo económico"
      ],
      "weaknesses": [
        "Críticas por su falta de propuestas en sectores más allá de la minería",
        "falta de enfoque social"
      ]
    }
  },
  {
    "id": "63",
    "name": "Mónica Rivadeneira",
    "image": "/mónica-rivadeneira.jpg",
    "party": "Izquierda Democrática",
    "province": "imbabura",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 75,
    "age": 44,
    "birthplace": "Imbabura, Ecuador",
    "careerStart": "2018",
    "biography": "Mónica Rivadeneira es Vicepresidenta de la República de Ecuador. A lo largo de su carrera política ha sido un referente en temas de derechos humanos, educación y feminismo, promoviendo políticas públicas orientadas a la equidad de género y el acceso universal a la educación.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Imbabura",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Imbabura."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensora de derechos humanos",
        "description": "Iniciativa para mejorar defensora de derechos humanos en Imbabura.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo en equidad de género",
        "description": "Iniciativa para mejorar liderazgo en equidad de género en Imbabura.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Mónica Rivadeneira ha mostrado defensora de derechos humanos en su gestión política. Su enfoque en liderazgo en equidad de género ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en el área de la economía y la seguridad pública.",
      "strengths": [
        "Defensora de derechos humanos",
        "liderazgo en equidad de género"
      ],
      "weaknesses": [
        "Falta de experiencia en el área de la economía y la seguridad pública",
        "críticas por no actuar rápidamente en crisis económicas"
      ]
    }
  },
  {
    "id": "64",
    "name": "Luis Vélez",
    "image": "/luis-vélez.jpg",
    "party": "Revolución Ciudadana",
    "province": "santa elena",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 41,
    "birthplace": "Santa Elena, Ecuador",
    "careerStart": "2018",
    "biography": "Luis Vélez es asambleísta nacional por Santa Elena. Su enfoque ha sido en la creación de políticas para el fortalecimiento de la educación pública y en la lucha contra la corrupción dentro de los organismos del gobierno.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Santa Elena",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Santa Elena."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Lucha contra la corrupción",
        "description": "Iniciativa para mejorar lucha contra la corrupción en Santa Elena.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de compromiso con la educación pública",
        "description": "Iniciativa para mejorar compromiso con la educación pública en Santa Elena.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Luis Vélez ha mostrado lucha contra la corrupción en su gestión política. Su enfoque en compromiso con la educación pública ha sido notable, aunque enfrenta desafíos relacionados con críticas por su escasa experiencia en políticas de salud.",
      "strengths": [
        "Lucha contra la corrupción",
        "compromiso con la educación pública"
      ],
      "weaknesses": [
        "Críticas por su escasa experiencia en políticas de salud",
        "propuestas limitadas en otros sectores"
      ]
    }
  },
  {
    "id": "65",
    "name": "Carlos Pazmiño",
    "image": "/carlos-pazmiño.jpg",
    "party": "Avanza",
    "province": "bolívar",
    "currentPosition": "Presidente de la República",
    "experience": 9,
    "proposalsFulfilled": 40,
    "approvalRating": 80,
    "age": 60,
    "birthplace": "Bolívar, Ecuador",
    "careerStart": "2016",
    "biography": "Carlos Pazmiño es presidente de la República de Ecuador, conocido por su liderazgo en áreas clave como la seguridad pública y la defensa de los derechos humanos. Su gestión se ha centrado en combatir la violencia y mejorar la educación en todo el país.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Bolívar",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Bolívar."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en seguridad y derechos humanos",
        "description": "Iniciativa para mejorar liderazgo en seguridad y derechos humanos en Bolívar.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de políticas públicas claras",
        "description": "Iniciativa para mejorar políticas públicas claras en Bolívar.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 5
        },
        {
          "name": "Transparencia",
          "rating": 5
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 4
        },
        {
          "name": "Comunicación",
          "rating": 5
        }
      ],
      "detailed": "Carlos Pazmiño ha mostrado liderazgo en seguridad y derechos humanos en su gestión política. Su enfoque en políticas públicas claras ha sido notable, aunque enfrenta desafíos relacionados con falta de consenso con algunos sectores del país.",
      "strengths": [
        "Liderazgo en seguridad y derechos humanos",
        "políticas públicas claras"
      ],
      "weaknesses": [
        "Falta de consenso con algunos sectores del país",
        "críticas por su estilo de liderazgo"
      ]
    }
  },
  {
    "id": "66",
    "name": "Evelyn Navas",
    "image": "/evelyn-navas.jpg",
    "party": "Construye",
    "province": "zamora chinchipe",
    "currentPosition": "Prefecto",
    "experience": 6,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 39,
    "birthplace": "Zamora Chinchipe, Ecuador",
    "careerStart": "2019",
    "biography": "Evelyn Navas es Prefecta de Zamora Chinchipe. Ha trabajado en el desarrollo de políticas ambientales y la defensa del ecosistema de la provincia. Navas es conocida por sus luchas por la protección de los recursos naturales de la región amazónica.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Zamora Chinchipe",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Zamora Chinchipe."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensa del medio ambiente",
        "description": "Iniciativa para mejorar defensa del medio ambiente en Zamora Chinchipe.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo en políticas rurales",
        "description": "Iniciativa para mejorar liderazgo en políticas rurales en Zamora Chinchipe.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Evelyn Navas ha mostrado defensa del medio ambiente en su gestión política. Su enfoque en liderazgo en políticas rurales ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en temas de infraestructura urbana y empleo.",
      "strengths": [
        "Defensa del medio ambiente",
        "liderazgo en políticas rurales"
      ],
      "weaknesses": [
        "Falta de propuestas en temas de infraestructura urbana y empleo"
      ]
    }
  },
  {
    "id": "67",
    "name": "David Moncayo",
    "image": "/david-moncayo.jpg",
    "party": "Movimiento AMIGO",
    "province": "orellana",
    "currentPosition": "Concejal",
    "experience": 6,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 35,
    "birthplace": "Orellana, Ecuador",
    "careerStart": "2019",
    "biography": "David Moncayo es concejal de Orellana, especializado en temas de desarrollo urbano y promoción de políticas públicas que beneficien a las poblaciones indígenas de la región. Ha promovido mejoras en la infraestructura de servicios básicos en las zonas rurales.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Orellana",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Orellana."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo con comunidades indígenas",
        "description": "Iniciativa para mejorar trabajo con comunidades indígenas en Orellana.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en infraestructura rural",
        "description": "Iniciativa para mejorar enfoque en infraestructura rural en Orellana.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "David Moncayo ha mostrado trabajo con comunidades indígenas en su gestión política. Su enfoque en enfoque en infraestructura rural ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en seguridad pública.",
      "strengths": [
        "Trabajo con comunidades indígenas",
        "enfoque en infraestructura rural"
      ],
      "weaknesses": [
        "Falta de propuestas en seguridad pública",
        "críticas por su inexperiencia en temas de justicia social"
      ]
    }
  },
  {
    "id": "68",
    "name": "Juliana López",
    "image": "/juliana-lópez.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "loja",
    "currentPosition": "Asambleísta Provincial",
    "experience": 6,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 38,
    "birthplace": "Loja, Ecuador",
    "careerStart": "2019",
    "biography": "Juliana López es concejal en Loja. Su trabajo se ha enfocado en la modernización de la infraestructura urbana y la promoción del turismo como motor económico de la provincia.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Loja",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Loja."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Visión en desarrollo turístico",
        "description": "Iniciativa para mejorar visión en desarrollo turístico en Loja.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de modernización urbana",
        "description": "Iniciativa para mejorar modernización urbana en Loja.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Juliana López ha mostrado visión en desarrollo turístico en su gestión política. Su enfoque en modernización urbana ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en desarrollo social y seguridad ciudadana.",
      "strengths": [
        "Visión en desarrollo turístico",
        "modernización urbana"
      ],
      "weaknesses": [
        "Falta de propuestas en desarrollo social y seguridad ciudadana"
      ]
    }
  },
  {
    "id": "69",
    "name": "Roberto Cruz",
    "image": "/roberto-cruz.jpg",
    "party": "CREO",
    "province": "carchi",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 45,
    "birthplace": "Carchi, Ecuador",
    "careerStart": "2018",
    "biography": "Roberto Cruz es vicepresidente de la Asamblea Nacional por Carchi. Su carrera se ha centrado en la reforma del sistema de salud y educación en el país, con un enfoque en la equidad regional, especialmente en las zonas fronterizas.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Carchi",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Carchi."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en salud y educación",
        "description": "Iniciativa para mejorar liderazgo en salud y educación en Carchi.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en la equidad regional",
        "description": "Iniciativa para mejorar enfoque en la equidad regional en Carchi.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Roberto Cruz ha mostrado liderazgo en salud y educación en su gestión política. Su enfoque en enfoque en la equidad regional ha sido notable, aunque enfrenta desafíos relacionados con críticas por su falta de visión empresarial.",
      "strengths": [
        "Liderazgo en salud y educación",
        "enfoque en la equidad regional"
      ],
      "weaknesses": [
        "Críticas por su falta de visión empresarial",
        "escasa experiencia en el sector privado"
      ]
    }
  },
  {
    "id": "70",
    "name": "Ricardo Mora",
    "image": "/ricardo-mora.jpg",
    "party": "Partido Social Cristiano",
    "province": "guayas",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 40,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2018",
    "biography": "Ricardo Mora es asambleísta por Guayas, con un enfoque especial en la justicia social y la reforma de los sistemas de seguridad. Ha sido un firme defensor de los derechos de los trabajadores y ha promovido leyes que favorecen a las clases bajas.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la justicia social",
        "description": "Iniciativa para mejorar compromiso con la justicia social en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de lucha por los derechos de los trabajadores",
        "description": "Iniciativa para mejorar lucha por los derechos de los trabajadores en Guayas.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Ricardo Mora ha mostrado compromiso con la justicia social en su gestión política. Su enfoque en lucha por los derechos de los trabajadores ha sido notable, aunque enfrenta desafíos relacionados con críticas por falta de enfoque en la generación de empleo.",
      "strengths": [
        "Compromiso con la justicia social",
        "lucha por los derechos de los trabajadores"
      ],
      "weaknesses": [
        "Críticas por falta de enfoque en la generación de empleo",
        "problemas con el sector empresarial"
      ]
    }
  },
  {
    "id": "71",
    "name": "Esteban Andrade",
    "image": "/esteban-andrade.jpg",
    "party": "Democracia Sí",
    "province": "cotopaxi",
    "currentPosition": "Concejal",
    "experience": 7,
    "proposalsFulfilled": 34,
    "approvalRating": 69,
    "age": 41,
    "birthplace": "Cotopaxi, Ecuador",
    "careerStart": "2018",
    "biography": "Esteban Andrade es concejal de Cotopaxi y un fuerte defensor de los derechos laborales en la provincia. Ha promovido iniciativas en favor de la creación de empleos y la igualdad de oportunidades.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Cotopaxi",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Cotopaxi."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con el empleo y los derechos laborales",
        "description": "Iniciativa para mejorar compromiso con el empleo y los derechos laborales en Cotopaxi.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Esteban Andrade ha mostrado compromiso con el empleo y los derechos laborales en su gestión política. Su enfoque en compromiso con el empleo y los derechos laborales ha sido notable, aunque enfrenta desafíos relacionados con críticas por su inexperiencia en temas de salud pública.",
      "strengths": [
        "Compromiso con el empleo y los derechos laborales"
      ],
      "weaknesses": [
        "Críticas por su inexperiencia en temas de salud pública",
        "falta de propuestas claras para la educación"
      ]
    }
  },
  {
    "id": "72",
    "name": "María Vásquez",
    "image": "/maría-vásquez.jpg",
    "party": "Construye",
    "province": "pichincha",
    "currentPosition": "Presidente de la República",
    "experience": 8,
    "proposalsFulfilled": 39,
    "approvalRating": 78,
    "age": 53,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2017",
    "biography": "María Vásquez es Presidenta de la República de Ecuador. A lo largo de su carrera, ha sido una defensora activa de los derechos de las mujeres y la implementación de políticas públicas para mejorar la seguridad ciudadana.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme liderazgo en la lucha por la igualdad de género",
        "description": "Iniciativa para mejorar firme liderazgo en la lucha por la igualdad de género en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de seguridad pública",
        "description": "Iniciativa para mejorar seguridad pública en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "María Vásquez ha mostrado firme liderazgo en la lucha por la igualdad de género en su gestión política. Su enfoque en seguridad pública ha sido notable, aunque enfrenta desafíos relacionados con falta de enfoque en temas económicos.",
      "strengths": [
        "Firme liderazgo en la lucha por la igualdad de género",
        "seguridad pública"
      ],
      "weaknesses": [
        "Falta de enfoque en temas económicos",
        "dificultades con algunos sectores empresariales"
      ]
    }
  },
  {
    "id": "73",
    "name": "Jorge Suárez",
    "image": "/jorge-suárez.jpg",
    "party": "Unidad Popular",
    "province": "morona santiago",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 44,
    "birthplace": "Morona Santiago, Ecuador",
    "careerStart": "2018",
    "biography": "Jorge Suárez es asambleísta provincial de Manabí, conocido por su trabajo en la promoción del turismo y el desarrollo económico en la región costera. Su enfoque se centra en mejorar la infraestructura y los servicios turísticos de la provincia.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Morona Santiago",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Morona Santiago."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque en desarrollo económico",
        "description": "Iniciativa para mejorar enfoque en desarrollo económico en Morona Santiago.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de fuerte impulso al turismo",
        "description": "Iniciativa para mejorar fuerte impulso al turismo en Morona Santiago.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Jorge Suárez ha mostrado enfoque en desarrollo económico en su gestión política. Su enfoque en fuerte impulso al turismo ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas sobre temas sociales y en educación pública.",
      "strengths": [
        "Enfoque en desarrollo económico",
        "fuerte impulso al turismo"
      ],
      "weaknesses": [
        "Falta de propuestas sobre temas sociales y en educación pública"
      ]
    }
  },
  {
    "id": "74",
    "name": "Diana González",
    "image": "/diana-gonzález.jpg",
    "party": "Partido Social Cristiano",
    "province": "los ríos",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 40,
    "approvalRating": 80,
    "age": 40,
    "birthplace": "Los Ríos, Ecuador",
    "careerStart": "2018",
    "biography": "Diana González es Vicepresidenta de la Asamblea Nacional. Su trabajo se ha centrado en las reformas judiciales y la lucha contra la corrupción, con un enfoque particular en la transparencia en las instituciones del país.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Los Ríos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Los Ríos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en la lucha contra la corrupción",
        "description": "Iniciativa para mejorar liderazgo en la lucha contra la corrupción en Los Ríos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de enfoque en la transparencia",
        "description": "Iniciativa para mejorar enfoque en la transparencia en Los Ríos.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 5
        },
        {
          "name": "Transparencia",
          "rating": 5
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 4
        },
        {
          "name": "Comunicación",
          "rating": 5
        }
      ],
      "detailed": "Diana González ha mostrado liderazgo en la lucha contra la corrupción en su gestión política. Su enfoque en enfoque en la transparencia ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en el manejo de crisis sociales.",
      "strengths": [
        "Liderazgo en la lucha contra la corrupción",
        "enfoque en la transparencia"
      ],
      "weaknesses": [
        "Falta de experiencia en el manejo de crisis sociales",
        "algunas críticas por su postura en temas de salud pública"
      ]
    }
  },
  {
    "id": "75",
    "name": "Santiago Paredes",
    "image": "/santiago-paredes.jpg",
    "party": "Partido Social Cristiano",
    "province": "santo domingo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 47,
    "birthplace": "Santo Domingo, Ecuador",
    "careerStart": "2018",
    "biography": "Santiago Paredes es Asambleísta Nacional por Santo Domingo de los Tsáchilas. Se ha destacado por sus iniciativas en favor de la autonomía local y el desarrollo del sector agrícola y rural en la provincia.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Santo Domingo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Santo Domingo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Experiencia en el desarrollo rural",
        "description": "Iniciativa para mejorar experiencia en el desarrollo rural en Santo Domingo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de liderazgo en agricultura",
        "description": "Iniciativa para mejorar liderazgo en agricultura en Santo Domingo.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Santiago Paredes ha mostrado experiencia en el desarrollo rural en su gestión política. Su enfoque en liderazgo en agricultura ha sido notable, aunque enfrenta desafíos relacionados con críticas por su falta de propuestas en el sector industrial y comercial.",
      "strengths": [
        "Experiencia en el desarrollo rural",
        "liderazgo en agricultura"
      ],
      "weaknesses": [
        "Críticas por su falta de propuestas en el sector industrial y comercial"
      ]
    }
  },
  {
    "id": "76",
    "name": "Andrea Fernández",
    "image": "/andrea-fernández.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "tungurahua",
    "currentPosition": "Concejal",
    "experience": 6,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 36,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2019",
    "biography": "Andrea Fernández es concejal de Tungurahua. Se ha dedicado a mejorar la infraestructura urbana y promover políticas verdes para el desarrollo sustentable de la provincia.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en infraestructura urbana y políticas verdes",
        "description": "Iniciativa para mejorar trabajo en infraestructura urbana y políticas verdes en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Andrea Fernández ha mostrado trabajo en infraestructura urbana y políticas verdes en su gestión política. Su enfoque en trabajo en infraestructura urbana y políticas verdes ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en temas de justicia social y educación pública.",
      "strengths": [
        "Trabajo en infraestructura urbana y políticas verdes"
      ],
      "weaknesses": [
        "Falta de propuestas en temas de justicia social y educación pública"
      ]
    }
  },
  {
    "id": "77",
    "name": "Luis Arévalo",
    "image": "/luis-arévalo.jpg",
    "party": "Partido Sociedad Unida Más Acción (SUMA)",
    "province": "zamora chinchipe",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 38,
    "approvalRating": 76,
    "age": 48,
    "birthplace": "Zamora Chinchipe, Ecuador",
    "careerStart": "2018",
    "biography": "Luis Arévalo es asambleísta por la provincia de Zamora-Chinchipe, especializado en la defensa del medio ambiente y el desarrollo sostenible de la región amazónica.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Zamora Chinchipe",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Zamora Chinchipe."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensa del medio ambiente",
        "description": "Iniciativa para mejorar defensa del medio ambiente en Zamora Chinchipe.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de políticas de sostenibilidad",
        "description": "Iniciativa para mejorar políticas de sostenibilidad en Zamora Chinchipe.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Luis Arévalo ha mostrado defensa del medio ambiente en su gestión política. Su enfoque en políticas de sostenibilidad ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en temas económicos y de seguridad pública.",
      "strengths": [
        "Defensa del medio ambiente",
        "políticas de sostenibilidad"
      ],
      "weaknesses": [
        "Falta de propuestas en temas económicos y de seguridad pública"
      ]
    }
  },
  {
    "id": "78",
    "name": "Karla Cordero",
    "image": "/karla-cordero.jpg",
    "party": "Avanza",
    "province": "bolívar",
    "currentPosition": "Presidente de la República",
    "experience": 7,
    "proposalsFulfilled": 41,
    "approvalRating": 82,
    "age": 45,
    "birthplace": "Bolívar, Ecuador",
    "careerStart": "2018",
    "biography": "Karla Cordero es Presidenta de la República de Ecuador, destacada por su gestión en políticas de educación y seguridad pública, además de su firme compromiso con la salud pública y el bienestar de los ecuatorianos.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Bolívar",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Bolívar."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la educación y la salud pública",
        "description": "Iniciativa para mejorar compromiso con la educación y la salud pública en Bolívar.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de gran liderazgo",
        "description": "Iniciativa para mejorar gran liderazgo en Bolívar.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 5
        },
        {
          "name": "Transparencia",
          "rating": 5
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 4
        },
        {
          "name": "Comunicación",
          "rating": 5
        }
      ],
      "detailed": "Karla Cordero ha mostrado compromiso con la educación y la salud pública en su gestión política. Su enfoque en gran liderazgo ha sido notable, aunque enfrenta desafíos relacionados con falta de consenso con algunos sectores económicos.",
      "strengths": [
        "Compromiso con la educación y la salud pública",
        "gran liderazgo"
      ],
      "weaknesses": [
        "Falta de consenso con algunos sectores económicos",
        "dificultad para implementar políticas de infraestructura social"
      ]
    }
  },
  {
    "id": "79",
    "name": "Francisco Cevallos",
    "image": "/francisco-cevallos.jpg",
    "party": "CREO",
    "province": "pichincha",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 42,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2018",
    "biography": "Francisco Cevallos es Vicepresidente de la Asamblea Nacional, conocido por su trabajo en reformas electorales y el fortalecimiento del sistema judicial del país.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en reformas judiciales",
        "description": "Iniciativa para mejorar liderazgo en reformas judiciales en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de compromiso con la transparencia",
        "description": "Iniciativa para mejorar compromiso con la transparencia en Pichincha.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Francisco Cevallos ha mostrado liderazgo en reformas judiciales en su gestión política. Su enfoque en compromiso con la transparencia ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en temas económicos.",
      "strengths": [
        "Liderazgo en reformas judiciales",
        "compromiso con la transparencia"
      ],
      "weaknesses": [
        "Falta de propuestas en temas económicos",
        "poco énfasis en educación pública"
      ]
    }
  },
  {
    "id": "80",
    "name": "Valeria Molina",
    "image": "/valeria-molina.jpg",
    "party": "Pachakutik",
    "province": "sucumbíos",
    "currentPosition": "Prefecto",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 41,
    "birthplace": "Sucumbíos, Ecuador",
    "careerStart": "2018",
    "biography": "Valeria Molina es Prefecta de Sucumbíos. Su trabajo ha estado enfocado en mejorar la infraestructura vial, el acceso a servicios básicos y el desarrollo agrícola de la provincia.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Sucumbíos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Sucumbíos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Fuerte liderazgo en infraestructura y servicios rurales",
        "description": "Iniciativa para mejorar fuerte liderazgo en infraestructura y servicios rurales en Sucumbíos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Valeria Molina ha mostrado fuerte liderazgo en infraestructura y servicios rurales en su gestión política. Su enfoque en fuerte liderazgo en infraestructura y servicios rurales ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en temas de desarrollo urbano y seguridad ciudadana.",
      "strengths": [
        "Fuerte liderazgo en infraestructura y servicios rurales"
      ],
      "weaknesses": [
        "Falta de propuestas en temas de desarrollo urbano y seguridad ciudadana"
      ]
    }
  },
  {
    "id": "81",
    "name": "Carlos Dávalos",
    "image": "/carlos-dávalos.jpg",
    "party": "Movimiento Unión Ecuatoriana",
    "province": "galápagos",
    "currentPosition": "Concejal",
    "experience": 6,
    "proposalsFulfilled": 36,
    "approvalRating": 73,
    "age": 39,
    "birthplace": "Galápagos, Ecuador",
    "careerStart": "2019",
    "biography": "Carlos Dávalos es concejal de Galápagos y ha sido un defensor del turismo sostenible y la conservación del ecosistema insular. Su trabajo también ha incluido la promoción de políticas públicas de protección ambiental.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Galápagos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Galápagos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque en la conservación ambiental y el turismo sostenible",
        "description": "Iniciativa para mejorar enfoque en la conservación ambiental y el turismo sostenible en Galápagos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Carlos Dávalos ha mostrado enfoque en la conservación ambiental y el turismo sostenible en su gestión política. Su enfoque en enfoque en la conservación ambiental y el turismo sostenible ha sido notable, aunque enfrenta desafíos relacionados con críticas por la falta de propuestas en otros sectores como la salud pública.",
      "strengths": [
        "Enfoque en la conservación ambiental y el turismo sostenible"
      ],
      "weaknesses": [
        "Críticas por la falta de propuestas en otros sectores como la salud pública"
      ]
    }
  },
  {
    "id": "82",
    "name": "Beatriz Pérez",
    "image": "/beatriz-pérez.jpg",
    "party": "Movimiento AMIGO",
    "province": "orellana",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 45,
    "birthplace": "Orellana, Ecuador",
    "careerStart": "2018",
    "biography": "Beatriz Pérez es asambleísta por Orellana. Se ha destacado por su enfoque en el desarrollo de la región amazónica y el fortalecimiento de los derechos indígenas, así como en la promoción de políticas económicas locales.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Orellana",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Orellana."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme en defensa de los derechos indígenas y el desarrollo económico",
        "description": "Iniciativa para mejorar firme en defensa de los derechos indígenas y el desarrollo económico en Orellana.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Beatriz Pérez ha mostrado firme en defensa de los derechos indígenas y el desarrollo económico en su gestión política. Su enfoque en firme en defensa de los derechos indígenas y el desarrollo económico ha sido notable, aunque enfrenta desafíos relacionados con falta de enfoque en el fortalecimiento de la infraestructura social y de transporte.",
      "strengths": [
        "Firme en defensa de los derechos indígenas y el desarrollo económico"
      ],
      "weaknesses": [
        "Falta de enfoque en el fortalecimiento de la infraestructura social y de transporte"
      ]
    }
  },
  {
    "id": "83",
    "name": "Fernando Zambrano",
    "image": "/fernando-zambrano.jpg",
    "party": "Sociedad Patriótica",
    "province": "santa elena",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 75,
    "age": 49,
    "birthplace": "Santa Elena, Ecuador",
    "careerStart": "2018",
    "biography": "Fernando Zambrano es Vicepresidente de la Asamblea Nacional. Es conocido por su enfoque en las reformas fiscales y su compromiso con la creación de un sistema más justo y equitativo para el país.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Santa Elena",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Santa Elena."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme en las reformas fiscales y la equidad social",
        "description": "Iniciativa para mejorar firme en las reformas fiscales y la equidad social en Santa Elena.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Fernando Zambrano ha mostrado firme en las reformas fiscales y la equidad social en su gestión política. Su enfoque en firme en las reformas fiscales y la equidad social ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en áreas de salud y educación públicas.",
      "strengths": [
        "Firme en las reformas fiscales y la equidad social"
      ],
      "weaknesses": [
        "Falta de propuestas en áreas de salud y educación públicas"
      ]
    }
  },
  {
    "id": "84",
    "name": "Valentina Ortega",
    "image": "/valentina-ortega.jpg",
    "party": "Izquierda Democrática",
    "province": "imbabura",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 38,
    "approvalRating": 77,
    "age": 42,
    "birthplace": "Imbabura, Ecuador",
    "careerStart": "2018",
    "biography": "Valentina Ortega es asambleísta de Imbabura, especializada en temas de salud pública y derechos humanos. Ha promovido leyes para mejorar la atención médica en zonas rurales.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Imbabura",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Imbabura."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la salud pública y los derechos humanos",
        "description": "Iniciativa para mejorar compromiso con la salud pública y los derechos humanos en Imbabura.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Valentina Ortega ha mostrado compromiso con la salud pública y los derechos humanos en su gestión política. Su enfoque en compromiso con la salud pública y los derechos humanos ha sido notable, aunque enfrenta desafíos relacionados con algunas críticas por su falta de propuestas económicas claras.",
      "strengths": [
        "Compromiso con la salud pública y los derechos humanos"
      ],
      "weaknesses": [
        "Algunas críticas por su falta de propuestas económicas claras"
      ]
    }
  },
  {
    "id": "85",
    "name": "René Hernández",
    "image": "/rené-hernández.jpg",
    "party": "CREO",
    "province": "cañar",
    "currentPosition": "Presidente de la República",
    "experience": 8,
    "proposalsFulfilled": 40,
    "approvalRating": 81,
    "age": 51,
    "birthplace": "Cañar, Ecuador",
    "careerStart": "2017",
    "biography": "René Hernández es Presidente de Ecuador. Se ha distinguido por sus políticas en defensa de la soberanía nacional y la mejora de la infraestructura del país.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Cañar",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Cañar."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en la defensa de la soberanía",
        "description": "Iniciativa para mejorar liderazgo en la defensa de la soberanía en Cañar.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      },
      {
        "title": "Plan de mejoras en infraestructura",
        "description": "Iniciativa para mejorar mejoras en infraestructura en Cañar.",
        "status": "En progreso",
        "progress": 50,
        "category": "Seguridad"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 5
        },
        {
          "name": "Transparencia",
          "rating": 5
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 4
        },
        {
          "name": "Comunicación",
          "rating": 5
        }
      ],
      "detailed": "René Hernández ha mostrado liderazgo en la defensa de la soberanía en su gestión política. Su enfoque en mejoras en infraestructura ha sido notable, aunque enfrenta desafíos relacionados con falta de consenso con algunos sectores de la sociedad.",
      "strengths": [
        "Liderazgo en la defensa de la soberanía",
        "mejoras en infraestructura"
      ],
      "weaknesses": [
        "Falta de consenso con algunos sectores de la sociedad",
        "problemas con su postura en temas de educación pública"
      ]
    }
  },
  {
    "id": "86",
    "name": "Karina Jiménez",
    "image": "/karina-jiménez.jpg",
    "party": "Pachakutik",
    "province": "loja",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 43,
    "birthplace": "Loja, Ecuador",
    "careerStart": "2018",
    "biography": "Karina Jiménez es concejala de Loja y ha promovido iniciativas para mejorar el acceso a servicios básicos, especialmente en zonas rurales. Además, ha impulsado proyectos culturales en la ciudad.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Loja",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Loja."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en infraestructura rural y promoción cultural",
        "description": "Iniciativa para mejorar trabajo en infraestructura rural y promoción cultural en Loja.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Karina Jiménez ha mostrado trabajo en infraestructura rural y promoción cultural en su gestión política. Su enfoque en trabajo en infraestructura rural y promoción cultural ha sido notable, aunque enfrenta desafíos relacionados con falta de enfoque en la educación pública y la seguridad ciudadana.",
      "strengths": [
        "Trabajo en infraestructura rural y promoción cultural"
      ],
      "weaknesses": [
        "Falta de enfoque en la educación pública y la seguridad ciudadana"
      ]
    }
  },
  {
    "id": "87",
    "name": "Raúl López",
    "image": "/raúl-lópez.jpg",
    "party": "Partido Socialista Ecuatoriano",
    "province": "pastaza",
    "currentPosition": "Concejal",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 70,
    "age": 46,
    "birthplace": "Pastaza, Ecuador",
    "careerStart": "2018",
    "biography": "Raúl López es concejal de Esmeraldas y su trabajo se ha enfocado en mejorar la seguridad en la provincia y en crear oportunidades de empleo para los jóvenes.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Pastaza",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pastaza."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque en seguridad y creación de empleo para jóvenes",
        "description": "Iniciativa para mejorar enfoque en seguridad y creación de empleo para jóvenes en Pastaza.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Raúl López ha mostrado enfoque en seguridad y creación de empleo para jóvenes en su gestión política. Su enfoque en enfoque en seguridad y creación de empleo para jóvenes ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas para mejorar los servicios públicos en zonas rurales.",
      "strengths": [
        "Enfoque en seguridad y creación de empleo para jóvenes"
      ],
      "weaknesses": [
        "Falta de propuestas para mejorar los servicios públicos en zonas rurales"
      ]
    }
  },
  {
    "id": "88",
    "name": "Jorge Ortíz",
    "image": "/jorge-ortíz.jpg",
    "party": "Acción Democrática Nacional, ADN",
    "province": "napo",
    "currentPosition": "Vicepresidente de la República",
    "experience": 8,
    "proposalsFulfilled": 38,
    "approvalRating": 76,
    "age": 50,
    "birthplace": "Napo, Ecuador",
    "careerStart": "2017",
    "biography": "Jorge Ortíz es vicepresidente de la Asamblea Nacional. Ha trabajado en la implementación de reformas políticas y judiciales con el objetivo de mejorar la transparencia y la equidad en el país.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Napo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Napo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en reformas judiciales y políticas públicas",
        "description": "Iniciativa para mejorar trabajo en reformas judiciales y políticas públicas en Napo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Jorge Ortíz ha mostrado trabajo en reformas judiciales y políticas públicas en su gestión política. Su enfoque en trabajo en reformas judiciales y políticas públicas ha sido notable, aunque enfrenta desafíos relacionados con falta de experiencia en temas económicos y sociales.",
      "strengths": [
        "Trabajo en reformas judiciales y políticas públicas"
      ],
      "weaknesses": [
        "Falta de experiencia en temas económicos y sociales"
      ]
    }
  },
  {
    "id": "89",
    "name": "Paola Hernández",
    "image": "/paola-hernández.jpg",
    "party": "Construye",
    "province": "carchi",
    "currentPosition": "Asambleísta Nacional",
    "experience": 6,
    "proposalsFulfilled": 36,
    "approvalRating": 73,
    "age": 37,
    "birthplace": "Carchi, Ecuador",
    "careerStart": "2019",
    "biography": "Paola Hernández es asambleísta por Carchi. Su enfoque ha estado en la mejora de la infraestructura vial y en la promoción de políticas que fortalezcan la autonomía local y la descentralización.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Carchi",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Carchi."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme en la defensa de la autonomía local y en el desarrollo vial",
        "description": "Iniciativa para mejorar firme en la defensa de la autonomía local y en el desarrollo vial en Carchi.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Paola Hernández ha mostrado firme en la defensa de la autonomía local y en el desarrollo vial en su gestión política. Su enfoque en firme en la defensa de la autonomía local y en el desarrollo vial ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en temas sociales como la educación y salud públicas.",
      "strengths": [
        "Firme en la defensa de la autonomía local y en el desarrollo vial"
      ],
      "weaknesses": [
        "Falta de propuestas en temas sociales como la educación y salud públicas"
      ]
    }
  },
  {
    "id": "90",
    "name": "Luis Córdova",
    "image": "/luis-córdova.jpg",
    "party": "Unidad Popular",
    "province": "el oro",
    "currentPosition": "Prefecto",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 43,
    "birthplace": "El Oro, Ecuador",
    "careerStart": "2018",
    "biography": "Luis Córdova es Prefecto de El Oro. Ha impulsado proyectos para la mejora de las condiciones de vida en las zonas rurales de la provincia, con énfasis en la agricultura sostenible y la infraestructura vial.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - El Oro",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en El Oro."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Enfoque en el desarrollo rural y la agricultura sostenible",
        "description": "Iniciativa para mejorar enfoque en el desarrollo rural y la agricultura sostenible en El Oro.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Luis Córdova ha mostrado enfoque en el desarrollo rural y la agricultura sostenible en su gestión política. Su enfoque en enfoque en el desarrollo rural y la agricultura sostenible ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas claras en áreas de seguridad y salud pública.",
      "strengths": [
        "Enfoque en el desarrollo rural y la agricultura sostenible"
      ],
      "weaknesses": [
        "Falta de propuestas claras en áreas de seguridad y salud pública"
      ]
    }
  },
  {
    "id": "91",
    "name": "Alfredo Berrú",
    "image": "/alfredo-berrú.jpg",
    "party": "Partido Sociedad Unida Más Acción (SUMA)",
    "province": "sucumbíos",
    "currentPosition": "Asambleísta Provincial",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 40,
    "birthplace": "Sucumbíos, Ecuador",
    "careerStart": "2018",
    "biography": "Alfredo Berrú es asambleísta por Sucumbíos, conocido por su trabajo en mejorar la infraestructura de la región amazónica y por ser un defensor del medio ambiente en la Amazonía ecuatoriana.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Sucumbíos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Sucumbíos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Firme en la defensa del medio ambiente y el desarrollo económico sostenible",
        "description": "Iniciativa para mejorar firme en la defensa del medio ambiente y el desarrollo económico sostenible en Sucumbíos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Alfredo Berrú ha mostrado firme en la defensa del medio ambiente y el desarrollo económico sostenible en su gestión política. Su enfoque en firme en la defensa del medio ambiente y el desarrollo económico sostenible ha sido notable, aunque enfrenta desafíos relacionados con críticas por no enfocarse en otros temas como la educación y la salud pública.",
      "strengths": [
        "Firme en la defensa del medio ambiente y el desarrollo económico sostenible"
      ],
      "weaknesses": [
        "Críticas por no enfocarse en otros temas como la educación y la salud pública"
      ]
    }
  },
  {
    "id": "92",
    "name": "Silvia Romero",
    "image": "/silvia-romero.jpg",
    "party": "Movimiento Concertación",
    "province": "pichincha",
    "currentPosition": "Concejal",
    "experience": 7,
    "proposalsFulfilled": 38,
    "approvalRating": 77,
    "age": 42,
    "birthplace": "Pichincha, Ecuador",
    "careerStart": "2018",
    "biography": "Silvia Romero es concejala de Pichincha. Ha liderado proyectos que promueven la educación inclusiva y el apoyo a las comunidades rurales de la provincia.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Pichincha",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Pichincha."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en educación y apoyo a comunidades rurales",
        "description": "Iniciativa para mejorar liderazgo en educación y apoyo a comunidades rurales en Pichincha.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Silvia Romero ha mostrado liderazgo en educación y apoyo a comunidades rurales en su gestión política. Su enfoque en liderazgo en educación y apoyo a comunidades rurales ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas claras sobre seguridad y transporte público.",
      "strengths": [
        "Liderazgo en educación y apoyo a comunidades rurales"
      ],
      "weaknesses": [
        "Falta de propuestas claras sobre seguridad y transporte público"
      ]
    }
  },
  {
    "id": "93",
    "name": "César Muñoz",
    "image": "/césar-muñoz.jpg",
    "party": "Revolución Ciudadana",
    "province": "santo domingo",
    "currentPosition": "Asambleísta Nacional",
    "experience": 7,
    "proposalsFulfilled": 36,
    "approvalRating": 72,
    "age": 45,
    "birthplace": "Santo Domingo, Ecuador",
    "careerStart": "2018",
    "biography": "César Muñoz es asambleísta por Santa Elena, un político conocido por su enfoque en el desarrollo de la infraestructura turística y la mejora del transporte en la región costera.",
    "career": [
      {
        "title": "Asambleísta Nacional",
        "organization": "Gobierno de Ecuador - Santo Domingo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Santo Domingo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Foco en el desarrollo del turismo y la infraestructura",
        "description": "Iniciativa para mejorar foco en el desarrollo del turismo y la infraestructura en Santo Domingo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "César Muñoz ha mostrado foco en el desarrollo del turismo y la infraestructura en su gestión política. Su enfoque en foco en el desarrollo del turismo y la infraestructura ha sido notable, aunque enfrenta desafíos relacionados con no ha abordado de manera profunda temas como salud y seguridad.",
      "strengths": [
        "Foco en el desarrollo del turismo y la infraestructura"
      ],
      "weaknesses": [
        "No ha abordado de manera profunda temas como salud y seguridad"
      ]
    }
  },
  {
    "id": "94",
    "name": "Patricia Gutiérrez",
    "image": "/patricia-gutiérrez.jpg",
    "party": "Avanza",
    "province": "tungurahua",
    "currentPosition": "Prefecto",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 75,
    "age": 44,
    "birthplace": "Tungurahua, Ecuador",
    "careerStart": "2018",
    "biography": "Patricia Gutiérrez es prefecta de Tungurahua. Su principal enfoque ha sido mejorar la infraestructura vial, promover el desarrollo económico y crear nuevas fuentes de empleo para la juventud.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Tungurahua",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Tungurahua."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Desarrollo económico y creación de empleo juvenil",
        "description": "Iniciativa para mejorar desarrollo económico y creación de empleo juvenil en Tungurahua.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Patricia Gutiérrez ha mostrado desarrollo económico y creación de empleo juvenil en su gestión política. Su enfoque en desarrollo económico y creación de empleo juvenil ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en áreas de educación y atención a la salud.",
      "strengths": [
        "Desarrollo económico y creación de empleo juvenil"
      ],
      "weaknesses": [
        "Falta de propuestas en áreas de educación y atención a la salud"
      ]
    }
  },
  {
    "id": "95",
    "name": "Juan Vargas",
    "image": "/juan-vargas.jpg",
    "party": "CREO",
    "province": "zamora chinchipe",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 39,
    "approvalRating": 78,
    "age": 48,
    "birthplace": "Zamora Chinchipe, Ecuador",
    "careerStart": "2018",
    "biography": "Juan Vargas es vicepresidente de la Asamblea Nacional. Ha sido un defensor de la descentralización del poder y la mejora en la transparencia del gobierno ecuatoriano.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Zamora Chinchipe",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Zamora Chinchipe."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Compromiso con la descentralización y la transparencia",
        "description": "Iniciativa para mejorar compromiso con la descentralización y la transparencia en Zamora Chinchipe.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Juan Vargas ha mostrado compromiso con la descentralización y la transparencia en su gestión política. Su enfoque en compromiso con la descentralización y la transparencia ha sido notable, aunque enfrenta desafíos relacionados con críticas por su falta de experiencia en la gestión de crisis.",
      "strengths": [
        "Compromiso con la descentralización y la transparencia"
      ],
      "weaknesses": [
        "Críticas por su falta de experiencia en la gestión de crisis"
      ]
    }
  },
  {
    "id": "96",
    "name": "Andrea Salazar",
    "image": "/andrea-salazar.jpg",
    "party": "Construye",
    "province": "morona santiago",
    "currentPosition": "Presidente de la República",
    "experience": 7,
    "proposalsFulfilled": 39,
    "approvalRating": 79,
    "age": 42,
    "birthplace": "Morona Santiago, Ecuador",
    "careerStart": "2018",
    "biography": "Andrea Salazar es presidenta del Ecuador. Ha impulsado políticas para la modernización de la economía ecuatoriana y la mejora en la inversión en infraestructura.",
    "career": [
      {
        "title": "Presidente de la República",
        "organization": "Gobierno de Ecuador - Morona Santiago",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Morona Santiago."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Liderazgo en la modernización económica e infraestructura",
        "description": "Iniciativa para mejorar liderazgo en la modernización económica e infraestructura en Morona Santiago.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Andrea Salazar ha mostrado liderazgo en la modernización económica e infraestructura en su gestión política. Su enfoque en liderazgo en la modernización económica e infraestructura ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas claras en el área de salud y educación.",
      "strengths": [
        "Liderazgo en la modernización económica e infraestructura"
      ],
      "weaknesses": [
        "Falta de propuestas claras en el área de salud y educación"
      ]
    }
  },
  {
    "id": "97",
    "name": "Guillermo Mendoza",
    "image": "/guillermo-mendoza.jpg",
    "party": "Pachakutik",
    "province": "chimborazo",
    "currentPosition": "Prefecto",
    "experience": 7,
    "proposalsFulfilled": 35,
    "approvalRating": 71,
    "age": 46,
    "birthplace": "Chimborazo, Ecuador",
    "careerStart": "2018",
    "biography": "Guillermo Mendoza es prefecto de Chimborazo. Ha trabajado por la reactivación de la economía local a través de políticas de apoyo al agro y la minería responsable en la provincia.",
    "career": [
      {
        "title": "Prefecto",
        "organization": "Gobierno de Ecuador - Chimborazo",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Chimborazo."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Foco en el apoyo al agro y la minería responsable",
        "description": "Iniciativa para mejorar foco en el apoyo al agro y la minería responsable en Chimborazo.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Guillermo Mendoza ha mostrado foco en el apoyo al agro y la minería responsable en su gestión política. Su enfoque en foco en el apoyo al agro y la minería responsable ha sido notable, aunque enfrenta desafíos relacionados con algunas críticas sobre la falta de proyectos educativos y de salud para la zona rural.",
      "strengths": [
        "Foco en el apoyo al agro y la minería responsable"
      ],
      "weaknesses": [
        "Algunas críticas sobre la falta de proyectos educativos y de salud para la zona rural"
      ]
    }
  },
  {
    "id": "98",
    "name": "Adriana Villavicencio",
    "image": "/adriana-villavicencio.jpg",
    "party": "Movimiento Unión Ecuatoriana",
    "province": "guayas",
    "currentPosition": "Asambleísta Provincial",
    "experience": 6,
    "proposalsFulfilled": 38,
    "approvalRating": 76,
    "age": 38,
    "birthplace": "Guayas, Ecuador",
    "careerStart": "2019",
    "biography": "Adriana Villavicencio es concejala de Guayas, conocida por su lucha por la igualdad de género y los derechos humanos, especialmente en áreas urbanas marginadas de la provincia.",
    "career": [
      {
        "title": "Asambleísta Provincial",
        "organization": "Gobierno de Ecuador - Guayas",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Guayas."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensora de los derechos humanos y la igualdad de género",
        "description": "Iniciativa para mejorar defensora de los derechos humanos y la igualdad de género en Guayas.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Adriana Villavicencio ha mostrado defensora de los derechos humanos y la igualdad de género en su gestión política. Su enfoque en defensora de los derechos humanos y la igualdad de género ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas para mejorar la infraestructura urbana.",
      "strengths": [
        "Defensora de los derechos humanos y la igualdad de género"
      ],
      "weaknesses": [
        "Falta de propuestas para mejorar la infraestructura urbana"
      ]
    }
  },
  {
    "id": "99",
    "name": "Carlos López",
    "image": "/carlos-lópez.jpg",
    "party": "Movimiento AMIGO",
    "province": "los ríos",
    "currentPosition": "Concejal",
    "experience": 7,
    "proposalsFulfilled": 37,
    "approvalRating": 74,
    "age": 47,
    "birthplace": "Los Ríos, Ecuador",
    "careerStart": "2018",
    "biography": "Carlos López es concejal de Los Ríos y ha sido reconocido por su trabajo en la creación de leyes para la protección de las áreas rurales y la mejora de la seguridad en la provincia.",
    "career": [
      {
        "title": "Concejal",
        "organization": "Gobierno de Ecuador - Los Ríos",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Los Ríos."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Trabajo en la protección de áreas rurales y la seguridad",
        "description": "Iniciativa para mejorar trabajo en la protección de áreas rurales y la seguridad en Los Ríos.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Carlos López ha mostrado trabajo en la protección de áreas rurales y la seguridad en su gestión política. Su enfoque en trabajo en la protección de áreas rurales y la seguridad ha sido notable, aunque enfrenta desafíos relacionados con no se ha centrado lo suficiente en políticas educativas y de salud.",
      "strengths": [
        "Trabajo en la protección de áreas rurales y la seguridad"
      ],
      "weaknesses": [
        "No se ha centrado lo suficiente en políticas educativas y de salud"
      ]
    }
  },
  {
    "id": "100",
    "name": "Luis Cedeño",
    "image": "/luis-cedeño.jpg",
    "party": "Movimiento Revolución Ciudadana",
    "province": "manabí",
    "currentPosition": "Vicepresidente de la República",
    "experience": 7,
    "proposalsFulfilled": 38,
    "approvalRating": 76,
    "age": 45,
    "birthplace": "Manabí, Ecuador",
    "careerStart": "2018",
    "biography": "Luis Cedeño es vicepresidente de la Asamblea Nacional. Ha sido un defensor de la cultura y el patrimonio ecuatoriano, y ha impulsado leyes para promover el turismo cultural en las provincias costeras.",
    "career": [
      {
        "title": "Vicepresidente de la República",
        "organization": "Gobierno de Ecuador - Manabí",
        "period": "2023 - Presente",
        "description": "Responsable de políticas públicas y gestión en Manabí."
      },
      {
        "title": "Funcionario Público",
        "organization": "Ministerio de Gobierno",
        "period": "2018 - 2023",
        "description": "Coordinación de proyectos y políticas públicas a nivel nacional."
      },
      {
        "title": "Asesor Político",
        "organization": "Asamblea Nacional",
        "period": "2015 - 2018",
        "description": "Asesoramiento en temas legislativos y políticas públicas."
      }
    ],
    "proposals": [
      {
        "title": "Plan de Defensor de la cultura ecuatoriana y el turismo",
        "description": "Iniciativa para mejorar defensor de la cultura ecuatoriana y el turismo en Manabí.",
        "status": "Pendiente",
        "progress": 15,
        "category": "Economía"
      }
    ],
    "analysis": {
      "categories": [
        {
          "name": "Gestión Económica",
          "rating": 4
        },
        {
          "name": "Transparencia",
          "rating": 4
        },
        {
          "name": "Liderazgo",
          "rating": 5
        },
        {
          "name": "Cumplimiento",
          "rating": 3
        },
        {
          "name": "Comunicación",
          "rating": 4
        }
      ],
      "detailed": "Luis Cedeño ha mostrado defensor de la cultura ecuatoriana y el turismo en su gestión política. Su enfoque en defensor de la cultura ecuatoriana y el turismo ha sido notable, aunque enfrenta desafíos relacionados con falta de propuestas en el ámbito de la infraestructura educativa.",
      "strengths": [
        "Defensor de la cultura ecuatoriana y el turismo"
      ],
      "weaknesses": [
        "Falta de propuestas en el ámbito de la infraestructura educativa"
      ]
    }
  }
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
// Lista completa y corregida de partidos políticos
export async function getParties() {
  return [
    { id: "ADN", name: "Acción Democrática Nacional" },
    { id: "PSC", name: "Partido Social Cristiano" },
    { id: "ID", name: "Izquierda Democrática" },
    { id: "CREO", name: "CREO" },
    { id: "RC", name: "Revolución Ciudadana" },
    { id: "PSP", name: "Partido Sociedad Patriótica" },
    { id: "SUMA", name: "Partido Sociedad Unida Más Acción" },
    { id: "Pachakutik", name: "Movimiento de Unidad Plurinacional Pachakutik" },
    { id: "Avanza", name: "Avanza" },
    { id: "Construye", name: "Construye" },
    { id: "UP", name: "Unidad Popular" },
    { id: "PSE", name: "Partido Socialista Ecuatoriano" },
    { id: "MAPE", name: "Movimiento Amigo" },
    { id: "Independiente", name: "Independiente" }
  ]
}

// Función mejorada para guardar mensajes de contacto
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
    
    // Validación básica de los datos
    if (!message.name || !message.email || !message.message) {
      throw new Error("Faltan campos requeridos")
    }

    // Añadir timestamp y estado por defecto si no existe
    const messageToSave = {
      ...message,
      createdAt: new Date().toISOString(),
      status: message.status || "pending"
    }

    const docRef = await addDoc(contactRef, messageToSave)
    
    return { 
      success: true, 
      messageId: docRef.id 
    }
  } catch (error) {
    console.error("Error al guardar mensaje de contacto:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido"
    }
  }
}
