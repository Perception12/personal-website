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
            gallery: "/projects/gallery/traffic-control-system", // local images
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
            gallery: null
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



export const project_gallery = [
    {
        id: "traffic-control-system",
        title: "Traffic Control System",
        description: "A distributed system for detecting traffic violations using embedded sensors, with cloud-based logging and a real-time dashboard.",

        image: "/projects/traffic_control_system.png",

        tags: ["IoT", "Embedded Systems", "Cloud", "Next.js"],

        github: "https://github.com/Perception12/Raspberry-Pi-Violation-Capture",
        
        sections: [
            {
                title: "Hardware Assembly",
                description: "Building and wiring the control board and components.",
                images: [
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/a_-90/v1777746615/board_assembly_jyrecq.heic",
                        caption: "Initial board assembly with relays and sensors"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746614/wiring_bafbwf.jpg",
                        caption: "Wiring connections between components"
                    },
                ]
            },
            {
                title: "System Setup",
                description: "Configuring the Raspberry Pi and network components.",
                images: [
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746615/raspberrypi_interface_ac5vko.heic",
                        caption: "Raspberry Pi setup and configuration"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746611/camera_configuration_tmamcc.png",
                        caption: "Camera configuration"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746612/camera_test2_gpuxcn.jpg",
                        caption: "Initial camera calibration test"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746612/camera_test1_f8vyhs.heic",
                        caption: "Live feed validation under test conditions"
                    }
                ]
            },
            {
                title: "System Integration",
                description: "Interfacing the hardware, raspberry pi and camera systems together",
                images: [
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746613/packaged_device_il7vnk.jpg",
                        caption: "Packaged system"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746614/testing_device_tcezvh.jpg",
                        caption: "Packaged system powered on"
                    }
                ]
            },
            {
                title: "Testing and deployment",
                description: "Testing system triggers for image reporting",
                images: [
                    {
                        highlight: true,
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746613/testing_device2_wcnohi.jpg",
                        caption: "Testing relays for optimal traffic signal control"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746614/11_journalct_log_kmjiep.png",
                        caption: "Raspberry Pi logs for violation triggers and for troubleshooting"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746612/dashboard_wlcx18.png",
                        caption: "Dashboard showing images taken by the camera sent from the raspberry pi"
                    },
                    {
                        src: "https://res.cloudinary.com/dejof2wbu/image/upload/q_auto/f_auto/v1777746612/dashbaord_2_j5qvsf.png",
                        caption: "Dashboard showing images taken by the camera sent from the raspberry pi"
                    },
                ]
            }
        ]
    }
];