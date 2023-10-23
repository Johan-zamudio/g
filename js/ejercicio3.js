//Declaro una var
var PreocioTraje; 

PreocioTraje = prompt("Ingrese el valor del traje");

    if (PreocioTraje > 150000 ) 
{
        Descuento = PreocioTraje * 15 / 100;

        document.write("El precio del traje es: " + PreocioTraje + "\n" + "El descuento del traje es :" + Descuento );
    
}
    else if (PreocioTraje < 150000) 
    {
       Descuento = PreocioTraje * 8 / 100;
       

       document.write("El precio del traje es: " + PreocioTraje + "\n" + "El descuento del traje es :" + Descuento );
       
    }
