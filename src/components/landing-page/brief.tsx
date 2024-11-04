export default function Briefing() {
  return (
    <div className="pt-[30px] bg-white xl:flex container gap-5 pb-8">
      <div className="flex-[5]">
        <div className="max-xl:mx-auto w-fit">
          <img
            src="./hero-img.jpg"
            className="md:w-[70%] h-[50%] object-cover"
          />
          <p className="mt-3 text-3xl font-bold w-fit">
            Icumsa 45 Manufacturer
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3">
          <div>
            <span className="bg-[rgb(73,167,80)] text-xs text-white p-1.5 rounded-full w-fit h-fit">
              ✔
            </span>
            <div className="inline ml-2">
              <strong>Unrivaled Quality:</strong>
              {
                " Our cane sugar is renowned for its exceptional quality, purity and authentic flavour."
              }
            </div>
          </div>
          <div>
            <span className="bg-[rgb(73,167,80)] text-xs text-white p-1.5 rounded-full w-fit h-fit">
              ✔
            </span>
            <div className="inline ml-2">
              <strong>Reliable Supply:</strong>
              {" We ensure a robust supply chain, guaranteeing on-time."}
            </div>
          </div>
          <div>
            <span className="bg-[rgb(73,167,80)] text-xs text-white p-1.5 rounded-full w-fit h-fit">
              ✔
            </span>
            <div className="inline ml-2">
              <strong>Sustainability:</strong>
              {
                " Contribute to sustainable agricultural practices and the preservation of the environment by choosing our sugar."
              }
            </div>
          </div>
          <div>
            <span className="bg-[rgb(73,167,80)] text-xs text-white p-1.5 rounded-full w-fit h-fit">
              ✔
            </span>
            <div className="inline ml-2">
              <strong>Friendly Patnership:</strong>
              {
                " We work closely with our customers to understand their specific needs and offer tailor-made solutions."
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[4] relative md:flex max-xl:block gap-7 max-xl:mt-10">
        <div className="items-start">
          <h4 className="text-3xl font-medium mt-20">A few figures</h4>
          <div className="grid grid-cols-2 mt-3 mb-5">
            <div>
              <h1 className="text-[#F7C35F] text-5xl font-semibold mb-2">2M</h1>
              <p>Tons of sugar available</p>
            </div>
            <div>
              <h1 className="text-[#F7C35F] text-5xl font-semibold mb-2">
                15M
              </h1>
              <p>Tons of sugar already delivered</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[230px] max-xl:static">
          <img
            src="./sugar-cover.jpeg"
            alt="sugar-image"
            className="xl:h-[500px] max-xl:w-[500px] object-cover sm:mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
