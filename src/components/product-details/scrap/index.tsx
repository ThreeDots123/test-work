import { Card } from "../../ui/card";

const ScrapCard = (data: { src: string }) => {
  return (
    <Card className="w-full max-w-xs rounded-xl width bg-transparent shadow-none border-0 mx-auto">
      <div className="grid gap-4 p-4">
        <div className="aspect-[1/1] w-full overflow-hidden rounded-xl">
          <img
            src={data.src}
            alt="Product image"
            width="100"
            height="200"
            className="aspect-[1/1] object-cover w-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default function ScrapDetails() {
  return (
    <>
      <main>
        <div
          className="min-h-[50vh] relative"
          style={{
            backgroundImage: "url(../../../scrap.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(60%)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative text-center translate-y-[25vh]">
            <h1 className="uppercase text-6xl font-semibold text-[#333]">
              MetalScrap
            </h1>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="py-10 grid lg:grid-cols-3 max-w-[900px] mx-auto md:grid-cols-2">
            <ScrapCard src="./scrap1.png" />
            <ScrapCard src="./scrap2.png" />
            <ScrapCard src="./scrap3.png" />
            <ScrapCard src="./scrap4.png" />
            <ScrapCard src="./scrap5.png" />
            <ScrapCard src="./scrap6.png" />
          </div>
        </div>
      </main>

      <div className="pt-[100px] bg-slate-100">
        <div className="text-center w-fit mx-auto">
          <h5 className="text-xl font-medium mb-2">
            Ready to Request a Quote?
          </h5>
          <span className="block mx-auto">
            <a
              href="/contact"
              className="text-white py-[5px] px-10 text-5xl font-semibold bg-[rgb(32,31,31)] block w-fit mx-auto"
            >
              Let's talk
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
