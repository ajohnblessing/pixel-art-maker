//document for pixelCanvas gotten from the document(index.html) and stored as dammy variable
let dammy = document.getElementById('pixelCanvas');
//here i extracted the submit button from (index.html) and stored it as submit
let submit = document.getElementById('submit');
//console.log was placed outside the event
console.log("this was placed outside of the event");

//i created a table row data
let tr = document.createElement('tr');
//i also created a table data element
let td = document.createElement('td');

/*the function below was used to make the grid and this was done by creating a nested loop. 
the outside loop contained the value of the height from (index,html) page while the inner 
loop carries the value of the width
the outer loop continues to run provided a is <= height
the inner loops continues to run provided b <= width
a click event listener was added to each table data (td) so that whenever we click the td 
an event will run and chanfe the background colour
*/
function makeGrid(event)
{
   //prevent defualt stops the submit button from exiting its own execution immediately
    event.preventDefault();
    //here console.log ran the event
    console.log("event is running");
    
    //allOurRows will remove all the preview table rows befor adding a new one . 
    let allOurRows = document.querySelectorAll("tr");
   
    //all the previews table rows were deleted here
    allOurRows.forEach(function(aRow) {
        aRow.remove();
    });

    //this is used to get the height input from the document(index.html) page 
    let height = document.getElementById("inputHeight").value;
    //this is used to get the width input from the document(index.html) page 
    let width = document.getElementById("inputWidth").value;

    //the nested loop used for the grid was created here
    for (a = 1; a <= height;  a = a + 1) {
        //tr is now present in our index.html page at this point
        let appendedTr = dammy.appendChild(tr.cloneNode());
       for (b = 1; b <= width; b = b + 1){ 
           //i appended the table data (td) to the table row (tr) at this point
           let atd = appendedTr.appendChild(td.cloneNode());

           //i added an event listener to each table data (td) at this point
           atd.addEventListener("click", function() {
               //this is where i derived the color values 
               let color = document.getElementById('colorPicker').value;
               // at this point i am setting the current color values for my table data 
               atd.style.backgroundColor = color;
           })
       }
    
    }



}


 //this created a click event listener for the submit button and my event started here
submit.addEventListener("click",makeGrid)
//and it ended here
