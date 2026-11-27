// =============================================================================
// HALLOWNEST ARCHIVE — DATOS DE ENCICLOPEDIA (PARTE 2)
// Finales & Lore Profundo, 63 Logros Oficiales, Cronología, Secretos, Mapa Ampliado
// =============================================================================
window.HK_ENCYCLOPEDIA_DATA = window.HK_ENCYCLOPEDIA_DATA || {};

// -----------------------------------------------------------------------------
// 5. FINALES, SECRETOS Y LORE PROFUNDO (PROTEGIDO POR ADVERTENCIA DE SPOILERS)
// Distingue explícitamente entre hechos confirmados e interpretaciones
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.endingsAndLore = {
  endings: [
    {
      id: 'end-hollow-knight', title: 'Final 1: El Hollow Knight', tag: 'FINAL BASE · ESTÁNDAR',
      requirements: 'Romper los sellos de los 3 Soñadores (Monomon, Lurien, Herrah) y derrotar a El Hollow Knight en el Templo del Huevo Negro SIN poseer el Corazón del Vacío.',
      characters: 'El Caballero y El Hollow Knight.',
      events: 'Tras derrotar al contenedor original, el Caballero absorbe la Infección en su propio interior, queda encadenado dentro del Huevo Negro y la puerta del templo vuelve a sellarse con su propia máscara grabada en ella.',
      differences: 'Es un final cíclico y sombrío: perpetúa el plan original del Rey Pálido, manteniendo el estasis del reino sin eliminar realmente a El Resplandor.',
      interpretation: 'Confirmado: el sello se renueva temporalmente con el Caballero como nuevo contenedor. Interpretación de la comunidad: muchos debaten si el Caballero era verdaderamente "hueco" o si acabaría fracturándose igual que su hermano.'
    },
    {
      id: 'end-sealed-siblings', title: 'Final 2: Hermanos Sellados (Sealed Siblings)', tag: 'FINAL BASE · ALTERNATIVO',
      requirements: 'Obtener el Corazón del Vacío (unificando el Abismo), entrar al Templo del Huevo Negro, esperar a que Hornet inmovilice a El Hollow Knight y derrotarlo con el aguijón SIN usar el Aguijón Onírico.',
      characters: 'El Caballero, El Hollow Knight y Hornet.',
      events: 'Hornet acude a ayudarte, pero queda inconsciente dentro del templo cuando la fuerza del Huevo Negro la debilita. El Caballero absorbe la Infección y se sella el templo con el rostro de Hornet como única nueva Soñadora atrapada en su interior.',
      differences: 'Considerado el final más trágico: nadie queda fuera para romper el sello jamás, condenando tanto al Caballero como a Hornet a un encierro eterno.',
      interpretation: 'Confirmado: Hornet advirtió explícitamente que el Huevo Negro drenaría su fuerza si entraba. El sello queda cerrado desde dentro.'
    },
    {
      id: 'end-dream-no-more', title: 'Final 3: No Más Sueños (Dream No More)', tag: 'FINAL VERDADERO · JUEGO BASE',
      requirements: 'Poseer el Corazón del Vacío y el Aguijón Onírico Despertado; cuando Hornet inmovilice a El Hollow Knight, golpear la cabeza de este con el Aguijón Onírico y derrotar a El Resplandor.',
      characters: 'El Caballero, Hornet, El Hollow Knight, El Resplandor y los Hermanos del Vacío.',
      events: 'Dentro del plano onírico, el Caballero asciende junto a las sombras de sus hermanos y la sombra del propio Hollow Knight, que rasga a El Resplandor mientras el Caballero desata al Vacío para devorar la luz para siempre. Al despertar, la máscara partida del Caballero yace frente a Hornet mientras la Infección se disipa.',
      differences: 'Erradica definitivamente a El Resplandor y la Infección, liberando a las almas de las vasijas que regresan en paz al Abismo.',
      interpretation: 'Confirmado: la Infección desaparece del reino y la coraza del Caballero queda vacía en el suelo. Interpretación: se interpreta que la conciencia del Caballero regresa al Vacío junto a sus hermanos.'
    },
    {
      id: 'end-embrace-void', title: 'Final 4: Aceptar el Vacío (Embrace the Void)', tag: 'FINAL GODMASTER · PANTEÓN DE HALLOWNEST',
      requirements: 'Superar el Panteón de Hallownest en el Hogar de los Dioses derrotando al Resplandor Absoluto (SIN haber entregado una Flor Delicada a la Buscadora de Dioses).',
      characters: 'El Caballero (Señor de las Sombras), Buscadora de Dioses, Resplandor Absoluto, Hornet y El Hollow Knight.',
      events: 'Al derrotar al Resplandor Absoluto, el Caballero unifica todo el Vacío adoptando la forma colosal de la Entidad de Vacío (Señor de las Sombras), destroza a la diosa y brota desde el cuerpo de la Buscadora de Dioses en la Fosa de Basura. En la escena final, la Infección desaparece del Templo del Huevo Negro y el Hollow Knight emerge vivo frente a Hornet, quien adopta postura de combate.',
      differences: 'Único final donde El Hollow Knight sobrevive y sale libre del Templo, mientras una entidad colosal de Vacío se derrama sobre el mundo físico.',
      interpretation: 'Confirmado: la Infección se desvanece y el Hollow Knight camina libre hacia Hornet. Interpretación: la comunidad debate si el Señor de las Sombras es hostil o simplemente una fuerza primordial liberada.'
    },
    {
      id: 'end-delicate-flower', title: 'Final 5: Aceptar el Vacío (Variante Flor Delicada)', tag: 'FINAL GODMASTER · SECRETO',
      requirements: 'Entregar una Flor Delicada a la Buscadora de Dioses en la Fosa de Basura ANTES de vencer al Resplandor Absoluto en el Panteón de Hallownest.',
      characters: 'El Caballero, Buscadora de Dioses, Resplandor Absoluto, Hornet y El Hollow Knight.',
      events: 'El combate y la destrucción del Resplandor Absoluto ocurren igual, pero cuando el Vacío comienza a brotar de la Buscadora de Dioses en la Fosa de Basura, la Flor Delicada emite un destello blanco que desintegra tanto a la Buscadora como a la expansión del Vacío, dejando caer solo un pétalo manchado de negro. La escena final de Hornet y el Hollow Knight permanece igual.',
      differences: 'La Flor Delicada (procedente de tierras lejanas, traída por Ze’mer) demuestra poseer poder suficiente para contener o disipar el desbordamiento del Vacío.',
      interpretation: 'Confirmado: las flores delicadas reaccionan misteriosamente ante el Vacío. Interpretación: sugiere la existencia de otras fuerzas pálidas más allá de Hallownest.'
    },
    {
      id: 'end-mr-mushroom', title: 'Escena Extra: El Paso de la Era (Señor Seta)', tag: 'EPÍLOGO SECRETO',
      requirements: 'Hablar con el Señor Seta en sus 7 ubicaciones en orden con Hongo con Esporas equipado, y completar después cualquier final del juego.',
      characters: 'Señor Seta (El Heraldo).',
      events: 'Tras los créditos, el Señor Seta se eleva girando hacia el cielo dejando el texto "Continuará..." (To Be Continued).',
      differences: 'Se superpone como epílogo adicional a cualquiera de los 5 finales.',
      interpretation: 'Confirmado: celebra el ciclo de caída y renacimiento de los reinos y sirve de guiño humorístico hacia futuras historias de Team Cherry.'
    }
  ],
  lorePillars: [
    {
      title: 'El Vacío (The Void)',
      confirmed: 'Sustancia oscura y fluida que yace en el fondo de El Abismo, opuesta por naturaleza a la luz y anterior a Hallownest. Fue venerado por la Civilización Antigua y moldeado por el Rey Pálido para crear Moldes Reales, Moldes Alados y las Vasijas. Unificado mediante el Corazón del Vacío, obedece la voluntad del Caballero.',
      theory: 'La comunidad especula sobre si el Vacío posee una conciencia colectiva dormida ("Señor de las Sombras") o si únicamente cobra propósito cuando una voluntad —como la del Caballero— le da forma.'
    },
    {
      title: 'El Rey Pálido (Pale King)',
      confirmed: 'Antiguo Wyrm con capacidad de previsión que mudó su cuerpo gigantesco en Bordes del Reino para renacer en una forma diminuta, fundar Hallownest y conceder mente superior a los insectos. Sacrificó miles de hijos en el Abismo bajo el lema "No hay coste demasiado grande" y trasladó su Palacio Blanco al mundo de los sueños, donde murió en su trono.',
      theory: 'No se confirma la causa exacta de su muerte en el trono: las teorías más extendidas apuntan a la influencia del Vacío presente en su palacio (Moldes Reales y sombras), el agotamiento tras sellar el reino o la culpa.'
    },
    {
      title: 'El Resplandor (The Radiance)',
      confirmed: 'Deidad primordial de la luz y los sueños, creadora de la tribu de las polillas. Cuando su pueblo la olvidó al seguir la luz del Rey Pálido, su rencor y deseo de no desaparecer la llevaron a infiltrarse en los sueños de Hallownest, originando la Infección naranja.',
      theory: 'Se debate si la Infección fue un arma calculada o el efecto inevitable de su luz desesperada tratando de dominar las mentes que la olvidaron.'
    },
    {
      title: 'El Hollow Knight',
      confirmed: 'La vasija seleccionada por el Rey Pálido como "pura" para contener a El Resplandor. Creció y fue entrenado en el Palacio Blanco antes de ser encadenado en el Templo del Huevo Negro. La escena oculta del Sendero del Dolor muestra un breve instante de vínculo afectivo mutuo entre el Rey y la joven vasija: la "idea inculcada" que impidió que fuera totalmente hueco.',
      theory: 'Durante su combate, el Hollow Knight se apuñala a sí mismo: la interpretación mayoritaria es que aún conserva un atisbo de su propia voluntad intentando ayudar al Caballero a acabar con la plaga en su interior.'
    },
    {
      title: 'El Origen de la Infección',
      confirmed: 'Nace del rencor de El Resplandor en los sueños. Los insectos sueñan con una luz cegadora, pierden su libre albedrío y sus cuerpos se hinchan con pus naranja luminosa. Intentar resistirla voluntariamente la vuelve a menudo más violenta, mientras que disciplinas como la de la tribu Mantis lograron repelerla.',
      theory: 'La relación entre el brillo de los cristales del Pico de Cristal (que "cantan" con luz) y la presencia de la estatua de El Resplandor en la Corona de Hallownest sugiere que los cristales amplificaban su eco onírico.'
    },
    {
      title: 'El Destino de Hallownest',
      confirmed: 'Team Cherry ha declarado que no existe un único final canónico excluyente: todos los finales representan desenlaces posibles según las decisiones del jugador. En el juego, el reino ya había caído hace mucho y la aventura decide si su estasis continúa o si su larga noche concluye.',
      theory: 'Cómo encaja exactamente Hollow Knight: Silksong respecto a los finales de Hallownest sigue siendo objeto de debate hasta que el juego revele sus detalles completos.'
    }
  ]
};

