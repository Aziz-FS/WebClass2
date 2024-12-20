
CREATE TABLE Tourist (
    Email VARCHAR(100) PRIMARY KEY,
    Name VARCHAR(100),
    Password VARCHAR(60),
    Preferences VARCHAR(255),
    Reviews TEXT,
    Ratings numeric(2)
);
-- Below is only for concept or a ralationship
-- CREATE TABLE Dress ( 
--         dress_id,
--         dress_color,
--         FOREIGN KEY (tourist_email) REFERENCES Tourist(Email)
-- )
CREATE TABLE Place (
    place_id VARCHAR(100) PRIMARY KEY,
    Name VARCHAR(100),
    Location VARCHAR(255),
    Coordinates VARCHAR(50),
    Facilities TEXT,
    Description TEXT,
    Photos VARCHAR(255),
    Opening_Hours DATETIME,
    Parking Boolean,
    Price DECIMAL(10,2),
    Rating numeric(2),
    Reviews TEXT,
    Accessibility_Info TEXT,
    Best_Time_To_Visit VARCHAR(100),
    Tourist_Email VARCHAR(1000) 
);

CREATE TABLE Activity (
    activity_id VARCHAR(20) PRIMARY KEY,
    Name VARCHAR(100),
    Type VARCHAR(50),
    Duration VARCHAR(50),
    Price DECIMAL(10,2),
    Difficulty_Level VARCHAR(20),
    Age_Restrictions VARCHAR(50),
    Equipment_Needed TEXT,
    Booking_Requirements TEXT
);

CREATE TABLE Tourist_Place (
    Tourist_Email VARCHAR(100),
    Place_ID VARCHAR(100),
    Visit_Date DATETIME,
    FOREIGN KEY (Tourist_Email) REFERENCES Tourist(Email),
    FOREIGN KEY (Place_ID) REFERENCES Place(place_id),
    PRIMARY KEY (Tourist_Email, Place_ID)
);

CREATE TABLE Tourist_Activity (
    Tourist_Email VARCHAR(100),
    Activity_ID VARCHAR(20),
    Booking_Date DATETIME,
    FOREIGN KEY (Tourist_Email) REFERENCES Tourist(Email),
    FOREIGN KEY (Activity_ID) REFERENCES Activity(activity_id),
    PRIMARY KEY (Tourist_Email, Activity_ID)
);

CREATE TABLE Users (
    user_id VARCHAR(100) PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('admin', 'staff', 'tourist') NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    is_active BOOLEAN DEFAULT TRUE,
    CONSTRAINT chk_role CHECK (role IN ('admin', 'staff', 'tourist'))
);

CREATE TABLE Audit_Log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(100),
    action_type ENUM('create', 'update', 'delete') NOT NULL,
    table_name VARCHAR(50) NOT NULL,
    record_id VARCHAR(100),
    action_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    action_details TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Insert default admin user (password should be hashed in production)
INSERT INTO Users (user_id, username, password, email, role)
VALUES ('ADMIN001', 'admin', 'admin123', 'admin@tourism.com', 'admin');

-- Insert default staff user
INSERT INTO Users (user_id, username, password, email, role)
VALUES ('STAFF001', 'staff1', 'staff123', 'staff1@tourism.com', 'staff'),
('STAFF002', 'staff2', 'staff123', 'staff2@tourism.com', 'staff'),
('STAFF003', 'staff3', 'staff123', 'staff3@tourism.com', 'staff'),
('STAFF004', 'staff4', 'staff123', 'staff4@tourism.com', 'staff'),
('STAFF005', 'staff5', 'staff123', 'staff5@tourism.com', 'staff'),
('STAFF006', 'staff6', 'staff123', 'staff6@tourism.com', 'staff'),
('STAFF007', 'staff7', 'staff123', 'staff7@tourism.com', 'staff'),
('STAFF008', 'staff8', 'staff123', 'staff8@tourism.com', 'staff'),
('STAFF009', 'staff9', 'staff123', 'staff9@tourism.com', 'staff'),
('ADMIN002', 'admin_backup', 'admin123', 'admin_backup@tourism.com', 'admin');



-- CREATE TABLE Tourist_Place (
--     Tourist_Email VARCHAR(100),
--     Place_Name VARCHAR(100),
--     FOREIGN KEY (Tourist_Email) REFERENCES Tourist(Email),
--     FOREIGN KEY (Place_Name) REFERENCES Place(Name),
--     PRIMARY KEY (Tourist_Email, Place_Name)
-- );

-- CREATE TABLE Tourist_Activity (
--     Tourist_Email VARCHAR(100), 
--     Activity_Name VARCHAR(100),
--     FOREIGN KEY (Tourist_Email) REFERENCES Tourist(Email),
--     FOREIGN KEY (Activity_Name) REFERENCES Activity(Name),
--     PRIMARY KEY (Tourist_Email, Activity_Name)
-- );



-- Modify CREATE TABLE statements to include PRIMARY KE