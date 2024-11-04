import { Table, TableBody, TableCell, TableRow } from "../../../ui/table";

export default function CaneSugar150() {
  return (
    <div className="flex mt-[150px] max-w-[1300px] mx-auto justify-around items-center mb-12">
      <img
        src="./icumsa150.png"
        alt="icumsa150"
        className="w-[300px] h-[300px] object-cover"
      />
      <div>
        <h2 className="text-3xl font-medium bg-[rgb(108,117,125)] py-3">
          SPECIFICATIONS OF ICUMSA-150 CANE SUGAR
        </h2>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Crop</TableCell>
              <TableCell>Crop</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Smell</TableCell>
              <TableCell>FREE OF ANY ODOR</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SO2</TableCell>
              <TableCell>70 MG/KG MAXIMUM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Substance</TableCell>
              <TableCell>SOLID, CRYSTAL</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Radiation</TableCell>
              <TableCell>NORMAL W/O PRESENCE OF CESIUM OR IODINE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sediments</TableCell>
              <TableCell>NONE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Colour</TableCell>
              <TableCell>SPARKLING WHITE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Polarization</TableCell>
              <TableCell>99.50% MINIMUM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Granulation</TableCell>
              <TableCell>FINE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Solubility</TableCell>
              <TableCell>100% DRY AND FREE FLOWING</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moisture</TableCell>
              <TableCell>0.10% MAXIMUM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ash content</TableCell>
              <TableCell>0.10% MAXIMUM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ICUMSA</TableCell>
              <TableCell>RBU</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Origin</TableCell>
              <TableCell>Brazil</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
