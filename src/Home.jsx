import Nav from "./Nav";

const Home = () => {
    return ( 
        <div className="absolute top-0 left-0 z-20 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-xl h-full w-full text-white">
            <Nav />
            <div className="h-full w-full flex">z
                <div className="text-white w-[50vw] px-10 flex flex-col items-start justify-center">
                    <h1 className="lg:text-6xl font-bold uppercase">Explore, Keep track of, Manage, buy the latest coins here!</h1>
                    <p className="text-xl my-6 text-white/70">Be sure to always be well informed of the latest/most expensive/top trending coins out there.</p>
                    <button className="py-3 px-10 bg-red-500 text-white hover:bg-red-400">EXPLORE</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;