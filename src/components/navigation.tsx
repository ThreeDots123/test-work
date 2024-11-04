import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const NavigationLink = ({
  url,
  placeholder,
}: {
  url: string;
  placeholder: string;
}) => {
  return (
    <div>
      <a
        className="hover:border-b-[2px] hover:text-orange-400 transition-all mx-4 my-2.5 font-medium  hover:border-orange-400"
        href={url}
      >
        {placeholder}
      </a>
    </div>
  );
};

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/">
          <img
            src="/logo.jpeg"
            alt="Brasil"
            className="w-[100px] h-[60px] my-2.5 mx-5"
          />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          <NavigationLink url="/" placeholder="Home" />
          <NavigationLink url="/about" placeholder="About us" />

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:border-b-[2px] hover:text-orange-400 transition-all mx-4 my-2.5 font-medium hover:border-orange-400 outline-0">
              Our Products
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="w-full">
                <a href="/sugar" className="block h-full w-full text-center">
                  Sugar
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                <a href="/chicken" className="block h-full w-full text-center">
                  Frozen Chicken
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                <a href="/ore" className="block h-full w-full text-center">
                  Ore
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                <a href="/copper" className="block h-full w-full text-center">
                  Copper
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem className="w-full">
                <a href="/crude" className="block h-full w-full text-center">
                  Crude oil
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                <a href="/soybean" className="block h-full w-full text-center">
                  Soy Bean
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                <a href="/scrap" className="block h-full w-full text-center">
                  Scrap
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:border-b-[2px] hover:text-orange-400 transition-all mx-4 my-2.5 font-medium hover:border-orange-400 outline-0">
              Procedures
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="/pricing" className="block h-full w-full text-center">
                  Pricing
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/contract" className="block h-full w-full text-center">
                  Procedure for contract
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/payment" className="block h-full w-full text-center">
                  Payment
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/order" className="block h-full w-full text-center">
                  Order
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavigationLink url="/contact" placeholder="Contact" />
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={"top"}>
              <a href="/" className="w-full block px1.5 py-2 text-lg">
                Home
              </a>
              <a href="/about" className="w-full block px1.5 py-2 text-lg">
                About us
              </a>
              <div className="w-full px1.5 py-2 text-lg">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">Our Products</p>
                      <ChevronDownIcon className="h-4 w-4 font-semibold" />
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1">
                    <a href="/sugar" className="w-full block px-4 py-2 text-lg">
                      Sugar
                    </a>
                    <a
                      href="/chicken"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Frozen Chicken
                    </a>
                    <a href="/ore" className="w-full block px-4 py-2 text-base">
                      Ore
                    </a>
                    <a
                      href="/copper"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Copper
                    </a>
                    <a
                      href="/crude"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Crude Oil
                    </a>
                    <a
                      href="/soybean"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Soybean
                    </a>
                    <a
                      href="/scrap"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Scrap
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <div className="w-full px1.5 py-2 text-lg">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">Procedure</p>
                      <ChevronDownIcon className="h-4 w-4 font-semibold" />
                      <span className="sr-only">Toggle</span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1">
                    <a
                      href="/pricing"
                      className="w-full block px-4 py-2 text-lg"
                    >
                      Pricing
                    </a>
                    <a
                      href="/contract"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Procedure for contract
                    </a>
                    <a
                      href="/payment"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Payment
                    </a>
                    <a
                      href="/order"
                      className="w-full block px-4 py-2 text-base"
                    >
                      Place your order
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <a href="/contact" className="w-full block px1.5 py-2 text-base">
                Contact
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// {/* <Collapsible>
//               <CollapsibleTrigger asChild>
//           <Button variant="ghost" size="sm" className="w-9 p-0">
//             <ChevronsDown className="h-4 w-4" />
//             <span className="sr-only">Toggle</span>
//           </Button>
//         </CollapsibleTrigger>
//       </div>
//       <div className="rounded-md border px-4 py-3 font-mono text-sm">
//         @radix-ui/primitives
//       </div>
//       <CollapsibleContent className="space-y-2">
//         <div className="rounded-md border px-4 py-3 font-mono text-sm">
//           @radix-ui/colors
//         </div>
//         <div className="rounded-md border px-4 py-3 font-mono text-sm">
//           @stitches/react
//         </div>
//       </CollapsibleContent>
//     </Collapsible> */}
