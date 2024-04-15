import Bio from "@/components/Bio/Bio";
import Btn from "@/components/Btn/Btn";
import VideoHero from "@/components/VideoHero/VideoHero";

export default function Home() {
  return (
    <main className="relative h-[200lvh] sm:h-[200vh]">
      <section className="fixed block h-[100vh] w-screen sm:h-screen">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-30 flex justify-center">
            <img
              src="geo-afyq-eyzar.svg"
              alt="afyq eyzar logo"
              className="w-11/12 sm:w-2/3"
            />
          </div>
          <VideoHero />
          <div className="absolute bottom-[25lvh] z-40 flex w-full justify-center sm:bottom-7">
            <Btn />
          </div>
        </div>
      </section>
      <Bio />
    </main>
  );
}
