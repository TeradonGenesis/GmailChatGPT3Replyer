import { useState } from "react";
//import useFetchLastEmail from "../hooks/useFetchLastEmail"
import generateResponse from '../services/SendPrompt';

const TriggerButton = () => {

    const prevEmailClass = 'ii';
    const composeBoxClass = '.editable';
    const [errorMsg, setError] = useState('');

    function getLastEmailContent(){
        var list= document.getElementsByClassName(prevEmailClass);
        var msg = [];
        for (var i = 0; i < list.length; i++) {
            if(list[i].innerText){
                msg.push(list[i].innerText);
            }
        }
        if(msg.length > 0){
            return msg[msg.length-1];
        }else{
            return '';
        }
    }

    function setResponse(emailClass, msg){
        var composeBox = document.querySelector(emailClass);
        composeBox.innerHTML = msg;
    }

    function sendPrompt(){
        var lastEmailResponse = getLastEmailContent();
        if(lastEmailResponse){
            generateResponse(`Generate a response to this email reply ${lastEmailResponse}`)
            .then(
                (res) => {
                    if(res){
                        setResponse(composeBoxClass, res);
                    }
                }
            
            )
            .catch((err) => {
                setError(err);
            });
        }else{
            setError('Failed to find the content');
        }

        if(errorMsg){
            console.error(errorMsg);
        }
    };

    return (
        <button onClick={sendPrompt}>Click here to generate a response</button>
    );
}

export default TriggerButton;