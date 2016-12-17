 var issues = [{"schoolName":"Queens Voc","issueDescription":"New Bathrooms","timestamp":1482007922868,"id":"issue1","votes":0}]
 
 $(document).ready(function(){
   

   $("#submit").click(function(event){
      var schoolName =  $("#school-field").val();
      var issueDescription =  $("#problem-field").val();
      var issue = {schoolName:schoolName , 
      issueDescription: issueDescription ,
      timestamp: new Date() .getTime() ,
      id: "issue" + (issues.length + 1) ,
      votes : 0
      }
      issues.push(issue);
      console.log(issues);
      updatelists() 
   });
   $(".section").on("click","button",function(event) {
    // get the issue id
    var id = $(this).attr("data-id") ;
    // loop through the issues
    $.each (issues,function(index,issue){
     //increase votes by one
    if (issue.id == id ) {
     issue.votes= issue.votes+1
    }
    })
     updatelists()
     console.log (id)
   })
     updatelists() 
});
function updatelist(listname) {
    $(listname).html("")
     $.each(issues,
      function (index, issue) {
          console.log(issue)
          var html = ' <div class="problem"> '+
         '<button class="button" data-id="'+issue.id+'">vote</button>' +
        ' <h2 class="score">' + issue.votes + '</h2>'+
        ' <p class= "field-title">Problem</p> '+
         '<h2 class="problem-name"><span class="description">' + issue.issueDescription +  '</h2>'+
        '<p class= "field-title">School</p> '+
        '<h2 class="school-name">' + issue.schoolName + '</h2>'+
         
   ' </div> '
         // var html= "<div>" + issue.schoolName + "</div>";
         // html += "<p>" + issue.issueDescription + "</p>";
          
         // html += "<button data-id=\""+issue.id+"\"> Vote on this issue : " + issue.votes + "</button>";
          $(listname).append(html)
      });
}
function updatelists () {
    issues.sort (sortfortop)
    updatelist ("#top-issues")
    issues.sort (sortingbyrecent)
    updatelist ("#recent-issues")
    
}
function sortfortop (issueA,issueB) {
   return issueB.votes-issueA.votes
   
}
function sortingbyrecent (issueA,issueB) { 
   return issueB.timestamp-issueA.timestamp
}
  
