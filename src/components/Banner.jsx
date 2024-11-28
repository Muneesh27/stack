const Banner = () => {
    return (
       <section className="relative">
          {/* Vertical Lines */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-300"></div>
          <div className="absolute right-0 top-0 h-full w-px bg-gray-300"></div>
 
          {/* Content */}
          <div className="flex justify-center items-center h-64 bg-gradient-to-b from-gray-100 to-white">
             <h1 className="text-4xl font-bold text-gray-800">
                Effortless Staking for{" "}
                <span className="text-blue-500">Maximum Rewards</span>
             </h1>
          </div>
       </section>
    );
 };
 
 export default Banner;
 