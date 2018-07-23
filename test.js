var MyExtension = function () {
    
};
MyExtension.prototype.getInfo = function () {
    return {
        id: "test",
        name: "My test addon"
    };
};

Scratch.extensions.register(new MyExtension());