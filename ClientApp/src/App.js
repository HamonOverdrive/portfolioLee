import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import  Home  from './scenes/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Projects from './scenes/Projects'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
