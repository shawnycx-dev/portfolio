import { siteConfig } from "@/site.config";
import LinkedinIcon from "./icons/linkedin";
import Anchor from "./link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href={siteConfig.socials.linkedin}
            className="hover:text-yellow-400 transition-colors"
          >
            {siteConfig.author}
          </a>
        </p>
        <div className="inline-flex flex-row gap-4">
          <Anchor href="https://linkedin.com/in/shawnycx"
            className="text-base py-3 hover:text-yellow-400/80 inline-flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="Shawn Yap's LinkedIn profile">
            <LinkedinIcon className="w-6 h-6" />
          </Anchor>
        </div>
      </div>
    </footer>
  );
}
