import React from 'react';

class NamesList extends React.Component {   
    render() {
        return(
            <div>
               {this.props.itemName}
            </div>
        )
    }
}

export default NamesList;