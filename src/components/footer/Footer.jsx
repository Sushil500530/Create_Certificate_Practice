import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {

    return (
        <div className=" p-5 bg-base-200 text-base-content w-full lg:h-[50vh] h-[650px] flex flex-col items-start justify-center mt-12">
            <footer className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-between">
                <aside className="w-[300px] flex flex-col items-center justify-center">
                    <img className="w-full h-[100px] mb-3" src="https://i.ibb.co/VxVf6XY/increate-knowledge.webp" alt="image" />
                    <div className="flex gap-4 items-center justify-center">
                        <a href="#" className="w-9 h-9 border hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaFacebook className="text-5xl"></FaFacebook></a>
                        <a href="#" className="w-9 h-9 border hover:text-red-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaYoutube className="text-5xl"></FaYoutube></a>
                        <a href="#" className="w-9 h-9 border hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaGoogle className="text-5xl"></FaGoogle></a>
                        <a href="#" className="w-9 h-9 border hover:text-blue-500 transition ease-in cursor-pointer  rounded-full flex items-center justify-center"><FaTwitter className="text-5xl"></FaTwitter></a>
                        <a href="#" className="w-9 h-9 border hover:text-blue-500 transition ease-in cursor-pointer rounded-full flex items-center justify-center"><FaLinkedin className="text-5xl"></FaLinkedin></a>

                    </div>
                </aside>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl">Services</header>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Branding</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Design</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Marketing</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Advertisement</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl">Company</header>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">About us</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Contact</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Jobs</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Press kit</a>
                </nav>
                <nav className=" flex flex-col text-[16px] items-center justify-center lg:items-start lg:justify-normal font-semibold">
                    <header className="footer-title text-xl">Legal</header>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Terms of use</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Privacy policy</a>
                    <a href="#" className="hover:text-blue-500 transition ease-in cursor-pointer">Cookie policy</a>
                </nav>
            </footer>
        </div>


    );
};

export default Footer;