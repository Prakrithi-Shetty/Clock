import React from 'react';


class InputDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            name:"prakrithi",
            age:25
        };
        this.myRef = React.createRef();
        this.enteredName=this.enteredName.bind(this);
    }

     enteredName(e){
         console.log( this.myRef.current.value);
         const newName = this.myRef.current.value;
         this.setState({
            name:newName,
         });

    }
    render()
    {
        return(
            <div>
                hi my name is {this.state.name} and my age is {this.state.age}
                <div>
                    <input  ref={this.myRef} type="textbox" onChange={this.enteredName}/>
                </div>
            </div>
        );
    }
}

export default  InputDisplay;