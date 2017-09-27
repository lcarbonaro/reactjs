/* global fetch */

import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees:[]
        };
    }

    getEmployeeNames() {
        /*
        let data = ["Fred","Wilma","Barney","Joan"];
        this.setState({
            employees: data
        });
        */

        fetch('https://jsonplaceholder.typicode.com/users')
        .then( (resp) => resp.json() )
        .then( (data) => {
            this.setState({
                employees: data
            });
        });
    }

    componentWillMount() {
        this.getEmployeeNames();
    }

    render() {

        return (
            <div>
                <h4>{this.props.dept}</h4>
                <ul className="collection">
                    {
                        this.state.employees.map(
                            (u,i) => <li className="collection-item" key={i}>{u.username}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default List;
