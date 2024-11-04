export default function PaymentMain() {
  return (
    <header>
      <div
        className="min-h-[800px] relative"
        style={{
          backgroundImage: "url(../../../payment-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(90%)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-[150px]">
          <div className="container max-w-[1300px] py-4 text-black bg-[linear-gradient(rgba(255,248,248,0.8),rgba(255,247,247,0.8))] min-h-[50px] w-[80%]">
            <h2 className="py-3 text-center text-3xl font-semibold mb-2">
              PAYMENT TERMS
            </h2>

            <div className="space-y-4">
              <p>
                Packaging / Minimum Order Size: The minimum order is 5,000
                metric tons to entire bulk boats containing 25,000 metric tons.
                Our customers packaging requirements range from bulk/break bulk
                vessels, bulk truck/containers, FIBCs/big bags (1/1.5 metric
                ton), 50KG bags, 25KG/50 pound bags.
              </p>
              <p>
                Bulk Shipping Payment: All shipments shall be by 20% pre payment
                T/T, followed by 30% payment after confirmation of documents,
                then balance payment of 50% after full confirmation of goods and
                original documents at the destination port.
                <br />
              </p>
              <p>Container Shipping Payment:</p>
              <p>
                *1-10 Containers: 100% advance against signing of contract and
                invoice insurance.
              </p>
              <p>*11+ Containers - Other proposals available</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
