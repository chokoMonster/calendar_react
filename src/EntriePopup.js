import React from 'react';
import CSSModules from 'react-css-modules';
import style from './popup.css';


class EntriePopup extends React.Component {
	render() {
		const eintrag = this.props.entriePopup;
		return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{eintrag.LIGA}</h1>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
		)
	}
}

export default CSSModules(EntriePopup, style);