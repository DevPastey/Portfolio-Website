import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {

  return (
   <main className="bg-black-100 flex flex-col justify-center items-center w-full overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full pb-8">
      <FloatingNav navItems={navItems} className="" />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
    </div>
   </main>
  );
}
