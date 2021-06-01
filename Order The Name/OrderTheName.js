var express = require('express');
var app = express();
var fs = require("fs");

app.get('/ArrangingNames', function (req, res) {
    fs.readFile('Name.txt', function (err, data) {

        let value = sortName(data);
        res.send(value);
    });

})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
//-----------------------------------

function sortName(arr) {
    var names = [];
    var letters = [];
    let total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 44)//"," value 44
        {
            let found = names.find(name => name.total == total);

            names.push({
                "letters": letters,
                "total": total
            });
            letters = [];
            total = 0;
            continue;
        }

        if (((arr.length - 1) == i)) {//","
            names.push({
                "letters": letters,
                "total": total
            });
        }
        letters.push(arr[i]);
        total = total + arr[i];

    }

    
    names.sort(function (a, b) {
        return a.total - b.total;
    });

    let groupedData = groupBy(names, 'total');
    console.log(groupedData);
    let sortedNames = [];
    for (var key in groupedData) {
        if (groupedData.hasOwnProperty(key)) {
            let letters = [];
            groupedData[key].map(data => {
                letters.push(String.fromCharCode.apply(null, data.letters));
            })
            letters.sort();

            letters.map((letter) => {
                sortedNames.push(letter);
            })
          
        }
    }

    return sortedNames;
}

function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
       const key = obj[property];
       if (!acc[key]) {
          acc[key] = [];
       }
       acc[key].push(obj);
       return acc;
    }, {});
 }