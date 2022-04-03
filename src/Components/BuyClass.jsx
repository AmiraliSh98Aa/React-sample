import React, { Component } from 'react'

export default class BuyClass extends Component {
    
    // constructor(props) {
    //     super(props);

    //     this.showAlert = this.showAlert.bind(this);
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // showAlert(name) {
    //     alert(name)
    // }
    // handleClick() {
    //     const {name} = this.props;
    //     setTimeout(() => this.showAlert(name), 3000)
    // }
    render() {

        const {name} = this.props;

        function showAlert() {
            alert(name)
        }
        function handleClick() {
            setTimeout(showAlert, 3000)
        }
        return (
            <div>
                <span className="badge" onClick={handleClick}>Buy</span>
                <p>Class</p>
            </div>
        )
    }
}
