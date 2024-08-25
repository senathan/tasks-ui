const closeBtn = document.getElementById("");
const outputDiv = document.getElementById("outputDiv");

showResult = function () {
    const distance = document.getElementById('inputDistance');
    console.log(distance.value);
    const k = distance.value;
    m=k*1000
    feet=k*3280.84
    inches=k*39370
    cm=k*100000
    outputDiv.innerHTML =`
        <table class='table table-bordered'>
            <tr>
                <th>KM</th>
                <td>${k}</td>
            </tr>
            <tr>
            <th>Feet</th>
            <td>${feet}</td>
        </tr>
        <tr>
        <th>Inches</th>
        <td>${inches}</td>
    </tr>
    <tr>
    <th>CM</th>
    <td>${cm}</td>
</tr>
        </table>
    `

};
