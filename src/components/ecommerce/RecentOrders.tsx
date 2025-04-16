import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

// Define the TypeScript interface for the fight rows
interface Fight {
  id: number; // Unique identifier for each fight
  fighter1: string; // Name of the first fighter
  fighter2: string; // Name of the second fighter
  reson: string; // Number of rounds in the fight
  rounds: string; // Number of rounds in the fight
  arena: string; // Arena where the fight took place
  date: string; // Date of the fight
  status: "Won🎉" | "Draw😔" | "Draw" | "Decision Pending😔"; // Status of the fight
  fighterIcon: string; // Icon representing the fighter (emojis or other symbols)
}

// Define the table data using the interface
const tableData: Fight[] = [
  {
    id: 1,
    fighter1: "Panda🐼",
    fighter2: "Admin",
    reson: "Ahhh, the decision made by the panda to not talk with the super admin... 🐼❌📱😔😞",
    rounds: "1 Round",
    arena: "Office🏢",
    date: "2024-02-10",
    status: "Draw😔",
    fighterIcon: "🥊", // Boxer icon as a placeholder for the fighter
  },
  {
    id: 2,
    fighter1: "Panda🐼",
    fighter2: "Admin",
    reson: "The panda didn't come to the admin's birthday... 🐼🎂🎉😔",
    rounds: "1 Round",
    arena: "Online🌐",
    date: "2024-07-13",
    status: "Draw😔",
    fighterIcon: "🥊", // Boxer icon
  },
  {
    id: 3,
    fighter1: "Panda🐼",
    fighter2: "Admin",
    reson: "Ahhh, the panda isn't well, and the super admin won't listen or talk to the panda... 😢🐼🙉 (Super admin is being very bad😔!)",
    rounds: "1 Round",
    arena: "Home🏠",
    date: "2024-11-17",
    status: "Won🎉",
    fighterIcon: "🥊", // Boxer icon
  },
  {
    id: 4,
    fighter1: "Panda🐼",
    fighter2: "Admin",
    reson: "Ahhh, that's the moment... 😔😞 A very bad moment for both... 😢 But guess what? The panda wins! 🐼🎉 The panda did a very great job! 💪👏",
    rounds: "1 Round",
    arena: "Unknown Location😔",
    date: "2024-12-08",
    status: "Won🎉",
    fighterIcon: "🥊", // Boxer icon
  },
  {
    id: 5,
    fighter1: "Panda🐼",
    fighter2: "Admin",
    reson: "The super admin hurt the panda... 😔😔 Used bad words... Ahhh, the super admin hurt the panda and made it uncomfortable... 😢💔😞",
    rounds: "2 Rounds",
    arena: "Home🏠",
    date: "2025-03-14",
    status: "Decision Pending😔",
    fighterIcon: "🥊", // Boxer icon
  },
];

export default function RecentFights() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Fights 🥊
          </h3>
        </div>

        {/* <div className="flex items-center gap-3"> */}
          {/* <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button> */}
          {/* <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button> */}
        {/* </div> */}
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Fighters
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Reason
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Location
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((fight) => (
              <TableRow key={fight.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="text-xl">
                      {fight.fighterIcon} {/* Displaying the fighter icon (emoji) */}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {fight.fighter1} vs {fight.fighter2}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {fight.rounds}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {fight.reson}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {fight.date}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {fight.arena}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      fight.status === "Won🎉"
                        ? "success"
                        : fight.status === "Draw😔"
                        ? "error"
                        : "warning"
                    }
                  >
                    {fight.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
