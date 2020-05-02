import React from 'react';

class NamesList extends React.Component {
    render() {
        return (
                <li>{this.props.name}</li>
        )
    }
}

export default NamesList;