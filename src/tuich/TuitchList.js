import React from 'react'
import {StyleSheet, Text, View, Image, FlatList} from 'react-native'


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
    <FlatList 
      style={styles.listContainer}
      keyExtractor={i => i.id}
      data={tuitchs}
      renderItem={({item}) => <TuichItem data={item} />} />
  )
}

const styles =StyleSheet.create({
  listContainer: {
    marginBottom: 20, 
    marginTop: 20
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
