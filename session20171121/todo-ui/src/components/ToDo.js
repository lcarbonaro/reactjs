import React from 'react'
import CreateItem from './CreateItem'
import ListItems from './ListItems'

export default class ToDo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/todo-items')
        .then(
            (resp) => { return resp.json(); }
        )
        .then(
            (data) => {
                this.setState({
                    items: data
                });
            }
        );
    }

    saveTodoItem(item) {
        fetch('http://localhost:3000/api/todo-items', {
            "method":"post",
            "headers": {
                "content-type":"application/json"
            },
            "body": JSON.stringify(item)
        });
    }

    createTask(item){
        this.saveTodoItem(item);
        this.state.items.push(item)
        this.setState({
            items: this.state.items
        })
    }

    render() {
        return (
            <div>
                <h1>My Todo List</h1>
                <CreateItem items={this.state.items} createTask={this.createTask.bind(this)} />
                <ListItems items={this.state.items} />
            </div>
        )
    }
}
