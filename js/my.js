


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that submit the form data.
var submit_btn = document.getElementById("submit")

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

submit_btn.onclick = function() {
    modal.style.display = "none"

    var table = document.getElementById("myTable");
    var table_row_length = table.rows.length

// Create row and cells for table.
    var row = table.insertRow(table_row_length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4)

// Create Buttons.
    var view_btn = document.createElement("BUTTON");
    var update_btn = document.createElement("BUTTON");
    var delete_btn = document.createElement("BUTTON");
    var up_btn = document.createElement("BUTTON");
    var down_btn = document.createElement("BUTTON");

// Assigning name to buttons.
    view_btn.innerHTML = "view";
    view_btn.onclick = ViewUpdateFunction;
    view_btn.id = "view_btn";
    update_btn.innerHTML = "update";
    update_btn.id = "update_btn";

    update_btn.onclick = ViewUpdateFunction;
    delete_btn.innerHTML = "delete";
    delete_btn.id = "delete_btn";
    delete_btn.onclick = DeleteFunction;
    up_btn.innerHTML = "up";
    up_btn.id = "up_btn";
    up_btn.onclick = UpFunction;
    down_btn.innerHTML = "down";
    down_btn.id = "down_btn";
    down_btn.onclick = DownFunction;

    var count = 1;
    if (parseInt(table.rows[table_row_length-1].cells[0].innerHTML) >= 1) {
        count += parseInt(table.rows[table_row_length-1].cells[0].innerHTML)
        }

// Assigning values to cells.
    cell1.innerHTML = count;
    cell2.innerHTML = document.getElementById("f-name").value;
    cell3.innerHTML = document.getElementById("l-name").value;
    cell4.innerHTML = document.getElementById("age_id").value;
    cell5.appendChild(view_btn)
    cell5.appendChild(update_btn)
    cell5.appendChild(delete_btn)
    cell5.appendChild(up_btn)
    cell5.appendChild(down_btn)

    document.getElementById("l-name").value = ""
    document.getElementById("f-name").value = ""
    document.getElementById("age_id").value = ""

}

//Actions perform by buttons.
function ViewUpdateFunction() {
    cell_id = this
    $( "#dialog" ).dialog({

            width : 250,
            height: 250,
//            modal : true
            buttons: [
            {
            cell_id: cell_id,
            text: "Update",
            click: UpdateRowData,
            type: "submit"
        },
        {
            text: "Close",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    ]
          });
    var x = document.getElementById("myTable");
      var i;
        for (i = 1; i < x.rows.length; i++) {
        if (x.rows[i].cells[4].childNodes[1].id == this.id || x.rows[i].cells[4].childNodes[0].id == this.id) {
         document.getElementById("first-name").value = x.rows[i].cells[1].innerHTML
         document.getElementById("last-name").value = x.rows[i].cells[2].innerHTML
         document.getElementById("age").value = x.rows[i].cells[3].innerHTML
        }
      }
}


function DeleteFunction() {
  var x = document.getElementById("myTable");
  var i;
  for (i = 1; i < x.rows.length; i++) {
    if (x.rows[i].cells[4].childNodes[2].id == this.id) {
        x.deleteRow(i);
    }
  }
}


function UpFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "lime";
}


function DownFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "lime";
}



function UpdateRowData() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "lime";

}