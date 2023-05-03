// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function schedule() {
  var hours = [7,8,9,10,11,12,13,14,15,16,17,18];
  var hours2 = ["7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"];

  for (var x=0; x < hours.length; x++) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    var texTarea = document.createElement("texTarea");
    var button = document.createElement("button");
    var iElement = document.createElement("i");
    var currentHour = dayjs().hour();
    var colorHour;
    
      if (hours[x] === currentHour) {
        colorHour = "row time-block present"
      } else if (hours[x] > currentHour) {
        colorHour = "row time-block future"
      } else {
        colorHour = "row time-block past"
      }

      $(".container-lg").append(div);
      $(div).attr({
        id: "hour-"+hours[x],
        class: colorHour
        });
      $(div).last().append(div2);
      $(div2).attr({
        class: "col-2 col-md-1 hour text-center py-3",      
        });
      $(div2).html(hours2[x]);
      $(div).append(texTarea);
      $(texTarea).attr({
        class: "col-8 col-md-10 description",
        rows:"3"      
        });
      $(div).append(button);
      $(button).attr("class", "btn saveBtn col-2 col-md-1");
      $(button).attr("aria-label", "save");
      $(button).append(iElement);
      $(iElement).attr("class", "fas fa-save");
      $(iElement).attr("aria-hidden", "true");

  }

  
}
)

document.addEventListener('click', saveAppointment);

function saveAppointment(event) {
  event.preventDefault();
  var clickEvent = event.target;
  var textValue;
  var hourId;

    if ($(clickEvent).attr("class").includes("saveBtn") || $(clickEvent).attr("class").includes("fa-save")) {
      if ($(clickEvent).attr("class").includes("fa-save")) {
        clickEvent = $(clickEvent).parent();
      }
        textValue = $(clickEvent).prev().val();
        clickEvent = $(clickEvent).parent();
        hourId = $(clickEvent).attr("id");

      console.log(hourId);
      console.log(textValue);

      localStorage.setItem(hourId, textValue);

    }


    /*
    parent = $(childButton).parent();
    parentClass = $(parent).attr("class");
  
    if (parentClass.includes("saveBtn") || ) {
      parent = $(parent).parent();
      parentClass = $(parent).attr("class");
    }
  
  console.log($(parent).attr("id"));
*/
}


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

