"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Photo } from "../photos";

type PhotoCarouselProps = {
  photos: Photo[];
};

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPhoto = photos[currentIndex];

  const goToPrevious = useCallback(() => {
    setCurrentIndex((value) => (value === 0 ? photos.length - 1 : value - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((value) => (value === photos.length - 1 ? 0 : value + 1));
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const progress = useMemo(
    () => `${((currentIndex + 1) / photos.length) * 100}%`,
    [currentIndex, photos.length],
  );

  return (
    <div className="carousel-experience">
      <section className="carousel-stage" aria-label="Carrusel de fotografías">
        <button
          className="carousel-control carousel-control-previous"
          type="button"
          onClick={goToPrevious}
          aria-label="Ver fotografía anterior"
        >
          ‹
        </button>

        <figure className="carousel-frame">
          <div className="carousel-image-wrap">
            <Image
              className="carousel-main-image"
              src={currentPhoto.src}
              alt={`Fotografía ${currentPhoto.number} de la travesía`}
              width={currentPhoto.width}
              height={currentPhoto.height}
              priority
              sizes="(max-width: 980px) 100vw, 72vw"
              unoptimized
            />
          </div>
          <figcaption>
            <span>Foto {String(currentPhoto.number).padStart(2, "0")}</span>
            <strong>
              {currentIndex + 1} de {photos.length}
            </strong>
          </figcaption>
        </figure>

        <button
          className="carousel-control carousel-control-next"
          type="button"
          onClick={goToNext}
          aria-label="Ver fotografía siguiente"
        >
          ›
        </button>
      </section>

      <aside className="carousel-panel" aria-label="Control del carrusel">
        <div className="carousel-counter">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <p>de {photos.length} fotografías</p>
        </div>
        <div className="carousel-progress" aria-hidden="true">
          <span style={{ width: progress }} />
        </div>
        <p>
          Usa las flechas del teclado o las miniaturas para recorrer la memoria
          visual de la sesión.
        </p>
      </aside>

      <div className="carousel-thumbs" aria-label="Miniaturas del carrusel">
        {photos.map((photo, index) => (
          <button
            className={index === currentIndex ? "carousel-thumb active" : "carousel-thumb"}
            key={photo.number}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la fotografía ${photo.number}`}
            aria-current={index === currentIndex}
          >
            <Image
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              sizes="96px"
              unoptimized
            />
            <span>{String(photo.number).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