// -----------------------------------------------------------------------------
// 6. TODOS LOS 63 LOGROS OFICIALES DE HOLLOW KNIGHT (VERIFICADOS CON ICONO)
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.achievements = [
  // COLECCIONABLES (Amuletos, Máscaras, Vasijas, Larvas, Esencia)
  { id: 'charmed', name: 'Encantado', en: 'Charmed', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/19/Achievement_Charmed.png/revision/latest', desc: 'Consigue tu primer amuleto.', req: 'Adquiere cualquier amuleto en Hallownest.' },
  { id: 'enchanted', name: 'Hechizado', en: 'Enchanted', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/59/Achievement_Enchanted.png/revision/latest', desc: 'Consigue la mitad de los amuletos de Hallownest.', req: 'Reúne 20 amuletos diferentes.' },
  { id: 'blessed', name: 'Bendecido', en: 'Blessed', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/1b/Achievement_Blessed.png/revision/latest', desc: 'Consigue todos los amuletos y recibe la bendición de Salubra.', req: 'Obtén los 40 espacios de amuletos llenos y compra la Bendición de Salubra (800 Geo).' },
  { id: 'protected', name: 'Protegido', en: 'Protected', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5e/Achievement_Protected.png/revision/latest', desc: 'Consigue 4 Fragmentos de Máscara.', req: 'Forma tu primera máscara adicional de vida.' },
  { id: 'masked', name: 'Enmascarado', en: 'Masked', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/25/Achievement_Masked.png/revision/latest', desc: 'Consigue todos los Fragmentos de Máscara.', req: 'Reúne los 16 Fragmentos de Máscara del reino (9 máscaras totales).' },
  { id: 'soulful', name: 'Lleno de Alma', en: 'Soulful', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/1c/Achievement_Soulful.png/revision/latest', desc: 'Consigue 3 Fragmentos de Vasija.', req: 'Completa tu primera reserva adicional de Alma.' },
  { id: 'worldsoul', name: 'Alma del Mundo', en: 'Worldsoul', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7d/Achievement_Worldsoul.png/revision/latest', desc: 'Consigue todos los Fragmentos de Vasija.', req: 'Reúne los 9 Fragmentos de Vasija (3 reservas extra).' },
  { id: 'grubfriend', name: 'Amigo de las Larvas', en: 'Grubfriend', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/e/e4/Achievement_Grubfriend.png/revision/latest', desc: 'Rescata a la mitad de las larvas prisioneras.', req: 'Libera al menos 23 de las 46 larvas.' },
  { id: 'metamorphosis', name: 'Metamorfosis', en: 'Metamorphosis', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/88/Achievement_Metamorphosis.png/revision/latest', desc: 'Rescata a todas las larvas prisioneras.', req: 'Libera a las 46 larvas y visita al Padre Larva.' },
  { id: 'attunement', name: 'Sintonía', en: 'Attunement', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0f/Achievement_Attunement.png/revision/latest', desc: 'Reúne 600 de Esencia.', req: 'Acumula 600 de Esencia con el Aguijón Onírico.' },
  { id: 'awakening', name: 'Despertar', en: 'Awakening', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/71/Achievement_Awakening.png/revision/latest', desc: 'Reúne 1.800 de Esencia y despierta el Aguijón Onírico.', req: 'Alcanza 1.800 de Esencia y habla con La Vidente.' },
  { id: 'ascension', name: 'Ascensión', en: 'Ascension', cat: 'coleccionables', catLabel: 'Coleccionables', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9d/Achievement_Ascension.png/revision/latest', desc: 'Reúne 2.400 de Esencia y escucha las últimas palabras de la Vidente.', req: 'Reúne 2.400 de Esencia y regresa con La Vidente en Tierras de Descanso.' },

  // EXPLORACIÓN
  { id: 'connection', name: 'Conexión', en: 'Connection', cat: 'exploracion', catLabel: 'Exploración', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f9/Achievement_Connection.png/revision/latest', desc: 'Abre la mitad de las Estaciones de Ciervo de Hallownest.', req: 'Desbloquea 5 Estaciones de Ciervocamino.' },
  { id: 'hope', name: 'Esperanza', en: 'Hope', cat: 'exploracion', catLabel: 'Exploración', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a4/Achievement_Hope.png/revision/latest', desc: 'Abre todas las Estaciones de Ciervo y descubre el Nido de Ciervos.', req: 'Abre las 10 estaciones y viaja con El Último Ciervo al Nido de Ciervos.' },
  { id: 'cartographer', name: 'Cartógrafo', en: 'Cartographer', cat: 'exploracion', catLabel: 'Exploración', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/84/Achievement_Cartographer.png/revision/latest', desc: 'Consigue un mapa de cada región.', req: 'Adquiere los mapas de todas las áreas cartografiables de Hallownest con Cornifer o Iselda.' },
  { id: 'keen-hunter', name: 'Cazador Perspicaz', en: 'Keen Hunter', cat: 'exploracion', catLabel: 'Exploración', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/3/3c/Achievement_Keen_Hunter.png/revision/latest', desc: 'Registra a todas las criaturas de Hallownest en el Diario del Cazador.', req: 'Desbloquea el primer registro de las 146 especies requeridas en el Diario.' },
  { id: 'true-hunter', name: 'Cazador Verdadero', en: 'True Hunter', cat: 'exploracion', catLabel: 'Exploración', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c8/Achievement_True_Hunter.png/revision/latest', desc: 'Recibe la Marca del Cazador.', req: 'Completa las cuotas de derrota de las 146 especies base y regresa con El Cazador.' },

  // HISTORIA
  { id: 'teacher', name: 'Maestra', en: 'Teacher', cat: 'historia', catLabel: 'Historia', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a0/Achievement_Teacher.png/revision/latest', desc: 'Destruye a Monomon la Maestra.', req: 'Rompe el sello de Monomon en los Archivos de la Maestra.' },
  { id: 'watcher', name: 'Vigía', en: 'Watcher', cat: 'historia', catLabel: 'Historia', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/a/af/Achievement_Watcher.png/revision/latest', desc: 'Destruye a Lurien el Vigía.', req: 'Rompe el sello de Lurien en la cima de la Torre del Vigía.' },
  { id: 'beast', name: 'Bestia', en: 'Beast', cat: 'historia', catLabel: 'Historia', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/cc/Achievement_Beast.png/revision/latest', desc: 'Destruye a Herrah la Bestia.', req: 'Rompe el sello de Herrah en la Guarida de la Bestia.' },
  { id: 'void', name: 'Vacío', en: 'Void', cat: 'historia', catLabel: 'Historia', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2e/Achievement_Void.png/revision/latest', desc: 'Recuerda el pasado y unifica El Abismo.', req: 'Equipa Alma del Rey, entra al Lugar de Nacimiento en El Abismo y obtén Corazón del Vacío.' },

  // COMBATE (Jefes y Coliseo)
  { id: 'falsehood', name: 'Falsedad', en: 'Falsehood', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/bf/Achievement_Falsehood.png/revision/latest', desc: 'Derrota al Falso Caballero.', req: 'Vence al Falso Caballero en Cruces Olvidados.' },
  { id: 'strength', name: 'Fuerza', en: 'Strength', cat: 'combate', catLabel: 'Combate', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c4/Achievement_Strength.png/revision/latest', desc: 'Derrota al Campeón Fallido.', req: 'Usa el Aguijón Onírico en el cadáver del Falso Caballero y vence a su versión onírica.' },
  { id: 'test-of-resolve', name: 'Prueba de Resolución', en: 'Test of Resolve', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7f/Achievement_Test_of_Resolve.png/revision/latest', desc: 'Derrota a Hornet en Sendero Verde.', req: 'Vence a Hornet Protectora en Sendero Verde.' },
  { id: 'proof-of-resolve', name: 'Demostración de Resolución', en: 'Proof of Resolve', cat: 'combate', catLabel: 'Combate', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d1/Achievement_Proof_of_Resolve.png/revision/latest', desc: 'Derrota a Hornet en Bordes del Reino.', req: 'Vence a Hornet Centinela en Bordes del Reino.' },
  { id: 'illumination', name: 'Iluminación', en: 'Illumination', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0b/Achievement_Illumination.png/revision/latest', desc: 'Derrota al Maestro de Almas.', req: 'Vence al Maestro de Almas en el Santuario de Almas.' },
  { id: 'mortality', name: 'Mortalidad', en: 'Mortality', cat: 'combate', catLabel: 'Combate', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/96/Achievement_Mortality.png/revision/latest', desc: 'Derrota al Tirano de Almas.', req: 'Vence a la manifestación onírica del Maestro de Almas.' },
  { id: 'release', name: 'Liberación', en: 'Release', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/18/Achievement_Release.png/revision/latest', desc: 'Derrota a Vasija Rota.', req: 'Vence a Vasija Rota en Cuenca Antigua.' },
  { id: 'peace', name: 'Paz', en: 'Peace', cat: 'combate', catLabel: 'Combate', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/89/Achievement_Peace.png/revision/latest', desc: 'Derrota al Familiar Perdido.', req: 'Vence a la forma onírica de Vasija Rota con el Aguijón Onírico.' },
  { id: 'honour', name: 'Honor', en: 'Honour', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/bf/Achievement_Honour.png/revision/latest', desc: 'Derrota al Defensor del Estiércol.', req: 'Vence a Ogrim en los Canales Reales.' },
  { id: 'respect', name: 'Respeto', en: 'Respect', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7e/Achievement_Respect.png/revision/latest', desc: 'Derrota a los Señores Mantis.', req: 'Supera el reto de las tres Señores Mantis en la Aldea Mantis.' },
  { id: 'obsession', name: 'Obsesión', en: 'Obsession', cat: 'combate', catLabel: 'Combate', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/69/Achievement_Obsession.png/revision/latest', desc: 'Derrota al Coleccionista.', req: 'Abre la Torre del Amor con la Llave del Amor y derrota al Coleccionista.' },
  { id: 'execution', name: 'Ejecución', en: 'Execution', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c6/Achievement_Execution.png/revision/latest', desc: 'Derrota al Señor Traidor.', req: 'Vence al Señor Traidor en los Jardines de la Reina.' },
  { id: 'rivalry', name: 'Rivalidad', en: 'Rivalry', cat: 'combate', catLabel: 'Combate', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/1d/Achievement_Rivalry.png/revision/latest', desc: 'Derrota a Zote en el Coliseo de los Insensatos.', req: 'Rescata a Zote en Sendero Verde y Nido Profundo y véncelo en la Prueba del Guerrero.' },
  { id: 'warrior', name: 'Guerrero', en: 'Warrior', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/f/f8/Achievement_Warrior.png/revision/latest', desc: 'Completa la Prueba del Guerrero.', req: 'Supera la primera prueba del Coliseo de los Insensatos.' },
  { id: 'conqueror', name: 'Conquistador', en: 'Conqueror', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/3/38/Achievement_Conqueror.png/revision/latest', desc: 'Completa la Prueba del Conquistador.', req: 'Supera la segunda prueba del Coliseo de los Insensatos.' },
  { id: 'fool', name: 'Insensato', en: 'Fool', cat: 'combate', catLabel: 'Combate', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/3/39/Achievement_Fool.png/revision/latest', desc: 'Completa la Prueba de los Insensatos.', req: 'Supera la tercera y más exigente prueba del Coliseo.' },
  { id: 'memory', name: 'Memoria', en: 'Memory', cat: 'combate', catLabel: 'Combate · Hidden Dreams', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/c/c5/Achievement_Memory.png/revision/latest', desc: 'Derrota al Defensor Blanco.', req: 'Accede a la sala oculta bajo la palanca del Defensor del Estiércol (tras 3 Soñadores) y vence su sueño.' },
  { id: 'dark-romance', name: 'Romance Oscuro', en: 'Dark Romance', cat: 'combate', catLabel: 'Combate · Hidden Dreams', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/a/a0/Achievement_Dark_Romance.png/revision/latest', desc: 'Derrota al Príncipe Gris Zote.', req: 'Rescata a Bretta y Zote, entra al sótano de Bretta y vence a la estatua en sueños.' },
  { id: 'grand-performance', name: 'Gran Actuación', en: 'Grand Performance', cat: 'combate', catLabel: 'Combate · Grimm Troupe', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9e/Achievement_Grand_Performance.png/revision/latest', desc: 'Derrota al Maestro de la Compañía Grimm.', req: 'Reúne las dos primeras tandas de llamas y vence a Grimm en su carpa.' },

  // MISIONES Y DECISIONES DE NPC
  { id: 'neglect', name: 'Negligencia', en: 'Neglect', cat: 'misiones', catLabel: 'Misiones · Decisión', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/6f/Achievement_Neglect.png/revision/latest', desc: 'Deja morir a Zote.', req: 'No salves a Zote del Rey Vengamosca en Sendero Verde; regresa tras conseguir Garra de Mantis y golpea su máscara. (Mutuamente excluyente con Rivalidad en una misma partida).' },
  { id: 'witness', name: 'Testigo', en: 'Witness', cat: 'misiones', catLabel: 'Misiones', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/16/Achievement_Witness.png/revision/latest', desc: 'Pasa un momento final con Quirrel.', req: 'Tras derrotar a Monomon, habla por última vez con Quirrel junto a la orilla del Lago Azul.' },
  { id: 'purity', name: 'Pureza', en: 'Purity', cat: 'misiones', catLabel: 'Misiones · Decisión', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/68/Achievement_Purity.png/revision/latest', desc: 'Acaba con el Forjaguijones con el Aguijón Puro.', req: 'Forja el Aguijón Puro y cumple su petición final fuera de su taller. (Excluyente con Pareja Feliz).' },
  { id: 'happy-couple', name: 'Pareja Feliz', en: 'Happy Couple', cat: 'misiones', catLabel: 'Misiones · Decisión', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/60/Achievement_Happy_Couple.png/revision/latest', desc: 'Permite que el Forjaguijones encuentre una nueva vocación.', req: 'Perdona al Forjaguijones tras forjar el Aguijón Puro y visítalo después en la cabaña de Sheo en Sendero Verde.' },
  { id: 'solace', name: 'Consuelo', en: 'Solace', cat: 'misiones', catLabel: 'Misiones', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/7/7f/Achievement_Solace.png/revision/latest', desc: 'Lleva paz a la Doliente Gris.', req: 'Entrega la Flor Delicada intacta en la tumba de los Jardines de la Reina y regresa con Ze’mer.' },
  { id: 'ritual', name: 'Ritual', en: 'Ritual', cat: 'misiones', catLabel: 'Misiones · Grimm Troupe', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/6/66/Achievement_Ritual.png/revision/latest', desc: 'Derrota al Rey Pesadilla y completa el Ritual.', req: 'Vence al Rey Pesadilla Grimm en el sueño de Grimm. (Excluyente con Destierro).' },
  { id: 'banishment', name: 'Destierro', en: 'Banishment', cat: 'misiones', catLabel: 'Misiones · Grimm Troupe', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/5a/Achievement_Banishment.png/revision/latest', desc: 'Destierra a la Compañía de Grimm de Hallownest.', req: 'Reúnete con Brumm en Pueblo Distante y apaga la Linterna de Pesadilla en Acantilados Aulladores.' },

  // DESAFÍOS (Speedrun, 100%, 112%, Alma de Acero)
  { id: 'completion', name: 'Finalización', en: 'Completion', cat: 'desafios', catLabel: 'Desafíos', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/8a/Achievement_Completion.png/revision/latest', desc: 'Alcanza el 100% de completado y termina el juego.', req: 'Llega al menos al 100% de completado y derrota al jefe final.' },
  { id: 'speed-completion', name: 'Finalización Rápida', en: 'Speed Completion', cat: 'desafios', catLabel: 'Desafíos', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/0/0c/Achievement_Speed_Completion.png/revision/latest', desc: 'Completa el juego al 100% en menos de 20 horas.', req: 'Termina la partida con 100%+ en menos de 20 horas de tiempo de juego.' },
  { id: 'speedrun-1', name: 'Speedrun 1', en: 'Speedrun 1', cat: 'desafios', catLabel: 'Desafíos', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9f/Achievement_Speedrun_1.png/revision/latest', desc: 'Completa el juego en menos de 10 horas.', req: 'Alcanza cualquier final en menos de 10 horas.' },
  { id: 'speedrun-2', name: 'Speedrun 2', en: 'Speedrun 2', cat: 'desafios', catLabel: 'Desafíos', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/8c/Achievement_Speedrun_2.png/revision/latest', desc: 'Completa el juego en menos de 5 horas.', req: 'Alcanza cualquier final en menos de 5 horas.' },
  { id: 'steel-soul', name: 'Alma de Acero', en: 'Steel Soul', cat: 'desafios', catLabel: 'Desafíos · Muerte Permanente', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/57/Achievement_Steel_Soul.png/revision/latest', desc: 'Termina el juego en modo Alma de Acero.', req: 'Completa cualquier final sin morir una sola vez en Modo Alma de Acero.' },
  { id: 'steel-heart', name: 'Corazón de Acero', en: 'Steel Heart', cat: 'desafios', catLabel: 'Desafíos · Muerte Permanente', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/3/36/Achievement_Steel_Heart.png/revision/latest', desc: 'Alcanza el 100% de completado y termina el juego en modo Alma de Acero.', req: 'Llega al 100%+ y completa el juego en Modo Alma de Acero.' },
  { id: 'pure-completion', name: 'Finalización Pura', en: 'Pure Completion', cat: 'desafios', catLabel: 'Desafíos · Godmaster', spoiler: false, img: 'https://static.wikia.nocookie.net/hollowknight/images/5/57/Achievement_Pure_Completion.png/revision/latest', desc: 'Alcanza el 112% de completado y termina el juego.', req: 'Consigue absolutamente todo el porcentaje base y de expansiones (112%) y completa cualquier final.' },

  // PANTEONES (Godmaster)
  { id: 'brotherhood', name: 'Hermandad', en: 'Brotherhood', cat: 'panteones', catLabel: 'Panteones · Godmaster', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/1/19/Achievement_Brotherhood.png/revision/latest', desc: 'Completa el Panteón del Maestro.', req: 'Supera el 1.º Panteón venciendo a los Hermanos Oro y Mato.' },
  { id: 'inspiration', name: 'Inspiración', en: 'Inspiration', cat: 'panteones', catLabel: 'Panteones · Godmaster', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/b/b1/Achievement_Inspiration.png/revision/latest', desc: 'Completa el Panteón del Artista.', req: 'Supera el 2.º Panteón venciendo al Maestro Pintor Sheo.' },
  { id: 'focus', name: 'Concentración', en: 'Focus', cat: 'panteones', catLabel: 'Panteones · Godmaster', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/2e/Achievement_Focus.png/revision/latest', desc: 'Completa el Panteón del Sabio.', req: 'Supera el 3.º Panteón venciendo al Gran Sabio del Aguijón Sly.' },
  { id: 'soul-and-shade', name: 'Alma y Sombra', en: 'Soul & Shade', cat: 'panteones', catLabel: 'Panteones · Godmaster', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/99/Achievement_Soul_%26_Shade.png/revision/latest', desc: 'Completa el Panteón del Caballero.', req: 'Supera el 4.º Panteón venciendo a Vasija Pura.' },

  // FINALES Y ESPECIALES
  { id: 'ach-hollow-knight', name: 'El Hollow Knight', en: 'The Hollow Knight', cat: 'finales', catLabel: 'Finales', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/d/d5/Achievement_The_Hollow_Knight.png/revision/latest', desc: 'Derrota al Hollow Knight y conviértete en la Vasija.', req: 'Consigue el Final 1 derrotando al Hollow Knight sin el Corazón del Vacío.' },
  { id: 'ach-sealed-siblings', name: 'Hermanos Sellados', en: 'Sealed Siblings', cat: 'finales', catLabel: 'Finales', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/2/28/Achievement_Sealed_Siblings.png/revision/latest', desc: 'Derrota al Hollow Knight con Hornet a tu lado.', req: 'Consigue el Final 2 derrotando al Hollow Knight con el Corazón del Vacío sin usar el Aguijón Onírico.' },
  { id: 'ach-dream-no-more', name: 'No Más Sueños', en: 'Dream No More', cat: 'finales', catLabel: 'Finales', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/4/4e/Achievement_Dream_No_More.png/revision/latest', desc: 'Derrota a El Resplandor y consume la luz.', req: 'Consigue el Final 3 usando el Aguijón Onírico sobre el Hollow Knight y venciendo a El Resplandor.' },
  { id: 'ach-embrace-void', name: 'Aceptar el Vacío', en: 'Embrace the Void', cat: 'finales', catLabel: 'Finales · Panteones', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/9/9f/Achievement_Embrace_the_Void.png/revision/latest', desc: 'Asciende el Panteón de Hallownest y ocupa tu lugar en la cima.', req: 'Completa el 5.º Panteón (42 jefes consecutivos) derrotando al Resplandor Absoluto.' },
  { id: 'ach-passing-age', name: 'El Paso de la Era', en: 'Passing of the Age', cat: 'especiales', catLabel: 'Especiales · Epílogo', spoiler: true, img: 'https://static.wikia.nocookie.net/hollowknight/images/8/80/Achievement_Passing_of_the_Age.png/revision/latest', desc: 'Ayuda al Heraldo a seguir adelante.', req: 'Completa los 7 encuentros del Señor Seta con Hongo con Esporas y termina cualquier final.' }
];

// -----------------------------------------------------------------------------
// 7. CRONOLOGÍA VISUAL DE HALLOWNEST (CONFIRMADO VS ORDEN ESTIMADO)
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.timeline = [
  {
    era: 'ERA 01 · PRE-HALLOWNEST', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'La Civilización Antigua del Vacío',
    summary: 'Antes de existir Hallownest, una antigua civilización habitó las profundidades junto al Abismo y veneró directamente la oscuridad del Vacío.',
    details: 'Tallaron tótems de Alma, forjaron los Ídolos del Vacío y preservaron su saber en Huevos Arcanos. Desaparecieron por causas desconocidas mucho antes de la llegada del Rey Pálido.'
  },
  {
    era: 'ERA 02 · DEIDADES PRIMORDIALES', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'El Resplandor, Unn y las Tribus Primigenias',
    summary: 'El territorio subterráneo estaba habitado por tribus independientes: las polillas adoraban a El Resplandor, Unn soñaba Sendero Verde y las Mantis, Arañas, Hongos y Abejas regían sus dominios.',
    details: 'Cada tribu coexistía en sus biomas respectivos sin un reino unificado. La tribu de las polillas nació directamente de la luz de El Resplandor.'
  },
  {
    era: 'ERA 03 · LA LLEGADA DEL WYRM', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'Muda del Wyrm y Aparición del Rey Pálido',
    summary: 'Un colosal Wyrm viajó hasta los confines del mundo, mudó su enorme cuerpo en Bordes del Reino y renació bajo una forma más pequeña: el Rey Pálido.',
    details: 'Su cadáver gigantesco sigue desprendiendo la "ceniza" blanca que cae perpetuamente sobre Bordes del Reino. Como Ser Superior, su presencia irradiaba una luz pálida que otorgaba pensamiento expandido.'
  },
  {
    era: 'ERA 04 · FUNDACIÓN', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'Fundación del Reino de Hallownest',
    summary: 'El Rey Pálido y la Dama Blanca unificaron gran parte de las cavernas, fundaron Hallownest y prometieron un reino "eterno".',
    details: 'Las polillas abandonaron el culto a El Resplandor seducidas por la luz del Rey. Las tribus Fúngica y del Musgo aceptaron acuerdos de convivencia, mientras las Mantis pactaron autonomía a cambio de vigilar Nido Profundo.'
  },
  {
    era: 'ERA 05 · EDAD DE ORO', status: 'estimado', statusLabel: 'Orden interno estimado',
    title: 'Auge de Ciudad de Lágrimas y los Cinco Grandes Caballeros',
    summary: 'Se construyeron la capital subterránea, los Canales Reales, las Estaciones de Ciervocamino, las minas del Pico de Cristal y las líneas de Tranvía.',
    details: 'Los Cinco Grandes Caballeros (Dryya, Isma, Hegemol, Ogrim y Ze’mer) protegían el reino. Nido Profundo rechazó el intento de construir el Tranvía Fallido en sus tierras. El orden exacto de varias obras públicas no se fecha en el juego.'
  },
  {
    era: 'ERA 06 · EL REGRESO DE LA LUZ', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'Estallido y Expansión de la Infección',
    summary: 'Olvidada por su pueblo, El Resplandor se negó a desaparecer y comenzó a invadir los sueños de Hallownest manifestándose como la Infección naranja.',
    details: 'Los ciudadanos soñaban con una luz cegadora y enloquecían. El Santuario de Almas experimentó desesperadamente con Alma buscando la inmortalidad y una cura, pese a la oposición del Rey, terminando igualmente corrompido.'
  },
  {
    era: 'ERA 07 · NO HAY COSTE DEMASIADO GRANDE', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'El Abismo y la Creación de las Vasijas',
    summary: 'El Rey Pálido y la Dama Blanca arrojaron incontables huevos al Abismo para que el Vacío ahuecara a sus hijos, buscando un contenedor sin mente, sin voluntad y sin voz capaz de encerrar a El Resplandor.',
    details: 'Solo una vasija logró ascender desde la sima y fue elegida como El Hollow Knight; el Caballero protagonista estuvo a punto de alcanzar la cima antes de caer de vuelta al Abismo, que luego fue sellado.'
  },
  {
    era: 'ERA 08 · EL PACTO DE LOS SOÑADORES', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'Crianza del Hollow Knight, Nacimiento de Hornet y los Tres Sellos',
    summary: 'El Hollow Knight fue entrenado hasta su forma adulta en el Palacio Blanco. Para asegurar su encierro eterno, Lurien, Monomon y Herrah aceptaron convertirse en Soñadores.',
    details: 'Herrah solo aceptó el pacto a cambio de engendrar una hija con el Rey Pálido: así nació Hornet. Sin embargo, el breve vínculo afectivo entre el Rey y el joven Hollow Knight sembró la falla que debilitaría el sello.'
  },
  {
    era: 'ERA 09 · EL SELLADO', status: 'confirmado', statusLabel: 'Confirmado en el lore',
    title: 'Sellado del Huevo Negro y Desaparición del Palacio Blanco',
    summary: 'El Resplandor fue encerrado dentro de El Hollow Knight en el Templo del Huevo Negro, protegido por los tres sellos de los Soñadores.',
    details: 'En un momento posterior no fechado con exactitud, el Rey Pálido desapareció junto con todo su Palacio Blanco al mundo de los sueños. El reino perdió a su monarca y se sumió en decadencia silenciosa.'
  },
  {
    era: 'ERA 10 · ESTASIS Y FRACTURA', status: 'estimado', statusLabel: 'Duración exacta no confirmada',
    title: 'Caída del Reino y Grietas en el Sello',
    summary: 'Durante un periodo indeterminado de tiempo, Hallownest cayó en ruinas mientras algunas vasijas escaparon del Abismo hacia las tierras salvajes más allá del reino.',
    details: 'Con el tiempo, la mente del Hollow Knight se fracturó desde dentro, permitiendo que la Infección volviera a filtrarse y que el propio Huevo Negro emitiera un llamado hacia las vasijas supervivientes.'
  },
  {
    era: 'ERA 11 · PRESENTE DEL JUEGO', status: 'confirmado', statusLabel: 'Acontecimientos jugables',
    title: 'El Regreso del Caballero a Hallownest',
    summary: 'Respondiendo al llamado del Huevo Negro, el Caballero regresa desde las tierras yermas cruzando el Pasaje del Rey hacia Bocasucia.',
    details: 'Recorre los 14 biomas, descubre la verdad sobre su origen en El Abismo, rompe los sellos de los Soñadores (o responde a la Compañía de Grimm y la Buscadora de Dioses) y decide finalmente el destino de Hallownest.'
  }
];

// -----------------------------------------------------------------------------
// 8. SECRETOS, CURIOSIDADES Y EASTER EGGS VERIFICADOS
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.secrets = [
  {
    id: 'sec-path-of-pain', theme: 'habitaciones', themeLabel: 'Habitación Oculta · Palacio Blanco', region: 'Cuenca Antigua (Palacio Blanco)',
    title: 'El Sendero del Dolor (Path of Pain)',
    desc: 'Sección secreta extrema añadida en The Grimm Troupe tras una pared falsa al inicio del ala principal del Palacio Blanco. Exige dominar el pogo sobre sierras, espinas y Moldes Alados.',
    howToFind: 'Golpea la pared izquierda justo al subir la segunda corriente de luz tras el banco central del Palacio Blanco. Recompensa: el Sello de Vínculo y la escena oculta del Rey Pálido junto al joven Hollow Knight.'
  },
  {
    id: 'sec-menderbug', theme: 'interacciones', themeLabel: 'Interacción Secreta · Cruces Olvidados', region: 'Cruces Olvidados',
    title: 'Menderbug y su Diario Oculto',
    desc: 'Cada vez que rompes el cartel de la entrada de Cruces Olvidados hay un 2% de probabilidad de encontrar al diminuto Menderbug reparándolo al bajar por el pozo.',
    howToFind: 'Si logras derrotarlo (por ejemplo cayendo con Oscuridad Descendente), se desbloquea su pequeña casa cerrada en la aldea de Cruces Olvidados donde puedes leer su conmovedor diario personal sobre su esposa y su oficio.'
  },
  {
    id: 'sec-shrine-believers', theme: 'desarrollo', themeLabel: 'Curiosidad de Desarrollo · Kickstarter', region: 'Tierras de Descanso',
    title: 'El Santuario de los Creyentes (Shrine of Believers)',
    desc: 'Cámara oculta tras la catarata del Claro de los Espíritus llena de placas oníricas con mensajes reales escritos por los patrocinadores de la campaña de Kickstarter de Hollow Knight.',
    howToFind: 'En el Claro de los Espíritus, salta hacia el techo sobre la cascada y usa el Aguijón Onírico en la polilla dorada de la estancia secreta.'
  },
  {
    id: 'sec-watcher-chandelier', theme: 'habitaciones', themeLabel: 'Atajo de Combate · Ciudad de Lágrimas', region: 'Ciudad de Lágrimas',
    title: 'El Candelabro de los Caballeros Vigías',
    desc: 'Justo antes de entrar a la arena de los 6 Caballeros Vigías existe una sala oculta en el techo que permite cortar una cuerda y aplastar a uno de los caparazones antes de empezar la lucha.',
    howToFind: 'Rompe el techo agrietado en el pasillo izquierdo anterior a la puerta de los Caballeros Vigías y corta la cuerda del candelabro: el combate pasa permanentemente de 6 a 5 caballeros.'
  },
  {
    id: 'sec-eternal-ordeal', theme: 'expansiones', themeLabel: 'Secreto de Godmaster · Hogar de los Dioses', region: 'Hogar de los Dioses',
    title: 'El Calvario Eterno (The Eternal Ordeal)',
    desc: 'Desafío secreto e infinito en el Salón de los Dioses donde combates contra oleadas interminables de variedades cómicas de Zotelings mientras suena la voz desafinada de Zote cantando el tema principal.',
    howToFind: 'En el piso superior del Salón de los Dioses, salta hacia el techo al final del pasillo derecho y atraviesa un muro falso. Derrotar a 57 Zotelings desbloquea el tema de menú secreto "El Calvario Eterno" con Zote cantando.'
  },
  {
    id: 'sec-land-of-storms', theme: 'expansiones', themeLabel: 'Secreto de Godmaster · Panteones', region: 'Hogar de los Dioses',
    title: 'La Tierra de Tormentas (Land of Storms)',
    desc: 'Recuerdo oculto de la patria devastada de los Buscadores de Dioses, hogar de los antiguos dioses del trueno y la lluvia que los abandonaron.',
    howToFind: 'Completa los 5 Panteones con las 4 Ataduras (pueden hacerse de una en una) para abrir la brecha oculta a la izquierda de la puerta de la Cámara de Savia Vital. Allí aguarda la Máscara Desgastada.'
  },
  {
    id: 'sec-defender-crest', theme: 'interacciones', themeLabel: 'Interacciones de Amuleto · Todo el Reino', region: 'Múltiples regiones',
    title: 'Interacciones Ocultas del Emblema del Defensor',
    desc: 'Equipar el oloroso Emblema del Defensor desencadena reacciones únicas en numerosos NPCs y cambia el funcionamiento de varios amuletos.',
    howToFind: 'Comedor de Piernas te hace 20% de descuento; Tuk te regala un Huevo Podrido gratis; Lemm se niega a hablar contigo por el olor; la Dama Blanca recuerda a Ogrim; además crea sinergias visuales/tácticas con Nido de Trematodos, Hongo con Esporas y Útero Brillante.'
  },
  {
    id: 'sec-flower-gifts', theme: 'dialogos', themeLabel: 'Diálogos Secretos · Misión', region: 'Bocasucia, Bordes del Reino, Canales Reales',
    title: 'Destinatarios Secretos de la Flor Delicada',
    desc: 'Además de la tumba de los Jardines de la Reina, la Flor Delicada puede entregarse a otros personajes del reino provocando escenas únicas.',
    howToFind: 'Puedes entregarla a Bicho Viejo (la acepta emocionado), al Maestro Oro (la guarda en secreto en un jarrón) y a la Buscadora de Dioses (altera el final de Godmaster). La Dama Blanca y Emilitia también tienen diálogos especiales al mostrársela.'
  },
  {
    id: 'sec-millibelle-spa', theme: 'interacciones', themeLabel: 'Evento Oculto · Ciudad de Lágrimas', region: 'Ciudad de Lágrimas',
    title: 'La Venganza contra Millibelle en la Casa del Placer',
    desc: 'Si Millibelle te roba tus ahorros, no los pierdes para siempre: puedes encontrarla dándose un baño termal en la Casa del Placer.',
    howToFind: 'Usa una Llave Simple en la Casa del Placer, sube al piso termal y golpea a Millibelle repetidamente: soltará aproximadamente un 50% MÁS de Geo del que le confiaste.'
  },
  {
    id: 'sec-mask-maker-face', theme: 'dialogos', themeLabel: 'Detalle Ambiental · Nido Profundo', region: 'Nido Profundo',
    title: 'El Verdadero Rostro del Hacedor de Máscaras',
    desc: 'El enigmático Hacedor de Máscaras cambia periódicamente de máscara cada vez que visitas su taller, pero es posible ver brevemente lo que oculta debajo.',
    howToFind: 'Lanza Inmersión Desoladora u Oscuridad Descendente junto a su mesa: el temblor hará caer su máscara al suelo y dirá líneas secretas antes de ponérsela de nuevo.'
  },
  {
    id: 'sec-flukemarm-lore', theme: 'dialogos', themeLabel: 'Diálogo Secreto · Godmaster', region: 'Hogar de los Dioses',
    title: 'La "Atractiva Diosa de la Maternidad"',
    desc: 'En el Salón de los Dioses, la estatua de Flukemarm recibe el título oficial de "Atractiva diosa de la maternidad" (Alluring God of Motherhood), uno de los guiños humorísticos más célebres de Team Cherry.',
    howToFind: 'Inspecciona la placa de la estatua de Flukemarm en el Salón de los Dioses.'
  },
  {
    id: 'sec-hungry-knight', theme: 'desarrollo', themeLabel: 'Curiosidad de Desarrollo · Team Cherry', region: 'Historia de Desarrollo',
    title: 'De "Hungry Knight" (Game Jam) a Hollow Knight',
    desc: 'El diseño del Caballero nació en 2013 durante la Ludum Dare 27 en un minijuego llamado Hungry Knight donde un pequeño insecto debía recolectar cerezas antes de morir de hambre.',
    howToFind: 'Team Cherry mantuvo la silueta de cuernos y capa oscura del prototipo y la evolucionó hacia el metroidvania completo financiado en Kickstarter en 2014.'
  },
  {
    id: 'sec-grub-metamorphosis', theme: 'ambientales', themeLabel: 'Detalle Ambiental · Cruces Olvidados', region: 'Cruces Olvidados',
    title: 'La Verdad sobre el Padre Larva',
    desc: 'Muchos jugadores se alarman al ver al Padre Larva con las 46 larvas dentro de su vientre, pero los sonidos felices de su interior y el nombre del logro y el amuleto confirman su propósito.',
    howToFind: 'El logro se llama "Metamorfosis" y el amuleto final "Elegía de la Larvamosca": el Padre Larva se sacrifica voluntariamente sirviendo de capullo vivo para que sus hijos pasen a su siguiente etapa vital.'
  },
  {
    id: 'sec-lifeblood-abyss', theme: 'habitaciones', themeLabel: 'Cámara Secreta · El Abismo', region: 'El Abismo',
    title: 'La Puerta Azul del Núcleo de Savia Vital',
    desc: 'En la pared occidental del Abismo existe una misteriosa puerta sellada con símbolos azules que solo se abre si portas suficientes máscaras de Savia Vital.',
    howToFind: 'Equipa Corazón de Savia Vital + Bendición de Joni (o recolecta capullos) hasta sumar al menos 14 máscaras azules (15 con Bendición de Joni) para abrirla y recoger el Núcleo de Savia Vital y un Huevo Arcano.'
  },
  {
    id: 'sec-dung-statues', theme: 'ambientales', themeLabel: 'Detalle Ambiental · Canales Reales', region: 'Canales Reales',
    title: 'Las Esculturas de Ogrim y el Retrato del Caballero',
    desc: 'Debajo de la sala de la palanca de los Canales Reales, Ogrim guarda esculturas hechas por él mismo del Rey Pálido y de los Cinco Grandes Caballeros.',
    howToFind: 'Si derrotas al Defensor Blanco las 5 veces completas en sueños, Ogrim despierta feliz, se marcha y deja una nueva escultura hecha a imagen del propio Caballero.'
  },
  {
    id: 'sec-silksong-refs', theme: 'silksong', themeLabel: 'Referencias Verificadas · Silksong', region: 'Nido Profundo y Finales',
    title: 'Semillas Verificadas hacia Hollow Knight: Silksong',
    desc: 'La Guarida de Tejedoras en Nido Profundo, los diálogos de la Comadrona sobre las Tejedoras que regresaron a su antigua patria y la escena de Hornet frente al Templo del Huevo Negro en Godmaster sientan bases narrativas confirmadas sobre la protagonista de Silksong.',
    howToFind: 'Originalmente Hornet jugable fue una meta de Kickstarter de 56.000 AUD que creció tanto en alcance que Team Cherry decidió convertirla en una secuela completa situada en Pharloom.'
  }
];

// -----------------------------------------------------------------------------
// 9. MAPA INTERACTIVO AMPLIADO (14 PINES POSICIONADOS SOBRE Clean_map_updated.png)
// -----------------------------------------------------------------------------
window.HK_ENCYCLOPEDIA_DATA.expandedMapRegions = [
  {
    id: 'map-howling', short: 'Acantilados', name: 'Acantilados Aulladores (Howling Cliffs)', zone: 'Noroeste · Superficie',
    x: 16, y: 12,
    connections: 'Bocasucia (este) · Pasaje del Rey (sur) · Sendero Verde (cueva sur).',
    characters: 'Maestro del Aguijón Mato, Gorb (Guerrero Onírico), Joni (espíritu), cadáver de la Linterna de Grimm.',
    creatures: [
      { id: 'gorb', label: 'Gorb' }, { id: 'crawlid', label: 'Reptador' }, { id: 'vengefly', label: 'Vengamosca' }, { id: 'elder-baldur', label: 'Baldur Anciano' }
    ],
    collectibles: 'Bendición de Joni, Coraza de Baldur, 1 Larva, 1 Ídolo del Rey, 1 Diario del Errante, Raíz Susurrante (46 Esencia).',
    transport: 'Acceso a pie desde el Pasaje del Rey (con Garra de Mantis) o desde Bocasucia.',
    pois: 'Cabaña de Mato (Corte Ciclónico), Reposo de Joni, Linterna de Pesadilla (inicio de The Grimm Troupe) y el Límite del Reino.',
    secrets: 'En el extremo izquierdo sopla el viento que borra la memoria de los insectos que abandonan el reino; aquí también se apaga la linterna en la ruta del Destierro.'
  },
  {
    id: 'map-dirtmouth', short: 'Bocasucia', name: 'Bocasucia (Dirtmouth)', zone: 'Superficie Norte · Refugio',
    x: 41, y: 12,
    connections: 'Pozo hacia Cruces Olvidados · Ascensor desde Pico de Cristal · Acantilados Aulladores.',
    characters: 'Bicho Viejo, Iselda, Cornifer, Sly, Bretta, Zote, Confesora Jiji / Jinn, Grimm, Divine, Brumm / Nymm.',
    creatures: [
      { id: 'grimm', label: 'Grimm' }, { id: 'nightmare-king', label: 'Rey Pesadilla' }, { id: 'grey-prince-zote', label: 'Príncipe Gris Zote' }
    ],
    collectibles: '4 Fragmentos de Máscara y 2 de Vasija (Sly), Fragmento de Máscara (casa de Bretta), amuletos y marcadores de mapa.',
    transport: 'Estación de Ciervo de Bocasucia (central) y ascensor hacia Pico de Cristal.',
    pois: 'Tiendas de Iselda y Sly, banco principal, Carpa de Grimm, Sótano de Bretta y cueva de Confesora Jiji.',
    secrets: 'Regalar la Flor Delicada a Bicho Viejo cambia permanentemente sus diálogos; vencer 4 veces al Príncipe Gris hace que Bretta emprenda su propio viaje.'
  },
  {
    id: 'map-crossroads', short: 'Cruces Olvidados', name: 'Cruces Olvidados / Infectados', zone: 'Núcleo Superior',
    x: 46, y: 27,
    connections: 'Bocasucia · Sendero Verde · Cañón de la Niebla · Páramos Fungales · Ciudad de Lágrimas · Pico de Cristal · Tierras de Descanso.',
    characters: 'Padre Larva, Salubra, Chamán Caracol, Quirrel, Myla, Sly (rescate), Menderbug.',
    creatures: [
      { id: 'false-knight', label: 'Falso Caballero' }, { id: 'gruz-mother', label: 'Madre Gruz' }, { id: 'brooding-mawlek', label: 'Mawlek Incubador' },
      { id: 'menderbug', label: 'Menderbug' }, { id: 'furious-vengefly', label: 'Vengamosca Furiosa' }, { id: 'goam', label: 'Goam' }
    ],
    collectibles: '5 Larvas, 2 Fragmentos de Máscara, 1 Fragmento de Vasija, Espíritu Vengativo, Atrapaalmas, Útero Brillante, Raíz Susurrante.',
    transport: 'Estación de Ciervo · Tranvía Superior (hacia Tierras de Descanso) · Ascensor hacia Ciudad de Lágrimas.',
    pois: 'Templo del Huevo Negro, Montículo Ancestral, Hogar del Padre Larva, Tienda de Salubra y acceso al Lago Azul.',
    secrets: 'Al vencer a un Soñador o conseguir Alas de Monarca la zona muta en Cruces Infectados bloqueando ciertos pasillos; aquí está la casa oculta de Menderbug.'
  },
  {
    id: 'map-greenpath', short: 'Sendero Verde', name: 'Sendero Verde (Greenpath)', zone: 'Noroeste · Bosque',
    x: 20, y: 29,
    connections: 'Cruces Olvidados · Cañón de la Niebla · Jardines de la Reina · Acantilados Aulladores.',
    characters: 'Hornet, El Cazador, Quirrel, Zote (rescate), Maestro Pintor Sheo, Unn, Sin Ojos.',
    creatures: [
      { id: 'hornet-entry', label: 'Hornet' }, { id: 'massive-moss-charger', label: 'Cargador Masivo' }, { id: 'vengefly-king', label: 'Rey Vengamosca' },
      { id: 'no-eyes', label: 'Sin Ojos' }, { id: 'moss-knight', label: 'Caballero de Musgo' }, { id: 'aluba', label: 'Aluba' }
    ],
    collectibles: '4 Larvas, Capa de Ala de Polilla, Diario del Cazador, Forma de Unn, Espinas de Agonía, Gran Corte, Fragmento de Máscara y Vasija.',
    transport: 'Estación de Ciervo de Sendero Verde.',
    pois: 'Arena de Hornet Protectora, Lago de Unn, Guarida del Cazador, Santuario de Piedra y Cabaña de Sheo.',
    secrets: 'El espíritu de Unn emerge del lago ácido al usar Lágrima de Isma; si perdonas al Forjaguijones, se muda con Sheo aquí.'
  },
  {
    id: 'map-fog', short: 'Cañón Niebla', name: 'Cañón de la Niebla (Fog Canyon)', zone: 'Oeste · Niebla Ácida',
    x: 26, y: 42,
    connections: 'Sendero Verde · Cruces Olvidados · Páramos Fungales · Jardines de la Reina.',
    characters: 'Monomon la Maestra, Quirrel, Millibelle la Banquera, Willoh.',
    creatures: [
      { id: 'uumuu', label: 'Uumuu' }, { id: 'ooma', label: 'Ooma' }, { id: 'uoma', label: 'Uoma' }, { id: 'charged-lumafly', label: 'Lumafly Cargada' }
    ],
    collectibles: 'Espectros Aulladores (Montículo Cubierto de Maleza), 1 Muesca de Amuleto, 1 Larva, 1 Sello de Hallownest.',
    transport: 'Estación de la Reina (en la frontera sur con Páramos Fungales).',
    pois: 'Archivos de la Maestra, Montículo Cubierto de Maleza, Banco de Millibelle y Barrera de Sombra hacia Cornifer.',
    secrets: 'En los Archivos hay tanques de texto encriptado de Monomon y la entrada de inspección de la Lumafly Cargada.'
  },
  {
    id: 'map-gardens', short: 'Jardines Reina', name: 'Jardines de la Reina (Queen’s Gardens)', zone: 'Extremo Oeste',
    x: 12, y: 49,
    connections: 'Cañón de la Niebla · Páramos Fungales · Nido Profundo · Sendero Verde.',
    characters: 'La Dama Blanca, Cloth, Marmu (Guerrero Onírico), cadáver de Dryya.',
    creatures: [
      { id: 'traitor-lord', label: 'Señor Traidor' }, { id: 'marmu', label: 'Marmu' }, { id: 'mantis-traitor', label: 'Mantis Traidora' },
      { id: 'mantis-petra', label: 'Mantis Petra' }, { id: 'loodle', label: 'Loodle' }
    ],
    collectibles: 'Primera mitad de Alma del Rey (Dama Blanca), Llave del Amor, 3 Larvas, Sello de Hallownest, Raíz Susurrante (29 Esencia).',
    transport: 'Estación de Ciervo de los Jardines de la Reina.',
    pois: 'Refugio de la Dama Blanca, Tumba de la Hija del Traidor (destino de la Flor Delicada) y banco con música de altavoz.',
    secrets: 'Puedes destruir el altavoz de música junto al banco si lo deseas; también habita una de las dos únicas Alubas del juego.'
  },
  {
    id: 'map-fungal', short: 'Páramos Fungales', name: 'Páramos Fungales (Fungal Wastes)', zone: 'Centro-Oeste',
    x: 34, y: 54,
    connections: 'Cruces Olvidados · Cañón de la Niebla · Ciudad de Lágrimas · Canales Reales · Jardines de la Reina · Nido Profundo.',
    characters: 'Comedor de Piernas, Bretta (rescate), Cloth, Quirrel, Anciano Hu, Profeta del Musgo, Señor Seta.',
    creatures: [
      { id: 'mantis-lords', label: 'Señores Mantis' }, { id: 'elder-hu', label: 'Anciano Hu' }, { id: 'shrumal-ogre', label: 'Ogro Seta' },
      { id: 'mantis-warrior', label: 'Guerrero Mantis' }, { id: 'mossy-vagabond', label: 'Vagabundo Musgoso' }
    ],
    collectibles: 'Garra de Mantis, Marca del Orgullo, Maestro de las Embestidas, Hongo con Esporas, Amuletos Frágiles, 1 Muesca (Ogros Seta), 2 Larvas.',
    transport: 'Estación de la Reina (noroeste).',
    pois: 'Aldea Mantis, Núcleo Fúngico, Tienda de Comedor de Piernas y Puente hacia la Ciudad de Lágrimas.',
    secrets: 'Al vencer a los Señores Mantis toda la aldea te hace reverencia y abre su sala del tesoro; el Núcleo Fúngico guarda tablillas legibles con Hongo con Esporas.'
  },
  {
    id: 'map-city', short: 'Ciudad Lágrimas', name: 'Ciudad de Lágrimas (City of Tears)', zone: 'Centro del Reino · Capital',
    x: 56, y: 50,
    connections: 'Páramos Fungales · Cruces Olvidados · Tierras de Descanso · Canales Reales · Bordes del Reino.',
    characters: 'Lurien el Vigía, Forjaguijones, Buscador de Reliquias Lemm, Quirrel, Hornet, Emilitia, Marissa, Millibelle (spa).',
    creatures: [
      { id: 'soul-master', label: 'Maestro de Almas' }, { id: 'watcher-knight', label: 'Caballero Vigía' }, { id: 'the-collector', label: 'El Coleccionista' },
      { id: 'soul-twister', label: 'Tuercealmas' }, { id: 'gorgeous-husk', label: 'Cáscara Magnífica' }, { id: 'great-husk-sentry', label: 'Gran Centinela' }
    ],
    collectibles: 'Inmersión Desoladora, Alma Sombría, Tuercehechizos, Mapa del Coleccionista, 5 Larvas, 5 Sellos de Hallownest, 2 Fragmentos de Vasija.',
    transport: '2 Estaciones de Ciervo (Almacenes y Estación del Rey) y 2 Ascensores monumentales hacia Cruces y Tierras de Descanso.',
    pois: 'Santuario de Almas, Torre del Vigía, Casa del Placer, Torre del Amor, Taller del Forjaguijones y Fuente del Hollow Knight.',
    secrets: 'Candelabro oculto antes de los Caballeros Vigías, cámara escondida de la Cáscara Magnífica (420 Geo) y aguas termales de Millibelle.'
  },
  {
    id: 'map-waterways', short: 'Canales Reales', name: 'Canales Reales (Royal Waterways)', zone: 'Subsuelo Central',
    x: 52, y: 66,
    connections: 'Ciudad de Lágrimas (acceso con Llave Simple) · Páramos Fungales · Cuenca Antigua · Bordes del Reino.',
    characters: 'Defensor del Estiércol (Ogrim), Buscadora de Dioses, Ermitaño Trematodo, Tuk.',
    creatures: [
      { id: 'dung-defender', label: 'Defensor del Estiércol' }, { id: 'white-defender', label: 'Defensor Blanco' }, { id: 'flukemarm', label: 'Flukemarm' },
      { id: 'flukemunga', label: 'Flukemunga' }, { id: 'flukemon', label: 'Flukemon' }, { id: 'belfly', label: 'Mosca Bomba' }
    ],
    collectibles: 'Lágrima de Isma, Emblema del Defensor, Nido de Trematodos, Sintonizador de Dioses, 3 Larvas, 1 Fragmento de Máscara, Huevos Podridos.',
    transport: 'Sin Estación de Ciervo propia; conectado a Ciudad de Lágrimas y hacia el sur con Cuenca Antigua.',
    pois: 'Arboleda de Isma, Fosa de Basura (acceso al Hogar de los Dioses), Nido de Flukemarm y Cueva de Ogrim.',
    secrets: 'Usa Inmersión Desoladora bajo la palanca tras el Defensor del Estiércol para hallar su guarida secreta, sus esculturas y acceder al Defensor Blanco.'
  },
  {
    id: 'map-peak', short: 'Pico de Cristal', name: 'Pico de Cristal (Crystal Peak)', zone: 'Noreste · Minas',
    x: 68, y: 18,
    connections: 'Cruces Olvidados · Bocasucia · Tierras de Descanso (caída por el pozo).',
    characters: 'Quirrel, Myla (en la entrada).',
    creatures: [
      { id: 'crystal-guardian', label: 'Guardián de Cristal' }, { id: 'crystal-hunter', label: 'Cazador de Cristal' },
      { id: 'crystal-crawler', label: 'Reptador de Cristal' }, { id: 'crystallised-husk', label: 'Cáscara Cristalizada' }
    ],
    collectibles: 'Corazón de Cristal, Oscuridad Descendente, Concentración Profunda, Llave del Tendero, 1 Mineral Pálido (Corona), 1 Fragmento de Máscara, 7 Larvas.',
    transport: 'Ascensor directo de regreso a Bocasucia.',
    pois: 'Corona de Hallownest (estatua de El Resplandor), Montículo Cristalizado, banco del Guardián de Cristal y canteras mecánicas.',
    secrets: 'En la cima más alta (Corona de Hallownest) reposa la antigua estatua olvidada de El Resplandor junto a un Mineral Pálido.'
  },
  {
    id: 'map-resting', short: 'Tierras Descanso', name: 'Tierras de Descanso (Resting Grounds)', zone: 'Este-Norte · Santuario',
    x: 74, y: 34,
    connections: 'Pico de Cristal · Cruces Olvidados (Tranvía Superior y Lago Azul) · Ciudad de Lágrimas (ascensor).',
    characters: 'La Vidente, Doliente Gris (Ze’mer), Xero (Guerrero Onírico), Revek, Quirrel (Lago Azul).',
    creatures: [
      { id: 'xero', label: 'Xero' }, { id: 'entombed-husk', label: 'Cáscara Sepultada' }
    ],
    collectibles: 'Aguijón Onírico, Portal Onírico, Escudo Onírico, Devoraalmas, 1 Larva, 1 Huevo Arcano y 1 Mineral Pálido (recompensas de la Vidente).',
    transport: 'Estación de Ciervo · Tranvía Superior · Ascensor hacia Ciudad de Lágrimas.',
    pois: 'Santuario de los Soñadores, Claro de los Espíritus, Mansión de la Doliente Gris, Criptas y Lago Azul.',
    secrets: 'Santuario de los Creyentes oculto sobre la cascada del Claro de los Espíritus y tumba falsa que da acceso a las criptas subterráneas.'
  },
  {
    id: 'map-deepnest', short: 'Nido Profundo', name: 'Nido Profundo (Deepnest)', zone: 'Suroeste · Oscuridad',
    x: 24, y: 69,
    connections: 'Páramos Fungales (Aldea Mantis y foso) · Jardines de la Reina · Cuenca Antigua (Tranvía Inferior).',
    characters: 'Herrah la Bestia, La Comadrona, Hacedor de Máscaras, Zote (rescate), Cloth, Brumm, Galien.',
    creatures: [
      { id: 'nosk', label: 'Nosk' }, { id: 'galien', label: 'Galien' }, { id: 'stalking-devout', label: 'Devoto Acechador' },
      { id: 'grub-mimic', label: 'Imitador de Larva' }, { id: 'garpede', label: 'Garpípedo' }, { id: 'little-weaver', label: 'Pequeña Tejedora' }
    ],
    collectibles: 'Pase de Tranvía, Sombra Afilada, Canción de Tejedora, 1 Mineral Pálido (Nosk), 5 Larvas, 1 Fragmento de Vasija, Raíz Susurrante.',
    transport: 'Estación de Ciervo del Pueblo Distante · Estación oeste del Tranvía Inferior.',
    pois: 'Pueblo Distante, Guarida de la Bestia, Tranvía Fallido, Guarida de Tejedoras, Fuente Termal y Guarida de Nosk.',
    secrets: 'Cámara oculta tras la Guarida de Tejedoras con un Sello de Vínculo; entrada de inspección de Garpípedo muerto al sureste.'
  },
  {
    id: 'map-basin-abyss', short: 'Cuenca y Abismo', name: 'Cuenca Antigua, Palacio Blanco y El Abismo', zone: 'Profundidades del Sur',
    x: 56, y: 84,
    connections: 'Canales Reales (norte) · Nido Profundo y Bordes del Reino (Tranvía Inferior).',
    characters: 'Cloth, cadáver del Molde Real, recuerdos del Rey Pálido y El Hollow Knight.',
    creatures: [
      { id: 'broken-vessel', label: 'Vasija Rota' }, { id: 'sibling', label: 'Hermano (Sibling)' }, { id: 'void-tendrils', label: 'Tentáculos de Vacío' },
      { id: 'kingsmould', label: 'Molde Real' }, { id: 'wingmould', label: 'Molde Alado' }, { id: 'mawlurk', label: 'Mawlurk' }
    ],
    collectibles: 'Alas de Monarca, Capa Sombría, Chillido del Abismo, Núcleo de Savia Vital, Alma del Rey / Corazón del Vacío, 3 Huevos Arcanos, 1 Mineral Pálido, 2 Larvas.',
    transport: 'Estación Oculta de Ciervo (Hidden Dreams) · Estación central del Tranvía Inferior.',
    pois: 'Fuente de los Deseos, Arena de Vasija Rota, acceso onírico al Palacio Blanco, Faro del Abismo y Lugar de Nacimiento.',
    secrets: 'Sendero del Dolor en el Palacio Blanco, puerta azul de 14+ máscaras de Savia Vital en El Abismo y huella de Tentáculos de Vacío al este del Faro.'
  },
  {
    id: 'map-edge-hive', short: 'Bordes y Colmena', name: 'Bordes del Reino y La Colmena', zone: 'Frontera Oriental',
    x: 84, y: 62,
    connections: 'Ciudad de Lágrimas (Estación del Rey) · Cuenca Antigua (Tranvía Inferior) · Canales Reales.',
    characters: 'Hornet, Maestro del Aguijón Oro, Bardoon, Pequeño Insensato, Reina Vespa, Markoth, Tiso.',
    creatures: [
      { id: 'hive-knight', label: 'Caballero Colmena' }, { id: 'god-tamer', label: 'Domador de Dioses' }, { id: 'markoth', label: 'Markoth' },
      { id: 'primal-aspid', label: 'Áspid Primigenio' }, { id: 'pale-lurker', label: 'Acechador Pálido' }, { id: 'oblobble', label: 'Oblobble' }
    ],
    collectibles: 'Marca del Rey, Corte Rápido, Corte Veloz, Sangre de Colmena, 1 Mineral Pálido y 1 Muesca (Coliseo), Llave Simple (Acechador Pálido), 4 Larvas.',
    transport: 'Estación oriental del Tranvía Inferior y túnel inundado desde la Estación del Rey.',
    pois: 'Coliseo de los Insensatos, Coraza Desechada del Wyrm, Cabaña de Oro, Santuario de la Reina Vespa y Tienda/Riscos de Bardoon.',
    secrets: 'Entrada secreta al Acechador Pálido tras un muro falso a la derecha de la arena del Coliseo, y tablilla secreta del Señor Seta cerca del campamento.'
  }
];
