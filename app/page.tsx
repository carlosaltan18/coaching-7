import Image from "next/image";
import Link from "next/link";
import { photos } from "./photos";

const volcanoes = [
  ["Acatenango", "Enfrentar la inmensidad."],
  ["Pacaya", "Reconocer la energía constante de la tierra."],
  ["Santa María", "Entrenar la resistencia mental."],
  ["Ipala y Chicabal", "Encontrar paz interior en los cráteres."],
];

const pillars = [
  {
    title: "Preparación",
    copy: "Nadie sube a la cima sin equipo. En la vida, nuestra preparación emocional, creencias y valores son la mochila que nos sostiene.",
  },
  {
    title: "Resiliencia",
    copy: "Habrá frío, cansancio y momentos de querer abandonar. El poder personal aparece cuando damos un paso más.",
  },
  {
    title: "Recompensa",
    copy: "El amanecer desde la cumbre lo cura todo. Alcanzar metas nutre nuestro sentido de valía y propósito.",
  },
];

const phases = [
  {
    number: "01",
    title: "Decisión",
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
    copy: "Alcanzas un nuevo nivel de poder personal y disfrutas la vista antes de la próxima montaña.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="top-nav" aria-label="Principal">
          <a href="#pasion">Pasión</a>
          <a href="#pilares">Pilares</a>
          <a href="#crecimiento">Crecimiento</a>
          <a href="#galeria">Fotos</a>
          <Link href="/carrusel">Carrusel</Link>
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
          <p className="eyebrow">Sesión de coaching no. 7</p>
          <h1>La Cima del Poder Personal</h1>
          <p className="hero-subtitle">
            Poder personal y auto recompensa vistos como un ascenso: una
            travesía donde la preparación, la resiliencia y la mentalidad
            transforman cada paso.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#pasion">
              Explorar la sesión
            </a>
            <Link className="secondary-action" href="/carrusel">
              Ver carrusel
            </Link>
          </div>
        </div>
      </section>

      <section className="intro-band" id="pasion">
        <div className="content-grid">
          <div>
            <p className="eyebrow">Encontrando mi pasión</p>
            <h2>El poder interior crece fuera de la zona de confort.</h2>
          </div>
          <p>
            El desarrollo de nuestro poder interior ocurre cuando decidimos
            tirarnos a la montaña. Para esta sesión, el senderismo y escalar
            volcanes son una herramienta de autoconocimiento: cada trayecto
            muestra límites, fortalezas y nuevas formas de avanzar.
          </p>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">El llamado de los volcanes</p>
          <h2>Cada cima revela una parte distinta del carácter.</h2>
          <p>
            La montaña funciona como espejo: la inmensidad, la energía, la
            resistencia y el silencio del cráter obligan a mirar hacia adentro.
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
            alt="Volcán visto desde la ruta de ascenso."
            width={492}
            height={653}
            unoptimized
          />
        </figure>
      </section>

      <section className="section" id="pilares">
        <div className="section-heading">
          <p className="eyebrow">Pilares</p>
          <h2>En la montaña y en la autoestima.</h2>
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
          <p className="eyebrow">Conexión interior</p>
          <h2>Acampar bajo las estrellas también es una práctica de presencia.</h2>
          <p>
            Alejarnos del ruido del mundo moderno nos permite escuchar nuestra
            propia voz. En el silencio de la naturaleza podemos evaluar
            honestamente nuestro poder personal.
          </p>
        </div>
        <div className="question-panel">
          <p>Preguntas centrales</p>
          <h3>¿Cuáles son mis miedos reales?</h3>
          <h3>¿Cuáles son mis verdaderos sueños?</h3>
        </div>
      </section>

      <section className="quote-band">
        <blockquote>
          Una semana de vida en el campo vale más que seis meses de enseñanza
          teórica.
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
            <h3>El terreno difícil</h3>
            <p>
              Las rocas sueltas y la lluvia nos retardan. En el desarrollo
              personal, esos obstáculos son las creencias limitantes y los
              fracasos. Ambos exigen paciencia, reevaluar la estrategia y
              caminar con el peso a cuestas sin rendirse.
            </p>
          </article>
          <article>
            <h3>La aclimatacion</h3>
            <p>
              Al subir, el aire es más fino y debemos adaptarnos. Al crecer en
              poder personal y autoestima, aparecen nuevos niveles de
              responsabilidad y exposición que requieren ajustar la mentalidad.
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
          <h2>La condición física te lleva al campamento base.</h2>
          <p>
            La mentalidad y la autoestima son las que empujan hasta la cumbre.
            El diálogo interno decide si abandonamos a mitad del camino o si
            celebramos el amanecer en lo más alto.
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
            Se trata de avanzar a pesar de él. Cada paso cuenta, y cada logro
            merece una auto recompensa consciente.
          </p>
        </div>
      </section>

      <section className="section" id="galeria">
        <div className="section-heading">
          <p className="eyebrow">Paisajes que transforman con amistad</p>
          <h2>La experiencia visual de la travesía con fotos originales.</h2>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure key={photo.number}>
              <Image
                src={photo.src}
                alt={`Fotografía de la travesía no. ${photo.number}`}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw"
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
