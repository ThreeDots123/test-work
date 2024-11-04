import { Table, TableBody, TableCell, TableRow } from "../../../ui/table";

export default function BrownCaneSuagr() {
  return (
    <div className="lg:flex mt-[150px] max-w-[1300px] mx-auto justify-around items-center mb-12 max-md:space-y-10">
      <img
        src="./icums6-.png"
        alt="brown-sugar"
        className="w-[300px] h-[300px] object-cover max-md:mx-auto"
      />
      <div>
        <h2 className="text-3xl font-medium bg-[rgb(108,117,125)] py-3">
          SPECIFICATIONS of ICUMSA 600 - 1200 BROWN CANE SUGAR
        </h2>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Brown Cane Sugar</TableCell>
              <TableCell>Refined Standards to Icumsa 600 - 1200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Polarity at 20C</TableCell>
              <TableCell>97.8C to 99.2C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sulphate content</TableCell>
              <TableCell>0.15% max.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ash Content</TableCell>
              <TableCell>0.15% max. weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moisture</TableCell>
              <TableCell>0.15% max.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Radiation</TableCell>
              <TableCell>NORMAL W/O PRESENCE OF CESIUM OR IODINE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Solubility</TableCell>
              <TableCell>97% Dry & Free Flowing</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Colour</TableCell>
              <TableCell>Golden Brown crop 2019 or Later</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Substance</TableCell>
              <TableCell>Solid Crystal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Reducing Sugar</TableCell>
              <TableCell>0.05% Max by weight</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Granulation</TableCell>
              <TableCell>1.00 - 1.5am/mm</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
