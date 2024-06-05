import React from 'react'
import logo from './img/logo.png'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Label
  } from 'reactstrap'

function Login() {
  return (
    <div>
<div className='container-fluid' id='cf'>
          <div className='row' id='r'>
            {/* for right side */}
            <div className='col-md-5' id='right'>
              <img src={logo} className='img-fluid' id='cglogo'></img>
              {/* <form id="formmaina" className="contact_form" role="form" method="post" onsubmit="return Submitt();"> */}
              <form
                id='formmain'
                className='contact_form'
                autoComplete='off'
                // action=""
                // onSubmit={this.handleSubmit}
                // method="post"
                //  action="http://localhost:3000/products/loginreact/"
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={logo}
                    className='img-fluid'
                    id='vendorimage'
                  ></img>
                  <br />
                </div>
                <marquee>
                  <label
                    id='label'
                    style={{
                      fontSize: '20px',
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#000000',
                      marginBottom: '20px'
                    }}
                  >
                    Welcome To{' '}
                    <span style={{ color: '#ff5c5c', paddingLeft: '7px' }}>
                      {' '}
                      CaTv Digital Platform
                    </span>
                  </label>
                </marquee>

                <div
                  className='group'
                  style={{
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <FormGroup>
                    <Input
                      type='text'
                      placeholder='Username'
                      name='id'
                      id='id'
                      autoComplete='off'
                    //   value={this.state.username}
                      // onChange={this.myChangeHandlervalue}
                    ></Input>
                  </FormGroup>
                </div>
                <br></br>

                <div
                  className='group'
                  style={{
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <FormGroup>
                    <Input
                      type='password'
                      placeholder='Password'
                      name='pass'
                      id='pass'
                      // autoComplete="off"
                      autoComplete='false'
                    //   value={this.state.password}
                      // onChange={this.myChangeHandlerpassword}
                    ></Input>
                  </FormGroup>
                </div>
                <div
                  className='group'
                  id='remember_me_group'
                  style={{
                    marginTop: '5px',
                    display: 'none',
                    justifyContent: 'center',
                    left: '0',
                    right: '0',
                    textAlign: 'center'
                  }}
                >
                  <FormGroup check>
                    <Label id='label_remember_me' check>
                      <Input
                        id='remember_me'
                        name='remember_me'
                        type='checkbox'
                      />{' '}
                      Remember Me
                    </Label>
                  </FormGroup>
                </div>
                {/* <h1>Hello {this.state.value}</h1> */}
                <div
                  style={{
                    marginTop: '20px',
                    left: '0',
                    right: '0',
                    textAlign: 'center',
                    display: 'none',
                    justifyContent: 'center'
                  }}
                >
                  <strike
                    style={{
                      color: 'black',
                      fontFamily: 'sans-serif',
                      fontWeight: '600',
                      marginTop: '0px'
                    }}
                  >
                    <p
                      style={{
                        fontSize: '15px',
                        fontWeight: 'bold'
                      }}
                      id='captcha'
                    >
                      C A T V
                    </p>
                  </strike>
                  <i
                    id='captchaicon'
                    className='fa fa-refresh fa-2x'
                    aria-hidden='true'
                    style={{
                      marginLeft: '15px',
                      color: '#2c2c2c',
                      fontSize: '20px'
                    }}
                    // onClick={() => this.Captcha()}
                  ></i>
                </div>
                <div
                  className='group'
                  style={{
                    left: '0',
                    right: '0',
                    display: 'none',
                    justifyContent: 'center'
                  }}
                >
                  <i
                    className='fa fa-arrow-right fa-2x'
                    aria-hidden='true'
                    style={{
                      left: '0',
                      right: '0',
                      color: '#2c2c2c',
                      fontSize: '20px'
                    }}
                  ></i>
                  <input
                    type='text'
                    placeholder='Enter Captcha'
                    name='incaptcha'
                    id='incaptcha'
                    autoComplete='off'
                    // onChange={this.myChangeHandlercaptcha}
                  />
                </div>
                {/* <h1>Hello {this.state.captcha}</h1> */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type='submit'
                    // id="loginbutton"
                    // value="button"
                    className='btn'
                    // color="secondary"
                    style={{
                      marginTop: '20px',
                      width: '200px',
                      left: '0',
                      right: '0',
                      textAlign: 'center',
                      backgroundColor: '#F47216'
                    }}
                    // onClick={() =>this.loginrequest()}
                  >
                    SIGN IN
                  </Button>
                </div>
                <div
                  className='bottom'
                  id='bottom'
                  style={{ textAlign: 'center' }}
                >
                  <p id='copyrights'>
                    <a
                      href='https://www.cableguy.in'
                      target='_blank'
                      style={{
                        fontFamily:
                          'Montserrat,Helvetica Neue,Arial, sans-serif'
                      }}
                    >
                      {/* Copyrights © {new Date().getFullYear()} CableGuy CATV | All Rights Reserved. */}
                      © 2023 CaTv Digital Platform | All Rights Reserved.
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Login
