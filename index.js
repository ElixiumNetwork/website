const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    res.json(contributors);
    console.log('get contributors');
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);


/////////////////////////////////////////////////////
var repos = null;
var contributors = null;
fetchRepos = async() => {
    let response = await fetch('https://api.github.com/orgs/ElixiumNetwork/repos', {
            headers: {
                'Content-Type': 'application/vnd.github.hellcat-preview+json'
            }
        })
        .then(res => res.json())
    repos = response
    console.log('got repos');
    fetchContributors();
}

fetchContributors = async() => {
    let userArr = []
    for (let i = 0; i < repos.length; i++) {
        let response = await fetch('https://api.github.com/repos/' + repos[i].full_name + '/stats/contributors', {
                headers: {
                    'Content-Type': 'application/vnd.github.hellcat-preview+json'
                }
            })
            .then(res => res.json())
        userArr.push(response);
    }
    userArr = [].concat.apply([], userArr);
    removeDuplicates(userArr)
    console.log("got users")
}

function removeDuplicates(data) {
    let userArr = [];
    let trimmedArray = [];
    let values = [];
    let value;
    // create required array
    for (let i = 0; i < data.length; i++) {
        userArr.push({
            login: data[i].author.login,
            id: data[i].author.id,
            avatar_url: data[i].author.avatar_url,
            html_url: data[i].author.html_url,
            total: data[i].total
        });
    }
    // remove duplicates
    for (var i = 0; i < userArr.length; i++) {
        value = userArr[i]['login'];
        if (values.indexOf(value) === -1) {
            trimmedArray.push(userArr[i]);
            values.push(value);
        }
    }
    trimmedArray.sort((a, b) => b.total - a.total).map(c => c.author)
    contributors = trimmedArray;
    console.log("removed duplicates")

}

fetchRepos();

setInterval(fetchRepos, 43200000);