'use client';

import ProjectCard from '@/components/project_card'
import ExperienceCard from '@/components/experience_card'
import IntroCard from "@/components/intro_card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {

  const handleScrollNext = () => {
    document.getElementById('about')!.scrollIntoView();
  }
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
      </style>
      
      
      <Header/>

      <main className='min-h-lvh mt-24 flex flex-col overflow-y-hidden'>
        <div className="flex flex-col items-center w-[100%]">
          <IntroCard />
          <button className="text-5xl mb-15 mt-5" onClick={handleScrollNext}>&darr;</button>
        </div>
        

        <div>
          <ExperienceCard/>
        </div>

        <div id='projects' className='min-h-96 p-5 mx-32'>
          
          <ProjectCard/>

        </div>
      </main>
      <Footer/>
    </div>
  );
}
