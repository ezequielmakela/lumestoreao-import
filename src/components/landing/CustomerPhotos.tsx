import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import c1 from "@/assets/cliente-1.jpg.asset.json";
import c2 from "@/assets/cliente-2.jpg.asset.json";
import c3 from "@/assets/cliente-3.jpg.asset.json";
import c4 from "@/assets/cliente-4.jpg.asset.json";
import c5 from "@/assets/cliente-5.jpg.asset.json";
import c6 from "@/assets/cliente-6.jpg.asset.json";
import { PackageCheck } from "lucide-react";

const photos = [c1, c2, c3, c4, c5, c6];

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
            {photos.map((p) => (
              <CarouselItem
                key={p.asset_id}
                className="pl-4 basis-[75%] sm:basis-1/2 md:basis-1/3"
              >
                <div className="rounded-2xl overflow-hidden shadow-elegant bg-background">
                  <img
                    src={p.url}
                    alt="Cliente Lume com o Removedor de Fiapos recebido em Angola"
                    loading="lazy"
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
