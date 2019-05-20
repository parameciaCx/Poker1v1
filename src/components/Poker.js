import React, { Component } from 'react';
import io from 'socket.io-client';

const socketURL = 'http://10.7.0.4:3231/';
export default class Poker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			socket: null
		};
		this.initSocket = this.initSocket.bind(this);
	}

	componentDidMount() {
		this.initSocket();
	}

	initSocket = () => {
		const socket = io(socketURL);
		socket.on('connect', () => {
			console.log('CONNECTED');
		});

		this.setState(socket);
	};

	render() {
		return <div data-test="container">ayy lmao</div>;
	}
}
