// components
import AppBar from "@/components/AppBar";

const ContactPage = () => {
  return (
    <>
      <AppBar staticBar />
      <div className="flex flex-col gap-y-4 bg-shop-bg bg-shop-bg-texture px-8 pb-16 text-justify text-sm font-light leading-6 text-shop-text">
        <h1 className="mb-4 mt-24 text-center text-4xl font-bold">
          Contact Gondos
        </h1>
        <p>
          Contact Gondos If you have any queries or if we can be of any further
          assistance please do not hesitate to contact us by any means
          preferable to you.
        </p>
        <p>
          Please fill out the form below or contact us by{" "}
          <a href="mailto:mail@gondosshoes.com" className="font-bold underline">
            mail@gondosshoes.com
          </a>
          . We will do our best to help you with your inquiries.
        </p>
        <MailForm />
      </div>
    </>
  );
};

function MailForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("mail sent");
  };

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="px-2 text-sm font-bold">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            className="rounded p-2 shadow-inner"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="px-2 text-sm font-bold">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
            className="rounded p-2 shadow-inner"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="px-2 text-sm font-bold">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Your subject"
            required
            className="rounded p-2 shadow-inner"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="px-2 text-sm font-bold">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            required
            className="rounded p-2 shadow-inner"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-slate-800 px-8 py-3 text-white shadow"
          >
            <span className="text-sm font-bold tracking-wider">Submit</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactPage;
