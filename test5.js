var alarmHour = -1;
var alarmMinute = -1;

var MyExtension = function () {
};

MyExtension.prototype.setAlarmMidday = function(args) {
    if(args.MIDDAY === "midday") {
        alarmMinute = 0;
        alarmHour = 12;
    }
    else {
        alarmMinute = 0;
        alarmHour = 0;
    }
};

MyExtension.prototype.getAlarm = function() {
    return alarmHour + ":" + alarmMinute;
};

MyExtension.prototype.getInfo = function () {
    return {
        id: "alarm",
        name: "Alarm Extension",
        
        blocks: [
            {
                opcode: "setAlarmMidday",
                text: "set alarm to [MIDDAY]",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "middayMidnight"
                }
            },
            {
                opcode: "getAlarm",
                text: "get alarm",
                blockType: Scratch.BlockType.REPORTER,
                arguments: {}
            }
        ],
        
        menus: {
            middayMidnight: ["midday", "midnight"]
        }
    };
};

Scratch.extensions.register(new MyExtension());
