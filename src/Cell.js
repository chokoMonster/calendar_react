import React from 'react';
import CSSModules from 'react-css-modules';
import style from './kalender.css';
import Item from './Item'


class Cell extends React.Component {

	onSelectedItem(entrie) {
		this.props.onSelectedItem(entrie);
	}

	isFeiertag(date) {
		let feiertage = new Array("1.1","6.1","1.5","3.10","1.11","25.12","26.12");
		for (let i=0; i<feiertage.length; i++) {       
			if (feiertage[i].split(".")[0] == date.getDate() && feiertage[i].split(".")[1] == date.getMonth()+1)	{
				return true;
			}
		}
		return false;
	}

	render() {
		const month = this.props.month;
		const year = this.props.year;
		let day = this.props.dayCell.toString();
		if(day=='0' || day=='100') {
			day = '';
		}
		const entries = this.props.entriesCell;
		
		let style_cell = 'cell_default';
		if(day == new Date().getDate() && month == new Date().getMonth() && year == new Date().getFullYear()) {
			style_cell = 'cell_today';
		} else if(this.isFeiertag(new Date(year, month, day))) {
			style_cell = 'cell_holiday';
		}

		return (
            <td className={'tbl_tage tbl_zelle '+style_cell} id='zelle+{day}'>
				<p>{day}</p>
				{entries.map((entry) => (
					<Item entriesItem={entry} onSelectedItem={this.onSelectedItem.bind(this)}/>
				))}
			</td>
		)
	}
}

export default CSSModules(Cell, style);