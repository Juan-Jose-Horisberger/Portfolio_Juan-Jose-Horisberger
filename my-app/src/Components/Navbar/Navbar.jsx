// import React from "react";
// import styled from 'styled-components'
// import BurgerButton from "../BurgerButton/BurgerButton";

// export default function SearchBar() {
//     return (
//         <>
//             <NavBar>
//                 <h2>Juan Jose Horisberger</h2>
//                 <div className="links ">
//                     <p className="m-0">Inicio</p>
//                     <p className="m-0">Mi trabajo</p>
//                     <p className="m-0">Tecnología</p>
//                     <button>Contactame</button>
//                 </div>
//                 <span className="burger"><BurgerButton /></span>
//             </NavBar>
//         </>
//     )
// }

// const NavBar = styled.nav`
//     width: 100%;
//     padding: .4rem;
//     background-color: transparent;
//     display: flex;
//     justify-content: space-between !important;
//     align-items: center;
//     border: 1px solid red;
//     h2{
//         font-weight: 600;
//         color: white;
//         border: 1px solid red;
//     }
//     .links{
//         width: 600px;
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         border: 1px solid red;

//         position: absolute;
//         top: -700px;
//         left: -2000px;
//         margin-left: auto;
//         margin-right: auto;
//         text-align: center;
//         p{
//             color: white;
//             margin: 0;
//         }
//         button{
//             width: 120px;
//             border-radius: 5px;
//             border-color: 1x solid "#17171F";
//             background-color: transparent;
//             padding: 5px;
//             outline: none;
//         }
//         @media(min-width: 768px){
//             position: initial;
//             margin: 0;
//             display: flex;
//             flex-direction: column;
//         }
//     }

//     .links.active{ //Cambiamos los estilos de links, para medidas de celulares
//         width: 100%;
//         display: block;
//         position: absolute;
//         margin-left: auto;
//         margin-right: auto;
//         top: 30%;
//         left: 0;
//         right: 0;
//         text-align: center;
//         p{
//             font-size: 20px;
//             color: white;
//         }
//     }
//     .burger{
//         @media(min-width: 768px){
//             display: none;
//         }
//     }

// `


import React, { useState } from "react";
import {
    Container,
    LogoContainer,
    Wrapper,
    Menu,
    MenuItem,
    MenuItemLink,
    MobileIcon,
} from "./Navbar.elements";
import {
    // FaBattleNet,
    FaBars,
    FaTimes,
    FaHome,
    FaUserAlt,
    // FaBriefcase,
    // FaGlasses,
} from "react-icons/fa";
import {
    GrTechnology
} from "react-icons/gr";
import {
    AiTwotoneMail
} from "react-icons/ai";

import { IconContext } from "react-icons";
import styles from './Navbar.module.css';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        {/* <FaBattleNet /> */}
                        <p className={`${styles.containerName}`}>Juan Jose Horisberger</p>
                        {/* <p>F(X)</p> */}
                    </LogoContainer>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaHome />
                                    INICIO
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <FaUserAlt />
                                    MI TRABAJO
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <GrTechnology />
                                    TECNOLOGÍAS
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <AiTwotoneMail />
                                    CONTACTAME
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
