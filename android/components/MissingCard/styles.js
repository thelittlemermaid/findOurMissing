import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#252a34',
        backgroundColor: '#00adb5',
        borderWidth: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 30,
        height: 500,
        alignItems: 'center',
        borderRadius: 60,
        margin: 15,
    },
    personName : {
        fontSize: 24,
        color: '#eaeaea',
    },
    missingImage : {
        height: 300,
        width: 300,
        borderRadius: 30,
    }
})

export default styles;