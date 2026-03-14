-- Top 10 cars by driving range
SELECT Brand, Model, Range_Km
FROM electriccardata_clean
ORDER BY Range_Km DESC
LIMIT 10;

-- Most energy efficient cars
SELECT Brand, Model, Efficiency_WhKm
FROM electriccardata_clean
ORDER BY Efficiency_WhKm ASC
LIMIT 10;

-- Average EV price
SELECT AVG(PriceEuro) AS Average_Price
FROM electriccardata_clean;

-- Rapid charge availability
SELECT RapidCharge, COUNT(*) AS Total
FROM electriccardata_clean
GROUP BY RapidCharge;

-- Vehicle type distribution
SELECT VehicleType, COUNT(*) AS Total
FROM evindia
GROUP BY VehicleType;

-- Charging stations by region
SELECT region, COUNT(*) AS Total_Stations
FROM electric_vehicle_charging_station_list
GROUP BY region
ORDER BY Total_Stations DESC;

-- Fastest accelerating cars
SELECT Brand, Model, AccelSec
FROM electriccardata_clean
ORDER BY AccelSec ASC
LIMIT 10;

-- Highest top speed cars
SELECT Brand, Model, TopSpeed_KmH
FROM electriccardata_clean
ORDER BY TopSpeed_KmH DESC
LIMIT 10;
