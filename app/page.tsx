import Bio from "@/components/Bio/Bio";
import VideoHero from "@/components/VideoHero/VideoHero";
import SvgComponent from "@/components/AfyqEyzarSvg/AfyqEyzarSvg";
import Arrow from "@/components/Arrow/Arrow";

export default function Home() {
  return (
    <main className="h-[200dvh] sm:h-[200vh]">
      <section className="video fixed h-[100dvh] w-screen sm:h-screen">
        <div className="relative h-full w-full">
          {/* <img
            src="/svg/eyzar-white.svg"
            alt="afyq eyzar"
            className="absolute inset-0 m-auto w-[85vw]"
          /> */}
          <div className="absolute inset-0 flex justify-center">
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
