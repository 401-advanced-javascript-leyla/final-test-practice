import React from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
// import Food from './components/food';

const API_URL = 'http://localhost:8080';

class App extends React.Component {

  componentDidMount = () => {
    console.log('goit in');
    superagent.get(`${API_URL}/foods`)
      .then(results => {
        console.log(results.body);
        this.props.loadStore(results.body);
      })
      .catch(console.log('cannot get data from back-end'));
  }

  render() {
    return (
      <>
        {/* <ul>
          {this.props.foods.map((food) => {
            return <Food food={food} />
          })}
        </ul> */}
        {console.log(this.props)}
        <ul>
          {this.props.foods.map(food => 
            <li>{food.name}</li>
          )}
        </ul>          
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods,
});

const mapDispatchToProps = (dispatch) => ({
  loadStore : (foods) => {
    dispatch({
      type: 'FOOD_LOAD',
      payload: foods,
    });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
