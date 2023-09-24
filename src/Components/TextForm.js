import React, { useRef } from 'react';
import {useState} from 'react'


function TextForm(props) {
  // Create refs for each textbox and textBox7
  const textBoxRefs = {
    textBox1: useRef(null),
    textBox2: useRef(null),
    textBox3: useRef(null),
    textBox4: useRef(null),
    textBox5: useRef(null),
    textBox6: useRef(null),
  };

  const textBox7Ref = useRef(null);
  const textBox8Ref = useRef(null);
  const textBox9Ref = useRef(null);
  const [mode, dark] = useState(" ");

  const handleOnChange = (event) => {
    console.log("onchange");
    dark(event.target.onClick);
  };

  const handleButtonClick = () => {
    // Get the values from all textboxes and convert them to numbers
    const values = Object.keys(textBoxRefs).map(key => Number(textBoxRefs[key].current.value));

    // Sum up all the values using the reduce method
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Update the value of textBox7 with the calculated sum
    textBox7Ref.current.value = sum;
  };
const percentage=()=>{
    // Get the values from all textboxes and convert them to numbers
    const values = Object.keys(textBoxRefs).map(key => Number(textBoxRefs[key].current.value));

    // Sum up all the values using the reduce method
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Update the value of textBox7 with the calculated sum
    textBox8Ref.current.value = sum*100/600;


   

}
const grade=()=>{
    // Get the values from all textboxes and convert them to numbers
    const values = Object.keys(textBoxRefs).map(key => Number(textBoxRefs[key].current.value));

    // Sum up all the values using the reduce method
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Update the value of textBox9 with the calculated sum
    textBox9Ref.current.value = sum;
    
    if (sum > 550) {
        textBox9Ref.current.value = "A";
      } else if (sum > 500) {
        textBox9Ref.current.value = "B";
      } else if (sum > 450) {
        textBox9Ref.current.value = "C";
      } else if (sum > 400) {
        textBox9Ref.current.value = "D";
      } else {
        textBox9Ref.current.value = "F";
      }

   

}
  return (
    <div className='container'onClick={handleOnChange} mode={props.mode} style={{ color: props.mode === "dark" ? "white" : "#042743"   }} >
      <div className="form-group mx-4" onClick={handleOnChange} mode={props.mode} style={{ color: props.mode === "dark" ? "white" : "#042743"   }}>
        <label htmlFor="textBox1" style={{ color: props.mode === "dark" ? "white" : "#042743" , backgroundColor:props.mode==='dark' ? "#042743":"white"  }} >Enter subject1 marks </label>
        <input type="number" className="form-control "  id="textBox1" ref={textBoxRefs.textBox1} placeholder='Subject1' mode={mode} style={{ color: props.mode === "dark" ? "white" : "#042743"   }} />
        <label htmlFor="textBox2"style={{ color: props.mode === "dark" ? "white" : "#042743"   }} >Enter subject2 marks </label>
        <input type="number" className="form-control" id="textBox2" ref={textBoxRefs.textBox2} placeholder='Subject2' />
        <label htmlFor="textBox3">Enter subject3 marks</label>
        <input type="number" className="form-control" id="textBox3" ref={textBoxRefs.textBox3} placeholder='Subject3' />
        <label htmlFor="textBox4">Enter subject4 marks</label>
        <input type="number" className="form-control" id="textBox4" ref={textBoxRefs.textBox4} placeholder='Subject4' />
        <label htmlFor="textBox5">Enter subject5 marks</label>
        <input type="number" className="form-control" id="textBox5" ref={textBoxRefs.textBox5} placeholder='Subject5' />
        <label htmlFor="textBox6">Enter subject6 marks</label>
        <input type="number" className="form-control" id="textBox6" ref={textBoxRefs.textBox6} placeholder='Subject6' />



      

        <button type="button" id='btn1' className="btn btn-secondary mx-3 mb-3" onClick={handleButtonClick}>Add marks</button>
        <button type="button" id='btn2' className="btn btn-secondary mx-3 mb-3" onClick={percentage}>Percentage</button>
        <button type="button"id='btn3' className="btn btn-secondary mx-3 mb-3" onClick={grade}>Grade</button>
      </div>

      <div className='container' id='result'onClick={handleOnChange} mode={mode} style={{ color: props.mode === "dark" ? "white" : "#042743"   }} >


  {/* textBox7 for displaying the total marks */}
  <label htmlFor="textBox7">Total Marks</label>
        <input type="number" className="form-control" id="textBox7" ref={textBox7Ref} readOnly />
        <label htmlFor="textBox8">Percentage</label>
        <input type="number" className="form-control" id="textBox8" ref={textBox8Ref} readOnly />

        <label htmlFor="textBox9">Grade</label>
        <input type="Text" className="form-control" id="textBox9" ref={textBox9Ref} readOnly />

    
</div>
    </div>
  );
}

export default TextForm;
