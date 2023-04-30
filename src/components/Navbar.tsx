import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto">
      <ul className="flex space-x-5 text-zinc-700 text-xl pt-6 items-start md:items-center">
          <li className="mr-auto text-2xl font-poppins font-light text-zinc-700" ><NavLink to="/">JUSTIN MARTIN</NavLink></li>
        <div className="flex flex-col md:flex-row text-right space-y-1 md:space-y-0">
        <NavLink to="/" className={({isActive})=>(isActive  ? "text-purple-500" : '')}>
          <li className="hover:text-purple-500 hover:underline cursor-pointer px-3 font-poppins font-extralight  text-base decoration-4 underline-offset-8">
            home
          </li>
        </NavLink>
        <NavLink to="/projects" className={({isActive})=>(isActive  ? "text-purple-500" : '')}>
          <li className="hover:text-purple-500 hover:underline cursor-pointer px-3 font-poppins font-extralight text-base decoration-4 underline-offset-8">
            projects
          </li>
        </NavLink>
        <NavLink to="/experience" className={({isActive})=>(isActive  ? "text-purple-500" : '')}>
          <li className="hover:text-purple-500 hover:underline cursor-pointer px-3 font-poppins font-extralight text-base decoration-4 underline-offset-8">
            experience
          </li>
        </NavLink>
        <NavLink to="/contact" className={({isActive})=>(isActive  ? "text-purple-500" : '')}>  
          <li className="hover:text-purple-500 hover:underline cursor-pointer px-3 font-poppins font-extralight text-base decoration-4 underline-offset-8">
            contact
          </li>
        </NavLink>
        </div>
      </ul>
    </div>
  )
}
