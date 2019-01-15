import React from 'react';
import Bot from './bot'

// could probably put this in a different file for organisation purpose
const bots = {
	bot1: {
		delaySec: 1,
		visionProbability: 0.2,
	},

	bot2: {
		delaySec: 2,
		visionProbability: 0.6,
	},

	bot3: {
		delaySec: 3,
		visionProbability: 0.8,
	},

};

function BotsContainer () {
	return (
		<>
			{/*the id of the bot must be something related to the store*/}
			{/*it could be, for instance, the key of the state of that bot in the store*/}

			{/*the config selection here could depend on the chosen bot (those of the table in the pdf)*/}

			<Bot id={'bot1'} delaySec={bots['bot1'].delaySec} visionProbability={bots['bot1'].visionProbability} />
			<Bot id={'bot2'} delaySec={bots['bot2'].delaySec} visionProbability={bots['bot2'].visionProbability} />
			<Bot id={'bot3'} delaySec={bots['bot3'].delaySec} visionProbability={bots['bot3'].visionProbability} />
		</>
	)
}

export default BotsContainer;