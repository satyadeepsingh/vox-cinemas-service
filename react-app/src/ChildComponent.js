import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Events } from "./pages";
import { Component } from 'react';


class ChildComponent extends Component {
    sendMessage=()=>{
        const {websocket} = this.props // websocket instance passed as props to the child component.

        try {
            websocket.addEventListener('message', function (event) {
                window.alert('message from server: ' + event.data);
                console.log('message from server: ' + event.data);
              });
        } catch (error) {
            console.log(error) // catch error
        }
    }
    render() {
        return (
            <div>
                ........
            </div>
        );
    }
}

export default ChildComponent;