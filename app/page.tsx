import Bio from "@/components/Bio/Bio";
import VideoHero from "@/components/VideoHero/VideoHero";
import SvgComponent from "@/components/AfyqEyzarSvg/AfyqEyzarSvg";
import Arrow from "@/components/Arrow/Arrow";

export default function Home() {
  return (
    <main className="relative h-[200dvh] sm:h-[200vh]">
      <section className="fixed block h-[100dvh] w-screen sm:h-screen">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-30 flex justify-center">
            <SvgComponent />
          </div>
          <VideoHero />
          <div className="absolute bottom-7 z-40 flex w-full justify-center">
            <Arrow />
          </div>
        </div>
      </section>
      <Bio />
    </main>
  );
}
