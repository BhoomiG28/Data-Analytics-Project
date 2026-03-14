# SQL Module – Electric Vehicle Charge & Range Analysis

This folder contains all SQL scripts used for **data validation, cleaning, analysis, and visualization preparation** in the *Electric Vehicle Charge and Range Analysis* project.

The SQL workflow is designed to follow a **structured data pipeline**, ensuring data quality and analytical clarity.

---

## 📂 Folder Structure
sql/
├── create_database.sql
├── validation_queries.sql
├── data_cleaning.sql
├── analytical_queries.sql
└── views_for_tableau.sql

---

## 📌 File Descriptions

### 🔹 `create_database.sql`
- Selects (and optionally creates) the database used in this project.
- Acts as the entry point for running all SQL scripts.

---

### 🔹 `validation_queries.sql`
- Verifies dataset integrity before analysis.
- Includes:
  - Row count checks across tables
  - NULL value detection
  - Duplicate record identification

Purpose: **Ensure correctness and consistency of raw data**.

---

### 🔹 `data_cleaning.sql`
- Cleans and standardizes the dataset.
- Includes:
  - Removal of invalid charging station records
  - Currency symbol removal from price fields
  - Data type conversion for numerical analysis

Purpose: **Prepare data for accurate analytics**.

---

### 🔹 `analytical_queries.sql`
- Contains business and analytical insights, such as:
  - Top electric vehicles by range and efficiency
  - Average EV price analysis
  - Rapid charging availability
  - Vehicle type distribution
  - Charging station distribution by region
  - Performance metrics (acceleration and top speed)

Purpose: **Generate insights for decision-making**.

---

### 🔹 `views_for_tableau.sql`
- Creates SQL views for visualization tools (e.g., Tableau).
- Provides a clean, analysis-ready dataset for dashboards.

Purpose: **Enable seamless data visualization**.

---

## 🧠 Execution Flow (Recommended Order)

1. `create_database.sql`
2. `validation_queries.sql`
3. `data_cleaning.sql`
4. `analytical_queries.sql`
5. `views_for_tableau.sql`

---

## 🎯 Key Highlights
- Modular and industry-standard SQL structure
- Separation of validation, cleaning, and analysis logic
- Ready for integration with BI tools like Tableau or Power BI
- Designed for scalability and easy maintenance

---

## 📊 Usage
These SQL scripts support the backend analysis for the Electric Vehicle visualization tool and provide clean, reliable data for dashboards and reporting.

---
