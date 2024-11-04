import { Card, CardContent, CardHeader } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function OreDetails() {
  return (
    <>
      <div
        className="min-h-[800px] relative lg:min-h-[1500px]"
        style={{
          backgroundImage: "url(../../../ore-bg.jpg)",
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
                Formation of Ore
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <p>
                  A cubic mile of average rock contains approximately one
                  trillion dollars worth of metal, yet it would be impractical
                  to mine ordinary rock because the expense would be too great.
                  Ore provides a less expensive option. Ore is formed by
                  geologic processes, which concentrate metals to tens or
                  thousands of times their average crustal abundances. Even
                  then, a mine may not prove profitable unless a host of other
                  geologic and nongeologic conditions are met.
                </p>
                <p>
                  Geologic factors include the deposit's size, depth, and
                  amenability to processing. Small amounts of arsenic, for
                  example, may increase the cost of processing and waste rock
                  disposal. Higher amounts could mean a profitable arsenic mine.
                  Profitability also ties the definition of ore to a host of
                  nongeologic conditions including demand for the metal,
                  geographic location of the deposit, local labor conditions,
                  local energy costs, governmental regulations, and many other
                  economic factors.
                </p>
                <p>
                  Besides metals, ore commonly contains minerals of no
                  particular value. Gold, for example, occurs in veins composed
                  mostly of quartz. Although not of economic value, so-called
                  gangue minerals can yield valuable information about the
                  origin of the deposit. Quartz, for example, yields information
                  about the temperature at which the ore formed, which could be
                  useful in the search for more gold along the vein. In
                  addition, it is doubtful that the gold mineralization would
                  have been noticed had not quartz caught the eye of a geologist
                  who knew that precious metals sometimes occur in veins of
                  quartz.
                </p>
                <p>
                  Ore deposits are relatively rare and tend to be distributed in
                  an irregular fashion around the globe, but there is nothing
                  unusual about the manner in which they form. They develop from
                  the same geologic processes that form ordinary igneous,
                  sedimentary, and metamorphic rocks.
                </p>
              </div>

              <div className="overflow-x-auto mt-8">
                <Table className="">
                  <TableHeader className="bg-[rgb(33,37,41)]">
                    <TableRow className="py-6">
                      <TableHead className="text-white">#</TableHead>
                      <TableHead className="text-white">Item</TableHead>
                      <TableHead className="text-white">
                        Material characters
                      </TableHead>
                      <TableHead className="text-white">Rates</TableHead>
                      <TableHead className="text-white">Shipment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="py-6">
                      <TableCell>1</TableCell>
                      <TableCell>Coltan</TableCell> <TableCell>Ore</TableCell>
                      <TableCell>Ta205 more than 25%</TableCell>
                      <TableCell>Container 20 ft or airfrieght</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>2</TableCell>
                      <TableCell>Tin</TableCell>
                      <TableCell>Ore</TableCell>
                      <TableCell>Tin more than 50%</TableCell>
                      <TableCell>Container 20 ft</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>3</TableCell>
                      <TableCell>Lead</TableCell>
                      <TableCell>Ore</TableCell>
                      <TableCell>Lead more than 50%</TableCell>
                      <TableCell>Container 20 ft</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>4</TableCell>
                      <TableCell>Iron</TableCell>
                      <TableCell>Ore</TableCell>
                      <TableCell>TFe more than 62%</TableCell>
                      <TableCell>Bulk vessel</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>5</TableCell>
                      <TableCell>Ilmenite</TableCell>
                      <TableCell>Ore</TableCell>
                      <TableCell>Ti02 more than 45%</TableCell>
                      <TableCell>Bulk vessel</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>6</TableCell>
                      <TableCell>Rutile</TableCell>
                      <TableCell>Ore</TableCell>
                      <TableCell>Ti02 more than 65%</TableCell>
                      <TableCell>Container 20 ft or bulk vessel</TableCell>
                    </TableRow>
                    <TableRow className="py-6">
                      <TableCell>7</TableCell>
                      <TableCell>Lithium</TableCell>
                      <TableCell>Ore</TableCell>
                      <TableCell>Li20 more than 5%</TableCell>
                      <TableCell>Container 20 ft</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-10 grid gap-2 lg:grid-cols-7 md:grid-cols-3 grid-cols-2 max-[400px]:grid-cols-1">
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./ore1.jpg"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./ore5.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./ore3.jpg"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./ore4.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./ore7.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./ore6.png"
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
