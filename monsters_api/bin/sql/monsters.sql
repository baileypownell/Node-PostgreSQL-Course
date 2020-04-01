CREATE TABLE monsters(
  id serial, 
  name character varying(50), 
  personality character varying(50)
);

CREATE TABLE habitats(
  id serial,
  name character varying(50),
  climate character varying(50),
  temperature int
);

CREATE TABLE lives(
  monster character varying(50),
  habitat character varying(50)
);

INSERT INTO monsters(name, personality)
VALUES 
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'insightful');

INSERT INTO habitats(name, climate, temperature)
VALUES
('dessert', 'dry', 100),
('forest', 'haunted', 75),
('mountain', 'icy', 25);

INSERT INTO lives(monster, habitat)
VALUES
('Fluffy', 'dessert'),
('Noodles', 'forest'),
('Rusty', 'mountain');