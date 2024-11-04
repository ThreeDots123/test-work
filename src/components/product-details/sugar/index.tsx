import { Card } from "../../ui/card";

const SugarCard = (data: {
  src: string;
  name: string;
  desc: string;
  url: string;
}) => {
  return (
    <Card className="w-full max-w-xs rounded-xl width bg-transparent shadow-none border-0 mx-auto text-white">
      <div className="grid gap-4 p-4">
        <div className="aspect-[1/1] w-full overflow-hidden rounded-xl">
          <img
            src={data.src}
            alt="Product image"
            width="50"
            height="100"
            className="aspect-[1/1] object-cover w-full"
          />
        </div>
        <h3 className="text-lg font-semibold">{data.name}</h3>
        <p className="text-sm">{data.desc}</p>
        <a
          href={data.url}
          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md text-xs px-0 py-0"
        >
          Read More
        </a>
      </div>
    </Card>
  );
};

export default function SugarDetails() {
  return (
    <>
      <main>
        <div
          className="relative min-h-[1000px]"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(../../../sugar.jpg)",
          }}
        >
          <div className="container pt-[200px] flex">
            <img src="./expchart.png" alt="expchart" className="mx-auto" />
          </div>
        </div>

        <div className="">
          <img
            src="./process-image.png"
            alt=""
            className="w-full object-cover"
          />
        </div>

        <div className="mt-10">
          <div className="bg-[#333] py-6">
            <h4 className="text-2xl font-semibold text-center text-white">
              SUGAR TYPES
            </h4>

            <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 max-w-[1200px] mx-auto gap-y-5">
              <SugarCard
                src="./icumsa100.png"
                name="ICUMSA 100 CANE SUGAR"
                desc="100 CANE SUGAR ICUMSA 100 Cane Sugar is manufactured by using a Crystallization process without any chemical refining. ICUMSA-100 Cane..."
                url="/icumsa100"
              />
              <SugarCard
                src="./icumsa45.png"
                name="ICUMSA-45 WHITE REFINED SUGAR"
                desc="ICUMSA-45 WHITE REFINED SUGAR ICUMSA-45 Sugar is a most Highly Refined form of Sugar. ICUMSA-45 Sugar has a Sparkling White..."
                url="/icumsa45"
              />
              <SugarCard
                src="./vhpsugar.png"
                name="VHP SUGAR"
                desc="VHP SUGAR VHP sugar (very high polarity sugar) also known as Hi-Pol Sugar is a light brown raw sugar with..."
                url="/vhp"
              />
              <SugarCard
                src="./beetsugar.png"
                name="BEET SUGAR"
                desc="BEET SUGAR Beet Sugar is a white, parsnip-like taproot which makes sugar through the process of photosynthesis in its leaves..."
                url="/beet"
              />
              <SugarCard
                src="./icums6-.png"
                name="ICUMSA 600 - 1200 BROWN CANE SUGAR"
                desc="ICUMSA 600 - 1200 BROWN CANE SUGAR Raw Brown Cane sugar is brown sugar also known as ICUMSA 600 - 1200 which is produced..."
                url="/icumsa6"
              />
              <SugarCard
                src="./icumsa150.png"
                name="ICUMSA 150 CANE SUGAR"
                desc="ICUMSA 150 Cane Sugar ICUMSA-150 White Cane Sugar is widely used because it contains less chemical. It is more easily..."
                url="/icumsa150"
              />
            </div>
          </div>
        </div>

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
      </main>
    </>
  );
}
