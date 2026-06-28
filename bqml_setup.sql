-- 1. Create a dataset for our CivicPulse data
CREATE SCHEMA IF NOT EXISTS `civicpulse_ai`;

-- 2. Create a mock historical data table for training the model
-- In a real scenario, this would be years of BBMP pothole/flooding records.
CREATE OR REPLACE TABLE `civicpulse_ai.historical_issues` AS (
  SELECT 14 AS ward_id, 'Monsoon' AS season, 120 AS rainfall_mm, 23 AS pothole_count, 1 AS flood_risk
  UNION ALL SELECT 14, 'Summer', 10, 5, 0
  UNION ALL SELECT 15, 'Monsoon', 90, 12, 1
  UNION ALL SELECT 15, 'Summer', 0, 3, 0
  UNION ALL SELECT 16, 'Monsoon', 150, 40, 1
  UNION ALL SELECT 16, 'Winter', 20, 10, 0
);

-- 3. Train a Logistic Regression model to predict Flood Risk
CREATE OR REPLACE MODEL `civicpulse_ai.flood_predictor`
OPTIONS(
  model_type='LOGISTIC_REG',
  input_label_cols=['flood_risk']
) AS
SELECT
  ward_id,
  season,
  rainfall_mm,
  pothole_count,
  flood_risk
FROM
  `civicpulse_ai.historical_issues`;

-- 4. Test the model (This is what the Node.js backend will run live!)
-- SELECT * FROM ML.PREDICT(
--   MODEL `civicpulse_ai.flood_predictor`,
--   (SELECT 14 AS ward_id, 'Monsoon' AS season, 130 AS rainfall_mm, 25 AS pothole_count)
-- );
