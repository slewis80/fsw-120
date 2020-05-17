import React from 'react';







class NamesList extends React.Component {  
    
    onLabelClickHandler = (event) =>{       
        this.props.onItemClick(event.target.innerText); 
      };
    render() {
        return(
            <div>
               <label onClick={this.onLabelClickHandler}>{this.props.itemName}</label>
            </div>
        )
    }
}

export default NamesList;