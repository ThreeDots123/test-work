import { Table, TableBody, TableCell, TableRow } from "../../../ui/table";

export default function CaneSugar() {
  return (
    <div className="lg:flex mt-[150px] max-w-[1300px] mx-auto justify-around items-center mb-12 max-md:space-y-10">
      <img
        src="./icumsa100.png"
        alt="icumsa100"
        className="w-[300px] h-[300px] object-cover max-md:mx-auto"
      />
      <div>
        <h2 className="text-3xl font-medium bg-[rgb(108,117,125)] py-3">
          SPECIFICATIONS OF ICUMSA 100 CANE SUGAR
        </h2>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Colour</TableCell>
              <TableCell>MAX. 100 Icumsa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Polarization</TableCell>
              <TableCell>MIN. 99.8% Degree Polarization (0Z)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moisture</TableCell>
              <TableCell>MAX. 0.04% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Conductivity Ash</TableCell>
              <TableCell>MAX. 0.10% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Invert Sugar</TableCell>
              <TableCell>MAX. 0.10% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Size</TableCell>
              <TableCell>Size 0.8 mm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Target M.A</TableCell>
              <TableCell>M.A. 0.5 ñ 1.00 mm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sediments</TableCell>
              <TableCell>MAX. 0.02% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arsenic</TableCell>
              <TableCell>MAX. 0.50mg/kg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lead</TableCell>
              <TableCell>MAX. 0.50mg/kg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Copper</TableCell>
              <TableCell>MAX. 1.50mg/kg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pesticide</TableCell>
              <TableCell>NONE</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
