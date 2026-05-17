-- ============================================================
-- Sahyadri Enterprises - Database Schema
-- ============================================================

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT,
  brand VARCHAR(100),
  model_number VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(100),
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  tag VARCHAR(100),
  author VARCHAR(100) DEFAULT 'Sahyadri Enterprises',
  published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Clients Table
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  logo_url TEXT,
  icon VARCHAR(100),
  category VARCHAR(100),
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- Contact Enquiries Table
CREATE TABLE IF NOT EXISTS enquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certifications Table
CREATE TABLE IF NOT EXISTS certifications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  badge_text VARCHAR(50),
  description VARCHAR(255),
  display_order INT DEFAULT 0
);

-- Authorized Distributors Table
CREATE TABLE IF NOT EXISTS distributors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  tagline VARCHAR(255),
  logo_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- ============================================================
-- Seed Data
-- ============================================================

INSERT INTO certifications (name, badge_text, description, display_order) VALUES
  ('CE Certified Products', 'CE', 'Conformité Européenne', 1),
  ('GeM Government eMarketplace', 'GeM', 'Government e Marketplace', 2),
  ('ISO Certified Company', 'ISO', 'ISO Certified Company', 3),
  ('MSME Registered', 'MSME', 'Micro Small & Medium Enterprises', 4),
  ('NSIC ISO 9001:2008', 'NSIC', 'ISO 9001:2008', 5),
  ('iStartup India', 'Startup India', 'iStartup India', 6),
  ('T.O.P. Performance', 'T.O.P.', 'Performance', 7);

INSERT INTO distributors (name, tagline, display_order) VALUES
  ('Thermolab Group', 'Precision Thermal Solutions', 1),
  ('LABINDIA Instruments', 'AIMING FOR THE BEST', 2),
  ('iGENE LABSERVE', 'Innovative · Interactive · Intuitive', 3),
  ('Tempo Instruments', 'Quality Instruments', 4);

INSERT INTO services (title, description, icon, display_order) VALUES
  ('Lab Equipment Supply', 'Wide range of precision laboratory instruments and equipment from leading global brands.', 'flask', 1),
  ('Chemical Supply', 'High-purity laboratory chemicals, reagents, and solvents for research and industry.', 'vial', 2),
  ('Calibration & AMC', 'Annual Maintenance Contracts and calibration services to keep your equipment running optimally.', 'tools', 3),
  ('Installation & Support', 'On-site installation, commissioning, and after-sales technical support for all equipment.', 'truck', 4),
  ('Training & Demo', 'Hands-on training sessions and product demonstrations at your facility.', 'graduation-cap', 5),
  ('Consultation', 'Expert consultation to help you choose the right equipment for your laboratory setup.', 'headset', 6);

INSERT INTO products (name, category, description, image_url, is_featured) VALUES
  ('Analytical Instruments', 'Analytical', 'Spectrophotometers, pH meters, conductivity meters, turbidity meters & more.', 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', true),
  ('Thermal Equipment', 'Thermal', 'Ovens, autoclaves, incubators, water baths, heating mantles & furnaces.', 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80', true),
  ('Life Science Equipment', 'Life Science', 'Microscopes, centrifuges, PCR machines, BOD incubators & biosafety cabinets.', 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80', true),
  ('Lab Glassware & Plasticware', 'Glassware', 'Beakers, flasks, pipettes, burettes, measuring cylinders & disposable ware.', 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80', false),
  ('Safety Equipment', 'Safety', 'Lab coats, gloves, goggles, face shields, fume hoods & safety cabinets.', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', false),
  ('Lab Chemicals & Reagents', 'Chemicals', 'AR/LR/GR grade chemicals, culture media, stains, indicators & solvents.', 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', false);

INSERT INTO blog_posts (title, slug, excerpt, tag, image_url) VALUES
  ('How to Choose the Right Laboratory Equipment for Your Needs', 'how-to-choose-lab-equipment', 'Selecting the right instruments for your lab can be challenging. Here is a guide to help you make the best choice for your research needs.', 'Lab Tips', 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80'),
  ('The Importance of Regular Calibration in Research Laboratories', 'importance-of-calibration', 'Regular calibration ensures accurate results. Learn why it matters and how to set up a calibration schedule for your instruments.', 'Industry News', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80'),
  ('Essential Lab Safety Practices Every Scientist Should Follow', 'lab-safety-practices', 'Safety is paramount in any laboratory. Discover the key practices that protect you and your team every day.', 'Safety', 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80');
