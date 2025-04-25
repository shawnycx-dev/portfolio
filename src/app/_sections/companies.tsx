import { BigcommerceLogo } from "@/components/logos/bigcommerce";

export default function CompaniesSection() {
  return (
    <section className="bg-gray-900/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-10">
      <p className="text-sm font-bold tracking-wider uppercase text-muted text-center">
        {`Companies I've worked at`}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-8">
        <a
          className="inline-block relative w-36 h-auto"
          href="https://www.m800.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-auto w-full px-8"
            src="/images/logos/M800-logo.png"
            alt="M800 Logo"
          />
        </a>
        <a
          className="inline-block relative"
          href="https://www.bigcommerce.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BigcommerceLogo className="w-36 text-muted h-auto group-hover:scale-105 group-hover:text-white transition-[color,scale]" />
        </a>
        <a
          className="inline-block relative w-36 h-auto"
          href="https://www.texasrealestate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-auto w-full"
            src="/images/logos/texas-realtors-logo.png"
            alt="Texas Realtors Logo"
          />
        </a>
      </div>
    </section>
  );
}
