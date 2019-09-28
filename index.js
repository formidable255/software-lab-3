
function onAddPress(){
    var show = document.getElementsByTagName("div")[3].getAttribute("id")
    if(show == 'artist-input'){
        document.getElementsByTagName("div")[3].setAttribute("id", 'artist-input-hide')
    } else {
        document.getElementsByTagName("div")[3].setAttribute("id", 'artist-input')

    }
}
var x = 5;
function add(){

    var name = document.getElementById('name').value;
    var about = document.getElementById('about').value;
    var url = document.getElementById('url').value;
    
    if(name=='', about=='', url==''){
        return 0;
    }
    var newArtistRow = document.createElement('div');
    newArtistRow.className="row justify-content-center";
    
    var artistCol = document.createElement('div')
    artistCol.className="col-md-4 col-md-offset-4 artist"
    artistCol.id="artist"

    var artistImg = document.createElement('img')
    artistImg.className = "img";

    var artistDescription = document.createElement('div')
    artistDescription.className = "desc";

    var deleteButton = document.createElement('button');
    var buttonVal = document.createTextNode('Delete')
    deleteButton.appendChild(buttonVal)
    deleteButton.className = "delete-button"
    deleteButton.onclick = function(e) {
        e.path[2].parentElement.removeChild(e.path[2]);
    }

    var artistName = document.createElement('h3')
    var school= document.createElement('p')

    var nameVal = document.createTextNode(name); 
    artistName.appendChild(nameVal);  
    artistName.className = "name"

    var aboutVal = document.createTextNode(about);
    school.appendChild(aboutVal);
    school.className="name"

    artistImg.src = url;

    artistDescription.append(artistName, aboutVal)

    newArtistRow.appendChild(artistCol).append(artistImg,artistDescription, deleteButton);
    var currentDiv = document.getElementById("artist-insert"); 
    document.body.insertBefore(newArtistRow, currentDiv);



    document.getElementById('name').value ='';
    document.getElementById('about').value='';
    document.getElementById('url').value='';

    onAddPress();

}