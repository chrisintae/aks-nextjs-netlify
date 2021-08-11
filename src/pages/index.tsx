import { GetStaticProps, GetStaticPaths } from "next";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Grid from "../components/Grid";

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { getContentFrontMatter } from '../lib/api'

type Props = {
  title: string;
  projects: any;
}

const Index = ({ projects }: Props) => {  
  return (
    <Layout>
      <Hero 
        title=''
        type=''
      />

      <Grid 
        projects={projects}
      />

    </Layout>
  );
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const projects = getContentFrontMatter('content/projects');

  return {
    props: {
      projects
    }
  }
}