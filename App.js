
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const HorizonrtalCarousel = () => {
  return (
      <ScrollView
          contentContainerStyle={{alignItems:'center'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
      >
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </ScrollView>
  )
}
export const CardItem = () => {
  return (
      <View style={styles.content}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}/>
          <View>
            <Text style={styles.header}>Awesome Naming</Text>
            <View style={styles.textContainer}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.priceText}>$ 4,55</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.reviewText}>Review</Text>
              <Text style={styles.reviewText}> 267 </Text>
              <FontAwesome name="star" size={15} color="gold" />
              <FontAwesome name="star" size={15} color="gold" />
              <FontAwesome name="star" size={15} color="gold" />
              <FontAwesome name="star" size={15} color="gold" />
              <FontAwesome name="star" size={15} color="gold" />
            </View>
          </View>
        </View>
      </View>
  )
}
export default function App() {
  return (
      <ScrollView>

        <View style={styles.container}>
          <HorizonrtalCarousel/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    marginHorizontal: 16,
    marginBottom: 12
  },
  item: {
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  content: {
    backgroundColor: 'white',
    width: 260,
    height: 120,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
    marginRight: 8,
  },
  textContainer:{
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color:'#084887'
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    color: '#4bb769',
  },
  reviewText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#646F79',
    textDecorationLine: 'underline'
  }
});
