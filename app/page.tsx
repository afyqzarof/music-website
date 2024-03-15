import Bio from "@/components/Bio/Bio";
import VideoHero from "@/components/VideoHero/VideoHero";

export default function Home() {
  return (
    <main className="h-[200dvh] sm:h-[200vh]">
      <section className="video fixed h-[100dvh] w-screen sm:h-screen">
        <div className="relative h-full w-full">
          <img
            src="/svg/eyzar-white.svg"
            alt="afyq eyzar"
            className="absolute inset-0 m-auto w-[85vw]"
          />
          <VideoHero />
          <div className="absolute bottom-7 z-40 flex w-full justify-center">
            <img
              src="/svg/arrow-down.svg"
              alt="arrow down"
              className="h-24 sm:h-[8rem]"
              id="arrow"
            />
          </div>
        </div>
      </section>
      <Bio />
    </main>
  );
}
