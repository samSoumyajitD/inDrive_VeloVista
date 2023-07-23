import { Link } from "react-router-dom";

const Select = () => {
    return (
        <div className="z-[0]">
            <h1 className="pt-20 pb-10 text-5xl font-bold text-center text-white tracking-2">
                Where do you want to travel
            </h1>
            <div className="flex items-center justify-center pt-7 ">
                <div className="grid grid-cols-2 gap-10 pd-auto md:grid-cols-2 lg:grid-cols-2">
                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] --tw-scale-x:5  relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72 ">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 rounded-lg z-[-1] group-hover:rotate-3 group-hover:scale-125"
                                src="https://www.centreforcities.org/wp-content/uploads/2019/05/Tram_Nottingham_x1650-1630x684.jpg"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Intra-City
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Please arrange a splendid journey to reach our
                                desired destination within the enchanting
                                confines of our beloved city.
                            </p>

                            <Link to="/intrabook">
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Book a Ride{" "}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  --tw-scale-x:5 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 z-[-1] rounded-lg group-hover:rotate-3 group-hover:scale-125"
                                src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Inter-City
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Effortlessly reach our desired city. We will
                                make sure that you have a comfortable and safe
                                journey.
                            </p>
                            <Link to="/intercity">
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Book a Ride
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;
