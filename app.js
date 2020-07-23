
var list=document.getElementById('list')

function todoadd(){

    var todoitem=document.getElementById('todo-item')
    var x = document.getElementById('todo-item').value
    
    if (x == "") {
        alert("Task Name must be filled out : ");
        return false;
      }

    //  creating to do item
    // newitem.setAttribute('class','hello')
    var li = document.createElement('li')
    var newitem = document.createTextNode(todoitem.value)
    var some =document.createElement('span')
    some.appendChild(newitem)
    some.setAttribute('class','hello')
    li.setAttribute('class','items')
    li.appendChild(some)


    //  creating  delete button
    var delbtn = document.createElement('button')
    var deltext = document.createTextNode('Delete')
    delbtn.appendChild(deltext)
    delbtn.setAttribute('class','dellbtn btns btn btn-danger mx-2')
    delbtn.setAttribute('onclick','deleteitem(this)')



    // creating edit button

    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')

    editbtn.appendChild(edittext)
    editbtn.setAttribute('class','editbtn btns btn btn-info mx-2')
    editbtn.setAttribute('onclick','edititem(this)')
    var un=document.createElement('hr')

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    li.appendChild(un)
    
    list.appendChild(li)
    todoitem.value= ''
    

    



  



}

function deleteitem(r){

    r.parentNode.remove()

}

function edititem(i){
    
    var item =i.parentNode.firstChild.firstChild.nodeValue
    
    var editvalue=prompt('Enter Updated task here : ' , item)
    i.parentNode.firstChild.firstChild.nodeValue = editvalue


}

function delall(){

    var del=document.getElementById('list');
    del.innerHTML=''



}

