import { repo } from "./repo";

export class user
{
    login: string;
    fullname: string;
    repocount: number;
    followercount: number;
    repos: repo[];
}