 var issues = [{"schoolname":"Queens voc","issuesDescription":"Trash","timestamp":1482001117419,"id":"issue1","votes":0},{"schoolname":"Queens voc","issuesDescription":"Trash","timestamp":1482001119651,"id":"issue2","votes":0},{"schoolname":"Queens voc","issuesDescription":"Trash","timestamp":1482001119818,"id":"issue3","votes":0}]
 
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

     updatelist() 
});

function updatelist() {
    $("#issuelist").html("")
     $.each(issues,
      function (index, issue) {
          var html= "<div>" + issue.issuesDescription + "</div>";
          $("#issuelist").append(html)
      }
          )
}