import Image from "next/image";

type GroupHeroProps = {
  appTitle: string;
  groupName: string;
  logo?: string;
  groupPicture?: string[];
  soloPicture?: string[];
};

export default function GroupHero({
  appTitle,
  groupName,
  logo,
  groupPicture,
  soloPicture,
}: GroupHeroProps) {
  const bgImage =
    groupPicture && groupPicture.length > 0
      ? groupPicture[0]
      : "/projects/default_group_bg.jpg";

  return (
    <section className="relative flex flex-col w-full">
      <div
        className="
          relative flex flex-col items-center justify-center text-white overflow-hidden
          min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh]
        "
      >
        {/* 🔹 Background blur layer (soft edges) */}
        <div
          className="
            absolute inset-0 bg-center bg-cover blur-[35px] sm:blur-[40px] md:blur-[45px] 
            scale-[1.15] opacity-80
          "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 40%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* 🔹 Foreground (crisp image, fades to edges) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "70%",
            WebkitMaskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 90%)",
            maskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 90%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskSize: "cover",
          }}
        ></div>

        {/* 🔹 Smooth edge fade */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(15,0,25,0)_25%,#0F0019_100%)]"></div>

        {/* 🟡 Yellow Tone Layer */}
        <div className="absolute inset-0 bg-[#ffda17]/15 mix-blend-soft-light"></div>

        {/* 🟣 Pink/Purple overlays for depth */}
        <div className="absolute inset-0 bg-[#8B00FF]/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#FF37E3]/15 mix-blend-screen"></div>

        {/* 🔹 Alpha Texture Overlay (film grain / canvas) */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `
              url("/textures/alpha-texture.png"),
              radial-gradient(circle, rgba(0,0,0,0.9) 10%, transparent 11%)
            `,
            backgroundSize: "cover, 6px 6px",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* 🔹 Vignette and bottom fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.85)_100%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0019]/90 pointer-events-none"></div>
      </div>
    </section>
  );
}
