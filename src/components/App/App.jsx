import React from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import './App.css';

class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerText1: "No Hello for you",
    };

    render() {
        return(
            <div>
                <Header 
                    headTitle={this.state.headerText} 
                    headTitle1={this.state.headerText1} 
                />
                <SearchBox />
            </div>
        )
    }
}

// class App extends React.Component {
//     state = {
//         headerText: "Hello, Worldd!!!!"
//     }
//     render() {
//         return(
//             <div>
//                 <Header />
//                 <h3>{this.state.headerText}</h3>
//                 <button 
//                     onClick={() => {
//                         this.setState({
//                             headerText: "Woahhh, It's the new headerText" 
//                         })
//                     }}
//                 >
//                     Magic Happens Here!    
//                 </button>
//             </div>
//         )
//     }
// }

export default App;