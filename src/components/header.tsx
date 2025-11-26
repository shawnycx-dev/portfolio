import Logo from "./logo";
import NavLink from "./nav-link";

const slugs = [
  ["home", "/"],
  ["projects", "/#projects"],
  ["about me", "/#about-me"],
  ["contact me", "/contact"],
  ["resume", "/resume"],
];

export default function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-6">
        <div className="space-y-4">
          <Logo />
          <p className="text-base md:text-xl">A developer based in Austin, TX</p>
        </div>
        <nav className="py-6 pr-6 border-y-2 border-dashed">
          <ul className="flex flex-wrap md:grid md:grid-cols-3 gap-x-8 gap-y-4">
            {slugs.map(([label, slug]) => (
              <li key={slug} className="text-nowrap">
                <NavLink href={slug}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
