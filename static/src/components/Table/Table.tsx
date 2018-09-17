import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid } from 'react-bootstrap';
import './../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export class Table extends React.Component {
    render() {
        const hola = [{
            periodo:'',
            registro:'',
            estado:'',
            municipio:'',
            suceso:''
        },
        {
            periodo:'',
            registro:'',
            estado:'',
            municipio:'',
            suceso:''
        },
        {
            periodo:'',
            registro:'',
            estado:'',
            municipio:'',
            suceso:''
        },{
            periodo:'',
            registro:'',
            estado:'',
            municipio:'',
            suceso:''
        },
        {
            periodo:'',
            registro:'',
            estado:'',
            municipio:'',
            suceso:''
        },
        {
            periodo:'',
            registro:'',
            estado:'',
            municipio:'',
            suceso:''
        }
    ];
        return (
            <Grid className='wrapper'>
                <BootstrapTable data={hola} hover striped exportCSV>
                    <TableHeaderColumn dataField='anho'>Fecha</TableHeaderColumn>
                    <TableHeaderColumn dataField='periodo' isKey>Periodo</TableHeaderColumn>
                    <TableHeaderColumn dataField='registro'>Registro</TableHeaderColumn>
                    <TableHeaderColumn dataField='estado'>Estado</TableHeaderColumn>
                    <TableHeaderColumn dataField='municipio'>Municipio</TableHeaderColumn>
                    <TableHeaderColumn dataField='suceso'>Suceso</TableHeaderColumn>
                </BootstrapTable>
            </Grid>
        );
    }
}