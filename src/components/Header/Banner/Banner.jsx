/* eslint-disable react/no-unescaped-entities */

const Banner = () => {

    return (
        <div className="carousel w-full mt-12">
            <div id="slide1" className="carousel-item relative w-full bg-[url('https://i.ibb.co/Lh0LgPC/all-course.gif')] bg-cover bg-no-repeat object-fill">
                <div className="w-full h-[80vh] hero-overlay bg-opacity-70 flex flex-col items-center justify-center">
                    <h2 className="text-3xl text-white font-semibold text-center">Enjoy planning your wedding</h2>
                    <p className="text-white text-base text-center lg:px-32 my-4 px-9">With the largest network of local wedding vendors, WeddingWire offers the most comprehensive wedding site out there. You will be able to find the best vendor for your budget and plan your wedding exactly the way you envisioned it. We make it simple to get the pricing, availability, and answers you need from wedding venues and wedding vendors across every town.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
          
        </div>
    );
};

export default Banner;

