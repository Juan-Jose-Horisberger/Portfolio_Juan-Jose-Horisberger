import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./Home.module.css";
import imagenPersonal from "../../imagenes/imagenJuanjo.png"
import GaedImg from "../../imagenes/Gaed_img.jpeg";
import { BsGithub, BsFillEyeFill, BsLinkedin } from "react-icons/bs";
import { MdFoodBank } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll'
import documentCv from "../../Curriculum de Juan Jose Horisberger 2022.pdf"

/*Iconos*/
import imgHtml from "../../imagenes/imgHtml.svg";
import imgCss from "../../imagenes/imgcss3.svg";
import imgBootstrap from "../../imagenes/imgNose.svg";
import imgJavascript from "../../imagenes/imgJavascript.png";
import imgReact from "../../imagenes/imgReact.svg";
import imgRedux from "../../imagenes/imgRedux.svg";
import imgNodeJs from "../../imagenes/imgNodejs.png";
import imgExpress from "../../imagenes/imgexpress.png";
import imgSequelize from "../../imagenes/imgSequelize.svg";
import imgPosgres from "../../imagenes/imgPostgres.svg";
import imgPostman from "../../imagenes/imgPostman.png";
import imgGit from "../../imagenes/imggit.svg";
import imgHeroku from "../../imagenes/imgHeroku.svg";
import imgVercel from "../../imagenes/imgVercel.svg";
import imgScrum from "../../imagenes/imgScrum.png";

/*Iconos de React-icons*/
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiVercel } from "react-icons/si";

