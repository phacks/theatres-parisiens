import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { media } from './style-utils';
import './index.css'
import './font-face.css'

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 30px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  border-color: #fff;
  box-shadow: 0 0 20px 7px #f1f1f1;
  ${media.handheld`
    margin: 0;
  `}
`

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 85px;
  ${media.handheld`
    margin-top: 50px;
  `}
`

const Header = styled.h1`
  margin: auto;
  font-weight: normal;
`

const ContentWrapper = styled.div`
  width: calc(100% - 160px);
  margin: 50px 100px;
  ${media.handheld`
    width: calc(100% - 40px);
    margin: 20px;
  `}
`

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Théâtres Parisiens"
      meta={[
        { name: 'description', content: 'Annuaire illustré et détaillé des théâtres parisiens.' },
        { name: 'keywords', content: 'theatre, paris' },
      ]}
      lang="fr"
    />
    <Wrapper>
      <HeaderWrapper>
        <Header>Théâtres Parisiens</Header>
      </HeaderWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Wrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
