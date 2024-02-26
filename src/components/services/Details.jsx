/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const convertId = parseInt(id);
    const findDetails = details.find(details => details.id === convertId);
    console.log(findDetails);
    AOS.init()

    return (
        <div data-aos="zoom-in-up">
            <Navbar></Navbar>
            <div className="my-7">
                <div className="flex flex-col md:flex-col lg:flex-row justify-around">
                    <div className="w-full lg:h-[480px] lg:w-[50%]">
                        <img className="h-[480px] w-full" src={findDetails?.image} alt="meal-photo" />
                    </div>
                    <div className="lg:h-[450px] flex flex-col p-5 justify-center items-center lg:items-start lg:justify-start lg:flex-col lg:w-[40%]">
                        <h2 className="text-2xl font-semibold text-violet-700">{findDetails?.title}</h2>
                        <hr className="border-black w-[35%] my-3" />
                        <p>{findDetails?.description}</p>

                        <div className="p-5">
                            <h2 className="text-2xl font-semibold my-3">Social Events</h2>
                            <hr className="border-black my-3" />
                            <p className="text-base font-medium">social event may be understood as an atomic unit of social interaction. For example, in an episode where a father and a child are coloring together, the initial goal of father could be give son some attention, but in the course of action the father could start teaching the child coloring within the lines. Then this continuous episode is split in two, in accordance with the goal of the activity. On the opposite side of the spectrum, the term "social event" may refer to any event, activity, or gathering of a group of people for any purpose. Communication between the participants is not necessarily a defining characteristic of a social event. For example, while chats between spectators are part of a football match event, it is not its defining characteristic</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;