// components
import AppBar from "@/components/AppBar";

const PrivacyPage = () => {
  return (
    <>
      <AppBar staticBar />
      <div className="flex flex-col gap-y-4 bg-shop-bg bg-shop-bg-texture px-8 pb-16 text-justify text-sm font-light leading-6 text-shop-text">
        <h1 className="mb-4 mt-24 text-center text-4xl font-bold">
          Privacy policy
        </h1>
        <div>
          <h3 className="pb-0 font-bold">Personal information</h3>
          <p>
            At Gondos we are dedicated to create a safe and enjoyable shopping
            experience for you. In this text we want to inform you about our
            website procedures; what we do, how we do it and how it affects you.
            When shopping at www.klercker.com we may collect personal
            information you provide us when making a purchase as well as data
            collected by cookies.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">What information do we collect?</h3>
          <p>
            We collect information you provide us with when creating an account,
            signing up for our newsletter or when making a purchase. This
            information could be your name, address, contact information etc.
            The cookies may collect session information such as pages viewed,
            session duration, transactions made and demographics such as origin,
            gender and age.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">What are cookies?</h3>
          <p>
            Cookies are very small text files that are stored on your device’s
            hard drive when you visit websites. We use first-party cookies and
            third-party cookies for the main purposes of; web functionality, web
            statistics and advertising.
          </p>
        </div>

        <div>
          <h3 className="pb-0 font-bold">Why do we use cookies?</h3>
          <p>
            Some cookies are vital in order for the website to function
            properly. The cookies keep track of your settings and make your
            shopping experience more convenient by e.g. recognizing your device
            and remembering your preferences and settings. Cookies are also used
            to collect usage data such as duration of session, pages viewed, if
            a transaction was made or demographic data such as origin, gender
            and age. This information is used for analytical purposes and
            enables us to create the best shopping experience for you. The
            cookies we use do not collect any information that can be used to
            track or identify individuals.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">What information do we collect?</h3>
          <p>
            We collect information you provide us with when creating an account,
            signing up for our newsletter or when making a purchase. This
            information could be your name, address, contact information etc.
            The cookies may collect session information such as pages viewed,
            session duration, transactions made and demographics such as origin,
            gender and age. Payment details are collected by our partners Stripe
            & PayPal. These details will be stored in accounting purposes for at
            least 7 years.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Third-parties</h3>
          <p>
            The information we collect may be shared with our close partners for
            analytical purposes. No personal information will be passed forward,
            traded or published beyond our organization and our trusted
            partners.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Disclosures of your information</h3>
          <p>
            You have the right to request access to your data and if anything is
            incorrect you can change or remove it. You can disable any already
            stored cookies on your computer by changing your browser settings
            for cookies, you can also use opt-out programs such as “NAI’s
            Consumer opt-out” or “Google Analytics opt-out browser add-on” in
            order to prevent cookies from being used, please keep in mind that
            these settings may stop our website from functioning properly.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Updates</h3>
          <p>
            Our Privacy Policy may change from time to time, all updates will be
            posted on this page. The text was last updated 2018-05-28.
          </p>
        </div>
        <div>
          <h3 className="pb-0 font-bold">Questions</h3>
          <p>
            If you have any questions about how we handle your personal data, do
            not hesitate to contact us at{" "}
            <a
              href="mailto:mail@gondosshoes.com"
              className="font-bold underline"
            >
              mail@gondosshoes.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
