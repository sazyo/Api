async function getUsers() {
    
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json(); 
        const userList = document.getElementById('userList');
        userList.innerHTML = '';

        const usersHTML = users.map(user => `
            <li class="user-card">
                <h3>${user.name}</h3>
                <p> ${user.username}</p>
                <p> ${user.email}</p>
                <p> ${user.website}</p>
            </li>
        `).join('');
        userList.innerHTML = usersHTML;
}
getUsers();
