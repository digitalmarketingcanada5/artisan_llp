import { ServiceCardIcon } from "../icons";

interface ServiceCardProps {
  iconType: "contact" | "building" | "plane" | "columns" | "trees";
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconType,
  title,
  description,
}) => (
  <div className="relative h-full rounded-2xl border border-zinc-800 p-3 bg-black/20 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:bg-black/30 group cursor-default">
    <div className="relative flex h-full flex-col gap-3 overflow-hidden rounded-xl p-4">
      <div className="flex flex-col gap-2">
        <div className="mb-1">
          <ServiceCardIcon type={iconType} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <p className="text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-300 group-hover:text-neutral-200 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Services = () => (
  <div id="services" className="py-20">
    <hr className="mb-20 border-zinc-800" />
    <h1 className="tracking-widest text-6xl text-center text-slate-200 font-medium mt-12 mb-12 w-full">
      Our Services
    </h1>
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <li className="min-h-[14rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]">
        <ServiceCard
          iconType="contact"
          title="Residential Real Estate"
          description="Purchases, sales, refinances, and residential property transactions"
        />
      </li>
      <li className="min-h-[14rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
        <ServiceCard
          iconType="building"
          title="Civil Litigation"
          description="Estate litigation, contract disputes, and comprehensive civil law matters"
        />
      </li>
      <li className="min-h-[14rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]">
        <ServiceCard
          iconType="plane"
          title="Wills & Estates"
          description="Drafting wills, setting up trusts, probate issues, and estate planning"
        />
      </li>
      <li className="min-h-[14rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]">
        <ServiceCard
          iconType="columns"
          title="Commercial Real Estate"
          description="Commercial property transactions and corporate real estate matters"
        />
      </li>
      <li className="min-h-[14rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]">
        <ServiceCard
          iconType="trees"
          title="Corporate & Business Law"
          description="Business incorporation, commercial matters, and notary services"
        />
      </li>
    </ul>
    <div className="md:mb-32"></div>
  </div>
);
