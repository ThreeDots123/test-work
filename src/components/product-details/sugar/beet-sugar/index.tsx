import { Table, TableBody, TableCell, TableRow } from "../../../ui/table";

export default function BeetSugar() {
  return (
    <div className="lg:flex mt-[150px] max-w-[1300px] mx-auto justify-around items-center mb-12 max-md:space-y-10">
      <img
        src="./beetsugar.png"
        alt="beetsugar"
        className="w-[300px] h-[300px] object-cover max-md:mx-auto"
      />
      <div>
        <h2 className="text-3xl font-medium bg-[rgb(108,117,125)] py-3">
          SPECIFICATIONS OF BEET SUGAR
        </h2>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Polarization</TableCell>
              <TableCell>Min 94.00 Degree Polarization (0Z)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moisture</TableCell>
              <TableCell> Max. 0.7% by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Packing</TableCell>
              <TableCell>50 Kilagram</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
