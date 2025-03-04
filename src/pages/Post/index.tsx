import { ArrowLeft, Calendar, Chat, GithubLogo, LinkSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { ArticleContainer, PostInfoFooter, PostInfoHeader, PostInfos } from "./styled";

interface GithubIssues {
  number: number;
  created_at: string;
  title: string;
  body: string;
  comments: number;
}

function formatDate(dateString: string) {
  if(!dateString) return "";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export function Post() {
  const params = useParams();
  const number = params.number;

  const [post, setPost] = useState<GithubIssues>({
    number: Number(number),
    created_at: "",
    title: "",
    body: "",
  } as GithubIssues);

  useEffect(() => {
    fetch(`https://api.github.com/repos/vandemberg/ignite-github-blog/issues/${number}`)
    .then(response => response.json())
    .then(data => {
      setPost(data);
    });
  }, [number]);

  return (
    <>
      <PostInfos>
        <PostInfoHeader>
          <Link to="/"><ArrowLeft/> Voltar</Link>

          <a href="https://github.com/vandemberg">Ver no github <LinkSimple /></a>
        </PostInfoHeader>

        <h1>{post.title}</h1>

        <PostInfoFooter>
          <span><GithubLogo /> Vandemberg </span>
          <span><Calendar />{formatDate(post.created_at)} </span>
          <span><Chat /> {post.comments} comentários </span>
        </PostInfoFooter>
      </PostInfos>

      <ArticleContainer>
        <Markdown>{post.body}</Markdown>
      </ArticleContainer>
    </>
  )
}
