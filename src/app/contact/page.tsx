export default function Page() {
  return (
    <div className="py-20 space-y-4">
      <div className="space-y-2">
        <h2 className="text-4xl text-balance font-bold">Let&apos;s get in touch!</h2>
        <p className="max-w-[80ch] font-montserrat font-light tracking-wide">
          Whether you have a question about my work, want to collaborate, or
          just want to say hi, I&apos;d love to hear from you! Fill out the form
          below and I&apos;ll try my very best to get back to you within 3 business
          days
        </p>
      </div>

      <div className="flex flex-row">
        <form className="basis-1/2">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                className="border-2 border-dashed border-yellow-400/70 focus:border-yellow-400 focus:border-solid focus:outline-0 p-2 bg-gray-950"
                placeholder="Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className="border-2 border-dashed border-yellow-400/70 focus:border-yellow-400 focus:border-solid focus:outline-0 p-2 bg-gray-950"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                className="border-2 border-dashed border-yellow-400/70 focus:border-yellow-400 focus:border-solid focus:outline-0 p-2 bg-gray-950"
                placeholder="Message"
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
