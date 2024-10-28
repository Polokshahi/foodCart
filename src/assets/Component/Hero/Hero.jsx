
const Hero = () => {
    return (
        <div>
            <div className="mt-20">
               <div className=" py-20 h-[350px] rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500">
                 <div>
                  <h1 className='text-center text-4xl italic'>Discover an exceptional cooking class tailored for you!</h1>
                  <p className='text-center text-[18px] mt-3'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to <br /> become an exceptionally well world-class Programmer.</p>
                 </div>

                 <div className='flex justify-center items-center mt-4 gap-5'>
                  <button className='btn bg-green-400 text-white'>Explore Now</button>
                  <button className='btn bg-transparent'>Our Feedback</button>
                 </div>
                
               </div>
            </div>

            <div className="mt-[20px]">
              <h1 className="text-center underline mb-4 text-3xl">Our Recipes</h1>
              <p className="text-center ">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            
   </div>
)};

export default Hero;