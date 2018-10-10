var img = document.images;

function action(chang){
  chang.addEventListener("mouseover", function(){
    this.src = "images/"+this.id+"_2.jpg"
  })

}
for( var i=0; i < img.length; i = i+1){
  action(img[i])
}
