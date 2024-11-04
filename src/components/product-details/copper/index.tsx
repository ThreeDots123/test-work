import { Card, CardContent, CardHeader } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function CopperDetails() {
  return (
    <>
      <div
        className="min-h-[800px] relative lg:min-h-[1500px]"
        style={{
          backgroundImage: "url(../../../copper-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(90%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container max-w-[1300px] pt-[100px]">
          <Card>
            <CardHeader>
              <h3 className="py-3 text-center text-3xl font-semibold mb-2">
                Copper
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <p>
                  Copper was discovered and first used during the Neolithic
                  Period, or New Stone Age. Though the exact time of this
                  discovery will probably never be known, it is believed to have
                  been about 8000 BCE. Copper is found in the free metallic
                  state in nature; this native copper is the material that
                  humans employed as a substitute for stone. From it they
                  fashioned crude hammers and knives and, later, other utensils.
                  The malleability of the material made it relatively simple to
                  shape implements by beating the metal. Pounding hardened the
                  copper so that more durable edges resulted; the bright reddish
                  colour of the metal and its durability made it highly prized.
                </p>
                <p>
                  The search for copper during this early period led to the
                  discovery and working of deposits of native copper. Sometime
                  after 6000 BCE the discovery was made that the metal could be
                  melted in the campfire and cast into the desired shape. Then
                  followed the discovery of the relation of metallic copper to
                  copper-bearing rock and the possibility of reducing ores to
                  the metal by the use of fire and charcoal. This was the dawn
                  of the metallic age and the birth of metallurgy.
                </p>
                <p>
                  Copper is commercially produced mainly by smelting or
                  leaching, usually followed by electrodeposition from sulfate
                  solutions. For a detailed treatment of the production of
                  copper. The major portion of copper produced in the world is
                  used by the electrical industries; most of the remainder is
                  combined with other metals to form alloys. (It is also
                  technologically important as an electroplated coating.)
                  Important series of alloys in which copper is the chief
                  constituent are brasses (copper and zinc), bronzes (copper and
                  tin), and nickel silvers (copper, zinc, and nickel, no
                  silver). There are many useful alloys of copper and nickel,
                  including Monel; the two metals are completely miscible.
                  Copper also forms an important series of alloys with aluminum,
                  called aluminum bronzes. Beryllium copper (2 percent Be) is an
                  unusual copper alloy in that it can be hardened by heat
                  treatment. Copper is a part of many coinage metals. Long after
                  the Bronze Age passed into the Iron Age, copper remained the
                  metal second in use and importance to iron. By the 1960s,
                  however, cheaper and much more plentiful aluminum had moved
                  into second place in world production.
                </p>
              </div>

              <div className="overflow-x-auto mt-8">
                <Table className="">
                  <TableHeader className="bg-[rgb(33,37,41)]">
                    <TableRow className="py-6">
                      <TableHead className="text-white">#</TableHead>
                      <TableHead className="text-white">Country</TableHead>
                      <TableHead className="text-white">
                        mine production 2016 (metric tons)
                      </TableHead>
                      <TableHead className="text-white">
                        % of world mine production
                      </TableHead>
                      <TableHead className="text-white">
                        demonstrated reserves 2016 (metric tons)
                      </TableHead>
                      <TableHead className="text-white">
                        % of world demonstrated reserves
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="py-6">
                      <TableCell>1</TableCell>
                      <TableCell>Chile</TableCell>
                      <TableCell>5,500,000</TableCell>
                      <TableCell>28.4</TableCell>
                      <TableCell>210,000,000</TableCell>
                      <TableCell>29.2</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>2</TableCell>
                      <TableCell>Peru</TableCell>
                      <TableCell>2,300,000</TableCell>
                      <TableCell>11.9</TableCell>
                      <TableCell>81,000,000</TableCell>
                      <TableCell>11.3</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>3</TableCell>
                      <TableCell>China</TableCell>
                      <TableCell>1,740,000</TableCell>
                      <TableCell>9.0</TableCell>
                      <TableCell>28,000,000</TableCell>
                      <TableCell>3.9</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>4</TableCell>
                      <TableCell>United States</TableCell>
                      <TableCell>1,410,000</TableCell>
                      <TableCell>7.3</TableCell>
                      <TableCell>35,000,000</TableCell>
                      <TableCell>4.9</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>5</TableCell>
                      <TableCell>Australia</TableCell>
                      <TableCell>970,000</TableCell>
                      <TableCell>5.0</TableCell>
                      <TableCell>89,000,000</TableCell>
                      <TableCell>12.4</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>6</TableCell>
                      <TableCell>Congo(Kinshasa)</TableCell>
                      <TableCell>910,000</TableCell>
                      <TableCell>4.7</TableCell>
                      <TableCell>20,000,000</TableCell>
                      <TableCell>2.8</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>7</TableCell>
                      <TableCell>Zambia</TableCell>
                      <TableCell>740,000</TableCell>
                      <TableCell>3.8</TableCell>
                      <TableCell>20,000,000</TableCell>
                      <TableCell>7.4</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-10 grid gap-2 lg:grid-cols-7 md:grid-cols-3 grid-cols-2 max-[400px]:grid-cols-1">
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./copper1.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./copper2.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./copper3.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./copper4.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./copper5.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./copper-bg.jpg"
                />
              </div>

              <p className="text-red-500 mt-7">
                Note: All Ores are available and we can deliver to your
                destination ports.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

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
