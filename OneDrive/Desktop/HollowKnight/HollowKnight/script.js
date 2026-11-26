document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // UTILIDADES DE IMAGEN Y RESPUESTA SEGURA
    // =========================================================================
    const FALLBACK_IMG = 'assets/images/fallback.svg';

    function escapeAttr(str = '') {
        return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function imgTag(src, alt, cls = '', zoomable = false) {
        const zoomAttr = zoomable ? ` data-zoom-src="${escapeAttr(src)}" data-zoom-caption="${escapeAttr(alt)}"` : '';
        return `<img src="${src}" alt="${escapeAttr(alt)}" loading="lazy" class="${cls}"${zoomAttr} onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">`;
    }

    // =========================================================================
    // 1. PERSONAJES CLAVE (11 TARJETAS INDIVIDUALES: CORNIFER, ZOTE Y SOÑADORES SEPARADOS)
    // =========================================================================
    const charactersData = [
        {
            id: 'the-knight',
            meta: 'PERSONAJE // VASIJA ERRANTE',
            name: 'El Caballero (The Knight)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/2/27/The_Knight.png/revision/latest',
            desc: 'Pequeña vasija silenciosa nacida en las profundidades del Abismo, forjada con Vacío y coraza pálida. Regresa a Hallownest atraído por el llamado del reino para enfrentar la Infección y decidir el destino del contenedor sellado.',
            relevance: 'Protagonista jugable. Su naturaleza de Vacío le permite canalizar Alma, dominar el Aguijón y descubrir la verdad sobre los experimentos del Rey Pálido.',
            spoiler: 'Al unir el Amuleto del Rey con el Abismo obtiene el Corazón del Vacío, lo que le permite unificar el Vacío y enfrentar directamente a El Resplandor en el plano onírico.'
        },
        {
            id: 'hornet',
            meta: 'PERSONAJE // CENTINELA DEL REINO',
            name: 'Hornet',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/16/Hornet_Idle.png/revision/latest',
            desc: 'Princesa protectora de las ruinas de Hallownest, hija de Herrah la Bestia y el Rey Pálido. Ágil y letal con su aguja e hilo, vigila el reino y pone a prueba al Caballero en dos combates decisivos.',
            relevance: 'Custodia el paso hacia la Marca del Rey en Bordes del Reino y ayuda al Caballero en el enfrentamiento final cuando posee el Corazón del Vacío. Protagonista de Hollow Knight: Silksong.'
        },
        {
            id: 'hollow-knight',
            meta: 'PERSONAJE // EL CONTENEDOR',
            name: 'El Hollow Knight',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/12/B_Hollow_Knight.png/revision/latest',
            desc: 'La vasija elegida por el Rey Pálido entre incontables descartes por considerarla pura y sin voluntad. Fue criada en el Palacio Blanco y encadenada en el Templo del Huevo Negro para sellar a El Resplandor.',
            relevance: 'Su trágico destino es el eje central de la caída del reino: el sello comenzó a fracturarse y la Infección volvió a filtrarse en los sueños de Hallownest.',
            spoiler: 'No era completamente hueco: una "idea inculcada" —su vínculo afectivo con el Rey Pálido— permitió que El Resplandor corrompiera su mente desde dentro.'
        },
        {
            id: 'pale-king',
            meta: 'DEIDAD // MONARCA DE HALLOWNEST',
            name: 'El Rey Pálido (Pale King)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/32/Pale-King.png/revision/latest',
            desc: 'Antiguo Wyrm que mudó su enorme cuerpo en Bordes del Reino y adoptó una forma diminuta para fundar Hallownest, otorgando pensamiento superior y civilización a los insectos del subsuelo.',
            relevance: 'Impulsó la era dorada de arquitectura, tranvías y ciencia, pero ante el regreso de El Resplandor ordenó crear miles de vasijas en el Abismo bajo el lema "No hay coste demasiado grande".',
            spoiler: 'Tras el fallo del sello, el Rey Pálido desapareció junto con su Palacio Blanco al plano onírico, donde su cuerpo yace sin vida en el trono.'
        },
        {
            id: 'radiance',
            meta: 'DEIDAD // LA LUZ OLVIDADA',
            name: 'El Resplandor (The Radiance)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/52/B_Radiance.png/revision/latest',
            desc: 'Deidad primordial de la luz y los sueños, venerada antiguamente por la tribu de las polillas. Cuando su pueblo la olvidó para seguir la luz del Rey Pálido, su rencor desató la Infección anaranjada.',
            relevance: 'Fuente real de la plaga que domina las mentes de Hallownest. Habita exclusivamente en el reino de los sueños y se niega a ser borrada de la memoria.',
            spoiler: 'Es la jefa final verdadera del juego base (accesible al usar el Aguijón Onírico sobre El Hollow Knight) y aparece en su forma suprema como Resplandor Absoluto en el Panteón de Hallownest.'
        },
        {
            id: 'quirrel',
            meta: 'VIAJERO // ERUDITO DE MONOMON',
            name: 'Quirrel',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/e/ee/Quirrel-2.png/revision/latest',
            desc: 'Explorador sereno, curioso y observador que regresa a Hallownest sin recordar su pasado completo. Porta sobre su cabeza la máscara de Monomon la Maestra y acompaña al Caballero en distintos encuentros clave.',
            relevance: 'Asiste directamente al Caballero en el combate contra Uumuu dentro de los Archivos de la Maestra para romper la barrera que protege a Monomon.',
            spoiler: 'Al devolver su máscara a Monomon recupera su edad real y encuentra paz al contemplar el Lago Azul, dejando atrás su aguijón.'
        },
        {
            id: 'cornifer',
            meta: 'CARTOGRAFÍA // EXPLORADOR',
            name: 'Cornifer',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/f/ff/Cornifer.png/revision/latest',
            desc: 'Entusiasta cartógrafo que se adentra sin miedo en casi todas las regiones peligrosas de Hallownest para dibujar mapas a mano. Su característico tarareo y los papeles esparcidos guían al jugador hasta su posición.',
            relevance: 'Es indispensable para la exploración: vende mapas preliminares en cada zona y trabaja junto a su esposa Iselda, quien regenta la tienda de mapas, pluma y marcadores en Bocasucia.'
        },
        {
            id: 'zote',
            meta: 'AVENTURERO // AUTO-PROCLAMADO HÉROE',
            name: 'Zote el Todopoderoso (Zote the Mighty)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5a/B_Zote.png/revision/latest',
            desc: 'Caballero errante extremadamente arrogante, presumido y malhumorado que afirma ser invencible mientras blande su aguijón de madera "Terminavidas" (Life Ender), incapaz de causar daño real.',
            relevance: 'El Caballero puede rescatarlo de un Rey Vengamosca en Sendero Verde y de las telarañas de Nido Profundo, enfrentarlo de forma cómica en el Coliseo de los Insensatos y escuchar sus 57 Preceptos en Bocasucia. En Hidden Dreams protagoniza una versión onírica idealizada por Bretta: el Príncipe Gris Zote.'
        },
        {
            id: 'monomon',
            meta: 'SOÑADORA // LA MAESTRA',
            name: 'Monomon la Maestra (Monomon the Teacher)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/e/e9/B_Monomon.png/revision/latest',
            desc: 'Sabia investigadora de los Archivos de la Maestra en el Cañón de la Niebla. Aceptó sumirse en un sueño eterno como uno de los tres sellos vivos que mantienen cerrado el Templo del Huevo Negro.',
            relevance: 'Consciente de que el sello no duraría para siempre, entregó su máscara a Quirrel y lo envió fuera del reino para que algún día regresara y ayudara a romper el estasis.'
        },
        {
            id: 'lurien',
            meta: 'SOÑADOR // EL VIGÍA',
            name: 'Lurien el Vigía (Lurien the Watcher)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/c/ce/B_Lurien.png/revision/latest',
            desc: 'Fiel servidor del Rey Pálido que vigilaba la Ciudad de Lágrimas desde la cúspide de la Torre del Vigía. Aceptó voluntariamente el sacrificio de convertirse en Soñador por devoción absoluta a su monarca.',
            relevance: 'Su reposo está custodiado por los Caballeros Vigías (Watcher Knights), reanimados por la Infección para impedir que su sello sea roto.'
        },
        {
            id: 'herrah',
            meta: 'SOÑADORA // LA BESTIA',
            name: 'Herrah la Bestia (Herrah the Beast)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/b/bc/B_Herrah.png/revision/latest',
            desc: 'Reina de las tribus arácnidas de Nido Profundo y madre de Hornet. A diferencia de los otros Soñadores, solo accedió a convertirse en sello del Huevo Negro tras pactar con el Rey Pálido engendrar una hija.',
            relevance: 'Duerme en la Guarida de la Bestia, en el Pueblo Distante de Nido Profundo. Su sacrificio dio origen a Hornet, vínculo directo entre Hallownest y Silksong.'
        }
    ];

    // =========================================================================
    // 2. CUATRO EXPANSIONES GRATUITAS (CONTENT PACKS VERIFICADOS)
    // =========================================================================
    const expansionsData = [
        {
            id: 'hidden-dreams',
            number: 'PACK 01',
            date: '3 AGO 2017',
            name: 'Hidden Dreams',
            tag: 'ACTUALIZACIÓN GRATUITA // CONTENT PACK',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9b/Screenshot_HK_White_Defender_01.png/revision/latest',
            desc: 'Primer Content Pack gratuito de Hollow Knight. Amplió el contenido del plano onírico con dos jefes muy queridos por la comunidad y una herramienta clave de viaje rápido.',
            bosses: ['Príncipe Gris Zote (Grey Prince Zote) — en los sueños de Bretta en Bocasucia', 'Defensor Blanco (White Defender) — versión onírica del Defensor del Estiércol'],
            characters: ['Bretta (nueva narrativa en su casa tras rescatar a Zote)', 'Ogrim en su memoria gloriosa como uno de los Cinco Grandes Caballeros'],
            items: ['Portal Onírico (Dreamgate) — desbloqueado al reunir 900 de Esencia con la Vidente'],
            mechanics: 'El Portal Onírico permite colocar un punto de teletransporte en casi cualquier sala y volver a él gastando 1 de Esencia. Ambos jefes oníricos aumentan su dificultad con cada victoria sucesiva.',
            zones: 'Nueva Estación Oculta (Hidden Station) de ciervocamino en la Cuenca Antigua y dos nuevos temas musicales de Christopher Larkin.'
        },
        {
            id: 'grimm-troupe',
            number: 'PACK 02',
            date: '26 OCT 2017',
            name: 'The Grimm Troupe',
            tag: 'ACTUALIZACIÓN GRATUITA // CONTENT PACK',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/37/Grimm_Troupe-0.png/revision/latest',
            desc: 'Segundo Content Pack gratuito. Al encender una linterna pesadillesca en Acantilados Aulladores, la Compañía de Grimm instala su carpa circense en Bocasucia e inicia el Ritual de la Llama.',
            bosses: ['Maestro de la Compañía Grimm (Troupe Master Grimm)', 'Rey Pesadilla Grimm (Nightmare King Grimm)'],
            characters: ['Grimm', 'Brumm (músico de la compañía)', 'Divine (mejora amuletos frágiles a inquebrantables)', 'Nymm (si destierras a la Compañía)'],
            items: ['Niño de Grimm (Grimmchild)', 'Melodía Despreocupada (Carefree Melody)', 'Escudo Onírico (Dreamshield)', 'Canción de Tejedora (Weaversong)', 'Maestro de Sprint (Sprintmaster)', 'Amuletos Inquebrantables (Corazón, Codicia y Fuerza)'],
            mechanics: 'Dos rutas narrativas excluyentes: completar el ritual recolectando llamas para enfrentar al Rey Pesadilla Grimm, o colaborar con Brumm para desterrar a la Compañía.',
            zones: 'Carpa de Grimm en Bocasucia, la sección secreta Sendero del Dolor (Path of Pain) en el Palacio Blanco y nuevos marcadores de mapa de Iselda.'
        },
        {
            id: 'lifeblood',
            number: 'PACK 03',
            date: '20 ABR 2018',
            name: 'Lifeblood',
            tag: 'ACTUALIZACIÓN GRATUITA // CONTENT PACK',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/15/Lifeblood_Update.jpg/revision/latest',
            desc: 'Tercer Content Pack gratuito. Centrado en pulir el juego de cara a su llegada a consolas, trajo un jefe inédito en La Colmena, ajustes de equilibrio y mejoras visuales y de rendimiento.',
            bosses: ['Caballero Colmena (Hive Knight) — nuevo jefe custodio de La Colmena', 'Señor Traidor (Traitor Lord) — combate rediseñado con nuevos ataques de ondas y guadañas'],
            characters: ['Reina Vespa (espíritu visible en La Colmena tras vencer al Caballero Colmena)'],
            items: ['Marcadores de Mapa personalizados (vendidos por Iselda en cuatro colores)', 'Tema de menú de Savia Vital (Lifeblood)'],
            mechanics: 'Optimización profunda del motor Unity, rebalanceo de amuletos (como Nido de Trematodos), nuevos efectos de sonido, ajustes en jefes existentes y mejoras visuales en varias zonas.',
            zones: 'La Colmena ampliada con la arena del Caballero Colmena y el santuario de la Reina Vespa.'
        },
        {
            id: 'godmaster',
            number: 'PACK 04',
            date: '23 AGO 2018',
            name: 'Godmaster',
            tag: 'ACTUALIZACIÓN GRATUITA // CONTENT PACK FINAL',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/b/ba/Screenshot_HK_Godhome_01.png/revision/latest',
            desc: 'Cuarto y último Content Pack gratuito, el más grande de todos. Introduce el Hogar de los Dioses, un reino onírico dedicado a la máxima prueba de combate contra todos los jefes de Hallownest.',
            bosses: ['Hermanos Oro y Mato', 'Maestro Pintor Sheo', 'Gran Sabio del Aguijón Sly', 'Hermanas de Batalla (Sisters of Battle)', 'Nosk Alado (Winged Nosk)', 'Vasija Pura (Pure Vessel)', 'Resplandor Absoluto (Absolute Radiance)'],
            characters: ['Buscadora de Dioses (Godseeker) — encontrada en la Fosa de Basura de los Canales Reales'],
            items: ['Sintonizador de Dioses (Godtuner)', 'Modo Buscador de Dioses (Godseeker Mode)'],
            mechanics: 'Cinco Panteones consecutivos (Maestro, Artista, Sabio, Caballero y Hallownest) con Ataduras opcionales, más el Salón de los Dioses para practicar cualquier jefe en dificultades Afinado, Ascendido y Radiante.',
            zones: 'Hogar de los Dioses (Godhome), Tierra de Tormentas (secreto) y dos nuevos finales canónicos: "Aceptar el Vacío" (Embrace the Void) y su variante con la Flor Delicada.'
        }
    ];

    // =========================================================================
    // 3. BIOMAS Y CONCEPT ART (IMÁGENES REALES DE ESCENARIOS + BOCETO REAL)
    // =========================================================================
    const artArchiveData = [
        // SUPERFICIE Y BOSQUES
        {
            id: 'dirtmouth',
            category: 'superficie-verde',
            categoryLabel: 'BIOMA // SUPERFICIE',
            title: 'Bocasucia (Dirtmouth)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/0/04/Screenshot_HK_Dirtmouth_01.png/revision/latest',
            palette: '#161C28 · #4A5568 · #CBD5E0',
            gradient: 'linear-gradient(135deg, #0b0e14 0%, #243044 65%, #5c6f8c 100%)',
            sigil: '🏚',
            summary: 'Pueblo crepuscular en la cima del reino, azotado por el viento y rodeado de lápidas, casas desiertas y faroles tenues.',
            visualFeatures: 'Paleta monocromática en grises azulados y azul noche que crea un contraste melancólico frente a la luz cálida de los faroles y la carpa carmesí de Grimm.',
            techNote: 'El pozo de descenso hacia Cruces Olvidados, el banco principal, la estación de Ciervocamino y el acceso hacia Acantilados Aulladores y Pico de Cristal.',
            entities: 'Elderbug, Iselda y Cornifer (tienda de mapas), Sly (tienda de objetos y amuletos), Bretta, Zote, Confesora Jiji, Grimm y Divine (DLC).'
        },
        {
            id: 'greenpath',
            category: 'superficie-verde',
            categoryLabel: 'BIOMA // BOSQUE ONÍRICO',
            title: 'Sendero Verde (Greenpath)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9c/Screenshot_HK_Greenpath_01.png/revision/latest',
            palette: '#143628 · #38A169 · #9AE6B4',
            gradient: 'linear-gradient(135deg, #0b2218 0%, #1d5c40 65%, #52b788 100%)',
            sigil: '🌿',
            summary: 'Cavernas exuberantes cubiertas de musgo, lianas, estanques de ácido y vegetación nacida de los sueños de la antigua deidad Unn.',
            visualFeatures: 'Tonos esmeralda, musgo luminoso y bruma suave con partículas flotantes que rompen la oscuridad inicial de Cruces Olvidados.',
            techNote: 'Primer combate contra Hornet, la Capa de Ala de Polilla (dash), el Lago de Unn, el amuleto Forma de Unn, el Cazador (Diario del Cazador) y el Santuario de Piedra.',
            entities: 'Hornet (Protectora), Cargador de Musgo Masivo, Sin Ojos (Guerrero Onírico), El Cazador, Quirrel, Zote (rescate), Musguitos y Rey Vengamosca.'
        },
        {
            id: 'queens-gardens',
            category: 'superficie-verde',
            categoryLabel: 'BIOMA // JARDINES REALES',
            title: 'Jardines de la Reina (Queen’s Gardens)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/91/Screenshot_HK_Queen%27s_Gardens_01.png/revision/latest',
            palette: '#1B3B2B · #48BB78 · #F6AD55',
            gradient: 'linear-gradient(135deg, #10261c 0%, #2b6447 65%, #8cc69f 100%)',
            sigil: '🌺',
            summary: 'Antiguos invernaderos aristocráticos de la Dama Blanca, hoy invadidos por espinas, plataformas retráctiles y mantis renegadas.',
            visualFeatures: 'Invernaderos de cristal roto, luz verdosa filtrada y flora espinosa que combina elegancia real con peligro constante.',
            techNote: 'Refugio de la Dama Blanca (primera mitad del Amuleto del Rey), el banco con música de altavoz, la tumba de la hija de la Doliente Gris (misión de la Flor Delicada).',
            entities: 'La Dama Blanca, Señor Traidor (Traitor Lord), Marmu (Guerrero Onírico), Cloth, Mantis Petra, Mantis Traidoras y el cadáver de Dryya.'
        },

        // RUINAS, AGUA Y SUEÑOS
        {
            id: 'city-of-tears',
            category: 'ruinas-agua',
            categoryLabel: 'BIOMA // CAPITAL LLUVIOSA',
            title: 'Ciudad de Lágrimas (City of Tears)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2b/Screenshot_HK_City_of_Tears_01.png/revision/latest',
            palette: '#1E3A5F · #5B8FB9 · #0B132B',
            gradient: 'linear-gradient(135deg, #090f21 0%, #1c3d63 65%, #4d88b8 100%)',
            sigil: '🌧',
            summary: 'Majestuosa capital gótica de Hallownest, bañada eternamente por la lluvia que se filtra desde el Lago Azul situado sobre su bóveda.',
            visualFeatures: 'Altísimas torres góticas, ventanales iluminados en azul acero, lluvia continua en capas parallax y reflejos húmedos.',
            techNote: 'El Forjaguijones (mejoras del Aguijón), Buscador de Reliquias Lemm, Santuario de Almas, Casa del Placer, Torre del Vigía y Torre del Amor.',
            entities: 'Lurien el Vigía, Maestro de Almas, Tirano de Almas, Caballeros Vigías, El Coleccionista, Quirrel, Hornet, Forjaguijones, Lemm y Marissa.'
        },
        {
            id: 'fog-canyon',
            category: 'ruinas-agua',
            categoryLabel: 'BIOMA // NIEBLA Y MEDUSAS',
            title: 'Cañón de la Niebla (Fog Canyon)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b3/Screenshot_HK_Fog_Canyon_01.png/revision/latest',
            palette: '#162836 · #38B2AC · #B2F5EA',
            gradient: 'linear-gradient(135deg, #0b1620 0%, #1e4d5c 65%, #5fd3c8 100%)',
            sigil: '🪼',
            summary: 'Cavernas neblinosas de lagos ácidos y burbujas bioluminiscentes habitadas por medusas explosivas y experimentos de Monomon.',
            visualFeatures: 'Bruma rosada y turquesa con resplandores suaves, burbujas ascendentes y arquitectura de laboratorio en los Archivos.',
            techNote: 'Los Archivos de la Maestra, la barrera de sombra (requiere Capa Sombría para el mapa de Cornifer), el Banco de Millibelle y el amuleto Muesca de Amuleto.',
            entities: 'Monomon la Maestra, Uumuu, Quirrel, Millibelle la Banquera, Oomas y Uomas.'
        },
        {
            id: 'resting-grounds',
            category: 'ruinas-agua',
            categoryLabel: 'BIOMA // MEMORIA & SUEÑOS',
            title: 'Tierras de Descanso (Resting Grounds)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/a/ae/Screenshot_HK_Resting_Grounds_01.png/revision/latest',
            palette: '#1A2035 · #63B3ED · #E2E8F0',
            gradient: 'linear-gradient(135deg, #0d111f 0%, #26385e 65%, #78a5d6 100%)',
            sigil: '🕯',
            summary: 'Cementerio sagrado de Hallownest y último hogar de la tribu de las polillas, envuelto en niebla dorada y recuerdos espirituales.',
            visualFeatures: 'Lápidas talladas, estatuas monumentales de los Soñadores, luz cálida sepulcral y partículas doradas de Esencia.',
            techNote: 'Obtención del Aguijón Onírico, recompensas de Esencia de la Vidente, el Claro de los Espíritus, la Doliente Gris (Flor Delicada) y el Lago Azul.',
            entities: 'La Vidente (Seer), Xero (Guerrero Onírico), Doliente Gris (Ze’mer), Revek y los espíritus del Claro.'
        },

        // SUBTERRÁNEO, CRISTAL Y ABISMO
        {
            id: 'fungal-wastes',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // HONGOS & MANTIS',
            title: 'Páramos Fungales (Fungal Wastes)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/1f/Screenshot_HK_Fungal_Wastes_01.png/revision/latest',
            palette: '#2A223D · #805AD5 · #F6E05E',
            gradient: 'linear-gradient(135deg, #171224 0%, #3d2c61 65%, #9f7aea 100%)',
            sigil: '🍄',
            summary: 'Cavernas húmedas cubiertas de setas elásticas, esporas amarillentas y el territorio independiente de la disciplinada tribu Mantis.',
            visualFeatures: 'Paleta terrosa con acentos ocre, violáceos y verdes ácidos; arquitectura orgánica de hongos que transiciona a las lanzas afiladas de la Aldea Mantis.',
            techNote: 'Garra de Mantis (salto en pared), Aldea Mantis, tienda de Comedor de Piernas (amuletos frágiles), rescate de Bretta y acceso a Ciudad de Lágrimas y Nido Profundo.',
            entities: 'Señores Mantis (Mantis Lords), Anciano Hu (Guerrero Onírico), Comedor de Piernas (Leg Eater), Cloth, Bretta, Shrumal Ogres y Guerreros Mantis.'
        },
        {
            id: 'crystal-peak',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // MINAS & CRISTALES',
            title: 'Pico de Cristal (Crystal Peak)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/6/60/Screenshot_HK_Crystal_Peak_01.png/revision/latest',
            palette: '#1F293D · #68D391 · #F687B3',
            gradient: 'linear-gradient(135deg, #111827 0%, #2a3f5f 65%, #76b8c4 100%)',
            sigil: '💎',
            summary: 'Canteras industriales repletas de enormes cristales rosados energéticos, cintas transportadoras, pistones mecánicos y láseres.',
            visualFeatures: 'Brillos magenta y cian sobre roca oscura metálica, maquinaria minera en movimiento perpetuo y una cima nevada con la estatua de El Resplandor.',
            techNote: 'Corazón de Cristal (superdash), Mineral Pálido en la Corona de Hallownest, Oscuridad Descendente (montículo cristalizado), Llave del Tendero y Concentración Profunda.',
            entities: 'Guardián de Cristal, Guardián Enfurecido, Myla (en la entrada), Quirrel, mineros infectados y Cristales Reptantes.'
        },
        {
            id: 'deepnest',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // OSCURIDAD ARÁCNIDA',
            title: 'Nido Profundo (Deepnest)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/4/48/Screenshot_HK_Deepnest_01.png/revision/latest',
            palette: '#090A0E · #2D2A32 · #D69E2E',
            gradient: 'linear-gradient(135deg, #050608 0%, #1d1a24 65%, #4a4158 100%)',
            sigil: '🕷',
            summary: 'Laberinto subterráneo opresivo y tenebroso, lleno de pasadizos estrechos, telarañas, suelos falsos y depredadores arácnidos.',
            visualFeatures: 'Oscuridad casi total (requiere Linterna Lumafly), siluetas de insectos caminando en primer plano y un diseño sonoro claustrofóbico.',
            techNote: 'Guarida de la Bestia (Herrah), Pase de Tranvía (en el Tranvía Fallido), Guarida de Tejedoras (Canción de Tejedora), Fuente Termal y guarida de Nosk.',
            entities: 'Herrah la Bestia, Nosk, Galien (Guerrero Onírico), Midwife (Comadrona), Zote (rescate), Devotos Acechadores y Tallacaminos.'
        },
        {
            id: 'ancient-basin',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // RUINAS PROFUNDAS',
            title: 'Cuenca Antigua (Ancient Basin)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/3f/Screenshot_HK_Ancient_Basin_01.png/revision/latest',
            palette: '#0D1117 · #4A5568 · #A0AEC0',
            gradient: 'linear-gradient(135deg, #07090d 0%, #1f2937 65%, #4b5563 100%)',
            sigil: '🏛',
            summary: 'Profunda región hundida bajo los Canales Reales donde alguna vez se alzó el Palacio Blanco del Rey Pálido, hoy reducida a silencio y ceniza pálida.',
            visualFeatures: 'Roca grisácea monumental, restos de arquitectura real blanca y una sensación de solemnidad y abandono absoluto.',
            techNote: 'Alas de Monarca (doble salto), Mineral Pálido, Fuente de los Deseos (Fragmento de Vasija), acceso al Palacio Blanco (con Aguijón Onírico Despertado) y puerta sellada hacia El Abismo.',
            entities: 'Vasija Rota (Broken Vessel), Familiar Perdido (Lost Kin), Cloth, cadáver del Molde Real y Globos Infectados.'
        },
        {
            id: 'the-abyss',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // ORIGEN DEL VACÍO',
            title: 'El Abismo (The Abyss)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c9/Screenshot_HK_Abyss_01.png/revision/latest',
            palette: '#000000 · #0F172A · #E2E8F0',
            gradient: 'linear-gradient(135deg, #000000 0%, #0b1120 75%, #273449 100%)',
            sigil: '◉',
            summary: 'La sima más profunda del mundo, un mar negro de Vacío rodeado de millones de máscaras rotas donde nacieron todas las vasijas.',
            visualFeatures: 'Negro puro con neblina gris pálida, partículas ascendentes de sombra y un silencio sobrecogedor que refuerza el peso narrativo.',
            techNote: 'Capa Sombría (Shade Cloak), Chillido del Abismo (Abyss Shriek), Núcleo de Savia Vital (cámara azul secreta), Faro del Abismo y el Lugar de Nacimiento (Corazón del Vacío).',
            entities: 'Hermanos (Siblings), Tentáculos de Vacío y los recuerdos del Rey Pálido y El Hollow Knight.'
        },
        {
            id: 'kingdoms-edge',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // FRONTERA Y CENIZA',
            title: 'Bordes del Reino (Kingdom’s Edge)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/3e/Screenshot_HK_Kingdom%27s_Edge_01.png/revision/latest',
            palette: '#1E1D1B · #716B5E · #EDF2F7',
            gradient: 'linear-gradient(135deg, #121110 0%, #3b3730 65%, #8a8172 100%)',
            sigil: '❄',
            summary: 'Acantilados vertiginosos en el extremo oriental de Hallownest donde cae constantemente ceniza blanca desprendida del colosal cadáver del Wyrm.',
            visualFeatures: 'Tonos cenicientos y ocres desaturados, partículas constantes de ceniza cayendo y grandes espacios verticales abiertos.',
            techNote: 'Coliseo de los Insensatos (tres pruebas), segundo combate con Hornet, Coraza Desechada (Marca del Rey), Cabaña del Maestro Oro (Corte Veloz) y Tajo Rápido.',
            entities: 'Hornet (Centinela), Domador de Dioses, Markoth (Guerrero Onírico), Maestro del Aguijón Oro, Bardoon, Áspid Primigenio y Grandes Saltadores.'
        },
        {
            id: 'the-hive',
            category: 'subterraneo-abismo',
            categoryLabel: 'BIOMA // PANAL AISLADO',
            title: 'La Colmena (The Hive)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/6/63/Screenshot_HK_Hive_01.png/revision/latest',
            palette: '#241806 · #B7791F · #F6E05E',
            gradient: 'linear-gradient(135deg, #170f03 0%, #6b440a 65%, #d69e2e 100%)',
            sigil: '🐝',
            summary: 'Celdas hexagonales doradas y luminosas ocultas bajo Bordes del Reino, hogar de una sociedad de abejas que nunca se sometió a Hallownest.',
            visualFeatures: 'Paleta ámbar y miel única en todo el juego, geometría hexagonal orgánica y haces de luz cálida entre paredes cerosas.',
            techNote: 'Combate contra el Caballero Colmena (añadido en el pack Lifeblood), el amuleto Sangre de Colmena (Hiveblood), un Fragmento de Máscara y el espíritu de la Reina Vespa.',
            entities: 'Caballero Colmena (Hive Knight), Reina Vespa, Guardianes de la Colmena, Soldados de la Colmena y Abejitas.'
        },

        // PIPELINE & CONCEPT ART (BOCETO REAL DE ARI GIBSON)
        {
            id: 'sketch-pipeline',
            category: 'concept',
            categoryLabel: 'CONCEPT ART // PIPELINE',
            title: 'Bocetos, Trazo y Animación 2D',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/6/64/Cornifer_sketch.jpg/revision/latest',
            palette: '#2D3748 · #CBD5E0 · #7CE8FF',
            gradient: 'linear-gradient(135deg, #1a202c 0%, #2d3748 65%, #718096 100%)',
            sigil: '✒',
            summary: 'Ari Gibson creó todo el universo visual de Hollow Knight a partir de bocetos a lápiz y tinta escaneados, pintados en Photoshop y animados fotograma a fotograma.',
            visualFeatures: 'Siluetas de altísimo contraste (personajes pálidos sobre fondos oscuros) que permiten leer el combate y la navegación al instante sin interfaz intrusiva.',
            techNote: 'Animación tradicional 2D cuadro por cuadro ensamblada en Unity 2D con capas parallax, iluminación radial y partículas personalizadas por cada bioma.',
            entities: 'Ilustración de referencia: boceto original de Cornifer realizado por Ari Gibson durante el desarrollo de Team Cherry.'
        }
    ];

    // =========================================================================
    // 4. SECCIÓN 05: JEFES Y ENEMIGOS (CATEGORÍAS VERIFICADAS, SIN MEZCLAR)
    // =========================================================================
    const bossesEnemiesData = [
        // JEFES PRINCIPALES
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Falso Caballero (False Knight)',
            location: 'Cruces Olvidados',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/98/B_False_Knight.png/revision/latest',
            desc: 'Un gusano débil que robó la gigantesca armadura del Gran Caballero Hegemol para proteger a sus hermanos.',
            combat: 'Primer gran jefe de historia. Alterna golpes de maza lentos con ondas expansivas y caídas de rocas.',
            attacks: 'Salto con maza, onda de choque terrestre y rabieta central que hace caer escombros del techo.',
            rewards: 'Blasón de la Ciudad (City Crest), Geo y acceso al Montículo Ancestral (Espíritu Vengativo).'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Hornet Protectora (Hornet Protector)',
            location: 'Sendero Verde',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/8/89/B_Hornet.png/revision/latest',
            desc: 'Centinela de las ruinas que intercepta al Caballero para comprobar si es digno de continuar su viaje.',
            combat: 'Duelo ágil y acrobático que enseña al jugador a leer señales visuales y auditivas antes de cada embestida.',
            attacks: 'Estocada terrestre/aérea, lanzamiento de aguja con hilo retráctil y tormenta de seda en área.',
            rewards: 'Capa de Ala de Polilla (Mothwing Cloak — habilidad de dash).'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Señores Mantis (Mantis Lords)',
            location: 'Aldea Mantis (Páramos Fungales)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2d/B_Mantis_Lords-2.png/revision/latest',
            desc: 'Las tres líderes invictas de la tribu Mantis, que resistieron la Infección y solo respetan a quien vence su prueba.',
            combat: 'Combate rítmico en dos fases: primero enfrentas a una hermana y después a las otras dos de forma sincronizada.',
            attacks: 'Embestida horizontal veloz, caída vertical desde el aire y lanzamiento de discos boomerang desde las paredes.',
            rewards: 'Respeto de toda la Aldea Mantis, acceso a Nido Profundo, Marca del Orgullo y cofre de Geo.'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Maestro de Almas (Soul Master)',
            location: 'Santuario de Almas (Ciudad de Lágrimas)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/c/cf/B_Soulmaster.png/revision/latest',
            desc: 'Líder del Santuario de Almas que experimentó desesperadamente con el Alma para intentar detener la Infección.',
            combat: 'Combate en dos fases con teletransportes constantes; al derrotarlo, atraviesa el suelo para una fase frenética final.',
            attacks: 'Orbes teledirigidos de Alma, embestida horizontal, anillo de 4 orbes giratorios y caída sísmica con ondas.',
            rewards: 'Hechizo Inmersión Desoladora (Desolate Dive).'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Vasija Rota (Broken Vessel)',
            location: 'Cuenca Antigua',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/30/B_Broken_Vessel-2.png/revision/latest',
            desc: 'Cadáver de una vasija descartada que es reanimado por las Semillas de Luz de la Infección.',
            combat: 'Combate rápido de tamaño similar al Caballero, con globos infectados apareciendo constantemente.',
            attacks: 'Embestida aérea/terrestre, cascada de esferas naranjas en el centro, saltos cortantes y caída con proyectiles.',
            rewards: 'Acceso a las Alas de Monarca (Monarch Wings — doble salto).'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Caballeros Vigías (Watcher Knights)',
            location: 'Torre del Vigía (Ciudad de Lágrimas)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9b/B_Watcher_Knight-2.png/revision/latest',
            desc: 'Seis caparazones vacíos de los antiguos guardias de Lurien, poseídos por moscas infectadas.',
            combat: 'Enfrentamiento de resistencia contra seis caballeros (dos a la vez); puede reducirse a cinco cortando un candelabro oculto antes de entrar.',
            attacks: 'Cortes dobles con clavo, giro rodante terrestre y rebote parabólico por toda la sala.',
            rewards: 'Acceso directo a Lurien el Vigía y cofre de Geo.'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Uumuu',
            location: 'Archivos de la Maestra (Cañón de la Niebla)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/4/49/B_Uumuu.png/revision/latest',
            desc: 'Entidad medusoide inteligente creada por Monomon para custodiar su cámara en los Archivos.',
            combat: 'Es invulnerable a los golpes directos hasta que Quirrel desciende y perfora su membrana exterior.',
            attacks: 'Descargas eléctricas teledirigidas que siguen al jugador y patrones de rayos estáticos en toda la arena.',
            rewards: 'Acceso a Monomon la Maestra.'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL',
            name: 'Hornet Centinela (Hornet Sentinel)',
            location: 'Bordes del Reino',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/8/80/B_Hornet2.png/revision/latest',
            desc: 'Segundo duelo definitivo contra Hornet antes de la entrada a la Coraza Desechada del Wyrm.',
            combat: 'Mucho más rápida y agresiva que en Sendero Verde; añade trampas de pinchos suspendidos y contraataques.',
            attacks: 'Pinchos de seda flotantes, parada defensiva con contraataque, estocadas rápidas y tormenta de hilo.',
            rewards: 'Acceso a la Marca del Rey (King’s Brand).'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE PRINCIPAL // FINAL',
            name: 'El Hollow Knight (The Hollow Knight)',
            location: 'Templo del Huevo Negro',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/12/B_Hollow_Knight.png/revision/latest',
            desc: 'El contenedor encadenado cuya coraza se ha agrietado bajo el peso de El Resplandor.',
            combat: 'Combate dramático en varias fases; conforme avanza, el propio jefe intenta apuñalarse para frenar la Infección que lo controla.',
            attacks: 'Combo triple de aguijón, embestida, columnas de llamas infectadas, salvas de proyectiles y rebotes corruptos.',
            rewards: 'Desbloquea los finales del juego base (o abre paso a El Resplandor con el Corazón del Vacío).'
        },
        {
            category: 'principales',
            categoryLabel: 'JEFE FINAL VERDADERO',
            name: 'El Resplandor (The Radiance)',
            location: 'Templo del Huevo Negro (Plano Onírico)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/52/B_Radiance.png/revision/latest',
            desc: 'La diosa olvidada de la luz y origen de la Infección, enfrentada dentro de la mente de El Hollow Knight.',
            combat: 'Batalla épica de múltiples fases que inflige 2 máscaras de daño por golpe y culmina en un ascenso entre plataformas rodeadas por el Vacío.',
            attacks: 'Muros y lluvias de espadas de luz, haces láser radiales, orbes perseguidores y pilares de luz barridos.',
            rewards: 'Final verdadero "No Más Sueños" (Dream No More).'
        },

        // JEFES OPCIONALES
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'Madre Gruz (Gruz Mother)',
            location: 'Cruces Olvidados',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9f/B_Gruz_Mother.png/revision/latest',
            desc: 'Enorme criatura materna dormida que bloquea el camino hacia la aldea abandonada y el rescate de Sly.',
            combat: 'Sencillo y directo, ideal para practicar el timing de salto y ataques ascendentes.',
            attacks: 'Embestida en línea recta y rebote vertical en zigzag entre el suelo y el techo; al morir libera Gruzzers.',
            rewards: 'Geo y acceso a la cabaña donde descansa Sly.'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'Defensor del Estiércol (Dung Defender)',
            location: 'Canales Reales',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0e/B_Dung_Defender.png/revision/latest',
            desc: 'Ogrim, uno de los Cinco Grandes Caballeros de Hallownest, aún leal al Rey y guardián del acceso a la Arboleda de Isma.',
            combat: 'Combate enérgico y alegre. Usar Inmersión Desoladora cuando bucea bajo tierra lo expulsa aturdido.',
            attacks: 'Lanzamiento de bolas que rebotan, nado subterráneo con erupciones y rebote en forma de esfera.',
            rewards: 'Amuleto Emblema del Defensor (Defender’s Crest) y palanca hacia la Lágrima de Isma.'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'Señor Traidor (Traitor Lord)',
            location: 'Jardines de la Reina',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2c/B_Traitor_Lord.png/revision/latest',
            desc: 'Antiguo líder mantis que aceptó voluntariamente la Infección en busca de mayor fuerza y fue exiliado por sus hermanas.',
            combat: 'Inflige 2 máscaras por golpe. Diseñado para dominar la Capa Sombría atravesando sus embestidas y ondas.',
            attacks: 'Embestida cortante, salto diagonal, ondas sísmicas verticales de pantalla completa y guadañas giratorias.',
            rewards: 'Acceso a la Dama Blanca (mitad del Amuleto del Rey).'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'Nosk',
            location: 'Nido Profundo',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a8/B_Nosk.png/revision/latest',
            desc: 'Depredador cambiante que adopta la silueta del propio Caballero para atraer a sus víctimas a las profundidades.',
            combat: 'Se desplaza a gran velocidad por el suelo de la arena y se oculta en el techo.',
            attacks: 'Cargas rasantes, erupción de proyectiles de infección desde su espalda y lluvia de ácido desde el techo.',
            rewards: '1 Mineral Pálido (Pale Ore).'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'Caballero Colmena (Hive Knight)',
            location: 'La Colmena (Pack Lifeblood)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/19/Screenshot_HK_Hive_Knight_01.png/revision/latest',
            desc: 'Leal guardián de la Reina Vespa, añadido en el Content Pack Lifeblood.',
            combat: 'Combate ágil con teletransportes cortos y proyectiles en área que llenan la arena.',
            attacks: 'Estocada veloz, teletransporte con corte, esferas de espinas explosivas y enjambre de abejas descendentes.',
            rewards: 'Acceso al amuleto Sangre de Colmena (Hiveblood).'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL // DLC',
            name: 'Maestro de la Compañía Grimm',
            location: 'Carpa de Grimm en Bocasucia (The Grimm Troupe)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5b/B_Grimm.png/revision/latest',
            desc: 'Líder teatral y cortés de la Compañía de Grimm; hace una reverencia al inicio del duelo.',
            combat: 'Coreografía precisa y rápida con pausas muy limpias entre ataques.',
            attacks: 'Murciélagos de fuego, embestida ascendente con lluvia de brasas, picos desde el suelo y fase globo de proyectiles.',
            rewards: '1 Muesca de Amuleto y mejora del Niño de Grimm a fase 3.'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'El Coleccionista (The Collector)',
            location: 'Torre del Amor (Ciudad de Lágrimas)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d5/B_Collector.png/revision/latest',
            desc: 'Entidad de Vacío obsesionada con preservar larvas y criaturas de Hallownest dentro de frascos de cristal.',
            combat: 'Salta frenéticamente riendo mientras deja caer frascos que liberan enemigos comunes.',
            attacks: 'Saltos rasantes, zarpazos rápidos y caída múltiple de frascos con criaturas.',
            rewards: 'Mapa del Coleccionista (muestra todas las larvas restantes en el mapa) y 3 larvas rescatadas.'
        },
        {
            category: 'opcionales',
            categoryLabel: 'JEFE OPCIONAL',
            name: 'Domador de Dioses (God Tamer)',
            location: 'Prueba de los Insensatos (Coliseo)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d3/B_God_Tamer.png/revision/latest',
            desc: 'Veterana guerrera del Coliseo que combate junto a su enorme bestia doméstica.',
            combat: 'Basta con derrotar a la bestia para ganar el encuentro, ya que la domadora se rinde inmediatamente.',
            attacks: 'Ráfagas de infección de la bestia, ataque rodante con rebote en pared y saltos con lanza de la jinete.',
            rewards: 'Victoria en la Prueba de los Insensatos, Geo y logro.'
        },

        // JEFES ONÍRICOS
        {
            category: 'oniricos',
            categoryLabel: 'JEFE ONÍRICO',
            name: 'Campeón Fallido (Failed Champion)',
            location: 'Cruces Olvidados (Sueño del Falso Caballero)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/a/ac/Failed-Champion.png/revision/latest',
            desc: 'Versión onírica mucho más veloz y brutal del Falso Caballero.',
            combat: 'Inflige 2 máscaras por golpe y encadena ondas de choque con lluvia constante de barriles explosivos.',
            attacks: 'Golpes dobles ultrarrápidos, ondas gigantes y ataques continuos al enfurecerse.',
            rewards: '300 de Esencia para el Aguijón Onírico.'
        },
        {
            category: 'oniricos',
            categoryLabel: 'JEFE ONÍRICO',
            name: 'Tirano de Almas (Soul Tyrant)',
            location: 'Santuario de Almas (Sueño del Maestro de Almas)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/d/dc/Soul-Tyrant.png/revision/latest',
            desc: 'Manifestación onírica del Maestro de Almas en la cumbre de su obsesión por la inmortalidad.',
            combat: 'Teletransportes casi instantáneos, seis orbes giratorios en vez de cuatro y una fase final incesante.',
            attacks: 'Fintas de caída sísmica, ráfagas continuas de orbes y bombardeo de Alma en fase 2.',
            rewards: '300 de Esencia.'
        },
        {
            category: 'oniricos',
            categoryLabel: 'JEFE ONÍRICO',
            name: 'Familiar Perdido (Lost Kin)',
            location: 'Cuenca Antigua (Sueño de Vasija Rota)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9d/Lost-Kin.png/revision/latest',
            desc: 'Recuerdo onírico más veloz y agresivo de la Vasija Rota.',
            combat: 'Presión constante con apariciones frecuentes de globos infectados que complican la curación.',
            attacks: 'Embestidas rápidas sin pausa, saltos en cadena y explosión masiva de proyectiles.',
            rewards: '400 de Esencia.'
        },
        {
            category: 'oniricos',
            categoryLabel: 'JEFE ONÍRICO // DLC',
            name: 'Defensor Blanco (White Defender)',
            location: 'Canales Reales (Pack Hidden Dreams)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a7/B_White_Defender.png/revision/latest',
            desc: 'Ogrim soñando con su pasado glorioso junto a los Cinco Grandes Caballeros.',
            combat: 'Puede combatirse hasta 5 veces consecutivas, incrementando su daño en cada revancha.',
            attacks: 'Olas masivas de pilares terrestres, lanzamiento continuo de esferas y saltos encadenados.',
            rewards: '300 de Esencia y una escultura especial tras derrotarlo 5 veces.'
        },
        {
            category: 'oniricos',
            categoryLabel: 'JEFE ONÍRICO // DLC',
            name: 'Príncipe Gris Zote (Grey Prince Zote)',
            location: 'Bocasucia — Sótano de Bretta (Hidden Dreams)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/1/17/B_Grey_Prince_Zote.png/revision/latest',
            desc: 'La versión heroica, musculosa e impredecible que Bretta imagina de Zote en sus sueños.',
            combat: 'Movimientos torpes pero letales con fintas inesperadas; puede desafiarse hasta 10 veces subiendo de poder.',
            attacks: 'Caída desde el techo con ondas, invocación de Zotelings, bombas voladoras y carga tropezando.',
            rewards: '300 de Esencia y títulos crecientes en su estatua.'
        },
        {
            category: 'oniricos',
            categoryLabel: 'JEFE ONÍRICO // DLC',
            name: 'Rey Pesadilla Grimm (Nightmare King Grimm)',
            location: 'Carpa de Grimm (Sueño de Grimm)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/0/09/B_Nightmare_King.png/revision/latest',
            desc: 'El verdadero corazón de la Pesadilla. Considerado uno de los mejores y más exigentes combates de todo el juego.',
            combat: 'Inflige 2 máscaras de daño por golpe a velocidad vertiginosa; requiere memorizar y responder limpiamente a cada patrón.',
            attacks: '4 murciélagos de fuego, 4 pilares de llamas consecutivos, rastro de fuego tras embestida y picos letales.',
            rewards: 'Mejora final del Niño de Grimm (fase 4) y culminación del Ritual.'
        },

        // GUERREROS ONÍRICOS
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Xero',
            location: 'Tierras de Descanso',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f9/HJ_Xero.png/revision/latest',
            desc: 'Espíritu de un caballero ejecutado por alzarse contra el Rey durante la caída del reino.',
            combat: 'Flota sobre la arena lanzando sus clavos en línea recta; a mitad de vida duplica la cantidad de armas.',
            attacks: 'Lanzamiento y retorno de 2 a 4 aguijones flotantes.',
            rewards: '100 de Esencia.'
        },
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Gorb',
            location: 'Acantilados Aulladores',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/33/HJ_Gorb.png/revision/latest',
            desc: 'La "Gran Mente", una misteriosa entidad onírica que invita a ascender con ella.',
            combat: 'Flota emitiendo salvas radiales de lanzas en 1, 2 y hasta 3 oleadas sucesivas.',
            attacks: 'Anillos concéntricos de lanzas proyectadas en 8 direcciones.',
            rewards: '100 de Esencia.'
        },
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Anciano Hu (Elder Hu)',
            location: 'Páramos Fungales',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/0/01/HJ_Elder_Hu.png/revision/latest',
            desc: 'Sabio viajero que murió combatiendo la Infección en la aldea mantis.',
            combat: 'Se teletransporta y hace caer anillos luminosos que cubren gran parte de la arena.',
            attacks: 'Anillos paralelos descendentes y cortina de anillos cerrándose hacia el centro.',
            rewards: '100 de Esencia.'
        },
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Sin Ojos (No Eyes)',
            location: 'Santuario de Piedra (Sendero Verde)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5b/HJ_No_Eyes.png/revision/latest',
            desc: 'Espíritu trágico que canta una inquietante nana mientras se teletransporta entre plataformas.',
            combat: 'Evita al jugador teletransportándose tras cada golpe mientras espectros flotan ondulando.',
            attacks: 'Corrientes de espíritus fantasmales que atraviesan la sala.',
            rewards: '200 de Esencia.'
        },
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Marmu',
            location: 'Jardines de la Reina',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/2/29/HJ_Marmu.png/revision/latest',
            desc: 'Alegre protectora de los jardines que esperaba que la Reina le enseñara a volar.',
            combat: 'Se enrolla en bola y rebota rápidamente hacia el jugador; golpearla con buen ritmo la mantiene alejada.',
            attacks: 'Embestidas rodantes y teletransportes cortos.',
            rewards: '150 de Esencia.'
        },
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Galien',
            location: 'Nido Profundo',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/e/ee/HJ_Galien.png/revision/latest',
            desc: 'Valiente guerrero que viajó a Nido Profundo para demostrar su valía y cayó en la oscuridad.',
            combat: 'Invoca una gran guadaña giratoria que persigue y rebota mientras aparecen discos secundarios.',
            attacks: 'Guadaña principal rebotante y 1-2 orbes giratorios adicionales.',
            rewards: '200 de Esencia.'
        },
        {
            category: 'guerreros',
            categoryLabel: 'GUERRERO ONÍRICO',
            name: 'Markoth',
            location: 'Bordes del Reino',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4a/HJ_Markoth.png/revision/latest',
            desc: 'Único guerrero conocido de la tribu de las polillas, aislado en los confines del reino.',
            combat: 'Rodeado de un escudo onírico giratorio (dos en fase 2) mientras aparecen clavos apuntando al jugador.',
            attacks: 'Escudos rotativos expansivos y lluvia de clavos teledirigidos.',
            rewards: '250 de Esencia.'
        },

        // JEFES DE LOS PANTEONES (GODMASTER)
        {
            category: 'panteones',
            categoryLabel: 'JEFE DE PANTEÓN // GODMASTER',
            name: 'Hermanos Oro y Mato',
            location: 'Panteón del Maestro (Hogar de los Dioses)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d1/B_Oro_%26_Mato.png/revision/latest',
            desc: 'Dos de los tres Maestros del Aguijón combatiendo primero por separado y luego en equipo.',
            combat: 'Coordinan ataques desde ambos lados de la arena usando sus respectivas Artes del Aguijón.',
            attacks: 'Corte Veloz (Oro), Corte Ciclónico (Mato) y combos dobles coordinados.',
            rewards: 'Finalización del Panteón del Maestro.'
        },
        {
            category: 'panteones',
            categoryLabel: 'JEFE DE PANTEÓN // GODMASTER',
            name: 'Maestro Pintor Sheo',
            location: 'Panteón del Artista (Hogar de los Dioses)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/9/96/B_Paintmaster_Sheo.png/revision/latest',
            desc: 'El Maestro del Aguijón retirado en Sendero Verde, combatiendo con su gigantesco pincel cargado de pigmentos.',
            combat: 'El color de la pintura en su pincel telegrafía con claridad el tipo de ataque que ejecutará.',
            attacks: 'Gran Corte magenta, barrido azul en arco, estallido amarillo y salto salpicado rojo.',
            rewards: 'Finalización del Panteón del Artista.'
        },
        {
            category: 'panteones',
            categoryLabel: 'JEFE DE PANTEÓN // GODMASTER',
            name: 'Gran Sabio del Aguijón Sly',
            location: 'Panteón del Sabio (Hogar de los Dioses)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/d/dc/Screenshot_HK_Sly_02.png/revision/latest',
            desc: 'El aparentemente diminuto tendero de Bocasucia revela su verdadera identidad como el maestro de los Maestros del Aguijón.',
            combat: 'Blande un aguijón descomunal con agilidad extrema; en la fase 2 rebota por las paredes antes de girar.',
            attacks: 'Las tres Artes del Aguijón (Gran Corte, Ciclónico y Veloz) y remolinos aéreos.',
            rewards: 'Finalización del Panteón del Sabio.'
        },
        {
            category: 'panteones',
            categoryLabel: 'JEFE DE PANTEÓN // GODMASTER',
            name: 'Hermanas de Batalla (Sisters of Battle)',
            location: 'Panteón de Hallownest (Hogar de los Dioses)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c9/Screenshot_HK_Sisters_of_Battle_01.png/revision/latest',
            desc: 'Versión definitiva de los Señores Mantis donde las tres hermanas atacan simultáneamente sin tregua.',
            combat: 'Considerado uno de los combates más fluidos y elegantes de todo Hollow Knight.',
            attacks: 'Triple sincronización de embestidas, caídas y discos cruzados.',
            rewards: 'Desbloqueo en el Salón de los Dioses.'
        },
        {
            category: 'panteones',
            categoryLabel: 'JEFE DE PANTEÓN // GODMASTER',
            name: 'Vasija Pura (Pure Vessel)',
            location: 'Panteón del Caballero (Hogar de los Dioses)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/e/e4/B_Pure_Vessel.png/revision/latest',
            desc: 'El Hollow Knight en su apogeo, entrenado a la perfección y completamente libre de la Infección.',
            combat: 'Inflige 2 máscaras de daño por golpe; ritmo vertiginoso que exige reflejos precisos con la Capa Sombría.',
            attacks: 'Combo triple, abanico de dagas pálidas, pilares de espadas, explosión de foco y tentáculos de Vacío.',
            rewards: 'Finalización del Panteón del Caballero y acceso al Panteón de Hallownest.'
        },
        {
            category: 'panteones',
            categoryLabel: 'JEFE SUPREMO // GODMASTER',
            name: 'Resplandor Absoluto (Absolute Radiance)',
            location: 'Cima del Panteón de Hallownest',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7e/Screenshot_HK_Absolute_Radiance_01.png/revision/latest',
            desc: 'La forma más poderosa y rápida de El Resplandor, prueba final tras vencer a más de 40 jefes consecutivos.',
            combat: 'Seis fases ininterrumpidas con patrones superpuestos y una fase final aérea de máxima tensión.',
            attacks: 'Láseres acelerados, lluvias de espadas superpuestas, orbes rápidos y ascenso bajo fuego continuo.',
            rewards: 'Final "Aceptar el Vacío" (Embrace the Void).'
        },

        // ENEMIGOS COMUNES Y ESPECIALES (CLARAMENTE SEPARADOS DE JEFES)
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO COMÚN',
            name: 'Reptador (Crawlid)',
            location: 'Cruces Olvidados y Pasaje del Rey',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5b/B_Crawlid.png/revision/latest',
            desc: 'Pequeño insecto carroñero cubierto de cerdas que patrulla lentamente las cavernas superiores.',
            combat: 'Enemigo introductorio; no persigue al jugador y sirve para aprender el alcance básico del aguijón.',
            attacks: 'Solo daño por contacto mientras camina.',
            rewards: 'Geo básico y Alma.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO COMÚN',
            name: 'Cáscara Errante (Wandering Husk)',
            location: 'Cruces Olvidados y Sendero Verde',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/e/ec/B_Wandering_Husk.png/revision/latest',
            desc: 'Restos de antiguos ciudadanos comunes de Hallownest cuyas mentes fueron tomadas por la Infección.',
            combat: 'Se abalanza de forma errática al detectar al Caballero a corta distancia.',
            attacks: 'Carrera corta hacia delante.',
            rewards: 'Geo y entrada del Diario del Cazador.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO COMÚN',
            name: 'Musguito (Mosskin)',
            location: 'Sendero Verde',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/4/47/B_Mosskin.png/revision/latest',
            desc: 'Criatura vegetal cubierta de hojas que vaga por los bosques de Sendero Verde.',
            combat: 'Acorta distancia rápidamente en cuanto divisa a un intruso.',
            attacks: 'Carga rápida terrestre.',
            rewards: 'Geo y Alma.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Baldur Anciano (Elder Baldur)',
            location: 'Cruces Olvidados, Sendero Verde y Acantilados',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/52/B_Elder_Baldur.png/revision/latest',
            desc: 'Enorme criatura acorazada que se enrolla en su caparazón impenetrable cuando te acercas.',
            combat: 'Funciona como puerta natural temprana: requiere usar hechizos a distancia (Espíritu Vengativo) para derrotarlo.',
            attacks: 'Escupe bolas ácidas y Baldurs rodantes cuando mantiene distancia.',
            rewards: 'Desbloquea el paso hacia Sendero Verde y otras cámaras secretas.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Tuercealmas (Soul Twister)',
            location: 'Santuario de Almas (Ciudad de Lágrimas)',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b6/B_Soul_Twister.png/revision/latest',
            desc: 'Erudito corrompido del Santuario capaz de canalizar Alma robada.',
            combat: 'Uno de los enemigos normales más peligrosos del tramo medio gracias a sus teletransportes.',
            attacks: 'Teletransporte continuo y orbes de Alma teledirigidos.',
            rewards: 'Geo abundante y Alma.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Devoto Acechador (Stalking Devout)',
            location: 'Nido Profundo',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/0/09/B_Stalking_Devout.png/revision/latest',
            desc: 'Guardián arácnido acorazado que patrulla los túneles angostos hacia la Guarida de la Bestia.',
            combat: 'Bloquea ataques frontales con su máscara; solo es vulnerable cuando abre sus fauces justo antes de embestir.',
            attacks: 'Corte doble de gran alcance que inflige 2 máscaras de daño.',
            rewards: 'Geo elevado.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Áspid Primigenio (Primal Aspid)',
            location: 'Bordes del Reino y Coliseo',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/3/39/B_Pirmal_Aspid.png/revision/latest',
            desc: 'Variedad ancestral y temida de áspid volador, célebre en la comunidad por su puntería letal.',
            combat: 'Mantiene siempre una distancia incómoda en el aire mientras dispara proyectiles en abanico.',
            attacks: 'Triple disparo simultáneo de infección en ángulo abierto.',
            rewards: 'Geo y experiencia de supervivencia en el Coliseo.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Imitador de Larva (Grub Mimic)',
            location: 'Nido Profundo y Coliseo',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/5/54/B_Grub_Mimic.png/revision/latest',
            desc: 'Depredador subterráneo que imita la apariencia y el llanto de una larva atrapada en un frasco.',
            combat: 'Al romper el frasco se transforma bruscamente en una criatura de múltiples patas; el Aguijón Onírico delata sus pensamientos falsos antes de abrirlo.',
            attacks: 'Embestida veloz y saltos agresivos.',
            rewards: 'Geo y entrada especial en el Diario del Cazador.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Guardián de la Colmena (Hive Guardian)',
            location: 'La Colmena',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f1/B_Hive_Guardian.png/revision/latest',
            desc: 'Gigantesca abeja obrera cuya fuerza física puede destrozar paredes de miel selladas.',
            combat: 'Al caer en picada destruye muros agrietados de la Colmena, revelando atajos y un Fragmento de Máscara.',
            attacks: 'Carga aérea pesada de 2 máscaras de daño.',
            rewards: 'Geo y apertura de muros secretos.'
        },
        {
            category: 'enemigos',
            categoryLabel: 'ENEMIGO ESPECIAL',
            name: 'Hermano (Sibling)',
            location: 'El Abismo',
            img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b3/B_Sibling.png/revision/latest',
            desc: 'Sombras inquietas de las vasijas descartadas que vagan eternamente por El Abismo.',
            combat: 'Atacan al contacto hasta que el Caballero obtiene el Corazón del Vacío, momento en que se vuelven pacíficos.',
            attacks: 'Persecución flotante a través de paredes y plataformas.',
            rewards: 'Entrada clave de lore en el Diario del Cazador.'
        }
    ];

    // =========================================================================
    // 5. SECCIÓN 06: AMULETOS (45 OFICIALES), HABILIDADES, HECHIZOS Y OBJETOS
    // =========================================================================
    const charmsData = [
        { esp: 'Brújula Caprichosa', en: 'Wayward Compass', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7d/Wayward_Compass.png/revision/latest', effect: 'Muestra la ubicación exacta del Caballero en el mapa.', location: 'Tienda de Iselda (Bocasucia) — 220 Geo.' },
        { esp: 'Enjambre Recolector', en: 'Gathering Swarm', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/8a/Gathering_Swarm.png/revision/latest', effect: 'Un enjambre recoge automáticamente todo el Geo cercano.', location: 'Tienda de Sly (Bocasucia) — 300 Geo.' },
        { esp: 'Coraza Robusta', en: 'Stalwart Shell', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f2/Stalwart_Shell.png/revision/latest', effect: 'Aumenta el tiempo de invulnerabilidad tras recibir daño.', location: 'Tienda de Sly (Bocasucia) — 200 Geo.' },
        { esp: 'Atrapaalmas', en: 'Soul Catcher', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/ca/Soul_Catcher.png/revision/latest', effect: 'Incrementa la cantidad de Alma obtenida al golpear con el aguijón.', location: 'Montículo Ancestral (Cruces Olvidados).' },
        { esp: 'Piedra de Chamán', en: 'Shaman Stone', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5e/Shaman_Stone.png/revision/latest', effect: 'Aumenta drásticamente el daño y el tamaño de todos los hechizos.', location: 'Tienda de Salubra (Cruces Olvidados) — 220 Geo.' },
        { esp: 'Devoraalmas', en: 'Soul Eater', notch: 4, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/6c/Soul_Eater.png/revision/latest', effect: 'Genera una gran cantidad adicional de Alma por cada golpe.', location: 'Criptas de Tierras de Descanso (detrás de un muro rompible).' },
        { esp: 'Maestro de las Embestidas', en: 'Dashmaster', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/70/Dashmaster.png/revision/latest', effect: 'Reduce el enfriamiento del dash y permite embestir hacia abajo.', location: 'Páramos Fungales (bajo la Aldea Mantis).' },
        { esp: 'Maestro de Sprint', en: 'Sprintmaster', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/e/e9/Sprintmaster.png/revision/latest', effect: 'Aumenta la velocidad al correr del Caballero (DLC Grimm Troupe).', location: 'Tienda de Sly (con Llave del Tendero) — 400 Geo.' },
        { esp: 'Canción de Larvas', en: 'Grubsong', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/78/Grubsong.png/revision/latest', effect: 'Otorga Alma cada vez que recibes daño.', location: 'Padre Larva tras rescatar 10 larvas.' },
        { esp: 'Elegía de la Larvamosca', en: 'Grubberfly’s Elegy', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/bd/Grubberfly%27s_Elegy.png/revision/latest', effect: 'Dispara haces de luz con el aguijón mientras tengas la salud completa.', location: 'Padre Larva tras rescatar las 46 larvas.' },
        { esp: 'Corazón Frágil', en: 'Fragile Heart', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/13/Fragile_Heart.png/revision/latest', effect: 'Añade 2 máscaras extra de vida. Se rompe si mueres.', location: 'Comedor de Piernas (Páramos Fungales) — 350 Geo.' },
        { esp: 'Corazón Inquebrantable', en: 'Unbreakable Heart', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/15/Unbreakable_Heart.png/revision/latest', effect: 'Versión permanente de Corazón Frágil que nunca se rompe.', location: 'Divine (The Grimm Troupe) — 12.000 Geo.' },
        { esp: 'Codicia Frágil', en: 'Fragile Greed', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b6/Fragile_Greed.png/revision/latest', effect: 'Los enemigos sueltan más Geo al morir. Se rompe si mueres.', location: 'Comedor de Piernas (Páramos Fungales) — 250 Geo.' },
        { esp: 'Codicia Inquebrantable', en: 'Unbreakable Greed', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2a/Unbreakable_Greed.png/revision/latest', effect: 'Versión permanente de Codicia Frágil.', location: 'Divine (The Grimm Troupe) — 9.000 Geo.' },
        { esp: 'Fuerza Frágil', en: 'Fragile Strength', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7b/Fragile_Strength.png/revision/latest', effect: 'Aumenta un 50% el daño del aguijón. Se rompe si mueres.', location: 'Comedor de Piernas (Páramos Fungales) — 600 Geo.' },
        { esp: 'Fuerza Inquebrantable', en: 'Unbreakable Strength', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/a/ac/Unbreakable_Strength.png/revision/latest', effect: 'Aumenta un 50% el daño del aguijón de forma permanente.', location: 'Divine (The Grimm Troupe) — 15.000 Geo.' },
        { esp: 'Tuercehechizos', en: 'Spell Twister', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/3/33/Spell_Twister.png/revision/latest', effect: 'Reduce el coste de Alma de los hechizos (de 33 a 24).', location: 'Santuario de Almas (sala secreta antes del Maestro de Almas).' },
        { esp: 'Cuerpo Firme', en: 'Steady Body', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f5/Steady_Body.png/revision/latest', effect: 'Elimina el retroceso al golpear enemigos con el aguijón.', location: 'Tienda de Salubra — 120 Geo.' },
        { esp: 'Golpe Pesado', en: 'Heavy Blow', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f6/Heavy_Blow.png/revision/latest', effect: 'Aumenta el empuje del aguijón y aturde antes a los jefes.', location: 'Tienda de Sly (con Llave del Tendero) — 350 Geo.' },
        { esp: 'Corte Rápido', en: 'Quick Slash', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5f/Quick_Slash.png/revision/latest', effect: 'Permite atacar con el aguijón a una velocidad mucho mayor.', location: 'Bordes del Reino (cámara subterránea cerca de la cabaña de Oro).' },
        { esp: 'Aguijón Largo', en: 'Longnail', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d1/Longnail.png/revision/latest', effect: 'Aumenta un 15% el alcance del aguijón.', location: 'Tienda de Salubra — 300 Geo.' },
        { esp: 'Marca del Orgullo', en: 'Mark of Pride', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/69/Mark_of_Pride.png/revision/latest', effect: 'Aumenta un 25% el alcance del aguijón.', location: 'Tesoro de la Aldea Mantis (tras vencer a los Señores Mantis).' },
        { esp: 'Furia de los Caídos', en: 'Fury of the Fallen', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4f/Fury_of_the_Fallen.png/revision/latest', effect: 'Aumenta un 75% el daño del aguijón cuando solo queda 1 máscara de vida.', location: 'Pasaje del Rey (cámara sobre espinas al inicio del juego).' },
        { esp: 'Espinas de Agonía', en: 'Thorns of Agony', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/8f/Thorns_of_Agony.png/revision/latest', effect: 'Al recibir daño, brotan espinas alrededor que hieren a enemigos cercanos.', location: 'Sendero Verde (laberinto de espinas).' },
        { esp: 'Coraza de Baldur', en: 'Baldur Shell', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/21/Baldur_Shell.png/revision/latest', effect: 'Crea un escudo que bloquea hasta 4 golpes mientras te curas con Foco.', location: 'Acantilados Aulladores (cofre al sur en el túnel desde Sendero Verde).' },
        { esp: 'Nido de Trematodos', en: 'Flukenest', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/79/Flukenest.png/revision/latest', effect: 'Transforma Espíritu Vengativo / Alma Sombría en una ráfaga de crías explosivas.', location: 'Derrotando a Flukemarm en Canales Reales.' },
        { esp: 'Emblema del Defensor', en: 'Defender’s Crest', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/56/Defender%27s_Crest.png/revision/latest', effect: 'Emite una nube olorosa que daña enemigos cercanos y desbloquea interacciones únicas.', location: 'Derrotando al Defensor del Estiércol (Canales Reales).' },
        { esp: 'Útero Brillante', en: 'Glowing Womb', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c6/Glowing_Womb.png/revision/latest', effect: 'Consume Alma para generar crías voladoras que explotan contra enemigos.', location: 'Cruces Olvidados (cámara secreta al este del Falso Caballero).' },
        { esp: 'Concentración Rápida', en: 'Quick Focus', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/6a/Quick_Focus.png/revision/latest', effect: 'Duplica la velocidad de curación al canalizar Foco.', location: 'Tienda de Salubra — 800 Geo.' },
        { esp: 'Concentración Profunda', en: 'Deep Focus', notch: 4, img: 'https://static.wikia.nocookie.net/hollowknight/images/e/ea/Deep_Focus.png/revision/latest', effect: 'Ralentiza la curación pero restaura 2 máscaras por el mismo coste de Alma.', location: 'Pico de Cristal (caverna cristalina oculta).' },
        { esp: 'Corazón de Savia Vital', en: 'Lifeblood Heart', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7c/Lifeblood_Heart.png/revision/latest', effect: 'Otorga 2 máscaras azules de Savia Vital al descansar en un banco.', location: 'Tienda de Salubra — 250 Geo.' },
        { esp: 'Núcleo de Savia Vital', en: 'Lifeblood Core', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/81/Lifeblood_Core.png/revision/latest', effect: 'Otorga 4 máscaras azules de Savia Vital al descansar.', location: 'Cámara de Savia Vital en El Abismo (requiere 14+ máscaras azules para abrirla).' },
        { esp: 'Bendición de Joni', en: 'Joni’s Blessing', notch: 4, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/67/Joni%27s_Blessing.png/revision/latest', effect: 'Aumenta un 40% la vida máxima y la convierte toda en Savia Vital (no se puede curar con Foco).', location: 'Reposo de Joni (Acantilados Aulladores).' },
        { esp: 'Sangre de Colmena', en: 'Hiveblood', notch: 4, img: 'https://static.wikia.nocookie.net/hollowknight/images/e/eb/Hiveblood.png/revision/latest', effect: 'Regenera automáticamente la última máscara de vida perdida tras unos segundos sin recibir daño.', location: 'La Colmena (cámara tras vencer al Caballero Colmena).' },
        { esp: 'Hongo con Esporas', en: 'Spore Shroom', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/78/Spore_Shroom.png/revision/latest', effect: 'Libera una nube de esporas dañinas al curarte y permite entender al Señor Seta.', location: 'Páramos Fungales (cerca del acceso a Jardines de la Reina).' },
        { esp: 'Sombra Afilada', en: 'Sharp Shadow', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/13/Sharp_Shadow.png/revision/latest', effect: 'Al atravesar enemigos con la Capa Sombría les inflige daño y extiende el alcance del dash.', location: 'Nido Profundo (detrás de una barrera de sombra cerca de la Fuente Termal).' },
        { esp: 'Forma de Unn', en: 'Shape of Unn', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b4/Shape_of_Unn.png/revision/latest', effect: 'Te permite moverte en forma de pequeña babosa mientras canalizas Foco.', location: 'Lago de Unn en Sendero Verde (requiere Lágrima de Isma).' },
        { esp: 'Gloria del Maestro del Aguijón', en: 'Nailmaster’s Glory', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0f/Nailmaster%27s_Glory.png/revision/latest', effect: 'Reduce drásticamente el tiempo de carga de las Artes del Aguijón.', location: 'Regalo de Sly tras aprender las tres Artes del Aguijón.' },
        { esp: 'Portador Onírico', en: 'Dream Wielder', notch: 1, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/94/Dream_Wielder.png/revision/latest', effect: 'Acelera el golpe del Aguijón Onírico y duplica el Alma obtenida al usarlo.', location: 'La Vidente (Tierras de Descanso) al reunir 500 de Esencia.' },
        { esp: 'Escudo Onírico', en: 'Dreamshield', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/4/47/Dreamshield.png/revision/latest', effect: 'Un escudo orbita al Caballero bloqueando proyectiles y dañando enemigos.', location: 'Tierras de Descanso (bajo la sala de la Vidente).' },
        { esp: 'Canción de Tejedora', en: 'Weaversong', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/26/Weaversong.png/revision/latest', effect: 'Invoca tres pequeñas tejedoras que atacan automáticamente a los enemigos.', location: 'Guarida de Tejedoras (Nido Profundo).' },
        { esp: 'Niño de Grimm', en: 'Grimmchild', notch: 2, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/91/Grimmchild.png/revision/latest', effect: 'Compañero volador que dispara llamas y evoluciona durante el Ritual de Grimm.', location: 'Entregado por Grimm al iniciar The Grimm Troupe.' },
        { esp: 'Melodía Despreocupada', en: 'Carefree Melody', notch: 3, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c4/Carefree_Melody.png/revision/latest', effect: 'Otorga una probabilidad acumulativa de anular completamente un golpe recibido.', location: 'Entregado por Nymm en Bocasucia tras desterrar a la Compañía de Grimm.' },
        { esp: 'Alma del Rey', en: 'Kingsoul', notch: 5, img: 'https://static.wikia.nocookie.net/hollowknight/images/3/34/Kingsoul.png/revision/latest', effect: 'Regenera Alma lentamente de forma pasiva y abre el camino al Lugar de Nacimiento.', location: 'Unir las dos mitades (Dama Blanca y Palacio Blanco).' },
        { esp: 'Corazón del Vacío', en: 'Void Heart', notch: 0, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/bb/Void_Heart.png/revision/latest', effect: 'Reemplaza permanentemente al Alma del Rey. Unifica el Vacío y desbloquea los finales verdaderos.', location: 'El Abismo (Lugar de Nacimiento, llevando Alma del Rey).' }
    ];

    const abilitiesData = [
        { name: 'Capa de Ala de Polilla (Mothwing Cloak)', type: 'MOVIMIENTO', img: 'https://static.wikia.nocookie.net/hollowknight/images/8/87/Icon_HK_Mothwing_Cloak_Art.png/revision/latest', desc: 'Permite realizar una embestida rápida (dash) en el suelo o en el aire para esquivar ataques y cruzar abismos.', location: 'Sendero Verde (tras vencer a Hornet Protectora).' },
        { name: 'Garra de Mantis (Mantis Claw)', type: 'MOVIMIENTO', img: 'https://static.wikia.nocookie.net/hollowknight/images/b/be/Icon_HK_Mantis_Claw_Art.png/revision/latest', desc: 'Permite deslizarse por paredes verticales y saltar desde ellas, abriendo la exploración vertical de todo el reino.', location: 'Aldea Mantis (Páramos Fungales).' },
        { name: 'Corazón de Cristal (Crystal Heart)', type: 'MOVIMIENTO', img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7c/Icon_HK_Crystal_Heart_Art.png/revision/latest', desc: 'Canaliza energía cristalina para propulsarse horizontalmente a gran velocidad en línea recta (Superdash).', location: 'Pico de Cristal.' },
        { name: 'Alas de Monarca (Monarch Wings)', type: 'MOVIMIENTO', img: 'https://static.wikia.nocookie.net/hollowknight/images/e/ea/Icon_HK_Monarch_Wings_Art.png/revision/latest', desc: 'Otorga un segundo salto en el aire (doble salto), indispensable para alcanzar zonas elevadas y esquivar jefes.', location: 'Cuenca Antigua (tras vencer a Vasija Rota).' },
        { name: 'Lágrima de Isma (Isma’s Tear)', type: 'EXPLORACIÓN', img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a7/Icon_HK_Isma%27s_Tears_Art.png/revision/latest', desc: 'Protege al Caballero contra los lagos de ácido, permitiéndole nadar libremente en ellos sin sufrir daño.', location: 'Arboleda de Isma (Canales Reales).' },
        { name: 'Capa Sombría (Shade Cloak)', type: 'MOVIMIENTO AVANZADO', img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0f/Icon_HK_Shade_Cloak_Art.png/revision/latest', desc: 'Mejora la Capa de Ala de Polilla para atravesar enemigos, proyectiles y Barreras de Sombra sin recibir daño.', location: 'El Abismo (requiere Marca del Rey).' },
        { name: 'Gran Corte (Great Slash)', type: 'ARTE DEL AGUIJÓN', img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a7/Icon_HK_Great_Slash_Art.png/revision/latest', desc: 'Concentra energía para desatar un enorme corte frontal de gran alcance que inflige 2.5x el daño del aguijón.', location: 'Maestro Pintor Sheo (Sendero Verde).' },
        { name: 'Corte Ciclónico (Cyclone Slash)', type: 'ARTE DEL AGUIJÓN', img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f3/Icon_HK_Cyclone_Slash_Art.png/revision/latest', desc: 'Ataque giratorio continuo que golpea repetidamente a ambos lados y ralentiza la caída en el aire.', location: 'Maestro Mato (Acantilados Aulladores).' },
        { name: 'Corte Veloz (Dash Slash)', type: 'ARTE DEL AGUIJÓN', img: 'https://static.wikia.nocookie.net/hollowknight/images/3/3a/Icon_HK_Dash_Slash_Art.png/revision/latest', desc: 'Ejecuta un corte horizontal de alcance extraordinario inmediatamente después de una embestida.', location: 'Maestro Oro (Bordes del Reino — 800 Geo).' }
    ];

    const spellsUpgradesData = [
        { name: 'Espíritu Vengativo (Vengeful Spirit)', type: 'HECHIZO BASE', img: 'https://static.wikia.nocookie.net/hollowknight/images/6/66/Icon_HK_Vengeful_Spirit_Art.png/revision/latest', desc: 'Dispara un proyectil horizontal de Alma que atraviesa enemigos y rompe defensas como la del Baldur Anciano.', location: 'Chamán Caracol en el Montículo Ancestral.' },
        { name: 'Alma Sombría (Shade Soul)', type: 'HECHIZO MEJORADO', img: 'https://static.wikia.nocookie.net/hollowknight/images/3/34/Icon_HK_Shade_Soul_Art.png/revision/latest', desc: 'Versión infundida de Vacío de Espíritu Vengativo: atraviesa paredes, es más ancha e inflige mayor daño.', location: 'Santuario de Almas (cámara cerrada con la Llave Elegante).' },
        { name: 'Inmersión Desoladora (Desolate Dive)', type: 'HECHIZO BASE', img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d0/Icon_HK_Desolate_Dive_Art.png/revision/latest', desc: 'Se lanza contra el suelo generando una onda expansiva capaz de romper pisos agrietados y otorgar breves frames de invulnerabilidad.', location: 'Derrotando al Maestro de Almas (Ciudad de Lágrimas).' },
        { name: 'Oscuridad Descendente (Descending Dark)', type: 'HECHIZO MEJORADO', img: 'https://static.wikia.nocookie.net/hollowknight/images/5/51/Icon_HK_Descending_Dark_Art.png/revision/latest', desc: 'Versión de Vacío de Inmersión Desoladora: genera una doble explosión devastadora con mayor invulnerabilidad.', location: 'Montículo Cristalizado (Pico de Cristal).' },
        { name: 'Espectros Aulladores (Howling Wraiths)', type: 'HECHIZO BASE', img: 'https://static.wikia.nocookie.net/hollowknight/images/1/18/Icon_HK_Howling_Wraiths_Art.png/revision/latest', desc: 'Desata un estallido ascendente de Alma sobre el Caballero que golpea varias veces a enemigos aéreos.', location: 'Montículo Cubierto de Maleza (Cañón de la Niebla).' },
        { name: 'Chillido del Abismo (Abyss Shriek)', type: 'HECHIZO MEJORADO', img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f6/Icon_HK_Abyss_Shriek_Art.png/revision/latest', desc: 'El hechizo más poderoso del juego: un grito de Vacío ascendente de daño masivo.', location: 'Sala de las Voces en El Abismo (usando Espectros Aulladores en el pedestal).' },
        { name: 'Aguijón y sus 5 Niveles (Nail Upgrades)', type: 'ARMA PRINCIPAL', img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4a/Nail_5_Pure_Nail.png/revision/latest', desc: 'Evoluciona en el taller del Forjaguijones: Aguijón Viejo (5 daño) → Afilado (9) → Espiralado (13) → En Espiral / Channeled (17) → Aguijón Puro (21 daño).', location: 'Forjaguijones (oeste de Ciudad de Lágrimas) usando Geo y Mineral Pálido.' },
        { name: 'Mineral Pálido (Pale Ore)', type: 'MATERIAL DE FORJA', img: 'https://static.wikia.nocookie.net/hollowknight/images/e/eb/Pale_Ore.png/revision/latest', desc: 'Metal raro y helado necesario para forjar las tres mejoras superiores del Aguijón. Existen exactamente 6 en todo Hallownest.', location: 'Cuenca Antigua, Corona de Hallownest, La Vidente (300 Esencia), Padre Larva (31 larvas), Guarida de Nosk y Prueba del Conquistador.' }
    ];

    const itemsData = [
        { name: 'Aguijón Onírico (Dream Nail)', type: 'RELÍQUIA ONÍRICA', img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a2/Icon_HK_Dream_Nail.png/revision/latest', desc: 'Corta el velo entre el mundo físico y los sueños: lee pensamientos de NPCs y enemigos, recolecta Esencia y permite enfrentar jefes oníricos.', location: 'Tierras de Descanso (santuario de los Soñadores).' },
        { name: 'Aguijón Onírico Despertado', type: 'MEJORA ONÍRICA', img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b0/Icon_HK_Awoken_Dream_Nail.png/revision/latest', desc: 'Versión despertada del Aguijón Onírico capaz de penetrar incluso los sueños más protegidos, como la entrada al Palacio Blanco.', location: 'La Vidente al reunir 1.800 de Esencia.' },
        { name: 'Portal Onírico (Dreamgate)', type: 'VIAJE RÁPIDO', img: 'https://static.wikia.nocookie.net/hollowknight/images/3/34/Icon_HK_Dreamgate.png/revision/latest', desc: 'Coloca una puerta onírica en el suelo para regresar instantáneamente desde casi cualquier zona gastando 1 de Esencia.', location: 'La Vidente al reunir 900 de Esencia (Pack Hidden Dreams).' },
        { name: 'Fragmentos de Máscara (Mask Shards)', type: 'MEJORA DE VIDA', img: 'https://static.wikia.nocookie.net/hollowknight/images/2/20/Ancient_Mask.png/revision/latest', desc: 'Existen 16 fragmentos repartidos por el reino; cada 4 fragmentos aumentan permanentemente la vida máxima en 1 máscara.', location: 'Tiendas, jefes opcionales, larvas y salas ocultas.' },
        { name: 'Fragmentos de Vasija (Vessel Fragments)', type: 'MEJORA DE ALMA', img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4c/Soul_Vessel.png/revision/latest', desc: 'Existen 9 fragmentos; cada 3 añaden una vasija secundaria para almacenar reservas adicionales de Alma.', location: 'Sly, Fuente de los Deseos, Vidente, Estación del Rey y exploración.' },
        { name: 'Llaves de Hallownest', type: 'ACCESO', img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f3/Simple_Key.png/revision/latest', desc: 'Incluye 4 Llaves Simples (Jiji, Canales Reales, Casa del Placer y Godseeker), la Llave del Tendero (amplía el inventario de Sly), la Llave Elegante (Alma Sombría) y la Llave del Amor (Torre del Amor).', location: 'Sly, Pico de Cristal, Jardines de la Reina, Ciudad de Lágrimas y Coliseo.' },
        { name: 'Linterna Lumafly (Lumafly Lantern)', type: 'EXPLORACIÓN', img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5f/Lumafly_Lantern.png/revision/latest', desc: 'Ilumina cuevas oscuras como Nido Profundo, el Santuario de Piedra y el túnel hacia Pico de Cristal.', location: 'Tienda de Sly (Bocasucia) — 1.800 Geo.' },
        { name: 'Pase de Tranvía (Tram Pass)', type: 'TRANSPORTE', img: 'https://static.wikia.nocookie.net/hollowknight/images/6/69/Tram_Pass.png/revision/latest', desc: 'Activa tanto el Tranvía Superior (Cruces Olvidados ↔ Tierras de Descanso) como el Tranvía Inferior (Nido Profundo ↔ Cuenca Antigua ↔ Bordes del Reino).', location: 'Tranvía Fallido (Nido Profundo).' },
        { name: 'Marca del Rey (King’s Brand)', type: 'OBJETO DE HISTORIA', img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9d/King%27s_Brand.png/revision/latest', desc: 'Sello real que declara al portador soberano de Hallownest y abre la gigantesca puerta sellada hacia El Abismo.', location: 'Coraza Desechada (Bordes del Reino, tras vencer a Hornet Centinela).' },
        { name: 'Flor Delicada (Delicate Flower)', type: 'MISIÓN ESPECIAL', img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7e/Delicate_Flower.png/revision/latest', desc: 'Flor pálida extremadamente frágil que se destruye si recibes daño o usas ciervocamino. También puede entregarse a Elderbug, Oro o la Buscadora de Dioses.', location: 'Doliente Gris (Tierras de Descanso).' },
        { name: 'Sintonizador de Dioses (Godtuner)', type: 'GODMASTER', img: 'https://static.wikia.nocookie.net/hollowknight/images/9/92/Godtuner.png/revision/latest', desc: 'Dispositivo dorado que resuena con los seres poderosos de Hallownest y registra los jefes afinados para el Hogar de los Dioses.', location: 'Fosa de Basura (Canales Reales, al liberar a la Buscadora de Dioses).' },
        { name: 'Mapas y Pluma (Maps & Quill)', type: 'CARTOGRAFÍA', img: 'https://static.wikia.nocookie.net/hollowknight/images/2/25/Map_Icon.png/revision/latest', desc: 'Los mapas de Cornifer muestran el esqueleto de cada región; la Pluma de Iselda actualiza automáticamente las salas nuevas al descansar en un banco.', location: 'Cornifer (en cada bioma) e Iselda (Bocasucia).' },
        { name: 'Reliquias de Hallownest', type: 'LORE & GEO', img: 'https://static.wikia.nocookie.net/hollowknight/images/3/38/Hallownest_Seal.png/revision/latest', desc: 'Cuatro tipos de objetos históricos intercambiables por Geo y lore con Lemm: Diario del Errante (200), Sello de Hallownest (450), Ídolo del Rey (800) y Huevo Arcano (1.200).', location: 'Escondidos por todo el reino; vendidos en Ciudad de Lágrimas.' }
    ];

    // =========================================================================
    // 6. SECCIÓN 07: CARTOGRAFÍA INTERACTIVA DE HALLOWNEST
    // =========================================================================
    const mapRegionsData = [
        {
            id: 'map-dirtmouth',
            name: 'Bocasucia y Acantilados Aulladores',
            zone: 'Superficie Norte',
            connections: 'Pozo hacia Cruces Olvidados · Ascensor desde Pico de Cristal · Ciervocamino central.',
            pois: 'Tiendas de Iselda y Sly, Elderbug, Carpa de Grimm, Reposo de Joni y la Linterna de Pesadilla.',
            transport: 'Estación de Ciervo de Bocasucia (desbloqueada desde el inicio tras hallar otra estación).'
        },
        {
            id: 'map-crossroads',
            name: 'Cruces Olvidados (Forgotten Crossroads)',
            zone: 'Núcleo Superior',
            connections: 'Bocasucia · Sendero Verde · Páramos Fungales · Pico de Cristal · Ciudad de Lágrimas · Tierras de Descanso.',
            pois: 'Templo del Huevo Negro, Falso Caballero, Montículo Ancestral, Padre Larva, Salubra y Madre Gruz.',
            transport: 'Estación de Ciervo · Tranvía Superior hacia Tierras de Descanso · Ascensor hacia Ciudad de Lágrimas.'
        },
        {
            id: 'map-greenpath',
            name: 'Sendero Verde y Jardines de la Reina',
            zone: 'Ala Occidental',
            connections: 'Cruces Olvidados · Cañón de la Niebla · Páramos Fungales · Nido Profundo.',
            pois: 'Hornet Protectora, Lago de Unn, Santuario de Piedra, Refugio de la Dama Blanca y Señor Traidor.',
            transport: 'Estaciones de Ciervo de Sendero Verde y Jardines de la Reina.'
        },
        {
            id: 'map-city',
            name: 'Ciudad de Lágrimas y Canales Reales',
            zone: 'Centro del Reino',
            connections: 'Páramos Fungales · Cruces Olvidados · Tierras de Descanso · Bordes del Reino · Cuenca Antigua.',
            pois: 'Forjaguijones, Santuario de Almas, Torre del Vigía (Lurien), Torre del Amor, Fosa de Basura (Godhome) y Arboleda de Isma.',
            transport: 'Dos Estaciones de Ciervo (Almacenes y Estación del Rey) y dos grandes ascensores verticales.'
        },
        {
            id: 'map-peak',
            name: 'Pico de Cristal y Tierras de Descanso',
            zone: 'Sector Noreste',
            connections: 'Cruces Olvidados · Bocasucia · Ciudad de Lágrimas · Lago Azul.',
            pois: 'Corazón de Cristal, Corona de Hallownest, Aguijón Onírico, La Vidente, Claro de los Espíritus y Doliente Gris.',
            transport: 'Estación de Ciervo de Tierras de Descanso · Tranvía Superior · Ascensor hacia Ciudad de Lágrimas.'
        },
        {
            id: 'map-deep',
            name: 'Nido Profundo, Cuenca Antigua y El Abismo',
            zone: 'Profundidades del Sur',
            connections: 'Páramos Fungales · Jardines de la Reina · Canales Reales · Bordes del Reino.',
            pois: 'Pueblo Distante (Herrah), Tranvía Fallido, Vasija Rota, Palacio Blanco (onírico), Capa Sombría y Lugar de Nacimiento.',
            transport: 'Estación del Pueblo Distante · Estación Oculta (Hidden Dreams) · Tranvía Inferior.'
        },
        {
            id: 'map-edge',
            name: 'Bordes del Reino y La Colmena',
            zone: 'Frontera Oriental',
            connections: 'Estación del Rey (Ciudad de Lágrimas) · Cuenca Antigua (por Tranvía Inferior).',
            pois: 'Coliseo de los Insensatos, Hornet Centinela, Coraza Desechada (Marca del Rey), Cabaña de Oro y Caballero Colmena.',
            transport: 'Acceso mediante Tranvía Inferior y pasaje inundado desde la Estación del Rey.'
        }
    ];

    // =========================================================================
    // 7. SECCIÓN 08: BANDA SONORA Y DISEÑO SONORO (CHRISTOPHER LARKIN)
    // =========================================================================
    const musicData = {
        albums: [
            {
                title: 'Hollow Knight (Original Soundtrack)',
                year: '2017 · 26 pistas',
                cover: 'assets/images/music/hk-ost-cover.jpg',
                desc: 'Partitura principal grabada con piano, cuerdas, viola y sintetizadores ambientales. Cada bioma posee un leitmotiv que evoluciona dinámicamente al entrar en combate.',
                highlights: ['Dirtmouth — piano solitario y melancólico', 'Greenpath — cuerdas orgánicas y flauta serena', 'City of Tears — coros etéreos bajo la lluvia', 'Mantis Lords — clavecín y cuerdas de duelo noble', 'Sealed Vessel — clímax trágico con el tema principal']
            },
            {
                title: 'Hollow Knight: Gods & Nightmares',
                year: '2018 · 15 pistas',
                cover: 'assets/images/music/gods-nightmares-cover.jpg',
                desc: 'Álbum oficial dedicado a los Content Packs gratuitos, desde el órgano gótico de Grimm hasta la épica orquestal de los Panteones.',
                highlights: ['The Grimm Troupe — vals gótico y órgano', 'Nightmare King — rock sinfónico frenético', 'Hive Knight — percusión ágil y violines', 'Pure Vessel — versión solemne y grandiosa de Sealed Vessel', 'Daughter of Hallownest — tema especial de Hornet']
            }
        ],
        soundDesign: [
            { title: 'Capas Dinámicas de Acción', desc: 'En zonas como Sendero Verde o Ciudad de Lágrimas, la música añade percusión y cuerdas tensas de forma imperceptible cuando entras en combate y vuelve a la calma al terminar.' },
            { title: 'El Silencio como Herramienta', desc: 'Regiones como Nido Profundo o El Abismo reducen la música al mínimo para que resalten pasos, chasquidos de insectos, viento y ecos subterráneos.' },
            { title: 'Audio Táctil en Combate', desc: 'Cada golpe de aguijón, choque metálico (parry), acumulación de Alma o señal vocal de Hornet y Grimm comunica información jugable en milisegundos.' }
        ]
    };

    // =========================================================================
    // RENDERIZADO DE TODAS LAS SECCIONES
    // =========================================================================
    function renderCharacters() {
        const grid = document.getElementById('characters-grid');
        if (!grid) return;
        grid.innerHTML = charactersData.map(ch => `
            <article class="glass-card char-card reveal" id="char-${ch.id}">
                <div class="char-img-wrap">
                    ${imgTag(ch.img, ch.name, 'char-img zoomable-img', true)}
                </div>
                <div class="char-body">
                    <div class="card-meta">${ch.meta}</div>
                    <h3>${ch.name}</h3>
                    <p>${ch.desc}</p>
                    <p class="char-relevance"><strong>Relevancia:</strong> ${ch.relevance}</p>
                    ${ch.spoiler ? `
                        <div class="spoiler-box">
                            <button type="button" class="spoiler-toggle" aria-expanded="false">⚠ Mostrar spoiler de historia</button>
                            <p class="spoiler-content" hidden>${ch.spoiler}</p>
                        </div>
                    ` : ''}
                </div>
            </article>
        `).join('');
    }

    function renderExpansions() {
        const grid = document.getElementById('expansions-grid');
        if (!grid) return;
        grid.innerHTML = expansionsData.map(exp => `
            <article class="dlc-card glass-panel reveal" id="dlc-${exp.id}">
                <div class="dlc-media">
                    ${imgTag(exp.img, `Expansión gratuita ${exp.name}`, 'dlc-img zoomable-img', true)}
                    <div class="dlc-media-badges">
                        <span class="mono-tag">${exp.number}</span>
                        <span class="dlc-date-pill">${exp.date}</span>
                    </div>
                </div>
                <div class="dlc-content">
                    <span class="mono-label dlc-free-tag">${exp.tag}</span>
                    <h3>${exp.name}</h3>
                    <p class="dlc-desc">${exp.desc}</p>
                    <div class="dlc-details-grid">
                        <div class="dlc-detail-block">
                            <span class="mono-label">JEFES INCORPORADOS / RELACIONADOS</span>
                            <ul>${exp.bosses.map(b => `<li>${b}</li>`).join('')}</ul>
                        </div>
                        <div class="dlc-detail-block">
                            <span class="mono-label">PERSONAJES RELEVANTES</span>
                            <ul>${exp.characters.map(c => `<li>${c}</li>`).join('')}</ul>
                        </div>
                        <div class="dlc-detail-block">
                            <span class="mono-label">OBJETOS Y ELEMENTOS AÑADIDOS</span>
                            <ul>${exp.items.map(i => `<li>${i}</li>`).join('')}</ul>
                        </div>
                    </div>
                    <div class="dlc-footer-notes">
                        <p><strong>Mecánicas destacadas:</strong> ${exp.mechanics}</p>
                        <p><strong>Zonas y contenido adicional:</strong> ${exp.zones}</p>
                    </div>
                </div>
            </article>
        `).join('');
    }

    // BIOMAS & CONCEPT ART (CONSERVANDO FILTROS ORIGINALES + IMÁGENES REALES)
    const artGrid = document.getElementById('art-grid');
    const filterButtons = document.querySelectorAll('#arte .filter-btn');

    function renderArtCards(filter = 'all') {
        if (!artGrid) return;
        artGrid.innerHTML = '';
        const filtered = filter === 'all'
            ? artArchiveData
            : artArchiveData.filter(item => item.category === filter);

        filtered.forEach(item => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.id = `biome-${item.id}`;
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Inspeccionar ${item.title}`);
            card.innerHTML = `
                <div class="art-banner" style="background: ${item.gradient};">
                    ${imgTag(item.img, item.title, 'art-banner-img')}
                    <div class="art-banner-scrim"></div>
                    <span class="mono-tag art-banner-tag">${item.categoryLabel}</span>
                    <span class="art-sigil" aria-hidden="true">${item.sigil}</span>
                </div>
                <div class="art-content">
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.summary}</p>
                    </div>
                    <span class="art-inspect">VER QUÉ ENCONTRAR Y DETALLES →</span>
                </div>
            `;

            card.addEventListener('click', () => openModal(item));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(item);
                }
            });

            artGrid.appendChild(card);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderArtCards(btn.dataset.filter);
        });
    });

    // MODAL DE BIOMAS (CON IMAGEN AMPLIADA Y DETALLES COMPLETOS)
    const modal = document.getElementById('art-modal');
    const modalClose = document.getElementById('modal-close');
    const modalVisual = document.getElementById('modal-visual');
    const modalCategory = document.getElementById('modal-category');
    const modalPalette = document.getElementById('modal-palette');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalNote = document.getElementById('modal-note');

    function openModal(item) {
        modalVisual.style.background = item.gradient;
        modalVisual.innerHTML = `
            ${imgTag(item.img, item.title, 'modal-biome-img zoomable-img', true)}
            <span class="modal-zoom-hint">Clic en la imagen para ampliar</span>
        `;
        modalCategory.textContent = item.categoryLabel;
        modalPalette.textContent = `PALETA: ${item.palette}`;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.summary;
        modalNote.innerHTML = `
            <div class="modal-detail-row"><strong>Ambientación visual:</strong> ${item.visualFeatures}</div>
            <div class="modal-detail-row"><strong>Qué encontrar:</strong> ${item.techNote}</div>
            <div class="modal-detail-row"><strong>Personajes, enemigos y jefes:</strong> ${item.entities}</div>
        `;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (!lightbox || !lightbox.classList.contains('open')) {
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // SECCIÓN 05: JEFES Y ENEMIGOS
    const bossesGrid = document.getElementById('bosses-grid');
    const bossFilterBtns = document.querySelectorAll('.boss-filter-btn');

    function renderBosses(category = 'all') {
        if (!bossesGrid) return;
        const list = category === 'all'
            ? bossesEnemiesData
            : bossesEnemiesData.filter(b => b.category === category);

        bossesGrid.innerHTML = list.map((b, idx) => `
            <article class="glass-card boss-card" id="boss-${idx}">
                <div class="boss-img-wrap">
                    ${imgTag(b.img, b.name, 'boss-img zoomable-img', true)}
                    <span class="mono-tag boss-cat-badge">${b.categoryLabel}</span>
                </div>
                <div class="boss-body">
                    <div class="card-meta">📍 ${b.location}</div>
                    <h3>${b.name}</h3>
                    <p>${b.desc}</p>
                    <ul class="boss-specs">
                        <li><span>Combate:</span> ${b.combat}</li>
                        <li><span>Ataques:</span> ${b.attacks}</li>
                        <li><span>Recompensa:</span> ${b.rewards}</li>
                    </ul>
                </div>
            </article>
        `).join('');
    }

    bossFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            bossFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBosses(btn.dataset.cat);
        });
    });

    // SECCIÓN 06: AMULETOS, HABILIDADES, HECHIZOS Y OBJETOS
    const arsenalGrid = document.getElementById('arsenal-grid');
    const arsenalTabs = document.querySelectorAll('.arsenal-tab-btn');
    const charmSubFilter = document.getElementById('charm-subfilter');
    const charmNotchFilter = document.getElementById('charm-notch-filter');
    const charmLocalSearch = document.getElementById('charm-local-search');
    let currentArsenalTab = 'amuletos';

    function renderArsenal(tab = currentArsenalTab) {
        if (!arsenalGrid) return;
        currentArsenalTab = tab;

        if (charmSubFilter) {
            charmSubFilter.style.display = tab === 'amuletos' ? 'flex' : 'none';
        }

        if (tab === 'amuletos') {
            const notchVal = charmNotchFilter ? charmNotchFilter.value : 'all';
            const q = charmLocalSearch ? charmLocalSearch.value.trim().toLowerCase() : '';
            const filtered = charmsData.filter(c => {
                const matchNotch = notchVal === 'all' || String(c.notch) === notchVal;
                const matchQ = !q || c.esp.toLowerCase().includes(q) || c.en.toLowerCase().includes(q) || c.effect.toLowerCase().includes(q) || c.location.toLowerCase().includes(q);
                return matchNotch && matchQ;
            });

            if (!filtered.length) {
                arsenalGrid.innerHTML = '<p class="empty-state">No se encontraron amuletos con ese filtro.</p>';
                return;
            }

            arsenalGrid.className = 'arsenal-grid charms-layout';
            arsenalGrid.innerHTML = filtered.map(c => `
                <article class="glass-card charm-card">
                    <div class="charm-top">
                        <div class="charm-icon-wrap">
                            ${imgTag(c.img, `${c.esp} (${c.en})`, 'charm-icon zoomable-img', true)}
                        </div>
                        <div class="charm-title-wrap">
                            <h3>${c.esp}</h3>
                            <span class="charm-en">${c.en}</span>
                        </div>
                        <span class="notch-badge" title="Coste en muescas">${c.notch} ${c.notch === 1 ? 'muesca' : 'muescas'}</span>
                    </div>
                    <p class="charm-effect">${c.effect}</p>
                    <div class="charm-loc mono-label">📍 ${c.location}</div>
                </article>
            `).join('');
            return;
        }

        const sourceMap = {
            habilidades: abilitiesData,
            hechizos: spellsUpgradesData,
            objetos: itemsData
        };
        const items = sourceMap[tab] || [];
        arsenalGrid.className = 'arsenal-grid items-layout';
        arsenalGrid.innerHTML = items.map(it => `
            <article class="glass-card item-card">
                <div class="item-head">
                    <div class="item-icon-wrap">
                        ${imgTag(it.img, it.name, 'item-icon zoomable-img', true)}
                    </div>
                    <div>
                        <span class="mono-tag">${it.type}</span>
                        <h3>${it.name}</h3>
                    </div>
                </div>
                <p>${it.desc}</p>
                <div class="charm-loc mono-label">📍 ${it.location}</div>
            </article>
        `).join('');
    }

    arsenalTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            arsenalTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderArsenal(btn.dataset.tab);
        });
    });
    if (charmNotchFilter) charmNotchFilter.addEventListener('change', () => renderArsenal('amuletos'));
    if (charmLocalSearch) charmLocalSearch.addEventListener('input', () => renderArsenal('amuletos'));

    // SECCIÓN 07: CARTOGRAFÍA INTERACTIVA DE HALLOWNEST
    const mapRegionButtons = document.getElementById('map-region-buttons');
    const mapRegionDetail = document.getElementById('map-region-detail');

    function renderMapRegions() {
        if (!mapRegionButtons || !mapRegionDetail) return;
        mapRegionButtons.innerHTML = mapRegionsData.map((r, i) => `
            <button type="button" class="filter-btn map-region-btn ${i === 0 ? 'active' : ''}" data-region-idx="${i}">
                ${r.name}
            </button>
        `).join('');

        function showRegion(idx) {
            const r = mapRegionsData[idx];
            if (!r) return;
            mapRegionDetail.innerHTML = `
                <span class="mono-tag">${r.zone}</span>
                <h3>${r.name}</h3>
                <div class="map-detail-grid">
                    <div>
                        <span class="mono-label">CONEXIONES DIRECTAS</span>
                        <p>${r.connections}</p>
                    </div>
                    <div>
                        <span class="mono-label">PUNTOS DE INTERÉS E HISTORIA</span>
                        <p>${r.pois}</p>
                    </div>
                    <div>
                        <span class="mono-label">TRANSPORTE Y ACCESOS</span>
                        <p>${r.transport}</p>
                    </div>
                </div>
            `;
        }

        mapRegionButtons.querySelectorAll('.map-region-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                mapRegionButtons.querySelectorAll('.map-region-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                showRegion(Number(btn.dataset.regionIdx));
            });
        });

        showRegion(0);
    }

    // SECCIÓN 08: BANDA SONORA Y DISEÑO SONORO
    function renderMusic() {
        const albumsContainer = document.getElementById('ost-albums');
        const soundContainer = document.getElementById('sound-design-grid');
        if (albumsContainer) {
            albumsContainer.innerHTML = musicData.albums.map(alb => `
                <article class="glass-card album-card reveal">
                    <div class="album-cover-wrap">
                        ${imgTag(alb.cover, alb.title, 'album-cover zoomable-img', true)}
                    </div>
                    <div class="album-body">
                        <span class="mono-label">${alb.year}</span>
                        <h3>${alb.title}</h3>
                        <p>${alb.desc}</p>
                        <ul class="track-list">
                            ${alb.highlights.map(t => `<li><span class="track-bullet">♫</span>${t}</li>`).join('')}
                        </ul>
                    </div>
                </article>
            `).join('');
        }
        if (soundContainer) {
            soundContainer.innerHTML = musicData.soundDesign.map(s => `
                <article class="glass-card sound-card reveal">
                    <h4>${s.title}</h4>
                    <p>${s.desc}</p>
                </article>
            `).join('');
        }
    }

    // =========================================================================
    // 8. LIGHTBOX UNIVERSAL PARA AMPLIAR IMÁGENES
    // =========================================================================
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(src, caption) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = caption || 'Imagen ampliada';
        lightboxImg.onerror = () => { lightboxImg.src = FALLBACK_IMG; };
        if (lightboxCaption) lightboxCaption.textContent = caption || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        if (!modal || !modal.classList.contains('open')) {
            document.body.style.overflow = '';
        }
    }

    document.addEventListener('click', (e) => {
        // Toggle de spoilers
        const spBtn = e.target.closest('.spoiler-toggle');
        if (spBtn) {
            const box = spBtn.closest('.spoiler-box');
            const content = box ? box.querySelector('.spoiler-content') : null;
            if (content) {
                const isHidden = content.hasAttribute('hidden');
                if (isHidden) {
                    content.removeAttribute('hidden');
                    spBtn.setAttribute('aria-expanded', 'true');
                    spBtn.textContent = 'Ocultar spoiler';
                } else {
                    content.setAttribute('hidden', '');
                    spBtn.setAttribute('aria-expanded', 'false');
                    spBtn.textContent = '⚠ Mostrar spoiler de historia';
                }
            }
            return;
        }

        // Lightbox de imágenes con clase zoomable-img
        const img = e.target.closest('.zoomable-img');
        if (img) {
            e.stopPropagation();
            const src = img.dataset.zoomSrc || img.src;
            const cap = img.dataset.zoomCaption || img.alt;
            openLightbox(src, cap);
        }
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('open')) {
                closeLightbox();
            } else if (modal && modal.classList.contains('open')) {
                closeModal();
            } else if (searchResultsBox) {
                searchResultsBox.hidden = true;
            }
        }
    });

    // =========================================================================
    // 9. BUSCADOR GENERAL DEL ARCHIVO
    // =========================================================================
    const globalSearchInput = document.getElementById('global-search');
    const searchResultsBox = document.getElementById('search-results');

    function buildSearchIndex() {
        const index = [];
        charactersData.forEach(c => index.push({
            title: c.name, type: 'Personaje', snippet: c.desc, section: '#historia', targetId: `char-${c.id}`
        }));
        expansionsData.forEach(e => index.push({
            title: e.name, type: 'Expansión Gratuita', snippet: e.desc, section: '#expansiones', targetId: `dlc-${e.id}`
        }));
        artArchiveData.forEach(b => index.push({
            title: b.title, type: 'Bioma / Arte', snippet: b.summary, section: '#arte', biomeItem: b
        }));
        bossesEnemiesData.forEach(b => index.push({
            title: b.name, type: b.categoryLabel, snippet: `${b.location} — ${b.desc}`, section: '#jefes', bossCat: b.category
        }));
        charmsData.forEach(c => index.push({
            title: `${c.esp} (${c.en})`, type: `Amuleto · ${c.notch} muescas`, snippet: c.effect, section: '#arsenal', arsenalTab: 'amuletos', charmQuery: c.esp
        }));
        abilitiesData.forEach(a => index.push({
            title: a.name, type: 'Habilidad', snippet: a.desc, section: '#arsenal', arsenalTab: 'habilidades'
        }));
        spellsUpgradesData.forEach(s => index.push({
            title: s.name, type: 'Hechizo / Mejora', snippet: s.desc, section: '#arsenal', arsenalTab: 'hechizos'
        }));
        itemsData.forEach(i => index.push({
            title: i.name, type: 'Objeto Clave', snippet: i.desc, section: '#arsenal', arsenalTab: 'objetos'
        }));
        mapRegionsData.forEach(m => index.push({
            title: m.name, type: 'Cartografía', snippet: m.pois, section: '#mapa'
        }));
        index.push({
            title: 'Christopher Larkin & Banda Sonora', type: 'Música', snippet: 'Compositor de Hollow Knight, Gods & Nightmares y Silksong.', section: '#musica'
        });
        index.push({
            title: 'Hollow Knight: Silksong & Pharloom', type: 'Universo / Secuela', snippet: 'Hornet, nuevo reino de Pharloom, herramientas y seda.', section: '#silksong'
        });
        return index;
    }

    const searchIndex = buildSearchIndex();

    function handleSearch(query) {
        if (!searchResultsBox) return;
        const q = query.trim().toLowerCase();
        if (q.length < 2) {
            searchResultsBox.hidden = true;
            searchResultsBox.innerHTML = '';
            return;
        }

        const matches = searchIndex.filter(entry =>
            entry.title.toLowerCase().includes(q) ||
            entry.type.toLowerCase().includes(q) ||
            entry.snippet.toLowerCase().includes(q)
        ).slice(0, 10);

        searchResultsBox.hidden = false;

        if (!matches.length) {
            searchResultsBox.innerHTML = `<div class="search-empty">Sin coincidencias para "<strong>${escapeAttr(query)}</strong>". Prueba con Hornet, Grimm, Abismo, Brújula o Silksong.</div>`;
            return;
        }

        searchResultsBox.innerHTML = matches.map((m, i) => `
            <button type="button" class="search-result-item" data-match-idx="${i}">
                <div class="search-res-top">
                    <span class="search-res-title">${m.title}</span>
                    <span class="mono-tag">${m.type}</span>
                </div>
                <span class="search-res-snippet">${m.snippet.slice(0, 95)}${m.snippet.length > 95 ? '…' : ''}</span>
            </button>
        `).join('');

        searchResultsBox.querySelectorAll('.search-result-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = matches[Number(btn.dataset.matchIdx)];
                searchResultsBox.hidden = true;
                if (globalSearchInput) globalSearchInput.value = '';

                if (item.biomeItem) {
                    document.querySelector('#arte')?.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => openModal(item.biomeItem), 300);
                    return;
                }
                if (item.bossCat) {
                    bossFilterBtns.forEach(b => b.classList.toggle('active', b.dataset.cat === item.bossCat));
                    renderBosses(item.bossCat);
                }
                if (item.arsenalTab) {
                    arsenalTabs.forEach(b => b.classList.toggle('active', b.dataset.tab === item.arsenalTab));
                    if (item.charmQuery && charmLocalSearch) charmLocalSearch.value = item.charmQuery;
                    renderArsenal(item.arsenalTab);
                }
                const targetEl = item.targetId ? document.getElementById(item.targetId) : document.querySelector(item.section);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetEl.classList.add('search-highlight');
                    setTimeout(() => targetEl.classList.remove('search-highlight'), 1800);
                }
            });
        });
    }

    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
        document.addEventListener('click', (e) => {
            if (searchResultsBox && !e.target.closest('.nav-search-wrap')) {
                searchResultsBox.hidden = true;
            }
        });
    }

    // =========================================================================
    // INICIALIZACIÓN DE RENDERIZADO
    // =========================================================================
    renderCharacters();
    renderExpansions();
    renderArtCards('all');
    renderBosses('all');
    renderArsenal('amuletos');
    renderMapRegions();
    renderMusic();

    // =========================================================================
    // NAVEGACIÓN MÓVIL, DROPDOWN Y SCROLL (CONSERVANDO LÓGICA ORIGINAL)
    // =========================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen);
        });
    }

    document.querySelectorAll('.nav-item, .dropdown-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Reveal seguro: nunca deja contenido atascado en opacity: 0
    const revealElements = document.querySelectorAll('.reveal');
    function showVisibleElements() {
        const triggerBottom = window.innerHeight * 0.96;
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom || window.scrollY === 0) {
                el.classList.remove('pending-reveal');
            }
        });
    }

    if ('IntersectionObserver' in window) {
        revealElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                const rect = el.getBoundingClientRect();
                if (rect.top > window.innerHeight * 0.9) {
                    el.classList.add('pending-reveal');
                }
            }
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('pending-reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.01 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
        showVisibleElements();
    }, { passive: true });

    window.addEventListener('hashchange', () => {
        revealElements.forEach(el => el.classList.remove('pending-reveal'));
    });

    // =========================================================================
    // PARTÍCULAS AMBIENTALES (ORIGINAL CONSERVADO)
    // =========================================================================
    const canvas = document.getElementById('soul-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function initParticles() {
            particles = [];
            const count = Math.min(40, Math.floor(window.innerWidth / 30));
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 0.6,
                    speedY: -(Math.random() * 0.35 + 0.12),
                    speedX: (Math.random() - 0.5) * 0.25,
                    alpha: Math.random() * 0.5 + 0.15,
                    isInfection: Math.random() > 0.85
                });
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;

                if (p.y < -10) {
                    p.y = canvas.height + 10;
                    p.x = Math.random() * canvas.width;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.isInfection
                    ? `rgba(255, 107, 43, ${p.alpha})`
                    : `rgba(124, 232, 255, ${p.alpha})`;
                ctx.fill();
            });
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
            showVisibleElements();
        });

        resizeCanvas();
        initParticles();
        animateParticles();
    }
});
