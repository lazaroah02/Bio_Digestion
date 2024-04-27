import { Document, Text, View, StyleSheet } from '@react-pdf/renderer';
import FrontPage from './FrontPage';

function UsersReport() {
    // PDF styles
    const styles = StyleSheet.create({
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });
    return ( 
        <Document>
            <FrontPage title="Reporte de usuarios de Bio Digestión"/>
        </Document>
     );
}

export default UsersReport;