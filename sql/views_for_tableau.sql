-- Summary view for dashboard
CREATE VIEW ev_summary AS
SELECT Brand, Model, Range_Km, Efficiency_WhKm, PriceEuro, RapidCharge
FROM electriccardata_clean;

-- Base dataset for visualization
SELECT Brand, Model, Range_Km, PriceEuro
FROM electriccardata_clean;
