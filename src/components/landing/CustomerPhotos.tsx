import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { PackageCheck } from "lucide-react";

const photos = [
  "/images/cliente-1.jpg",
  "/images/cliente-2.jpg",
  "/images/cliente-3.jpg",
  "/images/cliente-4.jpg",
  "/images/cliente-5.jpg",
  "/images/cliente-6.jpg",
  "/images/cliente-7.jpg",
];

export const CustomerPhotos = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) {
        track.style.transform = "translate3d(0,0,0)";
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;
      const maxShift = track.scrollWidth - window.innerWidth;
      if (maxShift <= 0) {
        track.style.transform = "translate3d(0,0,0)";
        return;
      }
      const x = -progress * maxShift;
      track.style.transform = `translate3d(${x}px,0,0)`;

    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="clientes" className="bg-muted/40">
      <div className="container-tight pt-16 md:pt-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
            <PackageCheck className="h-4 w-4" /> Entregas reais
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-5xl leading-tight text-balance">
            Clientes que já receberam o Removedor Lume
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Entregas confirmadas em Luanda e arredores.
          </p>
        </Reveal>
      </div>

      {reduced ? (
        <div className="container-tight py-10">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((src) => (
              <li key={src} className="rounded-2xl overflow-hidden shadow-elegant bg-background">
                <img
                  src={src}
                  alt="Cliente Lume com o Removedor de Fiapos recebido em Angola"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          ref={wrapperRef}
          className="relative"
          style={{ height: `${photos.length * 90}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <ul
              ref={trackRef}
              className="flex gap-4 md:gap-6 pl-4 md:pl-8 pr-[25vw] will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {photos.map((src, i) => (
                <li
                  key={src}
                  className="shrink-0 w-[75vw] sm:w-[50vw] md:w-[38vw] lg:w-[28vw]"
                >
                  <div className="rounded-2xl overflow-hidden shadow-elegant bg-background">
                    <img
                      src={src}
                      alt="Cliente Lume com o Removedor de Fiapos recebido em Angola"
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
