import { Card } from "../../ui/card";

const FrozenChickenCard = (data: { src: string; name: string }) => {
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
        <p className="font-semibold">{data.name}</p>
      </div>
    </Card>
  );
};

export default function FrozenChickenDetails() {
  return (
    <>
      <main>
        <div
          className="min-h-[50vh] relative"
          style={{
            backgroundImage: "url(../../../chicken-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(60%)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative text-center translate-y-[25vh]">
            <h1 className="uppercase text-6xl font-semibold text-[#333]">
              Frozen Chicken
            </h1>
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="py-10 grid lg:grid-cols-4 max-w-[900px] mx-auto md:grid-cols-2">
            <FrozenChickenCard
              src="./chicken.png"
              name="Whole Chicken (Grizzler)"
            />
            <FrozenChickenCard src="./drumstick.png" name="Frozen Drumstick" />
            <FrozenChickenCard
              src="./chicken-breast.png"
              name="Frozen Chicken Breast"
            />
            <FrozenChickenCard
              src="./chicken-heart.png"
              name="Frozen Chicken Heart"
            />
            <FrozenChickenCard
              src="./chicken-pawn.png"
              name="Frozen Chicken Pawn"
            />
            <FrozenChickenCard
              src="./chicken-leg.png"
              name="Frozen Chicken Leg"
            />
            <FrozenChickenCard
              src="./chicken-liver.png"
              name="Frozen Chicken Liver"
            />
            <FrozenChickenCard
              src="./chicken-leg-quarter.png"
              name="Chicken Leg Quarter"
            />
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
