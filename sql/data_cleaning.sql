-- Remove charging stations with missing coordinates
DELETE
FROM electric_vehicle_charging_station_list
WHERE latitude IS NULL OR longitude IS NULL;

-- Remove currency symbol from price
UPDATE electriccardata_clean
SET PriceEuro = REPLACE(PriceEuro, '€', '');

-- Convert price column to numeric
ALTER TABLE electriccardata_clean
MODIFY PriceEuro DECIMAL(12,2);
