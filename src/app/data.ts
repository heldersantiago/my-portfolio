interface Project {
  id: number;
  company: string;
  title: string;
  description: string;
  stacks: string[];
}
export const data: Project[] = [
  {
    id: 1,
    company: "Zelosos Tecnlogy",
    title: "Gest Flex",
    description: "",
    stacks: ["Angular", "C# ASP.NET", "MySQL"],
  },
  {
    id: 2,
    company: "ADN Lógico",
    title: "CRM Nuntiusone",
    description: "",
    stacks: ["PHP/CodeIgniter", "REST/SOAP", "MySQL", "Cpanel"],
  },
];
