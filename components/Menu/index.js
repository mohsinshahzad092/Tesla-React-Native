
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View, Text, ImageBackground, TouchableOpacity,faMusic } from 'react-native'
import styles from"./styles"
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <View style={styles.menuItems}>
        <View style={styles.menuRow}>
        <FontAwesomeIcon style={styles?.icon} icon={faMusic} size={24} />
        <View style={styles.menuTextBox}>

            <Text style={styles.menuText}>Media</Text>
        </View>
        <FontAwesomeIcon style={styles?.icon} icon={faChevronRight} size={24} />

        </View>


    </View>
  )
}
export default Menu;