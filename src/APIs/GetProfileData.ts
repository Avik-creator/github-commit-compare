import axios from "axios";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Response {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear'
  };
  contributions: Array<Contribution>;
}

export interface GitHubInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  name: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export const GetProfileData = async (username: string): Promise<Response> => {
  try {
    const response = await axios.get(
      `https://github-contributions-api.jogruber.de/v4/${username}`,
    );
    return response.data;
  } catch (error) {
    console.error("Some Error Occured: ", error);
    throw error;
  }
};

export const GetGitHubInfo = async (userName: string): Promise<GitHubInfo> => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`,
    );
    return response.data;
  } catch (error) {
    console.error("some error:", error);
    throw error;
  }
};
