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

const ForewordContainer = styled.div`
  background: white;
  margin: 0 -100px 0 -100px;
  padding: 0 120px;
  max-width: 800px;
  p {
    padding: 0 20px;
    font-size: 18px;
    &.signature {
      text-align: right;
    }
  }
  color: #4d4d4d;
`

const AfterwordContainer = styled.div`
  background: white;
  margin: 0 -100px 0 -100px;
  padding: 0 120px;
  font-size: 14px;
  color: #4d4d4d;
  max-width: 800px;
  a {
    color: #4d4d4d;
    -webkit-text-decoration-color: #409CF0;
    text-decoration-color: #409CF0;
    &:hover {
      color: #409CF0;
    }
  }
`

const Delimiter = styled.hr`
  background-repeat: repeat-x;
  background-size: auto 3px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='Squiggle-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23444' stroke-width='1' class='st0' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  width: 110px;
  height: 3px;
  border: none;
  margin: 30px 0;
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

const Foreword = () => 
  (
    <ForewordContainer>
      <SubHeader>À propos</SubHeader>
      <p>Nous avons dressé ici la liste non exhaustive des théâtres Parisiens en activité ou ayant cessé leur activité
      mais pour lesquels subsistent aujourd’hui encore une façade qui témoigne de leur existence passée.</p>
      <p>Nous avons voulu outre une fiche technique (direction, adresse et coordonnées) permettre au visiteur de
      visualiser la photo des façades de chacun des établissements dans leur « jus » sans retouche et de s’informer de leur
      histoire lorsque celle-ci est connue.</p>
      <p>Le classement de tous ces établissements s’est fait par arrondissement et sans tenir compte de leur
      importance, du type de spectacle qu’ils présentent et de leur statut qu’il soit théâtre public, privé ou national. Sont
      inclus les théâtres amateurs, des écoles et ateliers de théâtre, des Café-théâtre qui disposent d’une salle ou les
      acteurs peuvent s’exprimer et les salles qui ont été théâtre à un moment de leur histoire même si aujourd’hui leur
      destinée est tout autre.</p>
      <p className="signature"><em>Christian Terral et Nicolas Goutay</em></p>
    </ForewordContainer>
  )

  const Afterword = () => 
  (
    <AfterwordContainer>
      <p>Les renseignements fournis sont pris auprès des sites des théâtres eux-mêmes ou sur divers autres sites. Si ces
      renseignements sont erronés merci de bien vouloir nous communiquer tous les renseignements qui nous permettront de
      rétablir la réalité. Les établissements qui ne seraient pas répertoriés ou pour ceux qui ne souhaiteraient pas
      figurer sur ce site merci de nous en faire par à <a href="mailto:christian.terral@club-internet.fr">christian.terral@club-internet.fr</a> ou <a href="mailto:nicolas.goutay@gmail.com">nicolas.goutay@gmail.com</a>.</p>
      <p>Les cafés théâtres ne seront pas systématiquement répertoriés, seuls quelques-uns ont été choisis au hasard
      afin de témoigner de la grande richesse culturelle Parisienne.</p>
      <p>Toutes les photographies sont de Christian Terral.</p>
      <p>Les sources : <a href="https://wikipedia.fr/">Wikipédia</a> – sites des divers théâtres – <a href="http://www.arcadi.fr/">http://www.arcadi.fr/</a> –
      <a href="http://www.paris.fr/culture">http://www.paris.fr/culture</a> – <a href="http://www.lesptitsmolieres.com/">http://www.lesptitsmolieres.com/</a>
      – <a href="http://www.offi.fr/">http://www.offi.fr/</a> – <a href="http://www.theatresparisiensassocies.com/">http://www.theatresparisiensassocies.com/</a>
      – <a href="http://www.theatresprives.com/">http://www.theatresprives.com/</a></p>
      <p>Ce site a été réalisé avec <a href="https://www.gatsbyjs.org/">GatsbyJS</a>. Les sources sont disponibles sur <a href="https://github.com/phacks/theatres-parisiens">GitHub</a>.</p>
    </AfterwordContainer>
  )

export default ({ data }) => {
  const theatresByArrondissement =
    groupBy(
      map(data.allMarkdownRemark.edges, ({ node }) => node),
      (node) => node.frontmatter.arrondissement
    )
  return (
    <div>
      <Foreword />
      <Delimiter />
      {keys(theatresByArrondissement).map((arrondissement) =>
        <ArrondissmentList key={arrondissement}>
          <SubHeader>
            Théâtres du <span dangerouslySetInnerHTML={{__html: ARRONDISSEMENT_NAMES[arrondissement]}} /> arrondissement
          </SubHeader>
          <TheatreList theatres={theatresByArrondissement[arrondissement]} />
        </ArrondissmentList>
      )}
      <Delimiter />
      <Afterword />
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