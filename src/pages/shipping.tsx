// components
import AppBar from "@/components/AppBar";

const ShippingPage = () => {
  return (
    <>
      <AppBar staticBar />
      <div className="flex flex-col gap-y-4 bg-shop-bg bg-shop-bg-texture px-8 pb-16 text-justify text-sm font-light leading-6 text-shop-text">
        <h1 className="mb-4 mt-24 text-center text-4xl font-bold">
          Shipping information
        </h1>
        <div>
          <h3 className="pb-0 font-bold">Delivery</h3>
          <p>
            Normal delivery time (if nothing else is stated) is 2-3 business
            days in Sweden, orders to Europe take 4-6 working days and the rest
            of the world 5-10 days. If a product is sold out, delivery time may
            be longer. In case of longer delay in delivery, you always have the
            right to cancel the purchase. If you wish to do so, please contact
            customer support. All deliveries are made by Postnord and you will
            receive an e-mail or an SMS-notice when the package is ready for
            pick up at your nearest collection point.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Confirmation</h3>
          <p>
            Once we receive your order we will send you a confirmation e-mail
            with information about your order. We would recommend you save the
            order confirmation in case of contact with customer service.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Shipping costs</h3>
          <p>
            Gondos pays for all delivery and return costs in Sweden. Shipping
            costs within Europe starts at 10 EUR depending on destination and
            order size. To the rest of the world, delivery cost starts at 25
            USD. Any customs duty is paid by the receiver. If a package is not
            picked up we charge a fee of 35 EUR/40 USD.
          </p>
        </div>

        <div>
          <h3 className="pb-0 font-bold">Payment Options</h3>
          <p>
            We offer payment through Stripe. When paying by credit card, payment
            is handled by our payment partners Stripe to ensure secure payments.
            There are no extra charges.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">
            Returns, exchanges and money-back guarantee
          </h3>
          <p>
            Our return policy is within 30 days from the goods having been sent.
            The only term is that the goods must be returned in its original
            condition ie that it has not used, cleaned or otherwise changed.
            Failure to comply with this return policy will mean any returns are
            only accepted at our discretion. Please be careful when you try the
            garments at home, some are particularly fragile and it is your
            responsibility that the product is returned in good condition. If
            you want to change or return an item, please contact our customer
            service via e-mail mail@gondosshoes.com for instructions on how to
            make your return. Please let us know as soon as possible (and within
            30 days) if you want to make a return or exchange. Once we have
            received and accepted your return, we will make a refund of the
            value of the returned product. Normally, we refund your purchase
            within 14 days. In individual cases it may take up to 30 days which
            is the maximum time according to consumer law. We will send you a
            notification email when the return is completed. However, it may
            take a few days before you see the transaction on your account. Any
            billing fee is not refundable.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Complaints</h3>
          <p>
            We guarantee that the goods you have ordered are as described on
            delivery. If however you receive a defective product, please contact
            customer services as soon as possible but no later than within 14
            days. Please return the product in the condition it was received
            detailing the damage or fault and you will get a new product within
            2-3 weeks. Please return the item along with payment confirmation.
            Please tell us the reason for the return. NOTE: Before you return
            wrongly supplied or damaged products you must contact customer
            service to get the return approved.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Transport damage</h3>
          <p>
            All products from Gondos are insured against theft and damage while
            the package is in transit between Gondos and your shipping address.
            It is therefore important that you promptly report any damage or
            lost goods to us at mail@gondosshoes.com. If the package is damaged
            or fractured, please immediately notify the carrier. Once you have
            signed for/received your package it will not be covered by our
            insurance.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShippingPage;
