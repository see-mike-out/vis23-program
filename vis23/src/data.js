const AE = "Associated Event",
  CM = "Common",
  BK = "Break",
  TT = "Tutorial",
  WS = "Workshop",
  FP = "Full Papers",
  SP = "Short Papers",
  PN = "Panel",
  CT = "Contest",
  DC = "Doctoral Colloquium",
  IPP = "Invited Presentations";

export const types = {
  "Associated Event": "AE",
  Common: "CM",
  Break: "BK",
  Tutorial: "TT",
  Workshop: "WS",
  "Full Papers": "FP",
  "Short Papers": "SP",
  "Invited Presentations": "IPP"
};

const RM1_2 = "Room 101-102",
  RM3 = "Room 103",
  RM4 = "Room 104",
  RM5 = "Room 105",
  RM6 = "Room 106",
  RM7 = "Room 107",
  RM8 = "Room 108",
  RM9 = "Room 109",
  RM10 = "Room 110",
  RM11_12 = "Room 111–112",
  RM5_6 = "Room 105–106",
  PL1 = "Plenary 1";

let posters = [
  {
    title: "Dissecting Geo-Infographics: A Study on Visualizing Geographic Data",
    authors: "Xinyuan Zhang, Yu Liu, Lingyun Yu"
  },
  {
    title: "TangibleChannel: An Innovative Data Physicalization System for Visual Channel Education",
    authors: "Siqi Xie, Yu Liu, Lingyun Yu"
  },
  {
    title: "A Preliminary Design Space for Immersive Data Storytelling",
    authors: "Radhika Jain, Kadek Ananta Satriadi, Ross Smith, Andrew Cunningham"
  },
  {
    title: "What is Visualization for Communication? Analyzing Four Years of VisComm Papers",
    authors: "Vedanshi Shah, Ab Mosca"
  },
  {
    title: "Effects of Spatial Abilities and Domain on Estimation of Pearson’s Correlation Coefficient",
    authors: "Sara Tandon, Alfie Abdul-Rahman, Rita Borgo"
  },
  {
    title: "Good News or Bad News First: Bias from Visualization Sequences",
    authors: "Watcharich Sriswasdi, Prawit Banjong, Puripant Ruchikachorn"
  },
  {
    title: "MultiCaM-Vis: Visual Exploration of Multi-Classification Model with High Number of Classes",
    authors: "Syed Ahsan Ali Dilawer, Shah Rukh Humayoun"
  },
  {
    title: "A Prototype Visualisation Tool for Biocontrol Researchers",
    authors: "Lauren Stevens, Louise Ord, Nunzio Knerr, Ben Gooden, Alexander Schmidt-Lebuhn"
  },
  {
    title: "RTVis: Research Trend Visualization Toolkit",
    authors: "Xingyu Shen, Yueqian Lin, Zhixian Zhang, Xin Tong"
  },
  {
    title: "Back to the Graphs: A Collection of Datasets and Quality Criteria for Temporal Networks Layout and Visualization",
    authors: "Velitchko Filipov, Alessio Arleo, Tatiana von Landesberger, Daniel Archambault"
  },
  {
    title: "DUVis: A visual analytics tool for supporting a trans-disciplinary project",
    authors: "Alexander Rigby, Peter Butcher, Roberta Bellini, Paul Coughlan, Aonghus McNabola, Panagiotis Ritsos"
  },
  {
    title: "Understanding Auto-Scheduling Optimizations for Model Deployment via Visualizations",
    authors: "Laixin Xie, Chenyang Zhang, Ruofei Ma, Xing Jiang, Xingxing Xing, Wei Wan, Quan Li"
  },
  {
    title: "Evaluating the Effectiveness of AI-Generated Device Representations in Digital Twin Visualizations",
    authors: "Jiachun Du, Wei Zhao, Hanyue Duan, Xiaofan Liu"
  },
  {
    title: "Refreshable Tactile Displays for Accessible Data Visualisation",
    authors: "Leona Holloway, Peter Cracknell, Kate Stephens, Melissa Fanshawe, Samuel Reinders, Kim Marriott, Matthew Butler"
  },
  {
    title: "The Need for Visual Knowledge Elicitation",
    authors: "Lydia Byrne"
  },
  {
    title: "Towards an Exploratory Visual Analytics System for Griefer Identification in MOBA Games",
    authors: "Zixin Chen, Shiyi Liu, Zhihua Jin, Gaoping Huang, Yang Chao, ZHENCHUAN YANG, Quan Li, Huamin Qu"
  },
  {
    title: "A method for Critical and Creative Visualisation Design-Thinking",
    authors: "Jonathan Roberts, Hanan Alnjar, Aron Owen, Panagiotis Ritsos"
  },
  {
    title: "Circles: Inter-Model Comparison of Multi-Classification Problems with High Number of Classes",
    authors: "Nina Mir, Ragaad Al-Tarawneh, Shah Rukh Humayoun"
  },
  {
    title: "ManimML: Communicating Machine Learning Architectures with Animation",
    authors: "Alec Helbling, Duen Horng Chau"
  },
  {
    title: "TECVis: A Visual Analytics Tool to Compare People’s Emotion Feelings",
    authors: "Ilya Nemtsov, MST Jasmine Jahan, Chuting Yan, Shah Rukh Humayoun"
  },
  {
    title: "Insights into Net Promoter Score (NPS®) Surveys with Microsoft Power BI and Advance Analytics",
    authors: "Joel Low, Hemen Patel, Siddharth Goyal"
  },
  {
    title: "Multi-Device Forensic Autopsy Documentation and Report Generation Using Mixed Reality",
    authors: "Vahid Pooryousef, Lonni Besançon, Maxime Cordeil, Richard Bassed, Tim Dwyer"
  },
  {
    title: "Towards Better Understanding: Proposing Effective Visualization Methods for Analyzing Argument in Debate",
    authors: "Kwanghyuk Moon, Hyoji Ha, Kyungwon Lee"
  },
  {
    title: "Design Space Exploration of Accessible DanceVis",
    authors: "Madhuka De Silva, Matthew Butler, Leona Holloway, Jim Smiley, Sarah Goodwin"
  },
  {
    title: "Landslide visualization situated on tangible terrain models",
    authors: "Haobo Li, Kentaro Takahira, Kam Kwai Wong, Leni Yang, Wai Tong, Huamin Qu"
  },
  {
    title: "Incorporating ML in Interaction-Intensive Workflows",
    authors: "Grace Minai, Denton Bobeldyk, Jonathan Leidig"
  },
  {
    title: "Error Measurement and Visualization in 3D Volume Data",
    authors: "Man Hee Lee, Chang Joon Park"
  },
  {
    title: "Visualization of Complexion for Photo-Realistic Facial Expressions",
    authors: "younghee kim, Woo Jin Jeon, Kwanghyun Shim"
  },
  {
    title: "Virtual Reality Training for Nosocomial Infections Prevention",
    authors: "Mengjie Fan, Shaoxing Zhang, Xintian Zhao, Xingyao Yu, Liang Zhou"
  },
  {
    title: "Semantic-Aware Image Screening",
    authors: "Minshan Xie, Tien-Tsin Wong"
  },
  {
    title: "Inspire and Create: Unveiling the Potential of VisDice in Visualization Design",
    authors: "Aron Owen, Jonathan Roberts"
  },
  {
    title: "Countering Simpson’s Paradox with Counterfactuals",
    authors: "Arran Zeyu Wang, David Borland, David Gotz"
  },
  {
    title: "Diffusion Explainer: Visual Explanation for Text-to-image Stable Diffusion",
    authors: "Seongmin Lee, Benjamin Hoover, Hendrik Strobelt, Zijie Wang, ShengYun Peng, Austin Wright, Kevin Li, Haekyu Park, Haoyang Yang, Duen Horng Chau"
  },
  {
    title: "Exploring Data Agency and Autonomous Agents as Embodied Data Visualizations",
    authors: "Sarah Schömbs, Jorge Goncalves, Wafa Johal"
  },
  {
    title: "A Visual Survey of In-Situ Running Analytics",
    authors: "Ang Li, Stephen Viller, Gianluca Demartini, Maxime Cordeil"
  },
  {
    title: "Reaching for Data: precise embodied selection-at-a-distance for immersive visualisation",
    authors: "Shaozhang Dai, Tim Dwyer, Barrett Ens, Lonni Besançon"
  },
  {
    title: "Identifying Challenges in Designing, Developing and Evaluating Data Visualizations for Large Displays",
    authors: "Mahsa Sinaei, Pak Kwan, Matthew Klich, Jillian Aurisano, Fateme Rajabiyazdi"
  },
  {
    title: "A Visual Analytic Environment to Co-locate Peoples’ Tweets with City Factual Data",
    authors: "snehal patil, Shah Rukh Humayoun"
  },
  {
    title: "Time Walk: Blending Presence and History through AR Visualization",
    authors: "Wai Tong, Linping Yuan, Zikai Wen, Huamin Qu"
  },
  {
    title: "Hierarchical Timeline Exploration for Collaborative Text Writing",
    authors: "Gabriel Dias Cantareira, Yiwen Xing, Nicholas Cole, Rita Borgo, Alfie Abdul-Rahman"
  },
  {
    title: "TrafficBoard: Digital Spatio-Temporal Pinboard for Human Trafficking Detection",
    authors: "Catalina Vajiac, Duen Horng Chau, Andreas Olligschlaeger, Pratheeksha Nair, Meng-Chieh Lee, Mirela Cazzolato, Reihaneh Rabbany, Cara Jones, Christos Faloutsos"
  },
  {
    title: "Enhancing Natural Language-Based Data Exploration with Analysis Pipeline Illustration",
    authors: "Yi Guo, Nan Cao, Xiaoyu Qi, Haoyang Li, Danqing Shi, Jing Zhang, Qing Chen"
  },
  {
    title: "Understanding the Narrative: An Exploration of Narrative Structure and Visualisation Techniques in News Media",
    authors: "Songhai Fan, Ying Yang, Sarah Goodwin, Helen Purchase, Tim Dwyer, Simon Angus"
  },
  {
    title: "Meta Design Studies : A Structured Approach for Deriving Domain-Orientied Visualization Recommendation Strategies",
    authors: "Manfred Klaffenboeck, Torsten Möller, Michael Gleicher, Michael Wimmer"
  },
  {
    title: "A Normalised Metric for Edge Crossings",
    authors: "Gavin Mooney, Helen Purchase, Michael Wybrow"
  },
  {
    title: "Breaking Down the Technical Barrier: Visual Programming Driven Dynamic Immersive Analytics using XROps",
    authors: "Suemin Jeon, JunYoung Choi, Haejin Jeong, Won-Ki Jeong"
  },
  {
    title: "A Plot is Worth a Thousand Tests: Assessing Residual Diagnostics with the Lineup Protocol",
    authors: "Weihao Li, Di Cook, Emi Tanaka, Susan Vanderplas"
  },
  {
    title: "The Golden Ratio in Narrative Structure: Visualizing the Rising-Climax in Data Videos",
    authors: "Xian Xu, David Yip, Huamin Qu"
  },
  {
    title: "Plotting Apples, Oranges, and Distributions",
    authors: "Harriet Mason, Di Cook, Emi Tanaka, Sarah Goodwin, Ursula Laa"
  }
];

