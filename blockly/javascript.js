Blockly.JavaScript['webserial_get_serialport'] = function(block) {
  var value_status = block.getFieldValue('status_');   
  var value_select = block.getFieldValue('select_');
  var code = 'webserial_get_port("'+value_status+'","'+value_select+'");\n';
  return code;
};

Blockly.JavaScript['webserial_serialport'] = function(block) {
    var value_status = block.getFieldValue('status');   
    var code = 'webserial_port("'+value_status+'");\n';
  return code;
};

Blockly.JavaScript['webserial_open'] = function(block) {
    var hidden_dropdown = document.getElementById('demo-select').style.display = "none";  
    var code = 'webserial_port("open");\n'+
               'document.getElementById("demo-area-01-show").innerHTML = "等待連線...";\n'+
               '"dropdown_box：'+ hidden_dropdown +'";\n';
  return code;
};

Blockly.JavaScript['webserial_close'] = function(block) {
    var code = 'webserial_port("close");\n';
  return code;
};

Blockly.JavaScript['webserial_status'] = function(block) {
  //  var code = 'JSON.stringify(webserial_status())';
  var test = 'var test = {"name":"John", "birth":"1986-12-14", "city":"New York"};\n';
  var obj = 'var obj = JSON.parse(test);\n';
  var code = test + obj +'console.log(obj.name)';
 // var code = 'console.log(JSON.stringify('+ test +'))';
//     const myJSON = JSON.stringify(webserial_status());
  return code;
};

Blockly.JavaScript['robofly_unlock_command'] = function(block) {
    var value_lock_status = block.getFieldValue('lock_status');
    var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_lock_status == "unlock")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4");\n'+
               'await delay('+ value_time +');\n';
    else if(value_lock_status == "lock")
      var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8");\n'+
               'await delay('+ value_time +');\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['robofly_up_and_down'] = function(block) {
  var value_status = block.getFieldValue('throttle_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "take_off")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xdc,0x05,0x14,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0x10");\n'+ //1300
               'await delay('+ value_time +');\n';
  else if(value_status == "landing")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xea");\n'+ //1000
               'await delay('+ value_time +');\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['drone_turn_left'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_turn_right'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['robofly_go_straight'] = function(block) {
  var value_status = block.getFieldValue('direction_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "straight")
    var code = 'send_data("0x24,0x4d,0x3d,0x10,0xc8,0xdc,0x05,0xa4,0x06,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xa3");\n'+ //1700(1500t)
               'await delay('+ value_time +');\n';
  else if(value_status == "back")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xea");\n'+ //1000
               'await delay('+ value_time +');\n';
  return code;
};

Blockly.JavaScript['drone_land'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};
