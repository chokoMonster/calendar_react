import React from 'react';
import CSSModules from 'react-css-modules';
import style from './kalender.css';
import Cell from './Cell'

class Row extends React.Component {
	
	onSelectedItem(entrie) {
		this.props.onSelectedItem(entrie);
	};
	
	render() {
		const days = this.props.days;
		const entries = this.props.entries;

		return (
			<tr>
				{days.map((day) => (
					<Cell dayCell={day} entriesCell={entries.filter(e => new Date(e.DATUM).getDate()==day)} onSelectedItem={this.onSelectedItem.bind(this)}/>
				))}
			</tr>
		)
	}
}

//export default Content;
export default CSSModules(Row, style);