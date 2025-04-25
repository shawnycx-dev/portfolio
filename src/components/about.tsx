export default function About() {
  return (
    <section id="about-me" className="py-20 space-y-8">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-4xl font-bold">🌟 About Me</h2>
        <p className="text-xl font-light text-balance max-w-[80ch]">
          You&apos;ve made it this far! You have got to let me tell you a little more
          about myself and my journey.
        </p>
      </div>

      <div className="py-8 border-y-2 border-dashed">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 [&>p]:leading-relaxed list-decimal list [&>li]:ml-8 [&>li::marker]:text-yellow-400">
          <li className="[&>strong]:text-yellow-400">
            I am currently a software engineer at{" "}
            <a
              className="inline-block border-b-2 border-dashed hover:text-blue-500 hover:border-blue-500 transition-colors italic"
              href="http://bigcommerce.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              BigCommerce
            </a>
            , where I work on the developer documentation team. I am also a
            freelance web developer where I work with clients to bring their
            ideas to life. Development on the web is truly a passion of mine and
            I love every minute of it. I have been working on the front-end for
            over <strong>7 years</strong> now since my first job at{" "}
            <a
              className="inline-block border-b-2 border-dashed hover:text-red-400 hover:border-red-400 transition-colors italic"
              href="http://bigcommerce.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Texas Realtors
            </a>{" "}
            back in 2017.
          </li>
          <li>
            Today, I am a full-stack developer with experience in various
            front-end frameworks like React and NextJS. I have also worked with
            various back-end technologies like Node.js, Bun + Elysia + Drizzle
            ORM APIs, and PostgresSQL.
          </li>
          <li className="[&>strong]:text-yellow-400 col-span-full">
            A recent accomplishment of mine (as of May, 2024) is the successful
            optimization of a project that I was working on for a client which I
            was able to reduce the request load on the cache retrival system
            from over{" "}
            <strong>
              <i>15 Million requests</i>
            </strong>{" "}
            per day to just{" "}
            <strong>
              <i>under 30k requests per day</i>
            </strong>{" "}
            🎉. After thorough monitoring and analysis, I was able to identify
            the problem area and optimize the codebase to reduce the load on the
            system. <strong>Huge win!</strong>
          </li>
        </ol>
      </div>
    </section>
  );
}
