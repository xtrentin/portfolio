import React from "react";

import {
    AiFillCode,
    AiFillHome,
    AiOutlineGithub
} from "react-icons/ai";
//import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

//import {BsMedium} from "react-icons/bs";


const menuConfig = {

    sidebarData: [
        {
            title: "Expérience",
            path: "/portfolio",
            icon: <AiFillHome size={35}/>,
            className: "nav-text"
        },
        {
          title: "Formation",
          path: "/education",
          icon: <MdSchool size={35}/>,
          className: "nav-text"
        },
        {
          title: "Compétences",
          path: "/skills",
          icon: <AiFillCode size={35}/>,
          className: "nav-text"
        },
        {
            title: "Projets",
            path: "/projects",
            icon: <AiOutlineGithub size={35}/>,
            className: "nav-text"
        },
        /*{
            id: "menu-2",
            title: "Blogs",
            path: "/blogs",
            icon: <BsMedium size={35}/>,
            className: "nav-text"
        },*/

    ]

}

export default menuConfig
