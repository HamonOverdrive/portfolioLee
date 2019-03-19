import React from 'react'
import { Header, Icon, Image, Segment, Grid } from 'semantic-ui-react'
import profile from './profile.png'
import './Home.css'
import VertParagraph from './styles/VertParagraph'
import TwelveGridCol from './styles/TwelveGridCol'

const Home = () => (
  <div>
    <Header as='h1' icon textAlign='center'>
      {/* <Icon name='users' circular /> */}
      <Image circular src={profile}/>
      <Header.Content>Introduction</Header.Content>
    </Header>
    <Grid centered columns={2}>
      <TwelveGridCol width={12} className="innerContent">
        <VertParagraph>About Me</VertParagraph>
        <p className="aboutParagraph">
        Hi my name is Robin and I am a software developer and a lifelong student of programming. The growing new technologies absolutely excite me to learn more about software development and the problems I will be able to solve with them. I love to learn new skills and solving challenging problems.
      </p>
      </TwelveGridCol>
    </Grid>
  </div>
)

export default Home
