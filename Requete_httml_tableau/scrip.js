
var tbody= document.getElementById('tbody')


fetch('https://services.yessal-immo.com/service-ads/ads' )
    .then(resp => resp.json())
    .then(json => json.ads)
    .then(ads => buildRows(ads))
    .catch(function(error) {
        console.log(error);
    });



//Injecter les données recupérées dans le body
const buildRows = (ads) => {
    ads.forEach(add => {
    
        var row = document.createElement("tr");
            
        const tdTitle = buildTd(add.title)
        row.appendChild(tdTitle)
       
        const tdCategory = buildTd(add.category)
        row.appendChild(tdCategory)
       
        const tdPrice = buildTd(add.price)
        row.appendChild(tdPrice)
        
        const tdDescription = buildTd(add.description)
        row.appendChild(tdDescription)
    
        tbody.appendChild(row);
        
    });


}

const buildTd = (text) => {
    
    var cell = document.createElement("td");

    var cellText = document.createTextNode(text);
    
    cell.appendChild(cellText);
    return cell
}