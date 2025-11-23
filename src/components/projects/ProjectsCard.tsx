import Link from "next/link";
import Image from 'next/image';

type ProjectsCardProps = {
  appTitle: string;
  thesisTitle: string;
  groupName: string;
  members: string[];
  mentor: string;
  category: string[];
  poster: string;
  slug: string;
};

export default function ProjectsCard({
  appTitle,
  thesisTitle,
  groupName,
  members,
  mentor,
  category,
  poster,
  slug,
}: ProjectsCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block w-full max-w-[400px]">
      <div className="relative group cursor-pointer h-full">
        <div className="project-card-bg p-4 w-full h-full flex flex-col transition-all duration-300 ease-in-out">
          <div className="relative w-full aspect-[420/594] overflow-hidden rounded-[16px] select-none">
            <Image
              src={poster || "/projects/default_poster.jpg"}
              alt={`${appTitle} poster`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB..." // 👈 tiny blur placeholder
              quality={70}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px] border border-[#A2108D]"></div>

          {/* Text content */}
          <div className="flex flex-col flex-grow">
            <h3 className="neon-text-magenta-hover-fade text-2xl mb-2 mt-2 hover-fade">
              {appTitle}
            </h3>
            <p className="text-body-white-base group-hover:opacity-40 transition-all duration-300">
              {thesisTitle}
            </p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="project-card-overlay p-8 flex flex-col justify-start items-start text-left text-white">
          <div className="w-full">
            {/* App Name */}
            <p
              className="neon-text-pink text-2xl"
            >
              {appTitle}
            </p>

            {/* Thesis Title */}
            <p className="text-body-white-base mb-4">{thesisTitle}</p>

            {/* Members List */}
            <div className="mb-4">
              <h4 className="neon-text-pink text-xl"
                >Members</h4>
              <ul className="text-body-white">
                {members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>

            {/* Mentor */}
            <div className="mb-4">
              <h4 className="neon-text-pink text-xl"
                >Mentor</h4>
              <p className="text-body-white">{mentor}</p>
            </div>

            {/* Category List */}
            <div>
              <h4 className="neon-text-pink text-xl"
                >Topics</h4>
              {category.map((cat) => (
                <p key={cat} className="text-body-white">{cat}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}