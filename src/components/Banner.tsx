import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <View className='h-24 bg-black justify-center'>
      <View className='flex-row justify-center'>
        <Text className="text-white">OMDB Movie Database</Text>
      </View>
    </View>
  )
}

export default Banner