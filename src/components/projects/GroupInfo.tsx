import Image from "next/image";
import InfoPill from "@/components/projects/InfoPill";

type ProjectInfoProps = {
  poster: string;
  thesisTitle: string;
  details: {
    thesisDescription: string;
    groupMembers: string[];
    mentor: string;
    category: string[];
    videoLink?: string;
    groupName: string;
    photoshoot: string[];
  };
};

export default function ProjectInfo({
  thesisTitle,
  poster,
  details,
}: ProjectInfoProps) {
  return (
    <section className="relative w-full mx-auto px-4 lg:px-6 -mt-[5vh] sm:-mt-[8vh] md:-mt-[10vh]">
      <div className="flex flex-col lg:flex-row gap-8 lg:justify-center items-center lg:items-start">
        {/* LEFT COLUMN — Poster */}
        <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[650px] aspect-[542/768] mt-8 sm:mt-20 md:mt-0 flex justify-center">
          <ResponsiveImage
            src={
              poster && poster.length > 0
                ? poster
                : "/projects/default_poster.jpg"
            }
            alt={`${thesisTitle} Poster`}
            width={542}
            height={768}
            className="rounded-[20px] object-cover w-full h-auto shadow-lg border border-white/20"
            priority
          />
        </div>

        {/* RIGHT COLUMN — Details */}
        <div className="w-full lg:w-[750px] flex flex-col gap-6 relative mt-8 lg:mt-0 px-2 sm:px-6">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-avolta mb-3 text-center lg:text-left">
            {thesisTitle}
          </h3>

          {/* Description */}
          <div className="relative flex-1 flex items-center justify-center">
            <p
              className="text-sm sm:text-base font-mono text-white leading-relaxed text-opacity-90 tracking-wide text-center lg:text-left"
              style={{
                lineHeight: "2",
                letterSpacing: "0.02em",
                textShadow: "0 0 6px rgba(255, 255, 255, 0.15)",
              }}
            >
              {details.thesisDescription}
            </p>
          </div>

          {/* Details Box */}
          <div className="rounded-[20px] p-6 sm:p-8 flex flex-col gap-10 border-2 border-[#f8f8f8]/60 justify-center">
            {/* Members */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-xl sm:text-2xl font-avolta neon-text-pink mb-4">
                Group Members
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {details.groupMembers.map((member, index) => (
                  <InfoPill key={index} text={member} size="md" />
                ))}
              </div>
            </div>

            {/* Mentor */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg sm:text-xl font-avolta neon-text-pink mb-4">
                Mentor
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <InfoPill text={details.mentor} size="sm" />
              </div>
            </div>

            {/* Topics */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg sm:text-xl font-avolta neon-text-pink mb-4">
                Topics
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {details.category.map((cat, index) => (
                  <InfoPill key={index} text={cat} size="sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
