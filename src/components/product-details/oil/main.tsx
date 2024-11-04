import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function OilMain() {
  return (
    <>
      <header>
        <Carousel plugins={[Autoplay({ delay: 2000 })]}>
          <CarouselContent>
            <CarouselItem>
              <div
                className="min-h-screen relative"
                style={{
                  backgroundImage: "url(../../../public/crude-oil.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(90%)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-5xl font-semibold text-white absolute top-64 left-36">
                  <h1>
                    Energy for today <br />
                    Energy for tomorrow
                  </h1>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div
                className="min-h-screen relative"
                style={{
                  backgroundImage: "url(../../../public/crude-oil-sec.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(90%)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-5xl font-semibold text-white absolute top-64 left-36">
                  <h1>
                    Repositioned <br />
                    for customer focus
                  </h1>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div
                className="min-h-screen relative"
                style={{
                  backgroundImage: "url(../../../public/crude-oil-third.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(90%)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-5xl font-semibold text-white absolute top-64 left-36">
                  <h1>
                    Energy efficiency and <br /> sustainability
                  </h1>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </header>

      <section>
        <div className="container text-black max-w-[1300px] mt-[100px]">
          <div className="flex">
            <div className="flex-[4]">
              <img src="./crude-side-img.png" alt="crude-side-image" />
            </div>
            <div className="flex-[8]">
              <h5
                className="text-[#333]"
                style={{ textTransform: "uppercase" }}
              >
                One of the reasons Brasail Resources was founded
              </h5>
              <div>
                <h5 className="text-4xl font-semibold mt-6">
                  To{" "}
                  <span className="text-green-700">
                    harness the possibilities of oil and gas,
                  </span>{" "}
                  to address energy demand and, drive the national economy.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center my-5">
          <div className="space-y-2">
            <img src="./oil-can.png" className="mx-auto" />
            <p className="mb-3">
              No<span className="text-2xl">1</span>
            </p>
            <p>Fast rising oil producer in Brazil</p>
          </div>
          <div className="space-y-2">
            <img src="./workforce.png" className="mx-auto" />
            <p>
              2000<span>+</span>
            </p>
            <p>Total workforce</p>
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
      </section>
    </>
  );
}
