var MyExtension = function () {
};
MyExtension.prototype.testblock = function() {
    window.alert("it's working");
};

MyExtension.prototype.getInfo = function () {
    return {
        id: "test",
        name: "My test addon",
        
        blocks: [
            {
                opcode: "testblock",
                text: "Do something",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {}
            }
        ]
    };
};

Scratch.extensions.register(new MyExtension());
