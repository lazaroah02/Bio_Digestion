import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import AsideBackground from '../assets/login-aside-background.webp'

function PdfTemplate({children}) {
    // PDF styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });
    return ( 
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <img src = {AsideBackground}/>
                </View>
                <View style={styles.section}>
                    <Text>Sección #2</Text>
                </View>
            </Page>
            <Page>
                {children}
            </Page>
        </Document>
     );
}

export default PdfTemplate;