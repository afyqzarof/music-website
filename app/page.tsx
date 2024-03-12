import VideoHero from "@/components/VideoHero/VideoHero";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <img
        src="/svg/eyzar-white.svg"
        alt="afyq eyzar"
        className="absolute inset-0 m-auto w-[85vw]"
      />
      <VideoHero />
    </main>
  );
}
