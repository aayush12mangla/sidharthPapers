
function validate() {
    var element = document.getElementById('input-field');
    element.value = element.value.replace(/[^a-zA-Z]+/, '');
};




function Print_Pages() {
    var data;
    var Grammage_units = document.getElementById("Grammage_units");
    var size_unit = document.getElementById("size_unit");
    var Weight_units = document.getElementById("Weight_units");
    var recycle = document.getElementById("recycle");
    data = {
        quality: document.getElementById('quality').value,
        gram: document.getElementById('gram').value,
        Grammage_units: Grammage_units.options[Grammage_units.selectedIndex].text,

        size: document.getElementById('size').value,
        size_unit: size_unit.options[size_unit.selectedIndex].text,
        grain: document.getElementById('grain').value,
        sheets: document.getElementById('sheets').value,

        weight: document.getElementById('weight').value,
        Weight_units: Weight_units.options[Weight_units.selectedIndex].text,

        rollno: document.getElementById('rollno').value,
        lotNo: document.getElementById('lotNo').value,
        recycle: recycle.options[recycle.selectedIndex].text,
        packingDate: document.getElementById('packingDate').value

    }

    debugger
    var popupWin = window.open("");
    popupWin.document.write(`<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
    
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
   
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700|Roboto:400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        media="screen">
<style>
  tr,  td {
    border: 3px solid black;
    margin-top: 8px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 8px 10px 8px 10px;
  }
  </style>
</head>
<body>
<table id="mytable" >
<tr>
<td rowspan ="7">
    <div class="container">
    
        <form id="Print_data">
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-md-4">
                    <div class="imgs"><img src="images/sppl_Logo.png" width="300" height="150"></div>
                    <h1>UNIT-2</h1>
                    <h5> 7th Km. Moradabad Road,Kashipur - 244713 (UTTARAKHAND)</h5>
                    <h5> EMAIL: <BR>sales.spl@sidharthpapers.com </h5>

                </div>
                </td>
                </tr>
                <tr id="tb_col">
                <td colspan="2">  
                <div class="col-lg-8 col-sm-8 col-md-8">
                                         
                                <h6>PRODUCT NAME</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="fquality">QUALITY</label>                               
                                <h6>${data.quality}</h6>
                            </td>
                            <td>
                                <label for="gram">GRAMMAGE</label><span>${data.Grammage_units}</span>
                                <h6>${data.gram}</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="grain">GRAIN</label>
                                <h6>${data.grain}</h6>
                            </td>
                            <td>
                                <label for="size">SIZE </label><span>${data.size_unit}</span>
                                <h6>${data.size}</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="sheets">NO. OF SHEETS</label>
                                <h6>${data.sheets}</h6>
                            </td>
                            <td>
                                <label for="weight">NET weight</label><span>${data.Weight_units}</span>
                                <h6>${data.weight}</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="rollno">ROLL No.</label>
                                <h6>${data.rollno}</h6>
                            </td>
                            <td>
                                <label for="lotNo.">LOT No.</label>
                                <h6>{${data.lotNo}}C=</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="packingDate">DATE OF PACKING</label><br>
                                <h6>${data.packingDate}</h6>
                            </td>
                            <td>
                                <span><img id="image" src="images\RecycleIcon.jpg" width="22" height="22"><label
                                        for="Recyclable">RECYCLABLE</label></span>
                                        <h6>${data.recycle}</h6>
                            </td>
                        </tr>
                    </table>                    
                </div>
            </div>

        </form>
    </div>
</body>
</html>
`);
    
    popupWin.print();
    popupWin.close();
    location.reload();


}
