import { Heading, Box, Main } from "grommet";
import Head from "next/head"

import { Component } from 'react'
import { attributes, react as HomeContent } from '../../_collections/posts/oxie.md';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head />
        <Main pad="large">
          <Heading size="xxxlarge">{title}</Heading>
          <HomeContent />
          <Box>
            {cats.map((cat, k) => (
              <Box key={k}>
                <Heading size="xlarge">{cat.name}</Heading>
                <p>{cat.description}</p>
              </Box>
            ))}
          </Box>
        </Main>
      </>
    )
  }
}