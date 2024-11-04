import { RiArrowUpDoubleLine } from "react-icons/ri";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function PricingMain() {
  return (
    <header>
      <div
        className="relative min-h-[800px]"
        style={{
          backgroundImage: "url(../../../pricing.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container pricing overflow-x-auto pt-[100px] max-w-[1300px]">
          <p className="p-2 bg-[rgb(211,165,80)] my-[30px]">
            <RiArrowUpDoubleLine className="inline" size={20} /> Sugar pricing
            is based on the grade(specs) of sugar required and the Stock
            Exchange/ICE Benchmark +/- a Premium at time of contract. Final
            pricing is calculated on the day of loading and issuance of invoice.
          </p>

          <div className="container-fluid">
            <Table className="bg-[rgb(108,117,125)]">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#1d1d1d]">Date</TableHead>
                  <TableHead className="text-[#1d1d1d]">
                    Quantity per month
                  </TableHead>
                  <TableHead className="text-[#1d1d1d]">
                    For 12 months
                  </TableHead>
                  <TableHead className="text-[#1d1d1d]">Document</TableHead>
                  <TableHead className="text-[#1d1d1d]">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>January</TableCell>
                  <TableCell>12,500 MT</TableCell>{" "}
                  <TableCell>150,000 MT</TableCell>
                  <TableCell>CIF</TableCell>
                  <TableCell>$335 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>February</TableCell>
                  <TableCell>25,000 MT</TableCell>
                  <TableCell>300,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$315 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>March</TableCell>
                  <TableCell>50,000 MT</TableCell>
                  <TableCell>600,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$305 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>April</TableCell>
                  <TableCell>75,000 MT</TableCell>
                  <TableCell>900,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$295 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>May</TableCell>
                  <TableCell>100,000 MT</TableCell>
                  <TableCell>1,200,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$285 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>June</TableCell>
                  <TableCell>150,000 MT</TableCell>
                  <TableCell>1,800,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$275 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>July</TableCell>
                  <TableCell>200,000 MT</TableCell>
                  <TableCell>2,400,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$260 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>August</TableCell>
                  <TableCell>300,000 MT</TableCell>
                  <TableCell>3,600,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$250 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>September</TableCell>
                  <TableCell>400,000 MT</TableCell>
                  <TableCell>4,800,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$230 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>October</TableCell>
                  <TableCell>500,000 MT</TableCell>
                  <TableCell>6,000,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$220 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>November</TableCell>
                  <TableCell>600,000 MT</TableCell>
                  <TableCell>7,200,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$225 PER MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>December</TableCell>
                  <TableCell>1,000,000 MT</TableCell>
                  <TableCell>12,000,000 MT</TableCell>
                  <TableCell>CIF</TableCell> <TableCell>$200 PER MT</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </header>
  );
}
