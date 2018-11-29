import React from 'react'
import CSSModules from 'react-css-modules';
import Grid from './Grid'
import style from './kalender.css';
import EntriePopup from './EntriePopup';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
      showEntrie: false,
      selectedEntrie: null
		};
  }
  showEntrie(entrie) {
		this.setState({
      showEntrie: !this.state.showEntrie,
      selectedEntrie: entrie
		});
	}
	togglePopup() {
    this.setState({
      showEntrie: !this.state.showEntrie
    });
  }

  render() {
    return (
      <div>
        <div>
					<Grid onSelectedItem={this.showEntrie.bind(this)}/>
        </div>
				{this.state.showEntrie ? <EntriePopup entriePopup={this.state.selectedEntrie} closePopup={this.togglePopup.bind(this)} /> : null}
      </div>
    )
  }
}

export default CSSModules(App, style);
