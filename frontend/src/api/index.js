const socket = new WebSocket('ws://localhost:9000/ws')

function connect  (cb) {
    console.log("connecting")

    socket.onopen = () => {
        console.log('Successfully connected')
    }

    socket.onmessage = (msg) => {
        console.log("Message from websocket:",msg)
    }

    socket.onclose = (event) => {
        console.log("socket closed connection:",event);
    }

    socket.onerror = (error) => {
        console.log("socket error",error);
        
    }

}

function sendMsg (msg) {
    console.log('sending msg:',msg);
    socket.send(msg)
    
}

export {connect,sendMsg};