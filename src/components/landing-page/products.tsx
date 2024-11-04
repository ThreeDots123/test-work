import { Card } from "../ui/card";

const ProductCard = (data: { src: string; url: string; name: string }) => (
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
      <p className="text-lg font-semibold">{data.name}</p>
      <a
        href={data.url}
        className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md text-xs px-0 py-0"
      >
        Read more
      </a>
    </div>
  </Card>
);

export default function OurProducts() {
  return (
    <div className="bg-slate-100">
      <div className="container pt-20 max-w-[1400px]">
        <h4 className="text-3xl font-semibold text-center">Our Products</h4>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-7">
          <ProductCard src="./sugar.png" url="/sugar" name="Sugar" />
          <ProductCard
            src="./chicken.png"
            url="/chicken"
            name="Frozen Chicken"
          />
          <ProductCard src="./ore.jpg" url="/ore" name="Ore" />
          <ProductCard src="./copper.png" url="/copper" name="Copper" />
          <ProductCard src="./oil.jpg" url="/crude" name="Oil" />
          <ProductCard src="./soybean.jpg" url="/soybean" name="Soybean" />
          <ProductCard src="./placeholder.svg" url="/scrap" name="Scrap" />
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="text-center w-fit mx-auto">
          <h5 className="text-xl font-medium">Ready to request a quote?</h5>
          <span className="block mx-auto">
            <a
              href="/contact"
              className="text-white py-[5px] px-10 text-5xl font-semibold bg-[rgb(32,31,31)] block w-fit mx-auto"
            >
              let's talk
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
