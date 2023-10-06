import { Component } from "react";

function withHover(WrappedComponent) {

    // eslint-disable-next-line react/display-name
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          count:0
        };
        // const handleHover = handleHover.bind(this)
      }

      handleHover() {
        this.setState({
          count: this.state.count +1
        });
      }
  
      render() {
        return <WrappedComponent count={this.state.count} handleHover={this.handleHover.bind(this)} />;
      }
    };
  }

  export default withHover
