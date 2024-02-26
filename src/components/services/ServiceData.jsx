/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceData = ({ service }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, title, image, description, price } = service || {};

    return (
            <div className="card bg-base-100 mt-8 h-[590px] m-5 lg:m-0 md:m-0 shadow border">
                <figure className="">
                    <img src={image} alt="image" className="rounded-xl hover:scale-110 cursor-pointer transition ease-in w-full h-[290px]" />
                </figure>
                <div className="flex justify-around items-center m-0 py-3">
                    <div className="rating rating-md">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h2 className="text-xl font-semibold">Price $ {price}</h2>
                </div>
                <div className="card-body py-0 px-5 items-center text-center">
                    <h2 className="card-title py-2">{title}</h2>
                    <p>{description}</p>

                    <div className="card-actions w-full">
                        <Link to={`/serviceId/${id}`} className="btn w-full btn-primary text-white capitalize text-xl mb-5"><button>Show Details</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default ServiceData;