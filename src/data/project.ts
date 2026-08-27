export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        journal?: string;
        live?: string;
        code?: string;
        colab?: string;
    };
}

export const projects: Project[] = [
    {
        title: "POS TPC-C Benchmark (Thesis)",
        description: "Comparative performance analysis of multi-tenant database architectures (Single-DB vs. Multi-DB) using simulated TPC-C transaction workloads.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
        tags: ["Golang", "PostgreSQL", "Locust", "Prometheus"],
        links: {
            journal: "https://ejournal.unesa.ac.id/index.php/jinacs/article/view/80583",
            code: "https://github.com/sajidannn/skripsi-project",
        },
    },
    {
        title: "MI Assa’adah AIS",
        description: "Web-based school portal & online admission system with RBAC for Admin, Teachers, and Parents. Developed using Waterfall methodology & IEEE standards.",
        image: "/images/assadah.png",
        tags: ["React.js", "Golang", "PostgreSQL"],
        links: {
            live: "https://miassaadah.app/",
            code: "https://github.com/STIPENDEV",
        },
    },
    {
        title: "AIoTinsight",
        description: "IoT analytics platform analyzing simulation data from Wokwi. Provides actionable insights for energy optimization using AI predictive models.",
        image: "/images/IoTInsight.png",
        tags: ["React", "Golang", "Hugging Face API"],
        links: {
            code: "https://github.com/sajidannn/fcp-rg-ai",
        },
    },
    {
        title: "Exni Asset Management",
        description: "Corporate asset management backend. Facilitates tracking of vehicles, buildings, and leasing operations to streamline utilization.",
        image: "/images/exni.jpeg",
        tags: ["Node.js", "Express", "PostgreSQL"],
        links: {
            live: "https://exni.web.id/",
            code: "https://github.com/sajidannn/exni",
        },
    },
    {
        title: "Wound Detection AI",
        description: "Python program using Active Contour and Mask Fill Poly techniques with Decision Tree classification for medical imaging analysis.",
        image: "/images/active-contour.jpg",
        tags: ["Python", "OpenCV", "Decision Tree"],
        links: {
            colab: "https://colab.research.google.com/drive/15QQ5NpK2WA9k0SeahLutFm3jNkz2oT1t?usp=sharing",
        },
    },
    {
        title: "Forum API",
        description: "Clean architecture REST API implementation with JEST automation testing, CI/CD pipelines, and cloud deployment.",
        image: "/images/forumAPI.jpeg",
        tags: ["Hapi.js", "AWS RDS/S3", "GitHub Actions"],
        links: {
            code: "https://github.com/sajidannn/Dicoding-BE-Expert",
        },
    },
    {
        title: "NeoSmart",
        description: "Interactive learning platform designed to help children identify and dodge hoaxes/fake news on social media.",
        image: "/images/neosmart.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        links: {
            live: "https://neosmart2.netlify.app/",
            code: "https://github.com/sajidannn/submission-dicoding-FE",
        },
    },
];
