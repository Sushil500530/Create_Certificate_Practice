/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {

    AOS.init()
    return (
        <div className='text-center space-y-6'>
            <Navbar></Navbar>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                <h2 className='text-2xl font-semibold mb-5'>Social Events</h2>
                <p className='px-20 font-medium'>social event may be understood as an atomic unit of social interaction. For example, in an episode where a father and a child are coloring together, the initial goal of father could be give son some attention, but in the course of action the father could start teaching the child coloring within the lines. Then this continuous episode is split in two, in accordance with the goal of the activity.
                    On the opposite side of the spectrum, the term "social event" may refer to any event, activity, or gathering of a group of people for any purpose.

                    Communication between the participants is not necessarily a defining characteristic of a social event. For example, while chats between spectators are part of a football match event, it is not its defining characteristic</p>
            </div>
        </div>
    );
};

export default About;