export let data = [
  {
    date: "Oct. 21, 2023", day: "Saturday", events: [
      {
        type: DC,
        title: "Doctoral Colloquium",
        start: 900,
        end: 1700,
        venue: "Invite only event",
        items: []
      }
    ]
  },
  {
    date: "Oct. 22, 2023", day: "Sunday", events: [
      {
        type: TT,
        title: "Visualization Analysis and Design",
        start: 900,
        end: 1200,
        venue: RM1_2,
        items: [{
          organizers: `Tamara Munzner`,
          description: `This introductory tutorial will provide a broad foundation for thinking systematically about visualization systems, built around the idea that becoming familiar with analyzing existing systems is a good springboard for designing new ones. The major data types of concern in visual analytics, information visualization, and scientific visualization will all be covered: tables, networks, and sampled spatial data. This tutorial is focused on data and task abstractions, and the design choices for visual encoding and interaction; it will not cover algorithms. No background in computer science or visualization is assumed.`
        }]
      }, {
        type: WS,
        title: "EnergyVis 2023: 3rd Workshop on Energy Data Visualization",
        start: 900,
        end: 1200,
        venue: RM3,
        items: [{
          organizers: `Kenny Gruchalla, Arnaud Prouzeau, Lyn Bartram, Sarah Goodwin`,
          description: `The energy sector is witnessing significant technological progress, primarily driven by the growth of renewable energy, distributed energy resources, and smart grid technologies. This rapid evolution is generating increasingly large, complex data that present substantial challenges for energy systems planning and operations. More research is needed to develop new and innovative visualization methods that can handle the increasing complexity of energy systems and provide diverse stakeholders with the necessary insights to make informed decisions about the future of energy. The EnergyVis 2023 workshop aims to bring together scientists, researchers, and practitioners from the energy and visualization domains to critically assess and discuss energy data visualization in the context of the evolving energy sector. The workshop’s main objectives will be to seed the development of a publishable report on the state-of-the-art and grand challenges in energy data visualization and to develop stronger international collaborations for this important area of multidisciplinary research. With the rapid evolution of energy systems, visualization experts have an essential role in enabling stakeholders to better understand and manage these increasingly complex systems. By expanding the reach of EnergyVis to the broader visualization community at IEEE VIS, we hope to continue the momentum of the past workshops and build a community of experts capable of tackling the visualization challenges of modern energy systems.`,
          website: `https://energyvis.org/`
        }]
      }, {
        type: WS,
        title: "Vis4PandEmRes: Visualization for Pandemic and Emergency Responses Workshop",
        start: 900,
        end: 1200,
        venue: RM4,
        items: [{
          organizers: `Alfie Abdul-Rahman, Kelly Gaither, Wolfgang Jentner, Tobias Schreck, Min Chen, David Ebert,`,
          description: `There have been many VIS R&D activities for supporting COVID-19 pandemic responses, many of which have not yet become public knowledge. This workshop will enable VIS researchers and practitioners to share their experience, knowledge, and reflection and offer their insight and foresight about the role of VIS in pandemic and emergency responses. It will also allow the VIS community to compile one or more archivable collections of records about various VIS activities around the world during the COVID-19 pandemic.`,
          website: `https://vis4pandemres.github.io/`
        }]
      }, {
        type: WS,
        title: "MERCADO: Multimodal Experiences for Remote Communication Around Data Online",
        start: 900,
        end: 1200,
        venue: RM5,
        items: [{
          organizers: `Matthew Brehmer, Maxime Cordeil, Christophe Hurter, Takayuki Itoh`,
          description: `MERCADO is a half-day workshop on the topic of new multimodal experiences for remote communication and collaboration around data. We aim to gather researchers working in data visualization, human-computer interaction (HCI), and computer-supported collaborative work (CSCW) who are interested in multimodal, synchronous, and remote or hybrid forms of communication and collaboration within organizational and educational settings.`,
          website: `https://sites.google.com/view/mercadoworkshop`
        }]
      }, {
        type: TT,
        title: "A Hands-on TTK Tutorial for Absolute Beginners",
        start: 900,
        end: 1200,
        venue: RM6,
        items: [{
          organizers: `Christoph Garth, Robin Georg Claus Maack, Mathieu Pont, Julien Tierny`,
          description: `This tutorial provides a basic, beginner’s introduction to topological data analysis and visualization with the Topology ToolKit (TTK). While previous editions of the TTK tutorial (2018 to 2022) were organized as mini-symposia (focused on the descriptions of TTK’s latest features), this year, in contrast, we would like to organize a very basic beginner’s hands-on tutorial. Specifically, the goal of this tutorial is to accompany attendees in the installation of TTK on their laptop as well as in the running of a few basic examples, all in a very beginner-friendly step-by-step description. This decision is motivated by attendee feedback which we collected at previous editions of the TTK tutorial. We address this feedback in this tutorial proposal. Then, for the first time, beginners would be able to come to the tutorial without prior TTK experience, and walk out with TTK installed on their system, capable of running a few examples and ready to go further. We believe this basic hands-on tutorial will facilitate the adoption of TTK and topological techniques to a broader audience. The tutorial will be organized as follows. The first hands-on exercise will be dedicated to the installation of TTK. The second hands-on exercise will be focused on ParaView’s basic usage. The following three hands-on exercises will be dedicated to the step-by-step replication of three examples extracted from TTK’s online example database (vortex extraction in fluid dynamics, Morse-Smale complex extraction in quantum chemistry and merge tree comparison in ensemble data).
We kindly ask potential attendees to optionally pre-register at the following address, in order for us to reach out to them ahead of the tutorial with information updates (for instance, last minute updates, instructions to download the tutorial material package, etc.): https://forms.gle/t4xX4a3pJjyiU67D9 Tutorial web page (data, material, schedule, etc.): https://topology-tool-kit.github.io/ieeeVisTutorial.html`,
          website: `https://topology-tool-kit.github.io/ieeeVisTutorial.html`
        }]
      }, {
        type: TT,
        title: "NLP4Vis: Natural Language Processing for Information Visualization",
        start: 900,
        end: 1200,
        venue: RM10,
        items: [{
          organizers: `Enamul Hoque`,
          description: `This tutorial will provide an introduction to natural language processing (NLP) to interested researchers in the visualization (Vis) community. It will first motivate why NLP4Vis is an important area of research and provide an overview of research topics on combining NLP and Vis techniques. Then an overview of deep learning models for NLP will be covered. A particular focus will be provided on highlighting the recent progress on large language models such as ChatGPT and how such models can be leveraged to solve various NLP tasks for visualizations. In the final part, we will focus on various application tasks at the intersection of NLP and Vis. We will conclude with an interactive discussion of future challenges for NLP+Vis applications. The audience will include researchers interested in applying NLP for visualizations as well as others who focus more generally at the intersection of AI and visualization.`
        }]
      }, {
        type: CT,
        title: "VAST Challenge",
        start: 900,
        end: 1200,
        venue: RM11_12,
        items: [{
          organizers: `R. Jordan Crouser, Jereme Haack`,
          website: `https://vast-challenge.github.io/2023/`
        }]
      },
      {
        type: AE,
        title: "VizSec",
        start: 1400,
        end: 1700,
        venue: "Room 101-102",
        items: [{
          website: `https://vizsec.org/vizsec2023/`
        }]
      }, {
        type: WS,
        title: "CityVis: 5th Workshop on Urban Data Visualization",
        start: 1400,
        end: 1700,
        venue: RM3,
        items: [{
          organizers: `Jessica Bou Nassar, Lyn Bartram, Sebastian Meier, Darren Sharp, Leonard Higi, Sarah Goodwin`,
          description: `With the growth and increasing density of urban areas, new technologies are emerging and data is becoming an essential asset to modern cities. Visualization as a tool for analysis, exploration and communication has become a driving force in the task of unravelling the complex urban fabrics that form our cities. In this workshop series, we want to critically assess this notion and ask how can data and data visualization be used to serve and better understand or even organize urban processes? We are particularly interested in multidisciplinary perspectives, especially on the human-centric component of urban visualizations. In the second workshop at IEEE VIS 2019, we explored roles of citizens in urban visualizations and outlined goals and challenges. Based on these findings, we propose to focus discussions in this 5th workshop on the critical role of urban data governance and its interplay in data and data visualisation: its production, dissemination and use.`,
          website: `https://www.cityvis.io/workshops/2023/`
        }]
      }, {
        type: WS,
        title: "VAHC: 14th Workshop on Visual Analytics in Healthcare",
        start: 1400,
        end: 1700,
        venue: RM4,
        items: [{
          organizers: `Jürgen Bernard, Annie T. Chen, Danny T.Y. Wu`,
          description: `The Workshop on Visual Analytics in Healthcare is the premier research event exploring the application of interactive data visualization and visual analytics to healthcare and biomedicine. VAHC will bring together medical experts, leading scientists, and visionaries to discuss opportunities and challenges in using visual analytics techniques to help patients, clinicians, public health researchers, and others leverage the power of complex health datasets. This year, the special focus of VAHC is on the interactive visualization of health data for digital and personal health.`,
          website: `https://www.visualanalyticshealthcare.org/`
        }]
      }, {
        type: WS,
        title: "VisComm: Sixth Workshop on Visualization for Communication",
        start: 1400,
        end: 1700,
        venue: RM5,
        items: [{
          organizers: `Paul Parsons, Jon Schwabish, Alvitta Ottley, Alice Feng`,
          description: `The VisComm workshop brings together practitioners and researchers from several fields to address the questions raised by the rapidly growing communicative uses of visualization, from internal research and analysis to news graphics to interactive dashboards to standalone static representations in blogs and social media. These questions span audience, application, evaluation, understanding, and practice. To encourage participation from communities that do not typically attend IEEE VIS and write academic papers, we will accept short papers, briefs on works in progress, visual case studies, and recruit program committee members from those communities.`,
          website: `https://www.viscomm.io/`
        }]
      }, {
        type: WS,
        title: "TopoInVis: Topological Data Analysis and Visualization",
        start: 1400,
        end: 1700,
        venue: RM6,
        items: [{
          organizers: `Paul Rosen, Guoning Chen`,
          description: `The IEEE VIS Workshop on Topological Data Analysis and Visualization aims at being an inclusive forum for the fast dissemination of the latest results in theory, algorithms, and applications of topological methods for the interactive and visual analysis of data. This workshop is a remodeling of the established TopoInVis workshop series, with the goal of being more diverse (in terms of applications) and inclusive (in terms of communities), with a clear will to open to other members of the visualization community potentially interested in topological methods, or experts in topological methods from other communities willing to experiment with interactive and visual applications.`,
          website: `https://topoinvis.org/`
        }]
      }, {
        type: WS,
        title: "NLVIZ Workshop: Exploring Research Opportunities for Natural Language, Text, and Data Visualization",
        start: 1400,
        end: 1700,
        venue: RM10,
        items: [{
          organizers: `Vidya Setlur, Arjun Srinivasan`,
          description: `Natural language processing (NLP) has evolved as a promising field for visual analysis and communication. The applications of NLP for supporting various aspects of the visual analysis workflow include helping readers take away key information from charts or dashboards, supporting interaction modalities that help people naturally "ask" questions of their data, generating data summaries and insight reports, and exploring ways to enrich the semantics of data, among others. With data-driven communication being more important than ever, how do we treat text and language as first-class citizens in helping people see and understand data? How do we couple language and charts to make the data more accessible to a variety of audiences with different needs, capabilities, and skills? As the field of NLP matures, computers now have an increased capability of interpreting language and engaging in conversations with people. But can NLP techniques and interactive visualizations work in concert to support an analytical conversation? As the platforms and channels for exploring data go beyond the desktop to chat interfaces, augmented and virtual reality environments, mobile, and large displays, how do we better understand user intent, modalities, and context to make these interactions more delightful and meaningful?
Addressing these questions calls for research at the intersection of human-computer interaction, information visualization, and NLP, three fields with natural synergies but rather infrequent meetings. This workshop will assemble an interdisciplinary community that promotes collaboration across these fields, explore research opportunities and challenges, and continue to establish an agenda for NLP research specifically for data visualization.`,
          website: `https://www.nlvizworkshop2023.com/`
        }]
      }, {
        type: TT,
        title: "Demystifying Color in Your Data Visualizations",
        start: 1400,
        end: 1700,
        venue: RM11_12,
        items: [{
          organizers: `Theresa-Marie Rhyne`,
          description: `This tutorial provides an overview of the basics of color theory while exploring various color mysteries. New to 2023, we show how to use Adobe’s Firefly, a creative generative AI model in Beta, to expand your data color scheme choices. You also learn how to build your own colormaps by transforming color harmonies. Several puzzling notions are examined. These include but are not limited to discovering that Magenta is not a spectral color, merging Red and Green lights results in Yellow, and most Blues in Data Visualizations turn out to be Cyan-Blue combinations. The course is intended for a broad audience of individuals interested in understanding, applying, and building color schemes for data visualization.
With a five stage colorization process, you learn how to build and select a data color scheme with color harmony, incorporate color models concepts and address color deficiency. You discover the differences between mixing colors in perceptual, display, printer, and traditional painter color spaces. For example, you learn how to transition from Red as a primary hue in RGB display space to Red as a secondary combination of Magenta and Yellow in CMYK printer space. You explore online and mobile color apps, like Adobe Firefly, and HCL Wizard, to help with continued colorization. Many of these tools are freely available. Along the way, color vision principles, perceptual uniformity with the Hue Chroma Luminance (HCL) model as well as color gamut, spaces and systems are examined. Concepts like extending the fundamentals of the Bauhaus into digital media , the Rainbow colormap dilemma, and overviews of appearance principals are covered. Bring your digital visualization examples for hands-on experiences with color suggestion tools.`
        }]
      }
    ]
  },
  {
    date: "Oct. 23, 2023", day: "Monday", events: [
      {
        type: TT,
        title: "Mining Useful Information Via Complex Network Visualization",
        start: 900,
        end: 1200,
        venue: "Room 101-102",
        items: [{
          organizers: `Sonali Agarwal, Sanjay Kumar Sonbhadra, Narinder Singh Punn, Sadhana Tiwari Sadhana, Ritesh Chandra`,
          description: `The process of visually representing networks of connected entities, links as well as nodes is termed as network visualization, also referred to as graph visualization or link analysis. The proposed tutorial is intended to provide a detailed coverage of contemporary complex network visualization techniques to support the understanding of various existing complex systems. The tutorial is covering basics of complex networks along with various visualization techniques under faceting perspective, application perspective and system perspective. After introducing several use cases of complex networks, the critical challenges incurred while developing multi-layer graph visualization will also be covered. Furthermore, future research directions are uncovered to address such challenges. Multilayer networks are expected to play a significant role in the study of complex systems in the future. It will bring the visualization community closer to the application domains as well as the complex systems communities.`
        }]
      }, {
        type: WS,
        title: "EduVis: Workshop on Visualization Education, Literacy, and Activities",
        start: 900,
        end: 1200,
        venue: RM4,
        items: [{
          organizers: `Mandy Keck, Samuel Huron, Georgia Panagiotidou, Christina Stoiber, Fateme Rajabiyazdi, Charles Perin, Jonathan C Roberts, Benjamin Bach`,
          description: `This half-day workshop focuses on visualization education, literacy, and activities. It intends to bring together scholars to share research and experience and discuss novel activities, teaching methods, and research challenges. The workshop aims to serve as a platform for scholars within and beyond the visualization community such as education, learning analytics, science communication, psychology, or people from adjacent fields such as data science, AI, and HCI. It will include presentations of research papers and practical sessions with hands-on activities. In addition, the workshop will allow participants to discuss challenges they face in data visualization education and outline a research agenda of visualization education, literacy, and activities.`,
          website: `https://ieee-eduvis.github.io/`
        }]
      }, {
        type: WS,
        title: "Visualization for Social Good",
        start: 900,
        end: 1200,
        venue: RM5,
        items: [{
          organizers: `Evanthia Dimara, Uzma Haque Syeda, Narges Mahyar, Delvin Varghese, Emily Wall`,
          description: `Data is an inescapable part of our lives: it guides commerce, government, and technology, and increasingly determines what lives we can (or cannot) live. Data visualization has a special place within this emerging, data-driven, order: as a tool to inform or persuade mass audiences, guide or enlighten the specialist, or give a voice to the unheard. We therefore pose the question: how can visualization, and visualization research, help us build the worlds we want? This theme, building just and equitable futures, is the motivation behind the third edition of our recurring workshop at IEEE VIS: Visualization for Social Good. Our workshop series has been successful not only at showcasing high-quality socially-minded visualization research from diverse voices, but also in starting important conversations around the role of data visualization as a force for good in society at large. We invite you to join our workshop and growing community on Visualization for Social Good, to navigate conversations about the role of data in human dignity and flourishing.`,
          website: `https://vis4good.github.io/`
        }]
      }, {
        type: AE,
        title: "LDAV: 13th IEEE Symposium on Large Data Analysis and Visualization",
        start: 900,
        end: 1200,
        venue: RM6,
        items: [{
          website: `https://ldav.org/2023/`
        }]
      }, {
        type: AE,
        title: "VisInPractice",
        start: 900,
        end: 1200,
        venue: RM9,
        items: []
      }, {
        type: WS,
        title: "(Vis + Prov) x Domain: Workshop on Visualization and Provenance Across Domains",
        start: 900,
        end: 1200,
        venue: RM10,
        items: [{
          organizers: `Kai Xu, Michelle Dowling, John Wenskovitch, Yilin Xia, Jeremy E Block`,
          description: `The provenance-related research interest is growing rapidly within the visualization community. This is evidenced by a dedicated provenance paper track in IEEE VIS 2022, a large number of provenance-related publications in many visualization venues, and several provenance-related workshops at IEEE VIS such as Machine Learning from User Interaction for Visualization and Analytics (MLUI), Workshop on TRust and EXpertise in Visualization (TREX), and Workshop on Visualization for AI Explainability (VISxAI). Provenance is also an established topic in several other fields, for example data lineage in database community, interaction log for user studies in Human-Computer Interaction, and workflow history for e-Science. Recently, it gained growing research attention with the recognition of the important of reproducible science.`,
          website: `https://visxprov.github.io/`
        }]
      }, {
        type: CT,
        title: "Bio+MedVis Challenges",
        start: 900,
        end: 1200,
        venue: RM11_12,
        items: [{
          organizers: `Barbora Kozlikova, Daniel Jönsson, Renata Raidou, Sean O’Donoghue`,
          website: `http://biovis.net/2023/biovisChallenges_vis/`
        }]
      },
      {
        type: TT,
        title: "TAURUS: a unified framework for creating graph layouts",
        start: 1400,
        end: 1700,
        venue: "Room 101-102",
        items: [{
          organizers: `Yunhai Wang, Oliver Deussen, Mingliang Xue, Zhi Wang`,
          description: `Graph layout is a key technique in graph visualization. There is a wide variety of techniques related to graph layout available, but there is no suitable tutorial to help new researchers understand the differences and connections between these techniques. In this tutorial, we will systematically classify existing graph layout techniques such as force-based and stress-based models and explain the connections between them. Using our framework TAURUS we will map most of them to a unified formulation, which helps to compare them. In parallel we will show the effects of the techniques by interactively generating results using our fast solver, various parameters will be edited to show the effects of the different methods. In the second part of the tutorial, we will focus on non-physical-based models such as tsNET that do not follow a physical metaphor. At the end, we will move towards machine learning for graph layouts and show various applications for graph layout.
The tutorial introduces the fundamentals and state-of-the-art of graph layout. Rooted in a theoretical perspective it introduces design concepts and algorithmic principles of a large number of graph layout methods. It will help beginners to enter the field of graph layout fast and advance their research. Our tutorial includes both course instructions as well as interactive demonstrations, participants can play around with all concepts using the TAURUS website and our library.`
        }]
      }, {
        type: TT,
        title: "Transparent Practices for Quantitative Empirical Research",
        start: 1400,
        end: 1700,
        venue: RM3,
        items: [{
          organizers: `Abhraneel Sarma, Chat Wacharamanotham, Fumeng Yang, Maryam Hedayati`,
          description: `Transparent research practices enable the research design, materials, analytic methods, and data to be thoroughly evaluated and potentially reproduced. This tutorial presents current best practices and tools that increase research transparency for VIS researchers, practitioners, and students. The tutorial will cover the most relevant concepts, guidelines, and practices in Open Science—how to transparently conduct quantitative empirical research, report the results, and share the artifacts of your research. We will also include exercises where participants will be able to apply transparent research practices.`
        }]
      }, {
        type: TT,
        title: "Design Sprints for Visualization",
        start: 1400,
        end: 1700,
        venue: RM4,
        items: [{
          organizers: `Carolina Nobre, Johanna Beyer`,
          description: `Design sprints describe a time-constrained, interdisciplinary process based on rapid prototyping and testing to define goals quickly, validate ideas, and decide on a final design. The well-defined, interactive, and time-constrained design cycle makes design sprints well-suited both for teaching active-learning-centered visualization courses and for creating visualizations in real-world settings. In this tutorial, we will conduct a complete design sprint workshop, showcasing its value both in a classroom setting and for real-world applications. The tutorial contains 5 sections, each with guided active-learning activities. The tutorial starts with a theoretical introduction to design sprints, and then progresses through each of the five stages: Map, Sketch, Decide, Prototype, and Test. Each section will explain the technique, followed by hands-on experience performing the step. We conclude the tutorial with a show-and-tell, where groups can present their final design to all participants.`
        }]
      }, {
        type: WS,
        title: "VIS4DH: 8th Workshop on Visualization for the Digital Humanities",
        start: 1400,
        end: 1700,
        venue: RM5,
        items: [{
          organizers: `Alfie Abdul-Rahman, Eric Alexander`,
          description: `The VIS4DH workshop brings together researchers and practitioners from the fields of visualization and the humanities to discuss new research directions at the intersection of visualization and (digital) humanities research.`,
          website: `http://vis4dh.dbvis.de/`
        }]
      }, {
        type: AE,
        title: "VDS: Visualization in Data Science Symposium",
        start: 1400,
        end: 1700,
        venue: RM6,
        items: [{
          website: `https://www.visualdatascience.org/2023/index.html`
        }]
      }, {
        type: WS,
        title: "VisxVision: Workshop on Novel Directions in Vision Science and Visualization Research",
        start: 1400,
        end: 1700,
        venue: RM9,
        items: [{
          organizers: `Ghulam Jilani Quadri, Clementine Zimnicki, Racquel Fygenson, Madeline Awad, Ouxun Jiang`,
          description: `Interdisciplinary research between vision science and visualization aims to provide a better scientific understanding of how people interpret visualized data. By studying the cognitive processes involved in visual perception, visualization researchers can gain insight into better-adjusting visualizations to meet user goals. Topics from vision sciences, such as memory, ensemble coding, numerical cognition, color perception, and pattern recognition, can be mapped directly to common challenges encountered in visualization research. At the same time, interacting with visualization researchers exposes vision scientists to novel challenges and research questions in their own field. Building on the growing interest in work at this intersection from both the vision science and visualization communities, this 3rd biennial workshop at IEEE VIS 2023 aims to facilitate collaboration between the vision science and visualization communities by bringing in new researchers, discussing innovative discoveries, and sharing cutting-edge research methods and proposals. Through a multi-stage format, the workshop provides a platform for diverse voices to be heard and new collaborations to be formed.`,
          website: `https://visxvision.com/`
        }]
      }, {
        type: WS,
        title: "alt.VIS 2023",
        start: 1400,
        end: 1700,
        venue: RM10,
        items: [{
          organizers: `Andrew M McNutt, Lonni Besançon, Derya Akbaba, Sara Di Bartolomeo, Victor Schetinger`,
          description: `Often the most transformative ideas and challenges come from unexpected and serendipitous sources. Yet, conferences are not often perceived as a place for non-traditional, controversial, or outré work. We propose to continue the success of the last two year’s “alt.VIS’” workshops that borrowed from the long-running and successful “alt.chi” model from the ACM SIGCHI conference. This venue will once again provide an avenue for surfacing creative or critical work that would otherwise not find a home through the standard VIS conference review process.`,
          website: `https://altvis.github.io/`
        }]
      }, {
        type: CT,
        title: "SciVis Contest",
        start: 1400,
        end: 1700,
        venue: RM11_12,
        items: [{
          organizers: `Tim Gerrits, Divya Banesh`,
          website: `https://sciviscontest2023.github.io/`
        }]
      }
    ]
  },
  {
    date: "Oct. 24, 2023", day: "Tuesday", events: [
      {
        type: CM,
        title: "VIS Welcome",
        start: 845,
        end: 900,
        venue: PL1,
        items: []
      }, {
        type: CM,
        title: "VGTC Awards",
        start: 900,
        end: 945,
        venue: PL1,
        items: []
      }, {
        type: CM,
        title: "Test of Time Awards",
        start: 945,
        end: 1030,
        venue: PL1,
        items: []
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1030,
        end: 1100,
        venue: null,
        items: []
      }, {
        type: CM,
        title: "VIS Keynote",
        start: 1100,
        end: 1200,
        venue: RM6,
        items: [{
          speakers: `Dr. Drew Berry, Anders Ynnerman`,
          title: `Visualizing the Chemistry of Life on giant 360-degree screens`,
          abstract: `Our keynote presentation will take you on a journey through the creative storytelling and technical challenges of bringing multi-scale visualizations to giant-sized fulldome screens. Our immersive 360-degree film, 'Chemistry of Life', launched in 2023, presents an ultra-high resolution stereo 8K experience that explores the life around us from what we experience every day to the hidden microscopic realms of the molecular. The production takes you on a journey into your inner universe, combining advanced scientific visualizations to bring you into the dynamic, molecular world we all carry within us. We explore the powerhouses of cells, mitochondria, and learn how chemical processes connect us to all other life forms on Earth. Throughout this presentation, we will discuss the technical and artistic challenges we faced, as well as the scientific research that informed our approach. Our hope is that this film will inspire a deeper appreciation for the world around us and encourage us all to continue exploring and learning about the mysteries of our universe.`
        }]
      }, {
        type: BK,
        title: "Lunch Break",
        start: 1200,
        end: 1400,
        venue: null,
        items: []
      }, {
        type: CM,
        title: "VIS Opening",
        start: 1400,
        end: 1420,
        venue: PL1,
        items: []
      }, {
        type: CM,
        title: "ACC Summary",
        start: 1420,
        end: 1430,
        venue: PL1,
        items: []
      }, {
        type: CM,
        title: "Best Papers 1",
        start: 1430,
        end: 1510,
        venue: PL1,
        items: [{
          chair: `Michael Wybrow`
        }, {
          authors: `Xingyu Lan, Yanqiu Wu, Nan Cao`,
          title: `Affective Visualization Design: Leveraging the Emotional Impact of Data`
        }, {
          authors: `Max Piochowiak, Carsten Dachsbacher`,
          title: `Fast Compressed Segmentation Volumes for Scientific Visualization`
        }, {
          authors: `Fumeng Yang, Mandi Cai, Chloe Rose Mortenson, Hoda Fakhari, Ayse Deniz Lokmanoglu, Jessica Hullman, Steven Franconeri, Nicholas Diakopoulos, Erik Nisbet, Matthew Kay`,
          title: `Swaying the Public? Impacts of Election Forecast Visualizations on Emotion, Trust, and Intention in the 2022 U.S. Midterms`
        }]
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1510,
        end: 1540,
        venue: null,
        items: []
      }, {
        type: CM,
        title: "Best Papers 2",
        start: 1540,
        end: 1630,
        venue: PL1,
        items: [{
          chair: `G. Elisabeta Marai`
        }, {
          authors: `Anna Offenwanger, Matthew Brehmer, Fanny Chevalier, Theophanis Tsandilas`,
          title: `TimeSplines: Sketch-based Authoring of Flexible and Idiosyncratic Timelines`
        }, {
          authors: `Egzon Miftari, Daniel Durstewitz, Filip Sadlo`,
          title: `Visualization of Discontinuous Vector Field Topology`
        }, {
          authors: `Peter Rautek, Xingdi Zhang, Bernhard Woschizka, Thomas Theussl, Markus Hadwiger`,
          title: `Vortex Lens: Interactive Vortex Core Line Extraction using Observed Line Integral Convolution`
        }, {
          authors: `Aidan Slingsby, Richard Reeve, Claire Harris`,
          title: `Gridded Glyphmaps for Supporting Spatial COVID-19 Modelling`
        }]
      },
      {
        type: CM,
        title: "VIS Poster Session (includes Associated Event Posters)",
        start: 1645,
        end: 1815,
        venue: "Foyer",
        items: posters
      },
      {
        type: CM,
        title: "VISAP Opening Reception",
        start: 1800,
        end: 2000,
        venue: "Library at the Docks",
        items: [{
          website: `https://visap.net/2023/`
        }]
      }
    ]
  },
  {
    date: "Oct. 25, 2023", day: "Wednesday", events: [
      {
        type: FP,
        title: "Image and Video",
        start: 900,
        end: 1015,
        venue: RM3,
        items: [{
          chair: `Quan Li`
        }, {
          "title": "Guided Visual Analytics for Image Selection in Time and Space",
          "authors": "Ignacio Pérez-Messina, Davide Ceneda, Silvia Miksch"
        },
        {
          "title": "An Image-based Exploration and Query System for Large Visualization Collections via Neural Image Embedding",
          "authors": "Yilin Ye, Rong Huang, Wei Zeng"
        },
        {
          "title": "Image Collage on Arbitrary Shape via Shape-Aware Slicing and Optimization",
          "authors": "Dong-Yi Wu, Thi-Ngoc-Hanh Le, Sheng-Yi Yao, Yun-Chen Lin, Tong-Yee Lee"
        },
        {
          "title": "VisImages: A Fine-Grained Expert-Annotated Visualization Dataset",
          "authors": "Dazhen Deng, Yihong Wu, Xinhuan Shu, Jiang Wu, Siwei Fu, Weiwei Cui, Yingcai Wu"
        },
        {
          "title": "A Unified Interactive Model Evaluation for Classification, Object Detection, and Instance Segmentation in Computer Vision",
          "authors": "Changjian Chen, Yukai Guo, Fengyuan Tian, Shilong Liu, Weikai Yang, Zhaowei Wang, Jing Wu, Hang Su, Hanspeter Pfister, Shixia Liu"
        },
        {
          "title": "VideoPro: A Visual Analytics Approach for Interactive Video Programming",
          "authors": "Jianben He, Xingbo Wang, Kam Kwai Wong, Xijie Huang, Changjian Chen, Zixin Chen, Fengjie Wang, Min Zhu, Huamin Qu\n"
        }]
      }, {
        type: SP,
        title: "Perception / Evaluation",
        start: 900,
        end: 1015,
        venue: RM4,
        items: [{
          chair: `Lace M. Padilla`
        }, {
          "title": "Topological Analysis and Approximate Identification of Leading Lines in Artworks Based on Discrete Morse Theory",
          "authors": "Fuminori Shibasaki, Issei Fujishiro"
        },
        {
          "title": "Effects of data distribution and granularity on color semantics for colormap data visualizations",
          "authors": "Clementine Zimnicki, Chin Tseng, Danielle Albers Szafir, Karen Schloss"
        },
        {
          "title": "Let’s Get Vis-ical: Perceptual Accuracy in Visual & Tactile Encodings",
          "authors": "Zhongzheng Xu, Emily Wall, Kristin Williams"
        },
        {
          "title": "MinMaxLTTB: Leveraging MinMax-Preselection to Scale LTTB",
          "authors": "Jeroen Van Der Donckt, Jonas Van Der Donckt, Dr. Ir. Michael Rademaker, Sofie Van Hoecke"
        },
        {
          "title": "Do You Trust What You See? Toward A Multidimensional Measure of Trust in Visualization",
          "authors": "Saugat Pandey, Oen G McKinley, R. Jordan Crouser, Alvitta Ottley"
        },
        {
          "title": "reVISit: Supporting Scalable Evaluation of Interactive Visualizations",
          "authors": "Yiren Ding, Jack Wilburn, Hilson Shrestha, Akim Ndlovu, Kiran Gadhave, Carolina Nobre, Alexander Lex, Lane Harrison"
        },
        {
          "title": "Augmented Reality for Scholarly Publication of 3D Visualizations in Astronomy: An Empirical Evaluation",
          "authors": "Jane L. Adams, Laura South, Arzu Çöltekin, Alyssa Goodman, Michelle A. Borkin"
        },
        {
          "title": "Comparing Morse Complexes Using Optimal Transport: An Experimental Study",
          "authors": "Mingzhe Li, Carson Storm, Austin Yang Li, Tom Needham, Bei Wang Phillips\n"
        }]
      }, {
        type: FP,
        title: "Storytelling",
        start: 900,
        end: 1015,
        venue: RM5,
        items: [{
          chair: `Bongshin Lee`
        }, {
          "title": "From Invisible to Visible: Impacts of Metadata in Communicative Data Visualization",
          "authors": "Alyxander Burns, Christiana Lee, Thai On, Cindy Xiong Bearfield, Evan Peck, Narges Mahyar"
        },
        {
          "title": "ScrollyVis: Interactive Visual Authoring of Guided Dynamic Narratives for Scientific Scrollytelling",
          "authors": "Eric Moerth, Stefan Bruckner, Noeska N. Smit"
        },
        {
          "title": "Character-Oriented Design for Visual Data Storytelling",
          "authors": "Keshav Dasu, Yun-Hsin Kuo, Kwan-Liu Ma"
        },
        {
          "title": "Data Player: Automatic Generation of Data Videos with Narration-Animation Interplay",
          "authors": "Leixian Shen, yizhi zhang, Haidong Zhang, Yun Wang"
        },
        {
          "title": "EmphasisChecker: A Tool for Guiding Chart and Caption Emphasis",
          "authors": "Dae Hyun Kim, Seulgi Choi, Juho Kim, Vidya Setlur, Maneesh Agrawala"
        },
        {
          "title": "Socrates: Data Story Generation via Adaptive Machine-Guided Elicitation of User Feedback",
          "authors": "Guande Wu, Shunan Guo, Jane Hoffswell, Gromit Yeuk-Yin Chan, Ryan Rossi, Eunyee Koh\n"
        }]
      }, {
        type: FP,
        title: "High Dimensional Data",
        start: 900,
        end: 1015,
        venue: RM6,
        items: [{
          chair: `Helwig Hauser`
        }, {
          "title": "A Parallel Framework for Streaming Dimensionality Reduction",
          "authors": "Jiazhi Xia, Linquan Huang, Yiping Sun, Zhiwei Deng, Xiaolong (Luke) Zhang, Minfeng Zhu"
        },
        {
          "title": "QEVIS: Multi-grained Visualizing of Distributed Query Execution",
          "authors": "Qiaomu Shen, Zhengxin You, Xiao Yan, Chaozu Zhang, Ke Xu, Jianbin Qin, Dan Zeng, Bo Tang"
        },
        {
          "title": "EVNet: An Explainable Deep Network for Dimension Reduction",
          "authors": "Zelin Zang, Shenghui Cheng, Linyan Lu, Hanchen Xia, Liangyu Li, Yaoting Sun, Yongjie Xu, Lei Shang, Baigui Sun, Stan Z. Li"
        },
        {
          "title": "FS/DS: A Theoretical Framework for the Dual Analysis of Feature Space and Data Space",
          "authors": "Frederik L. Dennig, Matthias Miller, Daniel A. Keim, Mennatallah El-Assady"
        },
        {
          "title": "Class-constrained t-SNE: Combining Data Features and Class Probabilities",
          "authors": "Linhao Meng, Stef van den Elzen, Nicola Pezzotti, Anna Vilanova"
        },
        {
          "title": "ManiVault: A Flexible and Extensible Visual Analytics Framework for High-Dimensional Data",
          "authors": "Alexander Vieth, Thomas Kroes, Julian Thijssen, Baldur van Lew, Jeroen Eggermont, Soumyadeep Basu, Elmar Eisemann, Anna Vilanova, Thomas Höllt, Boudewijn Lelieveldt\n"
        }]
      }, {
        type: FP,
        title: "VIS for Data Scientists",
        start: 900,
        end: 1015,
        venue: RM9,
        items: [{
          chair: `Kate Isaacs`
        }, {
          "title": "Are Metrics Enough? Guidelines for Communicating and Visualizing Predictive Models to Subject Matter Experts",
          "authors": "Ashley Suh, Gabriel Appleby, Erik W. Anderson, Luca Finelli, Remco Chang, Dylan Cashman"
        },
        {
          "title": "Dataopsy: Scalable and Fluid Visual Exploration using Aggregate Query Sculpting",
          "authors": "Md Naimul Hoque, Niklas Elmqvist"
        },
        {
          "title": "Dead or Alive: Continuous Data Profiling for Interactive Data Science",
          "authors": "Will Epperson, Vaishnavi Gorantla, Dominik Moritz, Adam Perer"
        },
        {
          "title": "EVM: Incorporating Model Checking into Exploratory Visual Analysis",
          "authors": "Alex Kale, Ziyang Guo, xiaoli Qiao, Jeffrey Heer, Jessica Hullman"
        },
        {
          "title": "VISPUR: Visual Aids for Identifying and Interpreting Spurious Associations in Data-Driven Decisions",
          "authors": "Xian Teng, Yongsu Ahn, Yu-Ru Lin"
        },
        {
          "title": "Visualization According to Statisticians: An Interview Study on the Role of Visualization for Inferential Statistics",
          "authors": "Eric Newburger, Niklas Elmqvist\n"
        }]
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1015,
        end: 1045,
        venue: null,
        items: []
      }, {
        type: PN,
        title: "What is a Visual Analytics contribution, and how is it changing?",
        start: 1045,
        end: 1200,
        venue: RM1_2,
        items: [{
          organizers: `Mennatallah El-Assady (ETH Zürich), Jürgen Bernard (University of Zurich)`,
          panelists: `Benjamin Bach (University of Edinburgh), Rita Borgo (King’s College Londin), Leilani Battle (University of Washington), Alex Lex (University of Utah), Matthew Brehmer (Tableau Research), Emily Wall (Emory University)`,
          description: `Existing characterizations of Visual Analytics (VA) echo the strengths of combining interactive visual data representations and algorithmic models to enable humans making data-driven decisions effectively. For about 20 years, VA was one of three pillars in the interactive data analysis and visualization (VIS) community. Generation after generation, the VA community has evolved its understanding of research problems and, along the way, contributed various techniques, applications, and research methods. While some developed techniques have stood the test of time, we will consider what else needs to be remembered or even revitalized from the good old days in this panel. Further, VA is currently facing exciting times, with great changes and trends within and outside the community. In this panel, we want to analyze current research trends in VA and discuss our most exciting ideas and directions. Looking ahead, it can already be anticipated that the future of VA is subject to change. Following productive and successful panels at EuroVA 2023 and EuroVis 2023, in this panel, we want to continue mapping out future research directions for our community, with an emphasis on VA. Along the lines of the past, the present, and the future of VA, the guiding theme of our interactive panel will be three types of (provoking) statements: (i) In the good old days, I liked when we did … (ii) Currently, a most exciting trend is … & (iii) In the future, we will be doing … Come and join us to reflect on past and present trends, daring a look ahead to an exciting future for the interactive data analysis and visualization community!`
        }]
      }, {
        type: AE,
        title: "VISAP Session 1",
        start: 1045,
        end: 1200,
        venue: RM3,
        items: [{
          website: `https://visap.net/2023`
        }]
      }, {
        type: IPP,
        title: "CG&A: Systems, Techniques, and Applications",
        start: 1045,
        end: 1200,
        venue: RM4,
        items: [{
          chair: `Alexander Lex`
        }, {
          "title": "Giga Graph Cities: Their Buckets, Buildings, Waves, and Fragments",
          "authors": "James Abello, Haoyang Zhang, Daniel Nakhimovich, Chengguizi Han, Mridul Aanjaneya"
        },
        {
          "title": "Narrative In Situ Visual Analysis for Large-Scale Ocean Eddy Evolution",
          "authors": "Xiaoyang Han, Xiaomin Yu, Guan Li, Jun Liu, Ying Zhao, Guihua Shan"
        },
        {
          "title": "Technology Trends and Challenges for Large-Scale Scientific Visualization",
          "authors": "James Ahrens"
        },
        {
          "title": "SUBPLEX: A Visual Analytics Approach to Understand Local Model Explanations at the Subpopulation Level",
          "authors": "Jun Yuan, Gromit Yeuk-Yin Chan, Brian Barr, Kyle Overton, Kim Rees, Luis Gustavo Nonato, Enrico Bertini, Claudio Silva"
        },
        {
          "title": "A Multiscale Geospatial Dataset and an Interactive Visualization Dashboard for Computational Epidemiology and Open Scientific Research",
          "authors": "Muhammad Usman, Honglu Zhou, Seonghyeon Moon, Xun Zhang, Petros Faloutsos, Mubbasir Kapadia\n"
        }]
      }, {
        type: FP,
        title: "Layout Algorithms (Full+Short)",
        start: 1045,
        end: 1200,
        venue: RM5,
        items: [{
          chair: `Helen Purchase`
        }, {
          "title": "A Scalable Method for Readable Tree Layouts",
          "authors": "Kathryn Gray, Mingwei Li, Reyan Ahmed, Md. Khaledur Rahman, Ariful Azad, Stephen Kobourov, Katy Börner"
        },
        {
          "title": "Force-directed graph layouts revisited: a new force based on the t-Distribution",
          "authors": "Fahai Zhong, Mingliang Xue, Jian Zhang, Rui Ban, Oliver Deussen, Yunhai Wang"
        },
        {
          "title": "Target Netgrams: An Annulus-constrained Stress Model for Radial Graph Visualization",
          "authors": "Mingliang Xue, Yunhai Wang, Chang Han, Jian Zhang, Zheng Wang, Kaiyi Zhang, Christophe Hurter, Jian Zhao, Oliver Deussen"
        },
        {
          "title": "Cluster-Aware Grid Layout",
          "authors": "Yuxing Zhou, Weikai Yang, Jiashu Chen, Changjian Chen, Zhiyang Shen, Xiaonan Luo, Lingyun Yu, Shixia Liu"
        },
        {
          "title": "Radial Icicle Tree (RIT): Node Separation and Area Constancy",
          "authors": "Yuanzhe Jin, Tim de Jong, Martijn Tennekes, Min Chen"
        },
        {
          "title": "Projection Ensemble: Visualizing the Robust Structures of Multidimensional Projections (VIS Short Paper)",
          "authors": "Myeongwon Jung, Jiwon Choi, Jaemin Jo\n"
        }]
      }, {
        type: FP,
        title: "LLMs and Generative Models",
        start: 1045,
        end: 1200,
        venue: RM6,
        items: [{
          chair: `Vidya Setlur`
        }, {
          "title": "AttentionViz: A Global View of Transformer Attention",
          "authors": "Catherine Yeh, Yida Chen, Aoyu Wu, Cynthia Chen, Fernanda Viegas, Martin Wattenberg"
        },
        {
          "title": "PhraseMap: Attention-based Keyphrases Recommendation for Information Seeking",
          "authors": "Yamei Tu, Rui Qiu, Yu-Shuen Wang, Po-Yin Yen, Han-Wei Shen"
        },
        {
          "title": "Visual Explanation for Open-domain Question Answering with BERT",
          "authors": "Zekai Shao, Shuran Sun, Yuheng Zhao, Siyuan Wang, Zhongyu Wei, Tao Gui, Cagatay Turkay, Siming Chen"
        },
        {
          "title": "CommonsenseVIS: Visualizing and Understanding Commonsense Reasoning Capabilities of Natural Language Models",
          "authors": "Xingbo Wang, Renfei Huang, Zhihua Jin, Tianqing Fang, Huamin Qu"
        },
        {
          "title": "Let the Chart Spark: Embedding Semantic Context into Chart with Generative Model",
          "authors": "Shishi Xiao, Suizi Huang, Yue LIN, Yilin Ye, Wei Zeng"
        },
        {
          "title": "PromptMagician: Interactive Prompt Engineering for Text-to-Image Creation",
          "authors": "Yingchaojie Feng, Xingbo Wang, Kam Kwai Wong, Sijia Wang, Yuhong Lu, Minfeng Zhu, Baicheng Wang, Wei Chen\n"
        }]
      }, {
        type: FP,
        title: "Trust and Bias",
        start: 1045,
        end: 1200,
        venue: RM9,
        items: [{
          chair: `Evanthia Dimara`
        }, {
          "title": "Reasoning Affordances with Tables and Bar Charts",
          "authors": "Cindy Xiong Bearfield, Elsie Lee-Robbins, Icy Zhang, Aimen Gaba, Steven L Franconeri"
        },
        {
          "title": "Average Estimates in Line Graphs are Biased Towards Areas of Higher Variability",
          "authors": "Dominik Moritz, Lace M. Padilla, Francis Nguyen, Steven L Franconeri"
        },
        {
          "title": "Eleven Years of Gender Data Visualization: Towards more Inclusive Gender Representation",
          "authors": "Florent Cabric, Margret Vilborg Bjarnadottir, Meng Ling, Gudbjörg Linda Rafnsdóttir, Petra Isenberg"
        },
        {
          "title": "My Model is Unfair, Do People Even Care? Visual Design Affects Trust and Perceived Bias in Machine Learning",
          "authors": "Aimen Gaba, Zhanna Kaufman, Jason Cheung, Marie Shvakel, Kyle Wm Hall, Yuriy Brun, Cindy Xiong Bearfield"
        },
        {
          "title": "The Rational Agent Benchmark for Data Visualization",
          "authors": "Yifan Wu, Ziyang Guo, Michalis Mamakos, Jason Hartline, Jessica Hullman"
        },
        {
          "title": "Vistrust: a Multidimensional Framework and Empirical Study of Trust in Data Visualizations",
          "authors": "Hamza Elhamdadi, Adam Stefkovics, Johanna Beyer, Eric Moerth, Hanspeter Pfister, Cindy Xiong Bearfield, Carolina Nobre\n"
        }]
      }, {
        type: CM,
        title: "VIS Town Hall",
        start: 1200,
        end: 1330,
        venue: RM5,
        items: []
      }, {
        type: BK,
        title: "Lunch Break",
        start: 1200,
        end: 1400,
        venue: null,
        items: []
      }, {
        type: FP,
        title: "Dashboards & Multiple Views",
        start: 1400,
        end: 1515,
        venue: RM3,
        items: [{
          chair: `Jonathan C Roberts`
        }, {
          "title": "DMiner: Dashboard Design Mining and Recommendation",
          "authors": "Yanna Lin, Haotian Li, Aoyu Wu, Yong Wang, Huamin Qu"
        },
        {
          "title": "Revisiting the Design Patterns of Composite Visualizations",
          "authors": "Dazhen Deng, Weiwei Cui, Xiyu Meng, Mengye Xu, Yu Liao, Haidong Zhang, Yingcai Wu"
        },
        {
          "title": "Semi-Automatic Layout Adaptation for Responsive Multiple-View Visualization Design",
          "authors": "Wei Zeng, Xi Chen, Yihan Hou, Lingdan Shao, Zhe Chu, Remco Chang"
        },
        {
          "title": "From Information to Choice: A Critical Inquiry Into Visualization Tools for Decision Making",
          "authors": "Emre Oral, Ria Chawla, Michel Wijkstra, Narges Mahyar, Evanthia Dimara"
        },
        {
          "title": "Heuristics for Supporting Cooperative Dashboard Design",
          "authors": "Vidya Setlur, Michael Correll, Arvind Satyanarayan, Melanie Tory"
        },
        {
          "title": "Transitioning to a Commercial Dashboarding System: Socio-technical Observations and Opportunities",
          "authors": "Conny Walchshofer, Vaishali Dhanoa, Marc Streit, Miriah Meyer\n"
        }]
      }, {
        type: SP,
        title: "Scientific Visualization",
        start: 1400,
        end: 1515,
        venue: RM4,
        items: [{
          chair: `Paul Rosen`
        }, {
          "title": "Visualizing Query Traversals Over Bounding Volume Hierarchies Using Treemaps",
          "authors": "Abhishek Madan, Carolina Nobre"
        },
        {
          "title": "Visual Analysis of Large Multi-Field AMR Data on GPUs Using Interactive Volume Lines",
          "authors": "Stefan Zellmann, Serkan Demirci, Ugur Gudukbay"
        },
        {
          "title": "Fast Fiber Line Extraction for 2D Bivariate Scalar Fields",
          "authors": "Felix Raith, Baldwin Nsonga, Gerik Scheuermann, Christian Heine"
        },
        {
          "title": "GeneticFlow: Exploring Scholar Impact with Interactive Visualization",
          "authors": "Fengli Xiao, Lei Shi"
        },
        {
          "title": "Visualizing Similarity of Pathline Dynamics in 2D Flow Fields",
          "authors": "Baldwin Nsonga, Gerik Scheuermann"
        },
        {
          "title": "Evaluation of cinematic volume rendering open-source and commercial solutions for the exploration of congenital heart data",
          "authors": "Irum Baseer, Israel Valverde, Abdel H. Moustafa, Josep Blat, Oscar Camara"
        },
        {
          "title": "ExoplanetExplorer: Contextual Visualization of Exoplanet Systems",
          "authors": "Emma Broman, Jacqueline Faherty, Laura Kreidberg, Sebastian Zieba, Charles Hansen, Anders Ynnerman, Alexander Bock"
        },
        {
          "title": "A Visualization System for Hexahedral Mesh Quality Study",
          "authors": "Lei Si, Guoning Chen\n"
        }]
      }, {
        type: FP,
        title: "Grammars",
        start: 1400,
        end: 1515,
        venue: RM5,
        items: [{
          chair: `Dominik Moritz`
        }, {
          "title": "Visual Analytics for Understanding Draco’s Knowledge Base",
          "authors": "Johanna Schmidt, Bernhard Pointner, Silvia Miksch"
        },
        {
          "title": "DIVI: Dynamically Interactive Visualization",
          "authors": "Luke S. Snyder, Jeffrey Heer"
        },
        {
          "title": "ggdist: Visualizations of Distributions and Uncertainty in the Grammar of Graphics",
          "authors": "Matthew Kay"
        },
        {
          "title": "Metrics-Based Evaluation and Comparison of Visualization Notations",
          "authors": "Nicolas Kruchten, Andrew M McNutt, Michael McGuffin"
        },
        {
          "title": "Mosaic: An Architecture for Scalable & Interoperable Data Views",
          "authors": "Jeffrey Heer, Dominik Moritz"
        },
        {
          "title": "Mystique: Deconstructing SVG Charts for Layout Reuse",
          "authors": "Chen Chen, Bongshin Lee, Yunhai Wang, Yunjeong Chang, Zhicheng Liu\n"
        }]
      }, {
        type: FP,
        title: "Immersive Analytics and Virtual Reality",
        start: 1400,
        end: 1515,
        venue: RM6,
        items: [{
          chair: `Dieter Schmalstieg`
        }, {
          "title": "VIRD: Immersive Match Video Analysis for High-Performance Badminton Coaching",
          "authors": "Tica Lin, Alexandre Aouididi, Zhutian Chen, Johanna Beyer, Hanspeter Pfister, Jui-Hsien Wang"
        },
        {
          "title": "Visual Cue Effects on a Classification Accuracy Estimation Task in Immersive Scatterplots",
          "authors": "Fumeng Yang, James Tompkin, Lane Harrison, David H. Laidlaw"
        },
        {
          "title": "2D, 2.5D, or 3D? An Exploratory Study on Multilayer Network Visualisations in Virtual Reality",
          "authors": "Stefan Paul Feyer, Bruno Pinaud, Stephen Kobourov, Nicolas Brich, Michael Krone, Andreas Kerren, Michael Behrisch, Falk Schreiber, Karsten Klein"
        },
        {
          "title": "MeTACAST: Target- and Context-aware Spatial Selection in VR",
          "authors": "Lixiang Zhao, Tobias Isenberg, Fuqi Xie, Hai-Ning Liang, Lingyun Yu"
        },
        {
          "title": "Unraveling the Design Space of Immersive Analytics: A Systematic Review",
          "authors": "David Saffo, Sara Di Bartolomeo, Tarik Crnovrsanin, Laura South, Justin Raynor, Caglar Yildirim, Cody Dunne"
        },
        {
          "title": "Wizualization: A “Hard Magic” Visualization System for Immersive and Ubiquitous Analytics",
          "authors": "Andrea Batch, Peter William Scott Butcher, Panagiotis D. Ritsos, Niklas Elmqvist\n"
        }]
      }, {
        type: FP,
        title: "Visualization for Humanities and Social Sciences",
        start: 1400,
        end: 1515,
        venue: RM9,
        items: [{
          chair: `Thomas Chandler`
        }, {
          "title": "InnovationInsights: A Visual Analytics Approach for Understanding the Dual Frontiers between Science and Technology",
          "authors": "Yifang Wang, Yifan Qian, Xiaoyu Qi, Nan Cao, Dashun Wang"
        },
        {
          "title": "LiberRoad: Probing into the Journey of Chinese Classics through Visual Analytics",
          "authors": "Yuhan Guo, Yuchu Luo, Keer Lu, Linfang Li, haizheng Yang, Xiaoru Yuan"
        },
        {
          "title": "Visualizing Historical Book Trade Data: An Iterative Design Study with Close Collaboration with Domain Experts",
          "authors": "Yiwen Xing, Cristina Dondi, Rita Borgo, Alfie Abdul-Rahman"
        },
        {
          "title": "OldVisOnline: Curating a Dataset of Historical Visualizations",
          "authors": "Yu Zhang, Ruike Jiang, Liwenhan Xie, Yuheng Zhao, Can Liu, Tianhong Ding, Siming Chen, Xiaoru Yuan"
        },
        {
          "title": "What Exactly is an Insight? A Literature Review (VIS Short Paper)",
          "authors": "Leilani Battle, Alvitta Ottley"
        },
        {
          "title": "WhaleVis: Visualizing the History of Commercial Whaling (VIS Short Paper)",
          "authors": "Ameya B Patil, Zoe Rand, Trevor Branch, Leilani Battle\n"
        }]
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1515,
        end: 1545,
        venue: null,
        items: []
      }, {
        type: PN,
        title: "Establishing and Thriving in an Academic Career",
        start: 1545,
        end: 1700,
        venue: RM1_2,
        items: [{
          organizers: `Carolina Nobre (University of Toronto), Cindy Xiong (University of Massachusetts), Joshua A Levine (University of Arizona), Emily Wall (Emory University), Dominik Moritz (Carnegie Mellon University), Evanthia Dimara (Utrecht University)`,
          panelists: `Leni Yang (Hong Kong University of Science and Technology), Cindy Xiong (University of Massachusetts Amherst), Dominik Moritz (Carnegie Mellon University), Joshua A Levine (University of Arizona), Evanthia Dimara (Utrecht University)`,
          description: `In this panel, we will discuss academic life and share advice and experience around navigating the complexities of an academic career. These are important for the whole community to reflect more broadly and are particularly inspirational for early career researchers and students. The panelists include a broad spectrum of academics, which includes researchers in the US, Canada, and Europe, from small private schools to larger public institutions, and both pre-and post-tenure. The panel will discuss common challenges in being an academic including their own experiences in handling these challenges. Topics will include managing the amount of freedom often afforded by a faculty position, pushing back against the eternal pursuit of ”work-life balance”, particularly for women, navigating interdisciplinary collaborations, and considerations beyond CS rankings when choosing an academic home.`
        }]
      }, {
        type: SP,
        title: "CoVID-19 / Bioinformatics / Visual Analytics",
        start: 1545,
        end: 1700,
        venue: RM4,
        items: [{
          chair: `Alfie Abdul-Rahman`
        }, {
          "title": "The Role of Visualization in Genomics Data Analysis Workflows: The Interviews",
          "authors": "Sehi L’Yi, Qianwen Wang, Nils Gehlenborg"
        },
        {
          "title": "Vis-SPLIT: Interactive Hierarchical Modeling for mRNA Expression Classification",
          "authors": "Braden Roper, James C. Mathews, Saad Nadeem, Ji Hwan Park"
        },
        {
          "title": "Enabling Multimodal User Interactions for Genomics Visualization Creation",
          "authors": "Qianwen Wang, Xiao Liu, Man Qing Liang, Sehi L’Yi, Nils Gehlenborg"
        },
        {
          "title": "Simulating the Geometric Growth of the Marine Sponge Crella Incrustans",
          "authors": "Josh O’Hagan, Andrew Chalmers, Taehyun James Rhee"
        },
        {
          "title": "How “Applied” is Fifteen Years of VAST conference?",
          "authors": "Lei Shi, Lei Xia, Zipeng Liu, Ye Sun, Huijie Guo, Klaus Mueller"
        },
        {
          "title": "CLEVER: A Framework for Connecting Lived Experiences with Visualisation of Electronic Records",
          "authors": "Mai Elshehaly, Lucy H Eddy, Mark Mon-Williams"
        },
        {
          "title": "Design of an Ecological Visual Analytics Interface for Operators of Time-Constant Processes",
          "authors": "Elmira Zohrevandi, Emmanuel Brorsson, Andreas Darnell, Magnus Bång, Jonas Lundberg, Anders Ynnerman\n"
        }]
      }, {
        type: FP,
        title: "Graph Visualization",
        start: 1545,
        end: 1700,
        venue: RM5,
        items: [{
          chair: `Daniel Archambault`
        }, {
          "title": "Calliope-Net: Automatic Generation of Graph Data Facts via Annotated Node-link Diagrams",
          "authors": "Qing Chen, Nan Chen, Wei Shuai, Guande Wu, Zhe Xu, Hanghang Tong, Nan Cao"
        },
        {
          "title": "Quantivine: A Visualization Approach for Large-scale Quantum Circuit Representation and Analysis",
          "authors": "Zhen Wen, Yihan Liu, Siwei Tan, Jieyi Chen, Minfeng Zhu, Dongming Han, Jianwei Yin, Mingliang Xu, Wei Chen"
        },
        {
          "title": "GraphDecoder: Recovering Diverse Network Graphs from Visualization Images via Attention-Aware Learning",
          "authors": "Sicheng Song, Chenhui Li, Dong Li, Jaunting Chen, Changbo Wang"
        },
        {
          "title": "Influence Maximization with Visual Analytics",
          "authors": "Alessio Arleo, Walter Didimo, Giuseppe Liotta, Silvia Miksch, Fabrizio Montecchiani"
        },
        {
          "title": "Knowledge Graphs in Practice: Characterizing their Users, Challenges, and Visualization Opportunities",
          "authors": "Harry Li, Gabriel Appleby, Camelia D. Brumar, Remco Chang, Ashley Suh"
        },
        {
          "title": "Scalable Hypergraph Visualization",
          "authors": "Peter D Oliver, Eugene Zhang, Yue Zhang\n"
        }]
      }, {
        type: FP,
        title: "Education and Assessment",
        start: 1545,
        end: 1700,
        venue: RM6,
        items: [{
          chair: `Niklas Elmqvist`
        }, {
          "title": "SpeechMirror: A Multimodal Visual Analytics System for Personalized Reflection of Online Public Speaking Effectiveness",
          "authors": "Zeyuan Huang, Qiang He, Kevin Maher, Xiaoming Deng, Yu-Kun Lai, Cuixia Ma, Shengfeng Qin, Yong-Jin Liu, Hongan Wang"
        },
        {
          "title": "VisGrader: Automatic Grading of D3 Visualizations",
          "authors": "Matthew Hull, Vivian Pednekar, Hannah Murray, Nimisha Roy, Emmanuel Tung, Susanta Kumar Routray, Connor Guerin, Justin Lu Chen, Zijie J. Wang, Seongmin Lee, Max Mahdi Roozbahani, Duen Horng Chau"
        },
        {
          "title": "Anchorage: Visual Analysis of Satisfaction in Customer Service Videos via Anchor Events",
          "authors": "Kam Kwai Wong, Xingbo Wang, Yong Wang, Jianben He, Rong Zhang, Huamin Qu"
        },
        {
          "title": "Adaptive Assessment of Visualization Literacy",
          "authors": "Yuan Cui, Lily W. Ge, Yiren Ding, Fumeng Yang, Lane Harrison, Matthew Kay"
        },
        {
          "title": "Causality-Based Visual Analysis of Questionnaire Responses",
          "authors": "Renzhong Li, Weiwei Cui, Tianqi Song, Xiao Xie, Rui Ding, Yun Wang, Haidong Zhang, Hong Zhou, Yingcai Wu"
        },
        {
          "title": "Challenges and Opportunities in Data Visualization Education: A Call to Action",
          "authors": "Benjamin Bach, Mandy Keck, Fateme Rajabiyazdi, Tatiana Losev, Isabel Meirelles, Jason Dykes, Robert S. Laramee, Mashael AlKadi, Christina Stoiber, Samuel Huron, Charles Perin, Luiz Morais, Wolfgang Aigner, Doris Kosminsky, Magdalena Boucher, Søren Knudsen, Areti Manataki, Jan Aerts, Uta Hinrichs, Jonathan C Roberts, Sheelagh Carpendale\n"
        }]
      }, {
        type: FP,
        title: "VIS for ML",
        start: 1545,
        end: 1700,
        venue: RM9,
        items: [{
          chair: `Shixia Liu`
        }, {
          "title": "A Comparative Visual Analytics Framework for Evaluating Evolutionary Processes in Multi-objective Optimization",
          "authors": "Yansong Huang, Zherui Zhang, Ao Jiao, Yuxin Ma, Ran Cheng"
        },
        {
          "title": "The Transform-and-Perform framework: Explainable deep learning beyond classification",
          "authors": "Vidya Prasad, Ruud J. G. van Sloun, Stef van den Elzen, Anna Vilanova, Nicola Pezzotti"
        },
        {
          "title": "Visual Exploration of Machine Learning Model Behavior with Hierarchical Surrogate Rule Sets",
          "authors": "Jun Yuan, Brian Barr, Kyle Overton, Enrico Bertini"
        },
        {
          "title": "Are We Closing the Loop Yet? Gaps in the Generalizability of VIS4ML Research",
          "authors": "Hariharan Subramonyam, Jessica Hullman"
        },
        {
          "title": "Explore Your Network in Minutes: A Rapid Prototyping Toolkit for Understanding Neural Networks with Visual Analytics",
          "authors": "Shaoxuan Lai, Wanna Luan, Jun Tao"
        },
        {
          "title": "OW-Adapter: Human-Assisted Open-World Object Detection with a Few Examples",
          "authors": "Suphanut Jamonnak, Jiajing Guo, Wenbin He, Liang Gou, Liu Ren\n"
        }]
      }, {
        type: CM,
        title: "VIS Banquet",
        start: 1800,
        end: 2200,
        venue: "Grazelands and Melbourne Planetarium Screenings",
        items: [
          { note: "Transport on your own / via Public Transport Victoria (PTV) using your Myki card (provided at registration)" }
        ]
      }
    ]
  },
  {
    date: "Oct. 26, 2023", day: "Thursday", events: [
      {
        type: FP,
        title: "Visualization for the Physical Sciences",
        start: 900,
        end: 1015,
        venue: RM3,
        items: [{
          chair: `Markus Hadwiger`
        }, {
          "title": "Dr. KID: Direct Remeshing and K-set Isometric Decomposition for Scalable Physicalization of Organic Shapes",
          "authors": "Dawar Khan, Ciril Bohak, Ivan Viola"
        },
        {
          "title": "Extract and Characterize Hairpin Vortices in Turbulent Flows",
          "authors": "Adeel Zafar, Di Yang, Guoning Chen"
        },
        {
          "title": "MolSieve: A Progressive Visual Analytics System for Molecular Dynamics Simulations",
          "authors": "Rostyslav Hnatyshyn, Jieqiong Zhao, Danny Perez, James Ahrens, Ross Maciejewski"
        },
        {
          "title": "ProWis: A Visual Approach for Building, Managing, and Analyzing Weather Simulation Ensembles at Runtime",
          "authors": "Carolina Veiga Ferreira de Souza, Suzanna Maria Bonnet, Daniel de Oliveira, Marcio Cataldi, Fabio Miranda, Marcos Lage"
        },
        {
          "title": "Vimo: Visual Analysis of Neuronal Connectivity Motifs",
          "authors": "Jakob Troidl, Simon Alexander Warchol, Jinhan Choi, Jordan Matelsky, Nagaraju Dhanyasi, Xueying Wang, Brock Wester, Donglai Wei, Jeff Lichtman, Hanspeter Pfister, Johanna Beyer"
        },
        {
          "title": "Visual Analysis of Displacement Processes in Porous Media using Spatio-Temporal Flow Graphs",
          "authors": "Alexander Straub, Nikolaos Karadimitriou, Guido Reina, Steffen Frey, Holger Steeb, Thomas Ertl\n"
        }]
      }, {
        type: FP,
        title: "Clustering & Scatterplots",
        start: 900,
        end: 1015,
        venue: RM4,
        items: [{
          chair: `John Wenskovitch`
        }, {
          "title": "Automatic Scatterplot Design Optimization for Clustering Identification",
          "authors": "Ghulam Jilani Quadri, Jennifer Adorno Nieves, Brenton Wiernik, Paul Rosen"
        },
        {
          "title": "Interactive Subspace Cluster Analysis Guided by Semantic Attribute Associations",
          "authors": "Salman Mahmood, Klaus Mueller"
        },
        {
          "title": "Investigating the Visual Utility of Differentially Private Scatterplots",
          "authors": "Liudas Panavas, Tarik Crnovrsanin, Jane Adams, Jonathan Ullman, Ali Sargavad, Melanie Tory, Cody Dunne"
        },
        {
          "title": "CLAMS: Cluster Ambiguity Measure for Estimating Perceptual Variability in Visual Clustering",
          "authors": "Hyeon Jeon, Ghulam Jilani Quadri, Hyunwook Lee, Paul Rosen, Danielle Albers Szafir, Jinwook Seo"
        },
        {
          "title": "Classes are not Clusters: Improving Label-based Evaluation of Dimensionality Reduction",
          "authors": "Hyeon Jeon, Yun-Hsin Kuo, Michael Aupetit, Kwan-Liu Ma, Jinwook Seo"
        },
        {
          "title": "Guaranteed Visibility in Scatterplots with Tolerance",
          "authors": "Loann Giovannangeli, Frédéric Lalanne, Romain Giot, Romain Bourqui\n"
        }]
      }, {
        type: FP,
        title: "Color and Accessibility",
        start: 900,
        end: 1015,
        venue: RM5,
        items: [{
          chair: `Karen Schloss`
        }, {
          "title": "Rainbow Colormaps: What are they good and bad for?",
          "authors": "Khairi Reda"
        },
        {
          "title": "Sensemaking Sans Power: Interactive Data Visualization Using Color-Changing Ink",
          "authors": "Biswaksen Patnaik, Huaishu Peng, Niklas Elmqvist"
        },
        {
          "title": "Data Navigator: An accessibility-centered data navigation toolkit",
          "authors": "Frank Elavsky, Lucas Nadolskis, Dominik Moritz"
        },
        {
          "title": "NL2Color: Refining Color Palettes for Charts with Natural Language",
          "authors": "Chuhan Shi, Weiwei Cui, Chengzhong Liu, Chengbo Zheng, Haidong Zhang, Qiong Luo, Xiaojuan Ma"
        },
        {
          "title": "Reducing Ambiguity in Line-based Density Plots by Image-space Colorization",
          "authors": "Yumeng Xue, Patrick Paetzold, Rebecca Kehlbeck, Bin Chen, Kin Chung Kwan, Yunhai Wang, Oliver Deussen"
        },
        {
          "title": "TactualPlot: Spatializing Data as Sound using Sensory Substitution for Touchscreen Accessibility",
          "authors": "Pramod Chundury, Yasmin Reyazuddin, J. Bern Jordan, Jonathan Lazar, Niklas Elmqvist\n"
        }]
      }, {
        type: FP,
        title: "Sports and Spatial Management",
        start: 900,
        end: 1015,
        venue: RM6,
        items: [{
          chair: `Charles Perin`
        }, {
          "title": "FSLens: A Visual Analytics Approach to Evaluating and Optimizing the Spatial Layout of Fire Stations",
          "authors": "Longfei Chen, He Wang, Yang Ouyang, Yang Zhou, Naiyu Wang, Quan Li"
        },
        {
          "title": "HoopInSight: Analyzing and Comparing Basketball Shooting Performance Through Visualization",
          "authors": "Yu Fu, John Stasko"
        },
        {
          "title": "SkiVis: Visual Exploration and Route Planning in Ski Resorts",
          "authors": "Julius Rauscher, Raphael Buchmüller, Daniel Keim, Matthias Miller"
        },
        {
          "title": "Analysis of Wildfire Visualization Systems for Research and Training: Are They up for the Challenge of the Current State of Wildfires?",
          "authors": "Carlos A. Tirado Cortes, Susanne Thurow, Alex Ong, Jason J. Sharples, Tomasz Bednarz, Grant Stevens, Dennis Del Favero"
        },
        {
          "title": "Team-Builder: Toward More Effective Lineup Selection in Soccer",
          "authors": "Anqi Cao, Ji Lan, Xiao Xie, Hongyu Chen, Xiaolong (Luke) Zhang, Hui Zhang, Yingcai Wu"
        },
        {
          "title": "Action-Evaluator: A Visualization Approach for Player Action Evaluation in Soccer",
          "authors": "Anqi Cao, Xiao Xie, Mingxu Zhou, Hui Zhang, Mingliang Xu, Yingcai Wu\n"
        }]
      }, {
        type: FP,
        title: "Natural Language",
        start: 900,
        end: 1015,
        venue: RM9,
        items: [{
          chair: `Andreas Kerren`
        }, {
          "title": "TransforLearn: Interactive Visual Tutorial for the Transformer Model",
          "authors": "Lin Gao, Zekai Shao, Ziqin LUO, Haibo Hu, Cagatay Turkay, Siming Chen"
        },
        {
          "title": "Creating Emordle: Animating Word Cloud for Emotion Expression",
          "authors": "Liwenhan Xie, Xinhuan Shu, Jeon Cheol Su, Yun Wang, Siming Chen, Huamin Qu"
        },
        {
          "title": "DocFlow: A Visual Analytics System for Question-based Document Retrieval and Categorization",
          "authors": "Rui Qiu, Yamei Tu, Yu-Shuen Wang, Po-Yin Yen, Han-Wei Shen"
        },
        {
          "title": "ShortcutLens: A Visual Analytics Approach for Exploring Shortcuts in Natural Language Understanding Dataset",
          "authors": "Zhihua Jin, Xingbo Wang, Furui Cheng, Chunhui Sun, Qun Liu, Huamin Qu"
        },
        {
          "title": "XNLI: Explaining and Diagnosing NLI-based Visual Data Analysis",
          "authors": "Yingchaojie Feng, Xingbo Wang, Bo Pan, Kam Kwai Wong, Yi Ren, Shi Liu, Zihan Yan, Yuxin Ma, Huamin Qu, Wei Chen"
        },
        {
          "title": "Large-Scale Evaluation of Topic Models and Dimensionality Reductions for 2D Text Spatialization",
          "authors": "Daniel Atzberger, Tim Cech, Rico Richter, Matthias Trapp, Willy Scheibel, Jürgen Döllner, Tobias Schreck\n"
        }]
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1015,
        end: 1045,
        venue: null,
        items: []
      }, {
        type: "Application Spotlight",
        title: "Visualization for spatial single-cell atlases",
        start: 1045,
        end: 1200,
        venue: RM1_2,
        items: [{
          organizers: `Morgan Turner`,
          description: `Technological advances in biological experimental approaches for studying human tissues at single-cell resolution are producing large amounts of complex data and are offering new ways to ask questions with far-reaching impacts on human health. To allow for comprehensive analysis and comparison of the generated data, the ultimate goal is to construct an atlas of the human body that characterizes the cell types, tissue structures, and abundance of different types of biomolecules across these structures. The data supporting these atlas efforts, however, is creating challenging visualization problems due to 1) the dimensionality and density of the data and 2) the multi-modal measurements (including proteins, genes, and metabolites) associated with these structures in both 2D images and 3D volumes. Additionally, many datasets routinely include tens of thousands to millions of cells, with up to thousands of measurements per cell, resulting in critical scalability challenges.
This new paradigm of tissue atlas construction presents many relevant visualization challenges that will require the visualization community’s expertise to address. Due to the inherent anatomical nature of the data, biologists need to interact with this data in spatial and hierarchical contexts using visualization systems that are able to handle multi-modal visualization and queries at scale. Particularly in the context of diseases, visualizations are required to allow for comparisons of normal vs. disease, context of other biomedical information, display of uncertainty, and tools for education and training. Some of these visualization efforts have already been applied to cancer and kidney disease and are having impacts on research in human health.
We aim to identify future avenues of visualization research that can be helpful for exploring and analyzing data within these cell atlases. Augmented Reality (AR), and Virtual Reality (VR) offer potential for navigation and data analysis in 3D, but require careful consideration of useful techniques for users. Additionally, Artificial Intelligence (AI) approaches are being employed and will require explainable/interpretable visualization techniques. We plan to focus part of the panel discussion on the advantages and opportunities of employing these visualization technologies to aid in our understanding of human biology and aim to identify worthwhile future directions for visualization research to target.`,
        }, {
          title: `HuBMAP and related Cell Atlas efforts`,
          speakers: `Ajay Pillai`,
        }, {
          title: `Vitessce: Visual integration tool for exploration of spatial single-cell experiments`,
          speakers: `Mark Keller`,
        }, {
          title: `3D structural biology data`,
          speakers: `Barbora Kozlíková`,
        }, {
          title: `Volumetric Rendering of Medical Imaging data and how to translate it in AR/VR`,
          speakers: `Stefan Bruckner`,
        }, {
          title: `Panel Q&A`,
          moderators: `Nils Gehlenborg, Morgan Turner`,
        }, {
          title: `Closing`,
          speakers: `Eric Moerth`
        }]
      }, {
        type: AE,
        title: "VISAP Session 2",
        start: 1045,
        end: 1200,
        venue: RM3,
        items: [{
          website: `https://visap.net/2023`
        }]
      }, {
        type: SP,
        title: "Applications / Design",
        start: 1045,
        end: 1200,
        venue: RM4,
        items: [{
          chair: `Panagiotis D. Ritsos`
        }, {
          "title": "Taken By Surprise? Evaluating how Bayesian Surprise & Suppression Influences Peoples’ Takeaways in Map Visualizations",
          "authors": "Akim Ndlovu, Hilson Shrestha, Lane Harrison"
        },
        {
          "title": "Towards Autocomplete Strategies for Visualization Construction",
          "authors": "Wei Wei, Samuel Huron, Yvonne Jansen"
        },
        {
          "title": "Indy Survey Tool: A Framework to Unearth Correlations in Survey Data",
          "authors": "Tarik Crnovrsanin, Sara Di Bartolomeo, Connor Wilson, Cody Dunne"
        },
        {
          "title": "Data in the Wind: Evaluating Multiple-Encoding Design for Particle Motion Visualizations",
          "authors": "Yiren Ding, Lane Harrison"
        },
        {
          "title": "Show me my Users: A Dashboard Design Visualizing User Interaction Logs with Interactive Visualization",
          "authors": "Jinrui Wang, Mashael AlKadi, Benjamin Bach"
        },
        {
          "title": "What Is the Difference Between a Mountain and a Molehill? Quantifying Semantic Labeling of Visual Features in Line Charts",
          "authors": "Dennis Bromley, Vidya Setlur"
        },
        {
          "title": "Draco 2: An Extensible Platform to Model Visualization Design",
          "authors": "Junran Yang, Péter Ferenc Gyarmati, Zehua Zeng, Dominik Moritz\n"
        }]
      }, {
        type: FP,
        title: "Visualization Design and User Experience",
        start: 1045,
        end: 1200,
        venue: RM5,
        items: [{
          chair: `Melanie Tory`
        }, {
          "title": "VisRecall: Quantifying Information Visualisation Recallability via Question Answering",
          "authors": "Yao Wang, Chuhan Jiao, Mihai Bâce, Andreas Bulling"
        },
        {
          "title": "A Computational Design Pipeline to Fabricate Sensing Network Physicalizations",
          "authors": "S. Sandra Bae, Takanori Fujiwara, Anders Ynnerman, Ellen Yi-Luen Do, Michael L Rivera, Danielle Albers Szafir"
        },
        {
          "title": "Designing for Ambiguity in Visual Analytics: Lessons from Risk Assessment and Prediction",
          "authors": "Stan Nowak, Lyn Bartram"
        },
        {
          "title": "Dupo: A Mixed-Initiative Authoring Tool for Responsive Visualization",
          "authors": "Hyeok Kim, Ryan Rossi, Jessica Hullman, Jane Hoffswell"
        },
        {
          "title": "InkSight: Leveraging Sketch Interaction for Documenting Chart Findings in Computational Notebooks",
          "authors": "Yanna Lin, Haotian Li, Leni Yang, Aoyu Wu, Huamin Qu"
        },
        {
          "title": "Why Change My Design: Explaining Poorly Constructed Visualization Designs with Explorable Explanations",
          "authors": "Leo Yu-Ho Lo, Yi-Fan Cao, Leni Yang, Huamin Qu\n"
        }]
      }, {
        type: FP,
        title: "Machine Learning for Volume Visualization",
        start: 1045,
        end: 1200,
        venue: RM6,
        items: [{
          chair: `Joshua A. Levine`
        }, {
          "title": "CoordNet: Data Generation and Visualization Generation for Time-Varying Volumes via a Coordinate-Based Neural Network",
          "authors": "Jun Han, Chaoli Wang"
        },
        {
          "title": "Deep Hierarchical Super Resolution for Scientific Data",
          "authors": "Skylar W. Wurster, Hanqi Guo, Han-Wei Shen, Thomas Peterka, Jiayi Xu"
        },
        {
          "title": "Interactive Volume Visualization via Multi-Resolution Hash Encoding based Neural Representation",
          "authors": "Qi Wu, David Bauer, Michael J. Doyle, Kwan-Liu Ma"
        },
        {
          "title": "Adaptively Placed Multi-Grid Scene Representation Networks for Large-Scale Data Visualization",
          "authors": "Skylar Wolfgang Wurster, Tianyu Xiong, Han-Wei Shen, Hanqi Guo, Tom Peterka"
        },
        {
          "title": "Photon Field Networks for Dynamic Real-Time Volumetric Global Illumination",
          "authors": "David Bauer, Qi Wu, Kwan-Liu Ma"
        },
        {
          "title": "PSRFlow: Probabilistic Super Resolution with Flow-Based Models for Scientific Data",
          "authors": "JINGYI SHEN, Han-Wei Shen\n"
        }]
      }, {
        type: FP,
        title: "Evaluation",
        start: 1045,
        end: 1200,
        venue: RM9,
        items: [{
          chair: `Matthew Kay`
        }, {
          "title": "A Qualitative Interview Study of Distributed Tracing Visualisation: A Characterisation of Challenges and Opportunities in Visualisation Research",
          "authors": "Thomas Davidson, Emily Wall, Jonathan Mace"
        },
        {
          "title": "Evaluating Glyph Design for Showing Large-Magnitude-Range Quantum Spins",
          "authors": "Henan Zhao, Garnett W. Bryant, Wesley Griffin, Judith E. Terrill, Jian Chen"
        },
        {
          "title": "Evaluating the Impact of Uncertainty Visualization on Model Reliance",
          "authors": "Jieqiong Zhao, Yixuan Wang, Michelle V. Mancenido, Erin K. Chiou, Ross Maciejewski"
        },
        {
          "title": "Fitting Bell Curves to Data Distributions using Visualization",
          "authors": "Eric Newburger, Michael Correll, Niklas Elmqvist"
        },
        {
          "title": "A Heuristic Approach for Dual Expert/End-User Evaluation of Guidance in Visual Analytics",
          "authors": "Davide Ceneda, Christopher Collins, Mennatallah El-Assady, Silvia Miksch, Christian Tominski, Alessio Arleo"
        },
        {
          "title": "The Arrangement of Marks Impacts Afforded Messages: Ordering, Partitioning, Spacing, and Coloring in Bar Charts",
          "authors": "Racquel Fygenson, Steven L Franconeri, Enrico Bertini\n"
        }]
      }, {
        type: BK,
        title: "Lunch Break",
        start: 1200,
        end: 1400,
        venue: null,
        items: []
      }, {
        type: IPP,
        title: "CG&A: Theory and Evaluation plus ISMAR/VR",
        start: 1400,
        end: 1515,
        venue: RM3,
        items: [{
          chair: `Jian Chen`
        }, {
          "title": "VisVisual: A Toolkit for Teaching and Learning Data Visualization",
          "authors": "Chaoli Wang"
        },
        {
          "title": "Embracing Disciplinary Diversity in Visualization",
          "authors": "Tatiana Losev, Justin Raynor, Sheelagh Carpendale, Melanie Tory"
        },
        {
          "title": "Lessons Learned From Quantitatively Exploring Visualization Rubric Utilization for Peer Feedback",
          "authors": "Daniel J. Barajas, Xornam S. Apedoe, David G. Brizan, Alark P. Joshi, Sophie J. Engle"
        },
        {
          "title": "Finding Their Data Voice: Practices and Challenges of Dashboard Users",
          "authors": "Melanie Tory, Lyn Bartram, Brittany Fiore-Gartland, Anamaria Crisan"
        },
        {
          "title": "Augmented Scale Models: Presenting Multivariate Data Around Physical Scale Models in Augmented Reality",
          "authors": "Kadek Ananta Satriadi, Andrew Cunningham, Bruce H. Thomas, Adam Drogemuller, Antoine Odi, Niki Patel, Cathlyn Aston, Ross T. Smith"
        },
        {
          "title": "Towards an Understanding of Distributed Asymmetric Collaborative Visualization on Problem-solving",
          "authors": "Wai Tong, Meng Xia, Kam Kwai Wong, Doug A. Bowman, Ting-Chuen Pong, Huamin Qu, Yalong Yang\n"
        }]
      }, {
        type: SP,
        title: "Information Visualization / Interaction",
        start: 1400,
        end: 1515,
        venue: RM4,
        items: [{
          chair: `Andreas Kerren`
        }, {
          "title": "A Simple yet Useful Spiral Visualization of Large Graphs",
          "authors": "Garima Jindal, Kamalakar Karlapalem"
        },
        {
          "title": "ProtoGraph: A Non-Expert Toolkit for Creating Animated Graphs",
          "authors": "Machiel Daniel Rodrigues, Joel Dapello, Priyan Vaithilingam, Johanna Beyer, Carolina Nobre"
        },
        {
          "title": "Visual Validation versus Visual Estimation: A Study on the Average Value in Scatterplots",
          "authors": "Daniel Braun, Ashley Suh, Remco Chang, Michael Gleicher, Tatiana von Landesberger"
        },
        {
          "title": "Line Harp: Importance-Driven Sonification for Dense Line Charts",
          "authors": "Egil Bru, Thomas Trautner, Stefan Bruckner"
        },
        {
          "title": "Compact Phase Histograms for Guided Exploration of Periodicity",
          "authors": "Max Franke, Steffen Koch"
        },
        {
          "title": "ZADU: A Python Library for Evaluating the Reliability of Dimensionality Reduction Embeddings",
          "authors": "Hyeon Jeon, Aeri Cho, Jinhwa Jang, Soohyun Lee, Jake Hyun, Hyung-Kwon Ko, Jaemin Jo, Jinwook Seo"
        },
        {
          "title": "TimePool: Visually Answer “Which and When” Questions On Univariate Time Series",
          "authors": "Tinghao Feng, Yueqi Hu, Jing Yang, Tom Polk, Ye Zhao, Shixia Liu, Zhaocong Yang"
        },
        {
          "title": "“Two Heads are Better than One”: Pair-Interviews for Visualization",
          "authors": "derya akbaba, Miriah Meyer\n"
        }]
      }, {
        type: FP,
        title: "Perception",
        start: 1400,
        end: 1515,
        venue: RM5,
        items: [{
          chair: `Cindy Xiong Bearfield`
        }, {
          "title": "The Risks of Ranking: Revisiting Graphical Perception to Model Individual Differences in Visualization Performance",
          "authors": "Russell Davis, Xiaoying Pu, Yiren Ding, Brian D. Hall, Karen Bonilla, Mi Feng, Matthew Kay, Lane Harrison"
        },
        {
          "title": "Design Characterization for Black-and-White Textures in Visualization",
          "authors": "Tingying He, Yuanyang Zhong, Petra Isenberg, Tobias Isenberg"
        },
        {
          "title": "Image or Information? Examining the Nature and Impact of Visualization Perceptual Classification",
          "authors": "Anjana Arunkumar, Lace M. Padilla, Gi-Yeul Bae, Chris Bryan"
        },
        {
          "title": "Perception of Line Attributes for Visualization",
          "authors": "Anna Sterzik, Nils Lichtenberg, Jana Wilms, Michael Krone, Douglas Cunningham, Kai Lawonn"
        },
        {
          "title": "Perceptually Uniform Construction of Illustrative Textures",
          "authors": "Anna Sterzik, Monique Meuschke, Douglas Cunningham, Kai Lawonn"
        },
        {
          "title": "Too Many Cooks: Exploring How Graphical Perception Studies Influence Visualization Recommendations in Draco",
          "authors": "Zehua Zeng, Junran Yang, Dominik Moritz, Jeffrey Heer, Leilani Battle\n"
        }]
      }, {
        type: FP,
        title: "Topology and Morse Theory",
        start: 1400,
        end: 1515,
        venue: RM6,
        items: [{
          chair: `Bei Wang Phillips`
        }, {
          "title": "Discrete Morse Sandwich: Fast Computation of Persistence Diagrams for Scalar Data – An Algorithm and A Benchmark",
          "authors": "Pierre Guillou, Jules Vidal, Julien Tierny"
        },
        {
          "title": "Parallel Computation of Piecewise Linear Morse-Smale Segmentations",
          "authors": "Robin G. C. Maack, Jonas Lukasczyk, Julien Tierny, Hans Hagen, Ross Maciejewski, Christoph Garth"
        },
        {
          "title": "Principal Geodesic Analysis of Merge Trees (and Persistence Diagrams)",
          "authors": "Mathieu Pont, Jules Vidal, Julien Tierny"
        },
        {
          "title": "A Comparative Study of the Perceptual Sensitivity of Topological Visualizations to Feature Variations",
          "authors": "Tushar M. Athawale, Bryan Triana, Tanmay Kotha, David Pugmire, Paul Rosen"
        },
        {
          "title": "ExTreeM: Scalable Augmented Merge Tree Computation via Extremum Graphs",
          "authors": "Jonas Lukasczyk, Michael Will, Florian Wetzels, Gunther H Weber, Christoph Garth"
        },
        {
          "title": "Merge Tree Geodesics and Barycenters with Path Mappings",
          "authors": "Florian Wetzels, Mathieu Pont, Julien Tierny, Christoph Garth\n"
        }]
      }, {
        type: FP,
        title: "ML for VIS",
        start: 1400,
        end: 1515,
        venue: RM9,
        items: [{
          chair: `Nan Cao`
        }, {
          "title": "Data Type Agnostic Visual Sensitivity Analysis",
          "authors": "Nikolaus Piccolotto, Markus Bögl, Christoph Muehlmann, Klaus Nordhausen, Peter Filzmoser, Johanna Schmidt, Silvia Miksch"
        },
        {
          "title": "LiveRetro: Visual Analytics for Strategic Retrospect in Livestream E-Commerce",
          "authors": "Yuchen Wu, Yuansong Xu, Shenghan Gao, Xingbo Wang, Wenkai Song, Zhiheng Nie, Xiaomeng Fan, Quan Li"
        },
        {
          "title": "Towards Better Modeling with Missing Data: A Contrastive Learning-based Visual Analytics Perspective",
          "authors": "Laixin Xie, Yang Ouyang, Longfei Chen, Ziming Wu, Quan Li"
        },
        {
          "title": "uxSense: Supporting User Experience Analysis with Visualization and Computer Vision",
          "authors": "Andrea Batch, Yipeng Ji, Mingming Fan, Jian Zhao, Niklas Elmqvist"
        },
        {
          "title": "Data Formulator: AI-powered Concept-driven Visualization Authoring",
          "authors": "Chenglong Wang, John R Thompson, Bongshin Lee"
        },
        {
          "title": "InvVis: Large-Scale Data Embedding for Invertible Visualization",
          "authors": "Huayuan Ye, Chenhui Li, Yang Li, Changbo Wang\n"
        }]
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1515,
        end: 1545,
        venue: null,
        items: []
      }, {
        type: PN,
        title: "How should VIS4ML Redefine Itself in the Rapid Evolution of AI?",
        start: 1545,
        end: 1700,
        venue: RM1_2,
        items: [{
          organizers: `Dylan Cashman (Brandeis University), Junpeng Wang (Visa Research), Qianwen Wang (University of Minnesota)`,
          panelists: `Duen Horng (Polo) Chau (Georgia Tech) Mennatallah El-Assady (ETH Zürich), Liang Gou (Bosch), Ross Maciejewski (Arizona State University), Dominik Moritz (Carnegie Mellon University), GPT-4 (Offline-Panelist)`,
          description: `We propose a panel to discuss the changing role of visualization in the development and deployment of machine learning models in light of the rapid evolution of artificial intelligence (AI). Visualization for machine learning (VIS4ML) has been a thriving research area within the visualization community because of the need for better affordances and representations to enable broad groups of stakeholders to interact with and interpret machine learning models. However, recent advancements in AI are changing our understanding of the capabilities of machine learning models, both in performance and in their ability to interact with the general population. In the light of these advancements, we feel it is an important time for the visualization community to consider how the opportunities for visualization have changed. We have gathered a diverse set of panelists from both academia and industry, with varying levels of experience. We hope that providing a multitude of perspectives will shed light on new opportunities for visualization research, while providing context on the natural evolution of the field over the last few decades. The panel format will begin with introductory statements from each panelists. Then, through a set of open ended questions, we will ask panelists to have an open discussion about which types of stakeholders, use cases, and steps of the modeling pipeline they expect to change the most. The panel will conclude by asking each panelist to share where they feel the best opportunities are for VIS4ML research in the medium term future.`
        }]
      }, {
        type: FP,
        title: "Time Series Data",
        start: 1545,
        end: 1700,
        venue: RM4,
        items: [{
          chair: `Silvia Miksch`
        }, {
          "title": "DOMINO: Visual Causal Reasoning with Time-Dependent Phenomena",
          "authors": "Jun Wang, Klaus Mueller"
        },
        {
          "title": "Attribute-Aware RBFs: Interactive Visualization of Time Series Particle Volumes Using RT Core Range Queries",
          "authors": "Nate Morrical, Stefan Zellmann, Alper Sahistan, Patrick Shriwise, Valerio Pascucci"
        },
        {
          "title": "Reclaiming the Horizon: Novel Visualization Designs for Time-Series Data with Large Value Ranges",
          "authors": "Daniel Braun, Rita Borgo, Max Sondag, Tatiana von Landesberger"
        },
        {
          "title": "Supporting Guided Exploratory Visual Analysis on Time Series Data with Reinforcement Learning",
          "authors": "Yang Shi, Bingchang Chen, Ying Chen, Zhuochen Jin, Ke Xu, Xiaohan Jiao, Tian Gao, Nan Cao"
        },
        {
          "title": "TimeTuner: Diagnosing Time Representations for Time-Series Forecasting with Counterfactual Explanations",
          "authors": "Jianing Hao, Qing Shi, Yilin Ye, Wei Zeng"
        },
        {
          "title": "Visualizing Large-Scale Spatial Time Series with GeoChron",
          "authors": "Zikun Deng, Shifu Chen, Tobias Schreck, Dazhen Deng, Tan Tang, Mingliang Xu, Di Weng, Yingcai Wu\n"
        }]
      }, {
        type: FP,
        title: "Medical and Biomedical Applications",
        start: 1545,
        end: 1700,
        venue: RM5,
        items: [{
          chair: `Alexander Lex`
        }, {
          "title": "HealthPrism: A Visual Analytics System for Exploring Children’s Physical and Mental Health Profiles with Multimodal Data",
          "authors": "Zhihan Jiang, Handi Chen, Rui Zhou, Jing Deng, Xinchen Zhang, Running Zhao, Cong Xie, Yifang Wang, Edith Ngai"
        },
        {
          "title": "Marjorie: Visualizing Type 1 Diabetes Data to Support Pattern Exploration",
          "authors": "Anna Scimone, Klaus Eckelt, Marc Streit, Andreas Hinterreiter"
        },
        {
          "title": "Roses Have Thorns: Understanding the Downside of Oncological Care Delivery Through Visual Analytics and Sequential Rule Mining",
          "authors": "Carla Gabriela Floricel, Andrew Wentzel, Abdallah Mohamed, Clifton David Fuller, Guadalupe Canahuate, G. Elisabeta Marai"
        },
        {
          "title": "MitoVis: A Unified Visual Analytics System for End-to-End Neuronal Mitochondria Analysis",
          "authors": "JunYoung Choi, Hyun-Jic Oh, Hakjun Lee, Suyeon Kim, Seok-Kyu Kwon, Won-Ki Jeong"
        },
        {
          "title": "PanVA: Pangenomic Variant Analysis",
          "authors": "Astrid van den Brandt, Eef M. Jonkheer, Dirk-Jan M. van Workum, Huub van de Wetering, Sandra Smit, Anna Vilanova"
        },
        {
          "title": "Leveraging Historical Medical Records as a Proxy via Multimodal Modeling and Visualization to Enrich Medical Diagnostic Learning",
          "authors": "Yang Ouyang, Yuchen Wu, He Wang, Chenyang Zhang, Furui Cheng, Chang Jiang, Lixia Jin, Yuanwu Cao, Quan Li\n"
        }]
      }, {
        type: FP,
        title: "Topology Applications",
        start: 1545,
        end: 1700,
        venue: RM6,
        items: [{
          chair: `Filip Sadlo`
        }, {
          "title": "TROPHY: A Topologically Robust Physics-Informed Tracking Framework for Tropical Cyclone",
          "authors": "Lin Yan, Hanqi Guo, Tom Peterka, Bei Wang Phillips, Jiali Wang"
        },
        {
          "title": "A Local Iterative Approach for the Extraction of 2D Manifolds from Strongly Curved and Folded Thin-Layer Structures",
          "authors": "Nicolas Klenert, Verena Lepper, Daniel Baum"
        },
        {
          "title": "A Task-Parallel Approach for Localized Topological Data Structures",
          "authors": "Guoxi Liu, Federico Iuricich"
        },
        {
          "title": "Global Topology of 3D Symmetric Tensor Fields",
          "authors": "Shih-Hsuan Hung, Yue Zhang, Eugene Zhang"
        },
        {
          "title": "Interactive Design and Optics-Based Visualization of Arbitrary Non-Euclidean Kaleidoscopic Orbifolds",
          "authors": "Jinta Zheng, Eugene Zhang, Yue Zhang"
        },
        {
          "title": "TopoSZ: Preserving Topology in Error-Bounded Lossy Compression",
          "authors": "Lin Yan, Xin Liang, Hanqi Guo, Bei Wang Phillips\n"
        }]
      }, {
        type: FP,
        title: "Situated Analytics and Augmented Reality",
        start: 1545,
        end: 1700,
        venue: RM9,
        items: [{
          chair: `Maxime Cordeil`
        }, {
          "title": "ARGUS: Visualization of AI-assisted Task Guidance in AR",
          "authors": "Sonia Castelo Quispe, João Rulff, Erin McGowan, Bea Steers, Guande Wu, Shaoyu Chen, Iran Roman, Roque Lopez, Ethan Brewer, Chen Zhao, Jing Qian, Kyunghyun Cho, He He, Qi Sun, Huy T. Vo, Juan Pablo Bello, Michael Krone, Claudio Silva"
        },
        {
          "title": "The Reality of the Situation: A Survey of Situated Analytics",
          "authors": "Sungbok Shin, Andrea Batch, Peter W. S. Butcher, Panagiotis D. Ritsos, Niklas Elmqvist"
        },
        {
          "title": "Design Patterns for Situated Visualization in Augmented Reality",
          "authors": "Benjamin Lee, Michael Sedlmair, Dieter Schmalstieg"
        },
        {
          "title": "Handling Non-Visible Referents in Situated Visualizations",
          "authors": "Ambre Assor, Arnaud Prouzeau, Martin Hachet, Pierre Dragicevic"
        },
        {
          "title": "RL-LABEL: A Deep Reinforcement Learning Approach Intended for AR Label Placement in Dynamic Scenarios",
          "authors": "Zhutian Chen, Daniele Chiappalupi, Tica Lin, Yalong Yang, Johanna Beyer, Hanspeter Pfister"
        },
        {
          "title": "Quantifying the Impact of XR Visual Guidance on User Performance Using a Large-Scale Virtual Assembly Experiment (VIS Short Paper)",
          "authors": "Leon Pietschmann, Paul-David Zuercher, Erik Bubík, Zhutian Chen, Hanspeter Pfister, Thomas Bohné\n"
        }]
      }
    ]
  },
  {
    date: "Oct. 27, 2023", day: "Friday", events: [
      {
        type: FP,
        title: "Scientific Visualization",
        start: 900,
        end: 1015,
        venue: RM3,
        items: [{
          chair: `Ingrid Hotz`
        }, {
          "title": "Electromechanical Coupling in Electroactive Polymers - a Visual Analysis of a Third-Order Tensor Field",
          "authors": "Chiara Hergl, Carina Witt, Baldwin Nsonga, Andreas Menzel, Gerik Scheuermann"
        },
        {
          "title": "GPU Accelerated 3D Tomographic Reconstruction and Visualization from Noisy Electron Microscopy Tilt-Series",
          "authors": "Julio Rey Ramirez,Peter Rautek,Ciril Bohak,Ondrej Strnad,Zheyuan Zhang,Sai Li,Ivan Viola,Wolfgang Heidrich"
        },
        {
          "title": "RadVolViz: An Information Display-Inspired Transfer Function Editor for Multivariate Volume Visualization",
          "authors": "Ayush Kumar, Xinyu Zhang, Huolin L. Xin, Hanfei Yan, Xiaojing Huang, Wei Xu, Klaus Mueller"
        },
        {
          "title": "A General Framework for Progressive Data Compression and Retrieval",
          "authors": "Victor A. P. Magri, Peter Lindstrom"
        },
        {
          "title": "Differentiable Design Galleries: A Differentiable Approach to Explore the Design Space of Transfer Functions",
          "authors": "Bo Pan, Jiaying Lu, Haoxuan Li, Weifeng Chen, Yiyao Wang, Minfeng Zhu, Chenhao Yu, Wei Chen"
        },
        {
          "title": "Residency Octree: A Hybrid Approach for Scalable Web-Based Multi-Volume Rendering",
          "authors": "Lukas Herzberger, Markus Hadwiger, Robert Krüger, Peter Sorger, Hanspeter Pfister, Eduard Gröller, Johanna Beyer\n"
        }]
      }, {
        type: SP,
        title: "Machine Learning / Language Models / Theory",
        start: 900,
        end: 1015,
        venue: RM4,
        items: [{
          chair: `Chaoli Wang`
        }, {
          "title": "Explain-and-Test: An Interactive Machine Learning Framework for Exploring Text Embeddings",
          "authors": "Shivam Raval, Carolyn Ann Wang, Fernanda Viegas, Martin Wattenberg"
        },
        {
          "title": "Concept Lens: Visually Analyzing the Consistency of Semantic Manipulation in GANs",
          "authors": "Sangwon Jeong, Mingwei Li, Matthew Berger, Shusen Liu"
        },
        {
          "title": "HAiVA: Hybrid AI-assisted Visual Analysis Framework to Study the Effects of Cloud Properties on Climate Patterns",
          "authors": "Subhashis Hazarika, Haruki Hirasawa, Sookyung Kim, Kalai Ramea, Salva Rühling Cachay, Peetak Mitra, Dipti Hingmire, Hansi Singh, Phil Rasch"
        },
        {
          "title": "DataTales: Investigating the Use of Large Language Models for Authoring Data-Driven Articles",
          "authors": "Nicole Sultanum, Arjun Srinivasan"
        },
        {
          "title": "Visualizing Linguistic Diversity of Text Datasets Synthesized by Large Language Models",
          "authors": "Emily Reif, Minsuk Kahng, Savvas Petridis"
        },
        {
          "title": "WUDA: Visualizing and Transforming Rotations in Real-Time with Quaternions and Smart Devices",
          "authors": "slobodan milanko"
        },
        {
          "title": "ScatterUQ: Interactive Uncertainty Visualizations for Multiclass Deep Learning Problems",
          "authors": "Harry Li, Steven Jorgensen, John Holodnak, Allan Wollaber"
        },
        {
          "title": "Combining Degree of Interest Functions and Progressive Visualization",
          "authors": "Marius Hogräfer, Dominik Moritz, Adam Perer, Hans-Jörg Schulz\n"
        }]
      }, {
        type: FP,
        title: "GeoVis",
        start: 900,
        end: 1015,
        venue: RM5,
        items: [{
          chair: `Di Weng`
        }, {
          "title": "IF-City: Intelligible Fair City Planning to Measure, Explain and Mitigate Inequality",
          "authors": "Yan Lyu, Hangxin Lu, Min Kyung Lee, Gerhard Schmitt, Brian Y. Lim"
        },
        {
          "title": "MoReVis: A Visual Summary for Spatiotemporal Moving Regions",
          "authors": "Giovani Valdrighi, Nivan Ferreira, Jorge Poco"
        },
        {
          "title": "Multilevel Visual Analysis of Aggregate Geo-Networks",
          "authors": "Zikun Deng, Shifu Chen, Xiao Xie, Guodao Sun, Mingliang Xu, Di Weng, Yingcai Wu"
        },
        {
          "title": "When, Where and How does it fail? A Spatial-temporal Visual Analytics Approach for Interpretable Object Detection in Autonomous Driving",
          "authors": "Junhong Wang, Yun Li, Zhaoyu Zhou, Chengshun Wang, Yijie Hou, Li Zhang, Xiangyang Xue, Michael Kamp, Xiaolong (Luke) Zhang, Siming Chen"
        },
        {
          "title": "GeoExplainer: A Visual Analytics Framework for Spatial Modeling Contextualization and Report Generation",
          "authors": "Fan Lei, Yuxin Ma, Stewart Fotheringham, Elizabeth Mack, Ziqi Li, Mehak Sachdeva, Sarah Bardin, Ross Maciejewski"
        },
        {
          "title": "The Urban Toolkit: A Grammar-based Framework for Urban Visual Analytics",
          "authors": "Gustavo Moreira, Maryam Hosseini, Md Nafiul Alam Nipu, Marcos Lage, Nivan Ferreira, Fabio Miranda\n"
        }]
      }, {
        type: FP,
        title: "Journalism & the Public",
        start: 900,
        end: 1015,
        venue: RM9,
        items: [{
          chair: `Xavier Ho`
        }, {
          "title": "From shock to shift: Data visualization for constructive climate journalism",
          "authors": "Francesca Morini, Johanna Hartmann, Anna Eschenbacher, Marian Dörk"
        },
        {
          "title": "Towards Visualization Thumbnail Designs that Entice Reading Data-driven Articles",
          "authors": "Hwiyeon Kim, Joohee Kim, Yunha Han, Hwajung Hong, Oh-Sang Kwon, Young-Woo Park, Niklas Elmqvist, Sungahn Ko, Bum Chul Kwon"
        },
        {
          "title": "Embellishments Revisited: Perceptions of Embellished Visualisations Through the Viewer’s Lens",
          "authors": "Muna Alebri, Enrico Costanza, Georgia Panagiotidou, Duncan P Brumby"
        },
        {
          "title": "Enthusiastic and Grounded, Avoidant and Cautious: Understanding Public Receptivity to Data and Visualizations",
          "authors": "Helen Ai He, Jagoda Walny, Sonja Thoma, Sheelagh Carpendale, Wesley Willett"
        },
        {
          "title": "Polarizing Political Polls: Visualization Design Choices Can Shape Public Opinion and Increase Political Polarization",
          "authors": "Eli Holder, Cindy Xiong Bearfield\n"
        }]
      }, {
        type: BK,
        title: "Coffee Break",
        start: 1015,
        end: 1045,
        venue: null,
        items: []
      }, {
        type: CM,
        title: "VIS Capston",
        start: 1045,
        end: 1145,
        venue: RM5_6,
        items: [{
          speakers: `Matt Duckham`,
          title: `All over the map`,
          abstract: `"Spatial is special" is a phrase often used by geographic information (GI) scientists, like Matt. Yet, many other research communities without a "special" focus on spatial are continually innovating with important new spatial tools, ideas, techniques, and insights, including the visualization community. This creative tension---between domain expertise and domain exclusivity, between discipline boundaries and discipline blends---can move interdisciplinary GI science research "all over the map" (in both senses of complete mastery and chaotic muddle). The tension is especially pronounced in connection with maps and mapping. On the one hand, the art and science of mapping is traditionally a domain of "special" study in cartography. On the other, maps are a basic tool for information visualization in almost every academic and professional discipline that analyzes data related to geographic location. Indeed, even GI scientists have a complex relationship with maps---at times cherished touchstone; at others atavistic constraint. This capstone uses the map---perhaps the ultimate interdisciplinary artefact---as a lens to reflect on essential research themes in GI science, and on the nature of interdisciplinary research into geovisualization. The analysis identifies five "special" features of geographic information, including its structure, dynamism, uncertainty, and its intimate connection with human cognition, that directly impact on mapping and geovisualization. The examples highlight the importance of knowledge exchange in an interdisciplinary field like GI science, and particularly of exchange with the visualization community. The conclusions also look to the future, and identify some of the most promising emerging problem domains in GI science.`
        }]
      }, {
        type: CM,
        title: "VIS Closing",
        start: 1145,
        end: 1200,
        venue: RM5_6,
        items: []
      },
    ]
  }
].map((_day) => {
  let day = {
    date: _day.date,
    day: _day.day
  };
  day.events = _day.events.map((_d) => {
    let d = {
      type: _d.type,
      title: _d.title,
      start: _d.start,
      end: _d.end,
      venue: _d.venue,
      id: _d.type + "---" + _d.title,
      items: _d.items
    };
    d.start_time = timeFormat(d.start);
    d.end_time = timeFormat(d.end);
    d.duration = getDuration(d.start_time, d.end_time);
    d.datetime = day.day + ", " + day.date + " " + d.start_time + " AEDT (UTC+11)"
    return d;
  });
  return day;
});

