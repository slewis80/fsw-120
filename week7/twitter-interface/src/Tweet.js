import React from 'react';

class Tweet extends React.Component {
 
    deleteTweet = (event) => {
        console.log(event.target.id)
        let thisTweet = document.getElementById(event.target.id)
        thisTweet.remove()
    }

    render() {
    
        return (
            <div className="tweetBlock" key={this.props.tweetInfo.id} id={this.props.tweetInfo.id}>
                <button className="deleteButton" id={this.props.tweetInfo.id} onClick={this.deleteTweet}>Delete Tweet</button>
                <h4 className="handle" key={this.props.tweetInfo.handle}>@{this.props.tweetInfo.handle}</h4>
                <p className="content" key={this.props.tweetInfo.tweetContent}>{this.props.tweetInfo.tweetContent}</p>
                <img id="heart" src="https://cdn.geekwire.com/wp-content/uploads/2015/11/likes-hearts-twitter-e1446569116132-620x201.png" alt="liked"/>
                <br/>
            </div>
        )
    }
}

export default Tweet;