import { VirtualFS } from "./vfs";

export class TerminalEngine {
  vfs: VirtualFS;

  constructor(vfs?: VirtualFS) {
    this.vfs = vfs || new VirtualFS();
  }

  execute(commandLine: string): string {
    const parts = commandLine.trim().split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case "pwd":
        return this.vfs.pwd();
      case "ls": {
        const path = args.find(a => !a.startsWith("-")) || ".";
        const result = this.vfs.ls(path);
        return result.error || result.output;
      }
      case "cd":
        return this.vfs.cd(args[0]);
      case "mkdir":
        return this.vfs.mkdir(args[0]);
      case "touch":
        return this.vfs.touch(args[0]);
      case "cat":
        return this.vfs.cat(args[0]);
      case "rm": {
        const isRecursive = args.includes("-r") || args.includes("-rf");
        const path = args.find(a => !a.startsWith("-"));
        if (!path) return "rm: missing operand";
        return this.vfs.rm(path, isRecursive);
      }
      case "echo":
        return args.join(" ");
      case "clear":
        return "CLEAR_TERMINAL";
      case "help":
        return "Available commands: pwd, ls, cd, mkdir, touch, cat, rm, echo, clear, help";
      default:
        return command ? `${command}: command not found` : "";
    }
  }
}
