import {
    SiPython,
    SiPandas,
    SiNumpy,
    SiTensorflow,
    SiKeras,
    SiDocker,
    SiWindowsterminal,
    SiScikitlearn,
    SiStreamlit,
    SiFastapi,
    SiFolium,
    SiDebian,
    SiAtlassian
} from "react-icons/si";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {FaGitAlt} from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";


import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
          className: "skill-icon",
          icon: <SiNumpy size={50}/>,
          text: "Numpy"
        },
        {
          className: "skill-icon",
          icon: <SiPandas size={50}/>,
          text: "Pandas"
        },
        {
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-learn"
        },
        {
          className: "skill-icon",
          icon: <SiTensorflow size={50}/>,
          text: "Tensorflow"
        },
        {
          className: "skill-icon",
          icon: <SiKeras size={50}/>,
          text: "Keras"
        },
        {
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }

    ],
    complementarySkills: [
        {
          className: "skill-icon",
          icon: <SiDebian size={50}/>,
          text: "Linux"
        },
        {
          className: "skill-icon",
          icon: <SiWindowsterminal size={50}/>,
          text: "Bash"
        },
        {
          className: "skill-icon",
          icon: <SiStreamlit size={50}/>,
          text: "Streamlit"
        },
        {
          className: "skill-icon",
          icon: <SiFastapi size={50}/>,
          text: "Fast API"
        },

        {
          className: "skill-icon",
          icon: <SiFolium size={50}/>,
          text: "Folium"
        },
        {
          className: "skill-icon",
          icon: <AiOutlineConsoleSql size={50}/>,
          text: "SQL"
        },
        {
          className: "skill-icon",
          icon: <SiDocker size={50}/>,
          text: "Docker"
        },
        {
          className: "skill-icon",
          icon: <DiGoogleCloudPlatform size={50}/>,
          text: "GCP"
        },
        {
          className: "skill-icon",
          icon: <SiAtlassian size={50}/>,
          text: "Atlassian"
        },

    ]
}

export default skillsConfig
