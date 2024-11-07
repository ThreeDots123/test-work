import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

export default function Testimonials() {
  return (
    <div className="w-full bg-slate-100 pt-16">
      <div className="w-full max-w-lg mx-auto py-10">
        <h4 className="font-bold text-3xl text-center">Testimonials</h4>
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="grid items-center justify-center p-6">
                <div className="grid gap-3 lg:gap-5">
                  <p className="text-lg lg:text-xl">
                    &ldquo;Working with our Brasail Resources Co Ltd has been an
                    incredible experience. The level of collaboration and
                    support is outstanding. .&ldquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full overflow-hidden w-10 h-10">
                      <img
                        src="/placeholder.svg"
                        width="40"
                        height="40"
                        alt="Profile"
                        className="object-cover w-full h-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                    </div>
                    <div className="text-sm font-semibold">
                      <div>Sophia Brown</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid items-center justify-center p-6">
                <div className="grid gap-3 lg:gap-5">
                  <p className="text-lg lg:text-xl">
                    &ldquo;Everyone brings their unique skills to the table, and
                    together we achieved one business goal..&ldquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full overflow-hidden w-10 h-10">
                      <img
                        src="/placeholder.svg"
                        width="40"
                        height="40"
                        alt="Profile"
                        className="object-cover w-full h-full"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                    </div>
                    <div className="text-sm font-semibold">
                      <div>Brandon Robinson</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        China
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="max-md:absolute max-md:left-[22px] max-md:top-0" />
          <CarouselNext className="max-md:absolute max-md:right-[22px] max-md:top-0" />
        </Carousel>
      </div>
    </div>
  );
}
