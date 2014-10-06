  var socket = require('socket.io-client')('http://exposedgr.com/raspi');
  var SerialPort = require("serialport").SerialPort
  var serialPort = new SerialPort("/dev/teensy",{},false);

  socket.on('connect', function(){
    console.log("connected");
    socket.on('event', function(data){console.log(data)});
    socket.on('disconnect', function(){console.log("disconnected")});
    socket.on('animation', function(data){console.log(data);
      serialPort.open(function(error) {
        if(error) {
          console.log('failed' + error);
        } else {
          console.log('open');
          jsonstr = JSON.parse(data);
          console.log(data[open_animation]);
          serialPort.write("1",function(err,results) {
            console.log('err' + err);
            console.log('results' + results);
          });
        }
      });
    });
    socket.on('state_change', function(data){console.log(data)});
    socket.on('power', function(data){console.log(data)});

  });
