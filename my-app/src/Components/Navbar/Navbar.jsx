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
import {
    MdComputer
} from "react-icons/md";

import { IconContext } from "react-icons";
import styles from './Navbar.module.css';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function scrollToTop() {
        scroll.scrollToTop();
    }

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
                            <MenuItemLink className={`${styles.container_MenuItem}`}>
                                <div>
                                    <Link onClick={() => setShowMobileMenu(!showMobileMenu)} to="inicio" spy={true} smooth={true} offset={-1000} duration={100} className="d-flex align-center">
                                        <FaHome />
                                        <span className="pt-1">
                                            INICIO
                                        </span>
                                    </Link>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`}>
                                <div>
                                    <Link onClick={() => setShowMobileMenu(!showMobileMenu)} to="trabajo" spy={true} smooth={true} offset={-200} duration={100} className="d-flex">
                                        <FaUserAlt />
                                        <span className="pt-1">
                                            MI TRABAJO
                                        </span>
                                    </Link>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`}>
                                <div>
                                    <Link onClick={() => setShowMobileMenu(!showMobileMenu)} to="tecnologias" spy={true} smooth={true} offset={-65} duration={100} className="d-flex">
                                        <MdComputer color="white" />
                                        <span className="pt-1">
                                            TECNOLOGÍAS
                                        </span>
                                    </Link>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink className={`${styles.container_MenuItem}`}>
                                <div>
                                    <Link onClick={() => setShowMobileMenu(!showMobileMenu)} to="contacto" spy={true} smooth={true} offset={-65} duration={100} className="d-flex">
                                        <AiTwotoneMail />
                                        <span className="pt-1">
                                            CONTACTAME
                                        </span>
                                    </Link>
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
