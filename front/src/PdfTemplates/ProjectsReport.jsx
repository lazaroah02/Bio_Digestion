import { Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import FrontPage from "./FrontPage";
import CustomPage from "./CustomPage";
import { formatDateWithTime } from "../utils/formatDate";

function ProjectsReport({ projects = [] }) {
  // PDF styles
  const styles = StyleSheet.create({
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: { margin: "auto", flexDirection: "row" },
    tableCol: {
      width: "9.67%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: { margin: "auto", marginTop: 5, marginBottom:5, fontSize: 10 },
    tHead:{margin: "auto", marginTop: 3, marginBottom:3, fontSize: 10}
  });

  //calculate the number of pages needed to display all the projects dividing them in groups of 40 to fit in the pages correctly
  function getNumberOfPages(){
    const maxRowsPerPage = 40
    return Math.ceil(projects.length/maxRowsPerPage)
  }

  //create the table body with the given list of projects
  function createTableBodyWithProjectsInfo({projectsList, indexCont}){
    //projectsList: a list of projects with at most 40 projects
    //indexCont: is the last index generated in heach page
    return projectsList.map((project, index) => 
        //table row with 7 cells
        <View key = {project.id} style={styles.tableRow}>
            <View style={[styles.tableCol, {width:'5%'}]}>
                <Text style={styles.tableCell}>{indexCont + index}</Text>
            </View>
            <View style={[styles.tableCol, {width:'20%'}]}>
                <Text style={styles.tableCell}>{project.name}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{project.indicators.VAN}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{project.indicators.TIR}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{project.indicators.TRI}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{project.indicators.LEC}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{project.indicators.BPM}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{project.indicators.Z}</Text>
            </View>
            <View style={[styles.tableCol, {width:'17%'}]}>
                <Text style={styles.tableCell}>{formatDateWithTime(project.created_at)}</Text>
            </View>
        </View>
        )
  }

  return (
    <Document>
        <FrontPage title="Reporte de proyectos de Bio Digestión" />
        {/*
        Algorithm:
        1.Create new array with the number of pages nedded, filled with something.
        2.Iterate the array to generate each page. Each page contains a table with at most 40 projects
        3.Only the first page contains the table header
        */}
        {new Array(getNumberOfPages()).fill("").map((e, index) => 
            <CustomPage key = {index}>
                <View style={[styles.table, {marginTop:'30px'}]}>
                    {/*Only the first page's table have header*/}
                    {index === 0?
                        /*Table header*/
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCol, {width:'5%'}]}>
                                <Text style={styles.tHead}>#</Text>
                            </View>
                            <View style={[styles.tableCol, {width:'20%'}]}>
                                <Text style={styles.tHead}>Proyecto</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>VAN</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>TIR</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>TRI</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>LEC</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>BPM</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>Z</Text>
                            </View>
                            <View style={[styles.tableCol, {width:'17%'}]}>
                                <Text style={styles.tHead}>Fecha de creación</Text>
                            </View>
                        </View>
                    :null}
                    {/*Table body*/}
                    {createTableBodyWithProjectsInfo({projectsList: projects.slice(index*40, (index+1)*40), indexCont: index*40})}
                </View>
            </CustomPage>
        )}
    </Document>
  );
}

export default ProjectsReport;
