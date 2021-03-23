let ul = $('.task-list')
$('input[type=submit]').click( function (e) {
    e.preventDefault();

    let task = $('input[name=add_task]').val()

    if (task.length > 0) {
        let li = $("<li>", {id: "list", class: "new"});
        let checkbox = $("<input>", {type: "checkbox", id: "in1",class: "check"})
        // let del = $("<span>", {class: "delete"})
        // del.text('x')
        let del = $("<button>" ,{class: "delete"})
        li.append(task)
        li.append(checkbox)
        li.append(del)//.append(del)
        // let li = '<li>' + task + '</li>'
        li.css({
          "font-weight":"bold",
          "color":"darkslategrey"
        })
        ul.append(li)

        $(document).ready(function(){
          $('.check').click(function(event){
            $(this).parent().toggleClass('over');
         });
        }); 

        $(document).ready(function(){
          $('.delete').click(function(event){
              // console.log($(this).parent())
           $(this).parent().addClass('notactive');
         });
       }); 

       if (task.length > 26) {
        alert("Your"+" "+"task"+" "+"very"+" "+"long");
        return li.css({
          "display":"none",
        })
      }

    } else {
      alert("Enter"+" "+"your"+" "+"task")
    } 

})
