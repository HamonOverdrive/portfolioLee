import React from 'react'
import { Header, Icon, Image, Grid, Card } from 'semantic-ui-react'
import CageShopper from './CageShopper.png'
import Pandemic from './Pandemic.png'
import StyledGridCol from './styles/StyledGridCol'
import './Projects.css'


const Projects = () => (
  <div>
    <Header as='h1' icon textAlign='center'>
      {/* <Image circular src={'#'}/> */}
      <Icon name="coffee"/>
      <Header.Content>Projects</Header.Content>
    </Header>
    <Grid centered columns={2}>
      <StyledGridCol width={6}>
        <Card className="project">
          <Image src={Pandemic} />
          <Card.Content>
            <Card.Header>Pandemic Code Red </Card.Header>
            <Card.Meta>Feb 2019</Card.Meta>
            <Card.Description>Pandemic board game web application version of the game
            - Built with React front end and Firebase for database manipulation for changes of state of board game.
            - Visual map displays using React simple maps library with svg manipulation done on frontend.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </StyledGridCol>
      <StyledGridCol width={6}>
        <Card className="project">
          <Image src={CageShopper} />
          <Card.Content>
            <Card.Header>Cage Shopper</Card.Header>
            <Card.Meta>Jan 2019</Card.Meta>
            <Card.Description>Fully functional e-commerce website selling Nicholas Cage products
              - Backend utilizes Node.js and Sequelize to handle postgresql models such as user data models for login/logout features and cart functionality .
              - Frontend using React and Redux to change states for users and display correct data on the frontend.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </StyledGridCol>
    </Grid>
  </div>
)

export default Projects
