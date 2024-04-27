import { Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import FrontPage from "./FrontPage";
import CustomPage from "./CustomPage";
import {formatDateWithTime} from '../utils/formatDate'

function UsersReport({ users }) {
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
      width: "20.75%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: { margin: "auto", marginTop: 5, marginBottom:5, fontSize: 10 },
    tHead:{margin: "auto", marginTop: 3, marginBottom:3, fontSize: 10}
  });

  //calculate the number of pages needed to display all the users dividing them in groups of 40 to fit in the pages correctly
  function getNumberOfPages(){
    const maxRowsPerPage = 40
    return Math.ceil(users.length/maxRowsPerPage)
  }

  //create the table body with the given list of users
  function createTableBodyWithUsersInfo({usersList, indexCont}){
    //usersList: a list of users with at most 40 users
    //indexCont: is the last index generated in heach page
    return usersList.map((user, index) => 
        //table row with 7 cells
        <View key = {user.id} style={styles.tableRow}>
            <View style={[styles.tableCol, {width:'5%'}]}>
                <Text style={styles.tableCell}>{indexCont + index}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{user.username}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{user.email}</Text>
            </View>
            <View style={[styles.tableCol, {width:"6%"}]}>
                <Text style={styles.tableCell}>{user.is_staff?"si":"no"}</Text>
            </View>
            <View style={[styles.tableCol, {width:"6%"}]}>
                <Text style={styles.tableCell}>{user.is_active?"si":"no"}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{formatDateWithTime(user.last_login)}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{formatDateWithTime(user.date_joined)}</Text>
            </View>
        </View>
        )
  }

  return (
    <Document>
        <FrontPage title="Reporte de usuarios de Bio Digestión" />
        {/*
        Algorithm:
        1.Create new array with the number of pages nedded, filled with something.
        2.Iterate the array to generate each page. Each page contains a table with at most 40 users
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
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>Nombre de usuario</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>Email</Text>
                            </View>
                            <View style={[styles.tableCol, {width:"6%"}]}>
                                <Text style={styles.tHead}>Admin</Text>
                            </View>
                            <View style={[styles.tableCol, {width:"6%"}]}>
                                <Text style={styles.tHead}>Activo</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>Último inicio de Sesión</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tHead}>Fecha de creación</Text>
                            </View>
                        </View>
                    :null}
                    {/*Table body*/}
                    {createTableBodyWithUsersInfo({usersList: users.slice(index*40, (index+1)*40), indexCont: index*40})}
                </View>
            </CustomPage>
        )}
    </Document>
  );
}

export default UsersReport;
