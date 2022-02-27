import { IssueStatus, IssueType } from "@/enums/issue";

export interface IIssue {
  id: number;
  title: string;
  type: IssueType;
  status: IssueStatus;
  assignedUserId: number;
}
