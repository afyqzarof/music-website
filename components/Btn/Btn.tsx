"use client";

const Btn = () => {
  return (
    <button
      className="bg-[#e5dc28] px-4 py-2 text-xl text-black opacity-90 sm:opacity-100"
      onClick={() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }}
    >
      scroll down :)
    </button>
  );
};

export default Btn;
