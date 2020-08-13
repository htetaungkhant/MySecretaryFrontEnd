import React from 'react';
import './AddTransaction.css'

class AddTransaction extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: [],
            selectedPerson: null,
            types: [],
            selectedType: null
        };
    }

    componentDidMount() {
        this.setState({
            people: [
                { id: 1, name: "Htun Htun Lin" },
                { id: 2, name: "Htet Aung Khant" },
                { id: 3, name: "htethtethtethtethtethtethtethtethtethtethtet" }
            ],
            types: [
                { id: 1, typename: "To Receive" },
                { id: 2, typename: "To Give" }
            ]
        });
    }

    showPeople = () => {
        let peopleList = document.getElementById("people-list");
        let upDownIcon = document.getElementById("up-down-icon-1");
        if (peopleList.className === "select-list hide") {
            peopleList.className = "select-list show";
            upDownIcon.src = "./img/up-arrow.png"
        }
        else {
            peopleList.className = "select-list hide";
            upDownIcon.src = "https://img.icons8.com/nolan/40/expand-arrow.png";
        }
    }

    selectPerson = (id, name) => {
        let SPElement = document.getElementById("selected-person");
        let PLElement = document.getElementById("people-list");
        let UDIElement = document.getElementById("up-down-icon-1");
        SPElement.innerHTML = name;
        PLElement.className = "select-list hide";
        UDIElement.src = "https://img.icons8.com/nolan/40/expand-arrow.png";

        this.setState({
            selectedPerson: id
        });
    }

    render() {
        return (
            <div className="main-div">
                <div className="form-div">
                    <div className="row">
                        <div className="select-box" onClick={this.showPeople.bind(this)}>
                            <span className="selected-item" id="selected-person">Select Person</span>
                            <img id="up-down-icon-1" src="https://img.icons8.com/nolan/40/expand-arrow.png" alt="down-arrow" />
                        </div>
                        <div className="select-list hide" id="people-list" >
                            {this.state.people.map(person => {
                                return (
                                    <span className="select-item" id="person" key={person.id} onClick={() => this.selectPerson(person.id, person.name)}>
                                        {person.name}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <div className="types">
                            {
                                this.state.types.map(type => {
                                    return (
                                        <div className="type" key={type.id}>
                                            <input type="radio" id={type.id} name="types" value={type.typename} />
                                            <label className="label-for-type" htmlFor={type.id}>{type.typename}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        <input id="amount-input" type="number" placeholder="Enter Amount" pattern="\d*" min="50" max="900000"/>
                    </div>
                    <div className="row">
                        <textarea id="detail-input" type="text" name="description" rows="3" placeholder="Enter Details" maxLength="100"/>
                    </div>
                    <div className="row">
                        <button id="btn-submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTransaction;