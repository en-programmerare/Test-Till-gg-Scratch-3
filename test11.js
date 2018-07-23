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
        if(args.MIDDAY === "midningt") {
        alarmMinute = 0;
        alarmHour = 0;
        }
        else {
            var time = new Date();
            alarmMinute = time.getMinutes();
            alarmHour = time.getHours();
        }
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

MyExtension.prototype.alarmEvent = function(args) {
    var now = new Date();
    if(now.getHours() == alarmHour && now.getMinutes() == alarmMinute) {
        return true;
    }
    return false;
};

MyExtension.prototype.setAlarmTime = function(args) {
    alarmMinute = args.M;
    alarmHour = args.H;
};

MyExtension.prototype.getInfo = function () {
    return {
        id: "alarm",
        name: "Alarm",
        
        blocks: [
            {
                opcode: "setAlarmMidday",
                text: "set alarm to [MIDDAY]",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    MIDDAY: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "now",
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
            },
            {
                opcode: "alarmEvent",
                text: "when alarm goes off",
                blockType: Scratch.BlockType.HAT,
                arguments: {}
            },
            {
                opcode: "setAlarmTime",
                text: "set alarm to [H]:[M]",
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    H: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 12,
                    },
                    M: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    }
                }
            },
        ],
        
        menus: {
            middayMidnight: ["midday", "midnight", "now"],
            alarmFetchType: ["time", "hour", "minute"]
        }
    };
};

Scratch.extensions.register(new MyExtension());
