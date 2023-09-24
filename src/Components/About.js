import React from "react";

export default function About(props) {
// const [myStyle,setStyle]=useState( {color: 'black',
// backgroundColor: 'white'});
// const [mybtn,setbtn]=useState("enable light mode")
// let darkMode=()=>{
//     if (myStyle.color==='black'){

//         setStyle({
//             color:'white',
//         backgroundColor: 'black'
//           })
//           setbtn("enable light mode")

// }

// else{
//    setStyle({
//     color:'black',
//     backgroundColor: 'white',
//     border: "2px solid white"
//    })
//    setbtn("enable dark mode")
// }
// }
let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'? '#042743':'white'
}
   
  return (
    
    <div className="container" style={myStyle}>
        <h1>AboutUs </h1>
      <div className="accordion" id="accordionExample"style={myStyle} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" 
            >
              <strong>Analyze Your text</strong>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show" style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               This App will help you to analyze your text in different ways..You can Mainupulate and set Your text in different ways
             
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              
              You can use The app absulatley free
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Contact Us</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             shahidbangash8899@gmail.com 
            </div>
          </div>
        </div>
      </div>

      {/* <div>

      <button type="button" class="btn btn-primary my-2" onClick={darkMode}>{mybtn}</button>

      </div> */}
    </div>
    
  );
  }

