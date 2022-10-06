import Head from 'next/head'
import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Marwan's Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
