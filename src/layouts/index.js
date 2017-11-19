import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

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
`

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 85px;
`

const Header = styled.h1`
  margin: auto;
  font-weight: normal;
`

const ContentWrapper = styled.div`
  width: calc(100% - 160px);
  margin: 100px;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Théâtres Parisiens"
      meta={[
        { name: 'description', content: 'Annuaire illustré et détaillé des théâtres parisiens.' },
        { name: 'keywords', content: 'theatre, paris' },
      ]}
    />
    <Wrapper>
      <HeaderWrapper>
        <Header>Théâtres Parisiens</Header>
      </HeaderWrapper>
      <ContentWrapper>
        {children()}
      </ContentWrapper>
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
