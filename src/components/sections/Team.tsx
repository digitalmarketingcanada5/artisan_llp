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
      className={`flex flex-col lg:flex-row gap-6 items-center ${
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
        "Armaan is a founding lawyer at Artisan Law LLP, where he focuses on Residential Real Estate, Commercial Real Estate, Corporate Law, Commercial Law, and Wills & Estates. He earned his LLB from the University of Leicester in England, where he served as an executive member of the Canadian Law Society—demonstrating his leadership and early commitment to the legal profession. After graduating in 2020, he returned to Canada and began his legal career at a boutique law firm in Mississauga, where he was introduced to the fast-paced and detail-oriented world of real estate and business law.\n\nArmaan was called to the Ontario Bar in 2024, and shortly thereafter co-founded Artisan Law LLP with Jitender. Since launching the firm, Armaan has been actively building a diverse legal practice and is fully dedicated to serving his clients with care, clarity, and integrity. In both Residential and Commercial Real Estate matters, he works with clients on purchases, sales, refinances, leasing, title transfers, and new construction closings. Whether helping a family purchase their first home or assisting a business with a commercial lease, Armaan approaches each file with a solutions-focused mindset and a commitment to making the legal process smooth and stress-free.\n\nArmaan also advises clients on Corporate and Commercial Law matters, including business formation, contract drafting and review, corporate governance, and transactional support for small to mid-sized businesses. He enjoys helping entrepreneurs and business owners understand their legal obligations and make informed decisions that protect and grow their ventures.\n\nIn his Wills & Estates practice, Armaan assists individuals and families with drafting wills and powers of attorney, establishing trusts, managing probate applications, and resolving estate-related disputes. He understands the deeply personal nature of these matters and takes pride in offering clear, compassionate guidance every step of the way.\n\nOutside of the office, Armaan enjoys going to the gym, spending time with friends and family, and getting outdoors. On weekends, you'll often find him at the Toronto International Trap & Skeet Club, enjoying the focus and precision of shooting clays.",
      imgSrc: "/Armaan.png",
      imagePosition: "left" as const,
    },
    {
      name: "Jitender Parmar",
      description:
        "Jitender Parmar is a licensed lawyer with a solid foundation in both academics and legal practice. He earned his undergraduate degree from the University of Toronto – St. George Campus and completed his law degree at the University of Leicester. He is currently pursuing his Master of Laws (LL.M.) at Osgoode Hall Law School, where he is in his second semester. In May 2023, Jitender finished his articling at Zinati Kay, a real estate law firm, where he worked on residential transactions including purchases, sales, and mortgage refinancing. His role involved reviewing contracts, conducting title searches, and liaising with banks and municipalities to support smooth closings.\n\nAfter being called to the Bar in June 2024, Jitender joined the Law Society of Ontario as Discipline Counsel in the Litigation Services Department. There, he gained courtroom and tribunal experience by preparing for and attending regulatory hearings, drafting legal documents, and representing the Law Society in cases involving the professional conduct of lawyers and paralegals.\n\nIn his time outside the legal profession, Jitender enjoys staying active through playing sports, spending time with family and creating film photography.",
      imgSrc: "/Jitender.png",
      imagePosition: "right" as const,
    },
  ];

  return (
    <div id="about" className="pt-8 pb-20">
      <hr className="border-zinc-800 mb-12" />
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
