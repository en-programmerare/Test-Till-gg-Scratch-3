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

MyExtension.prototype.getAlarm = function(args) {
    if(alarmHour === -1)
        return "Alarm is off";
    else {
        if(args.TYPE === "time") {
            return alarmHour + ":" + alarmMinute;
        }
        if(args.TYPE === "hour") {
            return alarmHour;
        }
        return alarmMinute;
    }
};

MyExtension.prototype.getAlarmOn = function(args) {
    if(alarmHour === -1)
        return false;
    return true;
};

MyExtension.prototype.turnOff = function(args) {
    alarmHour = -1;
    alarmMinute = -1;
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
                    MIDDAY: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "midday",
                        menu: "middayMidnight"
                    }
                }
            },
            {
                opcode: "getAlarm",
                text: "get alarm [TYPE]",
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                    TYPE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "time",
                        menu: "alarmFetchType"
                    }
                }
            },
            {
                opcode: "getAlarmOn",
                text: "alarm on?",
                blockType: Scratch.BlockType.BOOLEAN,
                arguments: {}
            },
            {
                opcode: "turnOff",
                text: "turn alarm off",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {}
            }
        ],
        
        menus: {
            middayMidnight: ["midday", "midnight"],
            alarmFetchType: ["time", "hour", "minute"]
        }
    };
};

Scratch.extensions.register(new MyExtension());
