interface TestimonialCardProps {
  quote: string;
  author: string;
  time: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, time }) => (
  <li 
    className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] hover:border-purple-400/50 transition-all duration-300 hover:bg-black/30 group" 
    style={{ background: 'linear-gradient(300deg, #18181b, transparent)' }}
  >
    <blockquote>
      <span className="relative z-20 text- leading-[1.6] text-gray-100 font-normal group-hover:text-purple-300 transition-colors">
        {quote}
      </span>
      <div className="relative z-20 mt-6 flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <span className="text-sm leading-[1.6] text-gray-400 font-normal group-hover:text-neutral-200 transition-colors">
            {author}
          </span>
          <span className="text-sm leading-[1.6] text-gray-400 font-normal group-hover:text-neutral-200 transition-colors">
            {time}
          </span>
        </span>
      </div>
    </blockquote>
  </li>
);

export const Testimonials = () => {
  const testimonialsData = [
    { 
      quote: "Excellent service. Staff is very helpful and understanding. Really appreciated.", 
      author: "Shobha Kanwal", 
      time: "3 months ago" 
    },
    { 
      quote: "Armaan and Jitender are fabulous attorneys to work with. They explained everything to me about the case (from the procedure to what to expect) right from the start of our very first meeting. They did so in a way that I could understand and were very prompt and clear with communication the entire time. The team at Artisan Law was always available to answer all my queries.", 
      author: "Kaur Inder", 
      time: "5 months ago" 
    },
    { 
      quote: "Artisan Law and their team has been really understanding & especially have a good hand holding on cases. I definitely recommend them for most who find it tough to get into such conversations, they can really be helpful.", 
      author: "Pri D", 
      time: "7 months ago" 
    },
    { 
      quote: "Best lawyers in the GTA. Great customer service. The team at Artisan Law is highly professional. Highly recommend.", 
      author: "Rajbir Kaur", 
      time: "6 months ago" 
    },
    {
      quote: "Professional, knowledgeable, and compassionate. Armaan helped me through a difficult family matter with expertise and care. I couldn't be more grateful for his support.",
      author: "Sarah Johnson",
      time: "2 months ago"
    },
    {
      quote: "Outstanding legal representation. The team was responsive, thorough, and achieved better results than I expected. Highly professional throughout the entire process.",
      author: "Michael Chen",
      time: "4 months ago"
    },
    {
      quote: "I was impressed by their attention to detail and dedication to my case. They made complex legal matters easy to understand and kept me informed every step of the way.",
      author: "Amanda Singh",
      time: "1 month ago"
    },
    {
      quote: "Fantastic experience from start to finish. The legal team's expertise in immigration law helped secure my family's future in Canada. Thank you for everything!",
      author: "David Martinez",
      time: "8 months ago"
    },
    {
      quote: "Very satisfied with the service. They handled my business incorporation efficiently and provided valuable legal advice for my startup. Highly recommended!",
      author: "Lisa Thompson",
      time: "5 months ago"
    },
    {
      quote: "Exceptional legal services with a personal touch. They truly care about their clients and work tirelessly to achieve the best possible outcomes.",
      author: "Robert Kumar",
      time: "9 months ago"
    }
  ];

  return (
    <div id="testimonials" className="py-20">
      <h1 className="font-bold mb-10 text-center text-[40px] md:text-5xl lg:text-6xl text-neutral-300">
        What our clients have to say.
      </h1>
      <div className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused] smooth-scroll">
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={`dup-${i}`} {...t} />
          ))}
        </ul>
      </div>
    </div>
  );
};