import React , {Component} from 'react';
import './App.css';
import  Nav from './Nav';
import  Box  from './Box';
import jsPDF from 'jspdf';

class App extends Component {
	state ={
		title:'Save the text to your local device',
		textVal :''
		
	}
	
	saveData = () =>{
		var doc = new jsPDF();
		doc.text(20,30,this.state.textVal);
		doc.save('morning'.pdf);
		
		
	}
	handleChange = (evt) =>{
    this.setState({ textVal: evt.target.value });
  }
	render()
	{
		return (
		<div className="App">
		<header className="App-header">
			<Nav doPrint={this.saveData.bind(this)} title ={this.state.title} />
			<div className="container">
			<label className="label">Enter your morning pages in the box given below!!</label> <br />
			<textarea className="inputBox" id="morningtext" value = {this.state.textVal} onChange={this.handleChange} />
			</div>
      </header>
    </div>
  );
}
}
export default App;
