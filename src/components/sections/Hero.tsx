import { Header } from './Header';
import { CalendarIcon, ChevronDown } from '../icons';

export const Hero = () => (
  <div id="home" className="w-full">
    <div className="flex flex-col">
      <section className="flex flex-col bg-no-repeat">
        <Header />
        <div className="pb-[-30px] pt-44">
          <div className="h-screen w-full dark:bg-black-100 bg-transparent absolute top-0 left-0 flex items-center justify-center"></div>
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className=" tracking-wider uppercase text-2xl text-center text-slate-200 font-medium max-w-83">
                Artisan Law LLP
              </p>
              <h1 className="text-center -tracking-wide text-white md:text-6xl xl:text-7xl text-2xl mt-9 mb-9 font-bold">
                Greater Toronto Area&apos;s Most Trusted Legal Partners
              </h1>
              <p className="text-center md:tracking-wider text-slate-200 font-normal mb-4 md:text-lg lg:text-2xl">
                Personalized, practical, and results-driven legal solutions.
              </p>
              <a href="#touch" className="bg-slate-900 relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-sm p-[1px] focus:outline-none">
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-none px-7 text-sm font-medium text-neutral-200 backdrop-blur-3xl gap-2 hover:bg-slate-800 transition-colors">
                  SCHEDULE <CalendarIcon />
                </span>
              </a>
              <div className="mt-[150px]">
                <a className="flex items-center gap-2" href="#services">
                  <ChevronDown />
                </a>
                <a className="flex items-center gap-2" href="#services">
                  <ChevronDown />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);