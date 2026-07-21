import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

export const CustomerPhotos = () => (
  <section id="clientes" className="py-16 md:py-24 bg-muted/40">
    <div className="container-tight">
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

      <Reveal delay={120} className="mt-10">
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {photos.map((src, i) => (
              <CarouselItem
                key={src}
                className="pl-4 basis-[75%] sm:basis-1/2 md:basis-1/3"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
        <p className="mt-4 text-center text-xs text-muted-foreground md:hidden">
          Arrasta para ver mais
        </p>
      </Reveal>
    </div>
  </section>
);
