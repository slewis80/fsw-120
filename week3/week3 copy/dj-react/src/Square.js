import React from 'react';

class Square extends React.Component {
       
       render() {
        return (
        <div>
            <div className="square" style={{backgroundColor: this.props.color}}></div>
        </div>
        )
    }
}

export default Square;