import { useState } from 'react';
import BucketForm from './BucketForm';
// this component mainly renders the bucket list items and handles the logic for editing an item in the list
// the edit object is used to store the id, value, and eagerness of the item being edited
// the submitUpdate function is used to call the editBucketItem prop with the supplied values
// the edit object is set back to its initial state after submitting the update to the parent component
// if the user is attempting to edit an item, the bucket form is rendered with the edit variable passed as a prop
// the bucket component maps through the bucket list items and returns a div element for each item
// the div element has a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
// the key attribute is set to the value of the index position
// an onClick event is added to the div element to invoke the completeBucketItem method passing the item id as an argument 
function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  }); // edit object is used to store the id, value, and eagerness of the item being edited

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to call the editBucketItem prop with the supplied values
   // call the editBucketItem prop with the supplied values then we pass the data from the parent component to the child component 
    props.editBucketItem(edit.id, value);
    // set the edit object back to its initial state after submitting the update to the parent component 
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
    
    console.log("submit")

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  // since the initial state of the edit id is null, if the edit id is not null, the edit form will be rendered 
  if (edit.id) {

    // alert("edit clicked")
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  // this will loop through the bucket list items and return a div element for each item
  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    // <div className={} key={}>
       <div  className={item.isComplete ? `bucket-row complete ${item.eagerness}`: `bucket-row ${item.eagerness}`} 
       key={index}>

      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      {/* <div key={item.id} onClick={}> */}
      <div className='bucket-text' onClick={()=>props.completeBucketItem(item.id)} key={item.id} >
          {item.text}
          {/* {item.id} */}
      </div>
      
    
<div className="icons">

{/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
{console.log(item)}
{/* setEdit will update the edit object with the id, value, and eagerness properties */}
<p onClick={()=>setEdit({id: item.id,value:item.text, eagerness: item.eagerness})}> ✏️</p>
{/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
<p onClick={()=>{props.removeBucketItem(item.id)}}> 🗑️</p>

</div>
  </div>
  ));

}

export default Bucket;

