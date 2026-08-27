export interface LifestyleActivity {
    title: string;
    tagline: string;
    description: string;
    badge: string;
    icon: string;
    photos: { url: string; label: string }[];
}

export const lifestyleActivities: LifestyleActivity[] = [
    {
        title: "Road Running",
        tagline: "Endurance & Discipline",
        description: "Building mental grit and stamina through regular road runs, distance targets, and pace control.",
        badge: "5K & Half Marathon",
        icon: "footprints",
        photos: [
            { url: "/images/5k.png", label: "5K PB" },
            { url: "/images/HM.png", label: "HM PB" },
        ],
    },
    {
        title: "Cycling",
        tagline: "Cadence & Exploration",
        description: "Long weekend rides and cadence training to explore new routes while testing endurance limits.",
        badge: "Long Distance Ride",
        icon: "bike",
        photos: [
            { url: "/images/cycling.png", label: "Longest Ride PB" },
        ],
    },
    {
        title: "Swimming",
        tagline: "Stamina & Active Recovery",
        description: "Full-body conditioning and recovery lap sessions to maintain breathing control and physical balance.",
        badge: "Laps & Recovery",
        icon: "waves",
        photos: [
            { url: "/images/swim_PB.png", label: "Longest Swim PB" },
        ],
    },
];
