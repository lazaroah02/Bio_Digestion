import { Document, Text, View, StyleSheet } from '@react-pdf/renderer';
import FrontPage from './FrontPage';

function ProjectsReport() {
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
            <FrontPage title = "Reporte de proyectos de Bio Digestión"/>
        </Document>
     );
}

export default ProjectsReport;