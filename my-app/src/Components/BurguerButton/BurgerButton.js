import React, { useState } from "react";
import styled from 'styled-components'
import './BurgerButton.css'

export default function BurgerButton() {

    const [active, setActive] = useState("");


    return (
        <Burger>
            <div id="nav-icon4">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burger>
    )
}

const Burger = styled.div`
/* Icon 4 */
  /* Icon 1 */
  
    #nav-icon4 {
        width: 60px;
        height: 45px;
        display: flex;
        position: relative;
        z-index: 5;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
    }
  
    #nav-icon4 span {
        display: block;
        position: absolute;
        height: 9px;
        width: 100%;
        background: #d3531a;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
  
  /* Icon 4 */
  
    #nav-icon4 {
        cursor: pointer;
    }
  
    #nav-icon4 span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
  
    #nav-icon4 span:nth-child(2) {
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
  
    #nav-icon4 span:nth-child(3) {
        top: 36px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }
  
     #nav-icon4.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
    }
  
    #nav-icon4.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }
  
    #nav-icon4.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 39px;
        left: 8px;
    }


    // #nav-icon4{
    //     @media(min-width: 768px){
    //         display: none;
    //     }
    // }
`
