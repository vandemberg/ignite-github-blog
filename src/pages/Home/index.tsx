import { Buildings, GithubLogo, Link, Person } from "phosphor-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link as LinkTo } from "react-router-dom";

import {
  CardProfile,
  PostCard,
  PostsContainer,
  Profile,
  ProfileAccount,
  ProfileBio,
  ProfileFooter,
  ProfileHeader,
  PublishCount,
  SearchContainer,
  SearchTitle,
} from "./styles";

interface GithubProfile {
  name: string;
  avatar_url: string;
  bio: string;
}

interface GithubIssues {
  number: number;
  created_at: string;
  title: string;
  body: string;
}

export function Home() {
  const [githubProfile, setGithubProfile] = useState<GithubProfile>({
    name: "",
    avatar_url: "",
    bio: "",
  });

  const [issues, setIssues] = useState<GithubIssues[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [searchTimeout, setSearchTimeout] = useState<any>();

  async function fetchGithubProfile() {
    let githubProfile = JSON.parse(
      localStorage.getItem("githubProfile") || "{}"
    );
    if (Object.keys(githubProfile).length == 0) {
      const response = await fetch("https://api.github.com/users/vandemberg");
      githubProfile = await response.json();
      localStorage.setItem("githubProfile", JSON.stringify(githubProfile));
    }

    setGithubProfile({
      name: githubProfile.name,
      avatar_url: githubProfile.avatar_url,
      bio: githubProfile.bio,
    });
  }

  async function fetchIssues() {
    const response = await fetch(
      "https://api.github.com/repos/vandemberg/ignite-github-blog/issues?state=open&per_page=10&page=1"
    );
    const data = await response.json();
    setIssues(data as GithubIssues[]);
  }

  async function handleSearchButton(value: string) {
    const username = "vandemberg";
    const repo = "ignite-github-blog";
    const searchQuery = value;
    const url = `https://api.github.com/search/issues?q=${searchQuery}+repo:${username}/${repo}`;

    const response = await fetch(url);
    const data = await response.json();

    setIssues(data.items as GithubIssues[]);
  }

  function handleSearchInputChange(value: string) {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      handleSearchButton(value);
    }, 500);

    setSearchTimeout(timeout);
  }

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      <CardProfile>
        <img src={githubProfile.avatar_url} />

        <Profile>
          <ProfileHeader>
            <span>{githubProfile.name}</span>
            <a href="#">
              Github <Link size={"1rem"} />
            </a>
          </ProfileHeader>

          <ProfileBio>{githubProfile.bio}</ProfileBio>

          <ProfileFooter>
            <ProfileAccount>
              <GithubLogo /> vandemberg
            </ProfileAccount>

            <ProfileAccount>
              <Buildings /> RDStation
            </ProfileAccount>

            <ProfileAccount>
              <Person /> 32 seguidores
            </ProfileAccount>
          </ProfileFooter>
        </Profile>
      </CardProfile>

      <SearchContainer>
        <div>
          <SearchTitle>Publicações</SearchTitle>
          <PublishCount>{6} publicações</PublishCount>
        </div>

        <input
          onChange={(e) => handleSearchInputChange(e.target.value)}
          name="query"
          type="text"
          placeholder="Buscar conteúdo"
        />
      </SearchContainer>

      <PostsContainer>
        {issues.map((issue) => (
          <LinkTo to={`/post/${issue.number}`} key={issue.number}>
            <PostCard key={issue.number}>
              <div>
                <h3>{issue.title}</h3>
                <span>{new Date(issue.created_at).toLocaleDateString()}</span>
              </div>

              <p>
                <ReactMarkdown allowedElements={["p"]}>
                  {issue.body}
                </ReactMarkdown>
              </p>
            </PostCard>
          </LinkTo>
        ))}
      </PostsContainer>
    </>
  );
}
