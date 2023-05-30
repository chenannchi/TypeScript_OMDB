import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import { useState } from 'react'


export type MovieResultType = {

}

const HomeScreen = () => {
  const [movieResults, setMovieResults] = useState<MovieResultType | null>(null)

  const handleSearch =async (searchString:string):Promise<void> => {
    const result = await fetch(`https://omdbapi.com/?t=${searchString}&apikey=2c0bcb9f`).then(data=>data.json())
    setMovieResults(result)
    console.log(movieResults)
  }

  return (
    <SafeAreaView className='min-h-screen min-w-screen'>
      <Banner />

      <SearchField onSubmit={handleSearch} />
    </SafeAreaView>
  )
}

export default HomeScreen