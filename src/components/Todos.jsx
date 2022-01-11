import React from "react";
import ToDoItem from "./todoItem";
import TodoAdd from "./TodoAdd";



export default class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           // date: new Date(),
           msg : '',
          data : [
                {
                    "key":1,
                    "id": 1,
                    "title": "Finished my React course",
                    "status" : false

                },
                {

                    "key":2,
                    "id": 2,
                    "title": "Share Study React course",
                    "status": false

                },
                {

                    "key":3,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "status": false

                }

            ]

        }

    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    deleteItem = (id, e) => {
        let { items } = this.state;
        items.splice(id, 1);
        this.setState({ items: items });
    }

    markeCompleted = (id, e) => {
        console.log('hei'+id);
        
    }


    addTodo= (newItem) => {
        this.setState ({data:[...this.state.data.newItem]})
    }

    render() {
        let { data, msg } = this.state;
        return (
            <div>

{/* 
                <h2> It is {this.state.date.toLocaleTimeString()}. </h2> */}
                <h3>{msg}</h3>
                <TodoAdd   addTodo={this.addTodo} />
                <ul className="list-group">
                    {
                        data.map((value, index) => {
                            return <ToDoItem  title={value.title} id={value.id} deleteItem={this.deleteItem} index={index}
                            markeCompleted={this.markeCompleted}  />
                        })
                    }


                </ul>
            </div>
        )

    }
}