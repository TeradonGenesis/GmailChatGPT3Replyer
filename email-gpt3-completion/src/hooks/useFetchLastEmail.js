function useFetchLastEmail(emailClass){
    var list= document.getElementsByClassName(emailClass);
    console.log(list.length);
    var msg = [];
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].innerText);
        if(list[i].innerText){
            msg.push(list[i].innerText);
        }
    }
    console.log(msg);
    if(msg.length > 0){
        return msg[msg.length-1];
    }else{
        return '';
    }
}

export default useFetchLastEmail;