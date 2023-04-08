import { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex w-full flex-col items-center justify-start gap-y-4 bg-shop-bg p-16 text-shop-text">
      <h3 className="text-2xl font-bold">Subscribe</h3>
      <span className="text-center text-sm font-light">
        Sign up with your email address to receive news, updates and deals.
      </span>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center justify-center gap-y-2"
      >
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
          className="w-full rounded p-2 shadow-inner"
        />

        <button
          type="submit"
          className="flex w-full justify-center rounded bg-slate-800 px-8 py-3 text-white shadow"
        >
          <span className="text-sm font-bold tracking-wider">Sign up</span>
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
