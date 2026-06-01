CREATE TABLE t_p19203128_quantum_computing_in.rsvp_responses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    attending TEXT,
    allergies TEXT,
    music TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);