function timeFormat(t) {
  let m = t % 100, h = Math.floor(t / 100);
  let ap = h >= 12 ? "PM" : "AM";
  if (h > 12) h = h - 12;
  h = h.toString();
  if (m == 0) m = "00";
  else if (m < 10) m = "0" + m;
  else m = m.toString();
  return h + ":" + m + " " + ap;
}

function getDuration(s, e) {
  let st = new Date("0 " + s), et = new Date("0 " + e);
  let dur_total = (et - st) / 1000 / 60;
  let dur_h = Math.floor(dur_total / 60);
  let dur_m = dur_total - dur_h * 60;
  return { minutes: dur_total, expr: dur_h.toString() + ":" + dur_m.toString() };
}

export function loadBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  return bookmarks;
}
export function saveBookmarks(bk) {
  localStorage.setItem("bookmarks", JSON.stringify(bk || []));
}

export function searchMatch(keyword, event) {
  let keywords = keyword.split(" ");
  let flag = false, results = {};
  for (const key of keywords) {
    if (event.title?.includes(key)) {
      flag = true;
      results.title = true;
    }
    event.items.forEach((item, i) => {
      Object.keys(item).forEach((prop) => {
        if (item[prop].includes(key)) {
          flag = true;
          results['item.' + i] = true;
          results['item.' + i + '.' + prop] = true;
        }
      });
    })
    if (!flag) return flag;
  }
  if (flag) {
    return results;
  }
  return flag;
}