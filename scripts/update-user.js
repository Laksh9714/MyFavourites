$(document).ready(function(){
   $(document).on('focus','.data',function(){
    $this=$(this);
    $id=$this.closest('tr').attr('id').split("_");
    $id=$id[1];
    $thisname=$this.val();
    $thisField=$this.attr('name');
    
    if($thisField=="firstname"){
        $otherfield="lastname";
    }
    if($thisField=="lastname"){
        $otherfield="firstname";
    }
    
    
    $othername=$('tr#user_'+$id+'.data[name="'+$otherfield+'"]').val();
    
    
    $this.on('focusout',function(){
       $newname=$this.val();
       if($thisname!=$newname){
        
        $.ajax({
        url:"ajax/update-user.ajax.php",
        type:"POST",
        data:{
            'this_field':$thisField,
            'id':$id,
            'new_name':$newname
        },
        'beforeSend':function(){
          $('.success').removeClass('success').addClass('delete hidden');
          $('#user_'+$id+'.deletecell div').removeClass('delete hidden').addClass('loader_small');
          
        },
        'success':function(){
           $('.loader_small').removeClass('loader_small').addClass('success');
           
           $(document).on('mouseover','.deletecell', function(){
                $('.success',this).removeClass('hidden success').addClass('delete');
           });
           
        }//end of success
        });//end of ajax
            $output += "<li id='userlist_"+$userID+"'>";
            $output += "<a href='index.php?user_id="+$id+"'>";
            if($thisField=="firstname"){
                $output +=$newname+" "+ $othername+"</a>";    
            }
            if($thisField=="lastname"){
                $output +=$othername+" "+ $newname+"</a>";
            }
            $output +=$newname+" "+ $lastname+"</a>";
            $output += "</li>";
            
            $('li#userlist_'+$id).remove();
            $('.users_menu').append($output);
            $('.users_menu li').tsort();
       }//end of if 
    });
    
   });
});