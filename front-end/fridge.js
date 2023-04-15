// Make an instance of two and place it on the page.



var params = {
    fitted: true
  };
  var elem = document.getElementById('draw-shapes');
  var two = new Two(params).appendTo(elem);
  
  var x = two.width * 0.5;
  var y = two.height * 0.5;
  var height = two.height * 0.6;
  var width = height * 0.65



//   var texture = new Two.Texture('milk.jpg', function() {
//     var shape = two.makeRectangle(two.width / 2 - 50, two.height / 2, texture.image.width, texture.image.height);
//     shape.noStroke().fill = texture;
//     //scale
//     shape.scale = 0.4;

//     two.update()
// })




  console.log(height)
  console.log(width)

  var outerRect = two.makeRoundedRectangle(x, y, width + 20, height + 20, 12.5);  
  outerRect.opacity = 0.75
  outerRect.fill = '#b6ddf0'
  outerRect.linewidth = 2
  outerRect.stroke = 'black'
  

  
  var upperRect = two.makeRoundedRectangle(x, y - height * 0.35, width, height/4, 12.5);
  var lowerRect = two.makeRoundedRectangle(x, y + height * 0.15, width, height * 0.7, 12.5);

//   var shelve1 = two.makeLine(x - width/2, y-125, x + width/2, y-125);
//   shelve1.linewidth = 5
//   shelve1.stroke = 'black'

  var shelve2 = two.makeLine(x - width/2, y, x + width/2, y);
  shelve2.linewidth = Math.floor(height/100)
  shelve2.stroke = 'black'

  var shelve3 = two.makeLine(x - width/2, y + height * 0.27100271, x + width/2, y + height * 0.27100271);
  shelve3.linewidth = Math.floor(height/100)
  shelve3.stroke = 'black'
  
  upperRect.opacity = 0.75
  upperRect.fill = 'white'
  upperRect.linewidth = 2
  upperRect.stroke = 'black'

  lowerRect.opacity = 0.75
  lowerRect.fill = 'white'
  lowerRect.linewidth = 2
  lowerRect.stroke = 'black'

  drawItem("milk", two)
  drawItem("eggs", two)
  drawItem("pizza", two)
  drawItem("meat", two)
  drawItem("icecream", two)

  // Don’t forget to tell two to draw everything to the screen
  two.update();



  function drawItem(itemName, two) {
    if(itemName === "milk") {
      var texture = new Two.Texture('milk.jpg', function() {
        var shape = two.makeRectangle(x * .90, y * 0.895, texture.image.width, texture.image.height);
        shape.noStroke().fill = texture;
        //scale
        shape.scale = two.height/2800;
    
        two.update()
    })}

    if(itemName === "eggs") {
      var texture = new Two.Texture('eggs.jpg', function() {
        var shape = two.makeRectangle(x * 1.10, y * 0.905, texture.image.width, texture.image.height);
        shape.noStroke().fill = texture;
        //scale
        shape.scale = two.height/4800;
    
        two.update()
    })}

    if(itemName === "pizza") {
      var texture = new Two.Texture('pizza.jpg', function() {
        var shape = two.makeRectangle(x * 1.10, y * 1.227, texture.image.width, texture.image.height);
        shape.noStroke().fill = texture;
        //scale
        shape.scale = two.height/4800;
    
        two.update()
    })}

    if(itemName === "meat") {
      var texture = new Two.Texture('meat.jpg', function() {
        var shape = two.makeRectangle(x * 0.95, y * 1.527, texture.image.width, texture.image.height);
        shape.noStroke().fill = texture;
        //scale
        shape.scale = two.height/4800;
    
        two.update()
    })}

    if(itemName === "icecream") {
      var texture = new Two.Texture('icecream.png', function() {
        var shape = two.makeRectangle(x * 0.95, y * 0.687, texture.image.width, texture.image.height);
        shape.noStroke().fill = texture;
        //scale
        shape.scale = two.height/4800;
    
        two.update()
    })}

  }







  
