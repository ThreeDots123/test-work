export default function ProcedureMain() {
  return (
    <header>
      <div
        className="relative min-h-[800px]"
        style={{
          backgroundImage: "url(../../../contract-bg.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="pt-[100px]">
          <div className="container max-w-[1300px] py-4 text-black bg-[linear-gradient(rgba(255,248,248,0.8),rgba(255,247,247,0.8))] min-h-[50px] w-[80%]">
            <h2 className="py-3 text-center text-3xl font-semibold mb-2">
              PROCEDURE FOR CONTRACT
            </h2>

            <div className="space-y-4">
              <p>
                Buyer submits completed Client Intimation Sheet (CIS) with
                quality, quantity and destination;.
              </p>
              <p>
                Seller issues FCO and Buyer officiates every pages, sign and
                stamp last page filled up with: <br />
                <small>- Copy of Company Registration Certificate</small>
                <br />
                <small>- Passport copy of signatory</small>
              </p>
              <p>
                Seller issues draft sales contract agreement in PDF Format
                within 48 hours and Buyer approves it or requests an amendment
                and send it back to Seller's email.
              </p>
              <p>
                Seller transforms the draft in final contract, sign and stamp
                it, then send it to Buyer's email with draft of escrow
                agreement.
              </p>
              <p>
                Buyer signs, stamps and officiates the contract then send it
                back to Seller's email.
              </p>
              <p>
                After reception of contract by email, Seller sends Proforma
                Invoice (PI) to Buyer's email with bank information details. .
              </p>
              <p>
                Within 7 banking days, Buyer makes the agreed 20% pre payment by
                T/T or otherwise according to signed contract.
              </p>
              <p>
                On confirmation, Seller starts shipment immediately and make
                provision for all necessary documents which includes sending
                soft copy Proof Of Product (POP), SGS confirmable certificates,
                and original Bill of Lading (BL).
              </p>
              <p>
                At the confirmation of goods and documents at the destination
                port, Buyer releases the balance of 80% by DLC or otherwise
                according to contract.
              </p>
              <p>Once Seller confirms DLC, Buyer takes over consignment.</p>
              <p>
                SELLER provides 110% insurance in favor of the buyer for each
                shipment based on the CIF value (CIF only) and also sends the
                Buyer the vessel details.
              </p>
              <p>
                Next shipment will occur only after the full payment of the
                previous transaction has been confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
