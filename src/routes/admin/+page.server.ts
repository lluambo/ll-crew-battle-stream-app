import fs from 'node:fs';

// 1. Define the default data to create if the file is missing
const DEFAULT_TEAMS = [
    {
        name: "Team 1",
        players: ["Player A", "Player B", "Player C", "Player D", "Player E"]
    },
    {
        name: "Team 2",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 3",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 4",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 5",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 6",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 7",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 8",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 9",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    },
    {
        name: "Team 10",
        players: ["Ryu", "Ken", "Guile", "Chun-Li", "Blanka"]
    }
];

export const load = async () => {
    const fileName = 'teams.json';

    try {
        // 2. Check if the file exists
        if (!fs.existsSync(fileName)) {
            // If NOT, create it with our default data
            console.log("teams.json not found. Creating default file...");
            fs.writeFileSync(fileName, JSON.stringify(DEFAULT_TEAMS, null, 2), 'utf-8');
        }

        // 3. Now read the file (whether it was just created or already existed)
        const fileContent = fs.readFileSync(fileName, 'utf-8');
        const teams = JSON.parse(fileContent);

        return {
            savedTeams: teams
        };

    } catch (error) {
        console.error("Error handling teams.json:", error);
        // Fallback so the app doesn't crash if something gets really messed up
        return {
            savedTeams: DEFAULT_TEAMS
        };
    }
};