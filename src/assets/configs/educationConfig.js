import React from 'react';
import {DiCode} from "react-icons/di";
import {FaUniversity } from 'react-icons/fa';
import {MdEngineering} from "react-icons/md";
import { SiStarship } from 'react-icons/si';

const educationConfig = {

    greeting:
        <h1 className="heading">
            <strong className="main-name"> Xavier Trentin</strong>
        </h1>,
    titles: [
        "Licencié en mathématiques",
        "Ingénieur de l'école de l'Internet",
        "Développeur certifié en IA",
        "Ingénieur en devenir en IA"
    ],
    about: {
        start: "J'ai toujours aimé  l'aspect ludique des  mathématiques. En parallèle, mon attrait pour la programmation s'est lentement confirmé."+
            " Au début des années 2000 j'ai découvert Linux et le monde du développement web (scripts CGI, PHP, MySql)."+
            " C'est à ce moment que j'ai décidé de tout faire pour percer dans ce domaine... pour finalement atterir  dans celui des telecoms 😂.",
        exit: "Aujourd'hui, je me lance un nouveau défi 💪 : une reconversion dans le monde passionnant de la Data Science et de l'IA!"
    },
    workTimeline: [
        {
            title: " Ingénieur en IA",
            company: "Openclassrooms",
            description: "Formation certifiante RNCP niveau 7 (Bac+5) constituée de 11 projets tutorés par un professionel de l'IA."+
            " Chaque projet aborde une problématique et les difficultés sont croissantes. La fin de chaque projet " +
            "est validée par un ensemble de livrables à fournir et une soutenance orale.",
            date: "En cours : 9 projets sur 11 validés",
            icon: <SiStarship/>,
            tags: ["python","data analyse", "machine learning", "deep learning", "git", "docker", "Google Cloud Platform","MLFlow"]
        },
        {
            title: "Développeur en IA",
            company: "Le Wagon",
            description: "Formation certifiante RNCP niveau 6 (Bac+3/Bac+4) en mode bootcamp de 9 semaines non-stop (8h/j). "+
            "Elle se termine par un projet en équipe, et est sanctionnée par deux jours d'examens. ",
            date: "2022",
            icon: <DiCode />,
            tags: ["python", "data sourcing", "data analysis", "data visualization",
            "decision science" , "machine learning", "deep learning", "MLOps"]
        },
        {
          title: "Ingénieur",
          company: "Institut des Application Avancées de l'Internet",
            description: "Enseignement pluri-disciplinaire autour de l'Internet. \"L'école de l'Internet\" était un GIE de différents établissements : "+
            "Universités d'Aix-Marseille, Université d'Avignon et Ecole Nationale Supérieure des Télécommunications de Bretagne.",
            date: "2003-2005",
            icon: <MdEngineering/>,
            tags: ["informatique", "systèmes", "java","oracle","crypto","théorie des graphes","gestion de projet",
            "droit","économie", "marketing","interface homme machine"]
        },
        {
          title: "Licence de mathématiques",
          company: "Université de la Réunion",
            description: "Mathématiques orientées prépa-CAPES.",
            date: "1996-1997",
            icon: <FaUniversity />,
            tags: ["calcul intégral","probabilités", "calcul différentiel", "équations différentielles","espaces fonctionnels","analyse de Fourier",
          "analyse numérique","informatique","algorithmique et programmation","calcul scientifique","algèbre",
          "géométrie","structures de l'analyse"]
        }
    ]
}


export default educationConfig
