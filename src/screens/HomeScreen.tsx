import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
const HomeScreen = () => {
  return (
    <SafeAreaView className='min-h-screen min-w-screen'>
      <Banner />
    </SafeAreaView>
  )
}

export default HomeScreen