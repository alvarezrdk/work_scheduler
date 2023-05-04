// Global Variables
var textValueArr = [];
var hours = [7,8,9,10,11,12,13,14,15,16,17,18];
var hours2 = ["7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM"];

// Function Module to recreate all DOM objects required per Time Slot
$(function schedule() {
  
    for (var x=0; x < hours.length; x++) {
      var div = document.createElement("div");
      var div2 = document.createElement("div");
      var texTarea = document.createElement("texTarea");
      var button = document.createElement("button");
      var iElement = document.createElement("i");
      var currentHour = dayjs().hour();
      var colorHour;
      var hourId;
      
      // Publish current Day
        $( "#currentDay" ).html(dayjs().format('dddd, MMMM DD'));

      // Control Color Code based on past, current and future time slot
        if (hours[x] === currentHour) {
          colorHour = "row time-block present"
        } else if (hours[x] > currentHour) {
          colorHour = "row time-block future"
        } else {
          colorHour = "row time-block past"
        }

      // Construct Business Hours DOM 
        $(".container-lg").append(div);
        $(div).attr({
          id: "hour-"+hours[x],
          class: colorHour
          });
        hourId = "hour-"+hours[x];
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
        $(texTarea).val(localStorage.getItem(hourId)); // Set the values of the corresponding textarea elements
        $(div).append(button);
        $(button).attr("class", "btn saveBtn col-2 col-md-1");
        $(button).attr("aria-label", "save");
        $(button).append(iElement);
        $(iElement).attr("class", "fas fa-save");
        $(iElement).attr("aria-hidden", "true");
    }
  
    // Save in localStorage the corresponding textarea elements and Control event on click save button
    $('.saveBtn').on('click', function () {
      texTarea = $(this).siblings('.description').val();
      hourId = $(this).parent().attr("id");
      localStorage.setItem(hourId, texTarea);
      console.log(texTarea, hourId);
      })
})