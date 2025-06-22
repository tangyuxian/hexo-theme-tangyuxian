/* global hexo */

/**
 * Print welcome message
 */
console.info(`===============================================

  _____                                  _             
 |_   ___ _ _ __   __ _ _   _ _   ___  _(_) __ _ _ __  
   | |/ _\` | '_ \\ / _\` | | | | | | \\ \\/ | |/ _\` | '_ \\ 
   | | (_| | | | | (_| | |_| | |_| |>  <| | (_| | | | |
   |_|\\__,_|_| |_|\\__, |\\__, |\\__,_/_/\\_|_|\\__,_|_| |_|
                  |___/ |___/                      

  Welcome to use Hexo Theme Tangyuxian!
  URL_ADDRESS  https://github.com/tangyuxian/hexo-theme-tangyuxian    

=====================================================`);

/**
 * Check if all dependencies are installed
 */
require('../include/dependency')(hexo);

/**
 * Configuration file checking and migration
 */
require('../include/config')(hexo);

/**
 * Register Hexo extensions and remove Hexo filters that could cause OOM
 */
// require('../include/register')(hexo);
