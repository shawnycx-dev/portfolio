import Image from "next/image";

import { BigcommerceLogo } from "@/components/logos/bigcommerce";

import M800Logo from "@/public/images/logos/M800-logo.png";
import TexasRealEstateLogo from "@/public/images/logos/texas-realtors-logo.png";

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
          aria-label="Visit M800's Website (opens in new tab)"
        >
          <Image
            src={M800Logo}
            alt="M800 Company Logo"
            width={144}
            height={144}
            className="h-auto w-full px-8"
          />
        </a>
        <a
          className="inline-block relative"
          href="https://www.bigcommerce.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit BigCommerce's Website (opens in new tab)"
        >
          <BigcommerceLogo
            className="w-36 h-auto text-white"
            aria-label="BigCommerce Logo"
            role="img"
          />
        </a>
        <a
          className="inline-block relative w-36 h-auto"
          href="https://www.texasrealestate.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Texas Realtors' Website (opens in new tab)"
        >
          <Image
            src={TexasRealEstateLogo}
            alt="Texas Realtors Logo"
            width={144}
            height={144}
            className="h-auto w-full"
          />
        </a>
      </div>
    </section>
  );
}
