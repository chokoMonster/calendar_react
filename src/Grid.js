import React from 'react'
import CSSModules from 'react-css-modules';
import Row from './Row'
import style from './kalender.css';

class Grid extends React.Component {

	constructor(props){
        super(props)
        this.state = {
			todayDate: new Date(),
            month: (new Date()).getMonth(),
			year: this.props.year,
			days: [],
			dayData: [],
            tableData: [],
            loadingTable: false
        }
	}
	
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps');
        if(nextProps.month !== this.props.month || nextProps.year !== this.props.year){
			console.log('componentWillReceiveProps_2');
            this.getData(nextProps.month, nextProps.year)
			//this.calculateDays(nextProps.month, nextProps.year)
        }
	}

	componentDidMount(){
		console.log('componentDidMount');
		if(this.state.days.length==0) {
        	this.getData(new Date().getMonth(), new Date().getFullYear())
			//this.calculateDays(new Date().getMonth(), new Date().getFullYear())
		}
    }
	
	getData(month, year) {
        //const client = Rest.wrap(Mime)
    
        //this.setState({loadingTable: true});
        /*client({path: 'http://localhost:8080/api/dms?lieferantennr='+ month + "&artikelnr="+year}).then( response => { 
        
            let data = response.entity;
            this.setState({tableData: data,
                            loadingTable: false})
            

        }).catch(fromReject => {
            console.log("!!!ERROR!!!")
		})*/
		
		let data = [
			{
				"DATUM":"2018-09-08",
				"NR":1,
				"BEGINN":"17:00:00",
				"KATEGORIE":"team",
				"LIGA":"other_league"
			}, 
			{
				"DATUM":"2018-09-15",
				"NR":1,
				"BEGINN":"17:00:00",
				"KATEGORIE":"team",
				"LIGA":"other_league"
			},
			{
				"DATUM":"2018-09-15",
				"NR":2,
				"BEGINN":"19:00:00",
				"KATEGORIE":"team",
				"LIGA":"other_league"
			}
		];

		this.calculateDays(month, year, data)
    }
	
	render() {
		if(this.state.days.length==0) {
			return;
		}
		const monthNames = new Array('Januar', 'Februar', 'M&auml;rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember');
		const wochentage = new Array('Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag');
		let rowCount = new Array();
		for (let x=0; x<this.state.days.length; x++) {
			if(this.state.days[x][0]!=100) {
				rowCount[x] = x;
			}
		}

		return (
			<table id='tbl_kalender' className='tbl'>
			<tbody>
				{/*<tr style='visibility:collapse;' hidden>
					<td colspan={7} id='datum_akt'>{this.state.year+', '}</td></tr>*/}

				<tr>
					<td className='tbl_title'><a className='tbl_move' /*onClick={prevMonth()}*/ >&laquo;</a></td>
					<td colSpan={5} className='tbl_title' id='monatName'>{monthNames[this.state.month]}</td>
					<td className='tbl_title'><a className='tbl_move' /*onClick={nextMonth()}*/> &raquo;</a></td>
				</tr>
				<tr>
				{wochentage.map((wochentag) => (
					<td className='tbl_head tbl_zelle'>{wochentag}</td>
				))}
				</tr>
				{rowCount.map((rowNum) => (
					<Row days={this.state.days[rowNum]} entries={this.state.dayData[rowNum]} onSelectedItem={this.onSelectedItem.bind(this)}/>
				))}
			</tbody>
			</table>
		)
	}
	
	onSelectedItem(entrie) {
		this.props.onSelectedItem(entrie);
	}

	calculateDays(month, year, dataNew) {
		let wochentag1 = new Date(year, month, 1).getDay(); //So = 0, Mo = 1 ... Sa = 6
		wochentag1 = (wochentag1 == 0) ? 7: wochentag1;
		wochentag1--;

		let dayList = new Array(6);
		let dayDataList = new Array(6);
		let dayRow;

		let currentDay = 1 - wochentag1;

		for(let x=0; x<6; x++) {
			dayRow = new Array(7);
			for(let j=0; j<7; j++) {
				if(currentDay<1) {
					dayRow[j] = 0;
				} else if(!this.isValidDate(year, month, currentDay)) {
					dayRow[j] = 100;
				} else {
					dayRow[j] = currentDay;
				}
				currentDay++;
			}
			dayList[x] = dayRow;
			dayDataList[x] = dataNew.filter(function (e) {
				return new Date(e.DATUM).getDate() >= dayRow[0] && new Date(e.DATUM).getDate() <= dayRow[6];
			})
		}
		this.setState({tableData: dataNew,
						days: dayList,
						dayData: dayDataList});	
	}

	isValidDate(y,m,d) {
		let anzahl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		if(y%4==0 || (y%100!=0 && y%400==0)) {
			anzahl[1] = 29;
		}
		
		if(d<=anzahl[m]) {
			return true;
		}
		return false;
	}
}

export default CSSModules(Grid, style);
