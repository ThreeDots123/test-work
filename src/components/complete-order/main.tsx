import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const Input = ({ label, type = "text" }: { label: string; type?: string }) => {
  return (
    <div className="md:w-[33.33333%]">
      <label>{label}*</label>
      <input
        type={type}
        className="block w-full px-1.5 py-1.5 text-lg font-medium text-[#212529] border border-[#ced4da] rounded-[0.375rem] transition-all"
      />
    </div>
  );
};

export default function OrderMain() {
  return (
    <>
      <header>
        <div
          className="min-h-[800px] relative lg:min-h-[1500px]"
          style={{
            backgroundImage: "url(../../../place-order.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(90%)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container max-w-[1300px] pt-[150px] flex">
            <div className="w-[80%] min-h-[150px] bg-[rgb(250,216,152)] mx-auto">
              <h2 className="py-3 text-center text-3xl font-semibold mb-2">
                COMPLETE YOUR ORDER
              </h2>

              <form action="">
                <div className="p-[50px] space-y-10">
                  <div className="md:flex items-center gap-5">
                    <Input label="Company name" />
                    <Input label="Full name" />
                    <Input label="Email address" />
                  </div>

                  <div className="md:flex items-center gap-5">
                    <Input label="Company address" />
                    <div className="md:w-[33.33333%]">
                      <label>Choose product*</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sugar" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          <SelectItem value="sugar">Sugar</SelectItem>
                          <SelectItem value="chicken">
                            Froxen Chicken
                          </SelectItem>
                          <SelectItem value="ore">Ore</SelectItem>
                          <SelectItem value="copper">Copper</SelectItem>
                          <SelectItem value="oil">Crude Oil</SelectItem>
                          <SelectItem value="bean">Soybean</SelectItem>
                          <SelectItem value="scrap">Scrap</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Input label="No of purchases" />
                  </div>

                  <div className="md:flex items-center gap-5 max-md:space-y-4">
                    <div className="md:w-[33.33333%]">
                      <label>Are you the end buyer or broker*</label>
                      <div className="mt-5 space-y-2">
                        <RadioGroup defaultValue="comfortable">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="end-buyer" id="r2" />
                            <Label htmlFor="end-buyer">End buyer</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="broker" id="r3" />
                            <Label htmlFor="broker">Broker</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="md:w-[33.33333%]">
                      <label>Quantity*</label>
                      <div className="mt-5 space-y-2">
                        <RadioGroup defaultValue="">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bulk-boat" id="r2" />
                            <Label htmlFor="bulk-boat">Bulk Boat</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="container" id="r3" />
                            <Label htmlFor="container">Container</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="md:w-[33.33333%]">
                      <label>Intercom*</label>
                      <div className="mt-5 space-y-2">
                        <RadioGroup defaultValue="">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="FOB" id="r2" />
                            <Label htmlFor="FOB">FOB</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="CIF" id="r3" />
                            <Label htmlFor="CIF">CIF</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="CNF" id="r3" />
                            <Label htmlFor="CNF">CNF</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex items-center gap-5">
                    <Input label="Frequency of Delivery" />
                    <Input label="Port of Discharge" />
                  </div>

                  <div>
                    <label>
                      Additional note{" "}
                      <span className="text-[#333] text-sm">(Optional)</span>
                    </label>
                    <Textarea placeholder="Write here" cols={30} />
                    <Button className="rounded-none mt-5 bg-[rgb(180,129,33)] hover:bg-[rgba(180,129,33,.9)]">
                      Submit Request
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

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
