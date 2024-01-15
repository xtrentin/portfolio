import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

//import p11 from "../images/P11.png"
//import p10 from "../images/P10.png"
import p09 from "../images/P09.png"
import p08 from "../images/P08.jpg"
import p07 from "../images/P07.jpg"
import p06 from "../images/P06.png"
import p05 from "../images/P05.png"
import p04 from "../images/P04.jpg"
import p03 from "../images/P03.jpg"
import p02 from "../images/P02.png"

import React from 'react'

const projectConfig = [
    {
      id: "project-8",
      title: "Recommandation de contenu",
      links: [
          {
              name: "repo",
              url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
              icon: <AiFillGithub/>,
          },
          {
              name: "fork",
              url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
              icon: <BiGitRepoForked/>,
          },
          {
              name: "subscription",
              url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
              icon: <AiFillEye/>,
          },
          {
              name: "docs",
              url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
              icon: <ImBook/>,
          }
      ],
      image: p09,
      description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
      target: "_blank"
    },
    {
      id: "project-7",
      title: "Segmentation d'images de dashcam",
      links: [
          {
              name: "repo",
              url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
              icon: <AiFillGithub/>,
          },
          {
              name: "fork",
              url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
              icon: <BiGitRepoForked/>,
          },
          {
              name: "subscription",
              url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
              icon: <AiFillEye/>,
          },
          {
              name: "docs",
              url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
              icon: <ImBook/>,
          }
      ],
      image: p08,
      description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
      target: "_blank"
    },
    {
        id: "project-6",
        title: "Amélioration d'un produit IA",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }
        ],
        image: p07,
        description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Analyse de sentiments",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/Graph-Embeddings",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://graph-embeddings.readthedocs.io/",
                icon: <ImBook/>,
            }
        ],
        image: p06,
        description: "Graph embeddings for downstream tasks.",
        target: "_blank"
    },
    {
      id: "project-4",
      title: "Segmentation de clients",
      links: [
          {
              name: "repo",
              url: "https://github.com/rodrigo-arenas/Graph-Embeddings",
              icon: <AiFillGithub/>,
          },
          {
              name: "fork",
              url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
              icon: <BiGitRepoForked/>,
          },
          {
              name: "subscription",
              url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
              icon: <AiFillEye/>,
          },
          {
              name: "docs",
              url: "https://graph-embeddings.readthedocs.io/",
              icon: <ImBook/>,
          }
      ],
      image: p05,
      description: "Clusterisation des clients à l'aide de modèles vs méthode marketing classique RFM.",
      target: "_blank"
  },
    {
        id: "project-3",
        title: "Implémentation d'un outil de Scoring",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: p04,
        description: "Analyse et transformation de données. Classification des utilisateurs. Interprétation locale et globale des variables",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Etude du Nutriscore",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/pyworkforce",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://pyworkforce.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }
        ],
        image: p03,
        description: "Analyse de la composition nutritionnelle de produits et lien avec leur nutriscore. "+
          "Implémentation d'un moteur d'inférence de Nutriscore.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Les arbres de la ville de Paris",
        links: [
            { url: "project01"}
        ],
        image: p02,
        description: "Analyse des données sur la population des arbres de la ville. Graphiques et cartographies associés.",
        target: "_blank"
    },
]

export default projectConfig
