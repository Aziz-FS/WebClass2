
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