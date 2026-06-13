// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected research and machine-learning projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected GitHub repositories and project code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A structured version of my CV. Use the PDF icon for the full downloadable CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-sharif-university-of-technology-as-a-b-sc-student-in-electrical-engineering",
          title: 'Joined Sharif University of Technology as a B.Sc. student in Electrical Engineering.',
          description: "",
          section: "News",},{id: "news-completed-a-research-internship-at-cuhk-dsp-lab-on-transfer-learning-for-eeg-anomaly-detection",
          title: 'Completed a research internship at CUHK DSP Lab on transfer learning for EEG...',
          description: "",
          section: "News",},{id: "news-started-research-at-mll-lab-on-meta-reinforcement-learning-for-fast-adaptation-under-non-stationary-dynamics",
          title: 'Started research at MLL Lab on meta-reinforcement learning for fast adaptation under non-stationary...',
          description: "",
          section: "News",},{id: "projects-hessian-free-optimization",
          title: 'Hessian-Free Optimization',
          description: "Conjugate-gradient methods for convex optimization from scratch.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hessian-free-optimization/";
            },},{id: "projects-lilac-trio",
          title: 'Lilac Trio',
          description: "Meta-reinforcement learning codebase for tracking task non-stationarity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lilac-trio/";
            },},{id: "projects-generative-attacks-on-llms",
          title: 'Generative Attacks on LLMs',
          description: "Deep generative modeling for adversarial prompt synthesis and LLM robustness.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-adversarial-generative-models/";
            },},{id: "projects-multi-armed-bandits",
          title: 'Multi-Armed Bandits',
          description: "Online decision-making experiments for exploration-exploitation tradeoffs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multi-armed-bandits/";
            },},{id: "projects-seizure-prediction",
          title: 'Seizure Prediction',
          description: "EEG signal-processing project using spectral entropy and classical ML methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seizure-prediction/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/KooshanFattahCV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%69%72.%68%65%73%61%72%69%38%32@%73%68%61%72%69%66.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AKooshan82", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
