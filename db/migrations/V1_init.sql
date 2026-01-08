-- Tenants
CREATE TABLE tenants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Drinks
CREATE TABLE drinks (
    id SERIAL PRIMARY KEY,
    tenant_id INT REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price NUMERIC(6,2),
    alcoholic BOOLEAN DEFAULT FALSE,
    sweetness INT,
    bitterness INT,
    fruitiness INT,
    dryness INT,
    strength INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Recommendation events
CREATE TABLE recommendation_events (
    id SERIAL PRIMARY KEY,
    tenant_id INT REFERENCES tenants(id) ON DELETE CASCADE,
    recommended_drinks JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
