import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import groupBy from 'lodash/groupBy'
import keys from 'lodash/keys'
import map from 'lodash/map'

const ArrondissmentList = styled.div`
  margin-bottom: 30px;
`

const SubHeader = styled.h2`
  font-family: 'IBM Plex Sans';
  margin: auto;
  font-weight: normal;
  margin-bottom: 30px;
`

const TheatreItem = styled.h3`
  font-family: 'IBM Plex Sans';
  margin: auto;
  margin-bottom: 20px;
  font-weight: normal;
  padding-left: 20px;
`

const StyledLink = styled(Link)`
  color: black;
  -webkit-text-decoration-color: #409CF0;
  text-decoration-color: #409CF0;
  &:hover {
    color: #409CF0;
  }
`

const ARRONDISSEMENT_NAMES = {
  1: '1<sup>er</sup>',
  2: '2<sup>e</sup>',
  3: '3<sup>e</sup>',
  4: '4<sup>e</sup>',
  5: '5<sup>e</sup>',
  6: '6<sup>e</sup>',
  7: '7<sup>e</sup>',
  8: '8<sup>e</sup>',
  9: '9<sup>e</sup>',
  10: '10<sup>e</sup>',
  11: '11<sup>e</sup>',
  12: '12<sup>e</sup>',
  13: '13<sup>e</sup>',
  14: '14<sup>e</sup>',
  15: '15<sup>e</sup>',
  16: '16<sup>e</sup>',
  17: '17<sup>e</sup>',
  18: '18<sup>e</sup>',
  19: '19<sup>e</sup>',
  20: '20<sup>e</sup>',
}

const TheatreList = (props) =>
  (<div>
    {props.theatres.sort(
        (a, b) => a.frontmatter.title.toLowerCase() > b.frontmatter.title.toLowerCase()
      ).map((theatre) =>
      (<div key={theatre.id}>
        <TheatreItem>
          <StyledLink to={theatre.fields.slug}>
            {theatre.frontmatter.title}
          </StyledLink>
        </TheatreItem>          
      </div>)
    )}
  </div>
)

export default ({ data }) => {
  const theatresByArrondissement =
    groupBy(
      map(data.allMarkdownRemark.edges, ({ node }) => node),
      (node) => node.frontmatter.arrondissement
    )
  return (
    <div>
      {keys(theatresByArrondissement).sort(
        (a, b) => a.toLowerCase() > b.toLowerCase()
      ).map((arrondissement) =>
        <ArrondissmentList key={arrondissement}>
          <SubHeader>
            Théâtres du <span dangerouslySetInnerHTML={{__html: ARRONDISSEMENT_NAMES[arrondissement]}} /> arrondissement
          </SubHeader>
          <TheatreList theatres={theatresByArrondissement[arrondissement]} />
        </ArrondissmentList>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            arrondissement
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`