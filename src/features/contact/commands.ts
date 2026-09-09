export type TerminalResult = {
  text: string;
  href?: string;
  label?: string;
  clear?: boolean;
};
import { profile } from "../../content/profile.ts";
const email = profile.email;
export function executeCommand(input: string): TerminalResult {
  const command = input.trim().toLowerCase();
  switch (command) {
    case "help":
      return { text: "Available commands: about, email, linkedin, cv, clear." };
    case "about":
      return {
        text: "Daniel Alanaz — Full-Stack Architect & Engineering Team Lead. Enterprise systems, AI automation, and real-time 3D. Based in Beirut, Lebanon.",
      };
    case "email":
      return { text: email, href: `mailto:${email}`, label: "Open email" };
    case "linkedin":
      return {
        text: "Connect with Daniel on LinkedIn.",
        href: profile.linkedin,
        label: "Open LinkedIn",
      };
    case "cv":
      return {
        text: "Daniel Alanaz — CV 2026",
        href: profile.cv,
        label: "Read CV",
      };
    case "clear":
      return { text: "", clear: true };
    case "":
      return { text: "Type help to see the available commands." };
    default:
      return {
        text: `Command not found: ${input.slice(0, 80)}. Type help for available commands.`,
      };
  }
}
