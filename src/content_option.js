const logotext = "JACOBY";
const meta = {
    title: "Jacoby Lockman",
    description: "I'm Jacoby Lockman, a software engineer specializing in agentic AI, autonomous systems, and full-stack development.",
};

const introdata = {
    title: "I'm Jacoby Lockman",
    animated: {
        first: "I build AI agents",
        second: "I engineer autonomous systems",
        third: "I develop full-stack apps",
    },
    description: "CS graduate from Harvey Mudd College with a passion for agentic AI, autonomous robotics, and full-stack engineering. Gates Scholar. NCAA soccer co-captain.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm a software engineer who graduated from Harvey Mudd College with a B.S. in Computer Science and a concentration in Economics. I've built everything from autonomous mowing systems and AI-powered language learning agents to relational databases and VR lab simulations. I'm a Gates Scholar, Harvey Mudd full-tuition scholarship recipient, and former co-captain of an NCAA Division III soccer team that finished nationally ranked 17th.",
};

const worktimeline = [
    {
        jobtitle: "Software Engineer",
        where: "Doosan Bobcat Autonomous Mower R&D",
        date: "Aug 2024 – May 2025",
    },
    {
        jobtitle: "Software Engineer",
        where: "Aquillius",
        date: "Jun 2023 – Aug 2023",
    },
    {
        jobtitle: "Full Stack Developer (Research)",
        where: "Harvey Mudd College CS Dept.",
        date: "May 2022 – Aug 2022",
    },
];

const skills = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "C++",
        value: 80,
    },
    {
        name: "JavaScript / TypeScript",
        value: 80,
    },
    {
        name: "Java",
        value: 75,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "SQL",
        value: 65,
    },
];

const services = [
    {
        title: "Agentic AI Engineering",
        description: "Building LLM-powered agents with tool use, cost optimization, and long-term memory — from earnings call verifiers to speech-to-speech language tutors.",
    },
    {
        title: "Full Stack Development",
        description: "Designing end-to-end web platforms with React, Node, Flask, and RESTful APIs, backed by UX research and iterative testing across real user groups.",
    },
    {
        title: "Autonomous & Embedded Systems",
        description: "Engineering path planning algorithms, haptic feedback devices, and GPS-integrated autonomous systems on embedded Linux and microcontroller platforms.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Earnings Call Agent — AI agent that verifies earnings calls against financial data using Claude and Yahoo Finance, with LLM call routing and a company financials database.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/500/?grayscale",
        description: "Duo-ble 007 Agent — Speech-to-speech language learning agent with 96% cost reduction vs. Duolingo Max (~$1.15/mo), built with GPT-4 and Pinecone vector memory.",
        link: "#",
    },
    {
        img: require("./assets/images/exponent_ SWE Coding Questions.png"),
        description: "Mudd Music Management Platform — Open-source music platform promoting 8x library expansion by tapping YouTube's 800M+ unreleased catalog.",
        link: "#",
        details: {
            title: "Mudd Music Management Platform",
            media: [
                { type: "image", src: require("./assets/images/Screenshot 2025-08-06 at 3.28.54 PM.png"), title: "Host UI Display", description: "Choose between your spotify or youtube catalogue and share this queue with friends on the same wifi network!" },
                // { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID", title: "Feature name", description: "Description of this feature" },
            ],
        },
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Jacoby's Relational Database — A database built in Java with a 50-page buffer pool, Selinger-style optimizer, and strict 2PL concurrency control with deadlock detection.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/350/?grayscale",
        description: "VR Wet Lab Simulation — Immersive virtual reality scientific lab experiences for remote education built with Unity and Meta VR. Won 1 of 6 awards at the 5C hackathon.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jflockman@gmail.com",
    YOUR_FONE: "509-281-0101",
    description: "Feel free to reach out — whether it's about a project, an opportunity, or just to connect.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0w82m48",
    YOUR_TEMPLATE_ID: "template_mft47sj",
    YOUR_USER_ID: "BymbWhI4LJ4-OLPR9",
};

const socialprofils = {
    github: "https://github.com/jacobymon",
    linkedin: "https://linkedin.com/in/jacoby-lockman",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
