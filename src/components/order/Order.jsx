import { useEffect, useState } from "react";
import OrderItems from "./OrderItems";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Order = () => {
    const [items, setItems] = useState([]);
    const [notItems, setNoItems] = useState(false);
    useEffect(() => {
        const orderItems = JSON.parse(localStorage.getItem("services"));
        if (orderItems) {
            setItems(orderItems)
        }
        else {
            setNoItems("No Items Found")
        }
    }, [])
    // console.log(items);
    AOS.init()
    return (
        <div>
            <Navbar></Navbar>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                <div className="">
                    {
                        notItems && <div className="flex items-center justify-center w-full h-[60vh]">
                            <p className="text-3xl font-semibold">{notItems}</p>
                        </div>
                    }
                    <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            items.map((order, idx) => <OrderItems order={order} key={idx}></OrderItems>)
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Order;