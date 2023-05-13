import { Component } from 'react';
import AppStyled from './AppStyled';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  onSubmit = searchQuery => {};

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
      </AppStyled>
    );
  }
}
