-- Row count validation
SELECT COUNT(*) FROM evindia;
SELECT COUNT(*) FROM electriccardata_clean;
SELECT COUNT(*) FROM electric_vehicle_charging_station_list;
SELECT COUNT(*) FROM `cheapestelectriccars-evdatabase`;

-- NULL latitude / longitude check
SELECT *
FROM electric_vehicle_charging_station_list
WHERE latitude IS NULL OR longitude IS NULL;

-- NULL range or price check
SELECT *
FROM electriccardata_clean
WHERE Range_Km IS NULL OR PriceEuro IS NULL;

-- Duplicate car entries
SELECT Car, COUNT(*)
FROM evindia
GROUP BY Car
HAVING COUNT(*) > 1;
