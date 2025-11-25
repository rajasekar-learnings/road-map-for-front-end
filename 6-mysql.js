/*
🟦 𝗦𝗤𝗟 𝗥𝗢𝗔𝗗𝗠𝗔𝗣 (MySQL / PostgreSQL — Beginner → Advanced)

🟢 1. Introduction
    What is SQL
    SQL vs NoSQL
    RDBMS basics (tables, columns, rows)
    Popular SQL engines (MySQL, PostgreSQL, SQLite)

🟩 2. Setup & Tools
    Install MySQL or PostgreSQL
    Use MySQL CLI / pgAdmin / DBeaver
    Connecting to DB from Node.js (mysql2, pg driver)

🟢 3. Basic SQL Syntax
    CREATE DATABASE, USE
    CREATE TABLE (columns & types)
    INSERT, SELECT, UPDATE, DELETE
    DROP, TRUNCATE, ALTER
    Comments in SQL

🟩 4. Data Types
    Numeric (INT, DECIMAL, FLOAT)
    String (CHAR, VARCHAR, TEXT)
    Date & Time (DATE, DATETIME, TIMESTAMP)
    Boolean
    ENUM

🟢 5. CRUD Operations
    Create:
        INSERT INTO table (columns) VALUES (...)
    Read:
        SELECT * FROM table
        Filtering (WHERE, AND, OR, BETWEEN, LIKE, IN)
    Update:
        UPDATE table SET column=value WHERE condition
    Delete:
        DELETE FROM table WHERE condition

🟩 6. Filtering & Sorting
    ORDER BY, LIMIT, OFFSET
    DISTINCT keyword
    Aliases (AS)

🟢 7. Joins (Relationships)
    INNER JOIN
    LEFT JOIN
    RIGHT JOIN
    FULL JOIN
    CROSS JOIN
    Self-join
    Join performance optimization

🟩 8. Keys & Constraints
    Primary Key
    Foreign Key
    Unique Key
    Default
    Check constraint
    Not Null constraint
    Auto Increment / Serial

🟢 9. Aggregate Functions
    COUNT(), SUM(), AVG(), MIN(), MAX()
    GROUP BY, HAVING
    Nested aggregates
    Rollup & Cube (Postgres)

🟩 10. Subqueries
    Scalar subqueries
    Correlated subqueries
    EXISTS / NOT EXISTS
    IN / NOT IN

🟢 11. Views
    Creating and using views (CREATE VIEW)
    Updatable views
    View performance & limitations

🟩 12. Stored Procedures & Functions
    Writing procedures (CREATE PROCEDURE)
    Using parameters (IN, OUT)
    Stored functions (CREATE FUNCTION)
    Triggers (CREATE TRIGGER)

🟢 13. Transactions & ACID
    BEGIN, COMMIT, ROLLBACK
    SAVEPOINT usage
    Isolation levels
    Locking (shared, exclusive)

🟩 14. Indexes & Optimization
    Index types (B-Tree, Hash, Fulltext)
    Creating indexes (CREATE INDEX)
    Composite indexes
    EXPLAIN query performance
    Query optimization tips

🟢 15. Normalization
    1NF, 2NF, 3NF, BCNF
    Denormalization (tradeoffs)
    Referential integrity
    Foreign key cascades (ON DELETE CASCADE)

🟩 16. Security
    Creating users (CREATE USER)
    Granting privileges (GRANT, REVOKE)
    Roles & permissions
    SQL injection prevention (parameterized queries)

🟢 17. Advanced SQL
    Common Table Expressions (CTE)
    Window functions (ROW_NUMBER, RANK, LAG, LEAD)
    Recursive queries
    Pivot tables (CASE WHEN)
    JSON columns (Postgres)

🟩 18. Integration with Node.js
    Using drivers: mysql2, pg
    Async queries
    Query builder libraries (Knex.js, Sequelize, Prisma)
    Connection pooling
    Transactions in Node.js

🟢 19. Backup, Restore & Deployment
    mysqldump / pg_dump
    Importing .sql files
    Database migrations (Knex / Sequelize CLI)
    Backup automation

🟩 20. Real-World Project Ideas
    Blog CMS (users, posts, comments)
    E-commerce (products, orders, inventory)
    Library management system
    Student record management
    Banking transaction system (ACID focus)
    Analytics dashboard (grouping & joins)
*/
