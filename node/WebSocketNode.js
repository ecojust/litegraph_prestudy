function WebSocketNode() {
    const defaultURL = "ws://127.0.0.1:3000";
    this.addOutput("Data", "object");
    this.addOutput("Data-format", "object");
    this.addProperty("URL", defaultURL);

    this.widget = this.addWidget("text", "URL", defaultURL, "URL");
    this.widgets_up = false;
    this.size = [220, 92];
    this.connected = false;
    this.triggered = true;

    // this.color = "#36f";
    this.title = "WebSocket #";
    this.desc = "create a websocket instance";

    this.socket = null
}



WebSocketNode.prototype.onExecute = function (param, options) {
    const vm = this;
    if (this.properties.URL && !this.connected) {
        this.connected = true
        this.socket = new WebSocket(this.properties.URL);
        this.socket.onopen = function () {
            console.log('WebSocket连接已建立');
        };
        this.socket.onmessage = function (event) {
            vm.setOutputData(0, event.data);
            vm.setOutputData(1, event.data + '-format1231231231231');

            vm.triggerSlot(0, param, null, options);
            vm.triggerSlot(1, param, null, options);

            vm.triggered = true
            vm.trigger("onDrawBackground");
        };
        this.socket.onclose = () => {
            vm.connected = false
            vm.socket = null;
        }
    }
};

WebSocketNode.prototype.onDrawBackground = function (ctx) {
    this.boxcolor = this.triggered
        ? "#0F0"
        : "#222";
    this.triggered = false;
};


// SocketNode.prototype.getTitle = function () {
//     if (this.flags.collapsed) {
//         return this.properties.value;
//     }
//     return this.title;
// };

// SocketNode.prototype.setValue = function (v) {
//     console.log('set value')
//     this.setProperty("URL", v);
// }




export default WebSocketNode;