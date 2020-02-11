/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lampara;
    var marca;
    var descuento;
    var impuesto;

    lampara = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    if(lampara >= 6){

        descuento = (lampara * 35) * 0.5 ;
        document.getElementById("precioDescuento").value = descuento;
        
    } 
    else if(lampara == 5 && marca == "ArgentinaLuz"){
        
        descuento = (lampara * 35) * 0.6;
        document.getElementById("precioDescuento").value = descuento;

       } 
       else if(lampara == 5){
           
            descuento = (lampara * 35) * 0.7;
            document.getElementById("precioDescuento").value = descuento;

        } 
        else if(lampara == 4 && marca == ("ArgentinaLuz" || "FelipeLamparas")){
           
            descuento = (lampara * 35) * 0.75;
            document.getElementById("precioDescuento").value = descuento ;
        } 
        else if(lampara == 4){
            
            descuento = (lampara * 35) * 0.8;
            document.getElementById("precioDescuento").value = descuento;
        }
        else if(lampara == 3 && marca == "ArgentinaLuz"){
           
            descuento = (lampara * 35) * 0.85;
            document.getElementById("precioDescuento").value = descuento;
        }
        else if(lampara == 3 && marca == "FelipeLamparas"){
            
            descuento = (lampara * 35) * 0.9;
            document.getElementById("precioDescuento").value = descuento;
        }
        else if(lampara == 3){
             descuento = (lampara * 35) * 0.95;
            document.getElementById("precioDescuento").value = descuento;
            }
            else{
                descuento =  lampara * 35
                document.getElementById("precioDescuento").value = descuento;
            }
    }