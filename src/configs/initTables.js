const pool = require("../services/db");

const SQLSTATEMENT = `
DROP TABLE IF EXISTS guests;

CREATE TABLE guests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    diploma VARCHAR(255) NOT NULL,
    gradYear INT NOT NULL
);

INSERT INTO guests (name, email, diploma, gradYear)
VALUES 
    ('John Doe', 'john.doe@example.com', 'DIT', 2010),
    ('Emily Clark', 'emily.clark@example.com', 'DIT', 2011),
     ('David Wilson', 'david.wilson@example.com', 'DISM', 2014),
     ('Sophia Martinez', 'sophia.martinez@example.com', 'DAAA', 2022),
     ('James Taylor', 'james.taylor@example.com', 'DIT', 2008),
     ('Olivia Lee', 'olivia.lee@example.com', 'DISM', 2015),
    ('Jane Smith', 'jane.smith@example.com', 'DISM', 2012),
    ('Alice Johnson', 'alice.johnson@example.com', 'DAAA', 2023),
    ('Bob Brown', 'bob.brown@example.com', 'DIT', 2009),
    ('Charlie Davis', 'charlie.davis@example.com', 'DISM', 2013);


DROP TABLE IF EXISTS diplomas;
CREATE TABLE diplomas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diploma TEXT NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO diplomas (diploma, description)
VALUES 
    ('DIT', 'Diploma in Information Technology'),
    ('DCDF', 'Diploma in Cybersecurity and Digital Forensics'),
    ('DAAA', 'Diploma in Applied Artificial Intelligence and Analytics'),
    ('DISM', 'Diploma in Infocomm Security Management');
`;

pool.query(SQLSTATEMENT, (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables created successfully:", results);
  }
  process.exit();
});