import { Page, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from '../assets/logos-png/logo.png'

function CustomPage({children}) {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#FFF',
        },
        footerImage: {
            width:'50px',
            height:'50px',
            position:'absolute',
            bottom:'20px',
            right:'20px',
        }
    });
    return ( 
        <Page size="A4" style={styles.page}>
            {children}
            <Image 
                style={styles.footerImage}
                src= {Logo}
                />
        </Page>
     );
}

export default CustomPage;