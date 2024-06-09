import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer>
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
    </footer>
  );
}
