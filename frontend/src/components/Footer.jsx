import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className='p-10 bg-white dark:bg-slate-800 text-gray-200'>
            <hr className="bg-red-400" />
            <div className="mt-4">
                <div className="max-w-7xl mx-auto text-slate-900 dark:text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl mb-3">Company</h4>
                            <p className="text-gray-500">
                                Salita della neve <br />
                                Genova, Italy
                                <br />
                                <strong>Phone:</strong> +393791127325<br />
                                <strong>Email:</strong> husam.jenidi95@gmail.com<br />
                            </p>
                        </div>
                        <div className='mb-5'>
                            <h4 className="text-2xl mb-3">Useful Links</h4>
                            <ul className="text-gray-500">
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Home</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> About us</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Services</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Terms of Services</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Private Policy</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className="text-2xl mb-3">Our Services</h4>
                            <ul className="text-gray-500">
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Web Design</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Web Development</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Product Management</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Marketing</a></li>
                                <li className="pb-4"><FontAwesomeIcon icon={faChevronRight} className="text-yellow-500" /><a href="#" className="hover:text-yellow-500"> Social Media</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className="text-2xl mb-3">Join Our Newsletter</h4>
                            <p className='text-gray-500'>Join 50,000+ others and never miss out anything</p>
                            <form action="">
                                <input type="text" className='p-2 rounded-lg border-2 border-slate-800' name="" id="" />
                                <button className="bg-sky-800 hover:bg-sky-600 text-white m-2 p-2 rounded-lg">Subscribe</button>
                            </form>
                            <div>
                                <ul className="flex flex-wrap items-center justify-right text-gray-900 dark:text-white gap-5">
                                    <li className='hover:text-sky-500'><FontAwesomeIcon icon={faFacebook} /></li>
                                    <li className='hover:text-pink-500'><FontAwesomeIcon icon={faInstagram} /></li>
                                    <li className='hover:text-blue-800'><FontAwesomeIcon icon={faLinkedin} /> </li>
                                    <li className='hover:text-slate-500'><FontAwesomeIcon icon={faXTwitter} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  text-gray-500 px-10">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-center items-center">
                    <div className='text-center'>
                        <div>
                            Copyright <strong><span>company</span></strong>. All Rights Reserved&copy;
                        </div>
                        <div>
                            Designed by <a href ="#" className="text-yellow-500">Husam Jenidi</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer