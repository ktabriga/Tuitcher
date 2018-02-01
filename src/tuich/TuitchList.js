import React from 'react'
import {StyleSheet, Text, View, Image, FlatList} from 'react-native'
import ActionButton from 'react-native-action-button'


const TuichItem = ({data}) => (
  <View style={styles.container}>
    <Text style={styles.owner}>{data.owner}</Text>
    <Text style={styles.descricao}>{data.message}</Text>
    <View>
      <Image
        style={styles.imagem}
        source={data.image}/>
    </View>
  </View>
)

export default function TuitchList({tuitchs}) {
  return (
    <View>
      <FlatList 
        contentContainerStyle={styles.listContent}
        keyExtractor={i => i.id}
        data={tuitchs}
        renderItem={({item}) => <TuichItem data={item} />} />
      <ActionButton
        buttonColor="#269FED"
        fixNativeFeedbackRadius
        onPress={() => { console.log("hi")}}/>
    </View>
  )
}

const styles =StyleSheet.create({
  listContent: {
    padding: 20
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20
  },
  owner: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  imagem: {
    resizeMode: 'cover',
    height: 200,
    width: null
  },
  descricao: {
    marginBottom: 10,
    color: '#14171A'
  }
})
