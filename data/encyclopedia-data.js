// =============================================================================
// HALLOWNEST ARCHIVE — DATOS DE ENCICLOPEDIA (PARTE 1)
// Personajes Ampliados (43), Coleccionables y Misiones, Civilizaciones, Mecánicas
// =============================================================================
window.HK_ENCYCLOPEDIA_DATA = window.HK_ENCYCLOPEDIA_DATA || {};

// -----------------------------------------------------------------------------
// 1. ENCICLOPEDIA COMPLETA DE PERSONAJES (COMPLEMENTA LAS 11 FICHAS EXISTENTES)
// Sin duplicar: El Caballero, Hornet, Hollow Knight, Rey Pálido, Resplandor,
// Quirrel, Cornifer, Zote, Monomon, Lurien, Herrah.
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.extendedCharacters = [
  {
    id: 'elderbug', name: 'Bicho Viejo (Elderbug)', category: 'habitantes', categoryLabel: 'Habitante · Bocasucia',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5b/Elderbug_Circle-2.png/revision/latest',
    location: 'Bocasucia (junto al banco central)',
    history: 'El residente más antiguo y fiel de Bocasucia. Ha visto marcharse a casi todos los vecinos hacia las ruinas del pozo sin regresar jamás.',
    personality: 'Melancólico, cortés, hospitalario y prudente; disfruta conversando con los viajeros que descansan en la superficie.',
    function: 'Actúa como guía contextual temprano, comentando las regiones que visitas, los habitantes que llegan al pueblo y la llegada de la Compañía de Grimm.',
    relations: 'Observa con aprecio a Cornifer, Iselda, Sly y Bretta; desconfía profundamente de la Compañía de Grimm.',
    importance: 'Representa el corazón humano y nostálgico de Bocasucia. Si le regalas una Flor Delicada, se llena de alegría y la conserva junto a sí.',
    dialogue: '"Quizá los sueños no sean tan malos después de todo..." (al recibir la Flor Delicada).'
  },
  {
    id: 'iselda', name: 'Iselda', category: 'comerciantes', categoryLabel: 'Comerciante · Cartografía',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/b/bb/Iselda_Circle.png/revision/latest',
    location: 'Bocasucia (Tienda de Mapas)',
    history: 'Antigua guerrera que abandonó las armas para llevar una vida tranquila junto a su esposo, el cartógrafo Cornifer.',
    personality: 'Práctica, tranquila y ligeramente fatigada de pasar horas atendiendo el mostrador mientras espera el regreso de Cornifer.',
    function: 'Vende mapas que no compraste a Cornifer, la Pluma, la Brújula Caprichosa, pines de banco/ciervo y los marcadores de colores añadidos en Lifeblood.',
    relations: 'Esposa de Cornifer. Siente cierto respeto nostálgico por el arte del combate.',
    importance: 'Pieza esencial de la progresión cartográfica de Hallownest.',
    dialogue: '"Bapanada." — Su célebre suspiro al recibir clientes.'
  },
  {
    id: 'sly', name: 'Sly', category: 'comerciantes', categoryLabel: 'Comerciante · Sabio del Aguijón',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a5/Sly_Circle.png/revision/latest',
    location: 'Cruces Olvidados (rescate) → Bocasucia (Tienda)',
    history: 'Antes de abrir su tienda fue el legendario Gran Sabio del Aguijón, mentor de Oro, Mato y Sheo.',
    personality: 'Astuto, obsesionado con el Geo y de trato brusco pero generoso con quienes dominan el aguijón.',
    function: 'Vende la Linterna Lumafly, Llaves, Fragmentos de Máscara y Vasija, y amuletos; entrega la Gloria del Maestro del Aguijón al aprender las 3 Artes.',
    relations: 'Maestro de Oro, Mato y Sheo. En Godmaster espera en la cima del Panteón del Sabio.',
    importance: 'Conecta el comercio temprano con la tradición marcial más alta del reino.',
    dialogue: '"Patamas Geo." — Al invitar a gastar en su tienda.',
    bestiaryId: 'great-nailsage-sly'
  },
  {
    id: 'salubra', name: 'Salubra, Amante de los Amuletos', category: 'comerciantes', categoryLabel: 'Comerciante · Amuletos',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/27/Salubra_Circle.png/revision/latest',
    location: 'Cruces Olvidados (extremo sureste, sobre el Lago Azul)',
    history: 'Extravagante estudiosa fascinada por el poder arcano y la belleza de los amuletos forjados a partir de últimos deseos.',
    personality: 'Exuberante, ruidosa, afectuosa y apasionada por su colección.',
    function: 'Vende amuletos clave (Piedra de Chamán, Concentración Rápida, Aguijón Largo), 4 Muescas de Amuleto y la Bendición de Salubra al reunir los 40 amuletos.',
    relations: 'Mantiene admiración profesional por los antiguos creadores de amuletos.',
    importance: 'Fuente principal de Muescas de Amuleto y conocimiento sobre su origen.',
    dialogue: 'Su risa inconfundible acompaña la recarga automática de Alma en los bancos tras obtener su Bendición.'
  },
  {
    id: 'nailsmith', name: 'Forjaguijones (Nailsmith)', category: 'comerciantes', categoryLabel: 'Artesano · Ciudad de Lágrimas',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/4/48/Nailsmith_Circle.png/revision/latest',
    location: 'Ciudad de Lágrimas (extremo oeste) → Cabaña de Sheo (opcional)',
    history: 'Maestro herrero que dedicó toda su vida a un único anhelo: forjar un Aguijón Puro perfecto.',
    personality: 'Serio, melancólico y absorbido por su oficio.',
    function: 'Mejora el aguijón del Caballero en 4 etapas usando Geo y Mineral Pálido hasta lograr el Aguijón Puro.',
    relations: 'Si le perdonas la vida tras forjar el Aguijón Puro, viaja a Sendero Verde y forma una feliz pareja creativa junto al Maestro Pintor Sheo.',
    importance: 'Protagoniza una de las decisiones morales más emotivas del juego (logros Pureza vs Pareja Feliz).',
    dialogue: '"He cumplido el propósito de mi vida... córtame con él." (si decides no hacerlo, halla un nuevo propósito en el arte).'
  },
  {
    id: 'lemm', name: 'Buscador de Reliquias Lemm', category: 'comerciantes', categoryLabel: 'Erudito · Comerciante',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/1/14/Lemm_Circle.png/revision/latest',
    location: 'Ciudad de Lágrimas (oeste, junto a la fuente del Hollow Knight)',
    history: 'Historiador y anticuario que permanece en la capital lluviosa estudiando las reliquias del pasado de Hallownest.',
    personality: 'Culto, irónico, algo gruñón y escéptico ante la nostalgia exagerada por el antiguo reino.',
    function: 'Compra Diarios del Errante, Sellos de Hallownest, Ídolos del Rey y Huevos Arcanos a cambio de Geo y fragmentos de historia.',
    relations: 'Desprecia el hedor si te acercas con el Emblema del Defensor equipado, negándose incluso a comerciar.',
    importance: 'Principal fuente viva de contexto histórico sobre el funcionamiento civil de Hallownest.',
    dialogue: '"Velmi artrid." — Explica con detalle la antigüedad de cada reliquia que le vendes.'
  },
  {
    id: 'seer', name: 'La Vidente (The Seer)', category: 'lore', categoryLabel: 'Última de la Tribu Polilla',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a6/Seer_Circle.png/revision/latest',
    location: 'Tierras de Descanso',
    history: 'Última superviviente de la antigua tribu de las polillas, que nació de la luz de El Resplandor y luego la abandonó por el Rey Pálido.',
    personality: 'Sabia, serena, cargada de remordimiento ancestral y compasiva con el Caballero.',
    function: 'Entrega el Aguijón Onírico, el Portal Onírico (900 Esencia), el Aguijón Onírico Despertado (1800 Esencia) y recompensas de progreso.',
    relations: 'Guarda la memoria de su tribu y confiesa el pecado de haber olvidado a El Resplandor.',
    importance: 'Clave narrativa que explica el verdadero origen de la Infección. Al alcanzar 2400 Esencia asciende y desaparece en paz.',
    dialogue: '"No olvides... jamás vuelvas a olvidar."'
  },
  {
    id: 'white-lady', name: 'La Dama Blanca (White Lady)', category: 'lore', categoryLabel: 'Ser Superior · Reina',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9c/White_Lady_Circle.png/revision/latest',
    location: 'Jardines de la Reina (Refugio oculto tras el Señor Traidor)',
    history: 'Antigua reina de Hallownest, consorte del Rey Pálido y madre biológica de las incontables Vasijas arrojadas al Abismo.',
    personality: 'Compasiva, resignada y consumida por la culpa; se ató voluntariamente con raíces para frenar su constante impulso de engendrar.',
    function: 'Entrega la primera mitad del Amuleto del Rey (Fragmento Blanco) y ofrece diálogos únicos sobre los amuletos y los Cinco Grandes Caballeros.',
    relations: 'Esposa del Rey Pálido, protegida en su retiro por Dryya hasta la muerte de esta.',
    importance: 'Confirma el origen de las Vasijas, la naturaleza de Hornet y el destino de Hallownest.',
    dialogue: '"Si logras reemplazarlo, quizá este reino pueda descansar al fin."'
  },
  {
    id: 'the-hunter', name: 'El Cazador (The Hunter)', category: 'aliados', categoryLabel: 'Ermitaño · Autor del Diario',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/9/96/Hunter_Circle.png/revision/latest',
    location: 'Sendero Verde (Guarida oculta)',
    history: 'Enorme y solitario depredador que ha pasado toda su vida acechando y catalogando a cada criatura de las cavernas.',
    personality: 'Feroz, solitario, filosófico a su manera y secretamente anhelante de un igual.',
    function: 'Entrega el Diario del Cazador y, al completar las 146 especies base, otorga la Marca del Cazador.',
    relations: 'Respeta profundamente a Hornet tras un breve encuentro en que ella lo hirió y escapó.',
    importance: 'Autor de la voz y las reflexiones que articulan todo el bestiario del juego.',
    dialogue: '"Demuestra que eres un verdadero Cazador y reclama mi marca."'
  },
  {
    id: 'ogrim-npc', name: 'Ogrim (Defensor del Estiércol)', category: 'aliados', categoryLabel: 'Gran Caballero · Aliado',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/5/57/Dung_Defender_Circle.png/revision/latest',
    location: 'Canales Reales',
    history: 'El más leal y alegre de los Cinco Grandes Caballeros de Hallownest. Permaneció custodiando los canales y la Arboleda de Isma tras la caída del reino.',
    personality: 'Caballeroso, optimista, ruidoso y nostálgico de sus antiguos camaradas.',
    function: 'Tras ser derrotado abre el paso a la Arboleda de Isma, conversa con el Caballero y puede ser desafiado en sueños como Defensor Blanco.',
    relations: 'Compañero de Dryya, Isma, Hegemol y Ze’mer; profesaba profundo afecto por Isma.',
    importance: 'Puente vivo hacia la memoria de los Cinco Grandes Caballeros.',
    dialogue: '"¡Doma, doma, doma!"',
    bestiaryId: 'dung-defender'
  },
  {
    id: 'cloth', name: 'Cloth', category: 'viajeros', categoryLabel: 'Viajera · Guerrera',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/28/Cloth_Circle-2.png/revision/latest',
    location: 'Páramos Fungales → Nido Profundo → Cuenca Antigua → Jardines de la Reina / Bocasucia',
    history: 'Cigarra errante que viajó a Hallownest buscando una muerte heroica en batalla para reunirse con su amada Nola.',
    personality: 'Jovial, valiente por fuera pero temerosa en el fondo, empeñada en vencer su propia cobardía.',
    function: 'Si la rescatas de los Mawleks en Cuenca Antigua, acude a luchar junto a ti contra el Señor Traidor.',
    relations: 'Siente admiración genuina por el valor silencioso del Caballero.',
    importance: 'Su arco tiene dos finales posibles: caer heroicamente derrotando al Señor Traidor (hallando paz como espíritu) o sobrevivir en Bocasucia si derrotas al jefe antes de salvarla.',
    dialogue: '"¡Esta vez no voy a acobardarme!"'
  },
  {
    id: 'tiso', name: 'Tiso', category: 'viajeros', categoryLabel: 'Viajero · Gladiador',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/9/92/Tiso_Circle.png/revision/latest',
    location: 'Bocasucia → Cruces Olvidados → Lago Azul → Coliseo → Bordes del Reino',
    history: 'Guerrero arrogante que acudió a Hallownest atraído únicamente por la gloria del Coliseo de los Insensatos.',
    personality: 'Orgulloso, impaciente y desdeñoso con los débiles, convencido de la superioridad de su misterioso escudo.',
    function: 'Personaje viajero recurrente cuya historia ilustra la brutalidad del Coliseo.',
    relations: 'Subestima al Caballero en cada encuentro.',
    importance: 'Su cadáver aparece más tarde en los riscos de Bordes del Reino bajo el Coliseo; en Godmaster, un Mawlek Incubador lo aplasta cómicamente antes de empezar el combate.',
    dialogue: '"¿Por qué pierdo el tiempo hablando con criaturas pálidas?"'
  },
  {
    id: 'bretta', name: 'Bretta', category: 'habitantes', categoryLabel: 'Habitante · Bocasucia',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/d/dd/Bretta_Circle.png/revision/latest',
    location: 'Páramos Fungales (rescate) → Bocasucia',
    history: 'Joven escarabajo que se perdió en los Páramos Fungales comenzando a sucumbir a la Infección antes de ser salvada por el Caballero.',
    personality: 'Tímida, romántica empedernida y soñadora.',
    function: 'Tras ser rescatada abre su casa en Bocasucia (donde hay un Fragmento de Máscara) y, si salvas a Zote, su sótano da acceso al Príncipe Gris Zote.',
    relations: 'Primero idealiza al Caballero, luego queda fascinada por las historias de Zote hasta desengañarse tras vencer al Príncipe Gris 4 veces.',
    importance: 'Detonante narrativo de la subtrama de Hidden Dreams en Bocasucia.',
    dialogue: 'Deja un diario personal que evoluciona a medida que avanza su historia.'
  },
  {
    id: 'myla', name: 'Myla', category: 'habitantes', categoryLabel: 'Minera · Pico de Cristal',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4f/Myla_Circle.png/revision/latest',
    location: 'Cruces Olvidados (entrada al Pico de Cristal)',
    history: 'Alegre y dulce minera que excavaba incansablemente buscando tesoros brillantes mientras cantaba.',
    personality: 'Optimista, soñadora y amable.',
    function: 'Refleja de forma íntima y desgarradora el avance progresivo de la Infección conforme consigues habilidades.',
    relations: 'Trata al Caballero como un amigo cercano desde el primer instante.',
    importance: 'Uno de los momentos más recordados del juego: conforme avanza la aventura sus canciones se distorsionan hasta perder su mente ante El Resplandor.',
    dialogue: '"Bury my mother, pale and slight..." — Su célebre canción minera.'
  },
  {
    id: 'last-stag', name: 'El Último Ciervo (Last Stag)', category: 'aliados', categoryLabel: 'Transporte · Último de su Especie',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f9/Stag_Circle.png/revision/latest',
    location: 'Todas las Estaciones de Ciervocamino',
    history: 'Anciano ciervo gigante que creía ser el último superviviente de los ciervos que transportaban ciudadanos por todo Hallownest.',
    personality: 'Noble, fiel a su deber, melancólico y profundamente agradecido por volver a recorrer los túneles.',
    function: 'Opera toda la red de viaje rápido entre las 10 Estaciones de Ciervocamino y, al abrirlas todas, lleva al Caballero al Nido de Ciervos.',
    relations: 'Conserva recuerdos vívidos de los ciudadanos de la capital, los Soñadores y las épocas prósperas del reino.',
    importance: 'Al hallar un huevo eclosionado en el Nido de Ciervos, renueva su esperanza (su nombre cambia a "Viejo Ciervo").',
    dialogue: '"Puede que no sea el último después de todo..."'
  },
  {
    id: 'grubfather', name: 'Padre Larva (Grubfather)', category: 'aliados', categoryLabel: 'Misión · Cruces Olvidados',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/a/ad/Grubfather_Circle.png/revision/latest',
    location: 'Cruces Olvidados (noroeste)',
    history: 'Patriarca de las 46 larvas que fueron capturadas y encerradas en frascos por El Coleccionista a lo largo de Hallownest.',
    personality: 'Emotivo, protector y extremadamente agradecido.',
    function: 'Entrega recompensas crecientes por cada larva rescatada: Geo, Fragmento de Máscara, Mineral Pálido, Canción de Larvas y Elegía de la Larvamosca.',
    relations: 'Padre de las 46 larvas. Al reunirlas a todas las acoge dentro de su vientre como capullo vivo para su metamorfosis en larvamoscas.',
    importance: 'Eje de la mayor misión de exploración coleccionable del juego (logro Metamorfosis).',
    dialogue: 'Llora de pena al principio y celebra con saltos cada rescate.'
  },
  {
    id: 'confessor-jiji', name: 'Confesora Jiji', category: 'habitantes', categoryLabel: 'Mística · Bocasucia',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9f/Jiji_Circle.png/revision/latest',
    location: 'Bocasucia (extremo este, tras puerta de Llave Simple)',
    history: 'Misteriosa ermitaña capaz de invocar "arrepentimientos" (la Sombra del Caballero) desde cualquier lugar del reino.',
    personality: 'Enigmática, serena y aficionada a los Huevos Podridos.',
    function: 'A cambio de 1 Huevo Podrido invoca instantáneamente tu Sombra en su cueva, evitando el riesgo de perder todo tu Geo en una zona peligrosa.',
    relations: 'En el modo Alma de Acero es reemplazada por Jinn Alma de Acero.',
    importance: 'Salva partidas y confirma la relación espiritual de las Sombras con los arrepentimientos.',
    dialogue: '"¿Has dejado un arrepentimiento en las profundidades?"'
  },
  {
    id: 'steel-soul-jinn', name: 'Jinn Alma de Acero', category: 'comerciantes', categoryLabel: 'Exclusiva · Modo Alma de Acero',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/f/fd/Jinn_Circle.png/revision/latest',
    location: 'Bocasucia (extremo este, solo en Modo Alma de Acero)',
    history: 'Entidad metálica misteriosa perteneciente a unos "amos" ajenos a Hallownest, presente únicamente cuando no existe la muerte repetida.',
    personality: 'Dócil, reverente y curiosa por los objetos orgánicos.',
    function: 'Intercambia cada Huevo Podrido por entre 290 y 449 Geo.',
    relations: 'Sirve a misteriosos amos de acero vinculados al mismo trasfondo que Jiji.',
    importance: 'Da utilidad económica a los Huevos Podridos en Modo Alma de Acero.',
    dialogue: '"Jinn tiene mucho Geo. A Jinn le gustan los huevos..."'
  },
  {
    id: 'tuk', name: 'Tuk', category: 'comerciantes', categoryLabel: 'Recolectora · Canales Reales',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/6/64/Tuk_Circle.png/revision/latest',
    location: 'Canales Reales (cámara oculta al este)',
    history: 'Recolectora solitaria que acumula desechos y huevos en un rincón escondido de los Canales Reales.',
    personality: 'Nerviosa, tímida y protectora de su pequeño tesoro.',
    function: 'Vende Huevos Podridos (entre 80 y 100 Geo) si tienes menos de 80 en el inventario; entrega uno gratis si llevas el Emblema del Defensor.',
    relations: 'Conoce y respeta a Ogrim (Defensor del Estiércol). En Modo Alma de Acero aparece ya fallecida.',
    importance: 'Fuente renovable de Huevos Podridos en partidas normales.',
    dialogue: '"¡Si eres amigo del defensor, Tuk te regala un huevo!"'
  },
  {
    id: 'leg-eater', name: 'Comedor de Piernas (Leg Eater)', category: 'comerciantes', categoryLabel: 'Comerciante · Páramos Fungales',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/3/32/Legeater_Circle.png/revision/latest',
    location: 'Páramos Fungales (norte)',
    history: 'Termita ciega y avariciosa que fabrica los tres amuletos frágiles y repara sus grietas a cambio de Geo.',
    personality: 'Obsesionado con el Geo, el poder y los aromas intensos.',
    function: 'Vende y repara Corazón Frágil, Codicia Frágil y Fuerza Frágil (ofrece 20% de descuento si llevas Emblema del Defensor).',
    relations: 'En The Grimm Troupe, tras mejorar los tres amuletos con Divine, viaja atraído por su aroma y es devorado por ella.',
    importance: 'Provee Fuerza Frágil, uno de los amuletos más influyentes en combates y speedruns.',
    dialogue: '"¿Quieres ver algo bonito? Muéstrame tu Geo..."'
  },
  {
    id: 'millibelle', name: 'Millibelle la Banquera', category: 'comerciantes', categoryLabel: 'Estafadora · Cañón de la Niebla',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a6/Millibelle_Circle.png/revision/latest',
    location: 'Cañón de la Niebla (Estación de la Reina) → Casa del Placer (Ciudad de Lágrimas)',
    history: 'Supuesta banquera que ofrece guardar hasta 4.500 Geo de forma "segura" para los viajeros.',
    personality: 'Dulce y profesional al inicio, aunque en realidad es una estafadora oportunista.',
    function: 'En cuanto depositas más de 2.550 Geo y descansas en un banco, huye con tu dinero a relajarse a las aguas termales de la Casa del Placer.',
    relations: 'Totalmente ajena a la tragedia del reino; solo piensa en disfrutar su botín.',
    importance: 'Al encontrarla en la Casa del Placer y golpearla, puedes recuperar aproximadamente 1.5x el Geo depositado.',
    dialogue: '"¡Geo, kalala!"'
  },
  {
    id: 'nailmaster-mato', name: 'Maestro del Aguijón Mato', category: 'maestros', categoryLabel: 'Maestro del Aguijón · Acantilados',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7b/Mato_Circle.png/revision/latest',
    location: 'Acantilados Aulladores',
    history: 'El más afectuoso y paternal de los tres hermanos entrenados por el Gran Sabio Sly.',
    personality: 'Cálido, orgulloso de sus discípulos y apasionado por la hermandad marcial.',
    function: 'Enseña gratuitamente el Arte del Aguijón Corte Ciclónico (Cyclone Slash).',
    relations: 'Hermano de Oro (con quien mantiene un distanciamiento) y Sheo; discípulo de Sly.',
    importance: 'Representa la transmisión generosa del arte marcial; lucha junto a Oro en Godmaster.',
    dialogue: '"Desde hoy eres mi discípulo y hermano del aguijón."',
    bestiaryId: 'oro-and-mato'
  },
  {
    id: 'nailmaster-oro', name: 'Maestro del Aguijón Oro', category: 'maestros', categoryLabel: 'Maestro del Aguijón · Bordes del Reino',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/5/52/Oro_Circle.png/revision/latest',
    location: 'Bordes del Reino (extremo sureste)',
    history: 'Hermano severo y solitario que se retiró a los confines más remotos del reino tras distanciarse de Mato.',
    personality: 'Seco, desconfiado y práctico, aunque en el fondo guarda respeto hacia el esfuerzo sincero.',
    function: 'Enseña el Arte del Aguijón Corte Veloz (Dash Slash) por 800 Geo.',
    relations: 'Hermano de Mato y Sheo. Si le entregas la Flor Delicada la acepta a regañadientes pero la coloca con cuidado en un jarrón.',
    importance: 'Junto a Mato protagoniza el primer Panteón del Hogar de los Dioses.',
    dialogue: '"800 Geo. Sin regateos."',
    bestiaryId: 'oro-and-mato'
  },
  {
    id: 'nailmaster-sheo', name: 'Maestro Pintor Sheo', category: 'maestros', categoryLabel: 'Maestro del Aguijón · Artista',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f2/Sheo_Circle.png/revision/latest',
    location: 'Sendero Verde (extremo suroeste)',
    history: 'El más talentoso de los tres hermanos, quien decidió colgar su aguijón para dedicarse a la pintura y la escultura.',
    personality: 'Pacífico, reflexivo, generoso y fascinado por crear en lugar de destruir.',
    function: 'Enseña gratuitamente el Gran Corte (Great Slash).',
    relations: 'Hermano de Oro y Mato. Si perdonas al Forjaguijones, ambos viven juntos pintando y esculpiendo en su cabaña.',
    importance: 'Demuestra que en Hallownest aún existe espacio para la belleza y la reinvención.',
    dialogue: '"Qué mayor alegría que crear algo hermoso."',
    bestiaryId: 'paintmaster-sheo'
  },
  {
    id: 'grimm-npc', name: 'Maestro de la Compañía Grimm', category: 'expansiones', categoryLabel: 'Expansión · The Grimm Troupe',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/3/32/Grimm_Circle.png/revision/latest',
    location: 'Bocasucia (Carpa principal de Grimm)',
    history: 'Recipiente y maestro de ceremonias del Corazón de la Pesadilla, viajando de reino caído en reino caído para perpetuar el Ritual de la Llama.',
    personality: 'Teatral, refinado, galante y profundamente enigmático.',
    function: 'Entrega el amuleto Niño de Grimm y encomienda recolectar llamas escarlata para culminar el Ritual.',
    relations: 'Líder de Brumm y Divine; vinculado simbólicamente al Corazón de la Pesadilla.',
    importance: 'Figura central del Content Pack The Grimm Troupe.',
    dialogue: '"¡Que comience la danza, pequeño amigo!"',
    bestiaryId: 'grimm'
  },
  {
    id: 'brumm', name: 'Brumm', category: 'expansiones', categoryLabel: 'Expansión · The Grimm Troupe',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c0/Brumm_Circle.png/revision/latest',
    location: 'Carpa de Grimm → Pueblo Distante (Nido Profundo) → Acantilados Aulladores',
    history: 'Músico acordeonista de la Compañía de Grimm, cansado de servir eternamente al ciclo sin fin del Ritual.',
    personality: 'Solemne, melancólico y rebelde en secreto.',
    function: 'Ofrece la ruta alternativa del destierro: destruir la Linterna de Pesadilla en Acantilados Aulladores para liberar a la Compañía.',
    relations: 'Sirve a Grimm a regañadientes; si destierras a la Compañía, reaparece libre en Bocasucia como Nymm.',
    importance: 'Encarna el conflicto moral de la expansión entre perpetuar el ritual o romper el ciclo.',
    dialogue: '"Nuestro maestro nunca conoce el final... pero tú podrías concedernos uno."'
  },
  {
    id: 'nymm', name: 'Nymm', category: 'expansiones', categoryLabel: 'Expansión · The Grimm Troupe',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4c/Nymm_Circle.png/revision/latest',
    location: 'Bocasucia (solo tras desterrar a la Compañía de Grimm)',
    history: 'Identidad libre y sin recuerdos de pesadilla que adopta Brumm al romperse la Linterna de Pesadilla.',
    personality: 'Alegre, relajado y amante de la música tranquila.',
    function: 'Entrega el amuleto Melodía Despreocupada (reemplazando al Niño de Grimm) y toca el acordeón en Bocasucia.',
    relations: 'Hace buena compañía a Bicho Viejo con su música.',
    importance: 'Recompensa exclusiva y símbolo de paz de la ruta del Destierro.',
    dialogue: '"Esta melodía me resulta tan familiar, aunque no sé de dónde viene."'
  },
  {
    id: 'divine', name: 'Divine', category: 'expansiones', categoryLabel: 'Expansión · The Grimm Troupe',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2c/Divine_Circle.png/revision/latest',
    location: 'Bocasucia (carpa pequeña junto a la de Grimm)',
    history: 'Colosal y voraz miembro de la Compañía de Grimm capaz de transformar amuletos frágiles en versiones inquebrantables mediante su metabolismo.',
    personality: 'Coqueta, hambrienta y obsesionada con los objetos frágiles y aromáticos.',
    function: 'Convierte Corazón Frágil (12.000 Geo), Codicia Frágil (9.000 Geo) y Fuerza Frágil (15.000 Geo) en Amuletos Inquebrantables.',
    relations: 'Devora al Comedor de Piernas si este acude a visitarla tras completar las tres mejoras.',
    importance: 'Esencial para llevar Fuerza y Corazón Inquebrantables al combate final y a los Panteones.',
    dialogue: '"¡Oh, qué aroma tan delicioso trae ese amuleto frágil!"'
  },
  {
    id: 'godseeker', name: 'Buscadora de Dioses (Godseeker)', category: 'expansiones', categoryLabel: 'Expansión · Godmaster',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0c/Godseeker_Cirle.png/revision/latest',
    location: 'Canales Reales (Fosa de Basura) y Hogar de los Dioses',
    history: 'Sacerdotisa llegada desde la Tierra de Tormentas tras perder a sus antiguos dioses del trueno y la lluvia, atraída por los ecos divinos de Hallownest.',
    personality: 'Altiva, devota, fanática y inicialmente despectiva hacia el Caballero hasta presenciar su poder en los Panteones.',
    function: 'Otorga el Sintonizador de Dioses y, al usar el Aguijón Onírico sobre ella, abre el acceso al Hogar de los Dioses y los 5 Panteones.',
    relations: 'Mente colectiva unida a los demás Buscadores de Dioses. Acepta la Flor Delicada, alterando el final de Godmaster.',
    importance: 'Catalizadora de los finales más trascendentales del juego en Godmaster.',
    dialogue: '"¡Insípido gusano! ¿Cómo osas entrar en el Hogar de los Dioses?"'
  },
  {
    id: 'grey-mourner', name: 'Doliente Gris (Ze’mer)', category: 'lore', categoryLabel: 'Gran Caballero · Misión',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2b/Grey_Mourner_Circle.png/revision/latest',
    location: 'Tierras de Descanso (mansión oculta)',
    history: 'Ze’mer, una de los Cinco Grandes Caballeros de Hallownest, llegada de tierras lejanas y consumida por el luto por su amada fallecida.',
    personality: 'Trágica, poética, abatida y aferrada a un único deseo final.',
    function: 'Encomienda llevar la Flor Delicada intacta hasta la tumba de la Hija del Traidor en los Jardines de la Reina sin recibir daño ni usar ciervos.',
    relations: 'Amada de la Hija del Señor Traidor Mantis; compañera de Ogrim, Dryya, Isma y Hegemol.',
    importance: 'Su misión recompensa con un Fragmento de Máscara y permite entregar flores a otros NPCs clave.',
    dialogue: '"Le’mer, por favor... lleva esta flor pálida a su tumba."'
  },
  {
    id: 'snail-shaman', name: 'Chamán Caracol', category: 'lore', categoryLabel: 'Hechicero · Montículo Ancestral',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0c/Snail_Shaman_Circle.png/revision/latest',
    location: 'Cruces Olvidados (Montículo Ancestral)',
    history: 'Último miembro vivo conocido de la enigmática tribu de los Chamanes Caracol, maestros ancestrales del Alma.',
    personality: 'Jovial, travieso, misterioso y entusiasta del poder del Alma.',
    function: 'Otorga el primer hechizo (Espíritu Vengativo) y comenta con asombro cada vez que absorbes el poder de sus parientes caídos (hechizos de Vacío).',
    relations: 'Pariente de los chamanes cuyos restos reposan en el Montículo Cristalizado, el Montículo Cubierto de Maleza y el Santuario de Almas.',
    importance: 'Introduce la magia de Alma y sugiere el vínculo ancestral entre su tribu y el Vacío.',
    dialogue: '"¡Ohoho! ¡Has retorcido mi hechizo con oscuridad pura!"'
  },
  {
    id: 'midwife', name: 'La Comadrona (Midwife)', category: 'habitantes', categoryLabel: 'Habitante · Nido Profundo',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2e/Midwife_Circle.png/revision/latest',
    location: 'Nido Profundo (Pueblo Distante)',
    history: 'Antigua servidora y nodriza de la realeza de Nido Profundo que conoció a Herrah y presenció el pacto que dio origen a Hornet.',
    personality: 'Educada y elocuente al hablar, pero poseída por un hambre feroz que la lleva a intentar devorar al Caballero tras terminar su relato.',
    function: 'Aporta revelaciones cruciales sobre Herrah, Hornet y las Tejedoras.',
    relations: 'Sirvió a Herrah la Bestia y recuerda con nostalgia a la tribu de las Tejedoras.',
    importance: 'Fuente clave de lore sobre el pacto entre Herrah y el Rey Pálido.',
    dialogue: '"¡Perdona mi arrebato, pequeño, es que el hambre es tan terrible aquí abajo!"'
  },
  {
    id: 'mask-maker', name: 'Hacedor de Máscaras (Mask Maker)', category: 'lore', categoryLabel: 'Artesano · Nido Profundo',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/5/51/Mask_Maker_Circle.png/revision/latest',
    location: 'Nido Profundo (extremo noroeste)',
    history: 'Antiguo artesano misterioso que talla máscaras en lo más recóndito de Nido Profundo, otorgando rostro e identidad a los insectos.',
    personality: 'Enigmático, filosófico y excéntrico.',
    function: 'Sus diálogos exploran el significado profundo de las máscaras, el Rey Pálido y la naturaleza sin rostro del Vacío.',
    relations: 'Conoce la historia de los Wyrms y del pacto del Rey. Si usas Oscuridad Descendente junto a él, su máscara cae revelando brevemente su rostro real.',
    importance: 'Uno de los pilares filosóficos del lore sobre identidad y consciencia en Hallownest.',
    dialogue: '"¿Qué es un insecto sin una máscara que defina su mente?"'
  },
  {
    id: 'bardoon', name: 'Bardoon', category: 'lore', categoryLabel: 'Sabio · Bordes del Reino',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/3/32/Bardoon_Circle.png/revision/latest',
    location: 'Bordes del Reino (cima de las cavernas)',
    history: 'Colosal criatura similar a una oruga que eligió vivir en los confines del reino precisamente para escapar del control mental de los seres superiores.',
    personality: 'Tranquilo, socarrón, reflexivo y sorprendentemente perspicaz.',
    function: 'Explica la naturaleza del Wyrm (el cuerpo que mudó el Rey Pálido), la Marca del Rey y el origen de la ceniza que cae sobre Bordes del Reino.',
    relations: 'Rechaza someterse tanto al Rey Pálido como a El Resplandor.',
    importance: 'Confirma explícitamente que la "nieve" de Bordes del Reino es en realidad piel mudada del cadáver del Wyrm.',
    dialogue: '"No es nieve, pequeño... es la piel mudada de un ser antiguo."'
  },
  {
    id: 'mister-mushroom', name: 'Señor Seta (Mister Mushroom)', category: 'viajeros', categoryLabel: 'Heraldo · Misión Secreta',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/f/fe/Mister_Mushroom_Circle.png/revision/latest',
    location: '7 ubicaciones secuenciales por todo Hallownest',
    history: 'Enigmático "Heraldo" del cambio de eras que vaga por Hallownest pronunciando reflexiones crípticas solo comprensibles con el amuleto Hongo con Esporas.',
    personality: 'Excéntrico, críptico y aparentemente distraído.',
    function: 'Hablar con él en sus 7 ubicaciones en orden (siguiendo la tablilla secreta de Bordes del Reino) desbloquea el epílogo secreto "El Paso de la Era".',
    relations: 'Conectado a la mente colectiva fúngica y testigo del fin de los reinos.',
    importance: 'Su escena post-créditos cierra el juego con el célebre "Continuará..." (To Be Continued).',
    dialogue: '"...Los Wyrms atraen insectos a su servidumbre, mas las eras siempre pasan..."'
  },
  {
    id: 'unn', name: 'Unn', category: 'lore', categoryLabel: 'Ser Superior · Sendero Verde',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/b/ba/Unn.png/revision/latest',
    location: 'Sendero Verde (Lago de Unn)',
    history: 'Antigua deidad en forma de babosa gigante cuyos sueños engendraron la exuberante vegetación y la tribu del Musgo de Sendero Verde.',
    personality: 'Silenciosa, ancestral y debilitada por el paso del tiempo y la Infección.',
    function: 'Al cruzar el Lago de Unn con la Lágrima de Isma emerge del ácido para entregar personalmente el amuleto Forma de Unn.',
    relations: 'Creadora espiritual de la tribu del Musgo; sus seguidores aún la llaman en sus sueños.',
    importance: 'Demuestra que existían Seres Superiores independientes del Rey Pálido y El Resplandor.',
    dialogue: 'Con Aguijón Onírico: "...Llamando... al musgo... la fuerza se desvanece..."'
  },
  {
    id: 'queen-vespa', name: 'Reina Vespa', category: 'lore', categoryLabel: 'Soberana · La Colmena',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/20/Vespa_Circle.png/revision/latest',
    location: 'La Colmena (tras derrotar al Caballero Colmena)',
    history: 'Gigantesca reina de La Colmena que decidió sellar su panal del resto de Hallownest para evitar implicarse en los destinos del Rey Pálido.',
    personality: 'Majestuosa, sabia, serena y consciente de la inevitabilidad del fin de los reinos.',
    function: 'Su espíritu aparece tras vencer al Caballero Colmena (pack Lifeblood) y comenta la naturaleza del Caballero y del reino.',
    relations: 'Soberana del Caballero Colmena y de todas las abejas de La Colmena.',
    importance: 'Aporta perspectiva externa sobre la caída de Hallownest y la futilidad de resistir la naturaleza.',
    dialogue: '"Aunque nuestro cuerpo pereció hace mucho, su lealtad jamás flaqueó."'
  },
  {
    id: 'moss-prophet', name: 'Profeta del Musgo', category: 'habitantes', categoryLabel: 'Predicador · Páramos Fungales',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5a/Moss_Prophet_Circle.png/revision/latest',
    location: 'Páramos Fungales (al este de los Jardines de la Reina)',
    history: 'Musguito devoto que comenzó a predicar a sus seguidores que la luz de la Infección debía ser abrazada en lugar de temida.',
    personality: 'Ferviente, místico y trágicamente seducido por la voz de El Resplandor.',
    function: 'Muestra cómo la Infección manipulaba espiritualmente a los habitantes vulnerables.',
    relations: 'Rodeado por Vagabundos Musgosos; cuando los Cruces se infectan, muere junto a sus discípulos.',
    importance: 'Ilustra la dimensión religiosa y psicológica de la plaga de luz.',
    dialogue: '"¡La luz no debe temerse, sino abrazarse!"'
  },
  {
    id: 'emilitia', name: 'Emilitia la Eterna', category: 'habitantes', categoryLabel: 'Aristócrata · Ciudad de Lágrimas',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5d/Emlitia_Circle.png/revision/latest',
    location: 'Ciudad de Lágrimas (cámara privada conectada desde Canales Reales)',
    history: 'Noble expulsada de la alta sociedad de la capital antes de la plaga, lo que irónicamente le salvó la vida y la cordura.',
    personality: 'Rencorosa, burlona y encantada con la desgracia de quienes la marginaron.',
    function: 'Ofrece una mirada satírica sobre la arrogancia de la antigua élite de la Ciudad de Lágrimas.',
    relations: 'Conserva un amargo rencor hacia el resto de la nobleza infectada de la ciudad.',
    importance: 'Uno de los pocos habitantes no infectados que aún permanecen vivos en la capital.',
    dialogue: '"¡Oh, qué maravilloso verlos ahora vagar sin mente bajo la lluvia!"'
  },
  {
    id: 'marissa', name: 'Marissa', category: 'lore', categoryLabel: 'Espíritu · Casa del Placer',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d5/Marissa.png/revision/latest',
    location: 'Ciudad de Lágrimas (Casa del Placer)',
    history: 'Famosa cantante de la Ciudad de Lágrimas cuyo espíritu aún entona su aria en el teatro vacío esperando un público.',
    personality: 'Melancólica, dulce y apasionada por el canto.',
    function: 'Si te sientas en el teatro, su voz armoniza con la música ambiental de la Ciudad de Lágrimas (puedes elegir escucharla en paz o absorber su 1 de Esencia con el Aguijón Onírico).',
    relations: 'Recuerda con cariño a los antiguos espectadores de la Casa del Placer.',
    importance: 'Uno de los detalles ambientales más poéticos de Hallownest.',
    dialogue: '"Por fin alguien ha venido a escuchar mi canción..."'
  },
  {
    id: 'willoh', name: 'Willoh', category: 'habitantes', categoryLabel: 'Habitante · Estación de la Reina',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/a/ad/Willoh_Circle.png/revision/latest',
    location: 'Estación de la Reina (Cañón de la Niebla / Páramos Fungales)',
    history: 'Criatura de cuello larguísimo que habita los pisos superiores de la Estación de la Reina devorando hongos del techo.',
    personality: 'Amable en apariencia, aunque sus pensamientos oníricos revelan que también devoraría al Caballero.',
    function: 'NPC ambiental memorable que añade vida e inquietud sutil a la Estación de la Reina.',
    relations: 'Observa el paso de los viajeros desde las vigas superiores.',
    importance: 'Muestra el contraste entre diálogos amables y pensamientos ocultos revelados por el Aguijón Onírico.',
    dialogue: 'Con Aguijón Onírico: "...Tan sabroso... me pregunto a qué sabrá este pequeño..."'
  },
  {
    id: 'little-fool', name: 'Pequeño Insensato (Little Fool)', category: 'habitantes', categoryLabel: 'Anfitrión · Coliseo',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/4/41/Little_Fool_Circle.png/revision/latest',
    location: 'Coliseo de los Insensatos (Bordes del Reino)',
    history: 'Encargado colgado del techo que gestiona las inscripciones a las tres pruebas de gladiadores del Coliseo.',
    personality: 'Entusiasta, burlón y amante del espectáculo sangriento.',
    function: 'Permite inscribirse en la Prueba del Guerrero, del Conquistador y de los Insensatos pagando Geo.',
    relations: 'Sirve al silencioso Señor de los Insensatos, cuyo cadáver reposa en el trono superior del Coliseo.',
    importance: 'Puerta de entrada al desafío de arenas más icónico del juego base.',
    dialogue: '"¿Quieres probar tu valía, pequeño insensato?"'
  },
  {
    id: 'fluke-hermit', name: 'Ermitaño Trematodo (Fluke Hermit)', category: 'expansiones', categoryLabel: 'Expansión · Godmaster',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/3/3c/Fluke_Hermit_Circle.png/revision/latest',
    location: 'Canales Reales (pasadizo secreto sobre la Fosa de Basura)',
    history: 'Solitario trematodo que abandonó el nido de Flukemarm para contemplar en silencio a la Buscadora de Dioses y el brillo dorado de su sarcófago.',
    personality: 'Tímido, místico y devoto de la "Madre" y los seres relucientes.',
    function: 'Aporta diálogos crípticos y pistas sobre la Fosa de Basura y la Buscadora de Dioses.',
    relations: 'Venera a Flukemarm y observa con fascinación a la Buscadora de Dioses.',
    importance: 'Personaje secreto añadido en Godmaster que amplía el lore de los Canales Reales.',
    dialogue: '"¡Brillante... tan brillante allí abajo!"'
  },
  {
    id: 'revek', name: 'Revek', category: 'lore', categoryLabel: 'Espíritu Guardián · Claro de los Espíritus',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/9/96/Revek.png/revision/latest',
    location: 'Tierras de Descanso (Claro de los Espíritus)',
    history: 'Espíritu de un guardián que juró proteger eternamente a las almas que reposan en el Claro de los Espíritus.',
    personality: 'Vigilante, protector e implacable si perturbas a los espíritus.',
    function: 'Permanece pacífico mientras respetes el claro; si usas el Aguijón Onírico sobre cualquier espíritu del claro, Revek te atacará sin cesar infligiendo 2 máscaras de daño.',
    relations: 'Custodio de todos los espíritus (incluyendo personajes diseñados por patrocinadores de Kickstarter).',
    importance: 'Si absorbes a todos los espíritus del claro, Revek se derrumba desconsolado al perder su propósito.',
    dialogue: '"Mientras yo vigile, nadie perturbará el reposo de estas almas."'
  },
  {
    id: 'isma-dryya-hegemol', name: 'Dryya, Isma y Hegemol', category: 'lore', categoryLabel: 'Cinco Grandes Caballeros · Históricos',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7d/Isma.png/revision/latest',
    location: 'Jardines de la Reina (Dryya) · Arboleda de Isma (Isma) · Cruces Olvidados (armadura de Hegemol)',
    history: 'Tres de los legendarios Cinco Grandes Caballeros que protegieron Hallownest en su edad de oro junto a Ogrim (Defensor del Estiércol) y Ze’mer (Doliente Gris).',
    personality: 'Dryya fue feroz y leal guardiana de la Reina; Isma era gentil y poderosa; Hegemol era un gigante amable y de voz suave.',
    function: 'Sus restos y legados otorgan objetos y contexto decisivos: el cuerpo de Isma brinda la Lágrima de Isma; Dryya murió defendiendo a la Dama Blanca de las Mantis Traidoras; la armadura de Hegemol fue robada mientras dormía por el Gusano del Falso Caballero.',
    relations: 'Hermanos de armas bajo el estandarte del Rey Pálido.',
    importance: 'Pilares míticos de la era dorada del reino; Ogrim aún esculpe sus estatuas con cariño en su refugio.',
    dialogue: 'Recordados por Ogrim, la Dama Blanca y el texto de la Lágrima de Isma.'
  }
];

