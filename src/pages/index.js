import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

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
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration-color: #409CF0;
  &:hover {
    color: #409CF0;
  }
`

export default ({ data }) => {
  return (
    <div>
      <SubHeader>
        Liste des théâtres du 1er arrondissement
      </SubHeader>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <TheatreItem>
            <StyledLink to={node.fields.slug}>
              {node.frontmatter.title}{" "}
            </StyledLink>
          </TheatreItem>          
        </div>
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