import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import axios from 'axios';

import './hello.css';


export default class MyComponent extends React.Component {

    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb`)
            .then(res => {
                const persons = res.data.results;
                this.setState({persons});
            })
    }

    render() {
        const input = this.state.persons;
        console.log('input',input);

        let initial_accumulator_value = {};

        const data = input.reduce((accumulator, data_item) => {

            let {HOST_NAME, APP, DB_NAME, INSTANCE_NAME, ENV} = data_item;

            if (accumulator[HOST_NAME] === undefined) accumulator[HOST_NAME] = {};

            if (accumulator[HOST_NAME][APP] === undefined) accumulator[HOST_NAME][APP] = {instances: []};



            accumulator[HOST_NAME][APP].instances.push({name: INSTANCE_NAME, environment: ENV});

            return accumulator;

        }, initial_accumulator_value);

        console.log(data);

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <p className="header-text">Form Name</p>
                            <p className="header-content">This will come from the Dashboard</p>
                        </Col>
                    </Row>
                </Grid>
                <ul>
                    {this.state.persons.map(person => <li>
                        <div className="container-fluid">

                            <ul>
                                <div className="item-view" style={{marginTop: 50}}>
                                    <p>
                                        <g style={{color: "#ff00cc"}}> Host Name</g>
                                        : {person.original_title}</p>
                                    <Table bordered>
                                        <thead>
                                        <tr>
                                            <th>App Name</th>
                                            <th>instances</th>
                                            <th>Environment</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td rowSpan="2" style={{fontSize: 30, paddingTop: 15, marginLeft: 20}}>WFN
                                            </td>
                                            <td>{person.vote_average}</td>
                                            <td>{person.release_date}</td>
                                        </tr>
                                        <tr>
                                            <td>{person.backdrop_path}</td>
                                            <td>{person.original_language}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </ul>
                        </div>

                    </li>)}
                </ul>
            </div>
        )
    }

}

