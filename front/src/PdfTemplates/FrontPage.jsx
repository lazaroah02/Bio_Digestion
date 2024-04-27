import { Document, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import CustomPage from './CustomPage';
import LogoFullGreen from '../assets/logos-png/full-logo-green.png'

function FrontPage({title}) {
    // PDF styles
    const styles = StyleSheet.create({
        frontPage: {
            backgroundColor: '#FFF',
        },
        viewSection:{
            width: '100%',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:100
        },
        frontPageImage: {
            marginVertical: 15,
            marginHorizontal: 100,
            marginTop:100
        },
        subtitle:{
            fontSize:'25px'
        }
    });

    function getDate(){
        const date = new Date(Date.now())
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return ( 
        <CustomPage>
            <Image
                style={styles.frontPageImage}
                src= {LogoFullGreen}
            />
            <View style={[styles.viewSection, {marginTop:'50'}]}>
                <Text style={styles.subtitle}>"El cuidado del planeta importa"</Text>
            </View>
            <View style={styles.viewSection}>
                <Text>{title}</Text>
            </View>
            <View style={styles.viewSection}>
                <Text>{getDate()}</Text>
            </View>
        </CustomPage>
     );
}

export default FrontPage;