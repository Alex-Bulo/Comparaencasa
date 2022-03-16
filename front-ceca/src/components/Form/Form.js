import './Form.css'


function Form({changeHandler,userChoice,submitHandler, result, loading}) {


    return(           
            <form  className='Form' onSubmit={submitHandler}>
                
                <h2 className='formTitle'> Type in car plate to get the car brand and model</h2>
                
                <div className='inputsContainer'>
                    <input className="inputSearch" value={userChoice} onChange={changeHandler}/>
                    <button className="submitBtn" onClick={submitHandler}>Search</button>
                </div>
                
                {loading && <p className='resultMsg'>Loading...</p>}
                {!loading && result && <p className='resultMsg'>
                                            {!result.error ? <i className="fa-solid fa-car resultIcn"></i>:<i className="fa-solid fa-car-crash resultIcn"></i> }
                                            {result.carName}
                                        </p> }

            </form>

    )
}

export default Form