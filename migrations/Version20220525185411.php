<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220525185411 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE candidature ADD user_id INT NOT NULL, ADD formation_id INT NOT NULL');
        $this->addSql('ALTER TABLE candidature ADD CONSTRAINT FK_E33BD3B8A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE candidature ADD CONSTRAINT FK_E33BD3B85200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('CREATE INDEX IDX_E33BD3B8A76ED395 ON candidature (user_id)');
        $this->addSql('CREATE INDEX IDX_E33BD3B85200282E ON candidature (formation_id)');
        $this->addSql('ALTER TABLE piece_jointe ADD candidatures_id INT NOT NULL');
        $this->addSql('ALTER TABLE piece_jointe ADD CONSTRAINT FK_AB5111D493767DAA FOREIGN KEY (candidatures_id) REFERENCES candidature (id)');
        $this->addSql('CREATE INDEX IDX_AB5111D493767DAA ON piece_jointe (candidatures_id)');
        $this->addSql('ALTER TABLE user ADD ville_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649A73F0036 FOREIGN KEY (ville_id) REFERENCES ville (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649A73F0036 ON user (ville_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE candidature DROP FOREIGN KEY FK_E33BD3B8A76ED395');
        $this->addSql('ALTER TABLE candidature DROP FOREIGN KEY FK_E33BD3B85200282E');
        $this->addSql('DROP INDEX IDX_E33BD3B8A76ED395 ON candidature');
        $this->addSql('DROP INDEX IDX_E33BD3B85200282E ON candidature');
        $this->addSql('ALTER TABLE candidature DROP user_id, DROP formation_id');
        $this->addSql('ALTER TABLE piece_jointe DROP FOREIGN KEY FK_AB5111D493767DAA');
        $this->addSql('DROP INDEX IDX_AB5111D493767DAA ON piece_jointe');
        $this->addSql('ALTER TABLE piece_jointe DROP candidatures_id');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649A73F0036');
        $this->addSql('DROP INDEX IDX_8D93D649A73F0036 ON `user`');
        $this->addSql('ALTER TABLE `user` DROP ville_id');
    }
}
