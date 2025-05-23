import type { Politician, Province, User } from "./types"
import { getFirestore, collection, addDoc } from "firebase/firestore"

// Datos de ejemplo para la aplicación
const politiciansData: Politician[] = [
    {
    "id": "1",
    "name": "Daniel Noboa Azin",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Daniel_Noboa_en_abril_de_2025.jpg",
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
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/84/CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_DEL_PLENO_776_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_JULIO_DE_2022_%2852227840728%29.jpg",
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
        "name": "Fernando Aguirre Cordero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fernando_Aguirre_Cordero.jpg/250px-Fernando_Aguirre_Cordero.jpg",
        "party": "Partido Social Cristiano",
        "province": "azuay",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "Fernando Aguirre Cordero ( Cuenca , 5 de noviembre de 1969) un político ecuatoriano , conocido mayormente en provincia de Azuay , desempeñó cargos de elección popular y designación, fue gobernador de su provincia y legislador dos ocasiones. Es militante y presidente provincial del Partido Social Cristiano .",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["regionalismo", "gestión pública"],
        "detailed": "Figura relevante en Azuay, con experiencia como gobernador y legislador. Su carrera se ha centrado en la gestión pública y el fortalecimiento del Partido Social Cristiano en la provincia.",
        "strengths": ["Amplia experiencia política regional", "Conocido en Azuay", "Liderazgo en el PSC provincial"],
        "weaknesses": ["Poca proyección nacional", "Escasa visibilidad mediática fuera de su provincia"]
    }
    },
    {
        "id": "4",
        "name": "Marco Aij",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Marco_Aij.jpg/250px-Marco_Aij.jpg",
        "party": "Pachakutik",
        "province": "",
        "currentPosition": "",
        "experience": 8,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 33,
        "birthplace": "",
        "careerStart": "2017",
        "biography": "Marco Aij Sumpinanch Sesinia ( Huasaga , 15 de enero de 1973), conocido también como Marco Aij, es un político , dirigente y cantautor achuar ecuatoriano . Durante el período de 2003 a 2006, desempeñó el cargo de vicepresidente de la NAE ( Nación Achuar Ecuatoriana ). [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["liderazgo indígena", "gestión comunitaria"],
        "detailed": "Dirigente achuar, ex vicepresidente de la Nación Achuar Ecuatoriana. Ha trabajado en la defensa de los derechos indígenas y la promoción de la cultura achuar.",
        "strengths": ["Conexión con comunidades indígenas", "Experiencia en liderazgo comunitario"],
        "weaknesses": ["Poca experiencia en política nacional", "Bajo perfil mediático"]
    }
    },
    {
        "id": "5",
        "name": "Fabián Alarcón",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Fabian_Alarcon.jpg/250px-Fabian_Alarcon.jpg",
        "party": "Frente Radical Alfarista (desde 1988) Demócrata (hasta 1988)",
        "province": "",
        "currentPosition": "",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Fabián Ernesto Alarcón Rivera ( Quito , 14 de abril de 1947) [ 1 ] ​ es un abogado y ex político ecuatoriano . Fue presidente interino del Ecuador entre el 11 de febrero de 1997. [ 2 ] ​ y el 10 de agosto de 1998, por designación del Congreso Nacional , tras el derrocamiento de Abdalá Bucaram .",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["transición democrática", "liderazgo institucional"],
        "detailed": "Presidente interino tras la destitución de Bucaram. Su gestión se centró en estabilizar el país y convocar nuevas elecciones.",
        "strengths": ["Experiencia en crisis políticas", "Capacidad de diálogo"],
        "weaknesses": ["Gestión breve y transitoria", "Falta de liderazgo carismático"]
    }
    },
    {
        "id": "6",
        "name": "Alejandro Gallo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Alejandro_Gallo.png/250px-Alejandro_Gallo.png",
        "party": "",
        "province": "guayas",
        "currentPosition": "",
        "experience": 7,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 32,
        "birthplace": "",
        "careerStart": "2018",
        "biography": "Harry Alejandro Gallo Plaza es un político ecuatoriano. Fue candidato a Prefecto del Guayas por la lista 61, Renovación, en 2023. Cursa la carrera de Derecho y ha realizado varios cursos sobre derechos humanos, administración y presupuestos públicos. Fue la primera persona en denunciar públicamente ante la Asamblea Nacional, los actos de corrupción en el gobierno del actual presidente de la República, Guillermo Lasso , referente a la designación de autoridades de control. [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["denuncia de corrupción", "juventud política"],
        "detailed": "Joven político guayasense, conocido por denunciar corrupción en el gobierno de Lasso. Enfocado en derechos humanos y administración pública.",
        "strengths": ["Valentía para denunciar corrupción", "Formación en derecho y administración"],
        "weaknesses": ["Poca experiencia", "Escasa trayectoria política"]
    }
    },
    {
        "id": "7",
        "name": "Luis Almeida",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/SESI%C3%93N_NO._770_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_29_DE_MARZO_DEL_2022._%2851968151117%29.jpg/250px-SESI%C3%93N_NO._770_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_29_DE_MARZO_DEL_2022._%2851968151117%29.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "Luis Fernando Almeida Morán ( Vinces , 24 de junio de 1958) es un abogado y político ecuatoriano . Ha sido asambleísta y diputado en varios periodos legislativos, además de concejal de Guayaquil .",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["legislativo", "PSC"],
        "detailed": "Abogado y político con larga trayectoria como asambleísta y concejal de Guayaquil. Figura tradicional del Partido Social Cristiano.",
        "strengths": ["Experiencia legislativa", "Conocido en Guayaquil"],
        "weaknesses": ["Asociado a la vieja política", "Poca renovación de ideas"]
    }
    },
    {
        "id": "8",
        "name": "Fernando Alvarado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Fernando_Alvarado_Secretario_de_Comunicaci%C3%B3n_de_la_Presidencia_en_entrevista_en_la_Radio_de_la_Asamblea_Nacional_%286026095193%29.jpg/250px-Fernando_Alvarado_Secretario_de_Comunicaci%C3%B3n_de_la_Presidencia_en_entrevista_en_la_Radio_de_la_Asamblea_Nacional_%286026095193%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Fernando Alvarado Espinel es un político ecuatoriano que se desempeñó como Secretario Nacional de Comunicación y Ministro de Turismo y Secretario de la Administración durante la presidencia de Rafael Correa .",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["comunicación política", "correísmo"],
        "detailed": "Ex Secretario de Comunicación y Ministro de Turismo durante el correísmo. Su gestión estuvo marcada por el control mediático y la promoción de la imagen del gobierno.",
        "strengths": ["Experiencia en comunicación estatal", "Cercanía al poder ejecutivo"],
        "weaknesses": ["Vinculado a escándalos de corrupción", "Fuerte rechazo de sectores opositores"]
    }
    },
    {
        "id": "9",
        "name": "Harry Álvarez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Harry Abdón Álvarez García es un abogado y político ecuatoriano que ocupó la alcaldía de Machala entre 1988 y 1992. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["gobierno local"],
        "detailed": "Ex alcalde de Machala. Su gestión se centró en el desarrollo urbano y la administración municipal.",
        "strengths": ["Experiencia en gestión local"],
        "weaknesses": ["Poca proyección nacional"]
    }
    },
    {
        "id": "10",
        "name": "Luis Andrade Galindo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 60,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 85,
        "birthplace": "",
        "careerStart": "1965",
        "biography": "Luis Aníbal Andrade Galindo ( Cotacachi , [ 1 ] ​ 1943/1944) [ 2 ] ​ es un abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["derecho", "política provincial"],
        "detailed": "Abogado y político con amplia trayectoria en Cotacachi e Imbabura.",
        "strengths": ["Experiencia jurídica"],
        "weaknesses": ["Bajo perfil nacional"]
    }
    },
    {
        "id": "11",
        "name": "Trajano Andrade",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Trajano_Andrade_%2812_de_noviembre_de_2008%29.jpg/250px-Trajano_Andrade_%2812_de_noviembre_de_2008%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "Diputado Nacional del Ecuador",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Trajano Roberto Andrade Viteri ( Manta , 22 de noviembre de 1949) [ 1 ] ​ es un abogado y político de Ecuador que ha ocupado varios cargos públicos.",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["legislativo", "derecho"],
        "detailed": "Abogado y político, diputado nacional con experiencia en cargos públicos.",
        "strengths": ["Experiencia legislativa"],
        "weaknesses": ["Poca notoriedad fuera de su provincia"]
    }
    },
    {
        "id": "12",
        "name": "Alberto Anrango",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "imbabura",
        "currentPosition": "Alcalde (2009-2014)",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Luis Alberto Anrango Bonilla (* 31 de marzo de 1947 en Cotacachi , Provincia de Imbabura ) es un dirigente indígena , maestro y político ecuatoriano de nacionalidad kichwa . Actualmente es alcalde del municipio de Cotacachi .",
        "career": [],
        "proposals": [],
        "analysis": {
        "categories": ["liderazgo indígena", "gobierno local"],
        "detailed": "Dirigente kichwa y ex alcalde de Cotacachi. Ha trabajado por la inclusión y derechos indígenas.",
        "strengths": ["Liderazgo comunitario", "Experiencia en gestión local"],
        "weaknesses": ["Poca visibilidad nacional"]
    }
    },
    {
        "id": "13",
        "name": "Jorge Añazco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "Frente Radical Alfarista",
        "province": "loja",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Jorge Añazco Castillo ( Loja ) [ 1 ] ​ fue un militar y político ecuatoriano , primer prefecto provincial de Sucumbíos y uno de los fundadores de la ciudad de Nueva Loja .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "14",
        "name": "Andrés Arauz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9s_Arauz_%28cropped%29.jpg/250px-Andr%C3%A9s_Arauz_%28cropped%29.jpg",
        "party": "Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 15,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 40,
        "birthplace": "",
        "careerStart": "2010",
        "biography": "Andrés David Arauz Galarza ( Quito , 6 de febrero de 1985) es un político y economista ecuatoriano . Fue ministro coordinador de Conocimiento y Talento Humano entre marzo de 2015 y mayo de 2017, durante el gobierno de Rafael Correa . [ 3 ] ​ En 2018, tras la ruptura en Alianza PAIS entre Lenín Moreno y Correa, Arauz se mantiene firme al Revolución Ciudadana (RC). En las elecciones presidenciales de 2021 , fue el candidato de la coalición Unión por la Esperanza , plataforma ploítica con la que la RC participó en aquellos comicios. En la primera vuelta, obtuvo el primer lugar, con el 32,72% de votos; no obstante, en el balotaje fue derrotado por Guillermo Lasso , al solo lograr 47,64% de la votación. [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "15",
        "name": "Geovanni Atarihuana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Atarihuana.jpg/250px-Atarihuana.jpg",
        "party": "Movimiento Popular Democrático (desde años 1980, hasta 2014) Unidad Popular (desde 2014)",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Geovanni Javier Atarihuana Ayala ( Quito , 6 de junio de 1972) es un sociólogo , político y exdirigente estudiantil ecuatoriano que ha llegado a asumir cargos como el de vicepresidente del Tribunal Supremo Electoral (TSE), época en la que fue el vocal más joven de la historia del organismo electoral. [ 1 ] ​ Actualmente se desempeña como director nacional de Unidad Popular (UP), consiguiendo la inscripción de este movimiento en reemplazo del Movimiento Popular Democrático (MPD).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "16",
        "name": "Raúl Auquilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Raul_Auquilla_%28detalle%29.jpg/250px-Raul_Auquilla_%28detalle%29.jpg",
        "party": "Movimiento CREO (2013-2018) Partido Social Cristiano (desde 2018)",
        "province": "loja",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Raúl Vicente Auquilla Ortega ( Sígsig , 8 de septiembre de 1952) [ 3 ] ​ en un ingeniero y político ecuatoriano que ocupó la prefectura de la provincia de Loja durante dos periodos consecutivos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "17",
        "name": "Eliseo Azuero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Eliseo_Azuero_%28detalle%29.png/250px-Eliseo_Azuero_%28detalle%29.png",
        "party": "Democracia Popular (hasta 2000) Partido Renovador Institucional Acción Nacional (2004-2007) Izquierda Democrática (2016-2017)",
        "province": "sucumbíos",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Alexis Eliseo Azuero Rodas es un político ecuatoriano que ocupó la prefectura de Sucumbíos entre 1992 y 1998. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "18",
        "name": "Carlos Baca Mancheno",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/FISCAL_GENERAL_-_CARLOS_BACA_MANCHENO_%2825627881627%29.jpg/250px-FISCAL_GENERAL_-_CARLOS_BACA_MANCHENO_%2825627881627%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 30,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 55,
        "birthplace": "",
        "careerStart": "1995",
        "biography": "Carlos Bladimir Baca Mancheno ( Latacunga , 10 de noviembre de 1970) es un abogado , jurista , catedrático de universidad y político ecuatoriano que ha desempeñado varios cargos públicos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "19",
        "name": "Fernando Balda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/14_de_marzo_de_2018_-_Comisi%C3%B3n_de_Participaci%C3%B3n_Ciudadana_%2840814705641%29_%28cropped%29.jpg/250px-14_de_marzo_de_2018_-_Comisi%C3%B3n_de_Participaci%C3%B3n_Ciudadana_%2840814705641%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS (2006-2008) Partido Sociedad Patriótica (2008-2016) Gran Acuerdo Nacional (desde 2016) Libertad es Pueblo (2019-2021)",
        "province": "",
        "currentPosition": "Diputado Nacional del Ecuador",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "Fernando Marcelo Balda Flores ( Guayaquil , 3 de agosto de 1971) es un político ecuatoriano conocido por haber cometido supuestas injurias contra Rafael Correa y cercanos a él, sin embargo, en 2018 sigue un juicio contra del exmandatario por un supuesto secuestro en Bogotá en 2012 para ser deportado a Ecuador. [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ En julio de 2018 Ecuador pidió la extradición de Correa desde Bélgica , siendo su juicio el primero que ha logrado esto contra el exmandatario. [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "20",
        "name": "Polo Baquerizo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/POLO_BAQUERIZO.jpg/250px-POLO_BAQUERIZO.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Leopoldo Bechara Ottón Eloy Osvaldo Baquerizo Adum [ 4 ] ​ ( Guayaquil , 23 de marzo de 1955) [ 1 ] ​ más conocido como Polo Baquerizo , es un periodista , conductor de televisión y político ecuatoriano . [ 5 ] ​ Fue conductor del programa concurso Haga Negocio Conmigo , desde sus inicios. Se desempeña como concejal del municipio de Guayaquil , desde el año 2003. [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "21",
        "name": "Gustavo Baroja",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Gustavo_Baroja.jpg/250px-Gustavo_Baroja.jpg",
        "party": "Izquierda Democrática (hasta 2008) Alianza PAÍS (2008-2021) Movimiento MOVER (desde 2021)",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 47,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 72,
        "birthplace": "",
        "careerStart": "1978",
        "biography": "Milton Gustavo Baroja Narváez ( Cotacachi , 1 de noviembre de 1953) [ 2 ] ​ es un economista y político ecuatoriano , prefecto provincial de Pichincha entre 2006 y 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "22",
        "name": "Samuel Bellettini",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Samuel_belletini_%28cropped%29.jpg/250px-Samuel_belletini_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Samuel Umberto Bellettini Zedeño ( Bahía de Caráquez , ?) [ 1 ] ​ es un político ecuatoriano que ocupó la presidencia del Congreso Nacional entre 1993 y 1994.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "23",
        "name": "Geovanny Benítez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/SESI%C3%93N_NO._880_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_DICIEMBRE_DEL_2023_%2853408365954%29.jpg/250px-SESI%C3%93N_NO._880_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_DICIEMBRE_DEL_2023_%2853408365954%29.jpg",
        "party": "Alianza PAÍS (2006-2018)",
        "province": "santo domingo de los tsáchilas",
        "currentPosition": "",
        "experience": 32,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 57,
        "birthplace": "",
        "careerStart": "1993",
        "biography": "Édgar Geovanny Benítez Calva ( Santo Domingo , 24 de febrero de 1968) [ 3 ] ​ es un ingeniero zootecnista y político ecuatoriano , asambleísta nacional por Santo Domingo de los Tsáchilas , desde 2023. Fue el primer prefecto provincial de Santo Domingo de los Tsáchilas, entre abril de 2008 y diciembre de 2018.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "24",
        "name": "Esteban Bernal Bernal",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Esteban_Remigio_Bernal.jpg/250px-Esteban_Remigio_Bernal.jpg",
        "party": "",
        "province": "azuay",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Esteban Bernal Bernal , político ecuatoriano nacido el 7 de abril de 1973, empresario, economista y catedrático universitario. Su último cargo público fue de Ministro de Inclusión Económica y Social -MIES-, cargo que asumió el 15 de septiembre de 2021 hasta el 23 de noviembre de 2023. Antes, fue Gobernador del Azuay, designación que ocupó desde mayo del mismo año, [ 1 ] ​ hasta su nombramiento como Secretario de Estado para dirigir el MIES. [ 2 ] ​ Ambos cargos, en el Gobierno de Guillermo Lasso Mendoza , ex presidente del Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "25",
        "name": "Diego Borja",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Diego_Borja_Cornejo_%28cropped%29.jpg/250px-Diego_Borja_Cornejo_%28cropped%29.jpg",
        "party": "Poder Ciudadano (desde 2006)",
        "province": "",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 61,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "Gustavo Diego Borja Cornejo ( Quito , 1 de mayo de 1964) es un economista y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "26",
        "name": "Alfredo Borrero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Alfredo_Borrero.jpg/250px-Alfredo_Borrero.jpg",
        "party": "Independiente",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Alfredo Enrique Borrero Vega ( Cuenca , 19 de octubre de 1955) es un médico y político ecuatoriano . Fue vicepresidente de la República del Ecuador , desde el 24 de mayo de 2021 hasta el 23 de noviembre de 2023. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "27",
        "name": "Julio Burbano Aguirre",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "Diputado Nacional del Ecuador",
        "experience": 121,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 146,
        "birthplace": "",
        "careerStart": "1904",
        "biography": "Julio Burbano Aguirre ( Guayaquil , 1895- Ibídem , 11 de mayo de 1939) fue un empresario, banquero y político ecuatoriano . Fue presidente del Concejo Cantonal de Guayaquil y senador de la República del Ecuador, de la que fue presidente interino en dos ocasiones, durante el gobierno de Alfredo Baquerizo Moreno .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "28",
        "name": "Dalton Burgos",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Asamble%C3%ADsta_Dalton_Burgos_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No.-_187_del_Pleno_de_la_Asamblea_Nacional_%287983246965%29.jpg/250px-Asamble%C3%ADsta_Dalton_Burgos_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No.-_187_del_Pleno_de_la_Asamblea_Nacional_%287983246965%29.jpg",
        "party": "Movimiento Autonómico Regional",
        "province": "azuay",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Dalton Alexis Burgos Villamar ( Guayaquil , Ecuador , 17 de diciembre de 1949) es un sociólogo y político ecuatoriano. Fue parte del CONGOPE y asambleísta alterno por la provincia de El Oro , además de director de la mancomunidad El Oro-Azuay, denominada \"Austro Sur\". [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "29",
        "name": "Fernando Bustamante Ponce",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Asamble%C3%ADsta_Fernando_Bustamate_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_per%C3%ADodo_2013-2017_%288741815388%29.jpg/250px-Asamble%C3%ADsta_Fernando_Bustamate_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_per%C3%ADodo_2013-2017_%288741815388%29.jpg",
        "party": "Ruptura 25 (2004-2006) Alianza PAÍS (2006-2016)",
        "province": "",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Fernando Xavier Bustamante Ponce ( Nueva York , 25 de diciembre de 1950) es un político y académico ecuatoriano nacido en Estados Unidos .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "30",
        "name": "Simón Bustamante",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "Partido Social Cristiano",
        "province": "manabí",
        "currentPosition": "",
        "experience": 49,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 74,
        "birthplace": "",
        "careerStart": "1976",
        "biography": "Simón Bustamante Vera (16 de febrero de 1951, Jipijapa , Ecuador ) es un político ecuatoriano que ocupó el puesto de diputado en el Congreso Nacional por más de 18 años, [ 1 ] ​ además de haber sido el líder máximo del Partido Social Cristiano en la provincia de Manabí . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "31",
        "name": "Napoleón Cadena",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Napole%C3%B3n_Cadena_Alcalde_de_Riobamba_-_Chimborazo.jpg/250px-Napole%C3%B3n_Cadena_Alcalde_de_Riobamba_-_Chimborazo.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Byron Napoleón Cadena Oleas ( Riobamba , 23 de mayo de 1972) es un ingeniero en administración de empresas. Fue alcalde de Riobamba , entre 2014 y 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "32",
        "name": "Pablo Carcelén",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Pablo Carcelén de Guevara y Lago . Cuarto miembro de la casa nobiliaria de los Marqueses de Villarrocha . Hijo de Pablo José Carcelén de Guevara y María Josefa Lago Bahamonde y La Rocha , III Marquesa de Villarrocha. Su padre era español y su madre quiteña de orígenes sevillanos. [ 1 ] ​ Nació en la mansión que la familia adquirió en el centro de Quito al llegar nuevamente a tierras americanas, luego de varios años de haber residido en la península ibérica; y ello lo convierte en el tercer miembro del linaje en haber nacido en el Nuevo Mundo.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "33",
        "name": "Juan Cárdenas Espinoza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Juan_C%C3%A1rdenas_Espinoza_%28detalle%29.png/250px-Juan_C%C3%A1rdenas_Espinoza_%28detalle%29.png",
        "party": "Movimiento Popular Democrático (1978-2006) Alianza PAÍS (2006-2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Juan Cárdenas Espinoza ( Azogues , 7 de noviembre de 1949) es un político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "34",
        "name": "Alfredo Castillo Bujase",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Alfredo Castillo Bujase ( Guayaquil , 24 noviembre 1939) es un economista , jurista , político y académico ecuatoriano.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "35",
        "name": "José Bolívar Castillo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Asamble%C3%ADsta_Jos%C3%A9_Bol%C3%ADvar_Castillo_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No.-_235_del_Pleno_de_la_Asamblea_Nacional_%288937060886%29.jpg/250px-Asamble%C3%ADsta_Jos%C3%A9_Bol%C3%ADvar_Castillo_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No.-_235_del_Pleno_de_la_Asamblea_Nacional_%288937060886%29.jpg",
        "party": "Acción Regional por la Equidad",
        "province": "bolívar",
        "currentPosition": "",
        "experience": 55,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 80,
        "birthplace": "",
        "careerStart": "1970",
        "biography": "José Bolívar Castillo Vivanco (Catacocha, 7 de abril de 1945) es un político ecuatoriano . Fue elegido legislador en tres ocasiones y ocupó la Alcaldía de Loja durante cuatro períodos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "36",
        "name": "Guillermo Celi",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Guillermo_Celi.jpg/250px-Guillermo_Celi.jpg",
        "party": "Partido SUMA",
        "province": "",
        "currentPosition": "",
        "experience": 24,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 49,
        "birthplace": "",
        "careerStart": "2001",
        "biography": "Guillermo Alejandro Celi Santos ( Portoviejo , 5 de febrero de 1976) es un abogado y político ecuatoriano , Vicepresidente del Partido SUMA . [ 1 ] ​ Fue asambleísta nacional de Ecuador , entre 2017 y 2020.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "37",
        "name": "Jorge Cevallos Macías",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Arq_Jorge_Cevallos_M.jpg/250px-Arq_Jorge_Cevallos_M.jpg",
        "party": "Partido Liberal Radical Ecuatoriano (1993-1997) Izquierda Democrática (1997) Partido Renovador Institucional Acción Nacional (2002-2007)",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Jorge José Cevallos Macías ( Santa Ana , 1955) [ 1 ] ​ [ 2 ] ​ es un arquitecto y político ecuatoriano, último presidente del Congreso Nacional de Ecuador antes de su eliminación en 2007. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "38",
        "name": "Rubén Cevallos",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 68,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 93,
        "birthplace": "",
        "careerStart": "1957",
        "biography": "Rubén Cevallos Vega ( Tena , 2 de diciembre de 1932) [ 1 ] ​ fue un político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "39",
        "name": "Humberto Cholango",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Humberto_Cholango_secretario_del_agua.jpg/250px-Humberto_Cholango_secretario_del_agua.jpg",
        "party": "Pachakutik",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "Manuel Humberto Cholango Tipanluisa (* 1976 en Los Andes , Cangahua , Pichincha ) es un campesino , dirigente indígena y político ecuatoriano de nacionalidad kichwa . Desde 2003 hasta 2009 fue presidente de la organización kichwa ECUARUNARI .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "40",
        "name": "Patricio Cisneros",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/SESI%C3%93N_NO._897_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_06_DE_FEBRERO_DE_2024_-_53511893687.jpg/250px-SESI%C3%93N_NO._897_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_06_DE_FEBRERO_DE_2024_-_53511893687.jpg",
        "party": "Alianza PAÍS",
        "province": "santa elena",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Patricio Benjamín Cisneros Granizo ( Santa Elena , 24 de enero de 1963) [ 1 ] ​ es un político ecuatoriano . Ocupó la alcaldía del cantón La Libertad durante tres periodos consecutivos (1996-2009), además de haberse desempeñado como prefecto provincial de Santa Elena entre 2009 y 2018.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "41",
        "name": "Efrén Cocíos",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/EFREN_COCIOS.jpg/250px-EFREN_COCIOS.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 56,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 81,
        "birthplace": "",
        "careerStart": "1969",
        "biography": "Efrén Cocíos Jaramillo (1944) [ 1 ] ​ en un abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "42",
        "name": "Mario Conejo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "Pachakutik (1995-2006) Alianza PAÍS (desde 2006)",
        "province": "",
        "currentPosition": "",
        "experience": 41,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 66,
        "birthplace": "",
        "careerStart": "1984",
        "biography": "Mario Hernán Conejo Maldonado ( Peguche , Otavalo , 25 de junio de 1959) es un dirigente indígena , sociólogo y político ecuatoriano de nacionalidad kichwa . Fue alcalde del municipio de Otavalo.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "43",
        "name": "Jorge Corozo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/18_de_diciembre_de_2017_-Comisi%C3%B3n_de_los_Derechos_Colectivos_%2839111529652%29_%28cropped%29.jpg/250px-18_de_diciembre_de_2017_-Comisi%C3%B3n_de_los_Derechos_Colectivos_%2839111529652%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS",
        "province": "esmeraldas",
        "currentPosition": "guardameta",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Jorge Corozo ( Esmeraldas , Ecuador , 24 de abril de 1965) es un exfutbolista ecuatoriano . Se desempeñaba en posición de guardameta .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "44",
        "name": "Andrés Crespo Reinberg",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Andrés Crespo Reinberg (1945-2019) fue un abogado, político y editorialista ecuatoriano. Fue embajador de Ecuador en Japón , secretario de la Administración Pública y fundador del partido Democracia Popular , de orientación demócrata-cristiana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "45",
        "name": "Marcelo Cruz Utreras",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 57,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 82,
        "birthplace": "",
        "careerStart": "1968",
        "biography": "Marcelo Cruz Utreras ( Quito , 3 de junio de 1943) es un neurólogo y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "46",
        "name": "Henry Cucalón",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288740668923%29.jpg/250px-Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288740668923%29.jpg",
        "party": "Partido Social Cristiano (2002-2022) Madera de Guerrero (2009-2022) Movimiento Construye (desde 2024)",
        "province": "",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Universidad Católica de Santiago de Guayaquil",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "47",
        "name": "Rafael Cuesta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rafael_Cuesta_Caputi.jpg/250px-Rafael_Cuesta_Caputi.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Rafael Ignacio Cuesta Caputi ( Guayaquil , Ecuador , 13 de diciembre de 1957) es un periodista , radiodifusor y escritor ecuatoriano . [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ Se ha desempeñado como reportero, director, vicepresidente de noticias y gerente en varios canales de televisión. También ha sido diplomático y político . [ 4 ] ​ [ 5 ] ​ Su primera novela publicada es Preguntas Venenosas. [ 3 ] ​ [ 6 ] ​ [ 7 ] ​ En 2023 creó su propio canal de televisión digital 24/7.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "48",
        "name": "Pío Oswaldo Cueva",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Pío Oswaldo Cueva Puertas es un político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "49",
        "name": "Mariano Curicama",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/COMISI%C3%93N_DE_SOBERAN%C3%8DA_ALIMENTARIA._ECUADOR%2C_25_DE_ABRIL_DE_2022_%2852029976133%29.jpg/250px-COMISI%C3%93N_DE_SOBERAN%C3%8DA_ALIMENTARIA._ECUADOR%2C_25_DE_ABRIL_DE_2022_%2852029976133%29.jpg",
        "party": "Pachakutik (1995-2012) MINGA (desde 2017)",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Mariano Curicama ( Guamote , 2 de enero de 1965) es un político y dirigente indígena ecuatoriano de etnia kichwa . Parte de los fundadores del movimiento Pachakutik .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "50",
        "name": "Alberto Dahik",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Alberto_dahik_garzozi.jpg/220px-Alberto_dahik_garzozi.jpg",
        "party": "Partido Conservador Ecuatoriano (desde 1987)",
        "province": "",
        "currentPosition": "",
        "experience": 47,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 72,
        "birthplace": "",
        "careerStart": "1978",
        "biography": "Alberto William Dahik Garzozi ( Guayaquil , 27 de agosto de 1953) es un político y economista ecuatoriano de origen libanés . Fue Vicepresidente del Ecuador del 10 de agosto de 1992 al 11 de octubre de 1995, cuando huyó del país para evitar una orden de captura en su contra que había sido emitida por la Corte Suprema de Justicia como resultado de una investigación a Dahik por malversación de fondos . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "51",
        "name": "Patricio Donoso",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Patricio_Donoso_-_Primera_Sesi%C3%B3n_Parlamentaria_de_Posesi%C3%B3n_de_las_y_los_Asamble%C3%ADstas_para_el_Per%C3%ADodo_Legislativo_2017-2021_%2834527665081%29.jpg/250px-Patricio_Donoso_-_Primera_Sesi%C3%B3n_Parlamentaria_de_Posesi%C3%B3n_de_las_y_los_Asamble%C3%ADstas_para_el_Per%C3%ADodo_Legislativo_2017-2021_%2834527665081%29.jpg",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Patricio Donoso Chiriboga ( Quito , 11 de enero de 1956) es un político , arquitecto y profesor ecuatoriano . Miembro del Movimiento CREO , ejercicio funciones como segundo vicepresidente de la Asamblea Nacional del Ecuador , entre 2019 al 2021. Desde el 24 de mayo de 2021, asumió el cargo de Ministerio del Trabajo durante el Gobierno de Guillermo Lasso .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "52",
        "name": "David Duchitanga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/David_Duchitanga.jpg/250px-David_Duchitanga.jpg",
        "party": "Unidad Popular",
        "province": "",
        "currentPosition": "",
        "experience": 15,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 40,
        "birthplace": "",
        "careerStart": "2010",
        "biography": "David Duchitanga Morocho (Ludo, Sígsig , 15 de enero de 1992) es un abogado , deportista y político ecuatoriano . Es el actual Alcalde de Sígsig , desde el 14 de mayo de 2023. [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "53",
        "name": "Wilson Erazo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b9/WE_2024.jpg",
        "party": "",
        "province": "santo domingo de los tsáchilas",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 61,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "Wilson Erazo Argoti ( San Gabriel , 4 de marzo de 1964) es un político ecuatoriano , y actual alcalde de Santo Domingo , desde el 14 de mayo de 2019. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "54",
        "name": "Gary Esparza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gary_Esparza_%28cropped%29.jpg/250px-Gary_Esparza_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 70,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 95,
        "birthplace": "",
        "careerStart": "1955",
        "biography": "Walter Gary Esparza Fabbiany ( Babahoyo , 1934/1935) [ 1 ] ​ es un político ecuatoriano . Fue presidente del Congreso Nacional , entre 1983 y 1984.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "55",
        "name": "Balerio Estacio",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Balerio_Estacio_%2812_de_noviembre_de_2008%29.jpg/250px-Balerio_Estacio_%2812_de_noviembre_de_2008%29.jpg",
        "party": "Partido Social Cristiano (1994-2002) Alianza PAÍS (2007-2014)",
        "province": "esmeraldas",
        "currentPosition": "",
        "experience": 33,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 58,
        "birthplace": "",
        "careerStart": "1992",
        "biography": "Sindulfo Balerio Estacio Valencia (Iscuande, Eloy Alfaro , Esmeraldas , Ecuador , 13 de septiembre de 1967) es un líder barrial y político ecuatoriano . Fue candidato a la alcaldía de Guayaquil en las elecciones municipales de 2014 por parte del Partido Socialista-Frente Amplio .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "56",
        "name": "Jaime Estrada Bonilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Jaime Edulfo Estrada Bonilla ( Manta , 23 de julio de 1955) [ 1 ] ​ es un político ecuatoriano que ocupó la alcaldía de la ciudad de Manta y fue diputado en varios periodos legislativos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "57",
        "name": "Fander Falconí",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/FanderBenitez.JPG/250px-FanderBenitez.JPG",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "Pontificia Universidad Católica del Ecuador",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "58",
        "name": "Carlos Falquez Aguilar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Carlos_Falquez_Aguilar.jpg/250px-Carlos_Falquez_Aguilar.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "Carlos Alberto Falquez Aguilar ( Pasaje , 12 de agosto de 1975) es un ingeniero agrónomo y político ecuatoriano . Fue alcalde de Machala , entre 2014 y 2019. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "59",
        "name": "Luis Fierro",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Foto_Luis_Fierro.jpg/250px-Foto_Luis_Fierro.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 61,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "Luis Alberto Fierro Carrión (nacido en Quito , Ecuador el 10 de septiembre de 1964) es un especialista en desarrollo económico, social y ambiental en América Latina . Fue Viceministro de Economía de Ecuador entre el 27 de mayo y el 20 de septiembre de 2021. Actualmente es Experto en Políticas Económicas Verdes para el proyecto de apoyo de la Unión Europea para las acciones climáticas de los países en desarrollo (EU NDC Facility).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "60",
        "name": "Marco Flores Troncoso",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/COMISI%C3%93N_DE_R%C3%89GIMEN_ECON%C3%93MICO._%28SEGUNDA%29._VIRTUAL._ECUADOR%2C_07_DE_ABRIL_DEL_2021.jpg/250px-COMISI%C3%93N_DE_R%C3%89GIMEN_ECON%C3%93MICO._%28SEGUNDA%29._VIRTUAL._ECUADOR%2C_07_DE_ABRIL_DEL_2021.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Marco Flores Troncoso es un economista y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "61",
        "name": "Pedro José Freile",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Pedro_Freile_en_entrevista_%28cropped%29.png",
        "party": "Independiente",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Pedro José Freile Vallejo ( Quito , 18 de enero de 1972 [ 2 ] ​) es un abogado, político y activista social ecuatoriano.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "62",
        "name": "Antonio Gagliardo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "Izquierda Democrática (1975-1995) Alianza PAÍS (desde 2006)",
        "province": "",
        "currentPosition": "",
        "experience": 57,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 82,
        "birthplace": "",
        "careerStart": "1968",
        "biography": "Antonio Gagliardo Valarezo (1943/1944) [ 1 ] ​ es un político socialdemócrata ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "63",
        "name": "Gastón Gagliardo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Asamble%C3%ADsta_Gast%C3%B3n_Gagliardo_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_per%C3%ADodo_2013-2017_%288741872384%29.jpg/250px-Asamble%C3%ADsta_Gast%C3%B3n_Gagliardo_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_per%C3%ADodo_2013-2017_%288741872384%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 33,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 58,
        "birthplace": "",
        "careerStart": "1992",
        "biography": "Gastón Alberto Gagliardo Loor ( Guayaquil , 28 de abril de 1967) es un político ecuatoriano",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "64",
        "name": "Diego García Pozo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Diego_Garc%C3%ADa_Pozo_%28detalle%29.png/250px-Diego_Garc%C3%ADa_Pozo_%28detalle%29.png",
        "party": "Alianza PAÍS (2006-2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 61,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "Diego Oswaldo García Pozo ( Ibarra , 29 de septiembre de 1964) [ 1 ] ​ es un político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "65",
        "name": "Ramiro González Jaramillo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ramiro_Gonz%C3%A1lez_Jaramillo_%28cropped%29.jpg/250px-Ramiro_Gonz%C3%A1lez_Jaramillo_%28cropped%29.jpg",
        "party": "Izquierda Democrática (desde años 1980, hasta 2006) Alianza PAÍS (2006-2012) Avanza (2012-2018)",
        "province": "loja",
        "currentPosition": "Defraudation",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "José Ramiro González Jaramillo ( Celica , Loja , 26 de agosto de 1958) [ 5 ] ​ es un político y economista ecuatoriano . [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "66",
        "name": "Jorge Guamán",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Jorge_Guaman_%28detalle%29.jpg/250px-Jorge_Guaman_%28detalle%29.jpg",
        "party": "Pachakutik",
        "province": "cotopaxi",
        "currentPosition": "",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Jorge Gonzalo Guamán Coronel ( Pujilí , 22 de abril de 1965) es un político ecuatoriano , que se desempeñó como Prefecto provincial de Cotopaxi . [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "67",
        "name": "Santiago Guarderas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Santiago_Guarderas_Izquierdo.jpg/250px-Santiago_Guarderas_Izquierdo.jpg",
        "party": "Izquierda Democrática (hasta 2007) Partido Social Cristiano (hasta 2018) Unión Ecuatoriana (2019)",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "Santiago Guarderas Izquierdo es un abogado y político ecuatoriano . Fue Alcalde Metropolitano de Quito desde el 30 de septiembre de 2021 hasta el 14 de mayo de 2023. También se desempeñó como Vicealcalde Metropolitano de Quito desde el 14 de mayo de 2019 hasta el 29 de septiembre de 2021.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "68",
        "name": "Pablo Guerrero Martínez",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Pablo Guerrero Martínez nació el 3 de noviembre en 1967, en Ecuador . Él es el hijo de José Guerrero Bermúdez y nieto de Julio Martínez Acosta, dos personalidades muy conocidas en la historia de Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "69",
        "name": "Lucio Gutiérrez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Lucio_Guti%C3%A9rrez-Asamble%C3%ADsta_%2812-12-2023%29.jpg/250px-Lucio_Guti%C3%A9rrez-Asamble%C3%ADsta_%2812-12-2023%29.jpg",
        "party": "Partido Sociedad Patriótica",
        "province": "",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Lucio Edwin Gutiérrez Borbúa ( Quito , 23 de marzo de 1957) es un político , empresario , licenciado en Educación Física , ingeniero civil y ex militar ecuatoriano . Fue presidente del Ecuador entre el 15 de enero de 2003 y el 20 de abril de 2005, fecha en la que fue derrocado por la Rebelión de los forajidos . Es asambleísta nacional , desde noviembre de 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "70",
        "name": "Gilmar Gutiérrez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Asamble%C3%ADsta_Gilmar_Guti%C3%A9rrez_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288740727911%29.jpg/250px-Asamble%C3%ADsta_Gilmar_Guti%C3%A9rrez_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288740727911%29.jpg",
        "party": "PSP",
        "province": "napo",
        "currentPosition": "",
        "experience": 32,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 57,
        "birthplace": "",
        "careerStart": "1993",
        "biography": "Fausto Gilmar Gutiérrez Borbúa [ 1 ] ​ (15 de febrero de 1968) es un militar , ingeniero mecánico y político ecuatoriano , presidente del Partido Sociedad Patriótica (PSP), asambleísta y ex diputado por la provincia del Napo . [ 2 ] ​ Es hermano del expresidente del Ecuador , Lucio Gutiérrez y excandidato a la presidencia. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "71",
        "name": "Guillermo Herrera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Guillermo_Herrera_en_2017.jpg/250px-Guillermo_Herrera_en_2017.jpg",
        "party": "Izquierda Democrática",
        "province": "carchi",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Guillermo Bernardino Herrera Villarreal ( Tulcán , 7 de diciembre de 1972) [ 1 ] ​ [ 2 ] ​ es un economista y político ecuatoriano que ocupó el cargo de prefecto provincial del Carchi de 2012 a 2022. [ 3 ] ​ [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "72",
        "name": "Xavier Hervas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Xavier_Hervas_en_entrevista_%28cropped%29.png",
        "party": "Izquierda Democrática (2021-2022) Movimiento RETO (desde 2023)",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Marcelo Xavier Hervas Mora ( Guayaquil , 7 de octubre de 1972) es un empresario , ingeniero agroindustrial y político ecuatoriano . Es presidente de la empresa NovaAlimentos S.A. [ 2 ] ​ y fue candidato a la presidencia del Ecuador por el partido Izquierda Democrática en las elecciones presidenciales de Ecuador de 2021 . En 2023 corre otra vez por la presidencia en las elecciones presidenciales de Ecuador de 2023 , esta vez por el movimiento RETO .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "73",
        "name": "Juan Carlos Holguín",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/POSESI%C3%93N_DEL_NUEVO_MINISTRO%2C_JUAN_CARLOS_HOLGU%C3%8DN_%28cropped%29.jpg/250px-POSESI%C3%93N_DEL_NUEVO_MINISTRO%2C_JUAN_CARLOS_HOLGU%C3%8DN_%28cropped%29.jpg",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 17,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 42,
        "birthplace": "",
        "careerStart": "2008",
        "biography": "Juan Carlos Holguín Maldonado ( Quito , 1983) es un empresario y político ecuatoriano . Fue Embajador Itinerante a cargo de la diplomacia de las vacunas y posteriormente Canciller de la República del Ecuador , desde el 3 de enero de 2022 hasta el 1 de abril de 2023; en el gobierno de Guillermo Lasso . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "74",
        "name": "Lenin Hurtado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "Unidad Popular (desde 2014) Movimiento Popular Democrático (hasta 2014)",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Jaime Lenin Hurtado Angulo ( Guayaquil , 4 de noviembre de 1963) es un abogado y político ecuatoriano afroecuatoriano alineado con el partido Unidad Popular , ex-MPD .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "75",
        "name": "Jaminton Intriago",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Jaminton_Intriago.jpg/250px-Jaminton_Intriago.jpg",
        "party": "Partido Social Cristiano",
        "province": "manabí",
        "currentPosition": "",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "Jaminton Enrique Intriago Alcívar ( Flavio Alfaro , Manabí , Ecuador ; 2 de julio de 1971) es un ingeniero agrónomo y político ecuatoriano que actualmente se desempeña como Asambleísta por el distrito 1 de la Provincia de Manabí.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "76",
        "name": "Leonidas Iza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Leonidas_Iza.jpg/250px-Leonidas_Iza.jpg",
        "party": "Pachakutik",
        "province": "cotopaxi",
        "currentPosition": "",
        "experience": 18,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 43,
        "birthplace": "",
        "careerStart": "2007",
        "biography": "Segundo Leonidas Iza Salazar (18 de junio de 1982) [ 2 ] ​ es un dirigente indígena e ingeniero ambiental ecuatoriano , miembro del pueblo quichua -panzaleo. Desde su juventud, su carrera política dentro del movimiento indígena ha ido en ascenso, llegando a ser presidente del Movimiento Indígena y Campesino de Cotopaxi, en 2016. Ocupando este cargo, fue uno del los protagonistas de las manifestaciones de octubre de 2019 , protagonizadas por la Confederación de Nacionalidades Indígena (Conaie), contra el gobierno de Lenín Moreno . [ 3 ] ​ [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "77",
        "name": "Francisco Jiménez Sánchez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Francisco_Jim%C3%A9nez_S%C3%A1nchez.png/250px-Francisco_Jim%C3%A9nez_S%C3%A1nchez.png",
        "party": "Ruptura 25 (hasta 2013) Movimiento CREO (2017-2023)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "Francisco Eduardo Jiménez Sánchez ( Guayaquil , 15 de junio de 1971) es abogado , profesor universitario y político ecuatoriano , siendo miembro y fundador del movimiento Acción Ciudadana Organizada Nacional (ACCION). [ 1 ] ​ Fue Ministro de Gobierno del Ecuador , desde marzo de 2022 hasta su renuncia en febrero de 2023, en el gobierno de Guillermo Lasso . [ 2 ] ​ Se desempeñó como asambleísta nacional por la provincia Guayas, entre 2021 a 2022; gobernador de Guayas , entre 2008 y 2009, en el gobierno de Rafael Correa .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "78",
        "name": "Cléver Jiménez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Asamble%C3%ADsta_Cl%C3%A9ver_Jim%C3%A9nez_%284587032398%29_%28cropped%29.jpg/250px-Asamble%C3%ADsta_Cl%C3%A9ver_Jim%C3%A9nez_%284587032398%29_%28cropped%29.jpg",
        "party": "Pachakutik (2002-2018) Juntos Podemos (2018-2020)",
        "province": "zamora chinchipe",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "José Cléver Jiménez Cabrera (17 de septiembre de 1969) es un político ecuatoriano . Entre los cargos que ha ocupado se encuentran el de Prefecto de la provincia de Zamora Chinchipe (2019-2023) y asambleísta nacional para los periodos 2009-2013 y 2013-2017, aunque el segundo periodo solo lo cumplió hasta marzo de 2014, cuando fue sentenciado a 18 meses de prisión por injurias en contra del presidente Rafael Correa y destituido de su cargo.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "79",
        "name": "Pablo Jurado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pablo_Jurado_Moreno.jpg/250px-Pablo_Jurado_Moreno.jpg",
        "party": "Izquierda Democrática (1981-2012) Avanza (desde 2012) Movimiento Construye (desde 2024)",
        "province": "imbabura",
        "currentPosition": "",
        "experience": 39,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 64,
        "birthplace": "",
        "careerStart": "1986",
        "biography": "Pablo Aníbal Jurado Moreno ( Ibarra , 6 de febrero de 1961) es un periodista y político ecuatoriano . Entre los cargos públicos más importantes que ha ejercido se cuentan el de prefecto de Imbabura (de 2014 a 2023) y alcalde de Ibarra (de 2005 a 2009).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "80",
        "name": "Christian Landeta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Christian_Landeta_en_2024.jpg/250px-Christian_Landeta_en_2024.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 21,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 46,
        "birthplace": "",
        "careerStart": "2004",
        "biography": "Christian Landeta Centeno (Ecuador, 1979) es un activista ecuatoriano que ha tenido un impacto en la visibilización, inclusión y defensa de los derechos de las diversidades sexuales y de género en Ecuador, así como de los derechos de las juventudes ecuatorianas. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "81",
        "name": "Nicolás Lapentti Carrión",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/NICOLAS-EDUARDO-LAPENTTI-CARRI%C3%93N_%288318637740%29.jpg/250px-NICOLAS-EDUARDO-LAPENTTI-CARRI%C3%93N_%288318637740%29.jpg",
        "party": "Partido Social Cristiano (hasta 2022)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 56,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 81,
        "birthplace": "",
        "careerStart": "1969",
        "biography": "Nicolás Eduardo Lapentti Carrión ( Ambato , 20 de marzo de 1944) [ 2 ] ​ es un político y economista ecuatoriano . Fue legislador nacional en dos ocasiones y prefecto de la provincia del Guayas durante 4 periodos consecutivos (de 1992 a 2009). [ 3 ] ​ [ 2 ] ​ Es el padre de los extenistas Nicolás Lapentti y Giovanni Lapentti . [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "82",
        "name": "Galo Lara",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Galo_Lara_en_2011.jpg/250px-Galo_Lara_en_2011.jpg",
        "party": "",
        "province": "los ríos",
        "currentPosition": "",
        "experience": 32,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 57,
        "birthplace": "",
        "careerStart": "1993",
        "biography": "Tito Galo Lara Yépez ( Quevedo , 4 de enero de 1968) es un ingeniero en ventas y político que ocupó el cargo de asambleísta en la provincia de Los Ríos , siendo parte del Partido Sociedad Patriótica .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "83",
        "name": "Lenin Lara",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lenin_Lara%2C_mayo_de_2013_%28cropped%29.jpg/250px-Lenin_Lara%2C_mayo_de_2013_%28cropped%29.jpg",
        "party": "Alianza PAÍS (hasta 2020)",
        "province": "esmeraldas",
        "currentPosition": "",
        "experience": 21,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 46,
        "birthplace": "",
        "careerStart": "2004",
        "biography": "Lenin José Lara Rivadeneira ( Esmeraldas , 9 de marzo de 1979) [ 1 ] ​ es un escritor, abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "84",
        "name": "Gustavo Larrea",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gustavo_Larrea_%28cropped%29.jpg/250px-Gustavo_Larrea_%28cropped%29.jpg",
        "party": "Acción Popular Revolucionaria (1994-2000) Alianza PAÍS (2006-2009) Movimiento Democracia Sí (desde 2015)",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Wilson Gustavo Larrea Cabrera (nacido el 3 de julio de 1956 en Quito ) es un político ecuatoriano de centroizquierda . Dirigente estudiantil, estratega político, diputado del Ecuador en el año 1994-1996, en 1996-1997 fue Subsecretario Administrativo del Ministerio de Gobierno y Policía, cuando el General Frank Vargas Pazzos era el Ministro.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "85",
        "name": "Guillaume Long",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/CANCILLER_GUILLAUME_LONG_PRESENTA_CONFERENCIA_SOBRE_JUSTICIA%2C_DERECHOS_HUMANOS_Y_ERRADICACI%C3%93N_DE_PARA%C3%8DSOS_FISCALES_ANTE_LA_ONU%2C_GINEBRA%2C_SUIZA%2C_01_DE_MAYO_2017_%2833998283780%29.jpg/250px-thumbnail.jpg",
        "party": "Revolución Ciudadana",
        "province": "",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Guillaume Jean Sebastien Long ( Créteil , 22 de febrero de 1977) es un político y académico ecuatoriano de origen franco-británico, que sirvió como Ministro de Relaciones Exteriores y Movilidad Humana en el Gobierno de Rafael Correa . Fue previamente Ministro de Cultura y Patrimonio, y Ministro Coordinador de Conocimiento y Talento Humano. Fue Representante Permanente del Ecuador ante la Organización de las Naciones Unidas en Ginebra, [ 1 ] ​ hasta el 4 de enero de 2018, cuando presentó su renuncia por diferencias con el gobierno de Lenín Moreno. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "86",
        "name": "Milton Luna Tamayo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Milton_luna_%28cropped%29.jpg/250px-Milton_luna_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "Milton Rodrigo Luna Tamayo ( Quito , 18 de mayo de 1958) es historiador, activista social por la educación, académico ecuatoriano , relacionado con la educación desde los años 80. [ 1 ] ​ Se desempeñó como docente de la PUCE y de varias universidades, director de la Escuela de Ciencias Históricas en la Pontificia Universidad Católica del Ecuador, Coordinador Nacional del Contrato Social por la Educación, integrante de la Campaña Latinoamericana por el Derecho a la Educación y columnista del Diario El Comercio. Fue nombrado por el presidente Lenín Moreno , el 3 de diciembre del 2018 como Ministro de Educación, anunciando como su objetivo principal transformar la educación bajo el enfoque de los derechos humanos. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "87",
        "name": "Luis Macas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Luismacas.jpg/250px-Luismacas.jpg",
        "party": "Pachakutik",
        "province": "loja",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Luis Alberto Macas Ambuludí ( Saraguro , Provincia de Loja , 3 de junio de 1950) es un dirigente indígena , político e intelectual ecuatoriano de nacionalidad kichwa .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "88",
        "name": "Andrés Madero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Andres_madero.jpg/250px-Andres_madero.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Andrés Madero Poveda es un abogado y político ecuatoriano que ocupó el cargo de ministro de Trabajo en el gobierno de Lenín Moreno . Renunció al cargo el 21 de marzo de 2020, luego de dar positivo con la enfermedad de COVID-19 . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "89",
        "name": "Eduardo Mangas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 26,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 51,
        "birthplace": "",
        "careerStart": "1999",
        "biography": "Eduardo Enrique Mangas Mairena ( Managua , 28 de enero de 1974) es un político y abogado nicaragüense y ecuatoriano. Fue jefe adjunto de gabinete del Presidente de la Asamblea General de las Naciones Unidas (2008-2009), viceministro de la Presidencia de la República de Nicaragua (2010) y secretario general y jefe de gabinete del Gobierno de la República del Ecuador (2017). [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "90",
        "name": "Luis Mejía Montesdeoca",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "imbabura",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "Luis Alfredo Mejía Montesdeoca ( Otavalo , 1942/1943) [ 1 ] ​ es un político ecuatoriano , considerado antes de su retiro como uno de los más influyentes de la provincia de Imbabura . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "91",
        "name": "Rodrigo Mena",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rodrigo_Mena.jpg/250px-Rodrigo_Mena.jpg",
        "party": "Partido Social Cristiano Unidad Primero",
        "province": "",
        "currentPosition": "",
        "experience": 34,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 59,
        "birthplace": "",
        "careerStart": "1991",
        "biography": "Ministerio de Agricultura y Ganadería [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "92",
        "name": "Daniel Mendoza Arévalo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/DANIEL_MENDOZA_AREVALO.jpg",
        "party": "Unidad Primero (hasta 2018) Movimiento Mejor (desde 2018)",
        "province": "manabí",
        "currentPosition": "Delincuencia organizada",
        "experience": 14,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 39,
        "birthplace": "",
        "careerStart": "2011",
        "biography": "Daniel Isaac Mendoza Arévalo ( Bahía de Caráquez , 30 de noviembre de 1986) es un delincuente y expolítico ecuatoriano , que fungía como asambleísta del norte de la provincia de Manabí , cargo desde el cual fue un destacado miembro de la bancada de los aliados de Alianza País (PAÍS) durante el gobierno de Lenín Moreno , posición en la que se mantuvo hasta su renuncia mientras se encontraba bajo prisión preventiva por su participación en los actos de corrupción durante la pandemia de coronavirus en 2020. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "93",
        "name": "Mario Minuche",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "Centro Democrático Nacional",
        "province": "",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Mario Enrique Minuche Murillo (1954/1955) [ 1 ] ​ es un político ecuatoriano que ocupó la alcaldía de la ciudad de Machala durante 13 años consecutivos. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "94",
        "name": "Fausto Molina",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Fausto Molina Molina fue un ideólogo de la Democracia Cristiana de Ecuador . Fundador del partido Democracia Popular . [ 1 ] ​ [ 2 ] ​ Fue Secretario General de la Secretaría Nacional de Información Pública en la presidencia de Jaime Roldós Aguilera . [ 3 ] ​ Murió en un accidente de tránsito el 23 de marzo de 1980.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "95",
        "name": "Juan Pablo Moncagatta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Escudo_de_Guayas.png/60px-Escudo_de_Guayas.png",
        "party": "Democracia Popular",
        "province": "",
        "currentPosition": "",
        "experience": 60,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 85,
        "birthplace": "",
        "careerStart": "1965",
        "biography": "Juan Pablo Moncagatta es un político ecuatoriano.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "96",
        "name": "Paco Moncayo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Paco_Moncayo_2010.jpg/250px-Paco_Moncayo_2010.jpg",
        "party": "Izquierda Democrática (1998-2008) Movimiento Municipalista (2008-2013) Izquierda Democrática (desde 2015)",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 60,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 85,
        "birthplace": "",
        "careerStart": "1965",
        "biography": "Paco Rosendo Moncayo Gallegos ( Quito , 8 de octubre de 1940), es un político y militar (retirado) ecuatoriano , con el rango de general . Fue consejero de Gobierno de Seguridad Nacional, entre abril y junio de 2023; en el gobierno de Guillermo Lasso . [ 1 ] ​ Ejerció como diputado nacional (1998-2000), alcalde Metropolitano de Quito (2000-2009), y asambleísta nacional por Pichincha (2009-2013). También se desempeñó como jefe del Comando Conjunto de las Fuerzas Armadas del Ecuador (1996-1998).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "97",
        "name": "Jorge Montero Rodríguez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "Concentración de Fuerzas Populares",
        "province": "loja",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Jorge Cristóbal Montero Rodríguez (1952, Cariamanga , Ecuador ) [ 1 ] ​ es un abogado y político ecuatoriano, diputado nacional en varias ocasiones por la provincia de Loja .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "98",
        "name": "Xavier Muñoz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Xavier_Mu%C3%B1oz_Ch%C3%A1vez.jpg/250px-Xavier_Mu%C3%B1oz_Ch%C3%A1vez.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "Francisco Xavier Muñoz Chávez ( Cuenca , [ 2 ] ​ 1946/1947) [ 1 ] ​ es un abogado y político ecuatoriano que ocupó la alcaldía de Cuenca durante dos periodos no consecutivos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "99",
        "name": "Fernando Naranjo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Fernando_Naranjo_%28detalle%29.jpg/250px-Fernando_Naranjo_%28detalle%29.jpg",
        "party": "Alianza PAÍS",
        "province": "tungurahua",
        "currentPosition": "",
        "experience": 52,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 77,
        "birthplace": "",
        "careerStart": "1973",
        "biography": "Luis Fernando Naranjo Lalama ( Ambato , [ 1 ] ​ 1948/1949) [ 2 ] ​ es un político ecuatoriano que ocupó el cargo de prefecto de la provincia de Tungurahua de 2000 a 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "100",
        "name": "Gustavo Navarro",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Concejal_Gustavo_Navarro.JPG/250px-Concejal_Gustavo_Navarro.JPG",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Gustavo Navarro es un presentador de televisión y político ecuatoriano y soltero",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "101",
        "name": "Jaime Nebot",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/REUNI%C3%93N_DE_OPOSICI%C3%93N_%2818746735053%29.jpg/250px-REUNI%C3%93N_DE_OPOSICI%C3%93N_%2818746735053%29.jpg",
        "party": "Partido Social Cristiano Madera de Guerrero",
        "province": "guayas",
        "currentPosition": "",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "Jaime José Nebot Saadi ( Guayaquil , 22 de octubre de 1946) es un abogado y político ecuatoriano quién ejerció como alcalde de Guayaquil por 18 años, nueve meses y cuatro días: desde el año 2000 hasta el 2019. El 14 de mayo de 2019 entregó la alcaldía a Cynthia Viteri tras casi 19 años como alcalde. [ 1 ] ​ Ha desempeñado cargos públicos como diputado por la provincia del Guayas del antiguo Congreso Nacional del Ecuador y como Gobernador de la provincia del Guayas. Ha sido candidato a la presidencia de la República del Ecuador en dos ocasiones.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "102",
        "name": "Álvaro Noboa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%C3%81lvaro_Noboa.jpg/250px-%C3%81lvaro_Noboa.jpg",
        "party": "Partido Roldosista Ecuatoriano (1998-2002) Partido Renovador Institucional Acción Nacional (1999-2014) Adelante Ecuatoriano Adelante (2015-2020)",
        "province": "",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Álvaro Fernando Noboa Pontón ( Guayaquil , 21 de noviembre de 1950) es un empresario , abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "103",
        "name": "Ricardo Noboa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Ricardo Juan Noboa Bejarano (14 de julio de 1952) [ 1 ] ​ [ 2 ] ​ es un abogado y político ecuatoriano , hermano del expresidente Gustavo Noboa . [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "104",
        "name": "Daniel Noboa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Daniel_Noboa_en_abril_de_2025.jpg/250px-Daniel_Noboa_en_abril_de_2025.jpg",
        "party": "Ecuatoriano Unido (2021) Partido SUMA (2021-2022) Acción Democrática Nacional (desde 2022)",
        "province": "",
        "currentPosition": "",
        "experience": 13,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 38,
        "birthplace": "",
        "careerStart": "2012",
        "biography": "Daniel Roy Gilchrist Noboa Azín ( Miami , 30 de noviembre de 1987) es un administrador , empresario y político ecuatoriano-estadounidense , presidente de la República del Ecuador desde el 23 de noviembre de 2023. Asumió el cargo a la edad de 35 años, siendo así el más joven en ser elegido democráticamente. [ 4 ] ​ [ 5 ] ​ [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "105",
        "name": "Jorge Norero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Escudo_de_Guayaquil.svg/60px-Escudo_de_Guayaquil.svg.png",
        "party": "Frente Radical Alfarista",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Jorge Alberto Norero González ( Guayaquil , 10 de mayo de 1955) [ 1 ] ​ es un empresario y político ecuatoriano . Se desempeñó como alcalde de Guayaquil entre 1985 y 1986. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "106",
        "name": "Carlos Ochoa Hernández",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Carlos_Ochoa_Hern%C3%A1ndez.jpg/220px-Carlos_Ochoa_Hern%C3%A1ndez.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 40,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 65,
        "birthplace": "",
        "careerStart": "1985",
        "biography": "Carlos Alberto Ochoa Hernández (10 de abril de 1960, Cuenca , Ecuador ) [ 1 ] ​ [ 2 ] ​ es un periodista, exdirector de noticias de Gamavisión y ex Superintendente de Información y Comunicación de Ecuador . [ 1 ] ​ [ 3 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "107",
        "name": "Niels Olsen",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Zurab_Pololikashvili_junto_con_Niels_Olsen_%28cropped%29.jpg/250px-Zurab_Pololikashvili_junto_con_Niels_Olsen_%28cropped%29.jpg",
        "party": "Acción Democrática Nacional",
        "province": "",
        "currentPosition": "",
        "experience": 12,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 37,
        "birthplace": "",
        "careerStart": "2013",
        "biography": "Niels Anthonez Olsen Peet ( Guayaquil , 15 de enero de 1988) es un político y empresario de turismo. Actualmente es Presidente de la Asamblea Nacional . [ 1 ] ​ Fue ministro de turismo ; desde el 24 de mayo del 2021 ; hasta el 30 de agosto del 2024 , bajo los gobiernos de Guillermo Lasso y Daniel Noboa .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "108",
        "name": "Leonardo Orlando",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Leonardo_Orlando.jpg/250px-Leonardo_Orlando.jpg",
        "party": "Movimiento Revolución Ciudadana",
        "province": "manabí",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "José Leonardo Orlando Arteaga ( Portoviejo , 16 de abril de 1975) es un economista y político ecuatoriano que actualmente se desempeña como Prefecto de la provincia de Manabí desde el 14 de mayo de 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "109",
        "name": "Andrés Páez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Andr%C3%A9s_P%C3%A1ez_2017.jpg/250px-Andr%C3%A9s_P%C3%A1ez_2017.jpg",
        "party": "Izquierda Democrática (hasta 2013) Movimiento CREO (2013-2016)",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 34,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 59,
        "birthplace": "",
        "careerStart": "1991",
        "biography": "Andrés Tarquino Páez Benalcázar (28 de mayo de 1966, Ibarra , Ecuador ) [ 1 ] ​ es un doctor en jurisprudencia , [ 2 ] ​ sociólogo, político , docente universitario y ex asambleísta nacional por la provincia de Pichincha por Izquierda Democrática. Militó en el partido CREO, por el cual postuló a la vicepresidencia en 2017. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "110",
        "name": "Sebastián Palacios Muñoz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Asamble%C3%ADsta_Sebasti%C3%A1n_Palacios.jpg/250px-Asamble%C3%ADsta_Sebasti%C3%A1n_Palacios.jpg",
        "party": "SUMA",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 13,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 38,
        "birthplace": "",
        "careerStart": "2012",
        "biography": "Juan Sebastián Palacios Muñoz ( Quito , 1 de marzo de 1987) es un deportista , político , licenciado en Finanzas y Relaciones Internacionales ecuatoriano , desde el 2017 al 2021, ocupó el cargo de Asambleísta Nacional del Ecuador por el Distrito 2 de Pichincha correspondiente al sur de Quito. Durante el Gobierno de Guillermo Lasso , asumió el cargo de Ministro del Deporte a partir del 24 de mayo de 2021. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "111",
        "name": "Gustavo Pareja",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Otavalo_Mayor_Gustavo_Pareja_August_2017_%28cropped%29.jpg/220px-Otavalo_Mayor_Gustavo_Pareja_August_2017_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Gustavo Pareja Cisneros ( Otavalo , 10 de enero de 1947) es un político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "112",
        "name": "Ricardo Patiño",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ricardo_Pati%C3%B1o_en_2018.jpg/250px-Ricardo_Pati%C3%B1o_en_2018.jpg",
        "party": "Alianza PAÍS (2006-2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Ricardo Armando Patiño Aroca [ 1 ] ​ ( Guayaquil , 16 de mayo de 1954) es un economista , activista y político ecuatoriano . En el gobierno presidencial de Rafael Correa ejerció la dirección del Ministerio de Relaciones Exteriores y Movilidad Humana , el Ministerio de Economía y Finanzas y el Ministerio de Defensa Nacional del Ecuador . En 2017 durante la ruptura de Alianza País fue presidente del movimiento siendo reconocido por la facción correísta, disputando este cargo con Lenín Moreno , hasta la desafiliación de Correa del movimiento político. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "113",
        "name": "Pedro Granja",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pedro_Granja.png",
        "party": "Independiente",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Pedro Javier Granja Angulo es un abogado , criminólogo , y político ecuatoriano. [ 2 ] ​ En el ámbito legal se ha destacado como abogado defensor de políticos como Abdalá Bucaram Pulley y Mery Zamora , así como de niños víctimas de abuso sexual. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "114",
        "name": "Darwin Pereira",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Asambleista-Pereira-Darwin.png/250px-Asambleista-Pereira-Darwin.png",
        "party": "Pachakutik (2021-presente)",
        "province": "el oro",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Darwin Stalin Pereira Chamba ( Cantón Las Lajas , Provincia de El Oro , Ecuador , 26 de mayo de 1973) es un político y jurisconsulto ecuatoriano . Fue el segundo vicepresidente de la Asamblea Nacional del Ecuador , entre 2022 y 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "115",
        "name": "Washington Pesántez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Washington_Pes%C3%A1ntez.jpg/250px-Washington_Pes%C3%A1ntez.jpg",
        "party": "Unión Ecuatoriana",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Washington Arturo Pesántez Muñoz ( Achupallas , 16 de agosto de 1956) es un político y abogado ecuatoriano , fundador del Movimiento Unión Ecuatoriana . [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "116",
        "name": "Enrique Pita",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Enrique_Pita.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Fernando Enrique Pita García ( Guayaquil , 23 de julio de 1947) [ 1 ] ​es un ingeniero civil y dirigente gremial ecuatoriano. Desde noviembre de 2018, se desempeña como vicepresidente del Consejo Nacional Electoral (CNE) de Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "117",
        "name": "Antonio Posso",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Antonio_Posso_%28cropped%29.png/250px-Antonio_Posso_%28cropped%29.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Luis Antonio Posso Salgado ( Atuntaqui , 5 de agosto de 1949) [ 1 ] ​ es un catedrático y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "118",
        "name": "Marco Proaño Maya",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Entrevista_en_la_Radio_de_la_Asamblea_Nacional_al_Dr._Marco_Proa%C3%B1o_Maya_%286338096067%29.jpg/250px-Entrevista_en_la_Radio_de_la_Asamblea_Nacional_al_Dr._Marco_Proa%C3%B1o_Maya_%286338096067%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 55,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 80,
        "birthplace": "",
        "careerStart": "1970",
        "biography": "Marco Proaño Maya ( Otavalo , 12 de marzo de 1945) es un abogado y político ecuatoriano de izquierda que ocupó el cargo de diputado en el Congreso Nacional del Ecuador en seis ocasiones distintas, [ 1 ] ​ además de haber sido vicepresidente del Congreso y candidato tanto a la vicepresidencia como a la presidencia de la República.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "119",
        "name": "Esteban Quirola",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Esteban_quirola.jpg/250px-Esteban_quirola.jpg",
        "party": "Partido SUMA (2012-2017) Movimiento SIII (desde 2017)",
        "province": "el oro",
        "currentPosition": "",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Esteban Quirola Bustos (9 de noviembre de 1978) [ 1 ] ​ es un político ecuatoriano que ocupó la prefectura de El Oro de 2014 a 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "120",
        "name": "Delfín Quishpe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Delf%C3%ADn_Quishpe.JPG/250px-Delf%C3%ADn_Quishpe.JPG",
        "party": "Pachakutik",
        "province": "chimborazo",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Delfín Quishpe Apugllón (San Antonio de Encalado, Chimborazo , 4 de diciembre de 1977), también conocido como Delfín Hasta el Fin , es un cantante , compositor y político ecuatoriano . [ 1 ] ​ Fue alcalde del cantón Guamote desde 2019 hasta 2023, reemplazado por Miguel Marcatoma. [ 4 ] ​ Quishpe con su carrera artística logró notoriedad en los años 2000 después de popularizarse sus videoclips musicales en YouTube , [ 5 ] ​ mientras que en su ámbito político ha tenido inconvenientes judiciales, entre las que se destaca el proceso abierto por parte de la Fiscalía General de Ecuador , por «presunto» tráfico de influencias y corrupción. Actualmente se encuentra privado de libertad en la cárcel. [ 6 ] ​ [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "121",
        "name": "Salvador Quishpe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/COMISI%C3%93N_DEL_DERECHO_AL_TRABAJO._ECUADOR%2C_23_DE_MARZO_DEL_2022_%2851955884757%29.jpg/250px-COMISI%C3%93N_DEL_DERECHO_AL_TRABAJO._ECUADOR%2C_23_DE_MARZO_DEL_2022_%2851955884757%29.jpg",
        "party": "Pachakutik",
        "province": "zamora chinchipe",
        "currentPosition": "",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "Salvador Quishpe Lozano ( Zamora , 15 de marzo de 1971) es un político ecuatoriano militante de Pachakutik que fue prefecto de Zamora Chinchipe ; durante su gestión se ha convertido en una figura del movimiento indígena por su fuerte oposición a las políticas de la presidencia de Rafael Correa , llegando a ser precandidato de su partido para las elecciones presidenciales de 2017 . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "122",
        "name": "Carlos Rabascall",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Carlos_Rabascall.jpg/250px-Carlos_Rabascall.jpg",
        "party": "Izquierda Democrática (desde 2024)",
        "province": "",
        "currentPosition": "",
        "experience": 40,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 65,
        "birthplace": "",
        "careerStart": "1985",
        "biography": "Carlos Xavier Rabascall Salazar ( Guayaquil , 3 de septiembre de 1960) es un periodista, ingeniero comercial, empresario, consultor político y político ecuatoriano. En 2017 fue miembro del Frente de Transparencia y Lucha Contra la Corrupción, organismo encargado de proponer políticas de prevención de la corrupción en el sector público y privado. En 2021 fue parte del binomio de Unión por la Esperanza junto Andrés Arauz , en las elecciones presidenciales de Ecuador de 2021 . Fue candidato en las Elecciones presidenciales de Ecuador de 2025 por el partido Izquierda Democrática .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "123",
        "name": "Marcelo Rivera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Marcelo_Rivera%2C_dirigente_de_la_FEUE_%284099969717%29.jpg/250px-Marcelo_Rivera%2C_dirigente_de_la_FEUE_%284099969717%29.jpg",
        "party": "Movimiento Popular Democrático (1995-2014) Unidad Popular (desde 2014)",
        "province": "",
        "currentPosition": "Presidente (1997-1999) Presidente (2000-2004) Presidente (2009-2011)",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Fausto Marcelo Rivera Toro ( Quito , 10 de marzo de 1978) es un abogado , maestro y ex dirigente estudiantil ecuatoriano que fungio como presidente de la Federación de Estudiantes Universitarios (FEUE), de la de Estudiantes Secundarios (FESE) y de la Juventud Revolucionaria (JRE). Arrestado por terrorismo y sabotaje durante el gobierno de Rafael Correa . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "124",
        "name": "Ramiro Rivera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ramiro_Rivera.jpg/250px-Ramiro_Rivera.jpg",
        "party": "Democracia Popular",
        "province": "cañar",
        "currentPosition": "",
        "experience": 47,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 72,
        "birthplace": "",
        "careerStart": "1978",
        "biography": "Luis Ramiro Rivera Molina ( Cañar , 21 de julio de 1953) [ 1 ] ​ es un político ecuatoriano que ocupó la vicepresidencia del Congreso Nacional entre 2003 y 2005. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "125",
        "name": "Mauricio Rodas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mauricio_Rodas_2014.jpg/250px-Mauricio_Rodas_2014.jpg",
        "party": "Movimiento SUMA",
        "province": "",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "Mauricio Esteban Rodas Espinel ( Quito , 15 de abril de 1975) es un abogado y político ecuatoriano , es el fundador y Presidente Nacional del Partido Político Sociedad Unida Más Acción y desde el 2014 hasta el 2019 fue Alcalde Metropolitano de Quito .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "126",
        "name": "Fernando Rodríguez Paredes",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 64,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 89,
        "birthplace": "",
        "careerStart": "1961",
        "biography": "Fernando Rafael Rodríguez Paredes ( Riobamba , 23 de noviembre de 1936) es un médico y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "127",
        "name": "Franco Romero Loayza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741769104%29.jpg/250px-Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741769104%29.jpg",
        "party": "Partido Socialista Ecuatoriano (1980-1987) Izquierda Democrática (1988-2004) Partido Social Cristiano (2004-2016) Movimiento CREO (2016-2018)",
        "province": "el oro",
        "currentPosition": "",
        "experience": 49,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 74,
        "birthplace": "",
        "careerStart": "1976",
        "biography": "Franco Segundo Romero Loayza ( Piñas , 25 de agosto de 1952) [ 1 ] ​ es un empresario bananero y político ecuatoriano , [ 2 ] ​ fue asambleísta en representación de la provincia de El Oro .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "128",
        "name": "Isidro Romero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/31/Isidro_Romero_en_entrevista.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "Isidro Perfecto Romero Carbo ( Riobamba , 22 de abril de 1942) [ 2 ] ​ es un empresario , dirigente deportivo y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "129",
        "name": "Hugo Ruiz Enríquez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "carchi",
        "currentPosition": "",
        "experience": 59,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 84,
        "birthplace": "",
        "careerStart": "1966",
        "biography": "Hugo Milton Ruiz Enríquez ( Tulcán , 14 de agosto de 1941) [ 1 ] ​ es un político y abogado ecuatoriano que ocupó varias dignidades en la provincia del Carchi .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "130",
        "name": "Josué Sánchez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Josu%C3%A9_S%C3%A1nchez.JPG/250px-Josu%C3%A9_S%C3%A1nchez.JPG",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 13,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 38,
        "birthplace": "",
        "careerStart": "2012",
        "biography": "Josué Sánchez Camposano ( Guayaquil , 10 de agosto de 1987) es un administrador , empresario y político ecuatoriano . Ejerció como vicealcalde de Guayaquil , desde 15 de mayo de 2019 hasta el 14 de mayo de 2023. [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "131",
        "name": "Montgómery Sánchez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/09_de_enero_de_2017_-_Sesi%C3%B3n_de_la_Comisi%C3%B3n_de_Gobiernos_Aut%C3%B3nomos_%2824733986397%29_%28cropped%29.jpg/250px-09_de_enero_de_2017_-_Sesi%C3%B3n_de_la_Comisi%C3%B3n_de_Gobiernos_Aut%C3%B3nomos_%2824733986397%29_%28cropped%29.jpg",
        "party": "Partido Roldosista Ecuatoriano (1995-2008) Movimiento Autonómico Regional (desde 2008)",
        "province": "el oro",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Montgómery Sánchez Reyes ( Macará , 27 de agosto de 1950) [ 1 ] ​ es un ingeniero y político ecuatoriano que ocupó el cargo de prefecto provincial de El Oro durante cuatro periodos consecutivos (de 1996 a 2014), además fue presidente del Consorcio de Consejos Provinciales del país en tres ocasiones distintas (1999-2000, 2000-2001 y 2009-2010). [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "132",
        "name": "Montgomery Sánchez Ordóñez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Asamble%C3%ADsta_Montgomery_S%C3%A1nchez%2C_interviene_en_la_continuaci%C3%B3n_de_la_sesi%C3%B3n_302_del_Pleno_de_la_Asamblea_Nacional_%2815932019332%29.jpg/250px-Asamble%C3%ADsta_Montgomery_S%C3%A1nchez%2C_interviene_en_la_continuaci%C3%B3n_de_la_sesi%C3%B3n_302_del_Pleno_de_la_Asamblea_Nacional_%2815932019332%29.jpg",
        "party": "Movimiento Autonómico Regional (desde 2009)",
        "province": "el oro",
        "currentPosition": "",
        "experience": 18,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 43,
        "birthplace": "",
        "careerStart": "2007",
        "biography": "Montgomery Sánchez Ordóñez ( Machala , 27 de abril de 1982) es un Ingeniero en Gestión de Agronegocios y político ecuatoriano que ocupó el cargo de asambleísta nacional por la provincia de El Oro, durante el periodo 2013-2017, además fue vicepresidente de la Comisión de Fiscalización y Control político de la Asamblea Nacional del Ecuador, durante el año 2015 – 2017.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "133",
        "name": "Marlon Santi",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Marlon-Santi.jpg/250px-Marlon-Santi.jpg",
        "party": "Pachakutik",
        "province": "",
        "currentPosition": "",
        "experience": 24,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 49,
        "birthplace": "",
        "careerStart": "2001",
        "biography": "Marlon René Santi Gualinga ( Sarayacu , 1976) es un dirigente indígena y político ecuatoriano de nacionalidad kichwa .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "134",
        "name": "Edgar Santillán",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 52,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 77,
        "birthplace": "",
        "careerStart": "1973",
        "biography": "Edgar Julián Santillán Oleas ( Riobamba , 23 de junio de 1948) [ 1 ] ​ es un profesor y expolítico ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "135",
        "name": "Iván Saquicela",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/IVAN_SAQUICELA_RODAS.jpg/250px-IVAN_SAQUICELA_RODAS.jpg",
        "party": "Independiente",
        "province": "",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "Iván Patricio Saquicela Rodas ( Cuenca , 13 de marzo de 1975) es un jurista y político ecuatoriano. Fue presidente de la Corte Nacional de Justicia entre 2021 y 2024. Fue candidato para las elecciones presidenciales de 2025 en representación del movimiento Democracia Sí , quedando en último lugar.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "136",
        "name": "Virgilio Saquicela",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/SESI%C3%93N_NO._771_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_05_DE_ABRIL_DEL_2022_%2851985006010%29.jpg/250px-SESI%C3%93N_NO._771_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_05_DE_ABRIL_DEL_2022_%2851985006010%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Javier Virgilio Saquicela Espinoza ( Azogues , 8 de julio de 1972) es un abogado y político ecuatoriano . Fue el Presidente de la Asamblea Nacional del Ecuador , desde mayo de 2022 [ 1 ] ​ hasta mayo de 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "137",
        "name": "Segundo Serrano",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "Segundo Ignacio Serrano Serrano ( Azogues , 15 de marzo de 1946) es un periodista y político socialista ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "138",
        "name": "Lucía Sosa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Luc%C3%ADa_Sosa.jpg/250px-Luc%C3%ADa_Sosa.jpg",
        "party": "Movimiento Popular Democrático (hasta 2014) Unidad Popular (desde 2014)",
        "province": "esmeraldas",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Lucía de Lourdes Sosa Robinzon (6 de febrero de 1957) es una profesora , ingeniera y política ecuatoriana , que fue prefecta de la provincia de Esmeraldas y alcaldesa de la ciudad homónima . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "139",
        "name": "Vicente Taiano",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/JOS%C3%89-VICENTE-TAIANO-%C3%81LVAREZ_%288317572235%29.jpg/250px-JOS%C3%89-VICENTE-TAIANO-%C3%81LVAREZ_%288317572235%29.jpg",
        "party": "Partido Renovador Institucional Acción Nacional (2002-2012) Partido Sociedad Patriótica (desde 2012)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "José Vicente Taiano Álvarez (5 de abril de 1956, Guayaquil , Ecuador ) es un abogado, político y exjuez de Ecuador . [ 2 ] ​ Entre los cargos que ha desempeñado destacan asambleísta nacional, asambleísta constituyente, diputado nacional y Juez octavo y noveno de lo Penal de la Provincia de Guayas . [ 2 ] ​ Se desempeñó como gobernador de la provincia del Guayas desde el 24 de mayo de 2021. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "140",
        "name": "Delfín Tenesaca",
        "image": "",
        "party": "",
        "province": "chimborazo",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "José Delfín Tenesaca Caguana (n. 1963 en Mayorazgo , Chimborazo ) es un campesino , dirigente indígena y político ecuatoriano de nacionalidad kichwa . Desde 2009 es presidente de la organización kichwa ECUARUNARI .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "141",
        "name": "Johnny Terán",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/PREFECTO_DE_LOS_R%C3%8DOS.jpg/250px-PREFECTO_DE_LOS_R%C3%8DOS.jpg",
        "party": "Partido Social Cristiano",
        "province": "los ríos",
        "currentPosition": "",
        "experience": 40,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 65,
        "birthplace": "",
        "careerStart": "1985",
        "biography": "Johnny Enrique Terán Salcedo ( Babahoyo , 27 de noviembre de 1960) [ 4 ] ​ es un político ecuatoriano , actual prefecto provincial de Los Ríos",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "142",
        "name": "Auki Tituaña",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Auki.jpg/250px-Auki.jpg",
        "party": "Pachakutik (1995-2012) Movimiento CREO (desde 2012) Movimiento Concertación (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Auki Kanaima Tituaña Males ( Cotacachi , 2 de enero de 1965), antes Segundo Antonio Tituaña Males , es economista , político y dirigente indígena ecuatoriano de etnia kichwa . Ha sido alcalde de Cotacachi y presidente de la Asociación de Municipalidades del Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "143",
        "name": "Roberto de la Torre",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Bandera_del_Cant%C3%B3n_Pastaza.png/60px-Bandera_del_Cant%C3%B3n_Pastaza.png",
        "party": "",
        "province": "pastaza",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Roberto Euclides de la Torre Andrade ( Chone , 1950) [ 1 ] ​ es un médico y político ecuatoriano que ocupó la prefectura provincial de Pastaza durante tres periodos consecutivos (de 1992 a 2005).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "144",
        "name": "Marco Troya",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_NO._771_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_21_DE_ABRIL_DE_2022_%2852019267002%29.jpg/250px-CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_NO._771_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_21_DE_ABRIL_DE_2022_%2852019267002%29.jpg",
        "party": "Movimiento CREO Alianza PAÍS (desde 2007) Partido Roldosista Ecuatoriano (hasta 2007)",
        "province": "",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "Marco Stalin Troya Fuertes ( Quevedo , 16 de enero de 1969) [ 1 ] ​ es un ingeniero y político ecuatoriano . Fue asambleísta nacional, entre 2021 y 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "145",
        "name": "César Umajinga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cesar_Umajinga_%28cropped%29.png/250px-Cesar_Umajinga_%28cropped%29.png",
        "party": "Pachakutik (hasta 2022) Partido SUMA (desde 2022)",
        "province": "cotopaxi",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "César Umajinga Guamán ( Pujilí , 1969) [ 1 ] ​ es un político ecuatoriano que ocupó la prefectura de la provincia de Cotopaxi durante 12 años consecutivos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "146",
        "name": "Raúl Vallejo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/RAUL_VALLEJO_%2828024350105%29_%28cropped%29.jpg/250px-RAUL_VALLEJO_%2828024350105%29_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 41,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 66,
        "birthplace": "",
        "careerStart": "1984",
        "biography": "César Raúl Enrique Vallejo Corral ( Manta , 28 de junio de 1959) es un escritor y político ecuatoriano . Ha ocupado el cargo de Ministro de Educación en los gobiernos de Rodrigo Borja Cevallos , Alfredo Palacio y Rafael Correa , quien además lo nombró Ministro de Cultura y Patrimonio . En el ámbito literario, es uno de los escritores ecuatorianos más prolíficos de la actualidad, [ 1 ] ​ galardonado con premios nacionales e internacionales, entre los que destacan el Premio Real Academia Española , Premio de Poesía José Lezama Lima , el Premio Nacional de Literatura Aurelio Espinosa Pólit y el Premio Joaquín Gallegos Lara .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "147",
        "name": "Carlos Vallejo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Carlos_Vallejo_%28detalle%29.jpg/250px-Carlos_Vallejo_%28detalle%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 61,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 86,
        "birthplace": "",
        "careerStart": "1964",
        "biography": "Carlos Danilo Vallejo López ( Riobamba , 20 de octubre de 1939) es un ingeniero agrónomo y político ecuatoriano . Entre los cargos públicos que ha ocupado se cuentan diputado nacional en cuatro periodos, presidente del Congreso Nacional y dos veces ministro de agricultura .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "148",
        "name": "Alejandro Vanegas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vanegas_Abogados_54.jpg/250px-Vanegas_Abogados_54.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 32,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 57,
        "birthplace": "",
        "careerStart": "1993",
        "biography": "Alejandro Vanegas Maingon",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "149",
        "name": "Pedro Velasco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pedro_Velasco%2C_junio_de_2021.jpg/250px-Pedro_Velasco%2C_junio_de_2021.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "Pedro Ramiro Velasco Erazo ( Tulcán , 21 de septiembre de 1962) es un abogado y político ecuatoriano que ocupó la alcaldía de Tulcán durante dos periodos consecutivos (de 2000 a 2009). [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "150",
        "name": "Alfredo Vera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Alfredo-vera.jpg/250px-Alfredo-vera.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "Diputado Nacional del Ecuador",
        "experience": 65,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 90,
        "birthplace": "",
        "careerStart": "1960",
        "biography": "Alfredo Vera Arrata ( Guayaquil , 1935) fue Ministro del Interior del Ecuador de diciembre de 2010 hasta mayo de 2011. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "151",
        "name": "Carlos Vera (periodista)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ENTREVISTA_AL_PRESIDENTE_GUILLERMO_LASSO_EN_EL_PROGRAMA_VERA_A_SU_MANERA._QUITO%2C_24_DE_FEBRERO_DE_2022.jpg/250px-ENTREVISTA_AL_PRESIDENTE_GUILLERMO_LASSO_EN_EL_PROGRAMA_VERA_A_SU_MANERA._QUITO%2C_24_DE_FEBRERO_DE_2022.jpg",
        "party": "Madera de Guerrero (desde 2009)",
        "province": "manabí",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Carlos Edmundo Juan de Dios Vera Rodríguez ( Bahía de Caráquez , Manabí , 8 de marzo de 1955) es un periodista y político ecuatoriano . Practicó el periodismo de investigación y fue entrevistador durante 30 años. Desde el 2009 incursionó en la política ecuatoriana como parte del Movimiento Cívico Madera de Guerrero , [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ y luego postulándose como asambleísta nacional por la alianza del movimiento en conjunto con el PSC , sin obtener un curul. [ 4 ] ​ [ 5 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "152",
        "name": "Franklin Verduga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Escudo_de_Guayaquil.svg/60px-Escudo_de_Guayaquil.svg.png",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Franklin Verduga Vélez es un político ecuatoriano, hermano del exministro del interior César Verduga [ 1 ] ​ y principal implicado en el caso de corrupción conocido como Garita 3.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "153",
        "name": "René Yandún",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rene_Yandun_%28detalle%29.png/250px-Rene_Yandun_%28detalle%29.png",
        "party": "",
        "province": "carchi",
        "currentPosition": "",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "Cástulo René Yandún Pozo ( Tulcán , 29 de noviembre de 1946) [ 2 ] ​ es un general y político socialdemócrata ecuatoriano que ocupó la prefectura provincial de Carchi durante 12 años consecutivos (de 2000 a 2012).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "154",
        "name": "Jorge Yunda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jorge_Yunda_Machado.png/250px-Jorge_Yunda_Machado.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Jorge Homero Yunda Machado ( Guano , 28 de agosto de 1965) es un médico , político , músico y radiodifusor ecuatoriano . [ 1 ] ​ [ 2 ] ​ Se desempeñó como Alcalde del Distrito Metropolitano de Quito desde el 14 de mayo de 2019 hasta el 29 de septiembre de 2021.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "155",
        "name": "Jorge Zambrano",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Jorge Orley Zambrano Cedeño ( Manta , 29 de julio de 1957) [ 2 ] ​ es un político ecuatoriano que ha ocupado la alcaldía de Manta durante cuatro periodos no consecutivos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "156",
        "name": "Mariano Zambrano",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mariano_Zambrano_%28detalle%29.jpg/250px-Mariano_Zambrano_%28detalle%29.jpg",
        "party": "Partido Social Cristiano (1997-2008) Unidad Primero (desde 2008)",
        "province": "manabí",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Mariano Nicanor Zambrano Segovia ( Chone , 17 de octubre de 1949) es un ingeniero y político ecuatoriano que ocupó el cargo de prefecto provincial de Manabí de 2005 a 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "157",
        "name": "Mery Zamora",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Asamble%C3%ADsta_Mery_Zamora_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No.-_187_del_Pleno_de_la_Asamblea_Nacional_continuaci%C3%B3n_%288007295642%29_%28cropped%29.jpg/250px-Asamble%C3%ADsta_Mery_Zamora_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No.-_187_del_Pleno_de_la_Asamblea_Nacional_continuaci%C3%B3n_%288007295642%29_%28cropped%29.jpg",
        "party": "Movimiento Popular Democrático (1995-2014) Unidad Popular (desde 2014)",
        "province": "",
        "currentPosition": "Presidente (2007-2010)",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Mery Segunda Zamora García ( Portoviejo , 19 de abril de 1972) es una dirigente sindical , maestra y política ecuatoriana destacada por haber sido presidenta de la Unión Nacional de Educadores (UNE) entre los años 2007 y 2010, tiempo durante el cual empezó el gobierno de Rafael Correa convirtiéndose en pocos años en opositora de este gobierno.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "158",
        "name": "Juan Zapata Silva",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/EJECUTIVO_REMITI%C3%93_PROYECTO_DE_GESTI%C3%93N_DE_EMERGENCIA_SANITARIA_POR_PANDEMIA._ECUADOR%2C_22_DE_ABRIL_DEL_2021.jpg/250px-EJECUTIVO_REMITI%C3%93_PROYECTO_DE_GESTI%C3%93N_DE_EMERGENCIA_SANITARIA_POR_PANDEMIA._ECUADOR%2C_22_DE_ABRIL_DEL_2021.jpg",
        "party": "Izquierda Democracia (hasta 2019)",
        "province": "",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 61,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "Juan Ernesto Zapata Silva (9 de mayo de 1964) es un ingeniero , político y policía (servicio pasivo) ecuatoriano . Fue ministro del Interior , desde septiembre de 2022 hasta noviembre de 2023. [ 1 ] ​ y director general del ECU 911, desde mayo de 2019. Fue secretario de seguridad en la alcaldía de Mauricio Rodas , entre 2014 y 2018. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "159",
        "name": "Pedro Zapata",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Asambleista_pedro_zapata.jpg/250px-Asambleista_pedro_zapata.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 40,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 65,
        "birthplace": "",
        "careerStart": "1985",
        "biography": "Pedro Aníbal Zapata Rumipamba ( San Cristóbal , 22 de febrero de 1960) es un político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "160",
        "name": "Esthela Acero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Esthela_Acero_Lachimba.jpg/250px-Esthela_Acero_Lachimba.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 16,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 41,
        "birthplace": "",
        "careerStart": "2009",
        "biography": "Esthela Liliana Acero Lanchimba ( Cangahua , 22 de diciembre de 1984) [ 1 ] ​ es una política y activista indígena kayambi ecuatoriana . Fue legisladora ecuatoriana de 2013 a 2017.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "161",
        "name": "Alberto Acosta Espinosa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Alberto_Acosta_%28detalle%29.jpg/250px-Alberto_Acosta_%28detalle%29.jpg",
        "party": "Pachakutik (1995-2005) Alianza PAÍS (2006-2009) Montecristi Vive (desde 2011)",
        "province": "",
        "currentPosition": "",
        "experience": 52,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 77,
        "birthplace": "",
        "careerStart": "1973",
        "biography": "Alberto José Acosta Espinosa ( Quito , 21 de julio de 1948) es un economista y político ecuatoriano de izquierda . Acosta a lo largo de su carrera ha mantenido un perfil intelectual de izquierda , simpatizando con el marxismo , el movimiento antiglobalización y el antiminero .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "162",
        "name": "Ronny Aleaga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ronny_Aleaga_Santos.jpg/250px-Ronny_Aleaga_Santos.jpg",
        "party": "Alianza PAÍS (hasta 2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "Asambleísta de Ecuador",
        "experience": 16,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 41,
        "birthplace": "",
        "careerStart": "2009",
        "biography": "Ronny Xavier Aleaga Santos ( Guayaquil , 4 de julio de 1984) es un ex legislador de la Asamblea Nacional y prófugo de la justicia ecuatoriano.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "163",
        "name": "Rosana Alvarado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Rosana_Alvarado_Carri%C3%B3n_en_la_Comisi%C3%B3n_de_Juticia%2C_20_de_septiembre_de_2017_%2837206786261%29_%28cropped%29.jpg/250px-Rosana_Alvarado_Carri%C3%B3n_en_la_Comisi%C3%B3n_de_Juticia%2C_20_de_septiembre_de_2017_%2837206786261%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Rosana Alvarado Carrión ( Cuenca , 19 de febrero de 1977) [ 1 ] ​ es una abogada y política feminista ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "164",
        "name": "Alexandra Arce",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alexandra_Arce_Pl%C3%BAas_2022.jpg/250px-Alexandra_Arce_Pl%C3%BAas_2022.jpg",
        "party": "Alianza PAÍS (hasta 2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Alexandra Manuela Arce Plúas ( Guayaquil , 31 de julio de 1977) es una ingeniera comercial y política ecuatoriana . Se desempeñó como asambleísta nacional en dos periodos no consecutivos: en 2013 y entra 2021-2022 . Fue además, entre 2014 y 2019, la alcaldesa de Durán , siendo concejala de 2009 a 2012.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "165",
        "name": "Augusto Barrera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/22_de_marzo_de_2018_-_Comisi%C3%B3n_de_Educaci%C3%B3n_%2840916412422%29_%28cropped%29.jpg/250px-22_de_marzo_de_2018_-_Comisi%C3%B3n_de_Educaci%C3%B3n_%2840916412422%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS (2006-2018)",
        "province": "",
        "currentPosition": "",
        "experience": 39,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 64,
        "birthplace": "",
        "careerStart": "1986",
        "biography": "Adrián Augusto Barrera Guarderas ( Quito , 11 de diciembre de 1961) es un médico , sociólogo y político ecuatoriano , egresado del Colegio Municipal Experimental Sebastián de Benalcázar, y exsecretario de Educación Superior, Ciencia y Tecnología de Ecuador. Ejerció las funciones de alcalde del Distrito Metropolitano de Quito entre 2009 y 2014.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "166",
        "name": "Viviana Bonilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Viviana_Bonilla_en_2017_%28cropped%29.png/250px-Viviana_Bonilla_en_2017_%28cropped%29.png",
        "party": "Alianza País (2006-2018)",
        "province": "",
        "currentPosition": "",
        "experience": 17,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 42,
        "birthplace": "",
        "careerStart": "2008",
        "biography": "Viviana Patricia Bonilla Salcedo [ 1 ] ​ ( Guayaquil , 3 de octubre de 1983) es una abogada y política ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "167",
        "name": "Aminta Buenaño",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Asamble%C3%ADsta_Aminta_Buena%C3%B1o_%283927365564%29_%28cropped%29.jpg/250px-Asamble%C3%ADsta_Aminta_Buena%C3%B1o_%283927365564%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "Aminta del Rosario Buenaño Rugel ( Santa Lucía , 27 de septiembre de 1958) es una escritora, política y diplomática ecuatoriana . Entre los cargos públicos que ha ocupado destaca el de embajadora en España y en Nicaragua , [ 2 ] ​ [ 3 ] ​ además de vicepresidenta de la Asamblea Nacional de Ecuador .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "168",
        "name": "Elizabeth Cabezas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Elizabeth_Cabezas%2C_Presidenta_de_la_Asamblea_Nacional_%28cropped%29.jpg/250px-Elizabeth_Cabezas%2C_Presidenta_de_la_Asamblea_Nacional_%28cropped%29.jpg",
        "party": "Independiente",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Elizabeth Enriqueta Cabezas Guerrero ( Riobamba , 14 de junio de 1963) es una economista y política ecuatoriana . Ocupó la presidencia de la Asamblea Nacional entre 2018 y 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "169",
        "name": "Irina Cabezas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Irina_Cabezas_en_2010_como_Presidenta_encargada_de_la_Asamblea_Nacional.jpg/250px-Irina_Cabezas_en_2010_como_Presidenta_encargada_de_la_Asamblea_Nacional.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "Carmen Irina Cabezas Rodríguez [ 1 ] ​ ( Salcedo , 26 de noviembre de 1971) [ 2 ] ​ es una política y educadora ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "170",
        "name": "María Augusta Calle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741799852%29.jpg/250px-Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741799852%29.jpg",
        "party": "Alianza PAÍS",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "María Augusta Calle Andrade (n. Quito ) es una periodista y política de Ecuador . Ha sido legisladora en representación de la Provincia de Pichincha por el movimiento Alianza PAIS en varias ocasiones, así mismo fue la jefa de operaciones en Ecuador de la cadena televisiva TeleSUR . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "171",
        "name": "María José Carrión",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mar%C3%ADa_Jos%C3%A9_Carri%C3%B3n_en_2017.jpg/250px-Mar%C3%ADa_Jos%C3%A9_Carri%C3%B3n_en_2017.jpg",
        "party": "",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "María José Carrión ( Conocoto , 29 de septiembre de 1977) es una política y médico ecuatoriana , entre 2013 y 2021 fue Asambleísta por Pichincha en la Asamblea Nacional de Ecuador . [ 1 ] ​ Fundadora del Movimiento Alianza País . Fundadora de la Red de Maestros Nacional. Asesora Política del Ministerio de Educación Ecuador. En el 2011 Subsecretaria de Protección Social del Ministerio de Salud Pública Ecuador. Asesora Política Ministerio de la Coordinación de la Política y Gobiernos Autónomos Descentralizados y Ministerio de Cultura y Patrimonio. Docente en la Universidad Central del Ecuador y Universidad Autónoma de los Andes. Presidenta de la Comisión de Fiscalización y Control Político, Integrante de la Comisión de Derecho a la Salud y Presidenta de la Comisión de los Trabajadores.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "172",
        "name": "Miguel Carvajal",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Miguel_Carvajal_en_2017.jpg/250px-Miguel_Carvajal_en_2017.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 40,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 65,
        "birthplace": "",
        "careerStart": "1985",
        "biography": "Miguel Ángel Carvajal Aguirre ( Quito , 23 de febrero de 1960) [ 1 ] ​ es un sociólogo y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "173",
        "name": "Juan Carlos Cassinelli",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Juan_Carlos_Cassinelli_en_2011.jpg/250px-Juan_Carlos_Cassinelli_en_2011.jpg",
        "party": "Alianza PAIS",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Juan Carlos Cassinelli Cali ( Guayaquil , 4 de agosto de 1963) es un abogado y político ecuatoriano , que ocupó el cargo de Primer Vicepresidente de la Asamblea Nacional hasta el 2013. Es miembro del partido gobernante Alianza PAIS .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "174",
        "name": "Kharla Chávez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kharla_Ch%C3%A1vez_%28detalle%29.png/250px-Kharla_Ch%C3%A1vez_%28detalle%29.png",
        "party": "Partido Social Cristiano (2002-2006) Partido Roldosista Ecuatoriano (2006-2008) Alianza PAÍS (desde 2008)",
        "province": "",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "Kharla del Rocío Chávez Bajaña ( Babahoyo , 19 de marzo de 1975) es una abogada y política ecuatoriana ; primera mujer en ocupar la alcaldía de Babahoyo (2009 a 2014). [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "175",
        "name": "Fernando Cordero Cueva",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Juan-Fernando-Cordero-Cueva_%288318629964%29.jpg/250px-Juan-Fernando-Cordero-Cueva_%288318629964%29.jpg",
        "party": "Pachakutik (1995-1996) Nuevo País (desde 1996) Alianza PAÍS (2006-2018)",
        "province": "",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Juan Fernando Cordero Cueva [ 3 ] ​ ( Cuenca , 27 de mayo de 1952) [ 3 ] ​ es un arquitecto y político ecuatoriano . Es conocido por ser Alcalde de Cuenca entre 1996 y 2005, miembro del Congreso Nacional y presidente de la Asamblea Nacional Constituyente en 2008. Entre 2009 y 2013 fue presidente de la Asamblea Nacional de Ecuador . Desde septiembre a marzo de 2016 fue Ministro de Defensa Nacional . También es conocido como Corcho Cordero. [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "176",
        "name": "Ulises de la Cruz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Asamble%C3%ADsta_Ulises_de_la_Cruz_%2C_interviene_en_la_Sesi%C3%B3n_No.319_del_Pleno_de_la_Asamblea_Nacional_%2816882705660%29.jpg/330px-Asamble%C3%ADsta_Ulises_de_la_Cruz_%2C_interviene_en_la_Sesi%C3%B3n_No.319_del_Pleno_de_la_Asamblea_Nacional_%2816882705660%29.jpg",
        "party": "Alianza PAIS",
        "province": "carchi",
        "currentPosition": "defensa",
        "experience": 26,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 51,
        "birthplace": "",
        "careerStart": "1999",
        "biography": "Ulises de la Cruz (Piquiucho, Carchi , 8 de febrero de 1974) [ 1 ] ​ es un exfutbolista ecuatoriano . Su posición era la de lateral derecho , aunque también actuó de volante lateral por derecha . Ulises es considerado uno de los mejores laterales sudamericanos de la Premier League en sus tiempos.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "177",
        "name": "Agustín Delgado Chalá",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/AGUST%C3%8DN_DELGADO_%2832456009762%29.jpg/330px-AGUST%C3%8DN_DELGADO_%2832456009762%29.jpg",
        "party": "Alianza PAIS",
        "province": "imbabura",
        "currentPosition": "delantero y guardameta",
        "experience": 26,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 51,
        "birthplace": "",
        "careerStart": "1999",
        "biography": "Agustín Javier Delgado Chalá ( Ambuquí , Imbabura , 23 de diciembre de 1974) es un exfutbolista y exasambleísta ecuatoriano . Jugó la mayor parte de su carrera como delantero y su último equipo fue el Club Deportivo Valle del Chota . Fue presidente del Club Deportivo Valle del Chota hasta su desaparición en 2013. Fue asambleísta nacional , por el partido Alianza PAIS , en el periodo 2013-2017.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "178",
        "name": "María de los Ángeles Duarte",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Entrega_Bonos_MIDUVI_%2822807210706%29_%28cropped%29.jpg/250px-Entrega_Bonos_MIDUVI_%2822807210706%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "María de los Ángeles Duarte Pesantes ( Guayaquil , 15 de febrero de 1963) es una arquitecta y política ecuatoriana . Fue ministra de Transporte y Obras Públicas desde el 5 de abril de 2010 al 10 de marzo de 2014, [ 1 ] ​ ministra de Desarrollo Urbano y Vivienda desde el 2007 hasta el 2009 [ 2 ] ​ [ 3 ] ​ [ 4 ] ​ [ 5 ] ​ y ministra de Inclusión Económica y Social entre junio del 2009 y abril del 2010.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "179",
        "name": "María Fernanda Espinosa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Entrevista_de_Canciller_Mar%C3%ADa_Fernanda_Espinosa_%2836388035054%29_%28cropped%29.jpg/250px-Entrevista_de_Canciller_Mar%C3%ADa_Fernanda_Espinosa_%2836388035054%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS (2006-2018)",
        "province": "",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 61,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "María Fernanda Espinosa Garcés ( Salamanca , España , 7 de septiembre de 1964) es una lingüista, poetisa , política y diplomática ecuatoriana . Actualmente, directora ejecutiva de GWL Voices, organización sin fines de lucro dedicada a construir un sistema internacional con equidad de género. [ 1 ] ​ Fue asesora en biodiversidad y pueblos indígenas (1999-2005) y directora regional para América del Sur (2005-2007) de la Unión Internacional para la Conservación de la Naturaleza (UICN), ministra de Relaciones Exteriores del Ecuador en dos ocasiones, entre el 2007 y 2008 y luego entre el 2017 y 2018. [ 2 ] ​Fue embajadora, representante permanente ante las Naciones Unidas en Nueva York (2008-2009) y en Ginebra (2014-2017), y Ministra de Defensa Nacional del Ecuador (2012-2014). En junio de 2018 fue elegida por votación de dos tercios de los Estados miembros como Presidenta de la Asamblea General de las Naciones Unida . Espinosa Garcés se convirtió en la cuarta mujer en setenta y tres años de historia de las Naciones Unidas en ser elegida Presidenta de la Asamblea General. [ 3 ] ​ Además de su carrera política, también es poeta y ensayista. [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "180",
        "name": "Jorge Glas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nueva_Embajadora_en_Ecuador_present%C3%B3_Cartas_Credenciales_%2810594293813%29.jpg/250px-Nueva_Embajadora_en_Ecuador_present%C3%B3_Cartas_Credenciales_%2810594293813%29.jpg",
        "party": "Alianza PAÍS (2006-2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "Jorge David Glas Espinel ( Guayaquil , 13 de septiembre de 1969) [ 5 ] ​ es un ingeniero eléctrico y político ecuatoriano,quien posee doble nacionalidad ecuatoriana y alemana. Fue vicepresidente de la República del Ecuador desde el 24 de mayo de 2013 hasta el 6 de enero de 2018. [ 6 ] ​ [ 7 ] ​ [ 8 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "181",
        "name": "Gina Godoy",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Asamble%C3%ADsta_Gina_Godoy_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288741617556%29.jpg/250px-Asamble%C3%ADsta_Gina_Godoy_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288741617556%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Gina Godoy Andrade ( Chone , 26 de abril de 1962) es una abogada y política feminista ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "182",
        "name": "Paúl Granda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/PARO_DE_TRANSPORTE_INTERPROVINCIAL_%2840525930831%29_%28cropped%29.jpg/250px-PARO_DE_TRANSPORTE_INTERPROVINCIAL_%2840525930831%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Raúl Andrés Granda López ( Cuenca , 19 de septiembre de 1972) [ 1 ] ​ es un político ecuatoriano que ocupó la alcaldía de Cuenca entre 2009 y 2014. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "183",
        "name": "Tatiana Hidrovo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Asamble%C3%ADsta_Tatiana_Hidrovo_%283077409069%29.jpg/250px-Asamble%C3%ADsta_Tatiana_Hidrovo_%283077409069%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 40,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 65,
        "birthplace": "",
        "careerStart": "1985",
        "biography": "Tatiana María del Carmen Hidrovo Quiñónez ( Portoviejo , 1960) es una escritora, política, docente universitaria, investigadora, historiadora y política ecuatoriana . [ 1 ] ​ Fue Asambleísta Constituyente en el período 2007-2008. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "184",
        "name": "Nicolás Issa Wagner",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nicolas_Issa_Wagner_%28detalle%29.jpg/250px-Nicolas_Issa_Wagner_%28detalle%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 21,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 46,
        "birthplace": "",
        "careerStart": "2004",
        "biography": "Nicolás José Issa Wagner ( Guayaquil , 25 de septiembre de 1979) es un abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "185",
        "name": "Lenín Moreno",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Presidente_del_Ecuador%2C_Len%C3%ADn_Moreno_Garc%C3%A9s_5_%2841059887005%29_%28cropped%29.jpg/250px-Presidente_del_Ecuador%2C_Len%C3%ADn_Moreno_Garc%C3%A9s_5_%2841059887005%29_%28cropped%29.jpg",
        "party": "Alianza PAÍS (2006-2021)",
        "province": "",
        "currentPosition": "",
        "experience": 47,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 72,
        "birthplace": "",
        "careerStart": "1978",
        "biography": "Lenín Boltaire Moreno Garcés [ 1 ] ​ [ 2 ] ​ ( Nuevo Rocafuerte , 19 de marzo de 1953) [ 3 ] ​ es un político y administrador ecuatoriano que se desempeñó como presidente del Ecuador desde 2017 hasta 2021. Anteriormente fungió como vicepresidente desde 2007 hasta 2013, durante el gobierno de Rafael Correa .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "186",
        "name": "Alexandra Ocles",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Alexandra_Ocles_%28cropped%29.png/250px-Alexandra_Ocles_%28cropped%29.png",
        "party": "Ruptura 25 (2004-2012) Alianza PAÍS (desde 2006)",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "María Alexandra Ocles Padilla ( Quito , 22 de enero de 1979) es una política y educadora ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "187",
        "name": "Paola Pabón",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/MV_8888.jpg/250px-MV_8888.jpg",
        "party": "Izquierda Democrática (1999-2006) Alianza País (2006-2018) Movimiento Revolución Ciudadana (desde 2018)",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Paola Verenice Pabón Caranqui ( Ibarra , 28 de enero de 1978) [ 1 ] ​ es una abogada y política feminista ecuatoriana, actual prefecta provincial de Pichincha .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "188",
        "name": "Rolando Panchana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ROLANDO-JOS%C3%89-PANCHANA-FARRA_%288318636356%29.jpg/250px-ROLANDO-JOS%C3%89-PANCHANA-FARRA_%288318636356%29.jpg",
        "party": "Alianza PAIS",
        "province": "guayas",
        "currentPosition": "",
        "experience": 33,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 58,
        "birthplace": "",
        "careerStart": "1992",
        "biography": "Rolando José Panchana Farra ( Guayaquil , 11 de septiembre de 1967) es un periodista y político ecuatoriano . [ 1 ] ​ Fue presentador del programa De la vida real de Ecuavisa y asambleísta por Guayas. [ 1 ] ​ Ocupó el cargo de gobernador del Guayas hasta el 21 de mayo de 2015, tras lo cual renunció; fue reemplazado por Julio César Quiñonez. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "189",
        "name": "Raúl Patiño",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741800638%29.jpg/250px-Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741800638%29.jpg",
        "party": "Partido Socialista Ecuatoriano (hasta 1995) Democracia Popular (1996-2006) Red Ética y Democracia (2006) Alianza PAÍS (desde 2006)",
        "province": "",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Raúl Patiño Aroca ( Guayaquil , 3 de agosto de 1952) es un abogado y político ecuatoriano , hermano mayor del ex Canciller de la República, Ricardo Patiño .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "190",
        "name": "Ximena Peña",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Ximena_Pe%C3%B1a_2016.JPG/250px-Ximena_Pe%C3%B1a_2016.JPG",
        "party": "Alianza PAÍS (2008-2021)",
        "province": "",
        "currentPosition": "",
        "experience": 24,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 49,
        "birthplace": "",
        "careerStart": "2001",
        "biography": "Ximena del Rocío Peña Pacheco ( Cuenca, 11 de febrero de 1976) es una administradora y política ecuatoriana. [ 1 ] ​ Ha fungido como asambleísta por el partido político Alianza PAÍS y candidata presidencial en las Elecciones presidenciales de Ecuador de 2021 por la misma tienda política. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "191",
        "name": "Denisse Robles",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741778828%29.jpg/250px-Sesi%C3%B3n_Inaugural_Asamblea_Nacional_2013-2017_%288741778828%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 13,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 38,
        "birthplace": "",
        "careerStart": "2012",
        "biography": "Denisse Priscila Robles Andrade ( Milagro , 11 de julio de 1987) es una economista y política ecuatoriana . Fue la primera mujer en llegar a la alcaldía de la ciudad de Milagro . [ 1 ] ​ [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "192",
        "name": "María Isabel Salvador",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Maria_Isabel_Salvador.JPG/250px-Maria_Isabel_Salvador.JPG",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "María Isabel Salvador Crespo Estudió en la Facultad de Derecho de la Universidad Católica, en École de Langue et de Civilisation Françaises, Université de Genève, en Ginebra, Suiza , en el Colegio Mayor de Educación Continua, Universidad San Francisco de Quito y estudios de maestría en Gestión Administrativa con doble titulación por las universidades Andrés Bello, Chile y Europea de Madrid, España.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "193",
        "name": "Gina Sanmiguel",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ingreso_de_Asamble%C3%ADstas%2C_familiares_e_invitados_a_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288740488885%29.jpg/250px-Ingreso_de_Asamble%C3%ADstas%2C_familiares_e_invitados_a_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288740488885%29.jpg",
        "party": "Alianza PAÍS",
        "province": "napo",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "Gina Zita Sanmiguel Palacios (1956/1957) [ 1 ] ​ es una abogada y política ecuatoriana y la primera mujer en ocupar la prefectura de la provincia de Napo .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "194",
        "name": "José Serrano Salgado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Jos%C3%A9_Serrano_-_Presidente_de_la_Asamblea_Nacional_del_Ecuador.jpg/250px-Jos%C3%A9_Serrano_-_Presidente_de_la_Asamblea_Nacional_del_Ecuador.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 30,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 55,
        "birthplace": "",
        "careerStart": "1995",
        "biography": "José Ricardo Serrano Salgado ( Cuenca , 19 de noviembre de 1970) es un abogado y político ecuatoriano . [ 1 ] ​ Se desempeñó como Ministro del Interior desde el 13 de mayo de 2011 hasta el 15 de noviembre de 2016. [ 2 ] ​ Fue el asambleísta más votado en los comicios presidenciales de 2017 . [ 3 ] ​ Ocupó el cargo de presidente de la Asamblea Nacional de Ecuador desde el 14 de mayo de 2017 hasta el 9 de marzo de 2018 tras su destitución por la Asamblea Nacional, por supuesta conspiración. [ 4 ] ​ [ 5 ] ​ [ 6 ] ​ [ 7 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "195",
        "name": "Betty Tola",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Betty_Tola_en_el_gobierno_provincial_de_Pichincha.jpg/250px-Betty_Tola_en_el_gobierno_provincial_de_Pichincha.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Ana Beatriz Tola Bermeo ( Cuenca , 22 de diciembre de 1965) [ 1 ] ​ es una política ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "196",
        "name": "Ana Triviño",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "santa elena",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Ana Mireya Triviño Cisneros ( Guayaquil , 1959) es una política ecuatoriana que ocupó el cargo como la primera prefecta de la provincia de Santa Elena de 2008 a 2009. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "197",
        "name": "Paco Velasco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Asamble%C3%ADsta_Paco_Velasco_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No._134_del_Pleno_de_la_Asamblea_Nacional_%286300195463%29.jpg/250px-Asamble%C3%ADsta_Paco_Velasco_en_su_intervenci%C3%B3n_en_la_sesi%C3%B3n_No._134_del_Pleno_de_la_Asamblea_Nacional_%286300195463%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "Francisco Velasco Andrade ( Quito , 28 de marzo de 1958) [ 1 ] ​ es un político y radiodifusor ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "198",
        "name": "Wendy Vera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wendy_Vera_Flores.jpg/250px-Wendy_Vera_Flores.jpg",
        "party": "Alianza PAÍS (2016-2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Wendy Vanessa Vera Flores ( Guayaquil , 5 de octubre de 1977), [ 1 ] ​ es una compositora , cantautora y productora musical ecuatoriana . Es más conocida por haber conformado el grupo de tecnocumbia Las Chicas Dulces , y por ser parte del jurado de Ecuador Tiene Talento . [ 2 ] ​ Entre 2017 y 2021 fue Asambleísta Nacional del Ecuador por el periodo 2017-2021.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "199",
        "name": "María Alejandra Vicuña",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/SESI%C3%93N_SOLEMNE_INFORME_A_LA_NACI%C3%93N%2C_QUITO_24_DE_MAYO_2018._%2828454543258%29_%28cropped%29_%28cropped%29.jpg/250px-SESI%C3%93N_SOLEMNE_INFORME_A_LA_NACI%C3%93N%2C_QUITO_24_DE_MAYO_2018._%2828454543258%29_%28cropped%29_%28cropped%29.jpg",
        "party": "Alianza Bolivariana Alfarista Alianza PAÍS (2006-2020)",
        "province": "",
        "currentPosition": "Concusión",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "María Alejandra Vicuña Muñoz ( Guayaquil , 13 de febrero de 1978) [ 1 ] ​ es una política ecuatoriana que ejerció como Vicepresidenta Constitucional de Ecuador en el gobierno de Lenín Moreno de manera interina entre octubre de 2017 y enero de 2018, y como titular oficial del cargo entre enero y diciembre de 2018. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "200",
        "name": "Verónica Zurita",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Veronica_Zurita_%28Ecuador%29.jpg/250px-Veronica_Zurita_%28Ecuador%29.jpg",
        "party": "Izquierda Democrática (2002-2009) Alianza PAÍS (2009-2018) Movimiento CREO (desde 2018)",
        "province": "santo domingo de los tsáchilas",
        "currentPosition": "",
        "experience": 26,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 51,
        "birthplace": "",
        "careerStart": "1999",
        "biography": "Verónica Zurita Castro ( Santo Domingo , 10 de enero de 1974) [ 1 ] ​ es una política e ingeniera agropecuaria ecuatoriana , y la primera mujer en ocupar la alcaldía de la ciudad de Santo Domingo . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "201",
        "name": "Fernando Callejas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fernando_Callejas_%28detalle%29.png/250px-Fernando_Callejas_%28detalle%29.png",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 52,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 77,
        "birthplace": "",
        "careerStart": "1973",
        "biography": "Fernando Callejas Barona ( Ambato , diciembre de 1948) es un político ecuatoriano que ocupó la alcaldía de Ambato entre 2000 y 2014. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "202",
        "name": "César Carrión",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cesarcarrion_%28cropped%29.jpg/250px-Cesarcarrion_%28cropped%29.jpg",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "César Ataulfo Carrión Moreno ( Salcedo , 1 de mayo de 1958) es un policía , abogado y político ecuatoriano . Entre 2017 y 2021 fue asambleísta del Movimiento CREO .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "203",
        "name": "Ana Galarza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ANA_GALARZA_2017_%28cropped%29.jpg/250px-ANA_GALARZA_2017_%28cropped%29.jpg",
        "party": "Movimiento CREO (hasta 2022) Movimiento Construye (2023-2024)",
        "province": "",
        "currentPosition": "",
        "experience": 12,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 37,
        "birthplace": "",
        "careerStart": "2013",
        "biography": "Ana Mercedes Galarza Añazco ( Ambato , 22 de mayo de 1988) es una política , modelo y psicóloga ecuatoriana que ejerció funciones de asambleísta nacional y fue destituida de su cargo.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "204",
        "name": "Guillermo Lasso",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Guillermo_Lasso_2023.jpg/250px-Guillermo_Lasso_2023.jpg",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Guillermo Alberto Santiago Lasso Mendoza ( Guayaquil , 16 de noviembre de 1955) es un banquero ecuatoriano . [ 6 ] ​ Fue presidente de la República del Ecuador desde el 24 de mayo de 2021 hasta el 23 de noviembre de 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "205",
        "name": "Francesco Tabacchi",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Francesco_TABACCHI.jpg/250px-Francesco_TABACCHI.jpg",
        "party": "",
        "province": "guayas",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Francesco Adeodato Tabacchi Rendón ( Guayaquil , 1972) es un empresario y político ecuatoriano, conocido por su trayectoria en el sector agropecuario y su reciente incursión en la política. Ha sido presidente de la Federación de Ganaderos del Ecuador y accionista en varias empresas del sector industrial y de la construcción. [ 1 ] ​ [ 2 ] ​ Su carrera política comenzó en 2023 con su candidatura a la Prefectura del Guayas y su posterior nombramiento como gobernador de la provincia. En 2024, se postuló a la presidencia de Ecuador por el movimiento CREO , enfocando su campaña en temas de seguridad, educación y desarrollo económico. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "206",
        "name": "Tanlly Vera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tanlly_Vera_Mendoza_1_%28cropped%29.jpg/250px-Tanlly_Vera_Mendoza_1_%28cropped%29.jpg",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 13,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 38,
        "birthplace": "",
        "careerStart": "2012",
        "biography": "Tanlly Janela Vera Mendoza ( El Carmen , c. 1987) es una ingeniería y política ecuatoriana . [ 1 ] ​ Fue asambleísta de la República del Ecuador y ministra de Agricultura y Ganadería del Ecuador . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "207",
        "name": "Héctor Yépez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/HectorYepez.jpg/250px-HectorYepez.jpg",
        "party": "Partido SUMA (2012-2018) Movimiento CREO (2018-2020)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 14,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 39,
        "birthplace": "",
        "careerStart": "2011",
        "biography": "Héctor José Yépez Martínez ( Guayaquil , 22 de octubre de 1986) [ cita requerida ] es un profesor, abogado y político ecuatoriano , fue Asambleísta por la provincia del Guayas y Presidente de las comisiones parlamentarias de Participación Ciudadana y Control Social, [ 1 ] ​ y luego la de Gobiernos Autónomos, Descentralización, Competencias y Desarrollo Territorial de la Asamblea Nacional del Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "208",
        "name": "Jorge Escala",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jorge_Escala_en_2010.jpg/250px-Jorge_Escala_en_2010.jpg",
        "party": "Unidad Popular (desde 2014) Movimiento Popular Democrático (hasta 2014)",
        "province": "",
        "currentPosition": "",
        "experience": 30,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 55,
        "birthplace": "",
        "careerStart": "1995",
        "biography": "Jorge Elías Escala Zambrano ( Ventanas , 8 de enero de 1970) es un político y profesor ecuatoriano , militante de Unidad Popular , presidente de la Unión Nacional de Educadores (UNE), asambleísta constituyente y nacional . [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ Entre algunos de los hechos más destacados de su carrera esta su oposición al Convención de las Naciones Unidas sobre el Derecho del Mar (CONVEMAR) por supuestamente atentar a la soberanía nacional. [ 4 ] ​ [ 5 ] ​ [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "209",
        "name": "Magali Orellana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Prefecta-orellana.jpg/250px-Prefecta-orellana.jpg",
        "party": "Pachakutik (hasta 2017) Unidad Popular (desde 2017)",
        "province": "orellana",
        "currentPosition": "",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Magali Margoth Orellana Marquínez (26 de abril de 1978) es una política , ingeniera y abogada ecuatoriana que fue asambleísta del partido de Pachakutik entre 2009 y 2017. Fue elegida prefecta de Orellana en la elecciones del 2019 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "210",
        "name": "Liliana Silva Galeas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/COMISI%C3%93N_DE_GOBIERNOS_AUT%C3%93NOMOS._ECUADOR%2C_13_DE_DICIEMBRE_DEL_2023_%2853396151105%29.jpg/250px-COMISI%C3%93N_DE_GOBIERNOS_AUT%C3%93NOMOS._ECUADOR%2C_13_DE_DICIEMBRE_DEL_2023_%2853396151105%29.jpg",
        "party": "Unidad Popular",
        "province": "santo domingo de los tsáchilas",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 25,
        "birthplace": "",
        "careerStart": "",
        "biography": "Liliana Mishell Silva Galeas ( Santo Domingo , 11 de diciembre del 2000) es una ex-dirigente estudiantil y política ecuatoriana . Desde el 2023, concejal municipal de Santo Domingo, siendo la más joven de este organismo. [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "211",
        "name": "Diana Atamaint",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Diana_Atamaint_CONAIE_%28sq_cropped%29.jpg/250px-Diana_Atamaint_CONAIE_%28sq_cropped%29.jpg",
        "party": "Pachakutik (hasta 2017)",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Shiram Diana Atamaint Wamputsar ( Sucúa , 12 de mayo de 1972) es una ingeniera comercial y política ecuatoriana , siendo la primera integrante del pueblo shuar en ser legisladora. [ 1 ] ​ Es la presidenta del Consejo Nacional Electoral , desde 2018.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "212",
        "name": "Diana Caiza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Diana_caiza_alcaldesa_de_ambato.jpg/250px-Diana_caiza_alcaldesa_de_ambato.jpg",
        "party": "Pachakutik",
        "province": "",
        "currentPosition": "",
        "experience": 13,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 38,
        "birthplace": "",
        "careerStart": "2012",
        "biography": "Diana Guadalupe Caiza Telenchana ( Ambato , 3 de junio de 1987) [ 3 ] ​ [ 4 ] ​ es una política , empresaria e ingeniera comercial ecuatoriana . Fue elegida alcaldesa de Ambato en 2023 , lo que la convirtió en la primera mujer y la primera persona indígena en alcanzar el cargo en la historia de la ciudad. [ 5 ] ​ [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "213",
        "name": "Virna Cedeño Escobar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 33,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 58,
        "birthplace": "",
        "careerStart": "1992",
        "biography": "Virna Alexia Cedeño Escobar ( Guayaquil , 25 de noviembre de 1967) es una científica , académica, investigadora, y política ecuatoriana, candidata a la vicepresidencia de Ecuador en las elecciones presidenciales de 2021 por la organización política Pachakutik . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "214",
        "name": "Blanca Chancoso",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/PRESIDENTE_DE_LA_ASAMBLEA_NACIONAL%2C_C%C3%89SAR_LITARDO_RECIBI%C3%93_DEL_PARLAMENTO_POPULAR_DE_LOS_PUEBLOS_DE_ECUADOR%2C_LIDERADO_POR_LA_CONAIE_LA_PROPUESTA_ALTERNATIVA_A_LA_LEY_CRECIMIENTO_ECON%C3%93MICO._QUITO%2C_6_DE_NOVIEMBRE_2019._%2849026169861%29.jpg/250px-thumbnail.jpg",
        "party": "Pachakutik",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "María Blanca Chancosa Sánchez ( Cotacachi , 1955) es una dirigente indígena ecuatoriana de nacionalidad kichwa -otavalo. Formó parte de la fundación de la Confedera­ción de los Pueblos de Nacionalidad Kichua del Ecuador (Ecuaru­nari) y de la Confederación de Nacionalidades Indígenas del Ecuador (Conaie). A su vez ha escrito sobre el Sumak kawsay o buen vivir, destacando en ello su artículo “Sumak Kawsay desde la visión de la mujer”. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "215",
        "name": "Guadalupe Llori",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Guadalupe_Llori%2C_5_de_abril_de_2022.jpg/250px-Guadalupe_Llori%2C_5_de_abril_de_2022.jpg",
        "party": "Movimiento CREO",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Esperanza Guadalupe Llori Abarca ( El Coca , 1963) es una abogada y política ecuatoriana. Ha ocupado diversos cargos públicos, siendo el más importante de ellos, la de Presidenta de la Asamblea Nacional de Ecuador (entre mayo de 2021 y mayo de 2022), [ 1 ] ​ siendo la primera mujer indígena en la historia de Ecuador en dirigir el Poder legislativo , [ 2 ] ​ [ 3 ] ​ así como la primera miembro del Movimiento de Unidad Plurinacional Pachakutik en alcanzar dicho cargo. [ 4 ] ​ [ 5 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "216",
        "name": "Nina Pacari",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nina_pacari_RADIO_CENTRO.png/250px-Nina_pacari_RADIO_CENTRO.png",
        "party": "Pachakutik",
        "province": "imbabura",
        "currentPosition": "",
        "experience": 39,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 64,
        "birthplace": "",
        "careerStart": "1986",
        "biography": "Nina Pacari Vega Conejo, antes María Estela Vega Conejo ( Cotacachi , Imbabura , 9 de octubre de 1961), es una abogada , dirigenta indígena y política ecuatoriana de origen kichwa .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "217",
        "name": "Yaku Pérez Guartambel",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Yaku_Perez_Guartambel_foto_%28cropped%29.jpg/250px-Yaku_Perez_Guartambel_foto_%28cropped%29.jpg",
        "party": "Pachakutik (1996-2021) Democracia Sí (2023) Movimiento AMIGO (desde 2024)",
        "province": "azuay",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "Yaku Sacha Pérez Guartambel (Cachipucara, Cuenca , 26 de febrero de 1969) es un político y abogado ecuatoriano. Fue presidente de la Confederación de Pueblos de la Nacionalidad Kichwa (ECUARUNARI) de 2013 a 2019, desde donde participó en manifestaciones durante el gobierno de Rafael Correa . En 2017, fue elegido presidente de la Coordinadora Andina de Organizaciones Indígenas . [ 1 ] ​ En las elecciones seccionales de 2019 , fue elegido como prefecto del Azuay [ 2 ] ​ y participó en las manifestaciones de octubre de 2019 durante el gobierno de Lenín Moreno . Fue elegido por la organización política Pachakutik como candidato a la presidencia del Ecuador para las elecciones de 2021. [ 3 ] ​ En 2023 , volvería a candidatearse, esta vez por la Alianza Claro Que Se Puede . Para las elecciones de 2025 , Pérez será candidato a la Asamblea Nacional respaldado por el Movimiento AMIGO",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "218",
        "name": "Karla Reátegui",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Karla_Re%C3%A1tegui.jpg/250px-Karla_Re%C3%A1tegui.jpg",
        "party": "Pachakutik",
        "province": "zamora chinchipe",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Karla Gabriela Reátegui Encarnación es una política e ingeniera agrónoma ecuatoriana . [ 1 ] ​ Es la actual prefecta de la provincia de Zamora Chinchipe y la primera mujer en alcanzar dicho cargo. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "219",
        "name": "Lourdes Tibán",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lourdes_Tib%C3%A1n%2C_posesi%C3%B3n_de_Daniel_Noboa_1_%28cropped%29.jpg/250px-Lourdes_Tib%C3%A1n%2C_posesi%C3%B3n_de_Daniel_Noboa_1_%28cropped%29.jpg",
        "party": "Pachakutik",
        "province": "cotopaxi",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "Lourdes Licenia Tibán Guala ( Salcedo , 15 de octubre de 1969) es una abogada y política ecuatoriana de etnia indígena . Es la prefecta provincial de Cotopaxi , desde el 14 de mayo de 2023; siendo considerada una de las líderes nacionales del movimiento indígena. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "220",
        "name": "Elsa Bucaram",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Escudo_de_Guayaquil.svg/60px-Escudo_de_Guayaquil.svg.png",
        "party": "Partido Roldosista Ecuatoriano",
        "province": "",
        "currentPosition": "",
        "experience": 49,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 74,
        "birthplace": "",
        "careerStart": "1976",
        "biography": "Elsa Bucaram Ortiz es una abogada y política ecuatoriana de ascendencia libanesa , hermana del expresidente del Ecuador Abdala Bucaram y del exdiputado Jacobo Bucaram . Miembro del Partido Roldosista Ecuatoriano , fue elegida alcaldesa de Guayaquil , siendo la primera mujer en ocupar ese cargo en la historia de la ciudad. Rigió el municipio entre el 15 de mayo de 1988 y el 17 de mayo de 1991. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "221",
        "name": "Abdalá Bucaram",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Abdala_Bucaram_%28cropped%29.jpg",
        "party": "Partido Roldosista Ecuatoriano (1983-2014) Fuerza Ecuador (2017-2021)",
        "province": "",
        "currentPosition": "tráfico de armas , peculado y crimen organizado",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Abdalá Jaime Bucaram Ortiz ( Guayaquil , 4 de febrero de 1952) es un político y abogado ecuatoriano . [ 4 ] ​ Fue presidente del Ecuador entre el 10 de agosto de 1996 [ 5 ] ​ y el 6 de febrero de 1997, fecha en la que fue derrocado por el Congreso Nacional . [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "222",
        "name": "Dalo Bucaram",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dalo_Bucaram.jpg/250px-Dalo_Bucaram.jpg",
        "party": "Partido Roldosista Ecuatoriano (hasta 2014) Fuerza Ecuador (2015-2021)",
        "province": "",
        "currentPosition": "centrocampista",
        "experience": 18,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 43,
        "birthplace": "",
        "careerStart": "2007",
        "biography": "Abdalá Jaime Bucaram Pulley , más conocido como Dalo Bucaram ( Guayaquil , 25 de marzo de 1982), [ 1 ] ​ [ 2 ] ​ es un exfutbolista , abogado , dirigente deportivo y político ecuatoriano . Es hijo del expresidente de Ecuador Abdalá Bucaram Ortiz . [ 2 ] ​ [ 3 ] ​ Durante su carrera política fundó el partido político Fuerza Ecuador y fue elegido como legislador en dos períodos, formando parte de la Asamblea Nacional entre el 2009 y el 2014. También fue candidato a la presidencia de la República de Ecuador en la elecciones de 2017.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "223",
        "name": "Gabriela Pazmiño",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Asamble%C3%ADsta_Gabriela_Pazmi%C3%B1o_%284775864980%29.jpg/250px-Asamble%C3%ADsta_Gabriela_Pazmi%C3%B1o_%284775864980%29.jpg",
        "party": "Partido Roldosista Ecuatoriano (hasta 2014) Fuerza Ecuador (desde 2015)",
        "province": "",
        "currentPosition": "",
        "experience": 25,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "",
        "careerStart": "2000",
        "biography": "María Gabriela Pazmiño Pino ( Guayaquil , 30 de julio de 1975), conocida como Gaby Pazmiño, es una presentadora de televisión ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "224",
        "name": "Frank Vargas Pazzos",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tnte._Gral._Frank_Vargas_Pazzos_-_1986.jpg/250px-Tnte._Gral._Frank_Vargas_Pazzos_-_1986.jpg",
        "party": "Acción Popular Revolucionaria (desde 1987)",
        "province": "manabí",
        "currentPosition": "rebelión",
        "experience": 66,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 91,
        "birthplace": "",
        "careerStart": "1959",
        "biography": "Frank Vargas Pazzos ( Chone , Manabí , 15 de julio de 1934) es un exmilitar ecuatoriano . Fue Comandante General de la Fuerza Aérea Ecuatoriana y Presidente [ 1 ] ​ del Comando Conjunto de las Fuerzas Armadas del Ecuador .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "225",
        "name": "Patricia Briones",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Patricia_Briones%2C15_DE_NOVIEMBRE_DE_2024_%28sq_cropped%29.png/250px-Patricia_Briones%2C15_DE_NOVIEMBRE_DE_2024_%28sq_cropped%29.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "Patricia Ignacia Briones Fernández ( Portoviejo , 18 de octubre de 1962) [ 1 ] ​ es una política ecuatoriana , primera mujer en ocupar la alcaldía de Portoviejo .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "226",
        "name": "Wilson Cañizares",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/WilsonCa%C3%B1izaresVillamar-Alcalde-1.png/250px-WilsonCa%C3%B1izaresVillamar-Alcalde-1.png",
        "party": "Alianza PAÍS (2013-2015) Partido Social Cristiano (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 39,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 64,
        "birthplace": "",
        "careerStart": "1986",
        "biography": "Wilson Fidel Cañizares Villamar ( Daule , 10 de septiembre de 1961) es un médico cirujano y político ecuatoriano. Es el actual alcalde de Daule , desde mayo de 2019.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "227",
        "name": "Pascual del Cioppo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pascual_del_Cioppo.JPG/250px-Pascual_del_Cioppo.JPG",
        "party": "Partido Social Cristiano (1979-2021)",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Pascual del Cioppo Aragundi ( Guayaquil , siglo XX ) es un político conservador ecuatoriano . [ 2 ] ​ [ 3 ] ​ Fue presidente nacional del Partido Social Cristiano desde 1999 hasta 2021, [ 4 ] ​ además de ser simpatizante del Opus Dei y amigo personal del ex- arzobispo de Guayaquil , Antonio Arregui Yarza . [ 5 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "228",
        "name": "Soledad Diab",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Soledad_Diab%2C_2021.jpg/250px-Soledad_Diab%2C_2021.jpg",
        "party": "Partido Social Cristiano (2007-2025)",
        "province": "",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "María Soledad Diab Aguilar ( Guayaquil , 4 de abril de 1973) es una modelo y política ecuatoriana de ascendencia libanesa . Ganadora del título Miss Ecuador 1992 y ganadora de Miss Fotogénica en el Miss Universo 1992 . [ 1 ] ​ Fue asambleísta por el Partido Social Cristiano , y actualmente es Concejal independiente de Guayaquil.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "229",
        "name": "Marcelo Dotti",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Parlamento_Andino_Logo.svg/60px-Parlamento_Andino_Logo.svg.png",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "José Marcelo Dotti Almeida (2 de diciembre de 1942, Quito , Ecuador ) [ 1 ] ​ es un político, abogado y radiodifusor ecuatoriano.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "230",
        "name": "Consuelo Flores",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Consuelo_Flores.JPG/250px-Consuelo_Flores.JPG",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "Consuelo Flores Carrera ( Guayaquil , 28 de noviembre de 1962) es una abogada y política ecuatoriana . [ 1 ] ​ Fue concejala cantonal de Guayaquil.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "231",
        "name": "Susana González Rosado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Prefecta_del_Guayas_Susana_Gonzalez.jpg/250px-Prefecta_del_Guayas_Susana_Gonzalez.jpg",
        "party": "Partido Social Cristiano (2007-2024) Madera de Guerrero (2009-2024)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Dalia Susana González Rosado ( Guayaquil , 12 de marzo de 1973) es una periodista y política ecuatoriana . Asumió el cargo de prefecta del Guayas desde el 25 de junio de 2020 hasta el 14 de mayo de 2023. Fue también Viceprefecta de la Provincia del Guayas , desde el 14 de mayo de 2019 hasta 25 de junio de 2020. [ 2 ] ​ Actualmente, lidera la productora audiovisual Gamberra Films, enfocada en la creación de documentales.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "232",
        "name": "Alfonso Harb",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pocho_Harb.jpg/330px-Pocho_Harb.jpg",
        "party": "Partido Social Cristiano",
        "province": "guayas",
        "currentPosition": "",
        "experience": 34,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 59,
        "birthplace": "",
        "careerStart": "1991",
        "biography": "Alfonso Xavier Harb Viteri ( Guayaquil , 20 de mayo de 1966) es un periodista deportivo y expolítico ecuatoriano . Más conocido como el Pocho Harb , fue diputado del antiguo Congreso Nacional del Ecuador y presidente del Barcelona Sporting Club . Actualmente dirige un programa de radio llamado \"La Hora del Pocho\" por Radio Atalaya. Harb fue diputado por la provincia del Guayas del antiguo Congreso Nacional en el período comprendido entre 2003 al 2007 por el Partido Social Cristiano . Harb fue Vicepresidente de la comisión de Defensa del consumidor del Congreso Nacional, miembro de la directiva del PSC, fundador y Líder del Movimiento META.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "233",
        "name": "Patricia Henríquez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Patricia_Henriquez_%28cropped%29.jpg/250px-Patricia_Henriquez_%28cropped%29.jpg",
        "party": "Partido Social Cristiano",
        "province": "el oro",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 73,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Patricia Henríquez de Ugarte es una licenciada en administración educativa y política machaleña . [ 3 ] ​ Se destaca por haber sido 11 años vicealcaldesa de Machala, y fue asambleísta nacional por la provincia de El Oro . [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "234",
        "name": "Henry Kronfle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Henry_Kronfle_2024.jpg/250px-Henry_Kronfle_2024.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Henry Fabián Kronfle Kozhaya ( Guayaquil , 1972) [ 1 ] ​es un ingeniero mecánico , empresario y político ecuatoriano de origen árabe. Fue el presidente de la Asamblea Nacional del Ecuador , desde el 17 de noviembre de 2023 hasta el 2 de octubre de 2024, siendo asambleísta nacional , por el Partido Social Cristiano , en los períodos 2017-2021, 2021-2023 y 2023-2024. Fue candidato presidencial por el partido anterior mencionado para las elecciones de Ecuador de 2025 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "235",
        "name": "María Cristina Kronfle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mar%C3%ADa_Cristina_Kronfle_asamble%C3%ADsta.jpg/250px-Mar%C3%ADa_Cristina_Kronfle_asamble%C3%ADsta.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 15,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 40,
        "birthplace": "",
        "careerStart": "2010",
        "biography": "María Cristina Kronfle Gómez ( Guayaquil , 22 de noviembre de 1985) [ 1 ] ​ es una abogada y política ecuatoriana . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "236",
        "name": "Mariana Mendieta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Mariana de Jesús Mendieta ( Chone , 10 de abril de 1956) [ 1 ] ​ es una política ecuatoriana y la primera mujer en ocupar la alcaldía de Durán . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "237",
        "name": "Mayra Montaño",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/13_de_marzo_de_2018_-_Comisi%C3%B3n_de_Participaci%C3%B3n_Ciudadana_%2839903057065%29_%28cropped%29.jpg/250px-13_de_marzo_de_2018_-_Comisi%C3%B3n_de_Participaci%C3%B3n_Ciudadana_%2839903057065%29_%28cropped%29.jpg",
        "party": "Movimiento RETO",
        "province": "esmeraldas",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Mayra Migdonia Montaño Guisamano ( San Lorenzo , provincia de Esmeraldas ; 24 de diciembre de 1955) conocida por su pseudónimo de La Bombón , es una animadora , reportera y política ecuatoriana . Actualmente es Concejala Municipal de Guayaquil, en representación de la Circunscripción Urbana 1 por el Partido Social Cristiano , [ 1 ] ​ y presentadora de noticias de comunidad.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "238",
        "name": "Xavier Neira",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Xavier Neira Menéndez ( Guayaquil , 25 de julio de 1947) es un economista y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "239",
        "name": "Luzmila Nicolalde",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Luzmila_Nicolalde.JPG/250px-Luzmila_Nicolalde.JPG",
        "party": "Partido Sociedad Patriótica (2006-2013) Partido Social Cristiano (desde 2013)",
        "province": "",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Luzmila Nicolalde Cordero ( Guayaquil , Ecuador , 1 de junio de 1957) [ 2 ] ​ es una presentadora de televisión y política ecuatoriana. Es una de las presentadoras con más trayectoria en la televisión nacional, exconductora del programa de variedades Chispazos , que llegó a ser el más longevo al aire en el país, con 36 años. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "240",
        "name": "Dallyana Passailaigue",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SESI%C3%93N_NO._880_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_DICIEMBRE_DEL_2023_%2853408034166%29.jpg/250px-SESI%C3%93N_NO._880_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_DICIEMBRE_DEL_2023_%2853408034166%29.jpg",
        "party": "Partido Social Cristiano",
        "province": "guayas",
        "currentPosition": "",
        "experience": 20,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 45,
        "birthplace": "",
        "careerStart": "2005",
        "biography": "Dallyana Marianela Passailaigue Manosalvas ( Guayaquil , 27 de octubre de 1980) es una deportista , comunicadora y política feminista ecuatoriana . Fue asambleísta nacional de Ecuador por el distrito 3 de la Provincia de Guayas , entre 2017 y 2024.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "241",
        "name": "Camilo Ponce Gangotena",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 57,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 82,
        "birthplace": "",
        "careerStart": "1968",
        "biography": "Camilo Ponce Gangotena ( Quito , 26 de abril de 1943) [ 1 ] ​ es un licenciado y político ecuatoriano , hijo del expresidente Camilo Ponce Enríquez . [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "242",
        "name": "Cristina Reyes",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Primera_Sesi%C3%B3n_Parlamentaria_de_Posesi%C3%B3n_de_las_y_los_Asamble%C3%ADstas_para_el_Per%C3%ADodo_Legislativo_2017-2021_%2834276833870%29_%28cropped2%29.jpg/250px-Primera_Sesi%C3%B3n_Parlamentaria_de_Posesi%C3%B3n_de_las_y_los_Asamble%C3%ADstas_para_el_Per%C3%ADodo_Legislativo_2017-2021_%2834276833870%29_%28cropped2%29.jpg",
        "party": "Madera de Guerrero Partido Social Cristiano (hasta 2022) Movimiento AMIGO (desde 2024)",
        "province": "",
        "currentPosition": "",
        "experience": 19,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 44,
        "birthplace": "",
        "careerStart": "2006",
        "biography": "Cristina Eugenia Reyes Hidalgo [ 1 ] ​ ( Guayaquil , 26 de agosto de 1981) [ 1 ] ​ es una poeta , abogada y política ecuatoriana . Fue elegida como asambleísta nacional por el Partido Social Cristiano entre 2013 y 2020, y llegó a integrar el Consejo de Administración Legislativa . [ 2 ] ​Fue la Presidenta del Parlamento Andino , desde el 14 de julio del 2023 hasta el 27 de julio de 2024, [ 3 ] ​previamente fue Parlamentaria Andina del Ecuador entre 2021 y 2024 y Vicepresidenta de la Comisión de educación.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "243",
        "name": "César Rohon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/C%C3%A9sar_Roh%C3%B3n%2C_2018_%28cropped%29.jpg/250px-C%C3%A9sar_Roh%C3%B3n%2C_2018_%28cropped%29.jpg",
        "party": "Partido Social Cristiano (hasta 2021)",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "César Rohon Hervas ( Quito , 3 de enero de 1956) es un ingeniero , empresario y político ecuatoriano . Fue asambleísta nacional durante varios periodos legislativos como parte del Partido Social Cristiano . Se desempeñaba como Ministro de Transporte y Obras Públicas . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "244",
        "name": "Pedro Salazar Barzola",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Pedro Ottón Salazar Barzola [ 1 ] ​ ( Daule , siglo XX ) es un agricultor, empresario agrícola y político ecuatoriano. Fue alcalde de Daule , desde el 2000 hasta el 2019. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "245",
        "name": "Andrea Scacco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Andrea_Scacco_-_PRESIDENTA_DE_LA_ASAMBLEA_NACIONAL_GUADALUPE_LLORI_PARTICIPA_EN_LA_SESI%C3%93N_CONMEMORATIVA_POR_LOS_415_A%C3%91OS_DE_FUNDACI%C3%93N_DE_LA_CIUDAD_DE_IBARRA._ECUADOR_28_DE_SEPTIEMBRE_DE_2021.jpg/250px-thumbnail.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 14,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 39,
        "birthplace": "",
        "careerStart": "2011",
        "biography": "Andrea Elizabeth Scacco Carrasco ( Ibarra , 8 de julio de 1986) es una política ecuatoriana . Se desempeñó como alcaldesa de Ibarra de 2019 a 2023. Fue la primera mujer en llegar a la alcaldía en la historia de la ciudad, [ 1 ] ​ además de la persona más joven en asumir el puesto hasta el momento, con 33 años en el día de su posesión. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "246",
        "name": "Doménica Tabacchi",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dom%C3%A9nica_Tabacchi_cropped.jpg/250px-Dom%C3%A9nica_Tabacchi_cropped.jpg",
        "party": "Partido Social Cristiano Madera de Guerrero",
        "province": "",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Doménica Cristina Tabacchi Rendón ( Guayaquil , 21 de febrero de 1973) es una periodista y política ecuatoriana . Fue desde 2011 hasta 2019 vicealcaldesa de Guayaquil, siendo la primera mujer en ocupar el cargo.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "247",
        "name": "Vicente Taiano Basante",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vicente_Taiano_Basante.jpg/250px-Vicente_Taiano_Basante.jpg",
        "party": "Partido Social Cristiano",
        "province": "guayas",
        "currentPosition": "",
        "experience": 20,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 45,
        "birthplace": "",
        "careerStart": "2005",
        "biography": "Vicente Giovanny Taiano Basante ( Guayaquil , 18 de mayo de 1980) [ cita requerida ] es un abogado y político ecuatoriano. Actualmente se desempeña en el libre ejercicio de su profesión en el estudio jurídico Taiano y Asociados. Previamentre fue gerente de la Autoridad de Tránsito Municipal de Guayaquil . [ 5 ] ​ Fue asambleísta por el distrito 2 de la Guayas por el Partido Social Cristiano . [ 6 ] ​ Además, anteriormente se desempeñaba como el secretario municipal del Concejo Cantonal de Guayaquil , cargo que ejerció hasta el 17 de noviembre de 2016. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "248",
        "name": "Luis Fernando Torres",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Luis_Fernando_Torres_en_Programa_de_Ecuador_Tv_%22Ciudadanizando_las_Enmiendas%22_%2822282082413%29.jpg/250px-Luis_Fernando_Torres_en_Programa_de_Ecuador_Tv_%22Ciudadanizando_las_Enmiendas%22_%2822282082413%29.jpg",
        "party": "Partido Social Cristiano Tiempo de Cambio",
        "province": "",
        "currentPosition": "",
        "experience": 38,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1987",
        "biography": "Luis Fernando Torres Torres ( Ambato , 8 de diciembre de 1962) es un político ecuatoriano que ocupó la alcaldía de Ambato entre 1992 y 2000. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "249",
        "name": "Poly Ugarte",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/CONVERSATORIO_ASAMBLEISTA_JORGE_YUNDA%2CQUITO_29_DE_MAYO_2018_%2840633980480%29_%28cropped%29.jpg/250px-CONVERSATORIO_ASAMBLEISTA_JORGE_YUNDA%2CQUITO_29_DE_MAYO_2018_%2840633980480%29_%28cropped%29.jpg",
        "party": "Partido Social Cristiano (1992-2018) Movimiento CREO (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 41,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 66,
        "birthplace": "",
        "careerStart": "1984",
        "biography": "Blanca Rosana Ugarte Guzmán ( Machala , 1959), más conocida como Poly Ugarte , es una activista, empresaria y política ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "250",
        "name": "Macarena Valarezo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Macarena_Valarezo_%282013%29_01.jpg/250px-Macarena_Valarezo_%282013%29_01.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Macarena Valarezo Fernández de Córdova ( Quito , 2 de junio de 1972) es una política y conductora de televisión ecuatoriana . Fue reina de Quito en el año 1992 y concejal metropolitana de la misma ciudad durante tres periodos consecutivos, entre 2002 y 2014.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "251",
        "name": "Paola Vintimilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Paola_Vintimilla_5_DE_JUNIO_2018_%28sq_cropped%29.jpg/250px-Paola_Vintimilla_5_DE_JUNIO_2018_%28sq_cropped%29.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "Paola Vintimilla Moscoso ( Quito , 29 de agosto de 1971) es una política , comunicadora y ex modelo ecuatoriana . Fue Asambleísta Nacional por el Partido Social Cristiano . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "252",
        "name": "Cynthia Viteri",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cynthia_Viteri_en_2018_02_%28cropped%29.jpg/250px-Cynthia_Viteri_en_2018_02_%28cropped%29.jpg",
        "party": "Partido Social Cristiano Madera de Guerrero",
        "province": "",
        "currentPosition": "",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Cynthia Fernanda Viteri Jiménez ( Guayaquil , 19 de noviembre de 1965) es una abogada , periodista y política ecuatoriana . Fue alcaldesa de Guayaquil , desde el 14 de mayo de 2019 hasta el 14 de mayo de 2023. [ 7 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "253",
        "name": "Roberta Zambrano",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Roberta_Zambrano.jpg/250px-Roberta_Zambrano.jpg",
        "party": "Partido Social Cristiano",
        "province": "esmeraldas",
        "currentPosition": "",
        "experience": 29,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 54,
        "birthplace": "",
        "careerStart": "1996",
        "biography": "María Roberta Zambrano Ortiz ( Guayaquil , 14 de diciembre de 1971) [ 1 ] ​ es una abogada y política ecuatoriana. Ocupa el cargo de prefecta de Esmeraldas desde 2019 por el Partido Social Cristiano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "254",
        "name": "Silvia Buendía",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Silvia_Buend%C3%ADa_2013.jpg/250px-Silvia_Buend%C3%ADa_2013.jpg",
        "party": "Ruptura 25 (2004-2020) Movimiento Construye (desde 2020)",
        "province": "",
        "currentPosition": "",
        "experience": 33,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 58,
        "birthplace": "",
        "careerStart": "1992",
        "biography": "Silvia Elena Buendía Silva ( Guayaquil , 9 de octubre de 1967) [ 1 ] ​ es una abogada, conductora de televisión y activista ecuatoriana por los derechos de las mujeres y de las personas LGBTI. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "255",
        "name": "Iván Granda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Iv%C3%A1n_Granda_Molina.jpeg/250px-Iv%C3%A1n_Granda_Molina.jpeg",
        "party": "Ruptura 25 (2004-2011) Alianza PAÍS (2006-2015) Ruptura 25 (2015-2020) Movimiento Construye (desde 2020)",
        "province": "",
        "currentPosition": "",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Iván Xavier Granda Molina ( Cuenca, 14 de abril de 1978) es un abogado ecuatoriano. Desempeñó el cargo de Ministro de Inclusión Económica y Social de Ecuador desde octubre de 2019 hasta septiembre de 2020. [ 1 ] ​Actualmente se desempeña como Asesor del Secretario General de la OEA, Luis Almagro desde el 2 de febrero de 2021.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "256",
        "name": "Juan Sebastián Roldán",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Juan_sebastian_roldan.jpg/250px-Juan_sebastian_roldan.jpg",
        "party": "Ruptura 25 (2004-2020) Movimiento Construye (desde 2020)",
        "province": "",
        "currentPosition": "",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Juan Sebastián Roldán Proaño (26 de octubre de 1978) es un político ecuatoriano que ocupó los cargos de Ministro Secretario de Transparencia, Subsecretario de Coordinación Política, Subsecretario de Gobierno y Subsecretario de Seguridad. Desde marzo de 2018 formó parte del Gobierno del Presidente ecuatoriano, Lenin Moreno hasta febrero de 2021; en el cual fue Secretario General de Gabinete de la Presidencia y portavoz oficial.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "257",
        "name": "María Paula Romo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Entrevista_ministra_Romo_en_Ecuavisa_tratando_temas_de_inter%C3%A9s_nacional_%2840664180653%29.jpg/250px-Entrevista_ministra_Romo_en_Ecuavisa_tratando_temas_de_inter%C3%A9s_nacional_%2840664180653%29.jpg",
        "party": "Ruptura 25 (2004-2020) Movimiento Construye (desde 2020)",
        "province": "",
        "currentPosition": "",
        "experience": 21,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 46,
        "birthplace": "",
        "careerStart": "2004",
        "biography": "María Paula Romo Rodríguez ( Quito , 4 de junio de 1979) [ 1 ] ​ es una abogada y política ecuatoriana . Fue Ministra de Gobierno de Ecuador durante el gobierno de Lenín Moreno , desde el 8 de septiembre de 2018 hasta el 24 de noviembre de 2020. Durante la pandemia de COVID-19 presidió el Comité de Operaciones de Emergencia Nacional (COE-N); coordinando acciones y estrategias interinstitucionales para la atención de la emergencia sanitaria en Ecuador , función que ejerció junto con el de ministra hasta su destitución por supuesto uso de bombas lacrimógenas caducadas durante las manifestaciones de 2019 . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "258",
        "name": "Norman Wray",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Norman_Wray_%2810_de_noviembre_de_2008%29_%28cropped%29.jpg/250px-Norman_Wray_%2810_de_noviembre_de_2008%29_%28cropped%29.jpg",
        "party": "Ruptura 25 (2004-2020)",
        "province": "",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "Norman Stef Wray Reyes ( Quito , 20 de diciembre de 1969) es un abogado y político ecuatoriano . Fue docente de la carrera de jurisprudencia en la Universidad de las Américas . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "259",
        "name": "Ximena Bohórquez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ximena_Bohorquez_%2812_de_noviembre%29_%28cropped%29.jpg/250px-Ximena_Bohorquez_%2812_de_noviembre%29_%28cropped%29.jpg",
        "party": "Partido Sociedad Patriótica",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Ximena Bohórquez Romero ( Quito , 12 de noviembre de 1956), [ 1 ] ​ es una médica y política ecuatoriana , esposa de Lucio Gutiérrez Borbúa , y primera dama de Ecuador , cargo que ejerció entre el 15 de enero de 2003 y el 20 de abril de 2005. Fue además parlamentaria, representante de Pichincha en el Congreso Nacional del Ecuador durante el mismo período.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "260",
        "name": "Patricio Zuquilanda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PATRICIO_ZUQUILANDA_%28cropped%29.jpg/250px-PATRICIO_ZUQUILANDA_%28cropped%29.jpg",
        "party": "Partido Sociedad Patriótica 21 de Enero",
        "province": "",
        "currentPosition": "",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Patricio Zuquilanda Duque ( Guayaquil , 17 de diciembre de 1947) es un político y diplomático ecuatoriano, que se desempeñó como Ministro de Relaciones Exteriores de Ecuador entre 2003 y 2005.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "261",
        "name": "Vladimiro Álvarez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "Democracia Popular",
        "province": "",
        "currentPosition": "",
        "experience": 57,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 82,
        "birthplace": "",
        "careerStart": "1968",
        "biography": "Vladimiro Álvarez Grau ( Guayaquil , 4 de enero de 1943) [ 1 ] ​ es un abogado y político ecuatoriano . Ocupó el cargo de Ministro de Gobierno durante los mandatos de Osvaldo Hurtado y Jamil Mahuad . Otros puestos que desempeñó incluyen Diputado Nacional, Ministro de Trabajo y Ministro de Educación, además de ser rector de la Universidad Católica de Santiago de Guayaquil . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "262",
        "name": "Osvaldo Hurtado Larrea",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Osvaldo_hurtado_y_jose_valencia_%28cropped%29.jpg/250px-Osvaldo_hurtado_y_jose_valencia_%28cropped%29.jpg",
        "party": "Democracia Cristiana (1964-1977) Democracia Popular (1977-2001) Movimiento Patria Solidaria (2001-2003)",
        "province": "",
        "currentPosition": "",
        "experience": 61,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 86,
        "birthplace": "",
        "careerStart": "1964",
        "biography": "Luis Osvaldo Hurtado Larrea ( Chambo , 26 de junio de 1939) es un abogado y político ecuatoriano . Fue presidente del Ecuador entre el 24 de mayo de 1981 y el 10 de agosto de 1984.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "263",
        "name": "Jamil Mahuad",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mahuad_2020_1.1_%28cropped%29.jpg/250px-Mahuad_2020_1.1_%28cropped%29.jpg",
        "party": "Democracia Popular",
        "province": "loja",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Jorge Jamil Mahuad Witt ( Loja , 29 de julio de 1949) [ 1 ] ​ es un abogado , músico y ex político ecuatoriano . Fue presidente del Ecuador entre el 10 de agosto de 1998 y el 21 de enero de 2000, fecha en la que fue derrocado por el golpe de Estado de 2000 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "264",
        "name": "Alexandra Vela",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Entrevista_de_la_ministra_de_Gobierno%2C_Alexandra_Vela%2C_en_el_programa_Politicamente_Correcto._01.10.2021_%2851549481206%29_%28cropped%29.jpg/250px-Entrevista_de_la_ministra_de_Gobierno%2C_Alexandra_Vela%2C_en_el_programa_Politicamente_Correcto._01.10.2021_%2851549481206%29_%28cropped%29.jpg",
        "party": "Democracia Popular",
        "province": "",
        "currentPosition": "",
        "experience": 49,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 74,
        "birthplace": "",
        "careerStart": "1976",
        "biography": "Alexandra Blanca Vela Puga (n. San Salvador , 30 de noviembre de 1951) [ 1 ] ​ es una abogada y política ecuatoriana nacida en El Salvador . Fue Ministra de Gobierno durante la administración del presidente Guillermo Lasso , entre 2021 a 2022. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "265",
        "name": "Luzmila Abad",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Luzmila_Abad_SESI%C3%93N_NO._895_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_01_DE_FEBRERO_DE_2024_%2853502549331%29.jpg",
        "party": "Pachakutik",
        "province": "morona santiago",
        "currentPosition": "",
        "experience": 22,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "2003",
        "biography": "Luzmila Mercedes Abad Morocho ( Azogues , 4 de septiembre de 1978) es una activista y política ecuatoriana . Reconocida por su destacado papel en la red de mujeres amazónicas y su contribución fundacional al partido Movimiento Plurinacional Pachakutik . Actualmente, se desempeña como asambleísta por la provincia de Morona Santiago. [ 1 ] ​ [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "266",
        "name": "César Acosta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 66,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 91,
        "birthplace": "",
        "careerStart": "1959",
        "biography": "César Enrique Acosta Vásquez ( Portoviejo , Ecuador , 23 de abril de 1934) es un político y médico ecuatoriano , notable por haber sido el primer ministro de salud pública del país. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "267",
        "name": "Vicente Albornoz",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Vicente Albornoz Guarderas ( Quito , 1969) es un economista y periodista ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "268",
        "name": "María del Carmen Aquino",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_NO._766_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_12_DE_ABRIL_DE_2022._%2851999457807%29.jpg/250px-CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_NO._766_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_12_DE_ABRIL_DE_2022._%2851999457807%29.jpg",
        "party": "Revolución Ciudadana (desde 2021)",
        "province": "santa elena",
        "currentPosition": "Alcaldesa Del Cantón Santa Elena ",
        "experience": 12,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 37,
        "birthplace": "",
        "careerStart": "2013",
        "biography": "María del Carmen Aquino Merchán ( Santa Elena , 20 de enero de 1988) es una ingeniera y política ecuatoriana . [ 2 ] ​ Ha sido docente universitaria y asambleísta nacional, entre 2021 y 2022. Desde 2023 es la alcaldesa del Cantón Santa Elena , siendo la primera mujer en la historia de la ciudad en alcanzar dicho puesto. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "269",
        "name": "Enrique Ayala Mora",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Enrique_Ayala.jpg/250px-Enrique_Ayala.jpg",
        "party": "Partido Socialista Revolucionario (desde 1972, hasta años 1980) Partido Socialista Ecuatoriano (desde años 1980)",
        "province": "bolívar",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 75,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Manuel Enrique Alejandro Ayala Mora ( Ibarra , 13 de noviembre de 1950) es un historiador , político , editorialista y catedrático ecuatoriano , quien ha sido ideólogo del Partido Socialista Ecuatoriano , y fundador y exrector de la sede de Quito de la Universidad Andina Simón Bolívar . [ 1 ] ​ [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "270",
        "name": "Annabella Azín",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Anabella_Az%C3%ADn_CCII_ANIVERSARIO_DE_INDEPENDENCIA_DE_GUAYAQUIL._GUAYAQUIL%2C_09_DE_OCTUBRE_DE_2022_%2852416912200%29_%28cropped%29.jpg/250px-Anabella_Az%C3%ADn_CCII_ANIVERSARIO_DE_INDEPENDENCIA_DE_GUAYAQUIL._GUAYAQUIL%2C_09_DE_OCTUBRE_DE_2022_%2852416912200%29_%28cropped%29.jpg",
        "party": "Partido Renovador Institucional Acción Nacional (2002-2014) Acción Democrática Nacional (desde 2024)",
        "province": "",
        "currentPosition": "",
        "experience": 39,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 64,
        "birthplace": "",
        "careerStart": "1986",
        "biography": "Annabella Emma Azín Arce ( Guayaquil , 30 de mayo de 1961) [ 1 ] ​es una doctora en medicina y política ecuatoriana . Es la esposa del empresario Álvaro Noboa Pontón y madre del actual presidente del Ecuador, Daniel Noboa . Actualmente es asambleísta nacional. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "271",
        "name": "Rodolfo Baquerizo Nazur",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Rodolfo_Baquerizo_Nazur_%28cropped%29.jpg/250px-Rodolfo_Baquerizo_Nazur_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 65,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 90,
        "birthplace": "",
        "careerStart": "1960",
        "biography": "Rodolfo Luis Baquerizo Nazur ( Guayaquil , 1935 - ?) fue un político ecuatoriano , líder histórico del partido Concentración de Fuerzas Populares . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "272",
        "name": "Rodrigo Borja Cevallos",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/RodrigoBorja-Harvard2016.png/250px-RodrigoBorja-Harvard2016.png",
        "party": "Partido Liberal Radical Ecuatoriano (1962-1970) Izquierda Democrática (1970-2013)",
        "province": "",
        "currentPosition": "",
        "experience": 65,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 90,
        "birthplace": "",
        "careerStart": "1960",
        "biography": "Rodrigo Borja Cevallos ( Quito , 19 de junio de 1935) es un ex político , jurista y abogado ecuatoriano . Fue presidente del Ecuador entre el 10 de agosto de 1988 y el 10 de agosto de 1992.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "273",
        "name": "Javier Cadena",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Javier_Cadena_en_la_Asamblea_Nacional.jpg/250px-Javier_Cadena_en_la_Asamblea_Nacional.jpg",
        "party": "",
        "province": "",
        "currentPosition": "Asambleísta de Ecuador (2017-2021)",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Francisco Javier Cadena Huertas es un político ecuatoriano.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "274",
        "name": "Cecilia Calderón",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cecilia_Calder%C3%B3n.jpg/250px-Cecilia_Calder%C3%B3n.jpg",
        "party": "Frente Radical Alfarista (hasta 1996)",
        "province": "",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Cecilia Calderón Prieto ( Guayaquil , 5 de diciembre de 1949) es una economista y política ecuatoriana , diputada nacional en varios periodos legislativos y líder histórica del extinto partido Frente Radical Alfarista .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "275",
        "name": "Juan José Casilari y González",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Juan José Casilari y González ( Guayaquil , 1786 - Ibídem , 30 de octubre de 1842) fue un político ecuatoriano , prócer de las acciones libertarias del 9 de octubre de 1820 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "276",
        "name": "Luis Chiriboga Acosta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Luis_Chiriboga_Acosta.jpg/330px-Luis_Chiriboga_Acosta.jpg",
        "party": "",
        "province": "chimborazo",
        "currentPosition": "lavado de dinero",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "Luis Chiriboga Acosta ( Riobamba , Chimborazo , Ecuador , 6 de octubre de 1946) es un empresario e ingeniero ecuatoriano . Fue presidente de la Federación Ecuatoriana de Fútbol , cargo que ocupó por casi 18 años, hasta que se le encontró culpable de corrupción, en Estados Unidos y en Ecuador. Se halló involucrado en el Caso de corrupción de la FIFA de 2015 , y ha sido sentenciado por la justicia ecuatoriana. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "277",
        "name": "Mónica Chuji",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/M%C3%B3nica_Chuji_Gualinga.jpg/250px-M%C3%B3nica_Chuji_Gualinga.jpg",
        "party": "",
        "province": "pastaza",
        "currentPosition": "Diputado Nacional del Ecuador",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 52,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Mónica Patricia Chuji Gualinga (Comunidad Sarayaku , provincia de Pastaza , 30 de octubre de 1973) es una dirigente indígena ecuatoriana , defensora de los derechos humanos . [ 1 ] ​ [ 2 ] ​ Actualmente es candidata a la Asamblea Nacional por el movimiento Podemos . [ 3 ] ​ [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "278",
        "name": "Lourdes Cuesta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Lourdes_Cuesta.jpg/250px-Lourdes_Cuesta.jpg",
        "party": "Partido Social Cristiano (Independiente)",
        "province": "azuay",
        "currentPosition": "",
        "experience": 24,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 49,
        "birthplace": "",
        "careerStart": "2001",
        "biography": "María de Lourdes Cuesta Orellana ( Cuenca ) es una política ecuatoriana. Ha ejercido el cargo de Asambleísta por la Provincia del Azuay en la Asamblea Nacional , cargo para el cual se ha postulado a la reelección por el Partido Social Cristiano. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "279",
        "name": "Roberto Dunn Barreiro",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "Roberto Dunn Barreiro (5 de mayo de 1942, Guayaquil , Ecuador ) [ 1 ] ​ es un político y empresario ecuatoriano . Como parte del grupo Dunn, fue uno de los dueños de la extinta aerolínea Saeta , de la que además fue presidente ejecutivo. [ 2 ] ​ Fundó también varias empresas importadoras, licoreras y de venta de vehículos. [ 3 ] ​ Además, Fue uno de los fundadores de diario Expreso . [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "280",
        "name": "Gloria Gallardo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/COMIC_CON_%2843697240722%29_%28cropped%29.jpg/250px-COMIC_CON_%2843697240722%29_%28cropped%29.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "Director",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Gloria Ana Gallardo Zavala es una política ecuatoriana. Nació 3 de marzo de 1947",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "281",
        "name": "Esperanza Galván",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Asamble%C3%ADsta_Esperanza_Galv%C3%A1n_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288740510017%29.jpg/250px-Asamble%C3%ADsta_Esperanza_Galv%C3%A1n_en_la_Sesi%C3%B3n_Inaugural_de_la_Asamblea_Nacional_2013-2017_%288740510017%29.jpg",
        "party": "Alianza PAIS",
        "province": "esmeraldas",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "María Esperanza Galván Gracia es una abogada, socióloga y política de Ecuador . [ 1 ] ​ [ 2 ] ​ Fue asambleísta de la provincia de Esmeraldas por el movimiento oficialista Alianza PAIS , hasta su encarcelamiento en mayo de 2015.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "282",
        "name": "Susana González Muñoz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "María Susana González Muñoz ( Cuenca , 1946/1947) [ 1 ] ​ es una académica y política ecuatoriana , recordada como la primera mujer en ocupar la presidencia del Congreso Nacional de Ecuador .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "283",
        "name": "Humberto Guillem",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Asamble%C3%ADsta_Humberto_Guillem_%283078240178%29.jpg/250px-Asamble%C3%ADsta_Humberto_Guillem_%283078240178%29.jpg",
        "party": "",
        "province": "manabí",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "Humberto Manabí Guillem Murillo ( Portoviejo , 11 de agosto de 1942) es un médico y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "284",
        "name": "Tania Hermida",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Tania_Hermida_at_2012_MIFF.jpg/250px-Tania_Hermida_at_2012_MIFF.jpg",
        "party": "",
        "province": "",
        "currentPosition": "Asambleísta de Ecuador",
        "experience": 32,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 57,
        "birthplace": "",
        "careerStart": "1993",
        "biography": "Tania Hermida ( Cuenca , 1968) es una cineasta ecuatoriana. Ha dirigido, producido y escrito guiones para cortometrajes y largometrajes, entre los cuales se encuentran Qué tan lejos y En el nombre de la hija , con reconocimiento internacional. Colaboró para varias producciones con otros cineastas como Sebastián Cordero . También fue Asambleísta Constituyente del Ecuador entre 2007 y 2008.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "285",
        "name": "Silvana Ibarra",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "Partido Roldosista Ecuatoriano",
        "province": "",
        "currentPosition": "",
        "experience": 41,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 66,
        "birthplace": "",
        "careerStart": "1984",
        "biography": "Silvana Marjorie Ibarra Castillo ( Milagro , 17 de febrero de 1959) [ 2 ] ​ es una cantante y actriz ecuatoriana con más de tres décadas de carrera artística. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "286",
        "name": "Jimmy Jairala",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jimmy_Jairala_2022.jpg/250px-Jimmy_Jairala_2022.jpg",
        "party": "Partido Roldosista Ecuatoriano (2004-2007) Una Nueva Opción (2009) Centro Democrático (2012-2025)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Jimmy Jairala Vallazza [ 1 ] ​( Guayaquil , 26 de septiembre de 1957) [ 2 ] ​ es un periodista y político ecuatoriano . Se desempeñó como prefecto de la provincia del Guayas [ 3 ] ​ desde 2009 hasta el 19 de diciembre de 2018.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "287",
        "name": "Mauricio Larrea",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 45,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1980",
        "biography": "Mauricio Ernesto Larrea Andrade ( Quito , 6 de enero de 1955) es un ingeniero civil y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "288",
        "name": "Jorge Marún",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/J._Mar%C3%BAn_Rodr%C3%ADguez_%28cropped%29.jpg",
        "party": "Demócrata (1981-1987) Partido Roldosista Ecuatoriano (1987-2005)",
        "province": "",
        "currentPosition": "",
        "experience": 46,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 71,
        "birthplace": "",
        "careerStart": "1979",
        "biography": "Jorge Manuel Marún Rodríguez ( Guayaquil , 9 de marzo de 1954) es un ingeniero civil y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "289",
        "name": "Eduardo Maruri",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Embsc.jpg/330px-Embsc.jpg",
        "party": "Una Nueva Opción",
        "province": "",
        "currentPosition": "",
        "experience": 34,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 59,
        "birthplace": "",
        "careerStart": "1991",
        "biography": "Eduardo Maruri Miranda ( Guayaquil , Ecuador 6 de septiembre de 1966) es un empresario ecuatoriano , presidente y fundador de la agencia de publicidad Maruri Grey Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "290",
        "name": "René Maugé",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rene_mauge.jpg/250px-Rene_mauge.jpg",
        "party": "Partido Comunista (hasta 1997) Izquierda Democrática (1997-2008)",
        "province": "",
        "currentPosition": "",
        "experience": 62,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 87,
        "birthplace": "",
        "careerStart": "1963",
        "biography": "René Maugé Mosquera ( Quito , 16 de enero de 1938) es un abogado y político ecuatoriano que participó como candidato en las elecciones presidenciales de 1978 y de 1984 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "291",
        "name": "Heinz Moeller",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Retrato_heinz_moeller_%28cropped%29.jpg/250px-Retrato_heinz_moeller_%28cropped%29.jpg",
        "party": "Partido Social Cristiano (1990-2000)",
        "province": "",
        "currentPosition": "",
        "experience": 63,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 88,
        "birthplace": "",
        "careerStart": "1962",
        "biography": "Heinz Rodolfo Moeller Freile ( Guayaquil , 18 de noviembre de 1937) [ 1 ] ​ es un abogado y político ecuatoriano que ocupó los cargos de Canciller de la República , Ministro de Gobierno y presidente del Congreso Nacional .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "292",
        "name": "Oswaldo Molestina",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/SESI%C3%93N_DE_LA_COMISI%C3%93N_DE_R%C3%89GIMEN_ECON%C3%93MICO%2C_QUITO%2C_26_DE_NOVIEMBRE_2019.jpg/250px-SESI%C3%93N_DE_LA_COMISI%C3%93N_DE_R%C3%89GIMEN_ECON%C3%93MICO%2C_QUITO%2C_26_DE_NOVIEMBRE_2019.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 54,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 79,
        "birthplace": "",
        "careerStart": "1971",
        "biography": "Oswaldo Molestina Zavala ( Guayaquil , 3 de noviembre de 1946) es un abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "293",
        "name": "Johanna Moreira",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Jnmc.jpg/250px-Jnmc.jpg",
        "party": "Izquierda Democrática",
        "province": "",
        "currentPosition": "",
        "experience": 5,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 30,
        "birthplace": "",
        "careerStart": "2020",
        "biography": "Johanna Nicole Moreira Córdova es una política y abogada ecuatoriana. Actualmente ocupa el cargo de Cuarta vocal del Consejo de Administración Legislativa [ 1 ] ​ y es integrante de la Comisión Permanente de Justicia y Estructura del Estado [ 2 ] ​ desde el 15 de mayo de 2021. Inició su carrera política en las Elecciones Generales 2021-2025 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "294",
        "name": "Antonio Noboa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Antonio_Noboa.jpg/250px-Antonio_Noboa.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 31,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1994",
        "biography": "León Antonio Noboa Ycaza ( Guayaquil , 6 de noviembre de 1969) es un empresario ecuatoriano . Más conocido como el Toño , fue Presidente del Barcelona Sporting Club . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "295",
        "name": "Federico Pérez Intriago",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 42,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 67,
        "birthplace": "",
        "careerStart": "1983",
        "biography": "José Federico Pérez Intriago ( Quito , 17 de octubre de 1947) [ 2 ] ​ es un político ecuatoriano , prefecto de la provincia de Pichincha entre 1992 y 1996. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "296",
        "name": "Juan José Pons",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Juan_jose_pons_2022_%28cropped%29.jpg/250px-Juan_jose_pons_2022_%28cropped%29.jpg",
        "party": "Democracia Popular",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Juan José Pons Arízaga es un político ecuatoriano que ocupó la presidencia del Congreso Nacional durante la crisis financiera de 1999 .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "297",
        "name": "Antonio Rodríguez Vicens",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "pichincha",
        "currentPosition": "",
        "experience": 55,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 80,
        "birthplace": "",
        "careerStart": "1970",
        "biography": "Antonio Rodríguez Vicens ( Quito , 23 de octubre de 1945) es un abogado y político ecuatoriano que ocupó en tres ocasiones el cargo de diputado en representación de Pichincha .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "298",
        "name": "León Roldós Aguilera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Leon_Roldos_%28cropped%29.jpg/250px-Leon_Roldos_%28cropped%29.jpg",
        "party": "Concentración de Fuerzas Populares (hasta 1979) Demócrata (1981-1984) Pueblo, Cambio y Democracia (1984-1988) Partido Socialista Ecuatoriano (desde 1987, hasta años 1990) Red Ética y Democracia (2005-2013)",
        "province": "",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "León Roldós Aguilera ( Guayaquil ; 21 de julio de 1942) [ 1 ] ​ es un abogado y político ecuatoriano que ejerció como Vicepresidente del Ecuador entre el 2 de junio de 1981 y el 10 de agosto de 1984.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "299",
        "name": "Martha Roldós",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Martha_Roldos_%2812_de_noviembre_de_2008%29.jpg/250px-Martha_Roldos_%2812_de_noviembre_de_2008%29.jpg",
        "party": "Red Ética y Democracia",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Martha Rina Victoria Roldós Bucaram ( Guayaquil , Ecuador ; 1963) es una economista , profesora y política ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "300",
        "name": "Fernando Rosero",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Fernando Rosero González ( Guayaquil , 28 de enero de 1949) [ 1 ] ​ es un abogado y político ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "301",
        "name": "Milton Salgado",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_Ecuador_original_version.svg/40px-Coat_of_arms_of_Ecuador_original_version.svg.png",
        "party": "",
        "province": "tungurahua",
        "currentPosition": "",
        "experience": 62,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 87,
        "birthplace": "",
        "careerStart": "1963",
        "biography": "Milton Salgado Carrillo ( Ambato , 15 de septiembre de 1938) es un político ecuatoriano. Fue prefecto de Tungurahua , entre 1978 a 1983, y diputado nacional en dos ocasiones no consecutivas.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "302",
        "name": "Sylka Sánchez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sylka_Sanchez_Campos.jpg/250px-Sylka_Sanchez_Campos.jpg",
        "party": "Partido Renovador Institucional Acción Nacional (hasta 2014) Partido Adelante Ecuatoriano Adelante (hasta 2021)",
        "province": "",
        "currentPosition": "",
        "experience": 30,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 55,
        "birthplace": "",
        "careerStart": "1995",
        "biography": "Sylka Estefanía Sánchez Campos ( Guayaquil , 19 de julio de 1970) es una abogada y política ecuatoriana , [ 2 ] ​ [ 3 ] ​ que se ha desempeñado como diputada por el Partido Renovador Institucional Acción Nacional y empresaria en el sector privado. [ 4 ] ​ En 2017 fue candidata a la Asamblea Nacional por el partido político Partido Adelante Ecuatoriano Adelante de Álvaro Noboa . [ 5 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "303",
        "name": "Roque Sevilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Comisi%C3%B3n_de_Biodiversidad_recibe_a_Roque_Sevilla_%284480215156%29.jpg/250px-Comisi%C3%B3n_de_Biodiversidad_recibe_a_Roque_Sevilla_%284480215156%29.jpg",
        "party": "Democracia Popular",
        "province": "",
        "currentPosition": "",
        "experience": 53,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 78,
        "birthplace": "",
        "careerStart": "1972",
        "biography": "Roque Simón Sevilla Larrea ( Quito , 16 de julio de 1947) es un economista , empresario , ambientalista y político ecuatoriano , es Presidente del \"Grupo Futuro\" que aglutina a varias empresas que van desde Turismo, Seguros, etc. Fue concejal de Quito y entre 1998 y 2000, Alcalde Metropolitano de Quito .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "304",
        "name": "Fanny Uribe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Asamble%C3%ADsta%2C_Fanny_Uribe%2C_en_rueda_de_prensa_%289264595010%29.jpg/250px-Asamble%C3%ADsta%2C_Fanny_Uribe%2C_en_rueda_de_prensa_%289264595010%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 62,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Fanny Esther Uribe López es una bióloga y política ecuatoriana . Es la alcaldesa del cantón Santa Cruz , desde el 14 de mayo de 2023, siendo la primera mujer en la historia del cantón en alcanzar dicho puesto.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "305",
        "name": "Andrés Vallejo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Andres_Vallejo_Arcos.jpg/250px-Andres_Vallejo_Arcos.jpg",
        "party": "Izquierda Democrática",
        "province": "",
        "currentPosition": "",
        "experience": 58,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 83,
        "birthplace": "",
        "careerStart": "1967",
        "biography": "Andrés Vallejo Arcos ( Quito , 4 de septiembre de 1942) es un político , diplomático y empresario ecuatoriano , miembro del partido Izquierda Democrática . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "306",
        "name": "Clemente Vásquez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "manabí",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Carlos Raúl Clemente Vásquez González es un político ecuatoriano, quien fue prefecto de Manabí.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "307",
        "name": "Hólger Velasteguí",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "Partido Social Cristiano",
        "province": "santo domingo de los tsáchilas",
        "currentPosition": "",
        "experience": 66,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 91,
        "birthplace": "",
        "careerStart": "1959",
        "biography": "Hólger Augusto Velasteguí Domínguez ( Ambato , 30 de diciembre de 1934) es un radiodifusor y político ecuatoriano que ejerció la alcaldía de Santo Domingo de los Colorados entre 1996 y 2000.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "308",
        "name": "César Verduga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 56,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 81,
        "birthplace": "",
        "careerStart": "1969",
        "biography": "César Verduga Vélez ( Portoviejo , 26 de junio de 1944) [ 1 ] ​ es un economista y político ecuatoriano que ocupó en dos ocasiones el puesto de Ministro de Gobierno .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "309",
        "name": "Wilma Andrade",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_DEL_PLENO_776_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_JULIO_DE_2022_%2852227677366%29.jpg/250px-CONTINUACI%C3%93N_DE_LA_SESI%C3%93N_DEL_PLENO_776_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_JULIO_DE_2022_%2852227677366%29.jpg",
        "party": "Izquierda Democrática",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Wilma Piedad Andrade Muñoz ( Quito , 26 de agosto de 1956) es una política ecuatoriana . Fue asambleísta nacional , por el partido Izquierda Democrática ; que presidió entre 2015 y 2020. [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "310",
        "name": "Línea de sucesión presidencial de Ecuador",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "La línea de sucesión presidencial de la República del Ecuador define quién podría llegar a convertirse en el presidente del Ecuador en caso de que quien esté al mando no pueda concluir sus funciones dentro del período establecido. Las causas por la cual la Presidencia pueda cambiar de titular de forma definitiva pueden ser por incapacidad física, incapacidad mental, renuncia, abandono del cargo, revocatoria del mandato, muerte o destitución de su cargo por la Asamblea Nacional . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "311",
        "name": "Presidente del Ecuador",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/National_Standard_of_Ecuador.svg/120px-National_Standard_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "El o la presidente de Ecuador , también denominado presidente constitucional de la República del Ecuador , es el jefe de Estado y gobierno del país sudamericano, ejerciendo la Función Ejecutiva . Es asistido por un vicepresidente y un equipo de colaboradores agrupados en el Gabinete de Ministros, a su vez es el comandante supremo de las Fuerzas Armadas. Su lema es «Mi Poder en la Constitución», frase que aparece desde 1830 en la Banda Presidencial.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "312",
        "name": "Anexo:Presidentes del Ecuador",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "En la siguiente lista se encuentran los jefes de Estado y las juntas de gobierno de la República del Ecuador en orden cronológico desde la fundación e independencia del país que han ejercido de forma plena el gobierno del país. No existe una numeración oficial de los jefes de Estado de Ecuador hasta la presente fecha.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "313",
        "name": "Junta Militar (Ecuador, 1963)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/60px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "La Junta Militar fue el gobierno de facto que gobernó Ecuador entre 1963 y 1966. Sus integrantes fueron: contralmirante Ramón Castro Jijón , general Marcos Gándara Enríquez , general Luis Cabrera Sevilla y coronel Guillermo Freile Posso .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "314",
        "name": "Rosalía Arteaga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Conversatorio_Mujeres_en_Negociaciones_Internacionales_%2846589651644%29_%28cropped%29.jpg/250px-Conversatorio_Mujeres_en_Negociaciones_Internacionales_%2846589651644%29_%28cropped%29.jpg",
        "party": "Partido Social Cristiano (1981-1991) Partido Unidad Republicana (1991-1993) Movimiento MIRA (1996-2000)",
        "province": "",
        "currentPosition": "",
        "experience": 44,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 69,
        "birthplace": "",
        "careerStart": "1981",
        "biography": "Lupe Rosalía Arteaga Serrano ( Cuenca , 5 de diciembre de 1956) es una abogada, activista social, escritora y ex política ecuatoriana . Fue presidenta del Ecuador entre el 9 y el 11 de febrero de 1997. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "315",
        "name": "Elecciones presidenciales de Ecuador de 1947",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Elección vicepresidencial extraordinaria, la cual se realizó durante un Congreso Extraordinario al restablecerse el régimen constitucional luego del Golpe de Estado a José María Velasco Ibarra para escoger al vicepresidente de Mariano Suárez Veintimilla , el cual asumiría la presidencia inmediatamente luego de su posesión al haber presentado su renuncia irrevocable Suárez Veintimilla.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "316",
        "name": "Luis Leoro Franco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Ecuador.svg/40px-Coat_of_arms_of_Ecuador.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 66,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 91,
        "birthplace": "",
        "careerStart": "1959",
        "biography": "Luis Leoro Franco ( Ibarra , 11 de enero de 1934) es un teniente general de la Fuerza Aérea Ecuatoriana que fue miembro del triunvirato militar, llamado \" Consejo Supremo de Gobierno \" de Ecuador, que entre 1976 y 1979, ejerció de facto, los poderes del Estado. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "317",
        "name": "Guillermo Rodríguez Lara",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Guillermo_Rodriguez_%28Ecuador%29.jpg/250px-Guillermo_Rodriguez_%28Ecuador%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 77,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 102,
        "birthplace": "",
        "careerStart": "1948",
        "biography": "Guillermo Antonio Rodríguez Lara ( Pujilí , 4 de noviembre de 1923) [ 1 ] ​ [ 2 ] ​es un exdictador , militar, político y agricultor ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "318",
        "name": "Alcalde (Ecuador)",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "El Alcalde Cantonal es el cargo político que se encarga del gobierno en los cantones y ciudades que conforman el Ecuador. Los cantones, 221 distribuidos en las 24 provincias del país, son la segunda subdivisión del Ecuador. Estos son elegido por votación popular y lideran los llamados gobiernos autónomos descentralizados cantonales que actúan de forma independiente al gobierno central. Todas están bajo el mando de un alcalde.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "319",
        "name": "José Arroyo Cabrera",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 19,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 44,
        "birthplace": "",
        "careerStart": "2006",
        "biography": "José Alcides Arroyo Cabrera ( Pujilí , 12 de enero de 1981) es un diseñador , político y activista LGBT ecuatoriano . Es el alcalde de Pujilí , desde el 14 de mayo de 2023; [ 1 ] ​ convirtiéndose en la primera persona abiertamente LGBT en ser elegida a una alcaldía en la historia del Ecuador. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "320",
        "name": "Patricio Urrutia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Patricio_Urrutia_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "centrocampista",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Patricio Javier Urrutia Espinoza ( Ventanas , 15 de octubre de 1977) es un exfutbolista y entrenador ecuatoriano . Entre sus principales atributos, destacaban la pegada de media distancia, el gran sentido de ubicación y su constante llegada al arco rival. Actualmente dirige al Delfín de la Serie A de Ecuador .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "321",
        "name": "José Yúnez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/20px-Flag_of_Ecuador.svg.png",
        "party": "Partido Social Cristiano Madera de Guerrero",
        "province": "guayas",
        "currentPosition": "",
        "experience": 41,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 66,
        "birthplace": "",
        "careerStart": "1984",
        "biography": "José Miguel Yúnez Parra ( Guayaquil , 8 de enero de 1959) fue el primer alcalde del Cantón Samborondón desde 1996 hasta 2019. Ha sido alcalde durante cinco ocasiones. [ 1 ] ​ siendo electo en las votaciones de 1996, 2000, 2004, 2009 y 2014, [ 2 ] ​ Se desempeñaba como Viceprefecto de la Provincia del Guayas , durante el mandato de Susana González Rosado . [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "322",
        "name": "Andrea Arrobo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Minister_of_Energy_Andrea_Arrobo_%28cropped%29.jpg/250px-Minister_of_Energy_Andrea_Arrobo_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 11,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 36,
        "birthplace": "",
        "careerStart": "2014",
        "biography": "Andrea Arrobo Peña es una internacionalista ecuatoriana, quien fue ministra de Energía y Minas en el gobierno de Daniel Noboa entre 2023 y 2024 y viceministra de Gobernabilidad durante el gobierno de Guillermo Lasso .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "323",
        "name": "Pablo Campana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Opening_plenary_session%2C_11_December_2017_%2824152790667%29_%28cropped%29.jpg/250px-Opening_plenary_session%2C_11_December_2017_%2824152790667%29_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Pablo Campana Sáenz ( Quito , 16 de diciembre de 1972) es un empresario y extenista ecuatoriano . Fue ministro de Comercio Exterior e Inversiones . [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "324",
        "name": "Nathalie Cely",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Nathalie_Cely_1_%28cropped%29.jpg/250px-Nathalie_Cely_1_%28cropped%29.jpg",
        "party": "Alianza PAÍS",
        "province": "",
        "currentPosition": "",
        "experience": 35,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 60,
        "birthplace": "",
        "careerStart": "1990",
        "biography": "Saskia Nathalie Cely Suárez ( Portoviejo , 28 de diciembre de 1965) es una economista y política ecuatoriana . Se desempeñó como embajadora de Ecuador en Estados Unidos . [ 5 ] ​ [ 6 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "325",
        "name": "Pilar Cornejo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Maria_del_Pilar_Cornejo.jpg/250px-Maria_del_Pilar_Cornejo.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "María del Pilar Cornejo Rodríguez [ 1 ] ​ ( Guayaquil , 1961) es una científica ecuatoriana , académica universitaria por más de 34 años en la Escuela Superior Politécnica del Litoral (ESPOL). En el 2015 se convirtió en la primera Secretaria Nacional de Gestión de Riesgos de Ecuador, [ 2 ] ​ ex decana de la Facultad de Ingeniería Marítima y Ciencias del Mar durante 2017-2021 y actual directora del Centro Internacional del Pacífico para la Reducción del Riesgo de Desastres desde 2017.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "326",
        "name": "Danilo Carrera Drouet",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Danilo_Carrera.jpg/250px-Danilo_Carrera.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 62,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 87,
        "birthplace": "",
        "careerStart": "1963",
        "biography": "Danilo Carrera Drouet ( Guayaquil , Ecuador , 13 de octubre de 1938) es un empresario , y dirigente deportivo ecuatoriano ampliamente conocido por ser presidente del Comité Olímpico Ecuatoriano de mayor duración en la historia (1997-2013) y 3 veces presidente de la Federación Ecuatoriana de Tenis . Se graduó de economista en la Universidad de Guayaquil y tiene un postgrado en administración de empresas de la Universidad de Houston , Texas, en Estados Unidos. Fue tesorero de la Confederación Sudamericana de Tenis (1968-1979), presidente del Comité Organizador de los Juegos Deportivos Sudamericanos de Cuenca (1986) y secretario ejecutivo de Odesur (1989-1996).",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "327",
        "name": "Juan Fernando Velasco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ECUADOR_AQUI_ESTOY_%2826977821375%29.jpg/330px-ECUADOR_AQUI_ESTOY_%2826977821375%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "Ministro de Cultura y Patrimonio de Ecuador (2019-2020)",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Juan Fernando Velasco Torres ( Quito , 17 de enero de 1972) es un músico , compositor , cantante , productor y ex político ecuatoriano . Ganador de un Emmy y dos veces nominado a los Latin Grammys . Fue ministro de Cultura y Patrimonio del Ecuador en el gobierno de Lenín Moreno . [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "328",
        "name": "Luzmila Abad",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Luzmila_Abad_SESI%C3%93N_NO._895_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_01_DE_FEBRERO_DE_2024_%2853502549331%29.jpg",
        "party": "Pachakutik",
        "province": "morona santiago",
        "currentPosition": "",
        "experience": 27,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 47,
        "birthplace": "",
        "careerStart": "1998",
        "biography": "Luzmila Mercedes Abad Morocho ( Azogues , 4 de septiembre de 1978) es una activista y política ecuatoriana . Reconocida por su destacado papel en la red de mujeres amazónicas y su contribución fundacional al partido Movimiento Plurinacional Pachakutik . Actualmente, se desempeña como asambleísta por la provincia de Morona Santiago. [ 1 ] ​ [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "329",
        "name": "Pamela Aguirre",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pamela_Aguirre_2022.jpg/250px-Pamela_Aguirre_2022.jpg",
        "party": "Alianza PAÍS (hasta 2018) Revolución Ciudadana (desde 2018)",
        "province": "",
        "currentPosition": "",
        "experience": 21,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 41,
        "birthplace": "",
        "careerStart": "2004",
        "biography": "Pamela Alejandra Aguirre Zambonino ( Quito , 22 de diciembre de 1984) es una abogada y política ecuatoriana. Fue asambleísta nacional, entre 2021 y 2023.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "330",
        "name": "Diana Coloma",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Diana_Coloma_en_2019.jpg/250px-Diana_Coloma_en_2019.jpg",
        "party": "",
        "province": "santo domingo de los tsáchilas",
        "currentPosition": "",
        "experience": 12,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 32,
        "birthplace": "",
        "careerStart": "2013",
        "biography": "Diana Coloma ( Santo Domingo , Ecuador , 1993) es una política ecuatoriana, conocida por ser la primera concejala con discapacidad visual del Ecuador. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "331",
        "name": "Rafael Cuesta",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rafael_Cuesta_Caputi.jpg/250px-Rafael_Cuesta_Caputi.jpg",
        "party": "Partido Social Cristiano",
        "province": "",
        "currentPosition": "",
        "experience": 48,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 68,
        "birthplace": "",
        "careerStart": "1977",
        "biography": "Rafael Ignacio Cuesta Caputi ( Guayaquil , Ecuador , 13 de diciembre de 1957) es un periodista , radiodifusor y escritor ecuatoriano . [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ Se ha desempeñado como reportero, director, vicepresidente de noticias y gerente en varios canales de televisión. También ha sido diplomático y político . [ 4 ] ​ [ 5 ] ​ Su primera novela publicada es Preguntas Venenosas. [ 3 ] ​ [ 6 ] ​ [ 7 ] ​ En 2023 creó su propio canal de televisión digital 24/7.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "332",
        "name": "Fabiola Cuvi Ortiz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Fabiola Cuvi Ortiz es una economista ecuatoriana, conocida por ser la ideóloga y fundadora del Seguro Social Campesino [ 1 ] ​ en 1969.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "333",
        "name": "Margoth Escobar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 51,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 71,
        "birthplace": "",
        "careerStart": "1974",
        "biography": "Mercedes Margoth Escobar Villarroel [ 1 ] ​ ( Puyo , 1954) es una activista ecuatoriana por los derechos ambientales e indígenas. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "334",
        "name": "Pablo Fajardo Mendoza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "loja",
        "currentPosition": "",
        "experience": 33,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 53,
        "birthplace": "Nueva Loja",
        "careerStart": "1992",
        "biography": "Pablo Estenio Fajardo Mendoza es un activista y abogado ecuatoriano .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "335",
        "name": "Andrea Fiallos",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Andrea Fiallos Díaz [ 1 ] ​ fundadora y presidenta de Fundación la Iguana, [ 2 ] ​ nació en la ciudad de Guayaquil y desde el 2011 se ha dedicado a liderar y ejecutar proyectos de paisajismo nativo en las ciudades del Ecuador para la conservación de la biodiversidad de los ecosistemas característicos de cada región y para contribuir en la adaptación de las ciudades a los efectos del cambio climático .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "336",
        "name": "Nema Grefa",
        "image": "",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Nema Grefa (Ecuador) es una defensora ambiental ecuatoriana, desde 2018 fue reconocida como la presidenta de la nación indígena Sápara gracias a una acción de protección propuesta por Defensoría del Pueblo. [ 1 ] ​ [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "337",
        "name": "Cristina Gualinga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Cristina Gualinga (1939/1940) [ 1 ] ​ es una ambientalista ecuatoriana y activista de los pueblos indígenas conocida por su oposición al desarrollo petrolero. Fue la líder de la organización activista Pacha Mama. [ 2 ] ​ Es abuela de Nina y Helena Gualinga y madre de Noemí Gualinga , formando parte de una tradición familiar de activismo ambiental y de derechos indígenas. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "338",
        "name": "Helena Gualinga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Helena_Gualinga%2C_2024_%28cropped%29.jpg/250px-Helena_Gualinga%2C_2024_%28cropped%29.jpg",
        "party": "",
        "province": "pastaza",
        "currentPosition": "",
        "experience": 3,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 23,
        "birthplace": "",
        "careerStart": "2022",
        "biography": "Sumak Helena Sirén Gualinga (territorio Sarayaku, provincia de Pastaza, 27 de febrero de 2002) es una activista ecuatoriana de ascendencia sueco-finlandesa, perteneciente a la comunidad Quichua Sarayaku que ha participado en cumbres internacionales sobre el medio ambiente. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "339",
        "name": "Nina Gualinga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Nina_Gualinga_Portrait.jpg/250px-Nina_Gualinga_Portrait.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 12,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 32,
        "birthplace": "",
        "careerStart": "2013",
        "biography": "Nina Siren Gualinga (Sarayacu, junio de 1993) es una activista ecuatoriana de ascendencia sueco-finlandesa. [ 1 ] ​ [ 2 ] ​ Es la ganadora del Premio juvenil de WWF Internacional de Fondo Mundial para la Naturaleza (WWF, siglas en inglés para World Wildlife Fund), otorgado por el presidente de WWF Internacional. [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "340",
        "name": "Noemí Gualinga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Noemí Gualinga , conocida como \"madre de la selva\", es una líder comunitaria y activista de los Sarayaku , un grupo indígena kichwa de la Amazonía ecuatoriana [ 1 ] ​ que cuenta aproximadamente con 1 200 personas. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "341",
        "name": "Patricia Gualinga",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patricia_Gualinga_%28cropped%29.jpg/250px-Patricia_Gualinga_%28cropped%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 36,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 56,
        "birthplace": "",
        "careerStart": "1989",
        "biography": "Patricia Gualinga Montalvo es una defensora de los derechos humanos y de los derechos de los indígenas integrantes de la etnia kichwa de Sarayaku , un territorio en la Región Amazónica del Ecuador . [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "342",
        "name": "Geraldina Guerra Garcés",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SESI%C3%93N_913_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_MARZO_DE_2024_%2853598076638%29.jpg/250px-SESI%C3%93N_913_DEL_PLENO_DE_LA_ASAMBLEA_NACIONAL._ECUADOR%2C_19_DE_MARZO_DE_2024_%2853598076638%29.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 30,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 50,
        "birthplace": "Mindo",
        "careerStart": "1995",
        "biography": "Geraldina Guerra Garcés (1975-) es una experta en la sociedad civil ecuatoriana y una activista por los derechos de las mujeres. Tras casi dos décadas de dedicación, hoy es la presidenta de la Asociación Latinoamericana de Desarrollo Alternativo ( ALDEA ) y la coordinadora de la Red Nacional de Casas de Acogida para Mujeres, enfocada en mejorar la equidad racial, social y de género. En 2022, la BBC la reconoció entre las 100 mujeres más influyentes e inspiradoras del mundo. [ 1 ] ​ [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "343",
        "name": "Leonidas Iza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Leonidas_Iza.jpg/250px-Leonidas_Iza.jpg",
        "party": "Pachakutik",
        "province": "cotopaxi",
        "currentPosition": "",
        "experience": 23,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 43,
        "birthplace": "",
        "careerStart": "2002",
        "biography": "Segundo Leonidas Iza Salazar (18 de junio de 1982) [ 2 ] ​ es un dirigente indígena e ingeniero ambiental ecuatoriano , miembro del pueblo quichua -panzaleo. Desde su juventud, su carrera política dentro del movimiento indígena ha ido en ascenso, llegando a ser presidente del Movimiento Indígena y Campesino de Cotopaxi, en 2016. Ocupando este cargo, fue uno del los protagonistas de las manifestaciones de octubre de 2019 , protagonizadas por la Confederación de Nacionalidades Indígena (Conaie), contra el gobierno de Lenín Moreno . [ 3 ] ​ [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "344",
        "name": "Cristina Jiménez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cristina_Jim%C3%A9nez_Moreta_in_%22National_Run_for_Office_Day_2018%22_video_%281%29.png/250px-Cristina_Jim%C3%A9nez_Moreta_in_%22National_Run_for_Office_Day_2018%22_video_%281%29.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 21,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 41,
        "birthplace": "",
        "careerStart": "2004",
        "biography": "Cristina Jiménez Moreta ( Ecuador , 1984) es una activista por los derechos de los migrantes en Estados Unidos, de origen ecuatoriano. En 2018 fue reconocida como una de las 100 personas más influyentes según la Revista Time. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "345",
        "name": "Henry Layana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Henry_Layana.jpg/250px-Henry_Layana.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 56,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 76,
        "birthplace": "",
        "careerStart": "1969",
        "biography": "Henry Vicente Oswaldo Layana Franco ( Marcelino Maridueña , 1949 o 1950) [ 1 ] ​ es un actor , director de teatro y activista cultural ecuatoriano . [ 2 ] ​ [ 3 ] ​ [ 4 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "346",
        "name": "Humberto Mata Espinel",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "Concentración de Fuerzas Populares (1994-1997) Fuerza Ecuador (1997-2007)",
        "province": "",
        "currentPosition": "",
        "experience": 37,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 57,
        "birthplace": "",
        "careerStart": "1988",
        "biography": "Humberto Mata Espinel ( Guayaquil , 1967/1968) [ 1 ] ​ es un activista y expolítico ecuatoriano. Actualmente es gerente de la Fundación VIHDA , organización que se centra en el trabajo a favor de mujeres y niños con VIH . [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "347",
        "name": "Sylvia R. Mata",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sylvia_Mata_foto.jpg/250px-Sylvia_Mata_foto.jpg",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "Nueva York",
        "careerStart": "",
        "biography": "Sylvia R. Mata es una defensora social, líder comunitaria, economista y editora de columna ecuatoriana. Es la presidenta del Consejo de Arte y Educación de Queens de la Liga de Ciudadanos Latinoamericanos Unidos (LULAC) y vicepresidenta de NYS LULAC para mujeres. [ 1 ] ​ También es la fundadora y vicepresidenta de ArteLatAm; una organización artística con sede en Queens, Nueva York .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "348",
        "name": "Boloh Miranda",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Boloh_Miranda.jpg",
        "party": "",
        "province": "bolívar",
        "currentPosition": "",
        "experience": 19,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 39,
        "birthplace": "",
        "careerStart": "2006",
        "biography": "Daniel Bolívar Miranda Izquierdo ( Quito , Ecuador , 11 de noviembre de 1986), conocido como Boloh Miranda , es un cineasta, videoartista y activista ecuatoriano. [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ Es reconocido por su trabajo en la Amazonía ecuatoriana , donde aborda temas de justicia social y climática a través de su producción audiovisual. [ 4 ] ​ [ 5 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "349",
        "name": "Alexandra Narváez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Alexandra Narváez Trujillo es una científica ecuatoriana que se ha destacado en su campo debido a la profundidad de estudios realizados y a ciertos artículos académicos publicados. Graduada en la Pontificia Universidad Católica del Ecuador y con posgrados obtenidos en Estados Unidos y Francia , especializada en Biología Molecular Vegetal. Actualmente ejerce en varias actividades, se desempeña como sub-decana de la Facultad de Ciencias Exactas y Naturales de la Pontificia Universidad Católica del Ecuador. [ 1 ] ​ Es investigadora principal en el Centro de Investigación para la Salud en América Latina (CIseAL) y es profesora de la Escuela de Ciencias Biológicas en la Pontificia Universidad Católica del Ecuador. [ 2 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "350",
        "name": "Nemonte Nenquimo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "pastaza",
        "currentPosition": "",
        "experience": 20,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 40,
        "birthplace": "",
        "careerStart": "2005",
        "biography": "Nemonte Nenquimo ( provincia de Pastaza , 1985) es una activista indígena y miembro de la nación Huaorani de la región amazónica de Ecuador . Es la primera mujer presidenta de los Huaorani de Pastaza, gobernado por el Consejo de Coordinación de la Nacionalidad Huaorani de Ecuador-Pastaza (CONCONAWEP), y cofundadora de la organización sin fines de lucro dirigida por indígenas Alianza Ceibo. [ 1 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "351",
        "name": "Humberto Piaguaje",
        "image": "",
        "party": "",
        "province": "sucumbíos",
        "currentPosition": "",
        "experience": 0,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 0,
        "birthplace": "",
        "careerStart": "",
        "biography": "Humberto Javier Piaguaje Lucitante es un dirigente indígena secoya , nacido en Limoncocha ( Sushufindi -Sucumbíos-Ecuador) el 30 de septiembre de 1964.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "352",
        "name": "Manuela Picq",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/20px-Blue_pencil.svg.png",
        "party": "",
        "province": "",
        "currentPosition": "",
        "experience": 28,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 48,
        "birthplace": "",
        "careerStart": "1997",
        "biography": "Manuela Lavinas Picq ( Francia , 1977) es una profesora , periodista y activista política franco - brasileña con nacionalidad ecuatoriana .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "353",
        "name": "Jaime Vargas Vargas",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/JaimeVargas.jpg/250px-JaimeVargas.jpg",
        "party": "Pachakutik (hasta 2021)",
        "province": "",
        "currentPosition": "",
        "experience": 26,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 46,
        "birthplace": "",
        "careerStart": "1999",
        "biography": "Jaime Froilán Vargas Vargas (21 de julio de 1979) es un líder indígena achuar que fue presidente de la Confederación de Nacionalidades Indígenas del Ecuador (CONAIE), habiendo sido electo para el periodo 2017-2020. [ 2 ] ​ [ 3 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "354",
        "name": "Carlos Vera (periodista)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ENTREVISTA_AL_PRESIDENTE_GUILLERMO_LASSO_EN_EL_PROGRAMA_VERA_A_SU_MANERA._QUITO%2C_24_DE_FEBRERO_DE_2022.jpg/250px-ENTREVISTA_AL_PRESIDENTE_GUILLERMO_LASSO_EN_EL_PROGRAMA_VERA_A_SU_MANERA._QUITO%2C_24_DE_FEBRERO_DE_2022.jpg",
        "party": "Madera de Guerrero (desde 2009)",
        "province": "manabí",
        "currentPosition": "",
        "experience": 50,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 70,
        "birthplace": "",
        "careerStart": "1975",
        "biography": "Carlos Edmundo Juan de Dios Vera Rodríguez ( Bahía de Caráquez , Manabí , 8 de marzo de 1955) es un periodista y político ecuatoriano . Practicó el periodismo de investigación y fue entrevistador durante 30 años. Desde el 2009 incursionó en la política ecuatoriana como parte del Movimiento Cívico Madera de Guerrero , [ 1 ] ​ [ 2 ] ​ [ 3 ] ​ y luego postulándose como asambleísta nacional por la alianza del movimiento en conjunto con el PSC , sin obtener un curul. [ 4 ] ​ [ 5 ] ​",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "355",
        "name": "Luis Yanza",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/20px-Flag_of_Ecuador.svg.png",
        "party": "",
        "province": "azuay",
        "currentPosition": "",
        "experience": 43,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 63,
        "birthplace": "",
        "careerStart": "1982",
        "biography": "Luis Yanza Angamarca ( Gualaceo , provincia de Azuay , Ecuador , 1962) es uno de los fundadores del Frente de Defensa de la Amazonia .",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
        }
    },
    {
        "id": "356",
        "name": "Héctor Yépez",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/HectorYepez.jpg/250px-HectorYepez.jpg",
        "party": "Partido SUMA (2012-2018) Movimiento CREO (2018-2020)",
        "province": "guayas",
        "currentPosition": "",
        "experience": 19,
        "proposalsFulfilled": 0,
        "approvalRating": 0,
        "age": 39,
        "birthplace": "",
        "careerStart": "2006",
        "biography": "Héctor José Yépez Martínez ( Guayaquil , 22 de octubre de 1986) [ cita requerida ] es un profesor, abogado y político ecuatoriano , fue Asambleísta por la provincia del Guayas y Presidente de las comisiones parlamentarias de Participación Ciudadana y Control Social, [ 1 ] ​ y luego la de Gobiernos Autónomos, Descentralización, Competencias y Desarrollo Territorial de la Asamblea Nacional del Ecuador.",
        "career": [],
        "proposals": [],
        "analysis": {
            "categories": [],
            "detailed": "",
            "strengths": [],
            "weaknesses": []
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
