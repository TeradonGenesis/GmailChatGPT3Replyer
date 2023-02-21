function useInsertReply(emailClass, msg){
    var composeBox = document.querySelector(emailClass); // Select the compose box element
    composeBox.innerHTML = msg;
}

export default useInsertReply;