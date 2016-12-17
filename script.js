 var issues = [{"schoolName":"Queens Voc","issueDescription":"New Bathrooms","timestamp":1482007922868,"id":"issue1","votes":0}]
 
 $(document).ready(function(){
   

   $("#submit").click(function(event){
      var schoolName =  $("#schoolName").val();
      var issueDescription =  $("#issues").val();
      var issue = {schoolName:schoolName , 
      issueDescription: issueDescription ,
      timestamp: new Date() .getTime() ,
      id: "issue" + (issues.length + 1) ,
      votes : 0
         
      };
      issues.push(issue);
      console.log(issues);
      updatelists() 
   });
   $(".issuelist").on("click","button",function(event) {
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
          var html= "<div>" + issue.schoolName + "</div>";
          html += "<p>" + issue.issueDescription + "</p>";
          html += "<button data-id=\""+issue.id+"\"> Vote on this issue : " + issue.votes + "</button>";
          $(listname).append(html)
      });
}
function updatelists () {
    issues.sort (sortfortop)
    updatelist ("#toplist")
    issues.sort (sortingbyrecent)
    updatelist ("#recentlist")
    
}
function sortfortop (issueA,issueB) {
   return issueB.votes-issueA.votes
   
}
function sortingbyrecent (issueA,issueB) { 
   return issueB.timestamp-issueA.timestamp
}
  
