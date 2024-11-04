export default function Footer() {
  return (
    <div className="py-[100px] bg-slate-100">
      <div className="container border-t border-gray-300 ">
        <div className="flex justify-center mt-5">
          <ul className="md:flex gap-[30px] mb-4 max-md:text-center max-md:space-y-2">
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
