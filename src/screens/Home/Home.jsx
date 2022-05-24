import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import PageHoc from '../../components/Page'

const Home = () => (
    <View>
        <Text>Home</Text>
    </View>
)

export default PageHoc(Home)

const styles = StyleSheet.create({})
