import React from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

const API_URL = 'http://localhost: 8080';

class Food extends React.Component{

  handleUpdate = (e) => {
    e.preventDefault();
    superagent.patch(`${API_URL}/foods/${e.target.value}`)
      .send({id: e.target.value, name: "updated name", amount: "100"})
      .set('Accept', 'application/json')
      .then(results=>{
        this.props.loadStore(results);
      })
      .catch(console.log('something went wrong with updating store'));
  }
  
    
  handleDelete = (e) => {
    e.preventDefault();
    superagent.delete(`${API_URL}/foods/${e.target.value}`)
      .then(results => {
        this.props.loadStore(results);
      })
      .catch(console.log('something went wrong with deleting stroe'));
  };

    
  render(){
    return(
      <>
        <li key={this.props.id}>
          <p>name: {this.props.name}</p>
          <p>amount: {this.props.amount}</p>
          <button value={this.props.id} onClick={this.handleUpdate}>update</button>
          <button value={this.props.id} onClick={this.handleDelete}>delete</button>
        </li>
      </>
    );
  }  
};

const mapDispatchToProps = (dispatch) => ({
  loadStore : (foods) => {
    dispatch({
      type: 'FOOD_LOAD',
      payload: foods,
    });
  },
});

export default connect(null, mapDispatchToProps)(Food);