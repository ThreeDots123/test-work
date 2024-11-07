import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="py-[100px] bg-slate-100">
      <div className="container border-t border-gray-300 space-y-6">
        <div className="flex justify-center mt-5">
          <ul className="md:flex gap-[30px] max-md:text-center max-md:space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="./about">About Us</a>
            </li>
            <li>
              <a href="contract-procedure.php">Procedure for contract</a>
            </li>
            <li>
              <a href="payment.php">Payment</a>
            </li>
            <li>
              <a href="place-order.php">Place your order</a>
            </li>
            <li>Availability 24/7 Mon - Sun</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-center">
          <FaInstagram size={20} />
          <FaFacebook size={20} />
          <FaLinkedinIn size={20} />
          <FaXTwitter size={20} />
        </div>
        <div className="flex justify-center">
          <p>
            Copywrite © <span id="footer-year">2024</span> Brasil Resources Co
            Ltd | All Rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
