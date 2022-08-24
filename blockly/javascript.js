Blockly.JavaScript['webserial_open'] = function(block) {
    var hidden_dropdown = document.getElementById('demo-select').style.display = "none";  
    var code = 'webserial_port("open");\n'+
               'document.getElementById("demo-area-01-show").innerHTML = "等待連線...";\n'+
//               'document.getElementById("demo-select").style.display = "none";\n';
               '"dropdown_box：'+ hidden_dropdown +'";\n';
  return code;
};

Blockly.JavaScript['webserial_close'] = function(block) {
    var code = 'webserial_port("close");\n';
  return code;
};

Blockly.JavaScript['robofly_height'] = function(block) {
  var value_status = block.getFieldValue('move_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  var code ='var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
  return code;
};

Blockly.JavaScript['robofly_unlock_command'] = function(block) {
    var value_lock_status = block.getFieldValue('lock_status');
    var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_lock_status == "unlock")
      var code = '//unlock command\n'+
                  'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x07,0xe8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE4");\n'+
//                'await delay_time('+ value_time +');\n'+
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
    else if(value_lock_status == "lock")
      var code = '//lock command\n'+
                  'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xe8,0x03,0xe8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
//                'await delay_time('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['robofly_connect'] = function(block) {
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                'await delay(1);\n';
  return code;
};

Blockly.JavaScript['robofly_up_and_down'] = function(block) {
  var value_status = block.getFieldValue('throttle_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "take_off")
    var code = '//RoboFly take off command\n'+
                'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+ //1600
//                 'await delay('+ value_time +');\n';
                'var time = '+ value_time +';\n'+
                'while(time >= 0)\n'+
                '	{\n'+
                    '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                    '		await delay(1);\n'+
                    '		time = time - 1;\n'+
                '	}\n';
  else if(value_status == "shut_down")
    var code = '//RoboFly shut down command\n'+
                'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xEA");\n'+ //1000
//                 'await delay('+ value_time +');\n';
                'var time = '+ value_time +';\n'+
                'while(time >= 0)\n'+
                '	{\n'+
                    '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xEA");\n'+
                    '		await delay(1);\n'+
                    '		time = time - 1;\n'+
                '	}\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['robofly_go_straight'] = function(block) {
  var value_status = block.getFieldValue('direction_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "straight")
    var code = '//RoboFly go straight command\n'+
                'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0x08,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x5B");\n'+ //1800(1500t)
//                 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xA4,0x06,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xA3");\n'+ //1700(1500t)
//                 'await delay('+ value_time +');\n';
                'var time = '+ value_time +';\n'+
                'while(time >= 0)\n'+
                '	{\n'+
                    '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0x08,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x5B");\n'+
                    '		await delay(1);\n'+
                    '		time = time - 1;\n'+
                '	}\n';
  else if(value_status == "back")
    var code = '//RoboFly back command\n'+
                'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xB0,0x04,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE0");\n'+ //1200(1500t)
//                 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0x14,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x10");\n'+ //1300(1500t)
//                 'await delay('+ value_time +');\n';
                'var time = '+ value_time +';\n'+
                'while(time >= 0)\n'+
                '	{\n'+
                    '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xB0,0x04,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE0");\n'+
                    '		await delay(1);\n'+
                    '		time = time - 1;\n'+
                '	}\n';
  return code;
};

Blockly.JavaScript['robofly_move'] = function(block) {
  var value_status = block.getFieldValue('move_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "right")
    var code = '//RoboFly turn right command\n'+
                  'send_data("0x24,0x4D,0x3C,0x10,0xC8,0x08,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x5B");\n'+ //1800(1500t)
//                   'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xA4,0x06,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xA3");\n'+ //1700(1500t)
//                   'await delay('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0x08,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x5B");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
  else if(value_status == "left")
    var code = '//RoboFly turn left command\n'+
                  'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xB0,0x04,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE0");\n'+ //1200(1500t)
//                 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0x14,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x10");\n'+ //1300(1500t)
//                 'await delay('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xB0,0x04,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE0");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
  return code;
};

Blockly.JavaScript['robofly_deflection'] = function(block) {
  var value_status = block.getFieldValue('deflection_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "right")
    var code = '//RoboFly yaw right command\n'+
                'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0x08,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x5B");\n'+ //1800(1500t)
//                 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xA4,0x06,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xA3");\n'+ //1700(1500t)
//                 'await delay('+ value_time +');\n';
                'var time = '+ value_time +';\n'+
                'while(time >= 0)\n'+
                '	{\n'+
                    '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0x08,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x5B");\n'+
                    '		await delay(1);\n'+
                    '		time = time - 1;\n'+
                '	}\n';
  else if(value_status == "left")
    var code = '//RoboFly yaw left command\n'+
                'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xB0,0x04,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE0");\n'+ //1200(1500t)
//                 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0x14,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x10");\n'+ //1300(1500t)
//                 'await delay('+ value_time +');\n';
                'var time = '+ value_time +';\n'+
                'while(time >= 0)\n'+
                '	{\n'+
                    '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xB0,0x04,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE0");\n'+
                    '		await delay(1);\n'+
                    '		time = time - 1;\n'+
                '	}\n';
  return code;
};

Blockly.JavaScript['robofly_landing'] = function(block) {
  var code = '//RoboFly landing command\n'+
//               'send_data(landing(1800));\n'+
//               'await delay(1)\n'+
//               'send_data(landing(1750));\n'+
//               'await delay(1)\n'+              
              'send_data(landing(1600));\n'+
              'await delay(1)\n'+
              'send_data(landing(1550));\n'+
              'await delay(1)\n'+
              'send_data(landing(1500));\n'+
              'await delay(1)\n'+              
              'send_data(landing(1450));\n'+
              'await delay(1)\n'+
              'send_data(landing(1400));\n'+
              'await delay(1)\n';
  return code;
};
