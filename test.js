class Jag() {
  getInfo() {
    return {
      id: "jag",
      name: "Jag - mitt tillägg",
      "blocks": [
        {
          opcode: "tiopot",
          blockType: BlockType.REPORTER,
          text: "[BAS] * 10 ^ [EXPONENT]",
          arguments: [
            BAS: {
              type: ArgumentType.NUMBER,
              defaultValue: '1'
              },
              EXPONENT: {
                type: ArgumentType.NUMBER,
                defaultValue: '2'
            }
          ]
        }
      ]
    }
  }
  tiopot(bas, exp) {
    return (bas * 10) ** exp;
  }
}
