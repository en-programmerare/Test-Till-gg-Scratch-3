var MyExtension = function () {
};
MyExtension.prototype.testblock = function() {
    alert("it's working");
};

MyExtension.prototype.getInfo = function () {
    return {
        id: "test",
        name: "My test addon",
        
        blocks: [
            test: {
                opcode: "testblock",
                text: "Do something",
                blockType: BlockType.COMMAND,
                arguments: {}
            }
        ]
    };
};

Scratch.extensions.register(new MyExtension());
