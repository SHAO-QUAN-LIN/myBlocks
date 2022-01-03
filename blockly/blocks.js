Blockly.Blocks['drone_take_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("無人機")
          .appendField(new Blockly.FieldDropdown([["起飛","ITEM1"], ["降落","ITEM2"]]), "dropdown");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }

Blockly.Blocks['drone_unlock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("無人機解鎖");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_locked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("無人機上鎖");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
