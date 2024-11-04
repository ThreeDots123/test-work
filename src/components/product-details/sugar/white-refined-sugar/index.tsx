import { Table, TableBody, TableCell, TableRow } from "../../../ui/table";

export default function WhiteRefinedSugar() {
  return (
    <div className="lg:flex mt-[150px] max-w-[1300px] mx-auto justify-around items-center mb-12 max-md:space-y-10">
      <img
        src="./icumsa45.png"
        alt="icumsa45"
        className="w-[300px] h-[300px] object-cover max-md:mx-auto"
      />
      <div>
        <h2 className="text-3xl font-medium bg-[rgb(108,117,125)] py-3">
          SPECIFICATIONS OF ICUMSA-45 WHITE REFINED SUGAR
        </h2>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Colour</TableCell>
              <TableCell>MAX. 45 Icumsa</TableCell>
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
              <TableCell>0.60 - 0.90 mm.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Target M.A</TableCell>
              <TableCell>1.00 ñ 1.50 mm</TableCell>
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
            <TableRow>
              <TableCell>Pesticide</TableCell>
              <TableCell>NONE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sulphur Doixide</TableCell>
              <TableCell>NONE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pathogenic Bacteria</TableCell>
              <TableCell>NONE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Coli-form Bacteria</TableCell>
              <TableCell>MAX. 10 CFU/10 GM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E-Coli</TableCell>
              <TableCell>NONE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Yeast & Mold</TableCell>
              <TableCell> MAX. 10 CFU/10 GM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
