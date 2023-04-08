import { Footer } from "./Footer"

export const Resume = () => {
  return (
    <div className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto flex-row mt-6 sm:mt-24">
      <div className="w-full">
        <ul className="space-y-3">
          <li>
          <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5">Experience</h2>
              <div className="w-full flex justify-between font-poppins font-normal mb-0.5 flex-wrap text-zinc-500">
                <h1 className="text-sm sm:text-md basis-5/6 flex-grow text-zinc-800 font-semibold">Lead Installer & Operations Manager at <span className='underline decoration-2 underline-offset-2'>Thunder Graphics Inc.</span></h1>
                <h2 className="font-poppins text-zinc-400 text-xs sm:text-sm">Sep 19 - Feb 22</h2>
              </div>
              <p className="w-full sm:w-2/3 font-poppins font-light text-sm sm:text-md text-zinc-800">Planned and implemented the transition from a paper-based work 
              order system to a cloud-based QuickBooks integrated system, which resulted in an overall uptick in workflow efficiency. 
              I also managed cross-functional teams to ensure that various projects were delivered in a timely manner, within budget, 
              and exceeding customer expectations on a monthly basis. Additionally, applying my expertise in lean manufacturing principles 
              to optimize the production process and create a new workflow for the company and its teams.</p>
          </li>
          <li>
              <div className="w-full flex justify-between font-poppins font-normal mb-0.5 flex-wrap">
                <h1 className="text-sm sm:text-md basis-5/6 flex-grow text-zinc-800 font-semibold">Manager at <span className='underline decoration-2 underline-offset-2'>Global Pet Foods Inc.</span></h1>
                <h2 className="font-poppins text-zinc-400 text-xs sm:text-sm">Jun 18 - Feb 21</h2>
              </div>
              <p className="w-full sm:w-2/3 font-poppins font-light text-sm sm:text-md text-zinc-800">Supervised a team of up to 13 members, leading them to meet 
              deadlines and exceed customer expectations. As well trained and mentored junior team members in daily operations and leadership, 
              maintaining and educating staff on product knowledge, and planned and organized short and long-term store and team goals.</p>
          </li>
          <li>
          <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5 mt-8">Education</h2>
            <div className="flex justify-between">
              <div className='font-poppins font-normal mb-1.5'>
                <h3 className="text-sm sm:text-md font-semibold">Business & Entrepenurship</h3>
                <h3 className="font-poppins font-light text-sm mb-2">Toronto Metropoliton University</h3>
                <p className="font-poppins text-zinc-400 text-xs sm:text-sm">2020 - 2022</p>
                <p> </p>
              </div>
              <div className='font-poppins font-normal mb-1.5'>
                <h3 className="text-sm sm:text-md font-semibold">Project Management</h3>
                <h3 className="font-poppins font-light text-sm mb-2">Toronto Metropoliton University</h3>
                <p className="font-poppins text-zinc-400 text-xs sm:text-sm">2022 - 2024</p>
              </div>
            </div>  
          </li>
          <li>
            <h2 className="font-poppins text-md font-normal text-purple-500 mb-0.5 mt-8">Skills</h2>
            <p className='font-poppins font-semibold text-sm sm:text-md'>Frameworks, Libraries & Lannguages</p>
            <p className='font-poppins font-light text-sm sm:text-md w-full sm:w-2/3'>HTML/CSS • Javscipt/Typescript • React JS • Redux • Express JS • Passport JS • TailwindCSS • Mongoose • MongoDB • Git • Postman</p>
          </li>
          <li>
          <p className='font-poppins font-semibold text-sm sm:text-md'>Soft Skills</p>
            <p className='font-poppins font-light text-sm sm:text-md w-full sm:w-2/3'>Collaboration • Problem Solving • Leadership • Time Management</p>
          </li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}
