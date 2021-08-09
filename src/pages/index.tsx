import { GetStaticProps } from "next";
import Grid from "../components/Grid";

import Hero from "../components/Hero";
import Layout from "../components/Layout";

import config from "../lib/config";
import { listPostContent, PostContent } from "../lib/posts";

type Props = {
  posts: PostContent[];
  title: string;
}

const Index = ({ posts }: Props) => {
  return (
    <Layout>
      <Hero 
      title=''
      />
      <Grid projects={posts}/>
    </Layout>
  );
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  
  return {
    props: {
      posts
    },
  };
};