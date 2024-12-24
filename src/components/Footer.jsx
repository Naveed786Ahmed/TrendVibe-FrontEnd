import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { MdOutlinePhone } from 'react-icons/md'

const Footers = () => {

    const goLinked = () => {
        window.open('www.linkedin.com/in/naveed-ahmed-8340b6281', "_blank")
    }
    const goGitHub = () => {
        window.open('www.linkedin.com/in/naveed-ahmed-8340b6281', "_blank")
    }

    return (
        <>
            <div className="FooterCont">
                <ul className='contactUs'>
                    <li className='liHeader'>CONTACT US</li>
                    <li className='contactChild'><CiMail /> <span style={{ marginLeft: "5px" }}>naveedsami5000@gmail.com</span></li>
                    <li className='contactChild'><MdOutlinePhone /> <span style={{ marginLeft: "5px" }}>+92 3131119594</span></li>
                    <li className='icons'><div className="iconss"><FaLinkedin onClick={goLinked} /> <FaGithub onClick={goGitHub} /></div></li>
                </ul>
                <ul className='customerCare'>
                    <li className='liHeader'>CUSTOMER CARE</li>
                    <li className='simple'>Size Guide</li>
                    <li className='simple'>Shipping & Exchange</li>
                    <li className='simple'>Privacy Policy</li>
                    <li className='simple'>Store Locator</li>
                    <li className='simple'>FAQ's</li>
                </ul>
                <ul className='information'>
                    <li className='liHeader'>INFORMATION</li>
                    <li className='simple'>Contact Us</li>
                    <li className='simple'>About Us</li>
                    <li className='simple'>Blogs</li>
                    <li className='simple'>Track Your Order</li>
                </ul>
                <ul className='newLetter'>
                    <li className='liHeader'>NEWSLETTER SIGNUP</li>
                    <li className='simple'>Subscribe to our newsletter to stay up to date on Kross Kulture news and special events.</li>
                </ul>
            </div>
            <div className="copyRight">
                © Copyright 2024 Naveed Ahmed
            </div>
        </>
    )
}

export default Footers