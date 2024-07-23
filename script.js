document.addEventListener('DOMContentLoaded', () => {
    fetch('managingmoney-syllabus-parsed.json')
        .then(response => response.json())
        .then(data => {
            const userInfo = document.getElementById('user-info');
            userInfo.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Age: ${data.age}</p>
                <p>Occupation: ${data.occupation}</p>
            `;
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

