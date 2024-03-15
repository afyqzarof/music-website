import Bio from "@/components/Bio/Bio";
import VideoHero from "@/components/VideoHero/VideoHero";
import SvgComponent from "@/components/AfyqEyzarSvg/AfyqEyzarSvg";
import Arrow from "@/components/Arrow/Arrow";

export default function Home() {
  return (
    <main className="relative h-[200lvh] sm:h-[200vh]">
      <section className="fixed block h-[100vh] w-screen sm:h-screen">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-30 flex justify-center">
            <SvgComponent />
          </div>
          <VideoHero />
          <div className="absolute bottom-[25lvh] z-40 flex w-full justify-center sm:bottom-7">
            <Arrow />
          </div>
        </div>
      </section>
      <Bio />
    </main>
  );
}
