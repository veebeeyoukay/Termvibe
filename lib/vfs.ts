export type NodeType = "file" | "directory";

export interface VFSNode {
  name: string;
  type: NodeType;
  children?: Record<string, VFSNode>;
  content?: string;
}

export class VirtualFS {
  root: VFSNode;
  currentPath: string[];

  constructor() {
    this.root = {
      name: "/",
      type: "directory",
      children: {
        home: {
          name: "home",
          type: "directory",
          children: {
            vibe: {
              name: "vibe",
              type: "directory",
              children: {},
            },
          },
        },
      },
    };
    this.currentPath = ["home", "vibe"];
  }

  private getNode(path: string[]): VFSNode | null {
    let current = this.root;
    for (const part of path) {
      if (current.type !== "directory" || !current.children) return null;
      if (!current.children[part]) return null;
      current = current.children[part];
    }
    return current;
  }

  private resolvePath(pathStr: string): string[] {
    const parts = pathStr.split("/").filter((p) => p !== "" && p !== ".");
    let newPath = pathStr.startsWith("/") ? [] : [...this.currentPath];

    for (const part of parts) {
      if (part === "..") {
        if (newPath.length > 0) newPath.pop();
      } else {
        newPath.push(part);
      }
    }
    return newPath;
  }

  pwd(): string {
    return "/" + this.currentPath.join("/");
  }

  cd(pathStr: string): string {
    if (!pathStr || pathStr === "~") {
      this.currentPath = ["home", "vibe"];
      return "";
    }
    const targetPath = this.resolvePath(pathStr);
    const node = this.getNode(targetPath);

    if (!node) return `cd: ${pathStr}: No such file or directory`;
    if (node.type !== "directory") return `cd: ${pathStr}: Not a directory`;

    this.currentPath = targetPath;
    return "";
  }

  ls(pathStr: string = "."): { output: string; error?: string } {
    const targetPath = this.resolvePath(pathStr);
    const node = this.getNode(targetPath);

    if (!node) return { output: "", error: `ls: ${pathStr}: No such file or directory` };

    if (node.type === "file") {
      return { output: node.name };
    }

    if (node.children) {
      return { output: Object.keys(node.children).sort().join("  ") };
    }

    return { output: "" };
  }

  mkdir(pathStr: string): string {
    const parts = this.resolvePath(pathStr);
    const name = parts.pop();
    if (!name) return "mkdir: missing operand";

    const parentNode = this.getNode(parts);
    if (!parentNode) return `mkdir: cannot create directory ‘${pathStr}’: No such file or directory`;
    if (parentNode.type !== "directory") return `mkdir: cannot create directory ‘${pathStr}’: Not a directory`;

    if (!parentNode.children) parentNode.children = {};
    if (parentNode.children[name]) return `mkdir: cannot create directory ‘${pathStr}’: File exists`;

    parentNode.children[name] = {
      name: name,
      type: "directory",
      children: {},
    };
    return "";
  }

  touch(pathStr: string, content: string = ""): string {
    const parts = this.resolvePath(pathStr);
    const name = parts.pop();
    if (!name) return "touch: missing file operand";

    const parentNode = this.getNode(parts);
    if (!parentNode) return `touch: cannot touch ‘${pathStr}’: No such file or directory`;
    if (parentNode.type !== "directory") return `touch: cannot touch ‘${pathStr}’: Not a directory`;

    if (!parentNode.children) parentNode.children = {};

    if (parentNode.children[name]) {
      if (parentNode.children[name].type === "file") {
        parentNode.children[name].content = content;
      }
      return "";
    }

    parentNode.children[name] = {
      name: name,
      type: "file",
      content: content,
    };
    return "";
  }

  cat(pathStr: string): string {
    const targetPath = this.resolvePath(pathStr);
    const node = this.getNode(targetPath);

    if (!node) return `cat: ${pathStr}: No such file or directory`;
    if (node.type === "directory") return `cat: ${pathStr}: Is a directory`;

    return node.content || "";
  }

  rm(pathStr: string, recursive: boolean = false): string {
    const parts = this.resolvePath(pathStr);
    const name = parts.pop();
    if (!name) return "rm: missing operand";

    const parentNode = this.getNode(parts);
    if (!parentNode || !parentNode.children || !parentNode.children[name]) {
      return `rm: cannot remove ‘${pathStr}’: No such file or directory`;
    }

    const node = parentNode.children[name];
    if (node.type === "directory" && !recursive) {
      return `rm: cannot remove ‘${pathStr}’: Is a directory`;
    }

    delete parentNode.children[name];
    return "";
  }
}
