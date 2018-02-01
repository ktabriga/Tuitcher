import React from 'react'
import {StyleSheet, Text, View, Image, FlatList} from 'react-native'
import ActionButton from 'react-native-action-button'
import colors from '../theme/colors'
import moment from 'moment'

const TuichItem = ({data}) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.owner}>@{data.owner}</Text>
      <Text style={styles.date}>{moment(data.date).format('DD/MM/YY HH:mm')}</Text>
    </View>
    <Text style={styles.descricao}>{data.message}</Text>
    <View>
      <Image
        style={styles.imagem}
        source={data.image}/>
    </View>
  </View>
)

export default function TuitchList({tuitchs, onNewTuitchPress}) {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.listContent}
        keyExtractor={i => i.id}
        data={tuitchs}
        renderItem={({item}) => <TuichItem data={item} />} />
      <ActionButton
        buttonColor={colors.primary}
        fixNativeFeedbackRadius
        onPress={onNewTuitchPress}/>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
