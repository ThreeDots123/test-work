import { Card } from "../ui/card";

export default function AboutMain() {
  return (
    <>
      <header
        className="relative min-h-[1100px]"
        style={{
          backgroundImage: "url(../../../public/about-img.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container max-w-[1140px] about-us pt-32">
          <Card className="p-10">
            <h2 className="py-3 text-center text-2xl font-semibold">
              ABOUT US
            </h2>
            <div className="card-body space-y-4">
              <p>
                Brasail Resources Co Ltd is a leading manufacturer and exporter
                of different kinds of Brazilian products, we have different
                kinds of Brazilian products available in our factory and ready
                for delivery at a discount sales depending on quantity. We
                manufacture the highest, quality, and standard Brazilian
                products. The prices and efficiency of our products are
                extremely favorable for the end buyers and end users. The
                quality of our products are remarkably outstanding which easily
                outshines others. We are a versatile group of company with the
                main purpose of delivering the best goods and services to our
                global clientele - having being in the industry for almost a
                decade, we definitely understand what the market entails and
                know how to serve you better.{" "}
                <span>
                  Successful Buyers/Traders establish relationships with
                  refiners, producers, mills, manufacturers and the like to
                  insure the best pricing and avoid the myriad of potential
                  pitfalls that occur when dealing with resellers who do not
                  produce, possess, hold or control the product from beginning
                  to end.
                </span>
              </p>
              <p>
                Registered as a Cooperative company, with a verified
                Registration Number and Tax ID. You can make purchases through
                our website as it has been made easy. Our purchase delivery
                usually takes 7-20 working days depending on your location.
              </p>
              <p>
                Our bank approve payment terms are DLC, T/T, and SBLC (for old
                customers only) Our delivery term are CIF and FOB. We remain the
                best and already dominating the market because we produce the
                best products and fully approved by the Brazilian Govt.
              </p>
              <p className="text-red-700 font-bold">
                Note: We are the main manufacturer of all our products. We have
                partners, and marketers of high reputation in some countries
                like China, Russia, UAE, and USA just for easy company to
                customer relationship. Our company takes cost of every delivery
                damages because we're fully insured and therefore as a buyer,
                you don't have to be scared of any purchase damage because our
                company handles that for you.
              </p>
            </div>{" "}
          </Card>
        </div>
      </header>
    </>
  );
}
