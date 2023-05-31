import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import { useState } from 'react'
import Result from '../components/Result'

export type MovieResultType = {
  Title: string;
  Poster: string;
  Rated: string;
  Plot: string;
}

const HomeScreen = () => {
  const [movieResult, setMovieResult] = useState<MovieResultType | null>(null)

  const handleSearch = async (searchString: string): Promise<void> => {
    const result = await fetch(`https://omdbapi.com/?t=${searchString}&apikey=2c0bcb9f`).then(data => data.json())
    setMovieResult(result)
    console.log(movieResult)
  }

  return (
    <SafeAreaView className='min-h-screen min-w-screen'>
      <Banner />
      <SearchField onSubmit={handleSearch} />
      <View className='flex-row justify-center'>
        {movieResult?.Title && <Result movie={movieResult} />}
        {/* <Result /> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen