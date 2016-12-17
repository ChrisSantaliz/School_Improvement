 var issues = [{"schoolName":"Queens voc","issueDescription":"Trash","timestamp":1482001117419,"id":"issue1","votes":0},{"schoolName":"Queens voc","issueDescription":"Trash","timestamp":1482001119651,"id":"issue2","votes":0},{"schoolName":"Queens voc","issueDescription":"Trash","timestamp":1482001119818,"id":"issue3","votes":0}]
 
 $(document).ready(function(){
   



   
   $("#submit").click(function(event){
      var schoolName =  $("#schoolName").val();
      var issueDescription =  $("#issues").val();
      var issue = {schoolname:schoolName , 
      issuesDescription: issueDescription ,
      timestamp: new Date() .getTime() ,
      id: "issue" + (issues.length + 1) ,
      votes : 0
         
      };
      issues.push(issue);
      console.log(issues);
      updatelist() 
   });

   $("#issuelist").on("click","button",function(event) {
    // get the issue id
    var id = $(this).attr("data-id") ;
    // loop through the issues
    $.each (issues,function(index,issue){
     //increase votes by one
     
    if (issue.id == id ) {
     issue.votes= issue.votes+1
    }
    
    })
    
     updatelist()
     console.log (id)
   })

     updatelist() 
});

function updatelist() {
    $("#issuelist").html("")
     $.each(issues,
      function (index, issue) {
          var html= "<div>" + issue.schoolName + "</div>";
          html += "<p>" + issue.issueDescription + "</p>";
          html += "<button data-id=\""+issue.id+"\"> Vote on this issue : " + issue.votes + "</button>";
          $("#issuelist").append(html)
      });
}

