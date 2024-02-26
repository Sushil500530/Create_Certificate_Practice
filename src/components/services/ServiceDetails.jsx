/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const ServiceDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const parseId = parseInt(id);
    const findId = data.find(service => service.id === parseId);
    const { title, image, description, price } = findId || {};
    const navigate = useNavigate();

    const handleGoBack = () => {
        return navigate(-1)
    }
    const handleOrder = () => {
   
        const addOrderdService = [];

        const orderItems = JSON.parse(localStorage.getItem("services"));
        if (!orderItems) {
            addOrderdService.push(findId)
            localStorage.setItem("services", JSON.stringify(addOrderdService))
            Swal.fire({
                title: 'Order Successfully!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
        else {
            addOrderdService.push(...orderItems, findId)
            localStorage.setItem("services", JSON.stringify(addOrderdService))
            Swal.fire({
                title: 'Order Successfully!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
    }
  
        return (
            <div>
                <Navbar></Navbar>
                <div className="mt-7">
                    <div className="flex flex-col md:flex-col lg:flex-row justify-around">
                        <div className="w-full lg:h-[480px] lg:w-[50%]">
                            <img className="h-[480px] w-full" src={image} alt="meal-photo" />
                        </div>
                        <div className="lg:h-[450px] flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                            <h2 className="text-2xl font-semibold text-violet-700">{title}</h2>
                            <hr className="border-black w-[35%] my-3" />
                            <p>{description}</p>
                            <div>
                                <h2 className="text-2xl font-semibold my-3">Other Benefits</h2>
                                <hr className="border-black w-[70%] my-3" />
                                <ol className="list-decimal pl-5">
                                    <li><p className="text-base font-medium">Building Relationships</p></li>
                                    <li><p className="text-base font-medium">Community and Belonging</p></li>
                                    <li><p className="text-base font-medium">Sharing Experiences and Knowledge</p></li>
                                    <li><p className="text-base font-medium">Stress Reduction and Relaxation</p></li>
                                    <li><p className="text-base font-medium">Expanding Social Networks</p></li>
                                </ol>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold my-3">Your Commemts</h2>
                                <hr className="border-black my-3" />
                                <div className="flex gap-5">
                                    <h3 className="text-xl font-semibold">Review :</h3>
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold">Price : ${price}</h3>
                                <div className="flex lg:flex-row flex-col gap-5 mt-5">
                                    <button onClick={handleGoBack} className="btn bg-green-500 border hover:border-green-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-green-700 font-semibold w-full ">Go Back</button>
                                    <button onClick={handleOrder} className="btn bg-green-500 border hover:border-green-500 hover:bg-transparent transition ease-in capitalize text-[18px] hover:text-green-700 font-semibold w-full ">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-2xl font-semibold my-3">Social Events</h2>
                        <hr className="border-black my-3" />
                        <p className="text-base font-medium">social event may be understood as an atomic unit of social interaction. For example, in an episode where a father and a child are coloring together, the initial goal of father could be give son some attention, but in the course of action the father could start teaching the child coloring within the lines. Then this continuous episode is split in two, in accordance with the goal of the activity. On the opposite side of the spectrum, the term "social event" may refer to any event, activity, or gathering of a group of people for any purpose. Communication between the participants is not necessarily a defining characteristic of a social event. For example, while chats between spectators are part of a football match event, it is not its defining characteristic</p>
                    </div>
                </div>
            </div>
        );
    };

    export default ServiceDetails;