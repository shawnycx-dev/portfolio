import About from "@/components/about";
import Anchor from "@/components/link";
import ProjectsList from "@/components/projects";
import { Circle, Square } from "@/components/shapes/shape-factory";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <Circle
          radius={32}
          className="absolute top-16 -left-6 opacity-10 border-green-400 select-none z-0"
          innerClassName="bg-green-400"
        />
        <Square
          size={48}
          className="absolute bottom-16 -right-6 opacity-5 border-yellow-400 select-none z-0 rotate-45"
          innerClassName="bg-yellow-400/80"
        />
        <Square
          size={48}
          className="absolute bottom-0 right-12 opacity-10 border-yellow-400 select-none z-0 rotate-12"
          innerClassName="bg-yellow-400/85"
        />
        <Square
          size={52}
          className="absolute -bottom-12 -right-4 opacity-15 border-yellow-400 select-none z-0 rotate-12"
          innerClassName="bg-yellow-400/90"
        />
        <Square
          size={60}
          className="absolute -bottom-32 right-8 opacity-20 border-yellow-400 select-none z-0 rotate-6"
          innerClassName="bg-yellow-400/95"
        />
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col gap-10 basis-1/2 text-center lg:text-left">
            <h1 className="text-5xl text-balance leading-tight font-bold">
              Software Engineer + Freelancer
            </h1>
            <p className="text-xl leading-relaxed font-light text-pretty">
              Welcome, my name is Shawn Yap and I am a software engineer @{" "}
              <Anchor
                className="inline-block border-b-2 border-dashed hover:text-blue-500 hover:border-blue-500 italic"
                href="http://bigcommerce.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                BigCommerce
              </Anchor>{" "}
              by day and a freelance web developer by night.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Anchor
                href="/contact"
                className="border-2 border-dashed border-yellow-400 text-lg font-bold px-6 py-3"
              >
                Let&apos;s get in touch!
              </Anchor>
              <Anchor href="/projects" className="text-lg font-bold px-6 py-3">
                Check out my work
              </Anchor>
            </div>
            <div className="mt-4 space-x-6 text-gray-300">
              <Anchor
                href="https://linkedin.com/in/shawnycx"
                className="text-base py-3 hover:text-yellow-400/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Anchor>
              <Anchor
                href="/contact"
                className="text-base py-3 hover:text-yellow-400/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Anchor>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="p-1 border-2 border-dashed rounded-full max-w-[400px]">
              <Image
                className="rounded-full object-cover"
                src="/images/avatar.jpg"
                width={800}
                height={800}
                alt="A picture of my in black & white"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsList />

      {/* About Me */}
      <About />
    </>
  );
}
