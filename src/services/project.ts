import HTTP from "./http";
import { IIssue } from "@/interfaces/issue";
import { IProject } from "@/interfaces/project";

export const getProject = () => {
  return HTTP.get<IProject>("/data/project.json");
};
