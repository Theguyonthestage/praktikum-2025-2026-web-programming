

export function fetchUsers () {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then ( response => response.json() )
    .then ( data => {
        const matchedUsers = findEmailsForUsersWithLetter(data);
        console.log("Matched users: ", matchedUsers);
        const userEmails = getUserEmails(matchedUsers);
        console.log("User emails: ", userEmails);
    })
    .catch ( error => {console.log("On error: ", error)

    })
    .finally ( error => {
        console.log ("Alwayscalled")
    })
    
    
}

function findEmailsForUsersWithLetter(users, startLetter = "k")     {
    const usersWithLetter = users.filter ( (user) => { 
        const username = user.username.toLowerCase();
        return user.username.startsWith(startLetter.toLowerCase());
    

    } );
    return usersWithLetter

}

function getUserEmails (users) {

    //destruct user and extract it's email using {email}
    return users.map ( ({email}) => email )

}
