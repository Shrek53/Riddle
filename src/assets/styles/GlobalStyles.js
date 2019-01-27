import { StyleSheet, Platform, StatusBar } from 'react-native';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: Theme.Global.Blue,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});