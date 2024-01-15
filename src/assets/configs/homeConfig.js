import React from 'react';
import {BsGraphUp} from "react-icons/bs";
import {DiCode} from "react-icons/di";
import {MdVerified, MdDialerSip} from "react-icons/md";

const homeConfig = {

    greeting:
        <h1 className="heading">
            <strong className="main-name">
            Xavier Trentin
            </strong>
        </h1>,
    titles: [
        "Manager Expérimenté",
        "Aspirant Data Scientist"
    ],
    about: {
        start: "Passionné par les technologies avec une solide expérience 💪 en encadrement d'équipes de développement et de validation. " +
            "J'ai récemment élargi mes horizons en me formant intensivement dans le domaine de l'IA et de la Data Science. ",
        exit: "A 52 ans, ma transition vers ce domaine résulte de la fusion parfaite de mes compétences issues du monde du "+
            "développement, de mon cursus initial en mathématiques et de cette curiosité qui me pousse à explorer l'inconnu."
    },
    workTimeline: [
        {
            id: "work3",
            title: "Etudiant Ingénieur en IA",
            company: "Openclassrooms",
            description: "Projets professionnalisants tutorés par un spécialiste du domaine.",
            date: "En cours",
            icon: <BsGraphUp/>,
            tags: ["python","data analyse", "machine learning", "deep learning", "git", "docker", "Google Cloud Platform","MLFlow"]
        },
        {
            id: "work-2",
            title: "Responsable de Service Validation",
            company: "SFR",
            description: "Management d'une équipe de 5 collaborateurs en charge de la validation des logiciels des boxes. "+
              "Internet destinées au Grand Public et aux Entreprises.",
            date: "2020-2023",
            icon: <MdVerified />,
            tags: ["management de proximité", "linux", "agile", "jira", "xray", "node.js", "git"]
        },
        {
          id: "work-1",
          title: "Responsable de Service Développement",
          company: "SFR",
            description: "Management d'une équipe de 5 à 10 collaborateurs en charge du développement et de l'intégration "+
             "de briques logicielles des boxes Internet destinées essentiellement aux Entreprises.",
            date: "2014-2020",
            icon: <DiCode/>,
            tags: ["management de proximité", "linux", "protocoles réseaux","sqlite", "jira", "confluence", "git"]
        },
        {
          id: "work-0",
          title: "Responsable de Projets",
          company: "Efixo",
            description: "Management d'une équipe de 5 à 10 collaborateurs en charge du développement et de l'intégration"+
             "des briques logicielles de boxes Internet destinées aux PME. J'y ai notamment acquis mon expertise en téléphonie sur IP.",
            date: "2006-2014",
            icon: <MdDialerSip />,
            tags: ["management de projet", "linux", "voip", "sip", "c", "python", "cgi", "subversion"]
        }
    ]
}


export default homeConfig
