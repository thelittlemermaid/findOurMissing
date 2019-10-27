import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#000000',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    personName : {
        fontSize: 24,
        color: '#000000',
    },
    linkText : {
        fontSize: 20,
        color: '#000',
        textAlign: "center",
        
    }
})

export default styles;