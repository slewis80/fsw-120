import React from 'react';

class NamesList extends React.Component {   
    render() {
        const namelist  = this.props.namesList.map(name =>
                <li key = {name}>{name}</li>
            );
        return(
            <div>
                <ol>
                    {namelist}
                </ol>
            </div>
        )
    }
}

export default NamesList;