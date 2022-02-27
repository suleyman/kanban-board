import HTTP from "./http";
import { IIssue } from "@/interfaces/issue";

export const getIssues = () => {
  return HTTP.get<IIssue[]>("/data/issues.json");
};
