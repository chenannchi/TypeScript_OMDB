import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {useState} from 'react'

type Props = {
  onSubmit:(searchString:string) => Promise<void>
}

const SearchField = ({onSubmit}: Props) => {
  const [searchString, setSearchString] = useState<string>('')
  const handleSearch = () => {
    onSubmit(searchString)
  }
  return (
    <View className='flex-row'>
      <TextInput className='border rounded-md border-gray-400 border-s p-2 m-2 flex-1' onChangeText={setSearchString}/>
      <TouchableOpacity className='bg-green-500 my-2 p-1 rounded-md border border-s border-gray-500 justify-center' onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchField