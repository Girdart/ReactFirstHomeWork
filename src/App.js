import "./App.css";
import React, { useState } from "react";

// Task 1
// function MyButton(props) {
//   const handler=()=>{props.onClickAct(props.bkColor,props.txtColor);};
//   return (<button className="Button" onClick={handler} style={{backgroundColor:props.bkColor,color: props.txtColor }}>{props.text}</button>);
// }
// function DisplayBlock(props) {
//   return (
//     <div class="DisplayBlock" style={{backgroundColor:props.bkColor,color: props.txtColor}}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus
//         massa, sollicitudin et aliquet quis, vehicula eu lorem. Sed consequat
//         consequat lectus, eget ornare ex finibus at. Cras in vestibulum ipsum.
//         Aenean sit amet metus vel nisl efficitur accumsan at id nulla.
//     </div>
//   );
// }

// Task 2

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bkColor: props.bkColor,
//       txtColor: props.txtColor,
//     };
//   }
//   render() {
//     const handler = () => { this.props.onClickAct(this.state.bkColor, this.state.txtColor); };
//     return (
//       <button className="Button" onClick={handler} style={{ backgroundColor: this.state.bkColor, color: this.state.txtColor }}>{this.props.text}</button>
//     );
//   }
// }
// class DisplayBlock extends React.Component {
//   render() {
//     return (
//       <div className="DisplayBlock" style={{ backgroundColor: this.props.bkColor, color: this.props.txtColor }}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus massa, sollicitudin et aliquet quis, vehicula eu lorem. Sed consequat consequat lectus, eget ornare ex finibus at. Cras in vestibulum ipsum. Aenean sit amet metus vel nisl efficitur accumsan at id nulla.
//       </div>
//     );
//   }
// }

// Task 3
function Button(props) {
  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(newQuote => {
        props.onClick(newQuote.content, newQuote.author);
      })
      .catch(error => console.error("Error fetching quote:", error));
  };

  return (
    <button className="Button" onClick={fetchQuote} >{props.text}</button>
  );
}

  function Quote(props) {
    return (
      <div className="Quote">
        <p className="quote">"{props.quote}"</p>
        <p className="author">--- {props.author}---</p>
      </div>
    );
  }
function App() {
  // Task 1
  // const[displayBkColor,setDisplayBkColor]=useState("white");
  // const[displayTxtColor,setDisplayTxtColor]=useState("black");
  // const stateFunc=(newBkColor,newTxtColor) => {setDisplayBkColor(newBkColor);
  //   setDisplayTxtColor(newTxtColor);
  // };

  // Task 2
  // const [displayBkColor, setDisplayBkColor] = useState("white");
  // const [displayTxtColor, setDisplayTxtColor] = useState("black");
  // const stateFunc = (newBkColor, newTxtColor) => {
  //   setDisplayBkColor(newBkColor);
  //   setDisplayTxtColor(newTxtColor);
  // };

  // Task 3
  const [quote, setQuote] = useState("Random Quotes");
  const [author, setAuthor] = useState("In this place, must be Author Name");

  const handleQuoteChange = (newQuote, newAuthor) => {
    setQuote(newQuote);
    setAuthor(newAuthor);
  };
  return (
    <div className="App">

      {/* Task 1 */}
      {/* <MyButton bkColor="red" text="Red" txtColor="green" onClickAct={stateFunc}></MyButton>
      <MyButton bkColor="green" text="Green" txtColor="red" onClickAct={stateFunc}></MyButton>
      <MyButton bkColor="yellow" text="Yellow" txtColor="blue" onClickAct={stateFunc}></MyButton>
      <DisplayBlock bkColor={displayBkColor} txtColor={displayTxtColor}></DisplayBlock> */}

      {/* Task 2 */}

      {/* <Button bkColor="red" text="Red" txtColor="green" onClickAct={stateFunc}></Button>
      <Button bkColor="green" text="Green" txtColor="red" onClickAct={stateFunc}></Button>
      <Button bkColor="yellow" text="Yellow" txtColor="blue" onClickAct={stateFunc}></Button>
      <DisplayBlock bkColor={displayBkColor} txtColor={displayTxtColor}></DisplayBlock> */}

      {/* Task 3 */}
      <Quote quote={quote} author={author} />
      <Button text="Get a Quote" onClick={handleQuoteChange} />
    </div>
  );
}

export default App;
