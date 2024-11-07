const ProductCard = (data: { src: string; url: string; name: string }) => (
  <a
    href={data.url}
    className="w-full max-w-[1000px] h-48 block mx-auto relative"
  >
    <div className="absolute bg-[#000] inset-0 opacity-55 z-[2]" />
    <div className="absolute z-10 inset-0 flex items-center max-md:justify-center">
      <h3 className="text-4xl font-medium text-white translate-x-32 max-md:translate-x-0">
        {data.name}
      </h3>
    </div>
    <img
      src={data.src}
      alt={data.name}
      className="w-full h-full transition-all object-cover opacity-75"
    />
  </a>
);

export default function OurProducts() {
  return (
    <div className="bg-slate-100">
      <div className="container pt-20 max-w-[1400px]">
        <h4 className="text-3xl font-semibold text-center">Our Products</h4>
        <div className="mt-7 space-y-5">
          <ProductCard src="./sugar.webp" url="/sugar" name="Sugar" />
          <ProductCard
            src="./Frozen-Chicken.webp"
            url="/chicken"
            name="Frozen Chicken"
          />
          <ProductCard src="./ore.webp" url="/ore" name="Ore" />
          <ProductCard src="./copper.jpg" url="/copper" name="Copper" />
          <ProductCard src="./crude-oil.jpg" url="/crude" name="Oil" />
          <ProductCard src="./coffee.jpg" url="/coffee" name="Coffee" />
          <ProductCard src="./soybean.jpg" url="/soybean" name="Soybean" />
          <ProductCard src="./scrap.jpg" url="/scrap" name="Scrap" />
        </div>
      </div>
    </div>
  );
}
