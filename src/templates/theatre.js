import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { remarkForm } from "gatsby-tinacms-remark";

import { media } from "../components/style-utils";
import Layout from "../components/layout";

const SubHeader = styled.h2`
  font-family: "IBM Plex Sans";
  margin: auto;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  max-width: 900px;
  font-size: 18px;
  line-height: 1.5em;

  a {
    color: black;
    -webkit-text-decoration-color: #409cf0;
    text-decoration-color: #409cf0;
    &:hover {
      color: #409cf0;
    }
  }
`;

const StyledLink = styled(Link)`
  color: black;
  -webkit-text-decoration-color: #409cf0;
  text-decoration-color: #409cf0;
  &:hover {
    color: #409cf0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoTable = styled.table`
  font-family: "IBM Plex Mono";
  line-height: 1em;
  ${media.handheld`
    table-layout: fixed;
    width: 100%;  
  `}

  &:first-of-type {
    margin-right: 40px;
  }

  td {
    padding-bottom: 10px;
  }

  td:first-child {
    text-align: right;
    font-weight: bold;
    ${media.handheld`
      width: 35%;
    `}
  }

  td:last-child {
    padding-left: 10px;
    word-wrap: break-word;
  }

  a {
    color: black;
    -webkit-text-decoration-color: #409cf0;
    text-decoration-color: #409cf0;
    &:hover {
      color: #409cf0;
    }
  }
`;

export default remarkForm(({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <StyledLink to={"/"}>Retour à la liste des théâtres</StyledLink>
      <SubHeader>{post.frontmatter.title}</SubHeader>
      <InfoWrapper>
        <InfoTable>
          <tbody>
            <tr>
              <td>Direction</td>
              <td>{post.frontmatter.directors}</td>
            </tr>
            <tr>
              <td>Jauge</td>
              <td>{post.frontmatter.seating}</td>
            </tr>
            <tr>
              <td>Adresse</td>
              <td>{post.frontmatter.address}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{post.frontmatter.email}</td>
            </tr>
            <tr>
              <td>Site</td>
              <td>
                <a href={`http://${post.frontmatter.url}`}>
                  {post.frontmatter.url}
                </a>
              </td>
            </tr>
            <tr>
              <td>Téléphone</td>
              <td>{post.frontmatter.phone}</td>
            </tr>
            <tr>
              <td>Télécopie</td>
              <td>{post.frontmatter.fax}</td>
            </tr>
          </tbody>
        </InfoTable>
      </InfoWrapper>
      <Description dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
});

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
        directors
        seating
        email
        address
        phone
        fax
      }
      ...TinaRemark
    }
  }
`;
