import React from 'react';
import './App.css';
import GetItems from './components/getItems';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={
      tdlist : [],
      currentItem:{
        text:'',
        key:'',
        checked:false
      }
    }
  }
  inputChanged(event){
    this.setState({
      currentItem:{
        text: event.target.value,
        key: Date.now(),
        checked:false
      }
    })
  }
  addItem(event){
    event.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!=="")
    {
      const tdlist =[...this.state.tdlist, newItem];
      this.setState({
          tdlist,
          currentItem:{
            key:'',
            text:'',
            checked:false
          }
      });

    }
  }
  deleteItem(key)
  {
      const filterItems =this.state.tdlist.filter(item=>
        item.key!==key);
        this.setState({
          tdlist:filterItems
        });
  }

  markCheck(key){
    const filterItems =this.state.tdlist.filter( (item)=>{

      if(item.key === key)
      {
        const newItem = item;

        newItem.checked = !newItem.checked;
        return newItem;
      }
      return item;
    });
      this.setState({
        tdlist:filterItems
      });
  }
  render(){
    this.inputChanged = this.inputChanged.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.markCheck = this.markCheck.bind(this);
    return (
      <div>
      <div className ="App">
      <div className="appName">  TODO list </div>

        <GetItems className="getItem" tdlist = {this.state.tdlist}
         deleteItem={this.deleteItem}
          markCheck = {this.markCheck}
        ></GetItems>

        <header>

          <form id = "todoform" onSubmit ={this.addItem}>
            <input type="text" placeholder="Add to List..."
             value={this.state.currentItem.text}
             onChange={this.inputChanged}></input>
            <button type="submit">Add</button>
          </form>
        </header>
      </div>
      </div>
    );
  }
} 

export default App;
