import { Document, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import FrontPage from "./FrontPage";
import CustomPage from "./CustomPage";
import VTFormula from '../assets/design-formulas-images/VT.png'
import TRHFormula from '../assets/design-formulas-images/TRH.png'
import ArFormula from '../assets/design-formulas-images/Ar.png'
import VrFormula from '../assets/design-formulas-images/Vr.png' 
import LrFormula from '../assets/design-formulas-images/Lr.png' 
import VascFormula from '../assets/design-formulas-images/Vasc.png' 
import ReactorImage1 from '../assets/reactor-images/1.png'
import ReactorImage2 from '../assets/reactor-images/2.png'
import { getNumberOfReactorsNeeded } from "../utils/designCalculations";
function DesignReport({frontPageTitle = "", entranceData, calculationResults}) {

    // PDF styles
    const styles = StyleSheet.create({
      title: {
        textAlign:"center",
        marginTop:"20px",
      },
      subTitle: {
        fontSize:"14px",
        margin:"5px",
        textDecoration:"underline",
      },
      text: {
        fontSize:"10px",
        margin:"5px"
      },
      designSection:{
        width:"95%",
        margin: "0 auto",
        padding: "10px",
        marginTop:"10px"
      },
      formulaImage:{
        width:"100px",
      },
      reactorImage:{
        width:"250px",
        margin:"0 auto",
        marginTop:"20px"
      },
      flexRow:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
      },
      table: {
        display: "table",
        width: "95%",
        margin:"0 auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      },
      tableRow: { margin: "auto", flexDirection: "row" },
      tableCol: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCell: { margin: "auto", marginTop: 5, marginBottom:5, fontSize: 10 },
      tHead:{margin: "auto", marginTop: 3, marginBottom:3, fontSize: 10}
    });
  
    return (
      <Document>
          <FrontPage title={frontPageTitle} />
          <CustomPage>
            <Text style={styles.title}>Datos de Entrada</Text>
            {/*Table with Entrance Data*/}
            <View style={[styles.table, {marginTop:'20px'}]}>
                {/*Table header*/}
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tHead}>Indicador</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tHead}>Valor</Text>
                    </View>
                </View>
                {/*Table Body*/}
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Caudal del influente(Qinf) en (m^3/d)</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{entranceData.Qinf}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>DQOv en (kg/m^3 )</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{entranceData.DQOv}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>COV en (kg/(m^3*d))</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{entranceData.COV}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Altura líquida del reactor(Hr) en (m)</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{entranceData.Hr}</Text>
                    </View>
                </View>
            </View>
            {/*Calculos Geometricos*/}
            <Text style={styles.title}>Cálculos geométricos del reactor</Text>
            <View style={styles.designSection}>
                <Text style={styles.subTitle}>Volumen Total</Text>
                <Text style={styles.text}>El Volumen Total del reactor se calcula mediante la Ecuación:</Text>
                <Image
                    style={styles.formulaImage}
                    src= {VTFormula}
                />
                <Text style={styles.text}>Sustituyendo los datos de entrada correspondientes en la ecuación y resolviéndola se obtiene:</Text>
                <Text style={styles.text}>VT = {calculationResults.VT?calculationResults.VT:"_______"} m^3</Text>
            </View>
            <View style={styles.designSection}>
                <Text style={styles.subTitle}>Tiempo de Retención Hidráulico</Text>
                <Text style={styles.text}>El Tiempo de Retención Hidráulico del reactor se calcula mediante la Ecuación:</Text>
                <Image
                    style={styles.formulaImage}
                    src= {TRHFormula}
                />
                <Text style={styles.text}>Sustituyendo los datos de entrada correspondientes en la ecuación y resolviéndola se obtiene:</Text>
                <Text style={styles.text}>TRH = {calculationResults.TRH?calculationResults.TRH:"_______"} horas</Text>
            </View>
            <View style={styles.designSection}>
                <Text style={styles.subTitle}>Optimización del Volumen</Text>
                <Text style={styles.text}>
                    Para facilitar el funcionamiento y un mantenimiento del reactor, el Caudal del influente(Qinf) 
                    no puede exceder de 500 m^3/d. 
                    En este caso, debido a que el Caudal del influente(Qinf) es {entranceData.Qinf?entranceData.Qinf:"_______"} m^3/d, 
                    son necesarias {getNumberOfReactorsNeeded({Qinf:entranceData.Qinf})?
                    getNumberOfReactorsNeeded({Qinf:entranceData.Qinf}): 
                    "_______"} unidades de reactores.
                </Text>
                <Text style={styles.text}>El Volumen de Reactor se calcula mediante la Ecuación:</Text>
                <Image
                    style={styles.formulaImage}
                    src= {VrFormula}
                />
                <Text style={styles.text}>Donde Nr: Número de unidades de reactores</Text>
                <Text style={styles.text}>
                    Sustituyendo los datos de entrada correspondientes en la ecuación y resolviéndola se obtiene:
                </Text>
                <Text style={styles.text}>
                    Vr = {calculationResults.VT && getNumberOfReactorsNeeded({Qinf:entranceData.Qinf})?
                    calculationResults.VT / getNumberOfReactorsNeeded({Qinf:entranceData.Qinf}):
                    "_______"} m^3
                </Text>
            </View>
          </CustomPage>
          <CustomPage>
            <View style={styles.designSection}>
                <Text style={styles.subTitle}>Área de Reactor</Text>
                <Text style={styles.text}>El Área de Reactor se calcula mediante la Ecuación:</Text>
                <Image
                    style={styles.formulaImage}
                    src= {ArFormula}
                />
                <Text style={styles.text}>Sustituyendo los datos de entrada correspondientes en la ecuación y resolviéndola se obtiene:</Text>
                <Text style={styles.text}>Ar = {calculationResults.AR?calculationResults.AR:"_______"} m^2</Text>
            </View>
            <View style={styles.designSection}>
                <Text style={styles.subTitle}>Longitud de cada lado de reactor</Text>
                <Text style={styles.text}>La longitud de cada lado de reactor se calcula mediante la Ecuación:</Text>
                <Image
                    style={styles.formulaImage}
                    src= {LrFormula}
                />
                <Text style={styles.text}>Sustituyendo los datos de entrada correspondientes en la ecuación y resolviéndola se obtiene:</Text>
                <Text style={styles.text}>Lr = {calculationResults.LR?calculationResults.LR:"_______"} m</Text>
            </View>
            <View style={styles.designSection}>
                <Text style={styles.subTitle}>Velocidad ascensional</Text>
                <Text style={styles.text}>La Velocidad ascensional se calcula mediante la Ecuación:</Text>
                <Image
                    style={styles.formulaImage}
                    src= {VascFormula}
                />
                <Text style={styles.text}>Sustituyendo los datos de entrada correspondientes en la ecuación y resolviéndola se obtiene:</Text>
                <Text style={styles.text}>Vasc = {calculationResults.Vasc?calculationResults.Vasc:"_______"} m/h</Text>
            </View>
            <Text style={styles.title}>Diseños de Reactores</Text>
            <View style = {styles.flexRow}>
                <Image
                        style={styles.reactorImage}
                        src= {ReactorImage1}
                    />
                <Image
                        style={[styles.reactorImage, {width:"300px", height:"185px", marginBottom:"29px"}]}
                        src= {ReactorImage2}
                    />    
            </View>
          </CustomPage>  
      </Document>
    );
  }
  
  export default DesignReport;
  