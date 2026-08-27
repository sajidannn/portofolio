export interface Skill {
    name: string;
    icon: string; // path file SVG di public/images/
}

export const skills: Skill[] = [
    { name: "JavaScript", icon: "/images/icons8-javascript.svg?v=2" },
    { name: "Golang", icon: "/images/icons8-golang.svg?v=2" },
    { name: "Node.js", icon: "/images/icons8-nodejs.svg?v=2" },
    { name: "MySQL", icon: "/images/icons8-mysql.svg?v=2" },
    { name: "PostgreSQL", icon: "/images/icons8-postgresql.svg?v=2" },
    { name: "Docker", icon: "/images/icons8-docker.svg?v=2" },
    { name: "AWS", icon: "/images/icons8-aws.svg?v=2" },
    { name: "GCP", icon: "/images/icons8-google-cloud.svg?v=2" },
];
