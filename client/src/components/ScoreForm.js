import React, { Component } from "react";

class ScoreForm extends Component {
    frameRef = React.createRef();

    submitScore = event => {
        event.preventDefault();
        const frames = this.frameRef.current.value;
        this.props.calcScore(frames);
    }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitScore}>
          <div className="form-group">
            <input
              name="score"
              ref={this.frameRef}
              type="text"
              className="form-control"
              id="scoreInput"
              aria-describedby="scoreHelp"
              placeholder="Enter Score"
            />
            <small id="scoreHelp" className="form-text text-muted">
             Input your score. e.x. 45-54-36-27-09-63-81-18-90-72
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ScoreForm;
