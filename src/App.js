import React, {Component} from 'react';
import './App.css';
import image1 from './images/proba.png'
import image2 from './images/phone2.png'

import image3 from './images/simple.png'
import image4 from './images/more.png'
import image5 from './images/do_it_free.png'
import image6 from './images/we_love.png'
import image7 from './images/recyc.png'
import image8 from './images/coffe.png'
import image9 from './images/doc.png'
import image10 from './images/disc.png'
import image11 from './images/heart.png'
import image12 from './images/copy.png'
import Navbar from './navBar'
// import MainContainer from "./mainContainer.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return <div className='pl-3'> {/*container-fluid*/}

            <Navbar/>

            <div className='bg-dark d-flex justify-content-center pt-5 container-fluid'
                 style={{width: '1920px'}}> {/*bez fluid*/}
                <div className='row bg-dark d-flex justify-content-between container pl-0 pr-0'
                     style={{width: '1110px'}}>{/*bez container wgl pl-0 pr-0*/}
                    <div className='col   pl-1'>
                        <img src={image1} alt='logo'/>
                    </div>
                    <div
                        className='col-6  pl-0 d-flex justify-content-end align-items-center'>
                        <nav className='navbar navbar-expand-lg navbar-dark'>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><span className='text-white pl-4 ml-1 '>Home</span></li>
                                    <li className="nav-item"><span className='text-white pl-4 ml-1'>About us</span></li>
                                    <li className="nav-item"><span className='text-white pl-4 ml-1'>Features</span></li>
                                    <li className="nav-item"><span className='text-white pl-4 ml-1'>Blog</span></li>
                                    <li className="nav-item"><span className='text-white pl-4 ml-1'>Portfolio</span>
                                    </li>
                                    <li className="nav-item"><span className='text-white pl-4 ml-1'>Contact us</span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <section className='bg-dark d-flex justify-content-center pt-5 container-fluid'
                     style={{width: '1920px'}}>
                <div className='row bg-dark d-flex justify-content-between parent container pl-0 pr-0'
                     style={{width: '1110px'}}>
                    <div className='col-8 bg-dark pb-1'>
                        <div className='row  '>
                            <div className='col-12   text-white simple pl-0 mt-5 pt-4 pb-1'>
                                <img src={image3} alt='simple'/>
                            </div>
                            <div className='col-12   text-white mt-4'>
                                <img src={image4} alt="more"/>
                            </div>
                            <div className='col-12   text-white pl-1 mt-5 pb-1'>
                                <img src={image5} alt="do it"/>
                            </div>
                            <div className='col-9   text-white pl-1 mt-4 pt-1 mb-5 pb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eget consequat
                                est. Aliquam ac nunc mauris.
                            </div>
                            <div className='col-12   text-white simple pl-0 mt-3 pt-1'></div>
                        </div>

                    </div>
                    {/*<div className='  phone'>*/}
                    {/*<img src={image2} alt="phone"/>*/}
                    {/*</div>*/}
                </div>
            </section>
            <section className='bg-white container-fluid d-flex flex-column justify-content-center pt-5'
                     style={{width: '1920px'}}>
                <div className='container mb-1' style={{width: '1110px'}}>
                    <div className='row d-flex justify-content-between '>
                        <div className=' bg-white col-12   pl-0 mt-4 pt-3'>
                            <img src={image6} alt="we love"/>
                        </div>
                        <div className='col-12   mt-2 pl-0'>
                            <span>Be sure that we know to do a lot</span>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 pt-1' style={{width: '1110px'}}>
                    <div className='row d-flex justify-content-between ' style={{height: '23rem'}}>
                        <div className='col-lg-4 col-md-6 pt-1 pl-0 d-flex flex-row '>
                            <div className='bg-danger d-flex justify-content-center align-items-center mr-3 mb-4 '
                                 style={{width: '12rem'}}>
                                <img src={image7} alt=""/></div>
                            <div className='d-flex flex-column pl-3 pt-3'>
                                    <span
                                        className='font-weight-bold text-uppercase mt-1 pt-3 mb-2 '>Refreshing design</span>
                                <span className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit est ist.</span>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 pt-1  pl-0 d-flex flex-row mb-4 '>
                            <div className='bg-danger d-flex justify-content-center align-items-center mr-3'
                                 style={{width: '12rem'}}>
                                <img src={image8} alt=""/></div>
                            <div className='d-flex flex-column pl-3 pt-3'>
                                <span className='font-weight-bold text-uppercase mt-1 pt-3 mb-2'>Stay awake</span>
                                <span className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit est ist.</span>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 pt-1  pl-0 d-flex flex-row mb-4'>
                            <div className='bg-danger d-flex justify-content-center align-items-center mr-3'
                                 style={{width: '12rem'}}>
                                <img src={image9} alt=""/></div>
                            <div className='d-flex flex-column pl-3 pt-3'>
                                    <span
                                        className='font-weight-bold text-uppercase mt-1 pt-3 mb-2'>Code with love</span>
                                <span className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit est ist.</span>
                            </div>

                        </div>


                        <div className='col-lg-4 col-md-6 pt-1  pl-0 d-flex flex-row mt-4'>
                            <div className='bg-danger d-flex justify-content-center align-items-center mr-3'
                                 style={{width: '12rem'}}>
                                <img src={image10} alt=""/></div>
                            <div className='d-flex flex-column pl-3 pt-3'>
                                    <span
                                        className='font-weight-bold text-uppercase mt-1 pt-3 mb-2'>Refreshing design</span>
                                <span className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit est ist.</span>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 pt-1  pl-0 d-flex flex-row mt-4'>
                            <div className='bg-danger d-flex justify-content-center align-items-center mr-3'
                                 style={{width: '12rem'}}>
                                <img src={image11} alt=""/></div>
                            <div className='d-flex flex-column pl-3 pt-3'>
                                <span className='font-weight-bold text-uppercase mt-1 pt-3 mb-2'>Stay awake</span>
                                <span className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit est ist.</span>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 pt-1 pl-0 d-flex flex-row mt-4'>
                            <div className='bg-danger d-flex justify-content-center align-items-center mr-3'
                                 style={{width: '12rem'}}>
                                <img src={image12} alt=""/></div>
                            <div className='d-flex flex-column pl-3 pt-3'>
                                    <span
                                        className='font-weight-bold text-uppercase mt-1 pt-3 mb-2'>Code with love</span>
                                <span className='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit est ist.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>;
    }
}

export default App;
