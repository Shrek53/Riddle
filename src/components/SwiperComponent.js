import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
import Theme from '../constants/Theme';

const renderPagination = (index=0, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1} of {total}</Text>
      </Text>
    </View>
  );
};

export default class MainSwiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <View style={styles.middle}>
          <Text>Error: {error.message}</Text>
        </View>
      );
    } else if (!isLoaded) {
      return (
        <View style={styles.middle}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={true}
          renderPagination={renderPagination}
          loop={false}
        >
          {items.map(item => (
            <View style={styles.slide_window} key={item.id}>
				<View style={styles.text_wrapper}>
					<Text style={styles.text}>{item.title} </Text>
				</View>
            </View>
          ))}
        </Swiper>
      );
    }
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide_window: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  },
  text_wrapper: {
    padding: 20
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    padding:10,
    borderRadius:30,
    backgroundColor:Theme.Global.Blue,

  },
  paginationText: {
    color: '#fff',
    fontSize: 20
  },
});
