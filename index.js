function newImage(url,left,bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
   
   

}



newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/well.png', 500,425)
newImage('assets/crate.png', 150,200)


function newItem(url, left, bottom){
    let object = newImage(url,left, bottom)
    object.addEventListener('click',() => {
        object.remove()    
    })
    
}

newItem('assets/sword.png', 500, 400)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)


let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let background = document.createElement()
document.body.append('assets/grass.png')
