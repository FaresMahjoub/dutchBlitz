import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Bot extends React.Component {

	componentDidMount() {
		const {delaySec} = this.props;
		this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000 * delaySec);  // the setInterval uses milliseconds
	}

	render () {

		const {
			id,
			on,
			visionProbability,
			// etc

			// callbacks to send the actions to store (to move the cards, for instance)
			moveCard,
		} = this.props;

		if (!on)
			return null;

		// your logic
		// ...

		// remove me
		if (Math.random() < visionProbability)
			moveCard();

		/* this doesn't render anything, because it's intention is only to run the logic */
		return <div id={id}></div>;
	}
}

// reminder, in the mapStateToProps function, the first argument is the coming from the store
// and the second one (if present) is the 'ownProps', that is, the object of props passed to the real component (BotsContainer in this case)
function mapStateToProps({
	// whatever the name is in your state (of the store)
	playing,
}, {
	// you will probably use this to pass the bot's state
	id,
}) {
	return {
		on: playing,
	}
}

function mapDispatchToProps(dispatch, {id}) {
	return {
		// (for info) pay attention how it's possible to 'bind' the id to the moveCard...
		moveCard: () => console.log(id),  // look at your console
	}
}

Bot = connect(mapStateToProps, mapDispatchToProps)(Bot);

Bot.propTypes = {
	id: PropTypes.string.isRequired,
	on: PropTypes.bool.isRequired,
	delaySec: PropTypes.number.isRequired,
	moveCard: PropTypes.func.isRequired,
};

export default Bot;