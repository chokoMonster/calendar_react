import React from 'react';
import CSSModules from 'react-css-modules';
import style from './kalender.css';
import Item from './Item'


class Cell extends React.Component {

	onSelectedItem(entrie) {
		this.props.onSelectedItem(entrie);
	}

	render() {
		let day = this.props.dayCell.toString();
		if(day=='0' || day=='100') {
			day = '';
		}
		const entries = this.props.entriesCell;

		return (
            <td className='tbl_tage tbl_zelle' id='zelle+{day}'>
				<p>{day}</p>
				{entries.map((entry) => (
					<Item entriesItem={entry} onSelectedItem={this.onSelectedItem.bind(this)}/>
				))}
			</td>
		)
	}
}

export default CSSModules(Cell, style);