export default function Home() {
    const [input, setInput] = useState({
        user_name: "",
        user_email: "",
        user_message: ""
    });

    const particlesInit = async (main) => {
        // console.log(main);
        // you can initiate the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    }

    const particlesLoaded = (container) => {
        // console.log(container)
    };

    function handleOnChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("entra aca")
        // console.log(process.env
        // )
        // emailjs.sendForm('', '', e.target)
        emailjs
            .sendForm(
                process.env.REACT_APP_YOUR_SERVICE_ID,
                process.env.REACT_APP_YOUR_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_YOUR_PUBLIC_KEY
            )
            .then((res) => {
                console.log(res)
                setInput({
                    user_name: "",
                    user_email: "",
                    user_message: "",
                });
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div id="hero">
            <Navbar />
            <div className={`${styles.container_Particles}`}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            enable: false,
                            zIndex: 0,
                        },
                        background: {
                            color: {
                                value: "#17171F",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                // onClick: {
                                //     enable: true,
                                //     mode: "push",
                                // },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 150,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />

            </div>
            <Element name="inicio">
                <div className={`${styles.container_Contenedor}`}>
                    <div className={`${styles.container_Div1}`}>
                        <h1>Contruyendo hermosas experiencias web.</h1>
                        <a href={documentCv} download>Download CV.</a>
                    </div>

                    <div className={`${styles.container_img}`}>
                        <div className={`${styles.container_Div2}`}>
                            <img src={imagenPersonal} alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </Element>



            <div className={`${styles.container_Proyects}`} style={{ marginTop: "130px" }}>
                <div className={`${styles.container_Section1}`}>
                    <h3>Mi trabajo</h3>
                    <p>En esta sección muestro algunos de los proyectos que he realizado con los conocimientos adquiridos utilizando tecnologías tanto de Front-end como de Back-end</p>
                </div>
                <Element name="trabajo">
                    <div className={`${styles.container_Proyect1}`}>
                        <div className={`${styles.container_Gaed}`}>
                            <div>
                                <img src={GaedImg} alt="" className="img-fluid" />
                            </div>
                            <h1>GAED.JM</h1>
                        </div>

                        <div className={`${styles.container_info}`}>
                            <h4>E-commerce</h4>
                            <div>
                                <p>Front-End</p>
                                <p>Back-End</p>
                                <p>React.js</p>
                                <p>Redux</p>
                                <p>CSS3</p>
                                <p>Responsive Web Desing</p>
                                <p>Bootstrap</p>
                                <p>Style Component</p>
                                <p>SweetAlert2</p>
                                <p>Node.js</p>
                                <p>Express</p>
                                <p>Sequelize</p>
                            </div>
                        </div>

                        <div className={`${styles.info_Proyect}`}>
                            <p className="m-0">E-Commerce de ropa enfocado a la venta de indumentaria y calzado. La idea principal del proyecto es brindarle los mejores productos a el usuario donde podrá acceder a un catalogo de artículos 100% originales, con la posibilidad que el mismo pueda utilizar filtros combinados para concretar su compra de manera rápida y eficiente, entre otras funcionalidades..</p>
                        </div>
                        <div className={`${styles.containerButtons_Proyect}`}>
                            <a href="https://gaed-jm-dusky.vercel.app/LandingPage">Ir al sitio <span className="ps-1"><BsFillEyeFill size={"20px"} color="white" /></span></a>
                            <a href="https://github.com/Juan-Jose-Horisberger/Proyecto-final-front">Repositorio <span className="ps-1"><BsGithub size={"20px"} color="white" /></span> </a>
                        </div>
                    </div>
                </Element>

                <div className={`${styles.container_Proyect2}`}>
                    <div className={`${styles.container_Gaed}`}>
                        <h1 className={`p-0 border-0 ${styles.h1_Countries}`}>COUNTRIES APP</h1>
                    </div>

                    <div className={`${styles.container_info}`}>
                        <h4>App "COUNTRIES"</h4>
                        <div>
                            <p>Front-End</p>
                            <p>Back-End</p>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>CSS3</p>
                            <p>Responsive Web Desing</p>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>Sequelize</p>
                        </div>
                    </div>

                    <div className={`${styles.info_Proyect}`}>
                        <p className="m-0">Es una Single Page Application donde se muestra las banderas de todos los países e información de cada país utilizando la API externa Restcountries. Con la opción de agregar actividades turísticas a cada país (nombre de actividad, dificultad, duración, temporada).</p>
                    </div>
                    <div className={`${styles.containerButtons_Proyect}`}>
                        <a href="https://countries-project-flame.vercel.app/">Ir al sitio<span className="ps-1"><BsFillEyeFill size={"20px"} color="white" /></span></a>
                        <a href="https://github.com/Juan-Jose-Horisberger/Countries_Project">Repositorio<span className="ps-1"><BsGithub size={"20px"} color="white" /></span> </a>
                    </div>
                </div>

                <div className={`${styles.container_Proyect3}`}>
                    <div className={`${styles.container_Gaed}`}>
                        <h1 className={`p-0 border-0 d-flex ${styles.h1_Countries}`}> <MdFoodBank size={"70px"} /> <p className={`${styles.pFoodly}`}>FOODLY</p></h1>
                    </div>

                    <div className={`${styles.container_info}`}>
                        <h4>App "FOODLY"</h4>
                        <div>
                            <p>Front-End</p>
                            <p>Back-End</p>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>CSS3</p>
                            <p>Bootstrap</p>
                            <p>Responsive Web Desing</p>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>Sequelize</p>
                        </div>
                    </div>

                    <div className={`${styles.info_Proyect}`}>
                        <p className="m-0">Es una Single Page Application donde se muestra información con respecto a diferente tipos de recetas, para obtener dicha información se utilizo una API externa llamada (Spoonacular API). Con la opción de ver el detalle de una receta X, la posibilidad de filtrar en simultaneo dependiendo la necesidad del cliente, y también tenemos la opción de crear recetas.</p>
                    </div>
                    <div className={`${styles.containerButtons_Proyect}`}>
                        <a href="https://gaed-jm-dusky.vercel.app/LandingPage">Ir al sitio <span className="ps-1"><BsFillEyeFill size={"20px"} color="white" /></span></a>
                        <a href="https://github.com/Juan-Jose-Horisberger/Proyecto-final-front">Repositorio <span className="ps-1"><BsGithub size={"20px"} color="white" /></span> </a>
                    </div>
                </div>
            </div>

            <div className={`${styles.container_technologies}`}>
                <div className={`${styles.containerAll_technologies}`}>
                    <Element name="tecnologias">
                        <div className={`${styles.containerTitle}`}>
                            <h3>Tecnologías</h3>
                            <p>Estos son los lenguages y librerías que he estado aprendiendo e implementando en mis proyectos</p>
                        </div>
                        <div className={`${styles.containerImg_technologies}`}>
                            <div>
                                <img src={imgHtml} alt="" className="img-fluid" />
                                <p>HTML5</p>
                            </div>
                            <div>
                                <img src={imgCss} alt="" className="img-fluid" />
                                <p>CSS3</p>
                            </div>
                            <div>
                                <img src={imgBootstrap} alt="" className="img-fluid" />
                                <p>Bootstrap</p>
                            </div>
                            <div>
                                <img src={imgJavascript} alt="" className="img-fluid" />
                                <p>Javascript</p>
                            </div>
                            <div>
                                <img src={imgReact} alt="" className="img-fluid" />
                                <p>React.js</p>
                            </div>
                            <div>
                                <img src={imgRedux} alt="" className="img-fluid" />
                                <p>Redux</p>
                            </div>
                            <div>
                                <img src={imgNodeJs} alt="" className="img-fluid" />
                                <p>Node.js</p>
                            </div>
                            <div>
                                <img src={imgExpress} alt="" className="img-fluid" />
                                <p>Express.js</p>
                            </div>
                            <div>
                                <img src={imgSequelize} alt="" className="img-fluid" style={{ padding: "5px" }} />
                                <p>Sequelize</p>
                            </div>
                            <div>
                                <img src={imgPosgres} alt="" className="img-fluid" />
                                <p>PostgreSQL</p>
                            </div>
                            <div>
                                <img src={imgPostman} alt="" className="img-fluid" />
                                <p>Postman</p>
                            </div>
                            <div>
                                <img src={imgGit} alt="" className="img-fluid" />
                                <p>Git</p>
                            </div>
                            <div>
                                <img src={imgHeroku} alt="" className="img-fluid" />
                                <p>Heroku</p>
                            </div>
                            <div>
                                <SiVercel color="white" size={"70px"} />
                                <p>Vercel</p>
                            </div>
                            <div>
                                <img src={imgScrum} alt="" className="img-fluid" />
                                <p>Scrum</p>
                            </div>
                        </div>
                    </Element>
                </div>
            </div>

            <Element name="contacto">
                <div className={`${styles.container_Form}`}>
                    <div className={`${styles.containerTitle_Contact}`}>
                        <h3>Contactame</h3>
                        <p>No dude en ponerse en contacto conmigo en cualquier momento, a través de cualquier método a continuación.</p>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className={`${styles.container_Inputs}`}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" name="user_name" value={input.user_name} required autoComplete="off" onChange={(e) => handleOnChange(e)} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="Email" name="user_email" value={input.user_email} required autoComplete="off" onChange={(e) => handleOnChange(e)} />
                            </div>
                            <div>
                                <label>Mensaje</label>
                                {/* <input type="text" name="name" required autoComplete="off" /> */}
                                <textarea name="user_message" id="" cols="30" rows="10" value={input.user_message} required onChange={(e) => handleOnChange(e)} ></textarea>
                            </div>
                            <button type="submit">Enviar</button>
                        </div>
                        <div className={`${styles.containerIcons_Contact}`}>
                            <a href="mailto:juanjhorisberger@gmail.com?Subject=Propuesta%20laboral">
                                <AiOutlineMail size="50px" color="white" />
                            </a>
                            <a href="https://wa.me/+5491123149857">
                                <BsWhatsapp size="50px" color="white" />
                            </a>
                            <a href="https://www.linkedin.com/in/juan-jose-horisberger/">
                                <BsLinkedin size="50px" color="white" />
                            </a>
                            <a href="https://github.com/Juan-Jose-Horisberger">
                                <AiOutlineGithub size="50px" color="white" />
                            </a>
                        </div>

                    </form>
                </div>
            </Element>
        </div >
    )
}