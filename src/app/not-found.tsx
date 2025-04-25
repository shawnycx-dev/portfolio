import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center h-[calc(100vh-30rem)] ">
      <div className="max-w-xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-balance text-yellow-400/90 text-center">🧭404 - Lost in the Unknown</h1>

          <p className="text-lg text-muted text-center">
            Looks like you've wandered off the map, this page is uncharted territory!
            Here's a map to help you find your way back:
          </p>
        </div>

        <ul className="border-2 border-dashed border-yellow-400/90 rounded-md p-4 flex flex-col md:flex-row gap-4 justify-between">
          <li className="text-center">
            <Link className="text-lg hover:text-yellow-300 transition-colors" href="/">Home</Link>
          </li>
          <li className="text-center">
            <Link className="text-lg hover:text-yellow-300 transition-colors" href="/projects">Projects</Link>
          </li>
          <li className="text-center">
            <Link className="text-lg hover:text-yellow-300 transition-colors" href="/about">About</Link>
          </li>
          <li className="text-center">
            <Link className="text-lg hover:text-yellow-300 transition-colors" href="/contact">Contact</Link>
          </li>
          <li className="text-center">
            <Link className="text-lg hover:text-green-400 transition-colors" href="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
