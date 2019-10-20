import React from 'react';


class InputDisplay extends React.Component {
    constructor(prpos){
        super(props);
        this.state = { 
            name:"prakrithi"
        };

    }
    render()
    {
        return(
            <div>
                {this.state.name}
                <input  type="textbox" />
            </div>
        );
    }
}

export default  InputDisplay;