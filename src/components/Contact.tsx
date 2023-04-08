
export const Contact = () => {
  return (
    <div className="w-10/12 md:w-3/4 lg:w-3/6 mx-auto flex-row mt-6 sm:mt-24">
      <h2 className="font-poppins text-md font-normal text-purple-500 mb-9">Contact Info</h2>
      <div className="flex justify-between">
        <ul className="font-poppins font-light space-y-4">
          <li><a href="https://www.linkedin.com/in/justinmartin3501" className="font-poppins font-light text-lg hover:underline decoration-2 underline-offset-4">LinkedIn</a></li>
          <li><a href="https://twitter.com/justinm3501" className="font-poppins font-light text-lg hover:underline decoration-2 underline-offset-4">Twitter</a></li>
          <li><a href="https://github.com/justinm35" className="font-poppins font-light text-lg hover:underline decoration-2 underline-offset-4">Github</a></li>
        </ul>
        <ul className="font-poppins font-light space-y-4 text-right">
          <li><a href="tel:+16475337816" target="_blank" className="font-poppins font-light text-lg hover:underline decoration-2 underline-offset-4">+1 647-533-7816</a></li>
          <li><a href="mailto:justin.martin3501@gmail.com" target="_blank" className="font-poppins font-light text-lg hover:underline decoration-2 underline-offset-4">justin.martin3501@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
  }
