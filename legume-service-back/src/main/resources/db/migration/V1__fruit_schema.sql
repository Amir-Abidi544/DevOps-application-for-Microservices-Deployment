-- Backend Fruit: Création de la table Fruit
CREATE TABLE IF NOT EXISTS fruit (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Function et Trigger pour réinitialiser la séquence de l'ID pour Fruit
CREATE OR REPLACE FUNCTION reset_fruit_sequence()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM fruit) = 0 THEN
    PERFORM setval('fruit_id_seq', 1, false);
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_reset_fruit
AFTER DELETE ON fruit
FOR EACH STATEMENT
EXECUTE FUNCTION reset_fruit_sequence();
