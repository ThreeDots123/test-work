import { FaRegPaperPlane } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function ContactMain() {
  return (
    <>
      <header
        className="relative min-h-[1100px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(../../../public/sugar-hero.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container max-w-[1140px] about-us pt-32">
          <div className="flex mt-[100px] justify-around gap-7 max-lg:flex-col-reverse">
            <div className="flex-[3]">
              <Card className="md:px-10 md:py-8 py-4 px-5">
                <CardHeader className="flex items-center flex-row gap-3">
                  <p className="mt-2 text-2xl font-medium">Get a quotation </p>
                  <span>
                    <img
                      src="./flag.svg"
                      alt="Flag"
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                </CardHeader>
                <CardContent className="w-full">
                  <form action="">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full border-0 p-2.5 mt-2.5 bg-[#f5f5f5]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border-0 p-2.5 mt-2.5 bg-[#f5f5f5]"
                    />
                    <textarea
                      name="text"
                      placeholder="Message"
                      className="w-full border-0 p-2.5 mt-2.5 bg-[#f5f5f5]"
                    />
                  </form>
                  <Button className="mt-2.5 px-2.5 rounded-none bg-[#255a46]">
                    <FaRegPaperPlane />
                    Get A Quotation
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-white">
              <div className="max-lg:text-center">
                <h4 className="text-2xl font-medium">Brazil Address</h4>
                <p className="small">
                  Av. Vale dos Barris, no. 401 - Barris Salvador - Bahia
                </p>
                <h4
                  style={{ marginTop: "25px" }}
                  className="text-2xl font-medium"
                >
                  Email
                </h4>
                <p className="small">sales@brasailresourcescoltd.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
