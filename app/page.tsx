import Image from "next/image";

const volcanoes = [
  ["Acatenango", "Enfrentar la inmensidad."],
  ["Pacaya", "Reconocer la energia constante de la tierra."],
  ["Santa Maria", "Entrenar la resistencia mental."],
  ["Ipala y Chicabal", "Encontrar paz interior en los crateres."],
];

const pillars = [
  {
    title: "Preparacion",
    copy: "Nadie sube a la cima sin equipo. En la vida, nuestra preparacion emocional, creencias y valores son la mochila que nos sostiene.",
  },
  {
    title: "Resiliencia",
    copy: "Habra frio, cansancio y momentos de querer abandonar. El poder personal aparece cuando damos un paso mas.",
  },
  {
    title: "Recompensa",
    copy: "El amanecer desde la cumbre lo cura todo. Alcanzar metas nutre nuestro sentido de valia y proposito.",
  },
];

const phases = [
  {
    number: "01",
    title: "Decision",
    copy: "Fijas un objetivo y decides trabajar en ti mismo. Es la chispa inicial.",
  },
  {
    number: "02",
    title: "El ascenso",
    copy: "Enfrentas la realidad, cometes errores y pones a prueba la voluntad.",
  },
  {
    number: "03",
    title: "El crux",
    copy: "Las dudas internas atacan. Superarlas consolida la autoestima.",
  },
  {
    number: "04",
    title: "La cumbre",
    copy: "Alcanzas un nuevo nivel de poder personal y disfrutas la vista antes de la proxima montana.",
  },
];

const photos = Array.from({ length: 44 }, (_, index) => ({
  number: index + 1,
  src: `/photos/photo-${String(index + 1).padStart(2, "0")}.jpg`,
}));

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="top-nav" aria-label="Principal">
          <a href="#pasion">Pasion</a>
          <a href="#pilares">Pilares</a>
          <a href="#crecimiento">Crecimiento</a>
          <a href="#galeria">Fotos</a>
        </nav>

        <div className="hero-media" aria-hidden="true">
          <Image
            src="/photos/photo-44.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Sesion de coaching no. 7</p>
          <h1>La Cima del Poder Personal</h1>
          <p className="hero-subtitle">
            Poder personal y auto recompensa vistos como un ascenso: una
            travesia donde la preparacion, la resiliencia y la mentalidad
            transforman cada paso.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#pasion">
              Explorar la sesion
            </a>
            <a className="secondary-action" href="#galeria">
              Ver fotos
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band" id="pasion">
        <div className="content-grid">
          <div>
            <p className="eyebrow">Encontrando mi pasion</p>
            <h2>El poder interior crece fuera de la zona de confort.</h2>
          </div>
          <p>
            El desarrollo de nuestro poder interior ocurre cuando decidimos
            tirarnos a la montana. Para esta sesion, el senderismo y escalar
            volcanes son una herramienta de autoconocimiento: cada trayecto
            muestra limites, fortalezas y nuevas formas de avanzar.
          </p>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">El llamado de los volcanes</p>
          <h2>Cada cima revela una parte distinta del caracter.</h2>
          <p>
            La montana funciona como espejo: la inmensidad, la energia, la
            resistencia y el silencio del crater obligan a mirar hacia adentro.
          </p>
          <div className="volcano-list">
            {volcanoes.map(([name, copy]) => (
              <article key={name}>
                <span>{name}</span>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="feature-image volcano-photo">
          <Image
            src="/photos/photo-01.jpg"
            alt="Volcan visto desde la ruta de ascenso."
            width={492}
            height={653}
            unoptimized
          />
        </figure>
      </section>

      <section className="section" id="pilares">
        <div className="section-heading">
          <p className="eyebrow">Pilares</p>
          <h2>En la montana y en la autoestima.</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reflection-section">
        <div>
          <p className="eyebrow">Conexion interior</p>
          <h2>Acampar bajo las estrellas tambien es una practica de presencia.</h2>
          <p>
            Alejarnos del ruido del mundo moderno nos permite escuchar nuestra
            propia voz. En el silencio de la naturaleza podemos evaluar
            honestamente nuestro poder personal.
          </p>
        </div>
        <div className="question-panel">
          <p>Preguntas centrales</p>
          <h3>Cuales son mis miedos reales?</h3>
          <h3>Cuales son mis verdaderos suenos?</h3>
        </div>
      </section>

      <section className="quote-band">
        <blockquote>
          Una semana de vida en el campo vale mas que seis meses de ensenanza
          teorica.
        </blockquote>
        <p>Sir Robert Baden-Powell</p>
      </section>

      <section className="section parallel-section">
        <div className="section-heading">
          <p className="eyebrow">Paralelismos</p>
          <h2>El senderismo y la vida comparten el mismo entrenamiento.</h2>
        </div>
        <div className="parallel-grid">
          <article>
            <h3>El terreno dificil</h3>
            <p>
              Las rocas sueltas y la lluvia nos retardan. En el desarrollo
              personal, esos obstaculos son las creencias limitantes y los
              fracasos. Ambos exigen paciencia, reevaluar la estrategia y
              caminar con el peso a cuestas sin rendirse.
            </p>
          </article>
          <article>
            <h3>La aclimatacion</h3>
            <p>
              Al subir, el aire es mas fino y debemos adaptarnos. Al crecer en
              poder personal y autoestima, aparecen nuevos niveles de
              responsabilidad y exposicion que requieren ajustar la mentalidad.
            </p>
          </article>
        </div>
      </section>

      <section className="balance-section">
        <div className="balance-meter">
          <span>100%</span>
          <p>Actitud mental</p>
        </div>
        <div>
          <p className="eyebrow">El balance del viaje</p>
          <h2>La condicion fisica te lleva al campamento base.</h2>
          <p>
            La mentalidad y la autoestima son las que empujan hasta la cumbre.
            El dialogo interno decide si abandonamos a mitad del camino o si
            celebramos el amanecer en lo mas alto.
          </p>
        </div>
      </section>

      <section className="section" id="crecimiento">
        <div className="section-heading">
          <p className="eyebrow">Crecimiento</p>
          <h2>Las fases de nuestro ascenso personal.</h2>
        </div>
        <div className="phase-grid">
          {phases.map((phase) => (
            <article key={phase.number} className="phase-card">
              <span>{phase.number}</span>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="summit-section">
        <div>
          <p className="eyebrow">Encuentra tu propia cumbre</p>
          <h2>El poder personal no se trata de no sentir miedo.</h2>
          <p>
            Se trata de avanzar a pesar de el. Cada paso cuenta, y cada logro
            merece una auto recompensa consciente.
          </p>
        </div>
      </section>

      <section className="section" id="galeria">
        <div className="section-heading">
          <p className="eyebrow">Paisajes que transforman con amistad</p>
          <h2>La experiencia visual de la travesia con fotos originales.</h2>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure key={photo.number}>
              <Image
                src={photo.src}
                alt={`Fotografia de la travesia no. ${photo.number}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                unoptimized
              />
              <figcaption>{String(photo.number).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
      </section>

    </main>
  );
}
