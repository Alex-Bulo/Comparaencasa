import './LogIn.css'

function LogIn({data, submitHandler, changeHandler, loading, errors}) {

    return(            
            <form  className='Form' onSubmit={submitHandler}>
                
                <h2 className='formTitle'> Log in to your account</h2>
                
                <div className='inputsContainer'>
                    <label className='logInLabel'>

                        <h4 className='lblTitle'>Email</h4>
                        <input id='mailInput' className="inputSearch" name='mail' type='text' value={data.mail} onChange={changeHandler}/>

                    </label>

                    <label className='logInLabel'>
                        
                        <h4 className='lblTitle'>Password</h4>
                        <input id='passInput' className="inputSearch" name='pass' type='password' value={data.pass} onChange={changeHandler}/>

                    </label>

                </div>
                    <button id='loginBtn' className="submitBtn" onClick={submitHandler}>LogIn</button>
                
                 {loading && <p className='resultMsg'>Loading...</p>}
                {errors && <ul className='resultMsg' style={{background:'#000'}}>

                                    {errors.mail && <li><i className="fa-solid fa-car-crash resultIcn"></i> {errors.mail.msg}</li>}
                                    {errors.pass && <li><i className="fa-solid fa-car-crash resultIcn"></i> {errors.pass.msg}</li>}
                                            
                                </ul> }

            </form>

    )
}

export default LogIn