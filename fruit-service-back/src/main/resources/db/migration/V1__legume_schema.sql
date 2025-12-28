-- Backend Légume: Création de la table Legume
CREATE TABLE IF NOT EXISTS legume (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Function et Trigger pour réinitialiser la séquence de l'ID pour Légume
CREATE OR REPLACE FUNCTION reset_legume_sequence()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM legume) = 0 THEN
    PERFORM setval('legume_id_seq', 1, false);
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_reset_legume
AFTER DELETE ON legume
FOR EACH STATEMENT
EXECUTE FUNCTION reset_legume_sequence();
