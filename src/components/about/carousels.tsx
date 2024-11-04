import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

export default function AboutCarousel() {
  return (
    <div className="w-full max-w-lg mx-auto py-10">
      <h4 className="font-bold text-3xl text-center">Testimonials</h4>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div className="grid items-center justify-center p-6">
              <div className="grid gap-3 lg:gap-5">
                <p className="text-lg lg:text-xl">
                  &ldquo;Working with our Brasail Resources Co Ltd has been an
                  incredible experience. The level of collaboration and support
                  is outstanding. .&ldquo;
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
          {/* <CarouselItem>
            <div className="grid items-center justify-center p-6">
              <div className="grid gap-3 lg:gap-5">
                <p className="text-lg lg:text-xl">
                  &ldquo;The support team was incredibly helpful and responsive.
                  They resolved my issue in no time, and I couldn&apos;t be
                  happier with the service.&ldquo;
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
                    <div>Sophia Lee</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Customer Support Representative
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
