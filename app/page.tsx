import VideoHero from "@/components/VideoHero/VideoHero";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-screen">
        <img
          src="/svg/eyzar-white.svg"
          alt="afyq eyzar"
          className="absolute inset-0 m-auto w-[85vw]"
        />
        <VideoHero />
      </section>
      <section className="h-screen p-3">
        <h1 className="text-7xl">here is my bio</h1>
        <a href="#">link to somewhere</a>
      </section>
    </main>
  );
}