// -----------------------------------------------------------------------------
// 2. COLECCIONABLES Y MISIONES SECUNDARIAS
// Organizados por categoría y región, sin duplicar amuletos/habilidades del Arsenal
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.collectiblesQuests = [
  {
    id: 'col-grubs', category: 'coleccionable', region: 'Todo Hallownest',
    name: 'Larvas Prisioneras (46 Grubs)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0c/Grub.png/revision/latest',
    description: '46 pequeñas larvas encerradas en frascos de cristal repartidos por casi todas las regiones del reino tras ser capturadas por El Coleccionista.',
    location: 'Cruces Olvidados (5), Sendero Verde (4), Páramos Fungales (2), Ciudad de Lágrimas (5), Pico de Cristal (7), Tierras de Descanso (1), Canales Reales (3), Nido Profundo (5), Cuenca Antigua (2), Bordes del Reino (2), La Colmena (2), Jardines de la Reina (3), Acantilados Aulladores (1), Cañón de la Niebla (1) y Torre del Amor (3).',
    utility: 'Cada rescate otorga Geo y valiosas recompensas escalonadas del Padre Larva.',
    howToGet: 'Rompe sus frascos con el aguijón (cuidado con los 5 Imitadores de Larva). Vencer al Coleccionista otorga su Mapa con todas las ubicaciones.',
    questLink: 'Recompensas clave: Fragmento de Máscara (5), Canción de Larvas (10), Huevo Podrido (16), Sello de Hallownest (23), Mineral Pálido (31), Ídolo del Rey (38) y Elegía de la Larvamosca (46).'
  },
  {
    id: 'col-mask-shards', category: 'coleccionable', region: 'Todo Hallownest',
    name: 'Fragmentos de Máscara (16)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/6/69/Mask_Shard.png/revision/latest',
    description: 'Piezas de máscara antigua que, al reunirse de cuatro en cuatro, expanden la salud máxima del Caballero de 5 hasta 9 máscaras.',
    location: 'Sly en Bocasucia (4), Cruces Olvidados (2: Mawlek Incubador y sala de Goams), Casa de Bretta (1), Padre Larva (1), Estación de la Reina (1), Santuario de Piedra (1), Canales Reales (1), Guardián Enfurecido (1), Nido Profundo / Páramos (1), La Colmena (1), La Vidente con 1500 Esencia (1) y Doliente Gris (1).',
    utility: 'Cada 4 fragmentos forman 1 Máscara de vida permanente (+4 máscaras en total).',
    howToGet: 'Compra a Sly, combates opcionales, exploración y misiones secundarias.',
    questLink: 'Completar todos otorga el logro "Enmascarado" (Masked) y suma 4% de completado total.'
  },
  {
    id: 'col-vessel-fragments', category: 'coleccionable', region: 'Todo Hallownest',
    name: 'Fragmentos de Vasija (9)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/29/Vessel_Fragment.png/revision/latest',
    description: 'Restos pálidos de antiguas vasijas capaces de almacenar reservas adicionales de Alma.',
    location: 'Sly en Bocasucia (2), Sendero Verde (1), Ascensor de Cruces/Ciudad (1), Almacenes de la Ciudad (1), Estación del Rey (1), Nido Profundo (1), Fuente de los Deseos en Cuenca Antigua — 3.000 Geo (1), La Vidente — 700 Esencia (1) y Nido de Ciervos (1).',
    utility: 'Cada 3 fragmentos añaden una esfera secundaria de reserva de Alma (hasta 3 reservas extra).',
    howToGet: 'Exploración vertical, ofrenda de Geo en la fuente, compra y Esencia.',
    questLink: 'Reunir los 9 desbloquea "Alma del Mundo" (Worldsoul) y suma 3% de completado.'
  },
  {
    id: 'col-arcane-eggs', category: 'reliquia', region: 'El Abismo y Cuenca Antigua',
    name: 'Huevos Arcanos (4)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/1/18/Arcane_Egg.png/revision/latest',
    description: 'Reliquias misteriosas anteriores a la fundación de Hallownest, creadas por la Civilización Antigua del Vacío como registro de su conocimiento.',
    location: 'El Abismo (3: cámara del Núcleo de Savia Vital, cámara oculta al sur del acceso y Lugar de Nacimiento — este último es perdible al terminar la secuencia) y La Vidente (1 al reunir 1.200 Esencia).',
    utility: 'Se venden a Lemm por 1.200 Geo cada uno (4.800 Geo totales) junto con comentarios únicos de lore.',
    howToGet: 'Explorar El Abismo y reunir Esencia con la Vidente.',
    questLink: 'Objeto más valioso de la colección de reliquias de Lemm.'
  },
  {
    id: 'col-wanderer-journals', category: 'reliquia', region: 'Todo Hallownest',
    name: 'Diarios del Errante (14)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b5/Wanderer%27s_Journal.png/revision/latest',
    description: 'Cuadernos desgastados escritos por viajeros y ciudadanos comunes que recorrían los caminos del reino antes de su colapso.',
    location: 'Repartidos por Sendero Verde (2), Páramos Fungales (2), Ciudad de Lágrimas (2), Acantilados Aulladores (1), Pico de Cristal (1), Tierras de Descanso (1), Cuenca Antigua (1), Bordes del Reino (3) y Estación del Rey (1).',
    utility: 'Intercambiables con Lemm en Ciudad de Lágrimas por 200 Geo cada uno (2.800 Geo en total).',
    howToGet: 'Exploración de recovecos y cadáveres de viajeros.',
    questLink: 'No se pierden al morir (a diferencia del Geo suelto), lo que los hace una excelente "hucha" segura.'
  },
  {
    id: 'col-hallownest-seals', category: 'reliquia', region: 'Todo Hallownest',
    name: 'Sellos de Hallownest (17)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/3/38/Hallownest_Seal.png/revision/latest',
    description: 'Emblemas oficiales del reino con el símbolo real, portados por funcionarios, guardias y ciudadanos distinguidos.',
    location: 'Cruces Olvidados (2), Sendero Verde (1), Cañón de la Niebla (1), Páramos Fungales (2), Ciudad de Lágrimas (5), Tierras de Descanso (1), Nido Profundo (2), Jardines de la Reina (1), Estación de la Reina (1) y Padre Larva (1).',
    utility: 'Lemm paga 450 Geo por cada sello (7.650 Geo totales).',
    howToGet: 'Exploración de torres, cámaras selladas y recompensas.',
    questLink: 'Permiten financiar rápidamente los amuletos inquebrantables de Divine.'
  },
  {
    id: 'col-kings-idols', category: 'reliquia', region: 'Todo Hallownest',
    name: 'Ídolos del Rey (8)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d2/King%27s_Idol.png/revision/latest',
    description: 'Pequeñas efigies blancas talladas a imagen del Rey Pálido, veneradas en hogares y santuarios de Hallownest.',
    location: 'Acantilados Aulladores (1), Pico de Cristal (1), Tierras de Descanso (1), Canales Reales (1), Nido Profundo (1), Bordes del Reino (2: incluido el Coliseo) y Padre Larva (1).',
    utility: 'Se venden a Lemm por 800 Geo cada uno (6.400 Geo totales).',
    howToGet: 'Salas secretas tras muros rompibles y desafíos opcionales.',
    questLink: 'Aportan información directa sobre el culto civil al Rey Pálido.'
  },
  {
    id: 'col-whispering-roots', category: 'coleccionable', region: 'Todo Hallownest',
    name: 'Raíces Susurrantes (15)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/2/26/Whispering_Root.png/revision/latest',
    description: 'Árboles pálidos ancestrales que concentran ecos y recuerdos flotantes en forma de Esencia onírica.',
    location: 'Cruces Olvidados (29), Sendero Verde (44), Páramos Fungales (20), Ciudad de Lágrimas (28), Pico de Cristal (21), Tierras de Descanso (20), Montículo Ancestral (42), Acantilados Aulladores (46), Nido Profundo (45), Bordes del Reino (51), La Colmena (20), Jardines de la Reina (29), Claro de los Espíritus (34), Cuenca Antigua (42) y Arboleda de Isma (20). Total: 482 de Esencia.',
    utility: 'Suministran Esencia vital para alcanzar las metas de la Vidente (Portal Onírico y Aguijón Onírico Despertado).',
    howToGet: 'Golpea la raíz con el Aguijón Onírico y recolecta todos los orbes dorados que emergen por la sala.',
    questLink: 'Complemento clave junto a los Guerreros y Jefes Oníricos.'
  },
  {
    id: 'col-stag-stations', category: 'exploracion', region: 'Todo Hallownest',
    name: 'Estaciones de Ciervo (10 + Nido de Ciervos)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f9/Stag_Circle.png/revision/latest',
    description: 'Antigua red subterránea de transporte rápido operada por El Último Ciervo a lo largo de Hallownest.',
    location: 'Bocasucia, Cruces Olvidados, Sendero Verde, Estación de la Reina, Almacenes de la Ciudad, Estación del Rey, Tierras de Descanso, Pueblo Distante, Jardines de la Reina, Estación Oculta (Cuenca Antigua, añadida en Hidden Dreams) y el secreto Nido de Ciervos.',
    utility: 'Permite viajar instantáneamente entre regiones; desbloquear las 10 estaciones abre el acceso al Nido de Ciervos (con 1 Fragmento de Vasija).',
    howToGet: 'Paga el peaje de Geo en las campanas de cada estación (salvo Bocasucia, Estación del Rey y Pueblo Distante que son gratuitas).',
    questLink: 'Desbloquea los logros "Conexión" y "Esperanza".'
  },
  {
    id: 'col-rancid-eggs', category: 'coleccionable', region: 'Todo Hallownest',
    name: 'Huevos Podridos (21 en mundo + Tuk)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/3/3f/Rancid_Egg.png/revision/latest',
    description: 'Huevos grasientos de olor penetrante escondidos en rincones oscuros o dentro de criaturas Bluggsac.',
    location: 'Sly (1), Padre Larva (1), Sacos Blandos / Bluggsacs (5 en Canales Reales, Bordes del Reino y Nido Profundo), pasajes ocultos en casi todos los biomas y compra infinita con Tuk (hasta 80).',
    utility: 'Permiten invocar tu Sombra con Confesora Jiji en modo normal, o venderse a Jinn Alma de Acero por 290–449 Geo en Modo Alma de Acero.',
    howToGet: 'Exploración, derrotar Bluggsacs o comprarlos a Tuk.',
    questLink: 'Herramienta de seguridad indispensable para proteger grandes sumas de Geo.'
  },
  {
    id: 'quest-delicate-flower', category: 'mision', region: 'Tierras de Descanso → Jardines de la Reina',
    name: 'Misión: La Flor Delicada',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7e/Delicate_Flower.png/revision/latest',
    description: 'Transportar una flor pálida sumamente frágil desde la mansión de la Doliente Gris hasta la tumba de la Hija del Traidor en los Jardines de la Reina.',
    location: 'Inicio: Tierras de Descanso (Doliente Gris). Destino: Jardines de la Reina (extremo suroeste).',
    utility: 'Otorga el último Fragmento de Máscara de la misión, el logro "Consuelo" y desbloquea flores infinitas en la tumba.',
    howToGet: 'Debes completar el recorrido sin recibir ningún golpe y sin usar Ciervocamino ni Portal Onírico (los tranvías sí están permitidos). Consejo: limpia la ruta sin sentarte en un banco antes de tomar la flor.',
    questLink: 'También puedes regalar una Flor Delicada a Bicho Viejo, al Maestro Oro y a la Buscadora de Dioses (desbloqueando la variante del final de Godmaster).'
  },
  {
    id: 'quest-grimm-ritual', category: 'mision', region: 'Acantilados Aulladores y Bocasucia',
    name: 'Misión: El Ritual o Destierro de Grimm',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7b/Grimm_Troupe_Icon.png/revision/latest',
    description: 'Cadena de misiones principal del Content Pack The Grimm Troupe con dos desenlaces mutuamente excluyentes.',
    location: 'Inicio: cueva oculta en Acantilados Aulladores (usar Aguijón Onírico en el cadáver y encender la Linterna). Desarrollo: Bocasucia y todo Hallownest.',
    utility: 'Permite obtener Niño de Grimm al nivel máximo (ruta del Ritual) o Melodía Despreocupada (ruta del Destierro), además de mejorar los 3 Amuletos Frágiles con Divine.',
    howToGet: 'Reúne llamas de los Grimmkin con el Niño de Grimm equipado, vence a Grimm y decide entre enfrentar al Rey Pesadilla Grimm o seguir a Brumm para apagar la linterna.',
    questLink: 'Otorga los logros "Gran Actuación" y "Ritual" o "Destierro".'
  },
  {
    id: 'quest-herald', category: 'mision', region: 'Todo Hallownest',
    name: 'Misión Secreta: El Paso de la Era (Señor Seta)',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/f/fe/Mister_Mushroom_Circle.png/revision/latest',
    description: 'Búsqueda críptica guiada por un acertijo tallado en una tablilla secreta de Bordes del Reino.',
    location: '7 encuentros en orden estricto (tras derrotar a los 3 Soñadores): Páramos Fungales → Bordes del Reino → Nido Profundo → Acantilados Aulladores → Cuenca Antigua → Cañón de la Niebla → Pasaje del Rey.',
    utility: 'Desbloquea una cinemática adicional tras los créditos de cualquier final y el logro "El Paso de la Era".',
    howToGet: 'Lleva equipado el amuleto Hongo con Esporas para entender y avanzar el diálogo del Señor Seta en cada punto.',
    questLink: 'Conecta directamente con el mensaje final "To Be Continued".'
  },
  {
    id: 'secret-places', category: 'secreto', region: 'Múltiples regiones',
    name: 'Lugares Secretos de Hallownest',
    img: 'https://static.wikia.nocookie.net/hollowknight/images/d/df/HJ_Seal_of_Binding.png/revision/latest',
    description: 'Cámaras altamente ocultas creadas por Team Cherry como recompensas narrativas, homenajes y pruebas extremas de habilidad.',
    location: 'Sendero del Dolor (Palacio Blanco), Santuario de los Creyentes (Tierras de Descanso — catarata del Claro), Tierra de Tormentas (Hogar de los Dioses), El Calvario Eterno (techo oculto del Salón de los Dioses), Casa de Menderbug (Cruces Olvidados) y Cámara del Núcleo de Savia Vital (El Abismo).',
    utility: 'Desbloquean entradas especiales del Diario (Sello de Vínculo, Máscara Desgastada), amuletos secretos, lore único y temas de menú.',
    howToGet: 'Exigen paredes falsas, exploración minuciosa, superar las 4 Ataduras de los Panteones o completar desafíos ocultos.',
    questLink: 'Consulta el apartado de Secretos y Curiosidades para ver cómo acceder a cada uno.'
  }
];

