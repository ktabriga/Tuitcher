import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'


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
    <View style={{marginBottom: 20, marginTop: 20}}>
      {tuitchs.map(data => <TuichItem key={data.id} data={data} />)}
    </View>
  )
}

const styles =StyleSheet.create({
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
