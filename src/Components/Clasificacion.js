import React from 'react'
import { Table, TableRow, TableBody, TableCell, Button, TableHead } from '@material-ui/core'
import * as firebase from "firebase/app";
import "firebase/firestore";

class Clasificacion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      equipos: []
    }
  }
  getEquipos() {

    var db = firebase.firestore();
    db.collection("equipos").get().then((querySnapshot) => {

      console.log("querySnap",querySnapshot);
      let equipos = [];
      querySnapshot.forEach((doc) => {
        let equipo = doc.data()
        equipos.push(equipo)
      })
      this.setState({ equipos })
    });
  }

  componentDidMount() {
    this.getEquipos()
  }
  render() {
    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre Equipo</TableCell>
              <TableCell >PJ</TableCell>
              <TableCell >PG</TableCell>
              <TableCell >GF</TableCell>
              <TableCell >PTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.equipos.map((p) => {
              return (
                <TableRow>
                  <TableCell>{p.nombreEquipo}</TableCell>
                  <TableCell>{p.PJ}</TableCell>
                  <TableCell>{p.PG}</TableCell>
                  <TableCell>{p.GF}</TableCell>
                  <TableCell>{p.PTS}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </>
    )
  }
}
export default Clasificacion;