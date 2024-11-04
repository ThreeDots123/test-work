import { FaStar } from "react-icons/fa6";

export default function WhyChooseUs() {
  return (
    <div className="bg-slate-100">
      <div className="container pt-[11rem] px-20">
        <h4 className="text-5xl font-semibold text-center">
          Why choose us as your Brazilian Supplier?
        </h4>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-20 gap-x-5 gap-y-10">
          <div>
            <div className="text-center">
              <FaStar
                className="mx-auto mb-3 text-[#49A750] fill-[#49A750]"
                size={40}
              />
              <h3 className="text-center text-2xl font-semibold mb-1">
                Variety Of Supply
              </h3>
              <p>
                In Brasail Resources Co Ltd, we have different kinds of products
                available in our factory ready for shipment, and at discount
                sales depending on your demand.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center">
              <FaStar
                className="mx-auto mb-3 text-[#49A750] fill-[#49A750]"
                size={40}
              />
              <h3 className="text-center text-2xl font-semibold mb-1">
                Quality Guarantee
              </h3>
              <p>
                As we wouldn't want to jeopardize our reputation, we strive hard
                to provide you with the best services.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center">
              <FaStar
                className="mx-auto mb-3 text-[#49A750] fill-[#49A750]"
                size={40}
              />
              <h3 className="text-center text-2xl font-semibold mb-1">
                Logistics Efficiency
              </h3>
              <p>
                We understand the need for adequate and fast deliverable, we
                bridge the gap between suppliers and customers.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center">
              <FaStar
                className="mx-auto mb-3 text-[#49A750] fill-[#49A750]"
                size={40}
              />
              <h3 className="text-center text-2xl font-semibold mb-1">
                Logistics Efficiency
              </h3>
              <p>
                We understand the need for adequate and fast deliverable, we
                bridge the gap between suppliers and customers.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center">
              <FaStar
                className="mx-auto mb-3 text-[#49A750] fill-[#49A750]"
                size={40}
              />
              <h3 className="text-center text-2xl font-semibold mb-1">
                Sustainability and Responsibility
              </h3>
              <p>
                As stewards of the environment, we are committed to sustainable
                practices and responsible sourcing throughout our supply chain.
                By choosing our Brazilian sugar products, you're not just
                getting quality sugar – you're also supporting ethical and
                environmentally friendly agriculture practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
