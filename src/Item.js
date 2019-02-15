import React from 'react';
import CSSModules from 'react-css-modules';
import style from './kalender.css';


class Item extends React.Component {

	onSelectedItem() {
		this.props.onSelectedItem(this.props.entriesItem);
	}

	render() {
		const eintrag = this.props.entriesItem;
		return (
			<div>
				<p className='tbl_eintrag' onClick={this.onSelectedItem.bind(this)} /*onClick={this.togglePopup.bind(this)} onClick={zeigeEintrag(this.id)}*/>
					{(eintrag.BEGINN).substring(0,5)} {eintrag.LIGA}
				</p>
			</div>
		)
	}
}

//export default Item;
export default CSSModules(Item, style);