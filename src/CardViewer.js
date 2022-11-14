import React from "react";

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardNum: 0, back: false };
  }

  changeSide = () => {
    this.setState({ cardNum: this.state.cardNum, back: !this.state.back });
  };

  nextCard = () => {
    this.setState({ cardNum: this.state.cardNum + 1, back: this.state.back })
  }

  prevCard = () => {
    this.setState({ cardNum: this.state.cardNum - 1, back: this.state.back })
  }

  render() {
    return (
      <div>
        <h2>Card Viewer</h2>
        <hr />
        <div> {"Card " + (this.state.cardNum + 1) + "/" + this.props.cards.length}</div>
        <br />
        <div style={{border: '2px solid purple', textAlign: 'center', padding: '10px', marginRight: "200px"}}>
            <div onClick={this.changeSide}>
            {this.state.back
                ? this.props.cards[this.state.cardNum].back
                : this.props.cards[this.state.cardNum].front}
                <br />
                <br />
            </div>
            <button onClick={this.prevCard} disabled={this.state.cardNum === 0} style={{margin: '10px'}}> Previous </button>
            <button onClick={this.nextCard} disabled={this.state.cardNum === this.props.cards.length - 1} style={{margin: '10px'}}> Next </button>
        </div>
        <hr />
        <button onClick={this.props.switchMode}>Go to card editor</button>
      </div>
    );
  }
}

export default CardViewer;
