import React from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './Comments.css';

const initialState = {
  nc:[ ]
}

// Action Creator
 function addComment(name, comment) {
  return {
      type: 'ADD_COMMENT',
      data: {name:name, comment:comment}
  }
}


// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return {...state,
        nc: [...state.nc, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);


const mapDispatchToProps = {
  addComment
}

function mapStateToProps(state) {
  return {
    nc: state.nc
  }
}




function AddCommentForm(props){
const [name, setName]=useState('');
const [comment, setComment] = useState('');

function handleInput(e){
  const target = e.target;
  switch(target.name){
    case 'name': setName(target.value);
    break;
    case 'cmt': setComment(target.value);
    break;
    default: break;
  }

}

function handleSubmit(e){
  if(comment !== '' && name!=='') {
    props.addComment(name,comment);
    setName('');
    setComment('');

  }
  e.preventDefault();

}

return(
  <div className="inputbox">
    <input type="text" name="name" onChange={handleInput} value={name} id='nm' placeholder="Enter Your Name" autoComplete="Off"></input>
    <br></br>
    <br></br>
    <textarea name='cmt' onChange={handleInput} value={comment} id='cmt' placeholder="Enter Your Comment"></textarea>
    <br></br>
    <input type="submit" value="Post" onClick={handleSubmit} id="submit"></input>
  </div>
    );

}

function CommentsList(props){
  const arr = props.nc;
  const listItems = arr.map((val, index) =>
    <li key={index}><h3>{val.name}</h3><p>{val.comment}</p></li>
  );
  return <ol id="comments">{listItems}</ol>;
}

const Cl = connect(mapStateToProps)(CommentsList);
const Ac =  connect(null, mapDispatchToProps)(AddCommentForm);

function Comments() {
  return (
    <div className="Comment">
        <h1>Comments</h1>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <Provider store={store}>
        <Ac/>
        <Cl/>
        </Provider>
    </div>
  );
}
 

export default Comments;

