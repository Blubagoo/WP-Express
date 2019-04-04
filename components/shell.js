import React from 'react';
import axios from 'axios';
import HTML from 'react-native-render-html';

import { Text, View, ScrollView, Dimensions, Image } from 'react-native';

export default class Shell extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the shell props', props);
		this.state = {
			posts: [{content: '<div />'},{content: '<div />'}]

		}
	}
	componentDidMount() {
		console.log('shell mounted, calling for resources');
		axios.get(`https://oneopinion.me/wp-json/wp/v2/posts`).then((data) => {
			let postArray = [];
			let mapPosts = data.data.map((post,index) => {
				postArray.push(post);
			});
			this.setState({posts: postArray});
			console.log('posts', this.state.posts);
		}).catch((err) => console.log("err", err));
	}
	render() {
		return(
			<ScrollView>
				<Image source={{uri: this.state.posts[1].jetpack_featured_media_url}}
							 style={{ flex: 1, height: 200,}} />
				<HTML html={this.state.posts[1].content.rendered} imagesMaxWidth={Dimensions.get('window').width} />
			</ScrollView>
		)
	}
}