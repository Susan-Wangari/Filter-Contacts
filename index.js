let filterInput = document.getElementById('filterInput');
//adding event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //search input 
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //ul 
    let list = document.getElementById('names');
    //list items
    let names = list.querySelectorAll('li.collection-item'); 
    //loop through the items
    for(let i=0; i< names.length; i++){
        //getting list (a) tags
        let anchors = names[i].getElementsByTagName('a')[0];
        //checking for items matching
        //indexof provides the value of the current iteration
        if(anchors.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            //will display the value that matches
            names[i].style.display = '';
        } else {
            //will display none/nothing
            names[i].style.display = 'none';

        }
    }
}