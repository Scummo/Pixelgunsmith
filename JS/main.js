$(document).ready(function(){

  var weaponArray = ['kalash', 'kolt'];

  function loadWeapon(weaponname){

    var weaponObject = eval(weaponname);
    $('.gunframe').attr('id', weaponObject.name);
    $('#stock').attr("src", "Assets/Weapons/" + weaponObject.name + "/stock/" + weaponObject["stock_array"][0] + ".png");
    $('#body').attr("src", "Assets/Weapons/" + weaponObject.name + "/body/" + weaponObject["body_array"][0] + ".png");
    $('#grip').attr("src", "Assets/Weapons/" + weaponObject.name + "/grip/" + weaponObject["grip_array"][0] + ".png");
    $('#mag').attr("src", "Assets/Weapons/" + weaponObject.name + "/mag/" + weaponObject["mag_array"][0] + ".png");
    $('#frontgrip').attr("src", "Assets/Weapons/" + weaponObject.name + "/frontgrip/" + weaponObject["frontgrip_array"][0] + ".png");
    $('#barrel').attr("src", "Assets/Weapons/" + weaponObject.name + "/barrel/" + weaponObject["barrel_array"][0] + ".png");

    $('.guntitle').html(weaponObject.displayName);

  }

  //Loading a gun into the gunframe
  loadWeapon(weaponArray[0]);   //have to be the same
  var loadedWeapon = 0;         //have to be the same

  //weapon switching
  $("#prevweapon").click(function() {
    if(loadedWeapon == 0){

      loadWeapon(weaponArray[weaponArray.length - 1]);
      loadedWeapon = weaponArray.length - 1;

    } else if(loadedWeapon > 0){

      loadWeapon(weaponArray[loadedWeapon - 1]);
      loadedWeapon -= 1;

    }

  });

  $("#nextweapon").click(function() {
    if(loadedWeapon == weaponArray.length - 1){

      loadWeapon(weaponArray[0]);
      loadedWeapon = 0;

    } else if(loadedWeapon != weaponArray.length - 1){

      loadWeapon(weaponArray[loadedWeapon + 1]);
      loadedWeapon += 1;

    }

  });

  //Part switching
  $(".prev").click(function() {
    var currentWeapon = eval($(".gunframe").attr("id"));
    var partName = $(this).parent().attr("class");

    if(currentWeapon["current_" + partName + "ID"] != currentWeapon[partName + "_array"].length - 1){

      $("#" + partName).attr("src", "Assets/Weapons/" + currentWeapon.name + "/" + partName + "/" + currentWeapon[partName + "_array"][currentWeapon["current_" + partName + "ID"] += 1] + ".png");

    } else {

      currentWeapon["current_" + partName + "ID"] = 0;
      $("#" + partName).attr("src", "Assets/Weapons/" + currentWeapon.name + "/" + partName + "/" + currentWeapon[partName + "_array"][currentWeapon["current_" + partName + "ID"]] + ".png");

    }

    console.log(
      "Debug: \n Weapon:           " + currentWeapon.name +
      "\n Clicked part:     " + partName +
      "\n Image src:        " + $("#" + partName).attr("src") +
      "\n Part ID:          " + currentWeapon["current_" + partName + "ID"]
    );

  });

  $(".next").click(function() {
    var currentWeapon = eval($(".gunframe").attr("id"));
    var partName = $(this).parent().attr("class");

    if(currentWeapon["current_" + partName + "ID"] > 0){

      $("#" + partName).attr("src", "Assets/Weapons/" + currentWeapon.name + "/" + partName + "/" + currentWeapon[partName + "_array"][currentWeapon["current_" + partName + "ID"] -= 1] + ".png");

    } else if(currentWeapon["current_" + partName + "ID"] <= 0){

      currentWeapon["current_" + partName + "ID"] = currentWeapon[partName + "_array"].length - 1;
      $("#" + partName).attr("src", "Assets/Weapons/" + currentWeapon.name + "/" + partName + "/" + currentWeapon[partName + "_array"][currentWeapon["current_" + partName + "ID"]] + ".png");

    }
    /*
    console.log(
      "Debug: \n Weapon:           " + currentWeapon.name +
      "\n Clicked part:     " + partName +
      "\n Image src:        " + $("#" + partName).attr("src") +
      "\n Part ID:          " + currentWeapon["current_" + partName + "ID"]
    );
    */

  });

});
