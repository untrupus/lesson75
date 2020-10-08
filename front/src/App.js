import React, {useState, useEffect} from 'react';
import {encodeMessage, decodeMessage} from "./store/actionTypes";
import {useSelector, useDispatch} from "react-redux";
import './App.css';

function App() {
    const [value, setValue] = useState({
       decode: '',
       encode: '',
       password: ''
    });

    const encMessage = useSelector(state => state.encode);
    const decMessage = useSelector(state => state.decode);
    const dispatch = useDispatch();

    const decodeHandler = () => {
        if (value.decode !== '' && value.password !== '') {
            dispatch(decodeMessage({"password": value.password, "message": value.decode}));
        } else {
            alert('Fill in all fields');
        }
    };
    useEffect(() => {
        setValue(prevState => ({
            ...prevState,
            decode: '',
            password: '',
            encode: decMessage.decoded
        }));
    }, [decMessage])

    const encodeHandler = () => {
        if (value.password !== '' && value.encode !== '') {
            dispatch(encodeMessage({"password": value.password, "message": value.encode}));
        } else {
            alert('Fill in all fields');
        }
    };

    useEffect(() => {
        setValue(prevState => ({
            ...prevState,
            decode: encMessage.encoded,
            password: '',
            encode: ''
        }));
    }, [encMessage]);

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="App">
            <p className="inputDescription">Decoded message:
                <input
                    placeholder="enter your message"
                    name="decode"
                    className="field"
                    value={value.decode}
                    onChange={onChangeHandler}
                /></p>
            <p className="inputDescription">Password:
                <input
                    placeholder="password"
                    name="password"
                    className="field"
                    value={value.password}
                    onChange={onChangeHandler}
                />
                <button type="button"
                        className="btn"
                        onClick={decodeHandler}
                >&darr;</button>
                <button type="button"
                        className="btn"
                        onClick={encodeHandler}
                >&uarr;</button>
            </p>

            <p className="inputDescription">Encoded message:
                <input
                    placeholder="enter your message"
                    name="encode"
                    className="field"
                    value={value.encode}
                    onChange={onChangeHandler}
                /></p>
        </div>
    );
}

export default App;
