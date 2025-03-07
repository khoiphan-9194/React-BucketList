import { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    console.log(bucket);
    console.log("File: BucketList.js ~ line 10 ~ addBucketItem ~ item", item);
    // Check to see if the item text is empty
    if (!item.text) {
      console.log(" nothing ");
      return;
    }
    // Create a new array with the new item and spread operator
    const newBucket = [item, ...bucket];
    // Update the bucket state variable with the new array,
    // which now includes the new item at the beginning of the array
    // every time we add a new item, bucket state will copy the previous items and add the new item to the beginning of the array
    setBucket(newBucket);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete

    // loop through the bucket list items and return a new array with the updated item marked as complete or incomplete 
    // each item is checked to see if the id from the item matches the id that was clicked
    // if the id matches, the item is marked as complete or incomplete

    let updatedBucket = bucket.map((item) => {
      //
      if (item.id === id) {
        // the code below is saying that if the item is complete, set it to false, and if it is false, set it to true
        // this is done by using the ! operator to negate the current value of the item.isComplete property 
        // to toggle the value of the item.isComplete property 
        // let's say if item.isComplete is true, then  set it to false, and if it is false, set it to true 
        item.isComplete = !item.isComplete;
      }
      console.log("item", item);
      return item;
      // TODO: Write logic that marks an item as complete or incomplete when invoked
    });

    setBucket(updatedBucket); // update the bucket state variable with the updated array
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function

    const itemToRemove = bucket.find((item) => item.id === id);
    if (itemToRemove) {
      alert(itemToRemove.text);
    }

    // alert(bucket[id])
    setBucket(
      bucket.filter((item) => {
        return item.id !== id;
      })
    );

    // TODO: Update the bucket state variable
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      alert("No change was made....");
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />

       <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      /> 
    </div>
  );
}

export default BucketList;