// -----------------------------------------------------------------------------
// 3. CIVILIZACIONES, TRIBUS Y CULTURAS DE HALLOWNEST
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.civilizations = [
  {
    id: 'civ-hallownest', name: 'El Reino de Hallownest', tag: 'CIVILIZACIÓN CENTRAL',
    origin: 'Fundado por el Rey Pálido tras mudar su colosal forma de Wyrm en Bordes del Reino y otorgar intelecto superior a los insectos subterráneos.',
    location: 'Ciudad de Lágrimas (capital), Cruces Olvidados, Pico de Cristal, Canales Reales y Cuenca Antigua.',
    organization: 'Monarquía teocrática regida por el Rey Pálido y la Dama Blanca, custodiada por los Cinco Grandes Caballeros y la Guardia Urbana.',
    customs: 'Veneración al Rey mediante Ídolos, arquitectura gótica, ingeniería avanzada (tranvías, ascensores, estaciones de ciervo) y comercio con Geo.',
    relation: 'Algunas tribus se unieron voluntariamente (polillas); otras pactaron autonomía (Mantis, Nido Profundo) o permanecieron aisladas (La Colmena).',
    characters: 'El Rey Pálido, la Dama Blanca, Lurien, Monomon, Ogrim, Dryya, Isma, Hegemol, Ze’mer y Lemm.',
    history: 'Vivió una edad dorada de arte, ciencia y prosperidad hasta que el olvido de El Resplandor desató la Infección. El proyecto de las Vasijas y el Huevo Negro congeló el reino en estasis.',
    present: 'En ruinas y sumido en lluvia perpetua; casi toda su población vaga infectada como cáscaras vacías.'
  },
  {
    id: 'civ-mantis', name: 'La Tribu de las Mantis', tag: 'TRIBU GUERRERA INDEPENDIENTE',
    origin: 'Antigua sociedad guerrera establecida en el sur de los Páramos Fungales antes de la llegada del Rey Pálido.',
    location: 'Aldea Mantis (sur de los Páramos Fungales); facción exiliada en Jardines de la Reina.',
    organization: 'Gobernada por sus Señores Mantis (originalmente cuatro: tres hermanas y un hermano que luego las traicionó).',
    customs: 'Culto absoluto al honor marcial, la disciplina física y la prueba de combate para ganar su respeto.',
    relation: 'Pactaron una tregua con el Rey Pálido: conservaron total independencia a cambio de contener a las bestias de Nido Profundo.',
    characters: 'Las tres Señores Mantis (Hermanas de Batalla) y el exiliado Señor Traidor junto a su hija fallecida.',
    history: 'Cuando el hermano menor aceptó la Infección buscando más poder, fue expulsado junto a sus seguidores hacia los Jardines de la Reina.',
    present: 'Es la única gran civilización que logró resistir la Infección mediante pura disciplina y fuerza de voluntad.'
  },
  {
    id: 'civ-hive', name: 'La Colmena (The Hive)', tag: 'SOCIEDAD AISLADA',
    origin: 'Colonia de abejas gobernada por la colosal Reina Vespa en las profundidades bajo Bordes del Reino.',
    location: 'La Colmena (extremo sureste subterráneo, conectada a Bordes del Reino y Cuenca Antigua).',
    organization: 'Estructura jerárquica de colmena alrededor de la Reina Vespa, defendida por Abejitas, Soldados, Guardianes y el Caballero Colmena.',
    customs: 'Lealtad inquebrantable al panal, construcción en cera hexagonal dorada y autosuficiencia absoluta.',
    relation: 'Rehusaron formar parte de Hallownest y cerraron sus accesos, permitiendo únicamente el paso de la línea del Tranvía Inferior por sus límites.',
    characters: 'Reina Vespa y Caballero Colmena (Hive Knight).',
    history: 'La Reina Vespa falleció con el paso de las eras, dejando a sus súbditos sin guía mental.',
    present: 'Las abejas siguen protegiendo su panal por puro instinto, aunque la Infección ha terminado filtrándose entre ellas.'
  },
  {
    id: 'civ-spiders', name: 'Tribu de las Arañas y Tejedoras', tag: 'DOMINIO DE NIDO PROFUNDO',
    origin: 'Pobladores arácnidos de las oscuras cavernas occidentales de Nido Profundo; las Tejedoras llegaron originalmente desde tierras lejanas.',
    location: 'Nido Profundo, Pueblo Distante, Guarida de la Bestia y Guarida de Tejedoras.',
    organization: 'Gobernada por la Reina Herrah la Bestia (consorte de un antiguo rey de linaje noble fallecido) y defendida por Devotos Acechadores.',
    customs: 'Tejido de seda con propiedades mágicas y sellos (como los Sellos de Vínculo), vida en la penumbra y recelo ante los forasteros.',
    relation: 'Hostiles a la expansión de Hallownest (sabotearon el Tranvía Fallido), hasta que Herrah pactó convertirse en Soñadora a cambio de engendrar a Hornet.',
    characters: 'Herrah la Bestia, Hornet, La Comadrona y las Tejedoras.',
    history: 'Con Herrah sumida en sueño eterno y el avance de la plaga, muchas Tejedoras abandonaron Hallownest regresando a su tierra de origen.',
    present: 'Sumida en oscuridad, trampas y depredadores; solo quedan restos de las Tejedoras (nota: la conexión exacta de las Tejedoras con Pharloom es un tema muy debatido de cara a Silksong).'
  },
  {
    id: 'civ-moths', name: 'La Tribu de las Polillas', tag: 'GUARDIANAS DE LOS SUEÑOS',
    origin: 'Nacidas directamente de la luz primordial de El Resplandor mucho antes de la llegada del Rey Pálido.',
    location: 'Tierras de Descanso (antiguamente también veneraban la cima de la Corona de Hallownest en Pico de Cristal).',
    organization: 'Comunidad pacífica de videntes, guardianas de tumbas y forjadoras de reliquias oníricas como el Aguijón Onírico.',
    customs: 'Reverencia por la memoria, los sueños y los difuntos; históricamente pacifistas (Markoth fue la única excepción que tomó un arma).',
    relation: 'Abandonaron el culto a El Resplandor deslumbradas por la nueva luz del Rey Pálido, sellando el destino trágico del reino.',
    characters: 'La Vidente (Seer), Markoth y Thistlewind.',
    history: 'Con el paso del tiempo su pueblo se extinguió casi por completo, cargando con la culpa silenciosa de haber desencadenado el rencor de su creadora.',
    present: 'La Vidente es la última polilla viva y confía al Caballero el Aguijón Onírico para enmendar el pasado.'
  },
  {
    id: 'civ-void', name: 'La Civilización Antigua del Vacío', tag: 'ERA PRE-HALLOWNEST',
    origin: 'Misteriosa civilización que existió y desapareció mucho antes de la llegada del Rey Pálido y la fundación de Hallownest.',
    location: 'El Abismo y Cuenca Antigua (donde perduran sus tótems de Alma, estatuas negras y el Faro).',
    organization: 'Desconocida con certeza; la evidencia confirmada indica que adoraban la oscuridad del Vacío directamente y no a un monarca.',
    customs: 'Creación de Huevos Arcanos para preservar conocimiento, Ídolos del Vacío y tótems tallados en piedra oscura capaces de canalizar Alma.',
    relation: 'Desaparecieron antes del nacimiento de Hallownest; el Rey Pálido reutilizó posteriormente sus vestigios y el propio Vacío para forjar Vasijas y Moldes Reales.',
    characters: 'Sin nombres individuales registrados (testimoniada por Lemm, el Ídolo del Vacío y los Huevos Arcanos).',
    history: 'Su caída y origen exacto no están confirmados en el juego (existen diversas teorías de la comunidad sobre su relación con el Señor de las Sombras).',
    present: 'Solo perduran ruinas sumergidas, el cuenco negro de la Capa Sombría y los ecos del Abismo.'
  },
  {
    id: 'civ-moss', name: 'La Tribu del Musgo (Seguidores de Unn)', tag: 'HIJOS DEL SUEÑO DE UNN',
    origin: 'Nacidos y moldeados a partir de los sueños de la deidad Unn en las cavernas de Sendero Verde.',
    location: 'Sendero Verde y el borde oeste de Páramos Fungales.',
    organization: 'Comunidad espiritual ligada a Unn, custodiada por los Caballeros de Musgo.',
    customs: 'Protección del Lago de Unn y de los caminos verdes; vestían armaduras vegetales y respetaban los pactos de paso del Rey.',
    relation: 'Permitieron al Rey Pálido trazar el camino del peregrino a través de Sendero Verde sin ceder su identidad cultural.',
    characters: 'Unn, Caballeros de Musgo y el Profeta del Musgo.',
    history: 'Al debilitarse el llamado de Unn, muchos miembros fueron seducidos por la luz brillante de El Resplandor.',
    present: 'Algunos Caballeros de Musgo aún montan guardia junto al Lago de Unn, mientras otros cayeron ante la Infección.'
  },
  {
    id: 'civ-fungal', name: 'La Tribu Fúngica', tag: 'MENTE COLECTIVA',
    origin: 'Hongos conscientes unidos por una mente compartida que habitaron los Páramos Fungales desde tiempos antiguos.',
    location: 'Páramos Fungales (Núcleo Fúngico y cavernas circundantes).',
    organization: 'Consciencia colectiva coordinada, protegida por Guerreros Seta y Ogros Seta.',
    customs: 'Comunicación mediante esporas, protección comunal de sus crías (Shrumelings) y visión filosófica sobre el paso de las eras.',
    relation: 'Aceptaron la autoridad del Rey Pálido confiando en que su previsión los protegería de peligros mayores.',
    characters: 'Señor Seta (Mister Mushroom), Guerreros Seta y Ogros Seta.',
    history: 'Su mente compartida sufrió severamente cuando la Infección penetró en los Páramos.',
    present: 'Se muestran hostiles hacia los intrusos para defender a sus jóvenes; las tablillas del Núcleo Fúngico aún narran su historia si equipas Hongo con Esporas.'
  },
  {
    id: 'civ-dirtmouth', name: 'Habitantes de Bocasucia y Chamanes Caracol', tag: 'SUPERFICIE Y ARCANOS',
    origin: 'Bocasucia surgió en la superficie sobre el pozo principal como aldea de paso para peregrinos y exploradores; los Chamanes Caracol son una estirpe arcana dispersa por montículos sagrados.',
    location: 'Bocasucia (superficie) y Montículos Ancestral, Cristalizado y Cubierto de Maleza.',
    organization: 'Bocasucia es un pequeño pueblo abierto sin gobernante formal; los Chamanes Caracol operaban de forma ermitaña estudiando el Alma.',
    customs: 'Comercio, cartografía y descanso en Bocasucia; canalización ritual de Alma y hechizos entre los Chamanes Caracol.',
    relation: 'Bocasucia revive lentamente gracias al Caballero al rescatar y atraer a Sly, Bretta, Cornifer, Iselda y Nymm.',
    characters: 'Bicho Viejo, Iselda, Cornifer, Sly, Bretta, Confesora Jiji y el Chamán Caracol.',
    history: 'Bocasucia quedó casi desierta tras la caída del reino; casi todos los Chamanes Caracol murieron o fueron capturados por el Santuario de Almas.',
    present: 'Bocasucia se convierte en el refugio cálido y hogar del jugador durante toda la travesía.'
  },
  {
    id: 'civ-godseekers', name: 'Buscadores de Dioses y Compañía de Grimm', tag: 'CULTURAS FORÁNEAS (EXPANSIONES)',
    origin: 'Dos órdenes extranjeras ajenas al reino: la Compañía de Grimm sirve al Corazón de la Pesadilla, mientras los Buscadores de Dioses emigraron desde la Tierra de Tormentas.',
    location: 'Carpa en Bocasucia (Grimm Troupe) y Fosa de Basura / Hogar de los Dioses (Godmaster).',
    organization: 'La Compañía opera como un circo ritual cíclico; los Buscadores actúan como una mente colectiva armonizada en torno a la Buscadora de Dioses.',
    customs: 'Recolección de llamas escarlata y renacimiento cíclico (Grimm); rituales de sintonización en combates de Panteones para hallar al "Dios de Dioses" (Godseekers).',
    relation: 'Acudieron a Hallownest atraídos por la decadencia del reino y el eco persistente de sus deidades.',
    characters: 'Grimm, Brumm, Divine, Nymm y la Buscadora de Dioses.',
    history: 'Ambas órdenes revelan que el universo más allá de Hallownest alberga otros reinos, deidades y fuerzas primordiales.',
    present: 'Su destino final depende directamente de las decisiones y victorias del Caballero.'
  }
];

