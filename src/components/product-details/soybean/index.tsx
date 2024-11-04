import { Card, CardContent } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function SoybeanDetails() {
  return (
    <>
      <main>
        <div
          className="min-h-[50vh] relative"
          style={{
            backgroundImage: "url(../../../ore-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(60%)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative text-center translate-y-[25vh]">
            <h1 className="uppercase text-6xl font-semibold text-white">
              SoyBean
            </h1>
          </div>
        </div>
      </main>

      <div className="bg-slate-100">
        <div className="container pt-[100px]">
          <Card>
            <CardContent>
              <div className="space-y-5 py-6">
                <p>
                  The first stage of growth is germination, a method which first
                  becomes apparent as a seed's radicle emerges. This is the
                  first stage of root growth and occurs within the first 48
                  hours under ideal growing conditions. The first photosynthetic
                  structures, the cotyledons, develop from the hypocotyl, the
                  first plant structure to emerge from the soil. These
                  cotyledons both act as leaves and as a source of nutrients for
                  the immature plant, providing the seedling nutrition for its
                  first 7 to 10 days.
                </p>
                <p>
                  Soybean seeds are harvested from mature pods of the soybean
                  plant which belongs to the family Fabacee. Though it is a
                  species of legumes, the crop is classified as an oil seed
                  because of its high oil content. Soybean is also known as a
                  good source of low-cost protein.
                </p>
                <p>
                  Product is organically produced and processed according to
                  current Good Manufacturing Practices, HACCP norms and
                  regulations NPOP, NOP & EEC 834/2007.
                </p>
              </div>

              <div className="overflow-x-auto mt-8">
                <Table className="">
                  <TableHeader>
                    <TableRow className="py-6">
                      <TableHead className="text-[#333]">Commodity</TableHead>
                      <TableHead className="text-[#333]">Soy Bean</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="py-6">
                      <TableCell>GMO or NON-GMO</TableCell>
                      <TableCell>NON-GMO</TableCell>{" "}
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>TYPE</TableCell>
                      <TableCell>Fit for human consumption</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>OIL CONTENT</TableCell>
                      <TableCell>18.5% Basis, 18.05 Minimum</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>MOISTURE</TableCell>
                      <TableCell>13.5% Maximum</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>MAX SPLITS</TableCell>
                      <TableCell>20%</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>PROTEIN</TableCell>
                      <TableCell>Min 35%</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>MAX COLOR</TableCell>
                      <TableCell>2%</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>HUSKS</TableCell>
                      <TableCell>No Husks</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>TEST WEIGHT</TableCell>
                      <TableCell>54 Pounds/Min/Bushel</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>TOTAL DAMAGED KERNELS</TableCell>
                      <TableCell>3% Max</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>HEAT DAMAGED KERNELS</TableCell>
                      <TableCell>0.5% Maximum</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>HEAT DAMAGED KERNELS</TableCell>
                      <TableCell>0.5% Maximum</TableCell>
                    </TableRow>

                    <TableRow className="py-6">
                      <TableCell>MAX RADIATION</TableCell>
                      <TableCell>Normal</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-10 grid gap-2 lg:grid-cols-9 md:grid-cols-3 grid-cols-2 max-[400px]:grid-cols-1">
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./soybean1.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./soybean2.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./soybean4.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./soybean5.png"
                />
                <img
                  className="max-w-[10rem] max-h-[6rem] max-lg:mx-auto"
                  src="./soybean6.png"
                />
              </div>
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
