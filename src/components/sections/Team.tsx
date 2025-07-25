import Image from "next/image";

interface AboutCardProps {
  name: string;
  description: string;
  imgSrc: string;
  imagePosition: "left" | "right";
}

const AboutCard: React.FC<AboutCardProps> = ({
  name,
  description,
  imgSrc,
  imagePosition,
}) => (
  <div className="relative rounded-2xl border border-zinc-800 p-6 mb-8 bg-black/20 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
    <div
      className={`flex flex-col lg:flex-row gap-6 items-start ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-shrink-0">
        <Image
          alt={name}
          src={imgSrc}
          className="w-64 h-80 lg:w-80 lg:h-96 rounded-2xl object-cover object-top shadow-lg"
          loading="lazy"
          decoding="async"
          style={{
            imageRendering: "auto" as const,
            filter: "contrast(1.1) brightness(1.05)",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitFontSmoothing: "antialiased",
          }}
          width={320}
          height={480}
        />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-white text-2xl mb-4">{name}</h3>
        <p className="text-neutral-300 leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const Team = () => {
  const aboutData = [
    {
      name: "Armaan Sahi",
      description:
        "Armaan pursued his LLB degree at the University of Leicester, in England. During his time in Law School, Armaan was elected to become an executive member of the Canadian Law Society, demonstrating his leadership skills. Armaan graduated in 2020, and upon his return to Canada, he worked at a boutique Law firm in Mississauga, specializing in Real Estate. In 2023, Armaan joined RSG Law, as an Articling Student. Upon, the completion of his Articles, Armaan got called to the Bar in June of 2024. Upon his return, Armaan joined the Real Estate and Wills & Estates department. Armaan's expertise in Real Estate includes various transactions such as, purchases, sales, refinances, and leases. Armaan's expertise in Wills & Estates includes, drafting wills, setting up trusts, handling probate issues, and assisting his clients in various other estate litigation matters. Outside of the legal field, Armaan enjoys going to the gym, and spending time with loved ones. Armaan is also a member of the Toronto International Trap & Skeet Club, where you can find him shooting clays on the weekends.",
      imgSrc: "/Armaan.png",
      imagePosition: "left" as const,
    },
    {
      name: "Jitender Parmar",
      description:
        "Jitender Parmar is a licensed lawyer with a solid foundation in both academics and legal practice. He earned his undergraduate degree from the University of Toronto – St. George Campus and completed his law degree at the University of Leicester. He is currently pursuing his Master of Laws (LL.M.) at Osgoode Hall Law School, where he is in his second semester. In May 2023, Jitender finished his articling at Zinati Kay, a real estate law firm, where he worked on residential transactions including purchases, sales, and mortgage refinancing. His role involved reviewing contracts, conducting title searches, and liaising with banks and municipalities to support smooth closings. After being called to the Bar in June 2024, Jitender joined the Law Society of Ontario as Discipline Counsel in the Litigation Services Department. There, he gained courtroom and tribunal experience by preparing for and attending regulatory hearings, drafting legal documents, and representing the Law Society in cases involving the professional conduct of lawyers and paralegals. During his time in law school, Jitender served as Treasurer of the GeekLaw Society, a group dedicated to exploring how law intersects with information and communication technology.",
      imgSrc: "/Jitender.png",
      imagePosition: "right" as const,
    },
  ];

  return (
    <div id="about" className="py-20">
      <hr className="border-zinc-800 mb-16" />
      <div className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl mb-16">
        <h2 className="text-neutral-300 leading-snug tracking-wide">
          About Us
        </h2>
      </div>
      <div className="max-w-6xl mx-auto w-full px-4">
        {aboutData.map((person, i) => (
          <AboutCard key={i} {...person} />
        ))}
      </div>
    </div>
  );
};
