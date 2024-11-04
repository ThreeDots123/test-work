export default function HeroSection() {
  return (
    <>
      <main
        className="relative h-[100dvh]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../public/hero-img.jpg)",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute w-1/2 text-white max-md:w-4/5 mt-[200px] max-m:mx-6 mx-14">
          <h1 className="lg:text-[5rem] max-lg:text-[2rem]">
            Welcome to Brasil <span className="text-[#49A750]">Resources</span>
          </h1>
          <p>
            Welcome to the #1 ICUMSA 45 Sugar Export Company. Import directly
            from the best in Brazil. Easy Paperwork Process.
          </p>
        </div>
      </main>
    </>
  );
}
