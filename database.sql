CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  `isAdmin` BOOLEAN NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `note` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  `userId` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`id`, `name`, `email`, `isAdmin`, `password`) VALUES
(1, 'Super Admin', "super@admin.com", 1, 'mypassword');

INSERT INTO `note` (`title`, `content`, `userId`) VALUES
('Test note', 'Test note content', 1);