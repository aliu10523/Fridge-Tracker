var formLookup = document.getElementById("itemLookup")
var itemName = document.getElementById("item-name")
var categorySelect = document.getElementById("category-name")
const itemInput = document.getElementById('item-name');
const expirationInput = document.getElementById('category-name');
const tableBody = document.querySelector('#fridge-table tbody');
const addItemBtn = document.getElementById('add-item-btn');

var params = {
    fitted: true
  };
  var elem = document.getElementById('draw-shapes');
  var two = new Two(params).appendTo(elem);
  

let fridgeItems = []

let data = []
fetch('./food.json')
    .then((response) => response.json())
    .then((json) => {
        for (var i=0;i<json.length;i++) {
            var option = document.createElement("option")
            option.text = json[i]["category"]
            categorySelect.add(option)
        }
        data = json
});

for (var i=0;i<data.length;i++) {
    var option = document.createElement("option")
    option.text = data[i]["category"]
    categorySelect.add(option)
}        

var expirationDate = 0
function getExpiration() {
    var categoryItem = categorySelect.options[categorySelect.selectedIndex].text
    var expirationDate = 0

    console.log(categoryItem)

    for (var i=0;i<data.length;i++) {
        if (data[i]["category"] == categoryItem) {
            expirationDate = data[i]["duration"]
        }
    }
    return expirationDate
    
}

addItemBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const item = itemInput.value;
    const expirationDate = getExpiration(event);
    var categoryB = categorySelect.options[categorySelect.selectedIndex].text

    if(categoryB === 'Eggs')
        drawItem('eggs', two)
    if(categoryB ===  'Dairy/Milk')
        drawItem('milk', two)
    if(categoryB ===  'Leftovers')
        drawItem('pizza', two)
    if(categoryB ===  'Fresh meat')
        drawItem('meat', two)
    if(categoryB ===  'Ice Cream')
        drawItem('icecream', two)


    console.log(categoryB)
    if (item === '' || expirationDate === '') {
        alert('Please enter both item name and expiration date.');
        return;
    }
    fridgeItems.push({ item, categoryB, expirationDate });
    displayItems();
    clearInputs();
});

function displayItems() {
    tableBody.innerHTML = '';
    for (let i = 0; i < fridgeItems.length; i++) {
        const row = document.createElement('tr');
        const itemName = document.createElement('td');
        itemName.textContent = fridgeItems[i].item;
        itemName.style.padding = "8px 8px";
        row.appendChild(itemName);

        const categoryS = document.createElement('td')
        categoryS.textContent = fridgeItems[i].categoryB;
        categoryS.style.padding = "8px 8px"
        row.appendChild(categoryS)

        const expirationDate = document.createElement('td');
        expirationDate.textContent = fridgeItems[i].expirationDate;
        expirationDate.style.padding = "8px 8px";
        row.appendChild(expirationDate);
        tableBody.appendChild(row);
    }
}


function clearInputs() {
    itemInput.value = '';
}


// Make an instance of two and place it on the page.




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
        var shape = two.makeRectangle(x * 0.95, y * 0.667, texture.image.width, texture.image.height);
        shape.noStroke().fill = texture;
        //scale
        shape.scale = two.height/3200;
    
        two.update()
    })}

  }







  

