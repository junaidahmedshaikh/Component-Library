import {
  Folder as FolderIcon,
  FileCode,
  File,
  FolderClosed,
  UserRound,
  Contact,
} from "lucide-react";

export const sampleTree: TreeNodeData[] = [
  {
    id: "1",
    label: "Frontend",
    icon: <FolderIcon className="w-4 h-4" />,
    children: [
      {
        id: "1-1",
        label: "src",
        icon: <FolderClosed className="w-4 h-4" />,

        children: [
          {
            id: "1-1-1",
            label: "App.tsx",
            icon: <File className="w-4 h-4" />,
          },
          {
            id: "1-1-1",
            label: "index.css",
            icon: <File className="w-4 h-4" />,
          },
          {
            id: "1-1-1",
            label: "main.tsx",
            icon: <File className="w-4 h-4" />,
          },
        ],
      },
      {
        id: "1-2",
        label: "index.html",
        icon: <FileCode className="w-4 h-4" />,
      },
    ],
  },
];
export const data = [
  {
    title: "🎨 Tailwind CSS ",
    content:
      "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites. Instead of writing custom CSS, developers use pre-defined utility classes directly in their HTML to style components. This approach results in faster development and more maintainable code, especially in large projects.",
  },
  {
    title: "📘 React.js",
    content:
      "React.js is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components and manage complex UIs using a declarative programming style. With features like JSX (JavaScript XML), a virtual DOM for efficient rendering, and a component-based architecture, React helps in building fast and scalable web apps.",
  },
  {
    title: "🧠 TypeScript",
    content:
      "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional types, interfaces, and compile-time checking to JavaScript, improving code quality, readability, and developer experience. It works seamlessly with React and other JavaScript libraries, making large-scale development more manageable.",
  },
];
export const tabItems = [
  {
    label: "Home",
    content:
      "This is Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.",
    icon: <UserRound className="w-5 h-5" />,
  },
  {
    label: "Contact",
    content:
      "This is Contacts tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.",
    icon: <Contact className="w-5 h-5" />,
  },
  {
    label: "Disabled",
    content: "You can't access this one.",
    disabled: true,
  },
];