// -----------------------------------------------------------------------------
// 4. GUÍA VISUAL DE MECÁNICAS Y COMBATE
// Diferencia habilidades iniciales vs desbloqueables y enlaza a #arsenal sin duplicar
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.mechanicsGuide = [
  {
    id: 'mec-movement', phase: 'inicial', phaseLabel: 'HABILIDAD INICIAL', icon: '🏃',
    title: 'Movimiento y Salto de Altura Variable',
    summary: 'El control del Caballero responde en un solo fotograma sin inercia resbaladiza, permitiendo microajustes precisos en el aire.',
    details: [
      'Salto variable: mantener pulsado el botón de salto alcanza mayor altura; soltarlo rápido permite saltos cortos ideales para esquivar.',
      'Control aéreo total: puedes invertir tu dirección en pleno vuelo para corregir aterrizajes sobre plataformas estrechas o pinchos.',
      'Mirar arriba/abajo: mantener arriba o abajo desplaza la cámara para inspeccionar fosos antes de caer.'
    ],
    arsenalRef: null
  },
  {
    id: 'mec-walljump', phase: 'desbloqueable', phaseLabel: 'DESBLOQUEABLE · PÁRAMOS FUNGALES', icon: '🧗',
    title: 'Salto en Pared (Garra de Mantis)',
    summary: 'Permite deslizarse de forma controlada por superficies verticales y saltar repetidamente entre muros.',
    details: [
      'Desbloquea la exploración vertical de Hallownest y reinicia el dash aéreo tras impulsar desde una pared.',
      'Mantener la dirección hacia el muro frena la caída para calcular saltos entre sierras y espinas.',
      'Esencial en áreas de plataformas exigentes como el Palacio Blanco y la fase sin suelo del Coliseo.'
    ],
    arsenalRef: { tab: 'habilidades', label: 'Ver ficha de Garra de Mantis en Arsenal →' }
  },
  {
    id: 'mec-dash', phase: 'desbloqueable', phaseLabel: 'DESBLOQUEABLE · SENDERO VERDE / ABISMO', icon: '💨',
    title: 'Dash y Dash Sombrío (Capa Sombría)',
    summary: 'Impulso horizontal instantáneo para cruzar abismos y esquivar ataques; su mejora de Vacío atraviesa enemigos y proyectiles.',
    details: [
      'Dash estándar (Capa de Ala de Polilla): 1 uso por salto aéreo (se recarga al tocar suelo, pared o hacer pogo exitoso en un enemigo/objeto).',
      'Dash Sombrío (Capa Sombría): otorga invulnerabilidad completa durante el desplazamiento cada ~1.5 s y atraviesa Barreras de Sombra.',
      'El enfriamiento del Dash Sombrío se indica visualmente con partículas negras regresando al Caballero.'
    ],
    arsenalRef: { tab: 'habilidades', label: 'Ver Capas en Habilidades →' }
  },
  {
    id: 'mec-doublejump', phase: 'desbloqueable', phaseLabel: 'DESBLOQUEABLE · CUENCA ANTIGUA', icon: '🦋',
    title: 'Salto Doble (Alas de Monarca) y Superdash',
    summary: 'Un segundo impulso en el aire que transforma el combate aéreo y el plataformeo, complementado por el Corazón de Cristal.',
    details: [
      'Las Alas de Monarca añaden un pequeño descenso inicial de unos pocos píxeles antes de elevarse: tenlo en cuenta cerca de espinas.',
      'El Corazón de Cristal (Superdash) propulsa horizontalmente en línea recta sin coste de Alma y puede cancelarse en cualquier instante.',
      'Combinar Garra de Mantis + Dash + Alas de Monarca permite alcanzar virtualmente cualquier cámara del reino.'
    ],
    arsenalRef: { tab: 'habilidades', label: 'Ver Alas de Monarca y Corazón de Cristal →' }
  },
  {
    id: 'mec-nail', phase: 'inicial', phaseLabel: 'INICIAL + 4 MEJORAS DE FORJA', icon: '⚔️',
    title: 'Aguijón, Golpe Direccional (Pogo) y Mejoras',
    summary: 'Arma principal capaz de golpear a izquierda, derecha, arriba y hacia abajo en el aire.',
    details: [
      'Pogo (ataque descendente): golpear hacia abajo sobre enemigos, pinchos metálicos, sierras u hongos morados te impulsa hacia arriba y reinicia tu dash y doble salto.',
      'Progresión oficial de daño: Aguijón Viejo (5) → Afilado (9) → Espiralado (13) → En Espiral / Channeled (17) → Aguijón Puro (21).',
      'Retroceso controlado: cada golpe empuja ligeramente hacia atrás al Caballero (anulable con el amuleto Cuerpo Firme).'
    ],
    visualBar: [
      { label: 'Viejo', val: 5, max: 21 },
      { label: 'Afilado', val: 9, max: 21 },
      { label: 'Espiralado', val: 13, max: 21 },
      { label: 'Channeled', val: 17, max: 21 },
      { label: 'Puro', val: 21, max: 21 }
    ],
    arsenalRef: { tab: 'hechizos', label: 'Ver niveles del Aguijón y Mineral Pálido →' }
  },
  {
    id: 'mec-nail-arts', phase: 'desbloqueable', phaseLabel: 'DESBLOQUEABLE · 3 MAESTROS DEL AGUIJÓN', icon: '🌀',
    title: 'Artes del Aguijón',
    summary: 'Técnicas cargadas enseñadas por Mato, Oro y Sheo que multiplican el daño y alcance sin consumir Alma.',
    details: [
      'Gran Corte (Sheo): tajo frontal masivo de 2.5× el daño del aguijón (52 con Aguijón Puro).',
      'Corte Veloz (Oro): corte horizontal de alcance extremo al soltar justo tras un dash (2.5× daño).',
      'Corte Ciclónico (Mato): giro continuo de hasta 6 impactos (1.25× cada uno) pulsando ataque repetidamente; ralentiza la caída.',
      'Nota técnica: el amuleto Fuerza Frágil/Inquebrantable NO incrementa el daño de las Artes del Aguijón, pero Gloria del Maestro reduce drásticamente su tiempo de carga.'
    ],
    arsenalRef: { tab: 'habilidades', label: 'Ver las 3 Artes del Aguijón →' }
  },
  {
    id: 'mec-soul-spells', phase: 'inicial', phaseLabel: 'ALMA INICIAL + HECHIZOS DESBLOQUEABLES', icon: '✨',
    title: 'Economía de Alma, Curación (Foco) y Hechizos',
    summary: 'El Alma es el recurso compartido entre sobrevivir (Foco) y desatar magia devastadora (Hechizos).',
    details: [
      'Generación: cada golpe de aguijón a un enemigo vivo otorga 11 de Alma en la vasija principal (capacidad base: 99 de Alma = 3 usos de 33).',
      'Curación (Foco): disponible desde el inicio; canalizar brevemente consume 33 de Alma y restaura 1 máscara de vida.',
      'Hechizos (33 de Alma base, o 24 con Tuercehechizos): Espíritu Vengativo / Alma Sombría (15→30 daño), Inmersión Desoladora / Oscuridad Descendente (35→60 daño + invulnerabilidad) y Espectros Aulladores / Chillido del Abismo (39→80 daño).'
    ],
    arsenalRef: { tab: 'hechizos', label: 'Ver los 6 Hechizos en Arsenal →' }
  },
  {
    id: 'mec-health-charms', phase: 'inicial', phaseLabel: 'PROGRESIÓN CONTINUA', icon: '🎭',
    title: 'Máscaras, Savia Vital, Muescas y Sobrecarga',
    summary: 'Sistema modular de salud y personalización de estilo de juego en bancos de descanso.',
    details: [
      'Tipos de vida: Máscaras blancas (5 base, hasta 9 con Fragmentos; curables con Foco), Máscaras azules de Savia Vital (temporales, no curables con Foco) y Máscaras de Colmena (regeneran la última máscara perdida).',
      'Muescas de Amuleto: empiezas con 3 y puedes alcanzar hasta 11 muescas explorando y comprando a Salubra.',
      'Sobrecarga (Overcharming): intentar equipar 5 veces un amuleto que exceda tus muescas lo fuerza a encajar, pero recibirás el doble de daño por cada golpe.'
    ],
    arsenalRef: { tab: 'amuletos', label: 'Explorar los 45 Amuletos →' }
  },
  {
    id: 'mec-combat-parry', phase: 'inicial', phaseLabel: 'FUNDAMENTOS DE COMBATE', icon: '🛡️',
    title: 'Combate, Esquiva, Parry y Aturdimiento',
    summary: 'El combate premia la lectura de señales visuales/sonoras, el posicionamiento y la paciencia sobre el aporreo.',
    details: [
      'Parry (desvío): si tu tajo choca exactamente contra el ataque de aguijón de un enemigo o jefe, ambos golpes se anulan con un destello metálico y breve pausa que te otorga invulnerabilidad.',
      'Aturdimiento (Stagger): golpear repetidamente a muchos jefes los hace caer unos segundos, abriendo una ventana segura para curarse con Foco.',
      'Invulnerabilidad (i-frames): Oscuridad Descendente concede invulnerabilidad valiosa al impactar; Capa Sombría permite atravesar jefes sin retroceder.'
    ],
    arsenalRef: null
  },
  {
    id: 'mec-geo-travel-dreams', phase: 'inicial', phaseLabel: 'EXPLORACIÓN Y SUEÑOS', icon: '🌙',
    title: 'Geo, Sombra, Viaje Rápido y Mecánicas Oníricas',
    summary: 'Sistemas que conectan riesgo, economía, movilidad por el mapa y el acceso al plano de los sueños.',
    details: [
      'Geo y Sombra: al morir dejas tu Sombra con todo tu Geo y tu vasija de Alma agrietada (limitada a 2/3) hasta derrotarla o invocarla con Jiji. Si mueres antes de recuperarla, ese Geo se pierde.',
      'Viaje rápido: combina Estaciones de Ciervo, Tranvías Superior/Inferior, Ascensores de Ciudad de Lágrimas y el Portal Onírico (900 Esencia, cuesta 1 Esencia por viaje).',
      'Aguijón Onírico: lee pensamientos ocultos de NPCs y enemigos, otorga 33 de Alma (66 con Portador Onírico) al golpear enemigos vivos y abre acceso a Guerreros Oníricos, Jefes Oníricos, Palacio Blanco y Hogar de los Dioses.'
    ],
    arsenalRef: { tab: 'objetos', label: 'Ver Aguijón Onírico y Portal Onírico →' }
  }
];
