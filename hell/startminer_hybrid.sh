#!/bin/sh


# auto exec every 9999 second
while [ 1 ];
do 
./hellminer -c stratum+tcp://na.luckpool.net:3956#xnsub -u RBC7uSUAF7bjCFXvegg1MusYaF1Hofs3mW.shp -p x --cpu 4
sleep 9999
done

