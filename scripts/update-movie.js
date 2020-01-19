$(document).ready(function(){
   $(document).on('focus','.data',function(){
    $this=$(this);
    $id=$this.closest('tr').attr('id').split("_");
    $id=$id[1];
    $thisname=$this.val();
    $thisField=$this.attr('name');
    
    if($thisField=="title"){
        $otherfield="description";
    }
    if($thisField=="description"){
        $otherfield="title";
    }
    
    
    $othername=$('tr#movie_'+$id+'.data[name="'+$otherfield+'"]').val();
    
    
    $this.on('focusout',function(){
       $newname=$this.val();
       if($thisname!=$newname){
        
        $.ajax({
        url:"ajax/update-movie.ajax.php",
        type:"POST",
        data:{
            'this_field':$thisField,
            'id':$id,
            'new_name':$newname
        },
        'beforeSend':function(){
          $('.success').removeClass('success').addClass('delete hidden');
          $('#movie_'+$id+'.deletecell div').removeClass('delete hidden').addClass('loader_small');
          
        },
        'success':function(){
           $('.loader_small').removeClass('loader_small').addClass('success');
           
           $(document).on('mouseover','.deletecell', function(){
                $('.success',this).removeClass('hidden success').addClass('delete');
           });
           
        }//end of success
        });//end of ajax
            $output += "<li id='movielist_"+$movieID+"'>";
            $output += "<a href='index.php?movie_id="+$id+"'>";
            if($thisField=="title"){
                $output +=$newname+" "+ $othername+"</a>";    
            }
            if($thisField=="description"){
                $output +=$othername+" "+ $newname+"</a>";
            }
            $output +=$newname+" "+ $description+"</a>";
            $output += "</li>";
            
            $('li#movielist_'+$id).remove();
            $('.movies_menu').append($output);
            $('.movies_menu li').tsort();
       }//end of if 
    });
    
   });
});