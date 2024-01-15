//import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn, FaMailchimp} from "react-icons/fa";
//import {BsMedium} from "react-icons/bs";
import React from "react";
import { BiCopyright, BiMailSend } from "react-icons/bi";
import { SiMaildotru } from "react-icons/si";

const footerConfig = {
    icons: [
        {
            url: "https://linkedin.com/in/xavier-trentin",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
          url: "mailto://xavier.trentin@pm.me",
          className: "social-icon",
          target: "_blank",
          icon: <SiMaildotru size={50}/>
        },
        {
            url: "https://github.com/rodrigo-arenas/portfolio",
            className: "social-icon",
            target: "_blank",
            icon: <BiCopyright size={50}/>
        }
    ]
}

export default footerConfig
