//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//The text of each message should be the same, but each message should be personalized with the person’s name.



let members: string[] =[`irtesam`,`yasha`,`ayan`,`naseer`,`isra`,`ishrat`];
let message: string=`kal kis ki shadi hai:`;
for(let i=0; i<members.length; i++){
    console.log(message + members[i]);
} 