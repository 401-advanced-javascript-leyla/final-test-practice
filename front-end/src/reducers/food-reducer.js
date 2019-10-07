export default (state = [], {type, payload}) => {
  switch(type){
    case 'FOOD_LOAD':
      return payload;
    case 'FOOD_ADD':
      return [...state, payload];
    case 'FOOD_UPDATE':
      state = state.map(food=>{
        if( food.id === payload.id ){
          return payload;  
        }
        return food;
      });
      return state;
    case 'FOOD_DELETE':
      state = state.filter(food => food.id !== payload);
      return state;
    default:
      return state;
  }
};
