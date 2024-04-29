function HTMLElementNode() {
    const defaultID = "#mynode";
    this.addInput("Data", "object");
    this.addOutput("Data-format", "object");
    this.addOutput("Data-format2", "object");
    this.addProperty("ID", defaultID);

    this.widget = this.addWidget("text", "ID", defaultID, "ID");
    this.widgets_up = false;
    this.size = [220, 92];
    this.connected = false;
    this.triggered = true;


    // this.color = "#36f";
    this.title = "HTMLElement #";
    this.desc = "create a websocket instance";
}



HTMLElementNode.prototype.onExecute = function () {
    const vm = this;
    // if (this.properties.URL && !this.connected) {
    //     this.connected = true
    //     var socket = new WebSocket(this.properties.URL);
    //     socket.onopen = function () {
    //         console.log('WebSocket连接已建立');
    //     };
    //     socket.onmessage = function (event) {
    //         vm.setOutputData(0, event.data);
    //         vm.setOutputData(1, event.data + '-format1231231231231');
    //         vm.triggered = true
    //         vm.trigger("onDrawBackground");
    //     };
    //     socket.onclose = () => {
    //         vm.connected = false
    //     }
    // }
};

HTMLElementNode.prototype.onDrawBackground = function (ctx) {
    this.boxcolor = this.triggered
        ? "#0F0"
        : "#222";
    this.triggered = false;
};






export default HTMLElementNode;
