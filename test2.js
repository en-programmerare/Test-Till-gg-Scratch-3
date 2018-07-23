var alarmHour = -1;
var alarmMinute = -1;

var MyExtension = function () {
};

MyExtension.prototype.setAlarmMidday = function() {
    alarmMinute = 0;
    alarmHour = 12;
};

MyExtension.prototype.setAlarmMidnight = function() {
    alarmMinute = 0;
    alarmHour = 0;
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
                text: "set alarm to midday",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {}
            },
            {
                opcode: "setAlarmMidnight",
                text: "set alarm to midnight",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {}
            },
            {
                opcode: "getAlarm",
                text: "get alarm",
                blockType: Scratch.BlockType.REPORTER,
                arguments: {}
            }
        ]
    };
};

Scratch.extensions.register(new MyExtension());
