import type { Metadata } from "next";
import Image from "next/image";

import Anchor from "@/components/link";
import { cn } from "@/utils/cn";

import resumeData from "./(lib)/resume.json";
import { getResumeFile } from "@/dal/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "My resume",
};

export default async function Page() {
  const resumeFile = await getResumeFile();

  const resumeDownloadUrl =
    resumeFile?.file && typeof resumeFile?.file !== "number"
      ? `${process.env.NEXT_PUBLIC_HOSTNAME!}${resumeFile.file.url!}`
      : resumeData.info.resume_download_url;

  return (
    <section className="relative flex flex-col-reverse md:flex-row py-8 overflow-visible">
      <div className="space-y-10 max-w-[80ch]">
        <div className="flex items-center gap-8">
          <div className="w-28 h-28 overflow-clip">
            <Image
              className="object-cover rounded-full"
              src="/images/avatar.jpg"
              alt="Avatar"
              width={112}
              height={112}
              priority={true}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xl">{resumeData.info.email}</p>
            {resumeFile?.file && typeof resumeFile?.file !== "number" && (
              <Anchor
                className="inline-block border-2 border-dashed border-green-400 tracking-wide px-6 py-2"
                href={resumeDownloadUrl}
                download={true}
                title={resumeFile.title || "Resume"}
              >
                Download resume
              </Anchor>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <h1 id="top" className="text-xl text-green-400">
            Resume
          </h1>

          <div className="space-y-8">
            <h2
              id="summary"
              className="text-4xl md:text-5xl font-bold text-balance text-gray-200 inline-block"
            >
              Summary
            </h2>
            <p
              className={cn(
                "font-montserrat",
                "text-gray-200 text-base md:text-lg text-pretty"
              )}
            >
              {resumeData.summary}
            </p>
          </div>
        </div>

        {/* Experiences */}
        <div className="space-y-8">
          <h2
            id="experiences"
            className="text-4xl md:text-5xl font-bold text-balance text-gray-200 inline-block"
          >
            Experiences
          </h2>
          {resumeData.experiences.map((data) => (
            <div className="space-y-4 pb-8" key={data.company_name}>
              <div className="flex flex-col gap-2 space-y-2">
                <h3
                  id={data.company_name}
                  className="inline-block text-xl md:text-2xl font-bold text-balance"
                >
                  <Anchor
                    href={data.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.company_name}, {data.location}
                  </Anchor>
                </h3>

                <p className="text-base md:text-lg font-light">
                  {data.role}
                  <span className="block md:inline text-gray-300">
                    <span className="hidden md:inline"> | </span>
                    {data.start_date} - {data?.end_date || "Present"}
                  </span>
                </p>
              </div>
              <ul
                className={cn(
                  "font-montserrat",
                  "text-gray-200 list-disc list-outside pl-5 space-y-1 [&>li]:text-pretty tracking-wide"
                )}
              >
                {data.responsibilities.map((responsibility, index) => (
                  <li key={`responsibility-item-${index}`}>
                    <p
                      className="[&>strong]:text-green-500"
                      dangerouslySetInnerHTML={{ __html: responsibility }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <h2
            id="skills"
            className="inline-block text-4xl md:text-5xl font-bold text-balance text-gray-200"
          >
            Skills
          </h2>
          <ul className="font-montserrat text-gray-300 list-disc list-outside pl-5 space-y-1 [&>li]:text-pretty tracking-wide">
            {resumeData.skills.map((skill, index) => (
              <li key={`skill-${index}_${skill}-`}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <h2
            id="educations"
            className="inline-block text-4xl md:text-5xl font-bold text-balance text-gray-200"
          >
            Education
          </h2>
          <div>
            {resumeData.educations.map((edu) => (
              <div
                key={edu.school}
                className="space-y-4 divide-y-2 divide-dashed"
              >
                <div className="flex justify-between">
                  <h3 className="text-lg md:text-2xl font-bold text-balance">
                    {edu.school}, {edu.location}
                  </h3>
                  <p className="text-lg md:text-2xl font-bold self-end md:self-start">
                    {edu.graduation_year}
                  </p>
                </div>
                <p className="pt-4 text-base md:text-lg font-light">
                  {edu.degree} in {edu.major}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="pb-20 md:ml-auto space-y-4">
        <div className="sticky top-10 space-y-2">
          <p>On this page:</p>
          <ul className="space-y-2 border-2 border-green-400 border-dashed p-4">
            {Object.keys(resumeData).map(
              (key) =>
                !["info"].includes(key) && (
                  <li key={key}>
                    <Anchor href={`#${key}`} className="text-xl capitalize">
                      {key}
                    </Anchor>
                    {key === "experiences" && (
                      <ul className="ml-4 list-inside list-disc space-y-2 py-2">
                        {resumeData[key].map((exp) => (
                          <li key={exp.company_name}>
                            <Anchor
                              href={`#${exp.company_name}`}
                              className="text-lg"
                            >
                              {exp.company_name}
                            </Anchor>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
            )}
          </ul>

          <div className="hidden md:block py-2 space-y-2 [&>a]:block">
            {resumeFile?.file && typeof resumeFile?.file !== "number" && (
              <Anchor
                className="animate-pulse hover:animate-none text-green-400"
                href={resumeDownloadUrl}
                download={true}
                title={resumeFile.title || "Resume"}
              >
                Download Resume
              </Anchor>
            )}
            <Anchor href="#top" className="block text-sm">
              Back to top
            </Anchor>
          </div>
        </div>
      </div>
    </section>
  );
}
