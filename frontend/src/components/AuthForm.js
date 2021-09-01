import styles from './AuthForm.module.css';
import {useRef, useContext, useState} from 'react';
import {AuthContext} from '../store/authcontext';
import Button from '@material-ui/core/Button';

function AuthForm(){
    const keyRef = useRef();

    const [invalidToken, setInvalidToken] = useState(false)

    const AuthCtx = useContext(AuthContext);
    console.log(AuthCtx);

    const valueChangeHandler = () => {
        setInvalidToken(false);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const enteredKey = keyRef.current.value;
        fetch(process.env.REACT_APP_BACKEND_URL +'/access-key', {
            method:'POST', 
            body:JSON.stringify({access_key:enteredKey}),
            headers:{'Content-Type':'application/json'}
        })
        .then(res => {
            if(res.ok){
                console.log('res ok');
                res.json().then(data => {
                    console.log(data);
                    if(data.token){
                        localStorage.setItem('token', data.token)
                        AuthCtx.setlogin(true);
                    }
                    else{
                        setInvalidToken(true);
                    }
                });
            }
            else{
                console.log('res not ok');
            }
        })
        .catch(err => {
            throw new Error(err);
        })
    }

    return (
        <>
        <form className = {styles.container}>
            <div>
                <label htmlFor='key' style={{fontWeight:'600'}}>Enter the Access-Key:</label>
                <input type='password' ref={keyRef} style={{padding:'6px', borderRadius:'3px'}} onChange = {valueChangeHandler}/>
            </div>
            <div>
                <Button onClick = {formSubmitHandler} variant='contained' color='primary' style={{marginTop:'40px'}}>Enter</Button>
            </div>
        </form>
        {invalidToken && <h4 style={{textAlign:'center'}}>Invalid Token</h4>}
        </>
    )
};

export default AuthForm;