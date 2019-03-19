import React, { Component } from 'react';
import { Container, Grid, } from 'semantic-ui-react';
import  NavMenu  from '../NavMenu';
import DateBanner from '../DateBanner'
import Footer from './components/Footer'

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <DateBanner />
        <Grid>
        <NavMenu />
        <Grid.Column stretched width={12}>
        {/* What difference between Container and Segment? */}
        <Container fluid>
          {this.props.children}
        </Container>
          {/* <Segment> */}
            {/* This is an stretched grid column. This segment will always match the tab height */}
            {/* {this.props.children} */}
          {/* </Segment> */}
        </Grid.Column>
        </Grid>
        <Footer />
      </div>
    );
  }
}
