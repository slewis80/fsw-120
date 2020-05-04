import React from 'react';

class Badge extends React.Component {

    render() {
        return (
            <div className="badge">
                <span id="badgeHeader">Badge:</span>
                <span>Name:  {this.props.fName} {this.props.lName}</span>
                <span>Phone:  {this.props.phone}</span>
                <br />
                <span>Place of birth:  {this.props.placeOfBirth}</span>
                <span>Favorite food:  {this.props.favFood}</span>
                <br />
                <span id="email">Email:  {this.props.email}</span>
                <br />
                <p id="aboutMe">{this.props.aboutMe}</p>
            </div>
        )
    }
}

export default Badge;