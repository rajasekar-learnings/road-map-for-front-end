/*
🟩 𝗠𝗢𝗡𝗚𝗢𝗗𝗕 𝗥𝗢𝗔𝗗𝗠𝗔𝗣 (Every Concept — Beginner → Advanced)

🟢 1. Introduction to Databases
    What is a database?
    SQL vs NoSQL difference
    When to use MongoDB
    MongoDB architecture overview
    BSON (Binary JSON) concept

🟩 2. Setup & Tools
    Install MongoDB locally
    Using MongoDB Atlas (Cloud)
    Mongo Shell vs MongoDB Compass
    Connecting from Node.js (Mongoose / native driver)
    Basic Mongo shell commands

🟢 3. Basic CRUD Operations
    Create: 
        insertOne(), insertMany()
    Read:
        find(), findOne()
        Filtering with operators ($eq, $gt, $lt, $in, $nin)
        Projections (select specific fields)
    Update:
        updateOne(), updateMany()
        $set, $inc, $push, $pull, $addToSet
    Delete:
        deleteOne(), deleteMany()

🟩 4. MongoDB Data Model
    Documents, Collections, Databases
    Documents are JSON-like
    ObjectId explained
    Embedding vs Referencing
    Data modeling best practices (denormalization)
    One-to-one, One-to-many, Many-to-many

🟢 5. Schema Design with Mongoose
    What is Mongoose and why use it?
    Defining Schema & Model
    Data types (String, Number, Date, Boolean, Array, ObjectId)
    Schema options (timestamps, versionKey)
    Schema validation (required, enum, min, max, match)
    Virtual fields
    Pre and Post hooks (pre, post)
    Indexing via schema

🟩 6. Querying Data
    Filtering documents
    Chaining queries (.find().sort().limit().skip())
    Logical operators ($and, $or, $not)
    Element operators ($exists, $type)
    Array operators ($elemMatch, $all, $size)

🟢 7. Indexing & Performance
    What is an index?
    Default _id index
    Creating custom indexes
    Compound indexes
    Text indexes & search
    Unique indexes
    Explain plans (.explain("executionStats"))

🟩 8. Aggregation Framework
    Introduction to Aggregation
    Pipeline stages:
        $match
        $group
        $project
        $sort
        $limit
        $lookup (joins)
        $unwind
        $addFields
    Example: group by category, sum price, sort top results
    Aggregation vs MapReduce

🟢 9. Relationships
    Embedding vs Referencing revisited
    Populate in Mongoose (.populate())
    Nested population
    Managing circular references

🟩 10. Transactions & ACID
    What are transactions?
    Multi-document transactions
    Using session.startTransaction()
    Commit and abort transactions
    Atomic operations

🟢 11. Data Validation & Constraints
    Schema validation (Mongoose / MongoDB JSON Schema)
    Required, enum, regex validation
    Application-level validation

🟩 12. Aggregation Use Cases
    Pagination with $skip and $limit
    Filtering & projections
    Analytics pipelines (sum, average, count)
    Lookup joins with $lookup

🟢 13. MongoDB Indexing & Performance
    Types of indexes: single-field, compound, text, geospatial
    explain() for query performance
    TTL (Time-to-live) indexes
    Covered queries

🟩 14. Backup, Restore, & Security
    mongodump & mongorestore
    User roles & authentication (createUser)
    Role-based access control (RBAC)
    IP whitelisting (MongoDB Atlas)
    Encryption in MongoDB

🟢 15. Advanced MongoDB
    Capped collections
    Change streams (real-time updates)
    Sharding concepts
    Replication sets
    Horizontal scaling
    MongoDB transactions in clusters

🟩 16. Integration with Node.js
    Connecting with Mongoose (mongoose.connect)
    Async/await with queries
    CRUD with Express routes
    Error handling (try/catch, validation errors)

🟢 17. Deployment
    MongoDB Atlas setup (cloud database)
    Connection strings and environment variables
    Replica sets for production
    Performance monitoring (Atlas tools)

🟢 18. Real-World Project Ideas
    Todo App (CRUD)
    Blog with Comments (populate + relations)
    E-commerce DB (products, users, orders)
    Chat App DB (change streams)
    Analytics Dashboard (aggregation pipelines)
    Booking system (transactions + constraints)
*/