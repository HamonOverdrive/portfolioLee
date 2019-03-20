import React from 'react';
import { Container, Grid, Segment, Header, List } from 'semantic-ui-react';
import './Footer.css'

const Footer = props => (
  <footer>
     <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              {/* <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List> */}
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Portfolio links' />
              <List link >
                <List.Item
                as='a'
                content={<a href='https://github.com/HamonOverdrive'>https://github.com/HamonOverdrive</a>}></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4'>
                Built by Robin Lee
              </Header>
              <p>
                Website made with React, .Net Core MVC, and Semantic UI
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </footer>
);

export default Footer;
