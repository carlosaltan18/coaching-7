import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "../photos";
import PhotoCarousel from "./photo-carousel";

export const metadata: Metadata = {
  title: "Carrusel fotográfico | La Cima del Poder Personal",
  description:
    "Carrusel de fotos de la travesía, con imágenes completas y controles de navegación.",
};

export default function CarouselPage() {
  return (
    <main className="carousel-page">
      <nav className="carousel-nav" aria-label="Navegación secundaria">
        <Link href="/">Inicio</Link>
        <Link href="/#galeria">Galería</Link>
      </nav>

      <section className="carousel-shell">
        <header className="carousel-header">
          <p className="eyebrow">Archivo fotográfico</p>
          <h1>Carrusel de la travesía</h1>
          <p>
            Una vista pausada de la caminata, los volcanes, el campamento y los
            momentos compartidos. Cada imagen conserva su proporción original.
          </p>
        </header>

        <PhotoCarousel photos={photos} />
      </section>
    </main>
  );
}
