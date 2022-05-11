import React, {useState} from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBattery, faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'react-native-web'
import Menu from "../Menu/index"

const CarItem = () => {
    const [locked, setLocked] = useState(false)


    const lockHandler = () => {
        setLocked(!locked)
    }


    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require("../../assets/background.png")}
                style={styles.backgroundImage}
            />
            {/*Header*/}

            <View style={styles.header}>
                <TouchableOpacity>

                    <FontAwesomeIcon style={styles?.icon} icon={faCog} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>NazMobile</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} /></TouchableOpacity>


            </View>

            <View style={styles.batterySection}>
                <Image source={require("../../assets/battery.png")}
                    style={styles.batteryImage} />
                <Text style={styles.batteryText}>150 mi

                </Text>

            </View>
            <View style={styles.status}>
                <Text stylele={styles.statusText}>
                    Parked
                </Text>


            </View>
            {/*Control Icon*/}

            <View style={styles.controls}>
                <TouchableOpacity>

                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles?.icon} icon={faFan} size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles?.icon} icon={faKey} size={24} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={lockHandler}>

                    <View style={styles.controlsButton} >
                        <FontAwesomeIcon style={styles?.icon} icon={locked ? faLock : faUnlockAlt} size={24} />
                    </View>
                </TouchableOpacity>


            </View>
            {/* {Menu} */}
            <Menu/>
        </View>
    )
}

export default CarItem



