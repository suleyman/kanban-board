import { IIssue } from "@/interfaces/issue";

export interface IProject {
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  title: string;
  issues: IIssue[];
}
