import { Table, TableBody, TableCell, TableRow } from "../../../ui/table";

export default function VHPSugar() {
  return (
    <div className="lg:flex mt-[150px] max-w-[1300px] mx-auto justify-around items-center mb-12 max-md:space-y-10">
      <img
        src="./vhpsugar.png"
        alt="vhpsugar"
        className="w-[300px] h-[300px] object-cover max-md:mx-auto"
      />
      <div>
        <h2 className="text-3xl font-medium bg-[rgb(108,117,125)] py-3">
          SPECIFICATIONS OF VHP SUGAR
        </h2>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Colour</TableCell>
              <TableCell>Min. 600 ICUMSA ñ Max. 1500 ICUMSA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Polarization</TableCell>
              <TableCell> Min 98.50 Degree Polarization (0Z)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moisture</TableCell>
              <TableCell>Max. 0.2% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Conductivity Ash</TableCell>
              <TableCell>Max. 0.8% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Invert Sugar</TableCell>
              <TableCell>Max. 0.8% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Size</TableCell>
              <TableCell>0.85 mm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Target M.A</TableCell>
              <TableCell>0.7 ñ 1.2 mm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sediments</TableCell>
              <TableCell>Max. 0.07% by weight</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
