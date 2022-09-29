function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
    str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0,pt) + "." + str.slice(pt);
    }
    function getRadioVal(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i=0, len=checkbox.length; i<len; i++) {
    if (radios[i].checked == true) {
    val = radios[i].value;
    break;
    }
    }
    return val;
    }
    //Calcula el subtotal de ingredientes seleccionados
    function getToppingsTotal(e) {
    var form = this.form;
    var val = parseFloat(form.elements['tops_tot'].value);
    if ( this.checked == true ) {
    val += parseFloat(this.value);
    } else {
    val -= parseFloat(this.value);
    }
    form.elements['tops_tot'].value = formatDecimal(val);
    updatePolloTotal(form);
    }
    //Obtiene el subtotal del valor del  de acuerdo al combo
    function getSizePrice(e) {
    this.form.elements['sz_tot'].value = parseFloat(this.value);
    updatePolloTotal(this.form);
}
//Calcula el precio total a cancelar por el poollo tomando en cuenta
//los subtotales de acuerdo al combo y a los ingredientes seleccionados
function updatePolloTotal(form) {
var sz_tot = parseFloat(form.elements['sz_tot'].value);
var tops_tot = parseFloat(form.elements['tops_tot'].value);
form.elements['total'].value = formatDecimal(sz_tot + tops_tot);
}
(function() {
var form = document.getElementById('polloForm');
var el = document.getElementById('pollo_toppings');
// Determinar los ingredientes seleccionados en las casillas de verificación
var tops = el.getElementsByTagName('input');
for (var i=0, len=tops.length; i<len; i++) {
if (tops[i].type === 'checkbox') {
tops[i].onclick = getToppingsTotal;
}
}
var sz = form.elements['size'];
for (var i=0, len=sz.length; i<len; i++) {
sz[i].onclick = getSizePrice;
}
// set sz_tot to value of selected
form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
updatePolloTotal(form);


})();


function commentBox(){
	var comment=document.getElementById('comment').value;
 
	if( comment ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');;
		var txt_message=document.createTextNode(comment);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
clearInterval.getElementById('total').appendChild(parent);
		document.getElementById('comment').value="";
	}
 
}
