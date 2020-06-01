import React from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { Typography, Button } from '@material-ui/core';
import firebase from "firebase";

class Registro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombreEquipo:"",
            PJ:"",
            PG:"",
            GF:"",
            PTS:"",
            docRef:""
        }
    }

    saveValue(e,estado){
        this.setState({[estado]:e.target.value})
     }


     async saveValueFB(){
        var db = firebase.firestore();
                return await db.collection("equipos").add({
                    nombreEquipo:this.state.nombreEquipo,
                    PJ:this.state.PJ,
                    PG:this.state.PG,
                    GF:this.state.GF,
                    PTS:this.state.PTS
                })
        
              
            }

    async send(){
        let docRef=await this.saveValueFB();
    }
    render(){
        return(<Paper>
            <Typography variant="h5" component="h5">REGISTRO EQUIPO CLASIFICACION</Typography>
            <TextField label={"Nombre del Equipo"} fullWidth={true} onChange={(e)=>this.saveValue(e,"nombreEquipo")}/>
            <TextField label={"Partidos Jugados"} fullWidth={true} onChange={(e)=>this.saveValue(e,"PJ")}/>
            <TextField label={"Partidos Ganados"} fullWidth={true} onChange={(e)=>this.saveValue(e,"PG")}/>
            <TextField label={"Goles a Favor"} fullWidth={true} onChange={(e)=>this.saveValue(e,"GF")}/>
            <TextField label={"Puntos"} fullWidth={true} onChange={(e)=>this.saveValue(e,"PTS")}/>
            <Button color="primary" onClick={()=>this.send()}>GUARDAR</Button>
            </Paper>)
    }
}
export default Registro;