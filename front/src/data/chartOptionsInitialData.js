export const CHART_OPTIONS_INITIAL_DATA = {
    VAN:{
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.VAN' }],
        title: { text: 'Valor Actual Neto (VAN)'},
    },
    LEC:{
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.LEC' }],
        title: { text: 'Costo Nivelado de la Electricidad (LEC)' },
    },
    TRI:{
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.TRI' }],
        subtitle: {text: "En años",},
        title: { text: 'Tiempo de Recuperación de la Inversión (TRI)' },
    },
    TIR:{
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.TIR' }],
        subtitle: {text: "En porciento(%)",},
        title: { text: 'Tasa Interna de Retorno (TIR)' },
    },
    BPM:{
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.BPM' }],
        title: { text: 'Potencial de Biometano Generado (BPM)' },
    },
    Z:{
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.Z' }],
        title: { text: 'Z' },
    },
}