import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');

  // TODO: Use this array in the return statement below
  const eagernessLevel = ['high', 'medium', 'low']
  // high, medium, low are from  the bootstrap classes for the dropdown button
  
  const handleChange = (e) => {
  
    setInput(e.target.value);
   
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = "low";
    }

    props.onSubmit({
      // properties of the object: id, text, eagerness
      // Math.random() generates a random number 
      id: Math.random(Math.floor() * 1000),
      text: input, // text is the input from the form
      eagerness: eagerness, // eagerness is the value from the dropdown button
      
    });

    setInput("");
    setEagerness("");
  };



  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>

        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {/* 
              ternary operator to check if `eagerness` is true or false
              if true, display `eagerness`
              if false, display 'Priority'
            */}
            {eagerness || 'Priority'} 
          </button>
          
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        

        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          // style={{ color: eagerness === 'high' ? 'red' : eagerness === 'medium' ? 'orange' : 'green' }}
          style={{ color: 'black', backgroundColor: 'gray' }}
          placeholder={`Type here to update new bucket... `}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
