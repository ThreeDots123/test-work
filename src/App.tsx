import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/footer";
import NavigationBar from "./components/navigation";
import LandingPage from "./components/landing-page";
import ProcedureForContract from "./components/procedure-for-contract";
import Contact from "./components/contact";
import SoybeanDetails from "./components/product-details/soybean";
import ScrapDetails from "./components/product-details/scrap";
import Oil from "./components/product-details/oil";
import CopperDetails from "./components/product-details/copper";
import OreDetails from "./components/product-details/ore";
import FrozenChickenDetails from "./components/product-details/frozen-chicken";
import SugarDetails from "./components/product-details/sugar";
import CaneSugar from "./components/product-details/sugar/100-cane-sugar";
import WhiteRefinedSugar from "./components/product-details/sugar/white-refined-sugar";
import VHPSugar from "./components/product-details/sugar/VHP-sugar";
import BeetSugar from "./components/product-details/sugar/beet-sugar";
import BrownCaneSuagr from "./components/product-details/sugar/brown-cane-sugar";
import CaneSugar150 from "./components/product-details/sugar/150-cane-sugr";
import Pricing from "./components/pricing";
import Payment from "./components/payment";
import CompleteOrder from "./components/complete-order";
import AboutPage from "./components/about";
import CoffeeDetails from "./components/product-details/coffee";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="procedure" element={<ProcedureForContract />} />
      <Route path="contact" element={<Contact />} />
      <Route path="soybean" element={<SoybeanDetails />} />
      <Route path="scrap" element={<ScrapDetails />} />
      <Route path="crude" element={<Oil />} />
      <Route path="coffee" element={<CoffeeDetails />} />
      <Route path="copper" element={<CopperDetails />} />
      <Route path="ore" element={<OreDetails />} />
      <Route path="chicken" element={<FrozenChickenDetails />} />
      <Route path="sugar" element={<SugarDetails />} />
      <Route path="icumsa100" element={<CaneSugar />} />
      <Route path="icumsa45" element={<WhiteRefinedSugar />} />
      <Route path="vhp" element={<VHPSugar />} />
      <Route path="beet" element={<BeetSugar />} />
      <Route path="icumsa6" element={<BrownCaneSuagr />} />
      <Route path="icumsa150" element={<CaneSugar150 />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="contract" element={<ProcedureForContract />} />
      <Route path="payment" element={<Payment />} />
      <Route path="order" element={<CompleteOrder />} />
      <Route path="*" element={<p>Not Found</p>} />
    </>
  ),
  {
    // basename: import.meta.env.VITE_ADMIN_PATH,
  }
);

function App() {
  return (
    <>
      <NavigationBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
