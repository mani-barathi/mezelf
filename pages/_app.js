import Head from 'next/head'

import styled from 'styled-components'
import GlobalStyle from '@/styles/GlobalStyles'
import Navbar from "@/components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width:100%;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Container = styled.div`
  width:100%;
  max-width:1300px;
  flex:1;
  min-height:110vh;
  display:flex;
  flex-direction:column;
`

export default MyApp
