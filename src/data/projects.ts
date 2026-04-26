export const projects = [
    {
        title: "Traffic Control & Violation Detection System",
        description:
            "A distributed system for detecting traffic violations using embedded sensors, with cloud-based logging and a real-time dashboard.",

        image: "/projects/traffic_control_system.png",

        tags: ["IoT", "Embedded Systems", "Cloud", "Next.js"],

        github: "https://github.com/Perception12/Raspberry-Pi-Violation-Capture",

        links: {
            demo: null,
            video: null,
            blog: null,
            gallery: "/projects/traffic-gallery", // local images
        },
    },
    {
        title: "Reinforcement Learning for Traffic Optimization",
        description:
            "A reinforcement learning system using SUMO simulations to optimize traffic flow and reduce congestion.",

        image: "/projects/rl_traffic_control.png",

        tags: ["Reinforcement Learning", "Python", "SUMO"],

        github: "https://github.com/Perception12/traffic-optimization-RL",

        links: {
            demo: null,
            video: null,
            blog: null,
            gallery: null,
        },
    },
    {
        title: "LitSense",
        description:
            "An AI-powered literary recommendation and decision-support system designed to help users make informed book-buying decisions.",

        image: "/projects/litsense.png",

        tags: ["LLM", "RAG", "Python"],

        github: "https://github.com/Perception12/LitSense",

        links: {
            demo: null,
            video: "/projects/demo/litsense",
            blog: null,
            gallery: null,
        },
    },

    {
        title: "Ripeness AI",
        description:
            "A computer vision system that assesses fruit ripeness to support better purchasing decisions in real-world market scenarios.",

        image: "/projects/ripeness_ai.png",

        tags: ["Computer Vision", "Deep Learning", "Python"],

        github: "https://github.com/Perception12/ripenessAI",

        links: {
            demo: null,
            video: null,
            blog: null,
            gallery: "/projects/fruit-gallery",
        },
    },

    {
        title: "Airbot",
        description:
            "An intelligent chatbot for airline-related queries, bookings, and support, built using LLMs with a conversational interface.",

        image: "/projects/airbot.png",

        tags: ["LLM", "OpenAI", "Gradio", "SQLite"],

        github: "https://github.com/Perception12/Airbot",

        links: {
            demo: null,
            video: null,
            blog: "https://medium.com/@kehindeadejumobi82/building-a-flight-booking-chatbot-with-llm-tool-calling-5f2d055f8423",
            gallery: null,
        },
    },
];


export const demo_projects = [
    {
        id: "litsense",

        title: "LitSense",
        description:
            "An AI-powered literary recommendation and decision-support system designed to help users make informed book-buying decisions.",

        image: "/projects/litsense.png",

        tags: ["LLM", "RAG", "Python"],

        github: "https://github.com/Perception12/LitSense",

        video_url: "https://res.cloudinary.com/dejof2wbu/video/upload/q_auto,f_auto/final_demo_q764aq.mp4"
    }
]