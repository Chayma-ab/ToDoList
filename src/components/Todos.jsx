import React from "react";
import ToDoItem from "./todoItem";



export default class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            items: [
                {

                    "id": 1,
                    "title": "delectus aut autem",

                },
                {

                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",

                },
                {

                    "id": 3,
                    "title": "fugiat veniam minus",

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

    render() {
        let { items } = this.state;
        return (
            <div>


                <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
                <ul className="list-group">
                    {
                        items.map((value, index) => {
                            return <ToDoItem title={value.title} deleteItem={this.deleteItem} index={index}
                            markeCompleted={this.markeCompleted}  />
                        })
                    }


                </ul>
            </div>
        )

    }
}